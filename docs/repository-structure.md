# Repository Structure

## Repository Structure

```
strm-Mapping/
├── skills/
│   └── strm-mapping/
│       └── SKILL.md              ← Skill definition (copy this to ~/.claude/skills/)
├── knowledge/
│   ├── ir8477-strm-reference.md  ← Full NIST IR 8477 methodology reference
│   ├── controls.schema.json      ← JSON Schema for control data
│   ├── mappings.schema.json      ← JSON Schema for mapping validation
│   ├── risks.schema.json         ← JSON Schema for risk data
│   ├── threats.schema.json       ← JSON Schema for threat data
│   └── library/
│       ├── risks.json            ← SCF 2025.4 risk catalog (optional)
│       └── threats.json          ← Threat catalog (optional)
├── examples/
│   ├── example-control-to-control.md
│   ├── example-control-to-evidence.md
│   ├── example-framework-to-control.md
│   ├── example-framework-to-policy.md
│   ├── example-framework-to-regulation.md
│   ├── example-framework-to-risk.md
│   └── example-regulation-to-control.md
├── working-directory/            ← All output goes here (never write to repo root)
│   ├── controls/
│   ├── frameworks/
│   ├── policies/
│   ├── regulations/
│   ├── mapping-artifacts/        ← Completed, dated mapping CSVs
│   └── risks.json / threats.json
└── TEMPLATE_Set Theory Relationship Mapping (STRM).csv
```

> Claude Code **must be opened from the repository root** for relative paths to resolve. Do not open it from a subdirectory.

---
