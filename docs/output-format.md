# Output Format

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
| I | `<Target> Requirement Title` | Target control short title (replace `<Target>` with actual target name) |
| J | `Target ID #` | Target control ID |
| K | `<Target> Requirement Description` | First sentence of target control text (replace `<Target>` with actual target name) |
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
