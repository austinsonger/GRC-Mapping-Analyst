# Usage

## Usage

### Basic Framework Mapping

Start Claude Code from the repo root and simply describe what you want to map:

```
Map NIST CSF 2.0 to ISO/IEC 27001:2022
```

```
Crosswalk FFIEC CAT to NIST SP 800-53 Rev 5
```

```
Gap analysis between PCI DSS v4.0 and SOC 2 TSC
```

Claude will:
1. Confirm the source (Focal) and target (Reference) documents
2. Locate or ask you to provide the source control files
3. Produce a STRM CSV in `working-directory/`
4. Save a dated artifact to `working-directory/mapping-artifacts/`

### Placing Input Files

Put your source and target framework files in `working-directory/` before starting:

```
working-directory/
├── my-framework.csv       ← Your source document
└── target-framework.csv   ← Your target document
```

Supported input formats: `.csv`, `.pdf`, `.md`, `.json`, `.yml`, `.toml`

### Risk and Threat-Enriched Mappings

The skill can incorporate the bundled SCF 2025.4 risk and threat libraries, but only when explicitly requested:

```
Map NIST SP 800-53 AC controls to CIS Controls v8 and include risk context
```

```
Create a threat-to-control mapping using the threat library against ISO 27001
```

---

## Examples

The `examples/` directory contains fully worked mapping examples showing correct CSV structure, rationale writing patterns, and relationship assignments for each mapping type. Read these before producing a new mapping or when calibrating output quality.

---
