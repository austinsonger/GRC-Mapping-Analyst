#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

function runNode(scriptPath, args, cwd) {
  const result = spawnSync('node', [scriptPath, ...args], { cwd, encoding: 'utf8' });
  const stdout = String(result.stdout ?? '').trim();
  const stderr = String(result.stderr ?? '').trim();
  const output = stdout || stderr;
  let json = null;
  if (output) {
    try {
      json = JSON.parse(output);
    } catch {
      json = null;
    }
  }
  return { result, json, stdout, stderr };
}

const repoRoot = process.cwd();
const validateScript = path.join(repoRoot, 'scripts/bin/strm-validate-csv.mjs');
const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'strm-rationale-regression-'));

try {
  const csvPath = path.join(tmpDir, 'rationale-edge-cases.csv');
  const csv = [
    'FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,Target Requirement Title,Target ID #,Target Requirement Description,Notes',
    'F-1,Access Governance,Source control text,high,semantic,Source F-1 states organizations SHALL review access periodically. Target T-1 states organizations SHOULD review access periodically. Both address access review controls.,equal,10,Target Access,T-1,Target text,',
    'F-2,Patch Management,Source patching text,high,semantic,Source F-2 requires patch validation before deployment. Target T-2 requires patch deployment timelines. Both address patch governance.,subset_of,7,Target Patch,T-2,Target patch text,',
    'F-3,Monitoring,Source monitoring text,high,semantic,Source requires logging. Target requires monitoring.,intersects_with,4,Target Monitor,T-3,Target monitoring text,',
  ].join('\n') + '\n';
  await fs.writeFile(csvPath, csv, 'utf8');

  const run = runNode(validateScript, ['--file', csvPath], repoRoot);
  assert.equal(run.result.status, 0, 'validator should pass with warnings only');
  assert.ok(run.json, 'validator should output JSON payload');
  assert.equal(run.json.status, 'pass');

  const warnings = run.json.warnings ?? [];
  assert.ok(
    warnings.some((w) => w.includes('mixed obligation language (SHALL/SHOULD)')),
    'should warn on equal rows with SHALL/SHOULD mismatch'
  );
  assert.ok(
    warnings.some((w) => w.includes('subset_of rationale should explain containment direction')),
    'should warn when subset_of rationale lacks explicit containment language'
  );
  assert.ok(
    warnings.some((w) => w.includes('should reference the FDE#')),
    'should warn when rationale does not reference FDE#'
  );
  assert.ok(
    warnings.some((w) => w.includes('should reference the Target ID #')),
    'should warn when rationale does not reference Target ID #'
  );
  assert.ok(
    warnings.some((w) => w.includes('shared objective statement')),
    'should warn when rationale does not include "Both" shared objective phrasing'
  );

  console.log(
    JSON.stringify(
      {
        status: 'pass',
        tests: [
          'equal SHALL/SHOULD warning',
          'subset_of containment wording warning',
          'rationale ID and shared-objective warnings',
        ],
        tmpDir,
      },
      null,
      2
    )
  );
} finally {
  await fs.rm(tmpDir, { recursive: true, force: true });
}
