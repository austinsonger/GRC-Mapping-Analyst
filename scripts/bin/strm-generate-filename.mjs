#!/usr/bin/env node
import { generateFilename } from '../lib/strm-core.mjs';

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

const focal = arg('--focal');
const target = arg('--target');
const bridge = arg('--bridge') || undefined;

if (!focal || !target) {
  console.error('Usage: node scripts/bin/strm-generate-filename.mjs --focal "Source" --target "Target" [--bridge "Bridge"]');
  process.exit(1);
}

console.log(generateFilename(focal, target, bridge));
