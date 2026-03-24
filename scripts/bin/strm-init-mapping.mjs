#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import {
  buildHeader,
  generateFilename,
  resolveArtifactDir,
  todayIso,
  toCsv,
} from '../lib/strm-core.mjs';

function usage() {
  console.error(
    'Usage: node scripts/bin/strm-init-mapping.mjs --focal "NIST CSF 2.0" --target "ISO 27001" [--bridge "NIST CSF 2.0"] [--working-dir working-directory] [--date YYYY-MM-DD]'
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
const bridge = readArg(args, '--bridge') || undefined;
const workingDir = readArg(args, '--working-dir') || 'working-directory';
const dateIso = readArg(args, '--date') || todayIso();

if (!focal || !target) {
  usage();
  process.exit(1);
}

const filename = generateFilename(focal, target, bridge);
const artifactDir = resolveArtifactDir(workingDir, focal, target, dateIso);
const csvPath = path.join(artifactDir, filename);

await fs.mkdir(artifactDir, { recursive: true });

const rows = [buildHeader(target)];
await fs.writeFile(csvPath, toCsv(rows), 'utf8');

console.log(
  JSON.stringify(
    {
      status: 'ok',
      artifactDir,
      csvPath,
      filename,
      date: dateIso,
    },
    null,
    2
  )
);
