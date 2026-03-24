# Platform Compatibility — STRM Mapping Skill

This document describes how STRM mapping capability is surfaced for each supported AI
coding assistant, the exact format each platform requires, and what changes were made
to adapt the original skill.

---

## The Agent Skills Open Standard

The `SKILL.md` format used by this repository is an **open standard** originally
developed by Anthropic and maintained at [agentskills.io](https://agentskills.io).
It is supported by Claude Code, OpenAI Codex, Cursor, Gemini CLI, GitHub Copilot
(VS Code), and 30+ other tools.

**Canonical skill location in this repo:**
```
.agents/skills/strm-mapping/SKILL.md
```

Tools that support the Agent Skills standard auto-discover skills from `.agents/skills/`
(repo-level) and `~/.agents/skills/` (user-level) without any manual installation step.
The `skills/strm-mapping/SKILL.md` copy exists for Claude Code's specific install path.

### SKILL.md Specification (agentskills.io)

| Field | Required | Constraints |
|---|---|---|
| `name` | Yes | 1–64 chars; lowercase letters, numbers, hyphens only; must match parent directory name |
| `description` | Yes | 1–1024 chars; describes what the skill does and when to trigger |
| `license` | No | License name or reference to bundled license file |
| `compatibility` | No | 1–500 chars; environment requirements, intended products |
| `metadata` | No | Arbitrary key-value map for additional properties |
| `allowed-tools` | No | Space-delimited pre-approved tools (experimental) |

Body content: Markdown instructions. No format restrictions. Recommended: keep under 500 lines.

---

## Supported Platforms

| Platform | Primary Integration | File(s) | Auto-Loaded? |
|---|---|---|---|
| Claude Code | Agent Skill | `skills/strm-mapping/SKILL.md` → install to `~/.claude/skills/` | Yes (after install) |
| OpenAI Codex CLI | Agent Skill | `.agents/skills/strm-mapping/SKILL.md` | Yes (auto-discovered) |
| OpenAI Codex CLI | Project context doc | `AGENTS.md` | Yes (always injected) |
| Cursor AI | Agent Skill | `.agents/skills/strm-mapping/SKILL.md` | Yes (auto-discovered) |
| Google Gemini CLI | Agent Skill | `.agents/skills/strm-mapping/SKILL.md` | Yes (auto-discovered) |
| Google Gemini CLI | Context file | `GEMINI.md` | Yes (hierarchical search) |
| Google Gemini CLI | Extension (MCP) | `gemini-extension/` | Yes (after `extensions link`) |
| GitHub Copilot | Repo instructions | `.github/copilot-instructions.md` | Yes (auto-injected) |
| Qoder | Agent Skill | `.qoder/skills/strm-mapping/SKILL.md` | Yes (auto-discovered) |
| Aider | Conventions file | `CONVENTIONS.md` | No (explicit `--read`) |

---

## Platform Format Requirements

### Agent Skills Standard — `.agents/skills/strm-mapping/SKILL.md`

**Applies to:** OpenAI Codex, Cursor, Gemini CLI, GitHub Copilot (VS Code), and any
other tool implementing the agentskills.io specification.

**Format:** YAML frontmatter + Markdown body

**Frontmatter used in this skill:**
```yaml
---
name: strm-mapping
description: Use when asked to map, crosswalk, align...
license: Apache-2.0
compatibility: Compatible with any Agent Skills-compatible assistant...
metadata:
  author: austinsonger
  version: "2.0.0"
  methodology: NIST IR 8477
  standard: agentskills.io
---
```

**Loading mechanism:** Tools auto-discover `SKILL.md` files inside `.agents/skills/`
at the repository root and `~/.agents/skills/` for user-level skills. Codex additionally
reads from `$HOME/.agents/skills/` and `/etc/codex/skills` (admin-level).

**Activation:** Either explicit (`/skills` command or `$skill-name` mention) or implicit
when the task description matches the skill's `description` field. The `description` is
loaded at startup for all skills (low cost); the full body is only loaded when the skill
is activated (progressive disclosure).

**Progressive disclosure:** Only `name` and `description` are loaded at startup (~100
tokens). The full SKILL.md body loads on activation (<5000 tokens recommended). Files in
`references/`, `scripts/`, and `assets/` load only when explicitly needed.

**Key constraints:**
- `name` must be lowercase with hyphens only and match the parent directory name exactly
- Body should be under 500 lines
- No size limits on individual files but keep main SKILL.md focused

**Codex-specific metadata:** `.agents/skills/strm-mapping/agents/openai.yaml` provides
Codex with a display name, short description, default prompt, and invocation policy.

**Changes from Claude Code version:**
- Added `license`, `compatibility`, and `metadata` fields to frontmatter
- Changed "Claude Code must be opened" to generic "Run your AI assistant from the repository root"
- No other content changes — methodology is identical

---

### Claude Code — `skills/strm-mapping/SKILL.md`

**Format:** Agent Skills standard (YAML frontmatter + Markdown body)

**Loading mechanism:** User copies `skills/strm-mapping/` to `~/.claude/skills/strm-mapping/`.
Claude Code automatically discovers skills from `~/.claude/skills/` and from
`.agents/skills/` at the repo root.

**Install command:**
```bash
ls -la ~/.claude/skills/strm-mapping 2>/dev/null && echo "Already installed" || cp -r skills/strm-mapping ~/.claude/skills/strm-mapping
```

If `~/.claude/skills/strm-mapping` already exists as a symlink to this repo, no copy action is needed.

**Key constraints:**
- Same `name`/`description` format as the open standard
- Skills are invoked via the Skill tool; the `description` drives automatic selection
- No size limits documented; keep SKILL.md under 500 lines per open standard guidance

**Differences from `.agents/skills/` version:**
- `compatibility` notes Claude Code specifically
- "Working Directory" section says "Claude Code must be opened from the repository root"
- Otherwise identical — both files comply with the agentskills.io spec

---

### OpenAI Codex CLI — `.agents/skills/strm-mapping/` + `AGENTS.md`

**Two distinct mechanisms; both are active:**

#### Agent Skill (`.agents/skills/strm-mapping/SKILL.md`)

The primary on-demand interface. Codex reads skills from these locations in order:

1. `$CWD/.agents/skills/` — current working directory
2. `$CWD/../.agents/skills/` — parent directory
3. `$REPO_ROOT/.agents/skills/` — repository root ← **where our skill lives**
4. `$HOME/.agents/skills/` — user-level
5. `/etc/codex/skills` — admin-level
6. Built-in skills bundled with Codex

Invoke explicitly with `/skills` or `$strm-mapping`; or allow implicit activation when the task description matches the skill.

**Codex skill creator tool:** `$skill-creator` — can scaffold new skills interactively.
**Codex skill installer:** `$skill-installer <name>` — installs community skills.

**Enable/disable in config:**
```toml
# ~/.codex/config.toml
[[skills.config]]
path = "/path/to/.agents/skills/strm-mapping/SKILL.md"
enabled = true
```

#### Project Context Document (`AGENTS.md`)

`AGENTS.md` at the repo root is **always injected** before any task execution — it is not a skill and has no activation trigger. It applies to all work regardless of which skill is active. Default size limit: 32 KiB (`project_doc_max_bytes`; configurable to 65536 bytes).

`AGENTS.md` in this repo contains:
- Repository purpose and project-level constraints
- Instructions on how to activate the STRM skill
- A quick-reference methodology summary (so Codex has context even without activating the skill)

**Changes from prior version:**
- `AGENTS.md` no longer presented as the sole Codex interface
- Added explicit instructions for activating the `.agents/skills/strm-mapping/` skill
- `AGENTS.md` content now framed as project constraints + quick reference

---

### Google Gemini CLI — Three Integration Levels

All three can be used simultaneously; they complement each other.

#### Level 1: Agent Skill (`.agents/skills/strm-mapping/SKILL.md`)

Gemini CLI searches for skills in:
- `.gemini/skills/` or `.agents/skills/` (workspace, `.agents/` takes precedence)
- `~/.gemini/skills/` or `~/.agents/skills/` (user-level)
- Bundled within installed extensions

The model calls the `activate_skill` tool when the task matches the skill description.
The user confirms, and the full skill content becomes available for the session.

**Key difference from GEMINI.md:** Progressive disclosure — only metadata is loaded at
startup; the full SKILL.md is loaded on activation. GEMINI.md is always fully injected.

#### Level 2: Context File (`GEMINI.md`)

`GEMINI.md` at the repo root is automatically discovered and fully injected into every
prompt. Gemini CLI walks from the current directory up to the git root, concatenating
all `GEMINI.md` files found. No activation required.

**Format:** Plain Markdown, no frontmatter. Supports `@filename.md` import syntax.

**Use for:** Persistent methodology context that should always be available, not
conditionally activated.

#### Level 3: Extension (`gemini-extension/`)

Full MCP server providing 7 callable tools and 4 slash commands.

**Install:**
```bash
cd gemini-extension && npm install && npm run build && cd ..
gemini extensions link gemini-extension
# Restart Gemini CLI
```

Stored at `~/.gemini/extensions/strm-mapping/` after linking.

**MCP tools:** `strm_compute_strength`, `strm_generate_filename`, `strm_build_csv_header`,
`strm_validate_row`, `strm_validate_csv`, `strm_list_input_files`, `strm_check_existing_mapping`

**Slash commands:** `/strm:init`, `/strm:map`, `/strm:gap-analysis`, `/strm:validate`

**Use for:** Deterministic operations (score computation, filename generation, validation)
that should not rely on the LLM calculating or guessing values.

### Cross-Platform Deterministic Script Layer

For platforms without extension-style slash commands, this repository provides a shared
CLI script layer in `scripts/bin/`:

- `strm-compute-strength.mjs`
- `strm-generate-filename.mjs`
- `strm-build-header.mjs`
- `strm-list-input-files.mjs`
- `strm-check-existing-mapping.mjs`
- `strm-init-mapping.mjs`
- `strm-validate-csv.mjs`
- `strm-gap-report.mjs`

These scripts make deterministic STRM operations portable across Claude Code, Codex CLI,
Cursor, Copilot, Qoder, and Aider.

---

### GitHub Copilot — `.github/copilot-instructions.md`

**Note:** GitHub Copilot (VS Code) also supports the Agent Skills standard via
`.agents/skills/`. The `.github/copilot-instructions.md` file provides repo-wide
passive context for all Copilot interactions, while the Agent Skill provides on-demand
focused activation.

**Format:** Plain Markdown, no required frontmatter

**Loading mechanism:** Automatically read for all Copilot Chat interactions in the
repository workspace. Always injected — no activation required.

**Path-scoped instructions** (optional, in `.github/instructions/`):
```yaml
---
applyTo: "working-directory/**"
---
```

**Key constraints:**
- No activation trigger — always active for all Copilot interactions in the repo
- Phrased as behavioral guidance ("When assisting in this repository, Copilot should...")
- No documented size limits

**Changes from Claude Code skill:**
- No YAML frontmatter
- Condensed to reference format (Copilot uses passive context, not procedural script)
- Focused on output format spec, naming convention, formula, quality rules
- Phrased as Copilot behavioral guidance, not agent workflow steps

---

### Cursor AI — `.agents/skills/strm-mapping/SKILL.md`

Cursor auto-discovers skills from these directories:
- `.agents/skills/` (project-level) ← **our skill is here**
- `.cursor/skills/` (project-level, Cursor-specific path)
- `~/.cursor/skills/` (user-level)

Since `.agents/skills/strm-mapping/` exists in this repo, Cursor finds the skill
automatically. No additional setup required.

**Remote skills:** Cursor Settings → Rules → Add Rule → Remote Rule (GitHub URL).

**Disable model invocation** (turn skill into a slash command):
```yaml
metadata:
  disable-model-invocation: "true"
```

---

### Qoder — `.qoder/skills/strm-mapping/SKILL.md`

**Format:** Agent Skills standard (YAML frontmatter + Markdown body) — same spec as
`.agents/skills/strm-mapping/SKILL.md`

**Loading mechanism:** Qoder discovers skills from two locations:

1. `~/.qoder/skills/{skill-name}/SKILL.md` — user-level (personal, persistent across projects)
2. `.qoder/skills/{skill-name}/SKILL.md` — project-level ← **where our skill lives**

Project-level skills take precedence over user-level skills when both exist.

**Activation:** Type `/strm-mapping` in the chat or let Qoder activate the skill
implicitly when the task description matches the `description` frontmatter field.

**Install to user-level (optional):**
```bash
cp -r .qoder/skills/strm-mapping ~/.qoder/skills/strm-mapping
```

After copying, the skill is available in all Qoder projects without needing the repo.

**Key constraints:**
- Same `name`/`description` format as the open standard
- `name` must be lowercase with hyphens only and match the parent directory name
- Body should be under 500 lines

**Relation to `.agents/skills/`:** Qoder also reads `.agents/skills/` (Agent Skills
standard), so the skill at `.agents/skills/strm-mapping/SKILL.md` is also discovered.
The `.qoder/skills/` copy is provided as the idiomatic Qoder-specific path for users who
install to `~/.qoder/skills/`.

**Changes from `.agents/skills/` version:**
- `compatibility` field notes "Designed for Qoder"
- "Working Directory" section uses generic phrasing
- Otherwise identical — methodology and CSV format are the same

---

### Aider — `CONVENTIONS.md`

**Format:** Plain Markdown, no required frontmatter

**Loading mechanism:** Aider does NOT auto-load files. Explicit load required:
```bash
aider --read CONVENTIONS.md
```

Or in `.aider.conf.yml`:
```yaml
read:
  - CONVENTIONS.md
```

**Note:** Aider does not implement the Agent Skills standard. `CONVENTIONS.md` is the
appropriate integration point — it provides coding conventions and methodology guidelines
in a format Aider is designed to consume.

**Key constraints:**
- No frontmatter
- Standard Markdown; structured as imperative conventions ("Always X", "Never Y")
- Load instructions must be at the top since the file is not auto-discovered

---

## Methodology Preserved Across All Platforms

All platform versions maintain identical STRM methodology:

| Component | Value |
|---|---|
| Relationship types | `equal`, `subset_of`, `superset_of`, `intersects_with`, `not_related` |
| Strength formula | base + confidence_adj + rationale_adj, clamped to [1,10] |
| Confidence default | `high` |
| Rationale type default | `semantic` |
| Rationale pattern | `<Source> <FDE#> requires <X>. <Target> <RDE#> requires <Y>. Both <shared>.` |
| CSV columns | 12 columns, fixed order |
| File naming | `Set Theory Relationship Mapping (STRM)_ [(<Focal>-to-<Bridge>)-to-<Target>]...` |
| Artifact folders | `working-directory/mapping-artifacts/YYYY-MM-DD_<Focal>-to-<Target>/` |
| Transitivity | Full truth table for derived mappings, including `anything` + `not_related` => `not_related` |
| Inverse relationships | `subset_of` ↔ `superset_of`; others self-inverse |
| Risk/threat enrichment | Opt-in only — never auto-loaded |

---

## Keeping All Platforms in Sync

When the STRM methodology changes in `.agents/skills/strm-mapping/SKILL.md`, update:

| File | What to Update |
|---|---|
| `skills/strm-mapping/SKILL.md` | Mirror all methodology changes; keep Claude Code-specific wording |
| `GEMINI.md` | Workflow, formula, rationale pattern, quality rules |
| `AGENTS.md` | Quick-reference methodology section |
| `.github/copilot-instructions.md` | Formula, rationale pattern, quality rules |
| `CONVENTIONS.md` | Formula, rationale pattern, quality checklist |
| `gemini-extension/GEMINI.md` | Tool usage guide sections that reference methodology |
| `.qoder/skills/strm-mapping/SKILL.md` | Mirror all methodology changes; keep Qoder-specific compatibility note |
| `README.md` | Output format table, formula, installation instructions |

The canonical source of truth for methodology is `.agents/skills/strm-mapping/SKILL.md`.
