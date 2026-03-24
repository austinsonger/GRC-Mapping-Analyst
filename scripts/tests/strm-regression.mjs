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
  return { result, stdout, stderr, json };
}

function countDataRows(csvText) {
  const lines = csvText.trim().split('\n');
  if (lines.length <= 1) return 0;
  return lines.length - 1;
}

const repoRoot = process.cwd();
const validateScript = path.join(repoRoot, 'scripts/bin/strm-validate-csv.mjs');
const mapScript = path.join(repoRoot, 'scripts/bin/strm-map-extracted.mjs');

const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'strm-regression-'));

try {
  const targetCsv = path.join(tmpDir, 'target.csv');
  const focalCsv = path.join(tmpDir, 'focal.csv');
  const mappingCsv = path.join(tmpDir, 'mapping.csv');
  const mapFocalCsv = path.join(tmpDir, 'map-focal.csv');
  const mapTargetCsv = path.join(tmpDir, 'map-target.csv');
  const outTopK = path.join(tmpDir, 'draft-topk.csv');

  await fs.writeFile(
    targetCsv,
    [
      'controlId,title,family,description',
      'T-1,Access Control,Basic,Must enforce authentication and account review.',
      'T-2,Incident Reporting,Basic,Must detect and report incidents.',
    ].join('\n') + '\n',
    'utf8'
  );

  await fs.writeFile(
    focalCsv,
    [
      'controlId,title,family,description',
      'F-1,Access Governance,Basic,Must enforce account access and reviews.',
      'F-2,Resilience Planning,Basic,Should plan resilience testing.',
      'F-3,Unmapped Control,Basic,Unique obligation with no mapped row.',
    ].join('\n') + '\n',
    'utf8'
  );

  await fs.writeFile(
    mappingCsv,
    [
      'FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,<Target> Requirement Title,Target ID #,<Target> Requirement Description,Notes',
      'F-1,Access Governance,Must enforce account access and reviews.,high,functional,Focal F-1 requires account access reviews. Target T-1 requires authentication and account review. Both address access governance.,intersects_with,4,Target Access,T-1,Must enforce authentication and account review.,',
      'F-1,Access Governance,Must enforce account access and reviews.,high,functional,Focal F-1 requires account access reviews. Target T-1 requires authentication and account review. Both address access governance.,intersects_with,4,Target Access,T-1,Must enforce authentication and account review.,duplicate row',
      'F-2,Resilience Planning,Should plan resilience testing.,medium,functional,Focal F-2 requires resilience planning. Target T-2 requires incident reporting. Both address operational resilience.,intersects_with,3,Target Incident,T-2,Must detect and report incidents.,',
    ].join('\n') + '\n',
    'utf8'
  );

  const duplicateAndHeader = runNode(
    validateScript,
    ['--file', mappingCsv],
    repoRoot
  );
  assert.equal(duplicateAndHeader.result.status, 2, 'validator should fail duplicate/header case');
  assert.ok(duplicateAndHeader.json, 'validator should emit JSON payload');
  assert.equal(duplicateAndHeader.json.status, 'fail');
  assert.ok(
    duplicateAndHeader.json.errors.some((e) => e.includes('unresolved <Target> placeholders')),
    'should report unresolved <Target> placeholder'
  );
  assert.ok(
    duplicateAndHeader.json.errors.some((e) => e.includes('duplicate mapping pair F-1 -> T-1')),
    'should report duplicate FDE# + Target ID# pair'
  );
  assert.ok(
    duplicateAndHeader.json.warnings.some((w) => w.includes('subset_of + superset_of = 0')),
    'should emit distribution warning when containment relationships are absent'
  );

  const coverageStrict = runNode(
    validateScript,
    ['--file', mappingCsv, '--focal-csv', focalCsv, '--strict-coverage'],
    repoRoot
  );
  assert.equal(coverageStrict.result.status, 2, 'validator should fail strict coverage case');
  assert.ok(
    coverageStrict.json.errors.some((e) => e.includes('Coverage check: 1 focal control(s)')),
    'strict coverage should become an error'
  );

  await fs.writeFile(
    mapFocalCsv,
    [
      'controlId,title,family,description',
      'F-A,Access Access,Basic,Must enforce account access controls and authentication.',
      'F-B,Incident Response,Basic,Must report incidents and recover operations quickly.',
    ].join('\n') + '\n',
    'utf8'
  );

  await fs.writeFile(
    mapTargetCsv,
    [
      'controlId,title,family,description',
      'T-A,Account Authentication,Basic,Must enforce authentication and account management.',
      'T-B,Incident Reporting,Basic,Must report security incidents and response actions.',
      'T-C,Asset Inventory,Basic,Maintain inventory of hardware and software assets.',
    ].join('\n') + '\n',
    'utf8'
  );

  const topKRun = runNode(
    mapScript,
    [
      '--focal', 'Focal',
      '--target', 'Target',
      '--focal-csv', mapFocalCsv,
      '--target-csv', mapTargetCsv,
      '--output', outTopK,
      '--top-k', '2',
      '--review-flags',
    ],
    repoRoot
  );
  assert.equal(topKRun.result.status, 0, 'top-k map run should succeed');
  assert.ok(topKRun.json, 'top-k map run should emit JSON');
  assert.equal(topKRun.json.topK, 2);
  assert.equal(topKRun.json.rowsWritten, 4, '2 focal controls with top-k 2 should emit 4 rows');

  const mappedOut = await fs.readFile(outTopK, 'utf8');
  assert.equal(countDataRows(mappedOut), 4, 'output CSV should have expected data row count');
  assert.ok(topKRun.json.flaggedRows < topKRun.json.rowsWritten, 'flagging should not mark every row by default');

  console.log(
    JSON.stringify(
      {
        status: 'pass',
        tests: [
          'validator duplicate/header checks',
          'validator strict coverage check',
          'map-extracted top-k and review flag behavior',
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
