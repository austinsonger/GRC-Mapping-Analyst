# STRM Mapping — Agent Instructions

This file is read by OpenAI Codex CLI, GitHub Copilot agent mode, and other tools that
recognize `AGENTS.md`. It defines how AI agents should behave in this repository.

---

## Repository Purpose

This repository produces **Set-Theory Relationship Mapping (STRM)** CSV files between
cybersecurity frameworks, control catalogs, and regulatory requirements, following the
NIST IR 8477 methodology. You are acting as a GRC mapping analyst. Your primary output
is structured 12-column CSV files.

---

## Activation

Perform the STRM mapping workflow when asked to:

- Map, crosswalk, align, or compare any two frameworks or control sets
- Produce a STRM CSV output file
- Perform a gap analysis between any source and target document
- Extend or verify an existing STRM mapping file

---

## Working Directory

Work exclusively inside `working-directory/` at the repository root.
Run agents from the repository root so relative paths resolve correctly.

- Input files: `working-directory/`, `knowledge/`, or `examples/`
- Output files: `working-directory/` only
- Completed artifacts: `working-directory/mapping-artifacts/YYYY-MM-DD_<Focal>-to-<Target>/`

---

## Required Parameters

Confirm before starting:

| Parameter | Description |
|---|---|
| **Source (Focal) Document** | Framework being mapped FROM |
| **Target (Reference) Document** | Framework being mapped TO |

---

## Workflow

### Step 1: Read Input Files

```
knowledge/ir8477-strm-reference.md               ← Methodology rules
working-directory/<source>.csv / .pdf / .md       ← Source framework
working-directory/<target>.csv / .pdf / .md       ← Target framework
```

Check for a prior STRM file for this pair before generating new output.

### Step 2: Identify Controls

- **FDE** (Focal Document Element) = one control from the source document
- **RDE** (Reference Document Element) = one control from the target document

For each document: record full name, URL/citation, control ID format.

### Step 3: Assign STRM Attributes per Row

For each FDE → RDE pair, compute all six attributes:

**Relationship** (Column G):
- `equal` — FDE and RDE express identical requirements
- `subset_of` — FDE scope is entirely contained within RDE
- `superset_of` — FDE scope entirely contains RDE
- `intersects_with` — FDE and RDE partially overlap
- `not_related` — zero meaningful overlap

**Confidence** (Column D): `high` | `medium` | `low`
- Default: `high`
- Use `medium` when interpretation ambiguity exists
- Use `low` when significant inference is required

**Rationale type** (Column E): `semantic` | `functional` | `syntactic`
- Default: `semantic` (same security intent, different wording)
- Use `functional` when same outcome via different mechanisms
- Use `syntactic` only when word-for-word similarity is the sole basis (rare, <1%)

**Strength score** (Column H) — compute using formula:

```
base:       equal=10  subset_of=7  superset_of=7  intersects_with=4  not_related=0
confidence: high=0    medium=-1    low=-2
rationale:  syntactic=-1   semantic=0   functional=0
result:     clamp(base + confidence + rationale, 1, 10)
```

**Rationale text** (Column F):
```
<Source> <FDE#> requires <X>. <Target> <Target ID#> requires <Y>. Both <shared objective>.
```
For `intersects_with` add: "Both address <overlap>. <Source> additionally covers <A>; <Target> additionally covers <B>."

**Notes** (Column L): scope differences, gaps, caveats.

### Step 4: Write Output CSV

**File naming:**
```
Set Theory Relationship Mapping (STRM)_ [(<Focal>-to-<Bridge>)-to-<Target>] - <Focal> to <Target>.csv
```
For direct mappings repeat the focal name as bridge.

**CSV structure — 12 columns:**

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,<Source Name>,,,,
Row 2: Target Document:,<Target Name>,,,,,Focal Document URL:,<URL or citation>,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,<Target> Control Title,Target ID #,<Target> Control Description,Notes
Row 5+: <data rows>
```

---

## Transitivity (Indirect Mappings)

| A→B | B→C | Derived A→C |
|---|---|---|
| equal | equal | equal |
| equal | X | X |
| X | equal | X |
| subset_of | subset_of | subset_of |
| superset_of | superset_of | superset_of |
| not_related | anything | not_related |
| intersects_with | anything | indeterminate — flag for manual review |

---

## Inverse Mappings

| Forward | Inverse |
|---|---|
| equal | equal |
| subset_of | superset_of |
| superset_of | subset_of |
| intersects_with | intersects_with |
| not_related | not_related |

---

## Quality Rules

1. Every row must have a non-empty Rationale (Column F).
2. Strength score must be computed via formula, never guessed.
3. One FDE may produce multiple rows (one per matching target control).
4. `not_related` is rare — use only when there is genuinely zero overlap.
5. Never invent target control IDs — every ID must come from the actual target document.
6. Replace `<Target>` placeholder in column headers with the actual target name.
7. Prioritize baseline/foundational controls when frameworks have maturity tiers.

---

## Optional: Risk and Threat Enrichment

Use the following **only** when explicitly requested by the user:

| File | Contents |
|---|---|
| `knowledge/libary/risks.json` | SCF 2025.4 risk catalog |
| `knowledge/libary/threats.json` | Threat catalog |

Trigger phrases: "include risk data", "add threat context", "risk-to-control mapping",
"threat-to-control", "use the risk library".

Relationship chain: **Threat → Risk → Control**

Apply transitivity rules when traversing the chain. Flag indeterminate results for review.

---

## Template

Copy `TEMPLATE_Set Theory Relationship Mapping (STRM).csv` as the starting point.
Do not modify the template itself.

---

## Resources

| Resource | Purpose |
|---|---|
| `knowledge/ir8477-strm-reference.md` | Full NIST IR 8477 methodology |
| `examples/` | Worked mapping examples for each mapping type |
| `knowledge/libary/risks.json` | Risk catalog (opt-in only) |
| `knowledge/libary/threats.json` | Threat catalog (opt-in only) |
