#!/usr/bin/env node
import fs from 'node:fs/promises';
import { findColumnIndexes, parseCsv, validateDataRow } from '../lib/strm-core.mjs';

function usage() {
  console.error('Usage: node scripts/bin/strm-validate-csv.mjs --file <path-to-strm-csv>');
}

function readArg(args, name) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return null;
  return args[idx + 1];
}

const args = process.argv.slice(2);
const file = readArg(args, '--file');
if (!file) {
  usage();
  process.exit(1);
}

const text = await fs.readFile(file, 'utf8');
const rows = parseCsv(text);

if (rows.length === 0) {
  console.error(JSON.stringify({ status: 'error', message: 'CSV is empty.' }));
  process.exit(2);
}

const header = rows[0];
const idx = findColumnIndexes(header);
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

const errors = [];
const warnings = [];
let dataRows = 0;

for (let i = 1; i < rows.length; i += 1) {
  const row = rows[i];
  const isBlank = row.every((v) => String(v ?? '').trim() === '');
  if (isBlank) continue;

  dataRows += 1;
  const result = validateDataRow(row, idx, i + 1);
  errors.push(...result.errors);
  warnings.push(...result.warnings);
}

const payload = {
  status: errors.length === 0 ? 'pass' : 'fail',
  file,
  totalRowsChecked: dataRows,
  errorCount: errors.length,
  warningCount: warnings.length,
  errors,
  warnings,
};

if (errors.length > 0) {
  console.error(JSON.stringify(payload, null, 2));
  process.exit(2);
}

console.log(JSON.stringify(payload, null, 2));
