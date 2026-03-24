#!/usr/bin/env node
import { computeStrength } from '../lib/strm-core.mjs';

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

const relationship = arg('--relationship');
const confidence = arg('--confidence') || 'high';
const rationaleType = arg('--rationale') || 'semantic';

if (!relationship) {
  console.error('Usage: node scripts/bin/strm-compute-strength.mjs --relationship <equal|subset_of|superset_of|intersects_with|not_related> [--confidence high|medium|low] [--rationale semantic|functional|syntactic]');
  process.exit(1);
}

const out = computeStrength(relationship, confidence, rationaleType);
console.log(JSON.stringify({ relationship, confidence, rationaleType, ...out }, null, 2));
