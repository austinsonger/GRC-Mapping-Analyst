#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  generateFilename,
  parseCsv,
  resolveArtifactDir,
  sanitizeFrameworkName,
  todayIso,
  toCsv,
  findExistingMappings,
} from '../lib/strm-core.mjs';

function usage() {
  console.error(
    'Usage: node scripts/bin/strm-run-workflow.mjs ' +
    '--focal "<Focal>" --target "<Target>" --focal-input <path> --target-input <path> ' +
    '[--bridge "<Bridge>"] [--working-dir working-directory] [--date YYYY-MM-DD] [--manual-qa-done]'
  );
}

function readArg(args, name) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return null;
  return args[idx + 1];
}

function runNode(scriptPath, args) {
  const result = spawnSync('node', [scriptPath, ...args], { encoding: 'utf8' });
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
  return {
    ok: result.status === 0,
    status: result.status ?? 1,
    stdout,
    stderr,
    json,
  };
}

async function normalizeInputCsv({
  inputPath,
  label,
  workingDir,
  binDir,
}) {
  const ext = path.extname(inputPath).toLowerCase();
  if (ext === '.csv') return inputPath;
  if (ext !== '.json') {
    throw new Error(`Unsupported ${label} input format: ${ext}. Use .csv or .json.`);
  }

  const scratchDir = path.join(workingDir, 'scratch');
  await fs.mkdir(scratchDir, { recursive: true });
  const outputCsv = path.join(scratchDir, `${sanitizeFrameworkName(label)}-extracted.csv`);
  const extractScript = path.join(binDir, 'strm-extract-json.mjs');
  const extract = runNode(extractScript, [inputPath, outputCsv]);
  if (!extract.ok) {
    throw new Error(
      `Failed to extract JSON for ${label}: ${extract.stderr || extract.stdout || `exit ${extract.status}`}`
    );
  }
  return outputCsv;
}

const args = process.argv.slice(2);
const focal = readArg(args, '--focal');
const target = readArg(args, '--target');
const bridge = readArg(args, '--bridge') || undefined;
const focalInput = readArg(args, '--focal-input');
const targetInput = readArg(args, '--target-input');
const workingDir = readArg(args, '--working-dir') || 'working-directory';
const dateIso = readArg(args, '--date') || todayIso();
const manualQaDone = args.includes('--manual-qa-done');

if (!focal || !target || !focalInput || !targetInput) {
  usage();
  process.exit(1);
}

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const binDir = scriptDir;
const workingDirAbs = path.resolve(workingDir);
await fs.mkdir(path.join(workingDirAbs, 'scratch'), { recursive: true });

const existing = await findExistingMappings(workingDirAbs, focal, target);

const focalCsv = await normalizeInputCsv({
  inputPath: path.resolve(focalInput),
  label: `${focal}-focal`,
  workingDir: workingDirAbs,
  binDir,
});
const targetCsv = await normalizeInputCsv({
  inputPath: path.resolve(targetInput),
  label: `${target}-target`,
  workingDir: workingDirAbs,
  binDir,
});

const draftCsv = path.join(
  workingDirAbs,
  'scratch',
  `draft-${sanitizeFrameworkName(focal)}-to-${sanitizeFrameworkName(target)}.csv`
);
const mapScript = path.join(binDir, 'strm-map-extracted.mjs');
const mapResult = runNode(mapScript, [
  '--focal', focal,
  '--target', target,
  '--focal-csv', focalCsv,
  '--target-csv', targetCsv,
  '--output', draftCsv,
]);
if (!mapResult.ok) {
  console.error(
    JSON.stringify({
      status: 'error',
      stage: 'draft-mapping',
      message: mapResult.stderr || mapResult.stdout || `exit ${mapResult.status}`,
    }, null, 2)
  );
  process.exit(2);
}

const artifactDir = resolveArtifactDir(workingDirAbs, focal, target, dateIso);
await fs.mkdir(artifactDir, { recursive: true });
const finalFilename = generateFilename(focal, target, bridge);
const finalCsv = path.join(artifactDir, finalFilename);

const draftRows = parseCsv(await fs.readFile(draftCsv, 'utf8'));
await fs.writeFile(finalCsv, toCsv(draftRows), 'utf8');

const reviewLogScript = path.join(binDir, 'strm-init-review-log.mjs');
const reviewLogResult = runNode(reviewLogScript, [
  '--focal', focal,
  '--target', target,
  '--csv', finalCsv,
  '--working-dir', workingDirAbs,
  '--date', dateIso,
]);

const basePayload = {
  status: 'manual_qa_required',
  focal,
  target,
  date: dateIso,
  existingMappingCount: existing.length,
  existingMappings: existing,
  focalCsv,
  targetCsv,
  draftCsv,
  finalCsv,
  artifactDir,
  reviewLog: reviewLogResult.json?.outPath ?? null,
  reviewLogStatus: reviewLogResult.ok ? 'ok' : 'failed',
  nextStep:
    'Perform manual row-by-row adjudication on finalCsv. Re-run this command with --manual-qa-done to run validation and gap report.',
};

if (!manualQaDone) {
  console.log(JSON.stringify(basePayload, null, 2));
  process.exit(0);
}

const validateScript = path.join(binDir, 'strm-validate-csv.mjs');
const validateResult = runNode(validateScript, ['--file', finalCsv, '--focal-csv', focalCsv]);

const validatePayload = validateResult.json ?? {
  status: validateResult.ok ? 'pass' : 'fail',
  message: validateResult.stderr || validateResult.stdout || `exit ${validateResult.status}`,
};

if (!validateResult.ok || validatePayload.status === 'fail') {
  console.error(
    JSON.stringify({
      ...basePayload,
      status: 'validation_failed',
      validation: validatePayload,
    }, null, 2)
  );
  process.exit(2);
}

const gapScript = path.join(binDir, 'strm-gap-report.mjs');
const gapResult = runNode(gapScript, [
  '--file', finalCsv,
  '--focal', focal,
  '--target', target,
  '--working-dir', workingDirAbs,
  '--date', dateIso,
]);

if (!gapResult.ok) {
  console.error(
    JSON.stringify({
      ...basePayload,
      status: 'gap_report_failed',
      validation: validatePayload,
      message: gapResult.stderr || gapResult.stdout || `exit ${gapResult.status}`,
    }, null, 2)
  );
  process.exit(2);
}

console.log(
  JSON.stringify({
    ...basePayload,
    status: 'completed',
    validation: validatePayload,
    gapReport: gapResult.json ?? {},
  }, null, 2)
);
