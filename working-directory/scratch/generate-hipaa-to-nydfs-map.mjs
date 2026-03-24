import fs from 'node:fs/promises';
import { parseCsv, toCsv, computeStrength, buildHeader } from '../../scripts/lib/strm-core.mjs';

const sourcePath = 'working-directory/scratch/hipaa-extracted.csv';
const targetPath = 'working-directory/scratch/nydfs-extracted.csv';
const outputPath = 'working-directory/mapping-artifacts/2026-03-24_HIPAA-to-NYDFS/Set Theory Relationship Mapping (STRM)_ [(HIPAA-to-HIPAA)-to-NYDFS] - HIPAA to NYDFS.csv';

const STOPWORDS = new Set([
  'the','and','or','for','with','from','that','this','shall','must','should','may','can','into','onto','each','any','all','not',
  'are','is','be','by','of','to','in','on','as','at','an','a','it','its','their','there','which','who','what','when','where',
  'within','without','under','over','such','these','those','than','then','also','only','using','used','use','during',
  'section','regulation','requirement','covered','entity','entities','information','systems','security','cybersecurity','health'
]);

const THEMES = [
  { name: 'access control', words: ['access','identity','account','authorize','authentication','privilege','role'] },
  { name: 'incident response', words: ['incident','event','respond','response','report','notification','recover'] },
  { name: 'risk management', words: ['risk','assessment','threat','vulnerability','evaluate'] },
  { name: 'governance and policy', words: ['policy','procedure','board','officer','training','governance','program'] },
  { name: 'audit and monitoring', words: ['audit','trail','log','monitor','testing','review','penetration'] },
  { name: 'data protection', words: ['confidentiality','integrity','availability','encrypt','nonpublic','protect','phi'] },
  { name: 'third-party management', words: ['vendor','third party','service provider','outsourcing'] },
];

function clean(text) {
  return String(text ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function clip(text, max = 300) {
  const t = clean(text);
  if (t.length <= max) return t;
  return `${t.slice(0, max - 3).trimEnd()}...`;
}

function tokenize(text) {
  return clean(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w));
}

function tokenSet(control) {
  return new Set(tokenize(`${control.title} ${control.description} ${control.family}`));
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter += 1;
  return inter / (a.size + b.size - inter);
}

function themeHits(text) {
  const lc = clean(text).toLowerCase();
  const hits = new Set();
  for (const theme of THEMES) {
    if (theme.words.some((w) => lc.includes(w))) hits.add(theme.name);
  }
  return hits;
}

function parseControls(csvText) {
  const rows = parseCsv(csvText).filter((r) => r.some((c) => String(c ?? '').trim() !== ''));
  const header = rows[0].map((h) => String(h).trim());
  const idx = Object.fromEntries(header.map((h, i) => [h, i]));

  return rows.slice(1).map((r) => ({
    controlId: clean(r[idx.controlId]),
    title: clean(r[idx.title]),
    family: clean(r[idx.family]),
    description: clean(r[idx.description]),
  })).filter((c) => c.controlId);
}

function bestMatch(source, targets) {
  let best = null;
  for (const t of targets) {
    const lexical = jaccard(source.tokens, t.tokens);
    const overlap = [...source.themes].filter((x) => t.themes.has(x)).length;
    const score = lexical * 0.7 + Math.min(0.3, overlap * 0.15);
    if (!best || score > best.score) best = { t, lexical, overlap, score };
  }
  return best;
}

function hasStrong(text) {
  return /\b(shall|must|required|ensure|implement|maintain)\b/i.test(text);
}

function hasWeak(text) {
  return /\b(should|may|consider|as applicable|addressable)\b/i.test(text);
}

function classify(src, tgt, lexical, overlap) {
  const srcText = `${src.title} ${src.description}`;
  const tgtText = `${tgt.title} ${tgt.description}`;
  const srcStrong = hasStrong(srcText);
  const tgtStrong = hasStrong(tgtText);
  const srcWeak = hasWeak(srcText);
  const tgtWeak = hasWeak(tgtText);

  if (lexical >= 0.55 && overlap >= 2 && srcStrong === tgtStrong) return 'equal';
  if (srcStrong && tgtWeak) return 'subset_of';
  if (srcWeak && tgtStrong) return 'superset_of';
  if (lexical >= 0.16 || overlap > 0) return 'intersects_with';
  return 'not_related';
}

function confidence(score) {
  if (score >= 0.35) return 'high';
  return 'medium';
}

function relationTail(rel) {
  if (rel === 'equal') return 'The requirements are materially equivalent in scope and intent.';
  if (rel === 'subset_of') return 'HIPAA is narrower and fits within the NYDFS requirement scope.';
  if (rel === 'superset_of') return 'HIPAA covers broader scope than the mapped NYDFS requirement.';
  if (rel === 'intersects_with') return 'They overlap in objective but differ in implementation detail or scope.';
  return 'There is minimal meaningful overlap.';
}

const sourceCsv = await fs.readFile(sourcePath, 'utf8');
const targetCsv = await fs.readFile(targetPath, 'utf8');
const sources = parseControls(sourceCsv).map((s) => ({
  ...s,
  tokens: tokenSet(s),
  themes: themeHits(`${s.title} ${s.description} ${s.family}`),
}));
const targets = parseControls(targetCsv).map((t) => ({
  ...t,
  tokens: tokenSet(t),
  themes: themeHits(`${t.title} ${t.description} ${t.family}`),
}));

const outRows = [buildHeader('NYDFS')];

for (const s of sources) {
  const m = bestMatch(s, targets);
  const t = m.t;
  let relationship = classify(s, t, m.lexical, m.overlap);
  if (relationship === 'not_related' && m.score > 0.08) relationship = 'intersects_with';

  const conf = confidence(m.score);
  const rationaleType = 'functional';
  const strength = computeStrength(relationship, conf, rationaleType).score;
  const sharedTheme = [...s.themes].find((th) => t.themes.has(th)) || 'security program governance';

  const rationale = `HIPAA ${s.controlId} requires ${clip(s.description, 180)}. NYDFS ${t.controlId} requires ${clip(t.description, 180)}. Both address ${sharedTheme}. ${relationTail(relationship)}`;

  outRows.push([
    s.controlId,
    s.title || s.controlId,
    clip(s.description, 500),
    conf,
    rationaleType,
    rationale,
    relationship,
    String(strength),
    t.title || t.controlId,
    t.controlId,
    clip(t.description, 500),
    `Auto-mapped via lexical + theme scoring (score=${m.score.toFixed(3)}). Manual review recommended for production use.`,
  ]);
}

await fs.writeFile(outputPath, toCsv(outRows), 'utf8');

const dist = outRows.slice(1).reduce((acc, r) => {
  acc[r[6]] = (acc[r[6]] || 0) + 1;
  return acc;
}, {});

console.log(JSON.stringify({
  status: 'ok',
  outputPath,
  rowsWritten: outRows.length - 1,
  relationshipDistribution: dist,
}, null, 2));
