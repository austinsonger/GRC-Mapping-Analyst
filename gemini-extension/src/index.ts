/**
 * STRM Mapping — Gemini CLI Extension
 * MCP server providing deterministic tools for NIST IR 8477 Set-Theory
 * Relationship Mapping (STRM) between cybersecurity frameworks.
 *
 * @license Apache-2.0
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { readdir, readFile, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Relationship = 'equal' | 'subset_of' | 'superset_of' | 'intersects_with' | 'not_related';
type Confidence   = 'high' | 'medium' | 'low';
type RationaleType = 'semantic' | 'functional' | 'syntactic';

// ---------------------------------------------------------------------------
// Strength score formula (NIST IR 8477)
// ---------------------------------------------------------------------------

const BASE_SCORES: Record<Relationship, number> = {
  equal:           10,
  subset_of:        7,
  superset_of:      7,
  intersects_with:  4,
  not_related:      0,
};

const CONFIDENCE_ADJ: Record<Confidence, number> = {
  high:   0,
  medium: -1,
  low:    -2,
};

const RATIONALE_ADJ: Record<RationaleType, number> = {
  semantic:   0,
  functional: 0,
  syntactic: -1,
};

function computeStrength(
  relationship: Relationship,
  confidence: Confidence,
  rationaleType: RationaleType,
): { score: number; base: number; confidenceAdj: number; rationaleAdj: number } {
  const base = BASE_SCORES[relationship];
  const confidenceAdj = CONFIDENCE_ADJ[confidence];
  const rationaleAdj = RATIONALE_ADJ[rationaleType];
  const raw = base + confidenceAdj + rationaleAdj;
  const score = Math.min(10, Math.max(1, raw));
  return { score, base, confidenceAdj, rationaleAdj };
}

// ---------------------------------------------------------------------------
// File naming helpers
// ---------------------------------------------------------------------------

function sanitizeFrameworkName(name: string): string {
  return name
    .replace(/\s+/g, '_')
    .replace(/[/:]/g, '_')
    .replace(/\./g, '.')   // keep dots for version numbers
    .replace(/[^A-Za-z0-9._-]/g, '');
}

function generateStrmFilename(
  focalFramework: string,
  targetFramework: string,
  bridgeFramework?: string,
): string {
  const focal  = sanitizeFrameworkName(focalFramework);
  const target = sanitizeFrameworkName(targetFramework);
  const bridge = bridgeFramework
    ? sanitizeFrameworkName(bridgeFramework)
    : focal;

  return (
    `Set Theory Relationship Mapping (STRM)_ ` +
    `[(${focal}-to-${bridge})-to-${target}] - ` +
    `${focalFramework} to ${targetFramework}.csv`
  );
}

// ---------------------------------------------------------------------------
// CSV header builder
// ---------------------------------------------------------------------------

// Returns the single header row matching the canonical STRM template.
// The template has one row (column headers); data begins at Row 2.
// Columns I and K use the target document name as a prefix:
//   "ISO 27001 Requirement Title" / "ISO 27001 Requirement Description"
// When no target name is provided, the literal "Target" is used as a placeholder.
function buildCsvHeader(targetName?: string): string[] {
  const t = targetName?.trim() || 'Target';
  return [
    'FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,' +
    `STRM Rationale,STRM Relationship,Strength of Relationship,` +
    `${t} Requirement Title,Target ID #,${t} Requirement Description,Notes`,
  ];
}

// ---------------------------------------------------------------------------
// Row validator
// ---------------------------------------------------------------------------

interface RowValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

function validateRow(params: {
  fdeNum: string;
  relationship: string;
  confidence: string;
  rationaleType: string;
  rationaleText: string;
  strengthScore: number;
  targetId: string;
  notes: string;
}): RowValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!params.fdeNum.trim()) errors.push('FDE# (Column A) must not be empty.');
  if (!params.rationaleText.trim()) errors.push('STRM Rationale (Column F) must not be empty — every row needs a narrative.');
  if (!params.targetId.trim()) errors.push('Target ID # (Column J) must not be empty. Do not invent IDs — use the actual target document.');

  // Relationship values
  const validRelationships: Relationship[] = ['equal', 'subset_of', 'superset_of', 'intersects_with', 'not_related'];
  if (!validRelationships.includes(params.relationship as Relationship)) {
    errors.push(`STRM Relationship "${params.relationship}" is invalid. Must be one of: ${validRelationships.join(', ')}.`);
  }

  // Confidence values
  const validConfidences: Confidence[] = ['high', 'medium', 'low'];
  if (!validConfidences.includes(params.confidence as Confidence)) {
    errors.push(`Confidence "${params.confidence}" is invalid. Must be: high, medium, or low.`);
  }

  // Rationale type values
  const validRationaleTypes: RationaleType[] = ['semantic', 'functional', 'syntactic'];
  if (!validRationaleTypes.includes(params.rationaleType as RationaleType)) {
    errors.push(`Rationale type "${params.rationaleType}" is invalid. Must be: semantic, functional, or syntactic.`);
  }

  // Strength score range
  if (!Number.isInteger(params.strengthScore)) {
    errors.push(`Strength score ${params.strengthScore} is invalid. Must be an integer 1–10.`);
  } else if (params.strengthScore < 1 || params.strengthScore > 10) {
    errors.push(`Strength score ${params.strengthScore} is out of range. Must be 1–10.`);
  }

  // Verify strength score matches formula
  if (
    validRelationships.includes(params.relationship as Relationship) &&
    validConfidences.includes(params.confidence as Confidence) &&
    validRationaleTypes.includes(params.rationaleType as RationaleType)
  ) {
    const expected = computeStrength(
      params.relationship as Relationship,
      params.confidence as Confidence,
      params.rationaleType as RationaleType,
    );
    if (params.strengthScore !== expected.score) {
      errors.push(
        `Strength score ${params.strengthScore} does not match formula result ${expected.score} ` +
        `(base=${expected.base}, confidence_adj=${expected.confidenceAdj}, rationale_adj=${expected.rationaleAdj}).`
      );
    }
  }

  // Warnings
  if (params.relationship === 'not_related' && !params.notes.trim()) {
    warnings.push('not_related mappings should include Notes explaining why there is zero overlap.');
  }
  if (params.rationaleType === 'syntactic') {
    warnings.push('syntactic rationale is rare (<1% of mappings). Confirm wording similarity is the primary — not supporting — justification.');
  }
  if (params.confidence === 'low') {
    warnings.push('low confidence should be used only when significant inference is required. Verify this is warranted.');
  }
  if (params.rationaleText.length < 40) {
    warnings.push('Rationale text appears very short. Ensure it follows the pattern: "<Source> <FDE#> requires <X>. <Target> <RDE#> requires <Y>. Both <shared objective>."');
  }

  return { valid: errors.length === 0, errors, warnings };
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
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

function normalizeHeaderKey(value: string): string {
  return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

function findColumnIndexes(headerRow: string[]): Record<string, number | undefined> {
  const map = new Map<string, number>();
  headerRow.forEach((value, index) => {
    map.set(normalizeHeaderKey(value), index);
  });

  const byExact = (key: string) => map.get(normalizeHeaderKey(key));

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

function focalIdIndex(headerRow: string[]): number {
  const lower = headerRow.map((h) => String(h ?? '').trim().toLowerCase());
  const candidates = ['controlid', 'fde#', 'id', 'control id'];
  for (const name of candidates) {
    const idx = lower.indexOf(name);
    if (idx >= 0) return idx;
  }
  return 0;
}

// ---------------------------------------------------------------------------
// File system helpers
// ---------------------------------------------------------------------------

const INPUT_EXTENSIONS = new Set(['.csv', '.pdf', '.md', '.json', '.yml', '.toml']);

async function listFrameworkFiles(directory: string): Promise<{ name: string; path: string; extension: string }[]> {
  const results: { name: string; path: string; extension: string }[] = [];
  try {
    async function scan(current: string): Promise<void> {
      const entries = await readdir(current, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = join(current, entry.name);
        if (entry.isDirectory()) {
          await scan(fullPath);
          continue;
        }
        if (!entry.isFile()) continue;
        const ext = extname(entry.name).toLowerCase();
        if (!INPUT_EXTENSIONS.has(ext)) continue;
        results.push({
          name: basename(entry.name, ext),
          path: fullPath,
          extension: ext,
        });
      }
    }
    await scan(directory);
  } catch {
    // Directory not accessible or doesn't exist — return empty list
  }
  results.sort((a, b) => a.path.localeCompare(b.path));
  return results;
}

async function findExistingMapping(
  workingDir: string,
  focalFramework: string,
  targetFramework: string,
): Promise<string[]> {
  const matches: string[] = [];
  const focalLower  = focalFramework.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
  const targetLower = targetFramework.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');

  async function scanDir(dir: string): Promise<void> {
    try {
      const entries = await readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
          await scanDir(fullPath);
        } else if (
          entry.isFile() &&
          extname(entry.name).toLowerCase() === '.csv' &&
          entry.name.includes('STRM')
        ) {
          const nameLower = entry.name.toLowerCase().replace(/[^a-z0-9]/g, '');
          if (nameLower.includes(focalLower) && nameLower.includes(targetLower)) {
            matches.push(fullPath);
          }
        }
      }
    } catch {
      // Skip inaccessible directories
    }
  }

  await scanDir(workingDir);
  return matches;
}

// ---------------------------------------------------------------------------
// MCP Server
// ---------------------------------------------------------------------------

const server = new McpServer({
  name: 'strm-mapping',
  version: '1.0.0',
});

// Tool 1: Compute strength score
server.registerTool(
  'strm_compute_strength',
  {
    description:
      'Computes the NIST IR 8477 Strength of Relationship score (1–10) from the three ' +
      'STRM scoring inputs. Use this for every row — never compute manually.',
    inputSchema: z.object({
      relationship: z
        .enum(['equal', 'subset_of', 'superset_of', 'intersects_with', 'not_related'])
        .describe('The STRM relationship type between FDE and RDE.'),
      confidence: z
        .enum(['high', 'medium', 'low'])
        .describe('Confidence level for this mapping. Default: high.'),
      rationale_type: z
        .enum(['semantic', 'functional', 'syntactic'])
        .describe('The rationale type. Default: semantic.'),
    }).shape,
  },
  async ({ relationship, confidence, rationale_type }) => {
    const result = computeStrength(
      relationship as Relationship,
      confidence as Confidence,
      rationale_type as RationaleType,
    );
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify({
            score: result.score,
            formula: `base(${result.base}) + confidence_adj(${result.confidenceAdj}) + rationale_adj(${result.rationaleAdj}) = ${result.base + result.confidenceAdj + result.rationaleAdj} → clamped to ${result.score}`,
            inputs: { relationship, confidence, rationale_type },
          }, null, 2),
        },
      ],
    };
  },
);

// Tool 2: Generate filename
server.registerTool(
  'strm_generate_filename',
  {
    description:
      'Returns the correctly formatted STRM CSV filename for a mapping. ' +
      'Use this before writing any output file.',
    inputSchema: z.object({
      focal_framework: z
        .string()
        .describe('Short name of the source (focal) framework, e.g. "NIST CSF 2.0".'),
      target_framework: z
        .string()
        .describe('Short name of the target (reference) framework, e.g. "ISO/IEC 27001:2022".'),
      bridge_framework: z
        .string()
        .optional()
        .describe('Optional bridge framework. Omit for direct mappings (focal is used as bridge).'),
    }).shape,
  },
  async ({ focal_framework, target_framework, bridge_framework }) => {
    const filename = generateStrmFilename(focal_framework, target_framework, bridge_framework);
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify({ filename }, null, 2),
        },
      ],
    };
  },
);

// Tool 3: Build CSV header
server.registerTool(
  'strm_build_csv_header',
  {
    description:
      'Returns the single STRM CSV header row (Row 1). ' +
      'Columns I and K are prefixed with the target document name ' +
      '(e.g., "ISO 27001 Requirement Title"). ' +
      'Provide target_name to get the correctly labeled header; omit to get a template with "Target" as placeholder. ' +
      'Data rows begin at Row 2.',
    inputSchema: z.object({
      target_name: z
        .string()
        .optional()
        .describe('Short name of the target framework, e.g. "ISO 27001" or "NIST SP 800-53". Used to label columns I and K.'),
    }).shape,
  },
  async ({ target_name }) => {
    const rows = buildCsvHeader(target_name);
    const t = target_name?.trim() || 'Target';
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify({
            csv_header_row: rows[0],
            note: `This is Row 1. Add data starting at Row 2. Columns I and K are labeled "${t} Requirement Title" and "${t} Requirement Description".`,
          }, null, 2),
        },
      ],
    };
  },
);

// Tool 4: Validate a row
server.registerTool(
  'strm_validate_row',
  {
    description:
      'Checks a single STRM mapping row against all quality rules. ' +
      'Returns errors that must be fixed and warnings to review. ' +
      'Use after completing each row before moving on.',
    inputSchema: z.object({
      fde_num: z
        .string()
        .describe('Source control ID (Column A), e.g. "AC-2" or "D1.G.Ov.B.1".'),
      relationship: z
        .string()
        .describe('STRM Relationship value (Column G).'),
      confidence: z
        .string()
        .describe('Confidence Levels value (Column D).'),
      rationale_type: z
        .string()
        .describe('NIST IR-8477 Rational value (Column E).'),
      rationale_text: z
        .string()
        .describe('STRM Rationale narrative (Column F).'),
      strength_score: z
        .number()
        .describe('Strength of Relationship integer (Column H).'),
      target_id: z
        .string()
        .describe('Target ID # (Column J).'),
      notes: z
        .string()
        .optional()
        .default('')
        .describe('Notes (Column L). Optional.'),
    }).shape,
  },
  async ({ fde_num, relationship, confidence, rationale_type, rationale_text, strength_score, target_id, notes }) => {
    const result = validateRow({
      fdeNum: fde_num,
      relationship,
      confidence,
      rationaleType: rationale_type,
      rationaleText: rationale_text,
      strengthScore: strength_score,
      targetId: target_id,
      notes: notes ?? '',
    });
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  },
);

// Tool 5: List input files
server.registerTool(
  'strm_list_input_files',
  {
    description:
      'Lists available framework/control files in working-directory (and subdirectories). ' +
      'Use at the start of every mapping session to discover available inputs.',
    inputSchema: z.object({
      subdirectory: z
        .string()
        .optional()
        .describe(
          'Subdirectory to scan, relative to workspace root. ' +
          'Defaults to "working-directory". Use "knowledge" to list knowledge files.'
        ),
    }).shape,
  },
  async ({ subdirectory }) => {
    const workspaceRoot = process.env['WORKSPACE_PATH'] ?? process.cwd();
    const targetDir = join(workspaceRoot, subdirectory ?? 'working-directory');
    const files = await listFrameworkFiles(targetDir);
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            {
              directory: targetDir,
              file_count: files.length,
              files,
            },
            null,
            2,
          ),
        },
      ],
    };
  },
);

// Tool 6: Check for existing mapping
server.registerTool(
  'strm_check_existing_mapping',
  {
    description:
      'Scans working-directory for an existing STRM file for the given source→target pair. ' +
      'Use before starting any new mapping to avoid duplicating prior work.',
    inputSchema: z.object({
      focal_framework: z
        .string()
        .describe('Short name of the source framework.'),
      target_framework: z
        .string()
        .describe('Short name of the target framework.'),
    }).shape,
  },
  async ({ focal_framework, target_framework }) => {
    const workspaceRoot = process.env['WORKSPACE_PATH'] ?? process.cwd();
    const workingDir = join(workspaceRoot, 'working-directory');
    const existing = await findExistingMapping(workingDir, focal_framework, target_framework);
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            {
              found: existing.length > 0,
              match_count: existing.length,
              files: existing,
              recommendation: existing.length > 0
                ? 'Read the existing file before proceeding to avoid duplication and maintain consistency.'
                : 'No existing mapping found. Safe to start a new mapping.',
            },
            null,
            2,
          ),
        },
      ],
    };
  },
);

// Tool 7: Validate full CSV
server.registerTool(
  'strm_validate_csv',
  {
    description:
      'Validates a full STRM CSV file for row-level quality and cross-row consistency. ' +
      'Includes formula checks, duplicate FDE# + Target ID# detection, unresolved <Target> header placeholders, ' +
      'and optional focal coverage checks.',
    inputSchema: z.object({
      file_path: z
        .string()
        .describe('Path to the STRM CSV to validate.'),
      focal_csv_path: z
        .string()
        .optional()
        .describe('Optional focal controls CSV path (for unmapped focal coverage checks).'),
      strict_coverage: z
        .boolean()
        .optional()
        .default(false)
        .describe('When true, unmapped focal controls are treated as errors instead of warnings.'),
    }).shape,
  },
  async ({ file_path, focal_csv_path, strict_coverage }) => {
    const text = await readFile(file_path, 'utf8');
    const rows = parseCsv(text);

    if (rows.length === 0) {
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({
              status: 'error',
              file: file_path,
              message: 'CSV is empty.',
            }, null, 2),
          },
        ],
      };
    }

    const header = rows[0];
    const idx = findColumnIndexes(header);
    const missing = Object.entries(idx)
      .filter(([, v]) => typeof v !== 'number')
      .map(([k]) => k);

    const errors: string[] = [];
    const warnings: string[] = [];

    if (missing.length > 0) {
      errors.push(`Missing required columns: ${missing.join(', ')}`);
    }

    const unresolvedTargetHeaders = header
      .filter((h) => String(h ?? '').toLowerCase().includes('<target>'))
      .map((h) => String(h ?? '').trim())
      .filter(Boolean);

    if (unresolvedTargetHeaders.length > 0) {
      errors.push(
        `Header contains unresolved <Target> placeholders: ${unresolvedTargetHeaders.join(', ')}. ` +
        'Replace placeholders with the actual target framework name.'
      );
    }

    const seenPairs = new Map<string, number>();
    const mappedFdes = new Set<string>();
    let dataRows = 0;

    if (missing.length === 0) {
      for (let i = 1; i < rows.length; i += 1) {
        const row = rows[i];
        const isBlank = row.every((v) => String(v ?? '').trim() === '');
        if (isBlank) continue;

        dataRows += 1;
        const rowResult = validateRow({
          fdeNum: String(row[idx.fdeNum as number] ?? ''),
          relationship: String(row[idx.relationship as number] ?? ''),
          confidence: String(row[idx.confidence as number] ?? ''),
          rationaleType: String(row[idx.rationaleType as number] ?? ''),
          rationaleText: String(row[idx.rationaleText as number] ?? ''),
          strengthScore: Number.parseInt(String(row[idx.strength as number] ?? '').trim(), 10),
          targetId: String(row[idx.targetId as number] ?? ''),
          notes: String(row[idx.notes as number] ?? ''),
        });

        errors.push(...rowResult.errors.map((e) => `Row ${i + 1}: ${e}`));
        warnings.push(...rowResult.warnings.map((w) => `Row ${i + 1}: ${w}`));

        const fdeNum = String(row[idx.fdeNum as number] ?? '').trim();
        const targetId = String(row[idx.targetId as number] ?? '').trim();
        if (fdeNum) mappedFdes.add(fdeNum);
        if (fdeNum && targetId) {
          const key = `${fdeNum}|||${targetId}`;
          if (seenPairs.has(key)) {
            errors.push(
              `Row ${i + 1}: duplicate mapping pair ${fdeNum} -> ${targetId}. ` +
              `First seen at row ${seenPairs.get(key)}.`
            );
          } else {
            seenPairs.set(key, i + 1);
          }
        }
      }
    }

    if (focal_csv_path) {
      const focalText = await readFile(focal_csv_path, 'utf8');
      const focalRows = parseCsv(focalText);
      if (focalRows.length > 0) {
        const idIdx = focalIdIndex(focalRows[0]);
        const expectedFdes = new Set<string>();
        for (let i = 1; i < focalRows.length; i += 1) {
          const id = String(focalRows[i][idIdx] ?? '').trim();
          if (id) expectedFdes.add(id);
        }
        const unmapped = [...expectedFdes].filter((id) => !mappedFdes.has(id));
        if (unmapped.length > 0) {
          const msg =
            `Coverage check: ${unmapped.length} focal control(s) have no mapped rows. ` +
            `Examples: ${unmapped.slice(0, 10).join(', ')}${unmapped.length > 10 ? ' ...' : ''}`;
          if (strict_coverage) errors.push(msg);
          else warnings.push(msg);
        }
      } else {
        warnings.push(`Coverage check skipped: focal CSV '${focal_csv_path}' is empty.`);
      }
    }

    const payload = {
      status: errors.length === 0 ? 'pass' : 'fail',
      file: file_path,
      totalRowsChecked: dataRows,
      errorCount: errors.length,
      warningCount: warnings.length,
      errors,
      warnings,
    };

    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(payload, null, 2),
        },
      ],
    };
  },
);

// ---------------------------------------------------------------------------
// Start server
// ---------------------------------------------------------------------------

const transport = new StdioServerTransport();
await server.connect(transport);
