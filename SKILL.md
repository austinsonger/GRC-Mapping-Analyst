---
name: strm-mapping
description: >
  Produces NIST IR 8477 Set-Theory Relationship Mapping (STRM) CSV files between
  any two documents that contain controls or requirements. Use whenever asked to
  map, crosswalk, align, or perform a gap analysis between any two frameworks,
  catalogs, or control sets. The source (Focal Document) and target (Reference
  Document) are specified by the user at runtime.
version: 2.0.0
---

# NIST IR 8477 STRM Mapping — GRC Toolkit Skill

## When to Activate

Activate this skill whenever the user asks to:

- Map, crosswalk, align, or compare any two frameworks, catalogs, or control sets
- Create a STRM CSV output file between any two documents
- Perform a gap analysis between any source and target document
- Extend or verify an existing STRM mapping file

---

## Runtime Parameters

Before beginning any work, confirm both parameters with the user if they were not
already specified in the request:

| Parameter | Description | Example |
|---|---|---|
| **Source (Focal) Document** | The framework or catalog being mapped **FROM** | `FFIEC CAT`, `ISO/IEC 27001:2022`, `NIST SP 800-53 Rev 5` |
| **Target (Reference) Document** | The framework or catalog being mapped **TO** | `ISO/IEC 27001:2022`, `CIS Controls v8`, `NIST CSF 2.0` |

> If the user provides only one document, ask which document it should be mapped **to**.
> Either document can be a proprietary catalog, a regulatory framework, an audit
> questionnaire, or any structured list of controls or requirements.

---

## Step-by-Step Workflow

### 1. Gather Source Files

Locate and read the relevant input files before generating any output:

```
grc-pro/knowledge/mappings/ir8477-strm-reference.md   ← STRM methodology rules
<source-document>.csv / .pdf / .md                     ← Focal document (controls/requirements)
<target-document>.csv / .pdf / .md                     ← Reference document (controls/requirements)
```

Search the repository for existing files matching the document names:
- Check `frameworks/` for framework CSVs and PDFs
- Check the project root for catalog CSVs
- Check `grc-pro/knowledge/` for structured control definitions

If a prior STRM file already exists for this source→target pair, read it first to
avoid duplicates and maintain consistency.

### 2. Identify the Focal Document Element (FDE) and Reference Document Element (RDE)

- **FDE** = a single control or requirement from the **source** document
- **RDE** = a single control or requirement from the **target** document

Determine for each document:
- Full name and URL (or citation)
- Control ID format (e.g., `D1.G.Ov.B.1`, `A.5.1`, `PR.AC-1`, `AC-2`)
- Maturity or tier structure, if any
- The column or field that contains the control text

### 3. Assign STRM Attributes per Mapping Row

For each FDE → RDE mapping, assign all six STRM attributes:

| Attribute | Allowed Values | Scoring Rule |
|---|---|---|
| `Confidence Levels` | `high`, `medium`, `low` | high = +0, medium = −1, low = −2 |
| `NIST IR-8477 Rational` | `semantic`, `functional`, `syntactic` | syntactic = −1, others = +0 |
| `STRM Relationship` | `equal`, `subset_of`, `superset_of`, `intersects_with`, `not_related` | equal=10, subset/superset=7, intersects=4, not_related=0 |
| `Strength of Relationship` | Integer 1–10 | Base + confidence adj + rationale adj, clamped to [1,10] |
| `STRM Rationale` | Free text | Explain both FDE and RDE, then why the relationship holds |
| `Notes` | Free text | Flag scope differences, partial overlaps, or gaps |

#### Strength Score Calculator

```
strength = base_score + confidence_adj + rationale_adj
base_score  : equal=10  subset_of=7  superset_of=7  intersects_with=4  not_related=0
confidence  : high=0    medium=-1    low=-2
rationale   : syntactic=-1   semantic=0   functional=0
result      : clamp(strength, 1, 10)
```

#### Calibration Defaults

| Attribute | Default | Override Condition |
|---|---|---|
| `Confidence Levels` | `high` | `medium` when interpretation or jurisdictional ambiguity exists; `low` when significant inference is required |
| `NIST IR-8477 Rational` | `semantic` | `functional` when controls achieve the same outcome through different mechanisms; `syntactic` only when word-for-word similarity is the *primary* justification (rare) |

#### Observed Distribution Reference (calibration only)

| Relationship | Approx % |
|---|---|
| `equal` | 43 % |
| `intersects_with` | 39 % |
| `subset_of` | 17 % |
| `superset_of` | 1 % |

| Rationale | Approx % |
|---|---|
| `semantic` | 63 % |
| `functional` | 37 % |
| `syntactic` | < 1 % |

### 4. Write the Output CSV

#### File Naming Convention

```
Set Theory Relationship Mapping (STRM)_ [(<FocalFramework>-to-<BridgeFramework>)-to-<TargetFramework>] - <FocalFramework> to <TargetFramework>.csv
```

- When the focal and bridge frameworks are the same (direct mapping), repeat the focal name in both slots: `(NIST_CSF-to-NIST_CSF)`.
- Substitute actual framework names for `<FocalFramework>`, `<BridgeFramework>`, and `<TargetFramework>`.

Examples:
- `Set Theory Relationship Mapping (STRM)_ [(NIST_CSF_2.0-to-NIST_CSF_2.0)-to-ISO_IEC_27001_2022] - NIST CSF 2.0 to ISO_IEC 27001 2022.csv`
- `Set Theory Relationship Mapping (STRM)_ [(FFIEC-to-FFIEC)-to-NIST_SP_800-53] - FFIEC to NIST SP 800-53.csv`
- `Set Theory Relationship Mapping (STRM)_ [(ISO_IEC_27017_2015-to-ISO_IEC_27001_2022)-to-CIS_Controls_v8] - ISO_IEC 27017 to CIS Controls v8.csv`

#### Required CSV Structure (12 columns)

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,<Full Source Document Name>,,,,
Row 2: Target Document:,<Full Target Document Name>,,,,,Focal Document URL:,<URL or citation>,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,<Target> Control Title,Target ID #,<Target> Control Description,Notes
Row 5+: <data rows>
```

> Replace `<Target>` in the column headers with the short name of the target document
> (e.g., `ISO 27001`, `NIST CSF`, `CIS`).

Column definitions:

| Col | Header | Content |
|---|---|---|
| A | `FDE#` | Source control ID |
| B | `FDE Name` | Short human-readable label for the source control |
| C | `Focal Document Element (FDE)` | Full control text or requirement from the source document |
| D | `Confidence Levels` | `high` / `medium` / `low` |
| E | `NIST IR-8477 Rational` | `semantic` / `functional` / `syntactic` |
| F | `STRM Rationale` | Narrative explaining both controls and why the relationship holds |
| G | `STRM Relationship` | `equal` / `subset_of` / `superset_of` / `intersects_with` / `not_related` |
| H | `Strength of Relationship` | Integer 1–10 |
| I | `<Target> Control Title` | Target document control short title |
| J | `Target ID #` | Target document control ID |
| K | `<Target> Control Description` | First sentence of the target control description |
| L | `Notes` | Scope differences, gaps, or caveats |

### 5. Rationale Writing Pattern

The `STRM Rationale` field (Column F) must follow this structure:

```
<Source Framework> <FDE#> requires <what the FDE requires>. <Target Framework> <Target ID#> requires <what the target control requires>. Both <shared objective>.
```

Example (FFIEC → NIST SP 800-53):
> FFIEC D3.PC.Am.B.4 requires periodic user access reviews for all systems. NIST SP 800-53 AC-2 requires managing information system accounts including periodic review of account authorizations. Both address periodic access review requirements.

For `intersects_with` mappings, conclude with the divergence:
> Both address <overlap>. <Source Framework> additionally covers <FDE-specific scope>; <Target Framework> additionally covers <RDE-specific scope>.

---

## Transitivity Rules

When deriving indirect mappings (A→C via A→B and B→C):

| A→B | B→C | Derived A→C |
|---|---|---|
| equal | equal | equal |
| equal | X | X |
| X | equal | X |
| subset_of | subset_of | subset_of |
| superset_of | superset_of | superset_of |
| not_related | anything | not_related |
| anything | not_related | not_related |
| intersects_with | anything | indeterminate |

**Indeterminate** = do not create a derived row; flag for manual review.

---

## Inverse Relationships

When generating reverse mappings (Target → Source):

| Forward | Inverse |
|---|---|
| equal | equal |
| subset_of | superset_of |
| superset_of | subset_of |
| intersects_with | intersects_with |
| not_related | not_related |

---

## Quality Rules

1. **Never leave Column F (Rationale) empty** — every row needs a narrative.
2. **Strength score must match the formula** — do not guess; compute explicitly.
3. **One FDE can map to multiple target controls** — create one row per target control.
4. **`not_related` rows are rare** — only use when there is genuinely zero overlap.
5. **Do not invent target control IDs** — every `Target ID #` must come from the actual target document provided.
6. **Confidence defaults to `high`** — use `medium` only when interpretation or jurisdictional ambiguity exists; use `low` only when the mapping requires significant inference.
7. **Focus on Baseline maturity first** — when a framework has maturity tiers, prioritize baseline/foundational controls before advanced ones.
8. **Adapt column header labels** — replace generic `<Target>` placeholders in headers with the actual target document name for clarity.

---

## Existing Mappings in This Repository

Before starting a new mapping, search for existing files to avoid duplication.
Run a glob across the project root and `frameworks/` for any CSV whose name
contains `Set Theory Relationship Mapping` or `STRM`. The file name pattern
encodes both source and target, so it is the fastest way to check for prior work.

---

## Template Reference

A blank STRM template lives in the project root. Search for a file whose name
starts with `TEMPLATE_` and contains `Set Theory Relationship Mapping`. Copy
(do not modify) that file as the starting point, then rename the copy according
to the file naming convention above.

---

## Related Resources

| Resource | Purpose |
|---|---|
| `grc-pro/skills/control-mapping/SKILL.md` | Higher-level control mapping guidance |
| `grc-pro/knowledge/mappings/ir8477-strm-reference.md` | Full NIST IR 8477 methodology reference |
| `grc-pro/knowledge/mappings/*.md` | Cross-framework human-readable tables |
| `grc-pro/knowledge/oscal/` | OSCAL control definitions for NIST SP 800-53 and FedRAMP |
