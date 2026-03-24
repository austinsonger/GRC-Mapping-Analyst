import path from 'node:path';
import fs from 'node:fs/promises';

export const RELATIONSHIPS = new Set([
  'equal',
  'subset_of',
  'superset_of',
  'intersects_with',
  'not_related',
]);

export const CONFIDENCE_LEVELS = new Set(['high', 'medium', 'low']);
export const RATIONALE_TYPES = new Set(['semantic', 'functional', 'syntactic']);

const BASE_SCORES = {
  equal: 10,
  subset_of: 7,
  superset_of: 7,
  intersects_with: 4,
  not_related: 0,
};

const CONFIDENCE_ADJ = {
  high: 0,
  medium: -1,
  low: -2,
};

const RATIONALE_ADJ = {
  semantic: 0,
  functional: 0,
  syntactic: -1,
};

export function computeStrength(relationship, confidence = 'high', rationaleType = 'semantic') {
  const base = BASE_SCORES[relationship];
  const confidenceAdj = CONFIDENCE_ADJ[confidence];
  const rationaleAdj = RATIONALE_ADJ[rationaleType];

  if (base === undefined) {
    throw new Error(`Invalid relationship: ${relationship}`);
  }
  if (confidenceAdj === undefined) {
    throw new Error(`Invalid confidence: ${confidence}`);
  }
  if (rationaleAdj === undefined) {
    throw new Error(`Invalid rationale type: ${rationaleType}`);
  }

  const raw = base + confidenceAdj + rationaleAdj;
  return {
    score: Math.min(10, Math.max(1, raw)),
    base,
    confidenceAdj,
    rationaleAdj,
  };
}

export function sanitizeFrameworkName(name) {
  return String(name)
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[/:]/g, '_')
    .replace(/[^A-Za-z0-9._-]/g, '');
}

export function generateFilename(focalFramework, targetFramework, bridgeFramework) {
  const focalClean = sanitizeFrameworkName(focalFramework);
  const targetClean = sanitizeFrameworkName(targetFramework);
  const bridgeClean = bridgeFramework
    ? sanitizeFrameworkName(bridgeFramework)
    : focalClean;

  return (
    'Set Theory Relationship Mapping (STRM)_ ' +
    `[(${focalClean}-to-${bridgeClean})-to-${targetClean}] - ` +
    `${focalFramework} to ${targetFramework}.csv`
  );
}

export function buildHeader(targetName = 'Target') {
  const t = String(targetName).trim() || 'Target';
  return [
    'FDE#',
    'FDE Name',
    'Focal Document Element (FDE)',
    'Confidence Levels',
    'NIST IR-8477 Rational',
    'STRM Rationale',
    'STRM Relationship',
    'Strength of Relationship',
    `${t} Requirement Title`,
    'Target ID #',
    `${t} Requirement Description`,
    'Notes',
  ];
}

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let i = 0;
  let inQuotes = false;

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      cell += ch;
      i += 1;
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }

    if (ch === ',') {
      row.push(cell);
      cell = '';
      i += 1;
      continue;
    }

    if (ch === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      i += 1;
      continue;
    }

    if (ch === '\r') {
      i += 1;
      continue;
    }

    cell += ch;
    i += 1;
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

export function toCsv(rows) {
  return (
    rows
      .map((r) =>
        r
          .map((v) => {
            const val = v == null ? '' : String(v);
            if (/[,"\n\r]/.test(val)) {
              return `"${val.replace(/"/g, '""')}"`;
            }
            return val;
          })
          .join(',')
      )
      .join('\n') + '\n'
  );
}

export function normalizeHeaderKey(value) {
  return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

export function findColumnIndexes(headerRow) {
  const map = new Map();
  headerRow.forEach((value, index) => {
    map.set(normalizeHeaderKey(value), index);
  });

  const byExact = (key) => map.get(normalizeHeaderKey(key));

  return {
    relationship: byExact('STRM Relationship'),
    confidence: byExact('Confidence Levels'),
    rationaleType: byExact('NIST IR-8477 Rational'),
    rationaleText: byExact('STRM Rationale'),
    strength: byExact('Strength of Relationship'),
    fdeNum: byExact('FDE#'),
    targetId: byExact('Target ID #'),
    notes: byExact('Notes'),
  };
}

export function validateDataRow(row, indexes, rowNumber) {
  const errors = [];
  const warnings = [];

  const relationship = String(row[indexes.relationship] ?? '').trim();
  const confidence = String(row[indexes.confidence] ?? '').trim();
  const rationaleType = String(row[indexes.rationaleType] ?? '').trim();
  const rationaleText = String(row[indexes.rationaleText] ?? '').trim();
  const strengthRaw = String(row[indexes.strength] ?? '').trim();
  const fdeNum = String(row[indexes.fdeNum] ?? '').trim();
  const targetId = String(row[indexes.targetId] ?? '').trim();
  const notes = String(row[indexes.notes] ?? '').trim();

  const prefix = `Row ${rowNumber}:`;

  if (!fdeNum) errors.push(`${prefix} FDE# is empty.`);
  if (!targetId) errors.push(`${prefix} Target ID # is empty.`);
  if (!rationaleText) errors.push(`${prefix} STRM Rationale is empty.`);

  if (!RELATIONSHIPS.has(relationship)) {
    errors.push(`${prefix} Invalid STRM Relationship '${relationship}'.`);
  }
  if (!CONFIDENCE_LEVELS.has(confidence)) {
    errors.push(`${prefix} Invalid Confidence Levels '${confidence}'.`);
  }
  if (!RATIONALE_TYPES.has(rationaleType)) {
    errors.push(`${prefix} Invalid NIST IR-8477 Rational '${rationaleType}'.`);
  }

  const strengthScore = Number.parseInt(strengthRaw, 10);
  if (Number.isNaN(strengthScore)) {
    errors.push(`${prefix} Strength of Relationship is not an integer.`);
  } else if (strengthScore < 1 || strengthScore > 10) {
    errors.push(`${prefix} Strength of Relationship must be 1-10.`);
  }

  if (
    RELATIONSHIPS.has(relationship) &&
    CONFIDENCE_LEVELS.has(confidence) &&
    RATIONALE_TYPES.has(rationaleType) &&
    !Number.isNaN(strengthScore)
  ) {
    const expected = computeStrength(relationship, confidence, rationaleType).score;
    if (strengthScore !== expected) {
      errors.push(`${prefix} Strength mismatch: found ${strengthScore}, expected ${expected} from formula.`);
    }
  }

  if (relationship === 'not_related' && !notes) {
    warnings.push(`${prefix} not_related should include Notes context.`);
  }
  if (rationaleType === 'syntactic') {
    warnings.push(`${prefix} syntactic rationale is uncommon; verify intent.`);
  }
  if (confidence === 'low') {
    warnings.push(`${prefix} low confidence should be used only when significant inference is required.`);
  }

  return { errors, warnings, relationship };
}

export function resolveArtifactDir(baseDir, focal, target, dateIso) {
  return path.join(
    baseDir,
    'mapping-artifacts',
    `${dateIso}_${sanitizeFrameworkName(focal)}-to-${sanitizeFrameworkName(target)}`
  );
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

const INPUT_EXTENSIONS = new Set(['.csv', '.pdf', '.md', '.json', '.yml', '.toml']);

export async function listInputFiles(dirPath) {
  const files = [];

  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }
      if (!entry.isFile()) continue;

      const ext = path.extname(entry.name).toLowerCase();
      if (!INPUT_EXTENSIONS.has(ext)) continue;

      files.push({
        name: entry.name,
        path: fullPath,
        relativePath: path.relative(dirPath, fullPath),
        extension: ext,
      });
    }
  }

  await walk(dirPath);
  files.sort((a, b) => a.name.localeCompare(b.name));
  return files;
}

function normalizeForLookup(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]/g, '');
}

export async function findExistingMappings(workingDir, focalFramework, targetFramework) {
  const focal = normalizeForLookup(focalFramework);
  const target = normalizeForLookup(targetFramework);
  const matches = [];

  async function walk(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }
      if (!entry.isFile()) continue;
      if (path.extname(entry.name).toLowerCase() !== '.csv') continue;
      if (!entry.name.includes('STRM')) continue;

      const normalized = normalizeForLookup(entry.name);
      if (normalized.includes(focal) && normalized.includes(target)) {
        matches.push(fullPath);
      }
    }
  }

  await walk(workingDir);
  matches.sort((a, b) => a.localeCompare(b));
  return matches;
}
