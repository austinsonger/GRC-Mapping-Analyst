# STRM Mapping — Coding Conventions (Aider)

Load this file when starting an Aider session in this repository:

```bash
aider --read CONVENTIONS.md
```

Or add to `.aider.conf.yml`:
```yaml
read:
  - CONVENTIONS.md
```

---

## Repository Purpose

This repository produces **Set-Theory Relationship Mapping (STRM)** CSV files between
cybersecurity frameworks, control catalogs, and regulatory requirements, following the
NIST IR 8477 methodology. All AI-assisted work in this repository must conform to the
STRM methodology and output format described below.

---

## General Conventions

- Always read `knowledge/ir8477-strm-reference.md` before performing any mapping work.
- Always write output files to `working-directory/` — never to the repository root.
- Always copy (never modify) `TEMPLATE_Set Theory Relationship Mapping (STRM).csv` as the starting point.
- Always check for existing STRM files for a source→target pair before creating a new one.
- Always confirm both the source (Focal) and target (Reference) document before starting.

---

## STRM Terminology

| Term | Abbreviation | Meaning |
|---|---|---|
| Focal Document Element | FDE | One control from the source framework |
| Reference Document Element | RDE | One control from the target framework |
| STRM Relationship | STR | Set-theory relationship between FDE and RDE |

---

## Relationship Types

| Value | Meaning |
|---|---|
| `equal` | FDE and RDE express identical requirements |
| `subset_of` | FDE scope entirely contained within RDE |
| `superset_of` | FDE scope entirely contains RDE |
| `intersects_with` | FDE and RDE partially overlap |
| `not_related` | Zero meaningful overlap (rare) |

---

## Attribute Defaults

| Attribute | Default | Override Condition |
|---|---|---|
| `Confidence Levels` | `high` | `medium` for ambiguity; `low` for significant inference |
| `NIST IR-8477 Rational` | `semantic` | `functional` for same outcome via different mechanisms; `syntactic` only for word-for-word similarity (<1%) |

---

## Strength Score Formula

Always compute — never assign arbitrarily:

```
base:       equal=10  subset_of=7  superset_of=7  intersects_with=4  not_related=0
confidence: high=0    medium=-1    low=-2
rationale:  syntactic=-1   semantic=0   functional=0
result:     clamp(base + confidence + rationale, 1, 10)
```

---

## Rationale Writing Pattern

Every row must have a non-empty rationale in Column F following this pattern:

```
<Source> <FDE#> requires <X>. <Target> <RDE#> requires <Y>. Both <shared objective>.
```

For `intersects_with` mappings, append:
```
Both address <overlap>. <Source> additionally covers <A>; <Target> additionally covers <B>.
```

---

## CSV Output Format (12 columns)

```
Row 1: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,<Target> Requirement Title,Target ID #,<Target> Requirement Description,Notes
Row 2+: <data rows>
```

Column definitions:
- A: Source control ID
- B: Source control short label
- C: Full source control text
- D: `high` / `medium` / `low`
- E: `semantic` / `functional` / `syntactic`
- F: Rationale narrative
- G: `equal` / `subset_of` / `superset_of` / `intersects_with` / `not_related`
- H: Integer 1–10 (computed)
- I: `<Target> Requirement Title` — target document short title (replace `<Target>` with actual target name)
- J: `Target ID #` — target control ID
- K: `<Target> Requirement Description` — first sentence of target control text (replace `<Target>` with actual target name)
- L: Notes, caveats, gaps

---

## File Naming Convention

```
Set Theory Relationship Mapping (STRM)_ [(<Focal>-to-<Bridge>)-to-<Target>] - <Focal> to <Target>.csv
```

For direct mappings, repeat the focal name in both the Focal and Bridge slots.

---

## Artifact Folder Convention

```
working-directory/mapping-artifacts/YYYY-MM-DD_<FocalFramework>-to-<TargetFramework>/
```

Place the completed CSV inside the dated folder when mapping is fully complete.

---

## Transitivity Rules

| A→B | B→C | Derived A→C |
|---|---|---|
| equal | equal | equal |
| equal | X | X |
| X | equal | X |
| subset_of | subset_of | subset_of |
| superset_of | superset_of | superset_of |
| not_related | anything | not_related |
| intersects_with | anything | indeterminate — do not auto-generate; flag for review |

---

## Inverse Relationship Rules

| Forward | Inverse |
|---|---|
| equal | equal |
| subset_of | superset_of |
| superset_of | subset_of |
| intersects_with | intersects_with |
| not_related | not_related |

---

## Quality Checklist

- [ ] Rationale (Column F) is filled for every row
- [ ] Strength score matches the formula output
- [ ] No target control IDs are invented — all IDs come from the actual target document
- [ ] Columns I and K use target-adapted names: `<Target> Requirement Title` and `<Target> Requirement Description` (with `<Target>` replaced by actual target framework name)
- [ ] Baseline/foundational controls mapped before advanced tiers
- [ ] Risk and threat files loaded only when explicitly requested

---

## Risk and Threat Enrichment (Opt-In)

Load these files **only** when the user explicitly requests risk or threat context:

| File | Contents |
|---|---|
| `knowledge/library/risks.json` | SCF 2025.4 risk catalog |
| `knowledge/library/threats.json` | Threat catalog |

Relationship chain: Threat → Risk → Control
Apply transitivity rules when traversing the chain.
