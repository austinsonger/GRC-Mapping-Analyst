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

## Core Rules

- Run from repo root so relative paths resolve correctly.
- Put all inputs/outputs in `working-directory/`.
- Do not write generated artifacts to the repo root.
- Keep `TEMPLATE_Set Theory Relationship Mapping (STRM).csv` unchanged.
