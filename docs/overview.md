# Overview

# STRM Mapping — NIST IR 8477 GRC Toolkit

A multi-platform AI assistant skill and supporting knowledge base for producing
**Set-Theory Relationship Mapping (STRM)** CSV files between any two cybersecurity
frameworks, control catalogs, or regulatory requirements, following the
[NIST IR 8477](https://nvlpubs.nist.gov/nistpubs/ir/2023/NIST.IR.8477.pdf) methodology.

Supported AI coding assistants: **Claude Code**, **Google Gemini CLI**,
**OpenAI Codex CLI**, **GitHub Copilot**, **Cursor AI**, and **Aider**.

---

## What This Toolkit Does

The STRM mapping skill instructs AI assistants to:

- Map, crosswalk, align, or gap-analyze **any two** cybersecurity documents (frameworks, regulations, audits, policy catalogs, risk libraries, or threat catalogs)
- Assign mathematically precise STRM relationship types (`equal`, `subset_of`, `superset_of`, `intersects_with`, `not_related`) with scored strength and rationale to each control pair
- Produce a structured 12-column CSV file ready for import into spreadsheets, GRC tools, or OSCAL processors
- Optionally enrich mappings with a risk or threat library (SCF 2025.4 included)

---

## Prerequisites

| Requirement | Notes |
|---|---|
| Git | For cloning the repository |
| Any supported AI assistant | See platform table below — most are zero-install after cloning |

No additional runtime dependencies. All inputs and outputs are plain CSV/Markdown/JSON files.

---
