#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import {
  parseCsv,
  resolveArtifactDir,
  sanitizeFrameworkName,
  todayIso,
} from '../lib/strm-core.mjs';

function usage() {
  console.error(
    'Usage: node scripts/bin/strm-init-review-log.mjs --focal "<Focal>" --target "<Target>" --csv "<path-to-strm-csv>" ' +
    '[--working-dir working-directory] [--date YYYY-MM-DD] [--output "<path-to-log.md>"]'
  );
}

function readArg(args, name) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return null;
  return args[idx + 1];
}

const args = process.argv.slice(2);
const focal = readArg(args, '--focal');
const target = readArg(args, '--target');
const csvPath = readArg(args, '--csv');
const workingDir = readArg(args, '--working-dir') || 'working-directory';
const dateIso = readArg(args, '--date') || todayIso();
const outputOverride = readArg(args, '--output');

if (!focal || !target || !csvPath) {
  usage();
  process.exit(1);
}

const csvText = await fs.readFile(csvPath, 'utf8');
const rows = parseCsv(csvText);
const dataRows = [];
if (rows.length > 1) {
  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    const fde = String(row[0] ?? '').trim();
    const targetId = String(row[9] ?? '').trim();
    if (!fde && !targetId) continue;
    dataRows.push({ rowNumber: i + 1, fde, targetId });
  }
}

const artifactDir = resolveArtifactDir(path.resolve(workingDir), focal, target, dateIso);
await fs.mkdir(artifactDir, { recursive: true });
const defaultName = `Manual_Review_${sanitizeFrameworkName(focal)}-to-${sanitizeFrameworkName(target)}.md`;
const outPath = outputOverride ? path.resolve(outputOverride) : path.join(artifactDir, defaultName);

const rowLines = dataRows.length > 0
  ? dataRows.map((r) => `- [ ] Row ${r.rowNumber}: ${r.fde || '<FDE#>'} -> ${r.targetId || '<Target ID #>'} (<old> => <new>) | Reason: <justification>`).join('\n')
  : '- [ ] Row <n>: <FDE#> -> <Target ID #> (<old> => <new>) | Reason: <justification>';

const content =
  `# Manual Review Log — ${focal} to ${target}\n\n` +
  `- Date: ${dateIso}\n` +
  `- Mapping CSV: ${csvPath}\n\n` +
  `## Summary\n\n` +
  `- Rows reviewed: <count>\n` +
  `- Rows changed: <count>\n` +
  `- Changed FDE IDs: <comma-separated list>\n\n` +
  `## Changed Rows\n\n` +
  `${rowLines}\n`;

await fs.writeFile(outPath, content, 'utf8');

console.log(
  JSON.stringify(
    {
      status: 'ok',
      outPath,
      artifactDir,
      rowTemplateCount: dataRows.length,
    },
    null,
    2
  )
);
