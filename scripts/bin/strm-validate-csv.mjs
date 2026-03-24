#!/usr/bin/env node
import fs from 'node:fs/promises';
import { findColumnIndexes, parseCsv, validateDataRow } from '../lib/strm-core.mjs';

function usage() {
  console.error(
    'Usage: node scripts/bin/strm-validate-csv.mjs --file <path-to-strm-csv> ' +
    '[--focal-csv <path-to-focal-controls-csv>] [--strict-coverage]'
  );
}

function readArg(args, name) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return null;
  return args[idx + 1];
}

const args = process.argv.slice(2);
const file = readArg(args, '--file');
const focalCsv = readArg(args, '--focal-csv');
const strictCoverage = args.includes('--strict-coverage');
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
const seenPairs = new Map();
const mappedFdes = new Set();
const relationCounts = {
  equal: 0,
  subset_of: 0,
  superset_of: 0,
  intersects_with: 0,
  not_related: 0,
};

const unresolvedTargetHeaders = header
  .filter((h) => String(h ?? '').toLowerCase().includes('<target>'))
  .map((h) => String(h ?? '').trim())
  .filter(Boolean);

if (unresolvedTargetHeaders.length > 0) {
  errors.push(
    `Header contains unresolved <Target> placeholders: ${unresolvedTargetHeaders.join(', ')}. ` +
    'Replace with the actual target framework name in columns I and K.'
  );
}

for (let i = 1; i < rows.length; i += 1) {
  const row = rows[i];
  const isBlank = row.every((v) => String(v ?? '').trim() === '');
  if (isBlank) continue;

  dataRows += 1;
  const result = validateDataRow(row, idx, i + 1);
  errors.push(...result.errors);
  warnings.push(...result.warnings);
  if (Object.hasOwn(relationCounts, result.relationship)) {
    relationCounts[result.relationship] += 1;
  }

  const fdeNum = String(row[idx.fdeNum] ?? '').trim();
  const targetId = String(row[idx.targetId] ?? '').trim();
  if (fdeNum) mappedFdes.add(fdeNum);
  if (fdeNum && targetId) {
    const key = `${fdeNum}|||${targetId}`;
    if (seenPairs.has(key)) {
      errors.push(
        `Row ${i + 1}: duplicate mapping pair ${fdeNum} -> ${targetId}. ` +
        `First seen at row ${seenPairs.get(key)}.`
      );
    } else {
      seenPairs.set(key, i + 1);
    }
  }
}

if (dataRows > 0) {
  const subsetSuperset = relationCounts.subset_of + relationCounts.superset_of;
  if (subsetSuperset === 0) {
    warnings.push(
      'Distribution self-check: subset_of + superset_of = 0. Review equal rows; containment may be underused.'
    );
  }
  const equalPct = (relationCounts.equal / dataRows) * 100;
  if (equalPct > 50) {
    warnings.push(
      `Distribution self-check: equal = ${equalPct.toFixed(2)}% (>50%). Reconfirm that scope and obligation are truly identical for equal rows.`
    );
  }
}

if (focalCsv) {
  const focalText = await fs.readFile(focalCsv, 'utf8');
  const focalRows = parseCsv(focalText);
  if (focalRows.length > 0) {
    const focalHeader = focalRows[0].map((v) => String(v ?? '').trim().toLowerCase());
    const preferredColumns = ['controlid', 'fde#', 'id', 'control id'];
    let focalIdIdx = -1;
    for (const name of preferredColumns) {
      focalIdIdx = focalHeader.indexOf(name);
      if (focalIdIdx >= 0) break;
    }
    if (focalIdIdx === -1) focalIdIdx = 0;

    const expectedFdes = new Set();
    for (let i = 1; i < focalRows.length; i += 1) {
      const id = String(focalRows[i][focalIdIdx] ?? '').trim();
      if (id) expectedFdes.add(id);
    }

    const unmapped = [...expectedFdes].filter((id) => !mappedFdes.has(id));
    if (unmapped.length > 0) {
      const msg =
        `Coverage check: ${unmapped.length} focal control(s) have no mapped rows in output CSV. ` +
        `Examples: ${unmapped.slice(0, 10).join(', ')}${unmapped.length > 10 ? ' ...' : ''}`;
      if (strictCoverage) {
        errors.push(msg);
      } else {
        warnings.push(msg);
      }
    }
  } else {
    warnings.push(`Coverage check skipped: focal CSV '${focalCsv}' is empty.`);
  }
}

const payload = {
  status: errors.length === 0 ? 'pass' : 'fail',
  file,
  totalRowsChecked: dataRows,
  errorCount: errors.length,
  warningCount: warnings.length,
  relationshipCounts: relationCounts,
  errors,
  warnings,
};

if (errors.length > 0) {
  console.error(JSON.stringify(payload, null, 2));
  process.exit(2);
}

console.log(JSON.stringify(payload, null, 2));
