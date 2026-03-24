#!/usr/bin/env node
import { buildHeader, toCsv } from '../lib/strm-core.mjs';

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

const target = arg('--target') || 'Target';
const header = buildHeader(target);
console.log(toCsv([header]).trimEnd());
