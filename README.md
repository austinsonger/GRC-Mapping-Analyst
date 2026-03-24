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

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/austinsonger/strm-Mapping.git
cd strm-Mapping
```

### Step 2: Install for Your AI Assistant

All AI assistants must be started from the **repository root** so relative paths resolve correctly.

> **Most platforms are zero-install.** The `SKILL.md` in `.agents/skills/strm-mapping/` is
> auto-discovered by OpenAI Codex, Cursor, Gemini CLI, GitHub Copilot (VS Code), and any other
> tool that implements the [Agent Skills open standard](https://agentskills.io). Only Claude Code
> requires a manual copy step.

#### Claude Code

```bash
cp -r skills/strm-mapping ~/.claude/skills/strm-mapping
claude   # run from repo root
```

Verify: ask Claude `What skills do you have available?` — you should see `strm-mapping`.

#### OpenAI Codex CLI

**Agent Skill** (auto-discovered from `.agents/skills/strm-mapping/`) — no install needed.

```bash
codex    # run from repo root
```

Invoke explicitly with `/skills` or `$strm-mapping`, or let Codex activate it implicitly.
`AGENTS.md` at the repo root is also always injected as a project context document.

#### Google Gemini CLI

Three integration levels — use any combination:

**Level 1: Agent Skill** (auto-discovered from `.agents/skills/strm-mapping/`) — no install needed.
```bash
gemini   # run from repo root — Gemini activates the skill on demand
```

**Level 2: Context file** (`GEMINI.md` at repo root) — always injected, no install needed.

**Level 3: Extension** (adds 6 MCP tools + 3 slash commands)
```bash
cd gemini-extension && npm install && npm run build && cd ..
gemini extensions link gemini-extension
# Restart Gemini CLI to activate
```
Slash commands: `/strm:map`, `/strm:gap-analysis`, `/strm:validate`

#### GitHub Copilot

`.github/copilot-instructions.md` is auto-loaded for all Copilot Chat interactions.
`.agents/skills/strm-mapping/` is also discoverable by Copilot in VS Code.

Open the repository folder in VS Code with Copilot enabled.

#### Cursor AI

`.agents/skills/strm-mapping/` is auto-discovered — no install needed.
`.cursor/rules/strm-mapping.mdc` also provides legacy rules for older Cursor versions.

Open the repository folder in Cursor.

#### Aider

```bash
aider --read CONVENTIONS.md
```

Or add to `.aider.conf.yml`:
```yaml
read:
  - CONVENTIONS.md
```

---

## Platform File Reference

| Platform | File | Location | Auto-Loaded |
|---|---|---|---|
| **All platforms** (Agent Skills standard) | `.agents/skills/strm-mapping/SKILL.md` | Repo root | Yes — Codex, Cursor, Gemini CLI, Copilot |
| Claude Code | `skills/strm-mapping/SKILL.md` | Copy to `~/.claude/skills/strm-mapping/` | Yes (after install) |
| OpenAI Codex (context doc) | `AGENTS.md` | Repo root | Yes (always injected) |
| Google Gemini CLI (context) | `GEMINI.md` | Repo root | Yes (hierarchical search) |
| Google Gemini CLI (extension) | `gemini-extension/` | Link via `gemini extensions link` | Yes (after link + build) |
| GitHub Copilot (repo instructions) | `.github/copilot-instructions.md` | `.github/` | Yes |
| Cursor AI (legacy rules) | `.cursor/rules/strm-mapping.mdc` | `.cursor/rules/` | Yes (`alwaysApply: true`) |
| Aider | `CONVENTIONS.md` | Repo root | No (`--read` required) |

See `platform-skills/PLATFORM-COMPATIBILITY.md` for format details and what changed for each platform.

---

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
│   └── libary/
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

Supported input formats: `.csv`, `.pdf`, `.md`

### Risk and Threat-Enriched Mappings

The skill can incorporate the bundled SCF 2025.4 risk and threat libraries, but only when explicitly requested:

```
Map NIST SP 800-53 AC controls to CIS Controls v8 and include risk context
```

```
Create a threat-to-control mapping using the threat library against ISO 27001
```

---

## Output Format

All outputs are 12-column CSV files:

| Column | Field | Description |
|---|---|---|
| A | `FDE#` | Source control ID |
| B | `FDE Name` | Short label for the source control |
| C | `Focal Document Element (FDE)` | Full source control text |
| D | `Confidence Levels` | `high` / `medium` / `low` |
| E | `NIST IR-8477 Rational` | `semantic` / `functional` / `syntactic` |
| F | `STRM Rationale` | Narrative explaining why the relationship holds |
| G | `STRM Relationship` | `equal` / `subset_of` / `superset_of` / `intersects_with` / `not_related` |
| H | `Strength of Relationship` | Integer 1–10 (computed via formula) |
| I | `Target Requirement Title` | Target control short title |
| J | `Target ID #` | Target control ID |
| K | `Target Requirement Description` | First sentence of target control text |
| L | `Notes` | Scope caveats, gaps, or flags |

### Strength Score Formula

```
strength = base_score + confidence_adj + rationale_adj

base_score:   equal=10  subset_of=7  superset_of=7  intersects_with=4  not_related=0
confidence:   high=0    medium=-1    low=-2
rationale:    syntactic=-1   semantic=0   functional=0

result: clamp(strength, 1, 10)
```

### Output File Naming

```
Set Theory Relationship Mapping (STRM)_ [(<Focal>-to-<Bridge>)-to-<Target>] - <Focal> to <Target>.csv
```

Example:
```
Set Theory Relationship Mapping (STRM)_ [(NIST_CSF_2.0-to-NIST_CSF_2.0)-to-ISO_IEC_27001_2022] - NIST CSF 2.0 to ISO_IEC 27001 2022.csv
```

---

## Supported Mapping Types

| Type | Description |
|---|---|
| Framework-to-Framework | NIST CSF → ISO 27001, CMMC → NIST SP 800-171, etc. |
| Framework-to-Control | Map a framework category to a specific control catalog |
| Control-to-Control | Individual control-level crosswalk between two catalogs |
| Regulation-to-Control | Map a regulation (HIPAA, GDPR) to a control framework |
| Framework-to-Policy | Map framework controls to internal policy statements |
| Framework-to-Risk | Map controls to risk entries |
| Risk-to-Control | SCF risk library → framework controls (requires explicit request) |
| Threat-to-Risk | Threat catalog → risk catalog (requires explicit request) |
| Threat-to-Control | Threat catalog → framework controls (requires explicit request) |

---

## Examples

The `examples/` directory contains fully worked mapping examples showing correct CSV structure, rationale writing patterns, and relationship assignments for each mapping type. Read these before producing a new mapping or when calibrating output quality.

---

## Updating the Installed Skill

When you pull new changes from this repository, re-copy the skill file:

```bash
git pull
cp skills/strm-mapping/SKILL.md ~/.claude/skills/strm-mapping/SKILL.md
```

---

## Methodology Reference

This toolkit implements [NIST Interagency Report 8477](https://nvlpubs.nist.gov/nistpubs/ir/2023/NIST.IR.8477.pdf): *Mapping Relationships Between Documentary Standards, Regulations, Frameworks, and Guidelines*. The full methodology reference is at `knowledge/ir8477-strm-reference.md`.

Key concepts:
- **FDE** (Focal Document Element) — the control being mapped FROM
- **RDE** (Reference Document Element) — the control being mapped TO
- Relationships are drawn from formal set theory, enabling transitivity derivation and inverse relationship generation
- Strength scores are computed deterministically, not subjectively

---

## License

See [LICENSE](LICENSE) if present, or contact the repository owner.
