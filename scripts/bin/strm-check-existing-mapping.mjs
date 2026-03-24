#!/usr/bin/env node
import { findExistingMappings } from '../lib/strm-core.mjs';

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

const focal = arg('--focal');
const target = arg('--target');
const dir = arg('--working-dir') || 'working-directory';

if (!focal || !target) {
  console.error('Usage: node scripts/bin/strm-check-existing-mapping.mjs --focal "Source" --target "Target" [--working-dir working-directory]');
  process.exit(1);
}

const matches = await findExistingMappings(dir, focal, target);
console.log(JSON.stringify({ workingDirectory: dir, focal, target, matchCount: matches.length, matches }, null, 2));
