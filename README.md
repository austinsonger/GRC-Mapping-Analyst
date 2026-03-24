# STRM Mapping — NIST IR 8477 Toolkit

STRM Mapping is a cross-platform AI toolkit for producing Set-Theory Relationship Mapping (STRM) outputs between cybersecurity frameworks, control catalogs, and regulations.

## Start Here

- Read the docs index: [docs/README.md](./docs/README.md)
- Skill definition: [.agents/skills/strm-mapping/SKILL.md](./.agents/skills/strm-mapping/SKILL.md)
- Project agent instructions: [AGENTS.md](./AGENTS.md)

## Quick Start

```bash
git clone https://github.com/austinsonger/strm-Mapping.git
cd strm-Mapping
```

Run your assistant from the repository root and ask for a mapping, for example:

```text
Map NIST CSF 2.0 to ISO/IEC 27001:2022
```

Or run deterministic scripts directly:

```bash
node scripts/bin/strm-run-workflow.mjs \
  --focal "NIST CSF 2.0" \
  --target "ISO/IEC 27001:2022" \
  --focal-input "working-directory/nist-csf.csv" \
  --target-input "working-directory/iso27001.csv" \
  --working-dir working-directory
```

After manual row adjudication, rerun with `--manual-qa-done` to trigger validator + gap report.

## Core Rules

- Run from repo root so relative paths resolve correctly.
- Put all inputs/outputs in `working-directory/`.
- Do not write generated artifacts to the repo root.
- Keep `TEMPLATE_Set Theory Relationship Mapping (STRM).csv` unchanged.

## Method Quick Reference

### Relationship Types

| Value | Meaning |
|---|---|
| `equal` | FDE and RDE express materially identical requirements |
| `subset_of` | FDE scope is fully contained within RDE |
| `superset_of` | FDE scope fully contains RDE |
| `intersects_with` | Partial overlap; neither contains the other |
| `not_related` | No meaningful overlap (rare) |

### Strength Formula

```text
base:       equal=10  subset_of=7  superset_of=7  intersects_with=4  not_related=0
confidence: high=0    medium=-1    low=-2
rationale:  semantic=0 functional=0 syntactic=-1
result:     clamp(base + confidence + rationale, 1, 10)
```

### Required CSV Header (12 Columns)

```text
FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,<Target> Requirement Title,Target ID #,<Target> Requirement Description,Notes
```

Replace `<Target>` with the actual target framework name in columns I and K.

## Methodology Sync Checklist

When STRM methodology changes, update these files in the same PR:

- `.agents/skills/strm-mapping/SKILL.md` (canonical)
- `skills/strm-mapping/SKILL.md`
- `GEMINI.md`
- `AGENTS.md`
- `.github/copilot-instructions.md`
- `CONVENTIONS.md`
- `gemini-extension/GEMINI.md`
- `platform-skills/PLATFORM-COMPATIBILITY.md`
