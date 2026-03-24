#!/usr/bin/env node
import fs from 'node:fs/promises';
import { buildHeader, computeStrength, parseCsv, toCsv } from '../lib/strm-core.mjs';

function usage() {
  console.error(
    'Usage: node scripts/bin/strm-map-extracted.mjs --focal "HIPAA" --target "NYDFS" --focal-csv <path> --target-csv <path> --output <path> [--top-k 1] [--review-flags]'
  );
}

function readArg(args, name) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return null;
  return args[idx + 1];
}

const args = process.argv.slice(2);
const focalName = readArg(args, '--focal');
const targetName = readArg(args, '--target');
const focalCsv = readArg(args, '--focal-csv');
const targetCsv = readArg(args, '--target-csv');
const outputPath = readArg(args, '--output');
const topKRaw = readArg(args, '--top-k');
const topK = topKRaw ? Number.parseInt(topKRaw, 10) : 1;
const reviewFlagsEnabled = args.includes('--review-flags');

if (!focalName || !targetName || !focalCsv || !targetCsv || !outputPath) {
  usage();
  process.exit(1);
}
if (!Number.isInteger(topK) || topK < 1) {
  console.error('--top-k must be an integer >= 1');
  process.exit(1);
}

const STOPWORDS = new Set([
  'the', 'and', 'or', 'for', 'with', 'from', 'that', 'this', 'shall', 'must', 'should', 'may', 'can',
  'into', 'onto', 'each', 'any', 'all', 'not', 'are', 'is', 'be', 'by', 'of', 'to', 'in', 'on', 'as',
  'at', 'an', 'a', 'it', 'its', 'their', 'there', 'which', 'who', 'what', 'when', 'where', 'within',
  'without', 'under', 'over', 'such', 'these', 'those', 'than', 'then', 'also', 'only', 'using', 'used',
  'use', 'during', 'section', 'regulation', 'requirement', 'covered', 'entity', 'entities', 'information',
  'systems', 'security', 'cybersecurity', 'health', 'program', 'control', 'controls',
]);

const THEMES = [
  { name: 'access control', words: ['access', 'identity', 'account', 'authorize', 'authentication', 'privilege', 'role'] },
  { name: 'incident response', words: ['incident', 'event', 'respond', 'response', 'report', 'notification', 'recover'] },
  { name: 'risk management', words: ['risk', 'assessment', 'threat', 'vulnerability', 'evaluate'] },
  { name: 'governance and policy', words: ['policy', 'procedure', 'board', 'officer', 'training', 'governance'] },
  { name: 'audit and monitoring', words: ['audit', 'trail', 'log', 'monitor', 'testing', 'review', 'penetration'] },
  { name: 'data protection', words: ['confidentiality', 'integrity', 'availability', 'encrypt', 'nonpublic', 'protect', 'phi'] },
  { name: 'third-party management', words: ['vendor', 'third party', 'service provider', 'outsourcing'] },
];

function clean(value) {
  return String(value ?? '')
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

function firstSentence(text) {
  const t = clean(text);
  const m = t.match(/^[^.!?]{1,420}[.!?]/);
  return m ? m[0] : t.slice(0, 420);
}

function tokenFreq(control) {
  const freq = new Map();
  for (const t of tokenize(`${control.title} ${firstSentence(control.description)} ${control.family}`)) {
    freq.set(t, (freq.get(t) ?? 0) + 1);
  }
  return freq;
}

function tokenSet(freqMap) {
  return new Set(freqMap.keys());
}

function topTokens(freqMap, excludeSet, limit = 3) {
  return [...freqMap.entries()]
    .filter(([t]) => !excludeSet.has(t))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([t]) => t);
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

function hasStrong(text) {
  return /\b(shall|must|required|ensure|implement|maintain)\b/i.test(text);
}

function hasWeak(text) {
  return /\b(should|may|consider|as applicable|addressable)\b/i.test(text);
}

function parseControls(csvText) {
  const rows = parseCsv(csvText).filter((r) => r.some((c) => String(c ?? '').trim() !== ''));
  const header = rows[0].map((h) => String(h).trim());
  const idx = Object.fromEntries(header.map((h, i) => [h, i]));

  return rows
    .slice(1)
    .map((r) => ({
      controlId: clean(r[idx.controlId]),
      title: clean(r[idx.title]),
      family: clean(r[idx.family]),
      description: clean(r[idx.description]),
    }))
    .filter((c) => c.controlId);
}

function classify(src, tgt, metrics) {
  const { score, titleLexical, lexical, overlap, margin } = metrics;
  const srcText = `${src.title} ${src.description}`;
  const tgtText = `${tgt.title} ${tgt.description}`;
  const srcStrong = hasStrong(srcText);
  const tgtStrong = hasStrong(tgtText);
  const srcWeak = hasWeak(srcText);
  const tgtWeak = hasWeak(tgtText);

  const modalConflict = (srcStrong && tgtWeak) || (srcWeak && tgtStrong);
  const strongEqualByTitle = titleLexical >= 0.56 && overlap >= 1 && !modalConflict;
  const strongEqualByBlend = score >= 0.43 && titleLexical >= 0.34 && overlap >= 1 && margin >= 0.02 && !modalConflict;
  const moderateEqualByBlend = score >= 0.30 && titleLexical >= 0.24 && overlap >= 1 && margin >= 0.008 && !modalConflict;
  if (strongEqualByTitle || strongEqualByBlend || moderateEqualByBlend) return 'equal';
  if (srcStrong && tgtWeak) return 'subset_of';
  if (srcWeak && tgtStrong) return 'superset_of';
  if (lexical >= 0.16 || overlap > 0) return 'intersects_with';
  return 'not_related';
}

function confidence(score) {
  if (score >= 0.3) return 'high';
  return 'medium';
}

function relationTail(rel) {
  if (rel === 'equal') return 'The requirements are materially equivalent in scope and intent.';
  if (rel === 'subset_of') return `${focalName} is narrower and fits within ${targetName} scope.`;
  if (rel === 'superset_of') return `${focalName} covers broader scope than ${targetName}.`;
  if (rel === 'intersects_with') return 'They overlap in objective but differ in implementation detail or scope.';
  return 'There is minimal meaningful overlap.';
}

function buildNotes(rel, sharedThemes, srcUnique, tgtUnique) {
  const shared = sharedThemes.length ? sharedThemes.join('; ') : 'none identified';
  const srcScope = srcUnique.length ? srcUnique.join(', ') : 'no focal-only term signal';
  const tgtScope = tgtUnique.length ? tgtUnique.join(', ') : 'no target-only term signal';

  if (rel === 'equal') return `Shared scope: ${shared}. No material divergence detected.`;
  if (rel === 'subset_of') return `Shared scope: ${shared}. ${focalName} emphasizes ${srcScope}; ${targetName} additionally includes ${tgtScope}.`;
  if (rel === 'superset_of') return `Shared scope: ${shared}. ${focalName} additionally includes ${srcScope}; ${targetName} emphasizes ${tgtScope}.`;
  if (rel === 'intersects_with') return `Overlap: ${shared}. Divergence: ${focalName} emphasizes ${srcScope}; ${targetName} emphasizes ${tgtScope}.`;
  return `No substantive thematic overlap detected. Focal terms: ${srcScope}. Target terms: ${tgtScope}.`;
}

function collectReviewFlags({ score, margin, conf, relationship }) {
  const flags = [];
  if (margin < 0.01) flags.push('low_margin');
  if (score < 0.12) flags.push('weak_signal');
  if (conf !== 'high' && score < 0.2) flags.push('medium_confidence');
  if (relationship === 'not_related') flags.push('verify_not_related');
  return flags;
}

const focalText = await fs.readFile(focalCsv, 'utf8');
const targetText = await fs.readFile(targetCsv, 'utf8');

const focalControls = parseControls(focalText).map((c) => {
  const freq = tokenFreq(c);
  const titleFreq = new Map(tokenize(c.title).map((t) => [t, 1]));
  return {
    ...c,
    freq,
    titleFreq,
    tokens: tokenSet(freq),
    themes: themeHits(`${c.title} ${c.description} ${c.family}`),
  };
});

const targetControls = parseControls(targetText).map((c) => {
  const freq = tokenFreq(c);
  const titleFreq = new Map(tokenize(c.title).map((t) => [t, 1]));
  return {
    ...c,
    freq,
    titleFreq,
    tokens: tokenSet(freq),
    themes: themeHits(`${c.title} ${c.description} ${c.family}`),
  };
});

const outRows = [buildHeader(targetName)];

for (const src of focalControls) {
  const scored = [];
  for (const tgt of targetControls) {
    const lexical = jaccard(src.tokens, tgt.tokens);
    const titleLexical = jaccard(tokenSet(src.titleFreq), tokenSet(tgt.titleFreq));
    const overlap = [...src.themes].filter((x) => tgt.themes.has(x)).length;
    const score = titleLexical * 0.45 + lexical * 0.40 + Math.min(0.15, overlap * 0.075);
    scored.push({ tgt, lexical, titleLexical, overlap, score });
  }
  scored.sort((a, b) => b.score - a.score);
  const selected = scored.slice(0, Math.min(topK, scored.length));
  if (selected.length === 0) continue;

  for (let candidateIndex = 0; candidateIndex < selected.length; candidateIndex += 1) {
    const candidate = selected[candidateIndex];
    const nextScore = scored[candidateIndex + 1]?.score ?? 0;
    const margin = candidate.score - nextScore;
    const tgt = candidate.tgt;
    let relationship = classify(src, tgt, { ...candidate, margin });
    if (relationship === 'not_related' && candidate.score > 0.08) relationship = 'intersects_with';

    const conf = confidence(candidate.score);
    const rationaleType = 'functional';
    const strength = computeStrength(relationship, conf, rationaleType).score;

    const sharedThemes = [...src.themes].filter((t) => tgt.themes.has(t));
    const shared = sharedThemes[0] ?? 'security and privacy governance';
    const srcUnique = topTokens(src.freq, tgt.tokens);
    const tgtUnique = topTokens(tgt.freq, src.tokens);

    const rationale = `${focalName} ${src.controlId} requires ${clip(src.description, 180)}. ${targetName} ${tgt.controlId} requires ${clip(tgt.description, 180)}. Both address ${shared}. ${relationTail(relationship)}`;
    let notes = buildNotes(relationship, sharedThemes, srcUnique, tgtUnique);
    if (reviewFlagsEnabled) {
      const flags = collectReviewFlags({ score: candidate.score, margin, conf, relationship });
      if (flags.length > 0) {
        notes = `${notes} Review Flags: ${flags.join(', ')}.`;
      }
    }

    outRows.push([
      src.controlId,
      src.title || src.controlId,
      clip(src.description, 500),
      conf,
      rationaleType,
      rationale,
      relationship,
      String(strength),
      tgt.title || tgt.controlId,
      tgt.controlId,
      clip(tgt.description, 500),
      notes,
    ]);
  }
}

await fs.writeFile(outputPath, toCsv(outRows), 'utf8');

const dataRows = outRows.slice(1);
const relationshipDistribution = dataRows.reduce((acc, row) => {
  const rel = row[6];
  acc[rel] = (acc[rel] ?? 0) + 1;
  return acc;
}, {});
const flaggedRows = dataRows.filter((row) => String(row[11] ?? '').includes('Review Flags:')).length;

console.log(
  JSON.stringify(
    {
      status: 'ok',
      outputPath,
      rowsWritten: outRows.length - 1,
      topK,
      reviewFlagsEnabled,
      flaggedRows,
      relationshipDistribution,
    },
    null,
    2
  )
);
