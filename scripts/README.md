# STRM Utility Scripts (Cross-Platform)

These scripts provide deterministic STRM operations for all supported assistants:
Claude Code, OpenAI Codex CLI, Gemini CLI, GitHub Copilot, Cursor, Qoder, and Aider.

Language choice: Node.js. This repository already ships a Node/TypeScript extension, so
Node gives better operational performance here (no extra runtime/dependency installation,
fast startup, and shared logic with existing Gemini tooling).

## Commands

- `node scripts/bin/strm-list-input-files.mjs --dir working-directory`
- `node scripts/bin/strm-check-existing-mapping.mjs --focal "<Focal>" --target "<Target>" --working-dir working-directory`
- `node scripts/bin/strm-generate-filename.mjs --focal "<Focal>" --target "<Target>" [--bridge "<Bridge>"]`
- `node scripts/bin/strm-build-header.mjs --target "<Target>"`
- `node scripts/bin/strm-compute-strength.mjs --relationship <equal|subset_of|superset_of|intersects_with|not_related> [--confidence high|medium|low] [--rationale semantic|functional|syntactic]`
- `node scripts/bin/strm-init-mapping.mjs --focal "<Focal>" --target "<Target>" [--bridge "<Bridge>"] [--working-dir working-directory] [--date YYYY-MM-DD]`
- `node scripts/bin/strm-validate-csv.mjs --file "<path-to-strm-csv>"`
- `node scripts/bin/strm-gap-report.mjs --file "<path-to-strm-csv>" --focal "<Focal>" --target "<Target>" [--working-dir working-directory] [--date YYYY-MM-DD]`

## Notes

- Scripts are deterministic and enforce the NIST IR 8477 formula where applicable.
- Output artifacts are created under `working-directory/mapping-artifacts/`.
- The validator checks required columns, required row fields, and formula correctness.
