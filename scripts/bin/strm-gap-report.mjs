#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import {
  findColumnIndexes,
  parseCsv,
  resolveArtifactDir,
  sanitizeFrameworkName,
  todayIso,
} from '../lib/strm-core.mjs';

function usage() {
  console.error(
    'Usage: node scripts/bin/strm-gap-report.mjs --file <path-to-strm-csv> --focal "Source" --target "Target" [--working-dir working-directory] [--date YYYY-MM-DD]'
  );
}

function readArg(args, name) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return null;
  return args[idx + 1];
}

const args = process.argv.slice(2);
const file = readArg(args, '--file');
const focal = readArg(args, '--focal');
const target = readArg(args, '--target');
const workingDir = readArg(args, '--working-dir') || 'working-directory';
const dateIso = readArg(args, '--date') || todayIso();

if (!file || !focal || !target) {
  usage();
  process.exit(1);
}

const text = await fs.readFile(file, 'utf8');
const rows = parseCsv(text);
if (rows.length === 0) {
  console.error(JSON.stringify({ status: 'error', message: 'CSV is empty.' }));
  process.exit(2);
}

const idx = findColumnIndexes(rows[0]);
const missing = Object.entries(idx)
  .filter(([, v]) => typeof v !== 'number')
  .map(([k]) => k);
if (missing.length > 0) {
  console.error(
    JSON.stringify({
      status: 'error',
      message: `Missing required columns: ${missing.join(', ')}`,
    })
  );
  process.exit(2);
}

const byFde = new Map();
const relationCounts = {
  equal: 0,
  subset_of: 0,
  superset_of: 0,
  intersects_with: 0,
  not_related: 0,
};

let mappedRows = 0;

for (let i = 1; i < rows.length; i += 1) {
  const row = rows[i];
  const fdeNum = String(row[idx.fdeNum] ?? '').trim();
  const relationship = String(row[idx.relationship] ?? '').trim();
  if (!fdeNum || !relationship) continue;

  if (Object.hasOwn(relationCounts, relationship)) {
    relationCounts[relationship] += 1;
  }
  mappedRows += 1;

  if (!byFde.has(fdeNum)) {
    byFde.set(fdeNum, new Set());
  }
  byFde.get(fdeNum).add(relationship);
}

let fullCoverage = 0;
let partialCoverage = 0;
let gapCoverage = 0;

for (const relationships of byFde.values()) {
  if (relationships.has('equal') || relationships.has('subset_of')) {
    fullCoverage += 1;
    continue;
  }
  if (relationships.has('intersects_with')) {
    partialCoverage += 1;
    continue;
  }
  gapCoverage += 1;
}

const totalRel = Object.values(relationCounts).reduce((a, b) => a + b, 0);
const pct = (n) => (totalRel === 0 ? 0 : Number(((n / totalRel) * 100).toFixed(2)));

const report =
  `# STRM Gap Analysis Summary\n\n` +
  `- Source (Focal): ${focal}\n` +
  `- Target (Reference): ${target}\n` +
  `- Generated: ${dateIso}\n` +
  `- Input CSV: ${file}\n\n` +
  `## Coverage by FDE\n\n` +
  `- Full coverage (has equal or subset_of): ${fullCoverage}\n` +
  `- Partial coverage (only intersects_with): ${partialCoverage}\n` +
  `- Gaps (no equal/subset_of/intersects_with): ${gapCoverage}\n\n` +
  `## Relationship Distribution\n\n` +
  `- equal: ${relationCounts.equal} (${pct(relationCounts.equal)}%)\n` +
  `- subset_of: ${relationCounts.subset_of} (${pct(relationCounts.subset_of)}%)\n` +
  `- superset_of: ${relationCounts.superset_of} (${pct(relationCounts.superset_of)}%)\n` +
  `- intersects_with: ${relationCounts.intersects_with} (${pct(relationCounts.intersects_with)}%)\n` +
  `- not_related: ${relationCounts.not_related} (${pct(relationCounts.not_related)}%)\n\n` +
  `## Totals\n\n` +
  `- Mapped rows evaluated: ${mappedRows}\n` +
  `- Distinct FDEs evaluated: ${byFde.size}\n`;

const artifactDir = resolveArtifactDir(workingDir, focal, target, dateIso);
await fs.mkdir(artifactDir, { recursive: true });

const filename = `STRM_Gap_Analysis_${sanitizeFrameworkName(focal)}-to-${sanitizeFrameworkName(target)}.md`;
const outPath = path.join(artifactDir, filename);
await fs.writeFile(outPath, report, 'utf8');

console.log(
  JSON.stringify(
    {
      status: 'ok',
      outPath,
      artifactDir,
      totals: {
        mappedRows,
        distinctFdes: byFde.size,
        fullCoverage,
        partialCoverage,
        gapCoverage,
      },
      relationshipCounts: relationCounts,
    },
    null,
    2
  )
);
