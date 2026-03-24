#!/usr/bin/env node
import { listInputFiles } from '../lib/strm-core.mjs';

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

const dir = arg('--dir') || 'working-directory';
const files = await listInputFiles(dir);
console.log(JSON.stringify({ directory: dir, count: files.length, files }, null, 2));
