# Scripts

## Cross-Platform STRM Scripts

Use deterministic Node scripts for STRM operations across all supported assistants.

Reference: `scripts/README.md`

Examples:
```bash
node scripts/bin/strm-list-input-files.mjs --dir working-directory
node scripts/bin/strm-init-mapping.mjs --focal "NIST CSF 2.0" --target "ISO 27001"
node scripts/bin/strm-validate-csv.mjs --file "working-directory/.../your-strm.csv"
node scripts/bin/strm-gap-report.mjs --file "working-directory/.../your-strm.csv" --focal "NIST CSF 2.0" --target "ISO 27001"
```

---
