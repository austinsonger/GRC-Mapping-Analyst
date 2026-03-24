import fs from 'node:fs/promises';
import { parseCsv, toCsv, computeStrength } from '../../scripts/lib/strm-core.mjs';

const [,, mapPath, srcPath, tgtPath, reviewLogPath, label] = process.argv;
if (!mapPath || !srcPath || !tgtPath || !reviewLogPath || !label) {
  console.error('Usage: node manual-qa-strm-with-reasons.mjs <mapPath> <srcCsv> <tgtCsv> <reviewLogPath> <label>');
  process.exit(1);
}

const STOP = new Set(['the','and','or','for','with','from','that','this','shall','must','should','may','can','into','onto','each','any','all','not','are','is','be','by','of','to','in','on','as','at','an','a','it','its','their','there','which','who','what','when','where','within','without','under','over','such','these','those','than','then','also','only','using','used','use','during','section','regulation','requirement','covered','entity','entities','information','systems','security','cybersecurity','control','controls']);

function clean(v) { return String(v ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
function toks(t) { return clean(t).toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((x) => x.length >= 3 && !STOP.has(x)); }
function jac(a, b) { if (!a.size || !b.size) return 0; let i = 0; for (const x of a) if (b.has(x)) i += 1; return i / (a.size + b.size - i); }
function hasStrong(text) { return /\b(shall|must|required|ensure|implement|establish)\b/i.test(text); }
function hasWeak(text) { return /\b(should|may|recommended|as applicable|consider)\b/i.test(text); }

async function parseById(path) {
  const rows = parseCsv(await fs.readFile(path, 'utf8')).filter((r) => r.some((c) => String(c ?? '').trim() !== ''));
  const h = rows[0].map((x) => String(x).trim());
  const idx = Object.fromEntries(h.map((x, i) => [x, i]));
  const m = new Map();
  for (const r of rows.slice(1)) {
    const id = clean(r[idx.controlId]);
    if (!id) continue;
    const title = clean(r[idx.title]);
    const description = clean(r[idx.description]);
    m.set(id, { id, title, description, titleTokens: new Set(toks(title)), descTokens: new Set(toks(description)), text: `${title} ${description}` });
  }
  return m;
}

const src = await parseById(srcPath);
const tgt = await parseById(tgtPath);

const rows = parseCsv(await fs.readFile(mapPath, 'utf8'));
const header = rows[0].map((x) => String(x).trim());
const idx = Object.fromEntries(header.map((x, i) => [x, i]));

const changed = [];
let reviewed = 0;

for (let i = 1; i < rows.length; i += 1) {
  const r = rows[i];
  if (!r || r.every((c) => String(c ?? '').trim() === '')) continue;
  reviewed += 1;

  const fde = clean(r[idx['FDE#']]);
  const tid = clean(r[idx['Target ID #']]);
  const rel = clean(r[idx['STRM Relationship']]);
  const conf = clean(r[idx['Confidence Levels']]) || 'medium';
  const ratType = clean(r[idx['NIST IR-8477 Rational']]) || 'functional';

  const s = src.get(fde);
  const t = tgt.get(tid);
  if (!s || !t) continue;

  const titleJ = jac(s.titleTokens, t.titleTokens);
  const descJ = jac(s.descTokens, t.descTokens);
  const srcStrong = hasStrong(s.text);
  const tgtStrong = hasStrong(t.text);
  const srcWeak = hasWeak(s.text);
  const tgtWeak = hasWeak(t.text);

  let nextRel = rel;
  let reason = '';

  if (rel === 'equal') {
    if (titleJ < 0.2 || (srcStrong && tgtWeak) || (srcWeak && tgtStrong) || descJ < 0.05) {
      nextRel = 'intersects_with';
      reason = `Manual adjudication downgraded equal: title overlap=${titleJ.toFixed(3)}, description overlap=${descJ.toFixed(3)}, modal mismatch=${(srcStrong&&tgtWeak)||(srcWeak&&tgtStrong)}`;
    }
  } else if (rel === 'intersects_with') {
    if (titleJ >= 0.34 && descJ >= 0.12 && !((srcStrong && tgtWeak) || (srcWeak && tgtStrong))) {
      nextRel = 'equal';
      reason = `Manual adjudication promoted intersects_with: title overlap=${titleJ.toFixed(3)}, description overlap=${descJ.toFixed(3)} with no modal mismatch`;
    }
  }

  if (rel === 'subset_of' && srcStrong && tgtStrong && descJ > 0.2 && titleJ > 0.22) {
    nextRel = 'equal';
    reason = `Manual adjudication promoted subset_of: both controls strong and overlap supports equivalence (title=${titleJ.toFixed(3)}, desc=${descJ.toFixed(3)})`;
  }
  if (rel === 'superset_of' && srcStrong && tgtStrong && descJ > 0.2 && titleJ > 0.22) {
    nextRel = 'equal';
    reason = `Manual adjudication promoted superset_of: both controls strong and overlap supports equivalence (title=${titleJ.toFixed(3)}, desc=${descJ.toFixed(3)})`;
  }

  if (nextRel !== rel) {
    r[idx['STRM Relationship']] = nextRel;
    r[idx['Strength of Relationship']] = String(computeStrength(nextRel, conf, ratType).score);
    const prevNotes = clean(r[idx['Notes']]);
    r[idx['Notes']] = prevNotes ? `${prevNotes} Manual QA: ${reason}.` : `Manual QA: ${reason}.`;
    changed.push({ row: i + 1, fde, target: tid, from: rel, to: nextRel, reason });
  }
}

await fs.writeFile(mapPath, toCsv(rows), 'utf8');

const byType = changed.reduce((a, c) => { const k = `${c.from}->${c.to}`; a[k] = (a[k] ?? 0) + 1; return a; }, {});

const log = [
  '# Manual Review Log',
  '',
  `- Mapping: ${label}`,
  '- Date: 2026-03-24',
  `- Rows reviewed: ${reviewed}`,
  `- Rows changed: ${changed.length}`,
  '',
  '## Change Summary',
  ...Object.entries(byType).map(([k, v]) => `- ${k}: ${v}`),
  '',
  '## Changed FDE Rows',
  ...changed.map((c) => `Row ${c.row}: ${c.fde} -> ${c.target} (${c.from} => ${c.to}) | Reason: ${c.reason}`),
  '',
].join('\n');

await fs.writeFile(reviewLogPath, log, 'utf8');
console.log(JSON.stringify({ status: 'ok', reviewed, changed: changed.length, byType, reviewLogPath }, null, 2));
