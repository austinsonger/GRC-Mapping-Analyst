# Installation

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
# Check if already installed (symlink or directory)
ls -la ~/.claude/skills/strm-mapping 2>/dev/null && echo "Already installed" || cp -r skills/strm-mapping ~/.claude/skills/strm-mapping
claude   # run from repo root
```

If `~/.claude/skills/strm-mapping` already exists as a symlink to this repo, no action is needed.

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

**Level 3: Extension** (adds 6 MCP tools + 4 slash commands)
```bash
cd gemini-extension && npm install && npm run build && cd ..
gemini extensions link gemini-extension
# Restart Gemini CLI to activate
```
Slash commands: `/strm:init`, `/strm:map`, `/strm:gap-analysis`, `/strm:validate`

#### GitHub Copilot

`.github/copilot-instructions.md` is auto-loaded for all Copilot Chat interactions.
`.agents/skills/strm-mapping/` is also discoverable by Copilot in VS Code.

Open the repository folder in VS Code with Copilot enabled.

#### Cursor AI

`.agents/skills/strm-mapping/` is auto-discovered — no install needed.

Open the repository folder in Cursor.

#### Qoder

**Agent Skill** (auto-discovered from `.qoder/skills/strm-mapping/`) — no install needed.

```bash
qoder   # run from repo root
```

To install at user-level (available across all projects):
```bash
cp -r .qoder/skills/strm-mapping ~/.qoder/skills/strm-mapping
```

Invoke with `/strm-mapping` or let Qoder activate it implicitly.

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
| Qoder | `.qoder/skills/strm-mapping/SKILL.md` | Repo root | Yes (auto-discovered) |
| Aider | `CONVENTIONS.md` | Repo root | No (`--read` required) |

See `platform-skills/PLATFORM-COMPATIBILITY.md` for format details and what changed for each platform.

---

## Updating the Installed Skill

When you pull new changes from this repository:

```bash
git pull
ls -la ~/.claude/skills/strm-mapping 2>/dev/null && echo "Already installed" || cp -r skills/strm-mapping ~/.claude/skills/strm-mapping
```

If `~/.claude/skills/strm-mapping` is already a symlink to this repository, it is already live.

---
