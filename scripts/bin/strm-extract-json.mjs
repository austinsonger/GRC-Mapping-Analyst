#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { toCsv } from '../lib/strm-core.mjs';

function usage() {
  console.error(
    'Usage: node scripts/bin/strm-extract-json.mjs <input.json> [output.csv] [--all-fields]\n' +
      'Default columns: controlId,title,family,description plus core metadata when present (subFamily,subControls,parameters,objectives,enhancements).\n' +
      'Use --all-fields to include every discovered field from catalog.securityControls[].'
  );
}

function stripHtml(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanExtractedText(value) {
  return stripHtml(value)
    .replace(/\{\{\s*insert:[^}]+\}\}/gi, ' ')
    .replace(/\[\s*CUSTOMIZED APPROACH OBJECTIVE\s*\]\s*:/gi, ' ')
    .replace(/\[\s*APPLICABILITY NOTES\s*\]\s*:/gi, ' ')
    .replace(/\[\s*Purpose\s*\]\s*:/gi, ' ')
    .replace(/\[\s*Good Practice\s*\]\s*:/gi, ' ')
    .replace(/\[\s*Definitions\s*\]\s*:/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(value) {
  return String(value ?? '').trim().toLowerCase();
}

function isControlIdLike(value) {
  const v = String(value ?? '').trim();
  if (!v) return false;
  if (v.length > 32) return false;
  if (/\s/.test(v)) return false;
  if (!/^[A-Za-z0-9_.()/-]+$/.test(v)) return false;
  // Treat compact tokens with digits or punctuation as IDs (e.g., AC-1, 1.1.1, PR.AC-1).
  if (/[0-9]/.test(v)) return true;
  if (/[_.()/-]/.test(v)) return true;
  return false;
}

function firstSentence(text) {
  const clean = cleanExtractedText(text);
  const idx = clean.search(/[.!?]/);
  if (idx === -1) return clean.slice(0, 140).trim();
  return clean.slice(0, idx + 1).trim();
}

function resolveTitle(control) {
  const controlId = String(control?.controlId ?? control?.id ?? '').trim();
  const sortId = String(control?.sortId ?? '').trim();
  const blocked = new Set([normalize(controlId), normalize(sortId)]);

  const primaryCandidates = [
    control?.title,
    control?.name,
    control?.controlTitle,
    control?.requirementTitle,
    control?.label,
  ];

  for (const candidate of primaryCandidates) {
    const value = String(candidate ?? '').trim();
    if (!value) continue;
    if (blocked.has(normalize(value))) continue;
    if (isControlIdLike(value)) continue;
    return value;
  }

  const family = String(control?.family ?? '').trim();
  if (family && !blocked.has(normalize(family))) {
    return family;
  }

  const descriptionSentence = firstSentence(control?.description ?? '');
  if (descriptionSentence) {
    return descriptionSentence;
  }

  return controlId;
}

function defaultOutputPath(inputFile) {
  const base = path.basename(inputFile, path.extname(inputFile));
  const framework = base.replace(/[^A-Za-z0-9._-]/g, '_');
  return path.join('working-directory', 'scratch', `${framework}-extracted.csv`);
}

function deriveSubFamily(control) {
  const explicit = String(control?.subFamily ?? control?.subfamily ?? '').trim();
  if (explicit) return explicit;

  const controlId = String(control?.controlId ?? control?.id ?? '').trim();
  if (!controlId) return '';

  const asvs = controlId.match(/^([A-Za-z]+\d+\.\d+)/);
  if (asvs) return asvs[1];

  const nistLike = controlId.match(/^([A-Za-z]+-\d+)/);
  if (nistLike) return nistLike[1];

  const dotted = controlId.split('.');
  if (dotted.length >= 2) return `${dotted[0]}.${dotted[1]}`;

  return '';
}

function summarizeObjectEntry(item) {
  const id =
    item?.parameterId ??
    item?.name ??
    item?.testId ??
    item?.otherId ??
    item?.controlId ??
    item?.id ??
    item?.uuid ??
    '';

  const text =
    item?.text ??
    item?.description ??
    item?.test ??
    item?.title ??
    item?.default ??
    item?.guidance ??
    item?.constraints ??
    '';

  const idText = cleanExtractedText(id);
  const valueText = cleanExtractedText(text);

  if (idText && valueText) return `${idText}: ${valueText}`;
  if (idText) return idText;
  if (valueText) return valueText;
  return cleanExtractedText(JSON.stringify(item));
}

function summarizeObject(value) {
  if (!value || typeof value !== 'object') return '';
  return summarizeObjectEntry(value);
}

function parseStructuredString(value) {
  const text = String(value ?? '').trim();
  if (!text) return null;
  if (!(text.startsWith('[') || text.startsWith('{'))) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function serializeValue(value, key = '') {
  if (value == null) return '';

  if (typeof value === 'string') {
    const parsed = parseStructuredString(value);
    if (parsed != null) {
      return serializeValue(parsed, key);
    }
    return cleanExtractedText(value);
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return '';
    if (value.every((v) => typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean')) {
      return value.map((v) => stripHtml(v)).join(' | ');
    }

    const summaries = value.map((item) => summarizeObjectEntry(item)).filter(Boolean);
    if (summaries.length === 0) return '';

    const maxItems = key === 'parameters' || key === 'objectives' || key === 'enhancements' ? 8 : 5;
    if (summaries.length > maxItems) {
      const head = summaries.slice(0, maxItems).join(' | ');
      return `${head} | (+${summaries.length - maxItems} more)`;
    }
    return summaries.join(' | ');
  }

  if (typeof value === 'object') {
    return summarizeObject(value);
  }

  return String(value);
}

function discoverAdditionalFields(controls) {
  const basic = new Set(['controlId', 'title', 'family', 'description', 'id']);
  const discovered = new Set();

  for (const control of controls) {
    if (!control || typeof control !== 'object') continue;
    for (const key of Object.keys(control)) {
      if (!basic.has(key)) discovered.add(key);
    }
  }

  const preferredOrder = [
    'subControls',
    'parameters',
    'objectives',
    'enhancements',
    'tests',
    'ccis',
    'weight',
    'assessmentPlan',
    'practiceLevel',
    'references',
    'relatedControls',
    'otherId',
    'uuid',
    'mappings',
    'sortId',
    'controlTitle',
    'requirementTitle',
    'label',
    'name',
    'controlType',
    'catalogueID',
    'isPublic',
    'archived',
    'dateCreated',
    'dateLastUpdated',
    'createdById',
    'lastUpdatedById',
    'tenantsId',
  ];

  const ordered = [];
  for (const key of preferredOrder) {
    if (discovered.has(key)) {
      ordered.push(key);
      discovered.delete(key);
    }
  }

  const remaining = Array.from(discovered).sort((a, b) => a.localeCompare(b));
  return [...ordered, ...remaining];
}

function discoverCoreMetadataFields(controls) {
  const preferred = ['subFamily', 'subControls', 'parameters', 'objectives', 'enhancements'];
  const present = new Set();

  for (const control of controls) {
    if (!control || typeof control !== 'object') continue;
    for (const key of preferred) {
      if (key === 'subFamily') {
        if (deriveSubFamily(control)) present.add(key);
        continue;
      }
      if (Object.hasOwn(control, key)) {
        const v = control[key];
        const hasValue = Array.isArray(v) ? v.length > 0 : String(v ?? '').trim() !== '';
        if (hasValue) present.add(key);
      }
    }
  }

  return preferred.filter((k) => present.has(k));
}

const args = process.argv.slice(2);
const inputFile = args[0];
const outputArg = args[1] && !args[1].startsWith('--') ? args[1] : null;
const allFields = args.includes('--all-fields');
const outputFile = outputArg || defaultOutputPath(inputFile || '');

if (!inputFile) {
  usage();
  process.exit(1);
}

const text = await fs.readFile(inputFile, 'utf8');
const parsed = JSON.parse(text);
const controls = parsed?.catalog?.securityControls;

if (!Array.isArray(controls)) {
  console.error(
    JSON.stringify(
      {
        status: 'error',
        message: 'Expected JSON path catalog.securityControls[]',
      },
      null,
      2
    )
  );
  process.exit(2);
}

const additionalFields = allFields
  ? discoverAdditionalFields(controls)
  : discoverCoreMetadataFields(controls);
const header = ['controlId', 'title', 'family', 'description', ...additionalFields];
const rows = [header];

for (const control of controls) {
  const row = [
    String(control?.controlId ?? control?.id ?? '').trim(),
    resolveTitle(control),
    String(control?.family ?? '').trim(),
    cleanExtractedText(control?.description ?? ''),
  ];

  for (const key of additionalFields) {
    if (key === 'subFamily') {
      row.push(deriveSubFamily(control));
      continue;
    }
    row.push(serializeValue(control?.[key], key));
  }

  rows.push(row);
}

await fs.mkdir(path.dirname(outputFile), { recursive: true });
await fs.writeFile(outputFile, toCsv(rows), 'utf8');

console.log(
  JSON.stringify(
    {
      status: 'ok',
      inputFile,
      outputFile,
      controlsRead: controls.length,
      rowsWritten: rows.length - 1,
      columnsWritten: header.length,
      additionalColumns: additionalFields,
    },
    null,
    2
  )
);
