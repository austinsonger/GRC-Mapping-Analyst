# Platform Compatibility — STRM Mapping Skill

This document explains how the STRM mapping capability is surfaced for each supported
AI coding assistant, what format each platform requires, and what changes were made to
adapt the original Claude Code skill.

---

## Supported Platforms

| Platform | File | Location | Auto-Loaded? |
|---|---|---|---|
| Claude Code | `skills/strm-mapping/SKILL.md` | User copies to `~/.claude/skills/strm-mapping/` | Yes (skill system) |
| Google Gemini CLI | `GEMINI.md` | Repository root | Yes (hierarchical search) |
| OpenAI Codex CLI | `AGENTS.md` | Repository root | Yes (hierarchical search) |
| GitHub Copilot | `.github/copilot-instructions.md` | `.github/` directory | Yes (auto-injected) |
| Cursor AI | `.cursor/rules/strm-mapping.mdc` | `.cursor/rules/` directory | Yes (`alwaysApply: true`) |
| Aider | `CONVENTIONS.md` | Repository root | No (explicit `--read`) |

---

## Platform Format Requirements

### Claude Code — `skills/strm-mapping/SKILL.md`

**Format:** YAML frontmatter + Markdown body

**Required frontmatter fields:**
```yaml
---
name: <skill-name>
description: <one-line description for automatic skill selection>
version: <semver>
---
```

**Loading mechanism:** User copies `skills/strm-mapping/` to `~/.claude/skills/`.
Claude Code automatically discovers and loads skills from that directory.
The `description` field is used by the AI to decide whether to invoke the skill.

**Key constraints:**
- The skill is invoked as a discrete command (users invoke it via the Skill tool)
- Contains a "When to Activate" section that serves as the trigger definition
- Supports a structured workflow section
- No size limits documented

**Changes from original:** None — this is the canonical source file. Absolute paths
replaced with relative paths for portability.

---

### Google Gemini CLI — `GEMINI.md`

**Format:** Plain Markdown, no required frontmatter

**Loading mechanism:** Gemini CLI automatically searches for `GEMINI.md` starting from
the current working directory and walking up to the git root, plus `~/.gemini/GEMINI.md`
for global config. Files are concatenated and injected with every prompt.

**Key constraints:**
- No activation trigger — content is always injected as context
- Supports `@filename.md` import syntax to include other files
- No documented size limits

**Changes from Claude Code skill:**
- Removed YAML frontmatter (`name`, `description`, `version`)
- Removed Claude Code-specific "When to Activate" framing; replaced with "When to Perform STRM Mapping" (context rather than invocation)
- Added opening paragraph explaining this is Gemini CLI context configuration
- Replaced absolute paths with relative paths
- Condensed distribution reference tables into a single combined table
- Retained all methodology content: workflow, formula, rationale pattern, transitivity, inverse, quality rules, risk/threat section

---

### OpenAI Codex CLI — `AGENTS.md`

**Format:** Plain Markdown, no required frontmatter

**Loading mechanism:** Codex CLI reads `AGENTS.md` (and `AGENTS.override.md` if present)
starting from the git root and walking down to the current directory. Files are
concatenated. Also recognized by GitHub Copilot agent mode.

**Key constraints:**
- No activation trigger — always injected as task context
- **32 KiB default size limit** (`project_doc_max_bytes`, configurable to 65536 bytes)
- No frontmatter

**Changes from Claude Code skill:**
- Removed YAML frontmatter
- Condensed content to stay well under the 32 KiB limit:
  - Merged distribution calibration tables and attribute defaults
  - Shortened rationale section
  - Removed worked-example references (available separately in `examples/`)
- Reframed as imperative agent instructions ("Read before writing", "Compute via formula")
- Replaced absolute paths with relative paths
- Added note that AGENTS.md is also read by GitHub Copilot agent mode

---

### GitHub Copilot — `.github/copilot-instructions.md`

**Format:** Plain Markdown, no required frontmatter

**Loading mechanism:** GitHub Copilot automatically reads `.github/copilot-instructions.md`
from the repository root for all Copilot Chat interactions in that workspace. Injected
with every Copilot request.

**Key constraints:**
- No activation trigger — always active for all Copilot interactions in the repo
- Optional YAML frontmatter only for path-scoped instruction files
  (`applyTo: "glob-pattern"`) — not needed for repo-wide instructions
- No documented size limits
- Content should be phrased as "When assisting in this repository, Copilot should..."

**Changes from Claude Code skill:**
- Removed YAML frontmatter and skill-specific metadata
- Removed "When to Activate" and workflow sections — replaced with a concise reference
  format (Copilot uses it as passive context, not a procedural script)
- Focused on: output format specification, naming convention, strength formula, rationale
  pattern, file locations, transitivity rules, and quality rules
- Phrased all instructions as Copilot behavioral guidance rather than agent workflow steps
- Replaced absolute paths with relative paths

---

### Cursor AI — `.cursor/rules/strm-mapping.mdc`

**Format:** YAML frontmatter + Markdown body, `.mdc` file extension

**Required frontmatter fields:**
```yaml
---
description: <description used by AI to decide whether to apply this rule>
globs: ["pattern/**/*.ext"]
alwaysApply: true | false
---
```

**Loading mechanism:** Cursor automatically discovers all `.mdc` files in `.cursor/rules/`.
With `alwaysApply: true`, the rule is injected into every chat session regardless of context.
With `alwaysApply: false`, Cursor uses the `description` field to decide when to apply it.

**Key constraints:**
- `.mdc` file extension is required
- YAML frontmatter with at least `description`, `globs`, and `alwaysApply` is required
- Globs determine automatic inclusion when matching files are referenced in context
- No documented size limits

**Changes from Claude Code skill:**
- Added required Cursor `.mdc` frontmatter with `description`, `globs`, and `alwaysApply: true`
  - `globs` set to `working-directory/**` and `examples/**` to scope the rule to mapping work
  - `alwaysApply: true` because this is a domain-specific repository
- Removed Claude Code skill frontmatter (`name`, `version`)
- Added explicit terminology table (FDE, RDE, STRM Relationship, Strength) at the top
- Reformatted workflow as numbered steps matching Cursor's preferred concise style
- Added column-letter mapping table for the 12-column CSV (useful for Cursor's inline edits)
- Retained full methodology: formula, rationale pattern, transitivity, inverse, quality rules

---

### Aider — `CONVENTIONS.md`

**Format:** Plain Markdown, no required frontmatter

**Loading mechanism:** Unlike other platforms, Aider does NOT auto-load files.
Users must explicitly load the file:
- Session flag: `aider --read CONVENTIONS.md`
- Config file (`~/.aider.conf.yml` or `.aider.conf.yml`):
  ```yaml
  read:
    - CONVENTIONS.md
  ```

**Key constraints:**
- No frontmatter
- Standard Markdown
- No size limits documented
- Typically structured as imperative coding guidelines ("Always X", "Never Y")
- Must include load instructions at the top since it's not auto-loaded

**Changes from Claude Code skill:**
- Removed YAML frontmatter
- Added load instructions at the top (how to pass the file to Aider)
- Reformatted content as imperative conventions with "Always / Never" language
- Added a quality checklist (common Aider pattern for self-verification)
- Condensed workflow descriptions — Aider users typically provide files interactively
- Replaced absolute paths with relative paths
- Retained full methodology content

---

## What Was Preserved Across All Platforms

All platform versions maintain the following core STRM functionality:

1. **Relationship types**: `equal`, `subset_of`, `superset_of`, `intersects_with`, `not_related`
2. **Strength score formula**: base + confidence adjustment + rationale adjustment, clamped to [1,10]
3. **Confidence defaults**: `high`, with specific override conditions
4. **Rationale type defaults**: `semantic`, with `functional` override condition; `syntactic` rarely
5. **Rationale writing pattern**: structured three-sentence narrative
6. **12-column CSV output format**: exact column order and header structure
7. **File naming convention**: `Set Theory Relationship Mapping (STRM)_ [(<Focal>-to-<Bridge>)-to-<Target>]...`
8. **Artifact folder convention**: `working-directory/mapping-artifacts/YYYY-MM-DD_<Focal>-to-<Target>/`
9. **Transitivity rules**: complete truth table for derived mappings
10. **Inverse relationship rules**: forward→inverse mapping table
11. **Risk/threat enrichment**: opt-in only, never auto-loaded
12. **Quality rules**: rationale completeness, formula compliance, no invented IDs

---

## Updating All Platforms

When the core STRM methodology changes in `skills/strm-mapping/SKILL.md`, update
the following files to keep them in sync:

| File | Section to Update |
|---|---|
| `GEMINI.md` | Workflow, formula, rationale pattern, quality rules |
| `AGENTS.md` | Workflow, formula, rationale pattern, quality rules |
| `.github/copilot-instructions.md` | Formula, rationale pattern, quality rules |
| `.cursor/rules/strm-mapping.mdc` | Workflow, formula, rationale pattern, quality rules |
| `CONVENTIONS.md` | Formula, rationale pattern, quality checklist |
| `README.md` | Output format table, formula, installation instructions |
