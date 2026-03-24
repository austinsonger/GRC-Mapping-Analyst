#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { toCsv } from '../lib/strm-core.mjs';

function usage() {
  console.error(
    'Usage: node scripts/bin/strm-extract-json.mjs <input.json> [output.csv]'
  );
}

function stripHtml(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function defaultOutputPath(inputFile) {
  const base = path.basename(inputFile, path.extname(inputFile));
  const framework = base.replace(/[^A-Za-z0-9._-]/g, '_');
  return path.join('working-directory', `${framework}-extracted.csv`);
}

const args = process.argv.slice(2);
const inputFile = args[0];
const outputFile = args[1] || defaultOutputPath(inputFile || '');

if (!inputFile) {
  usage();
  process.exit(1);
}

const text = await fs.readFile(inputFile, 'utf8');
const parsed = JSON.parse(text);
const controls = parsed?.catalog?.securityControls;

if (!Array.isArray(controls)) {
  console.error(
    JSON.stringify(
      {
        status: 'error',
        message: 'Expected JSON path catalog.securityControls[]',
      },
      null,
      2
    )
  );
  process.exit(2);
}

const rows = [['controlId', 'title', 'family', 'description']];

for (const control of controls) {
  rows.push([
    String(control?.controlId ?? control?.id ?? '').trim(),
    String(control?.title ?? '').trim(),
    String(control?.family ?? '').trim(),
    stripHtml(control?.description ?? ''),
  ]);
}

await fs.mkdir(path.dirname(outputFile), { recursive: true });
await fs.writeFile(outputFile, toCsv(rows), 'utf8');

console.log(
  JSON.stringify(
    {
      status: 'ok',
      inputFile,
      outputFile,
      controlsRead: controls.length,
      rowsWritten: rows.length - 1,
    },
    null,
    2
  )
);
