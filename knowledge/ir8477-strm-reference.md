# NIST IR 8477 - Set-Theory Relationship Mapping (STRM)

## Overview

NIST IR 8477 defines a formal methodology for mapping relationships between cybersecurity framework controls using set-theory semantics. Rather than informal labels like "equivalent" or "partial," STRM provides mathematically precise relationship types that support automated reasoning, transitivity derivation, and quantitative strength scoring.

## Terminology

| Term | Abbreviation | Definition |
|------|-------------|------------|
| Focal Document Element | FDE | The source control/requirement being mapped FROM |
| Reference Document Element | RDE | The target control/requirement being mapped TO |
| Set-Theory Relationship | STR | The formal relationship between FDE and RDE |
| Relationship Mapping | RM | A complete FDE-to-RDE mapping with relationship metadata |

## Relationship Types

| Relation | Symbol | Meaning | Example |
|----------|--------|---------|---------|
| `equal` | A = B | FDE and RDE express identical requirements | NIST AC-2 = ISO A.5.15 (both cover account management) |
| `subset_of` | A subset B | FDE requirements are entirely contained within RDE | A narrow encryption control is subset of a broad data protection control |
| `superset_of` | A superset B | FDE requirements entirely contain RDE | A broad access control is superset of a specific authentication control |
| `intersects_with` | A intersect B != empty | FDE and RDE partially overlap but neither contains the other | NIST AU-6 and ISO A.8.15 overlap on log review but diverge on scope |
| `not_related` | A intersect B = empty | No meaningful overlap between FDE and RDE | Physical security control vs. cryptographic control |

## Rationale Types

The rationale explains **why** a relationship holds:

| Rationale | Basis | When to Use |
|-----------|-------|-------------|
| `syntactic` | Wording/textual similarity | Controls use similar language or phrasing |
| `semantic` | Meaning/intent similarity | Controls address the same security objective despite different wording |
| `functional` | Outcome/result similarity | Controls achieve the same security outcome through different mechanisms |

## Confidence Levels

| Level | Meaning |
|-------|---------|
| `high` | Strong evidence supports the relationship |
| `medium` | Reasonable evidence, some ambiguity |
| `low` | Weak evidence, significant interpretation required |

## STRM Strength Score (1-10)

The strength score quantifies overall mapping quality:

| Component | Values | Score Impact |
|-----------|--------|-------------|
| Relation type | equal: 10, subset/superset: 7, intersects: 4, not_related: 0 | Base score |
| Confidence | high: +0, medium: -1, low: -2 | Adjustment |
| Rationale | functional: +0, semantic: +0, syntactic: -1 | Adjustment |

Final score is clamped to [1, 10].

**Interpretation**: 8-10 = strong mapping, 5-7 = moderate mapping, 1-4 = weak mapping.

## Transitivity Rules

STRM supports deriving A-to-C relationships from A-to-B and B-to-C:

| A-to-B | B-to-C | Derived A-to-C |
|--------|--------|----------------|
| equal | equal | equal |
| equal | X | X |
| X | equal | X |
| subset_of | subset_of | subset_of |
| superset_of | superset_of | superset_of |
| not_related | anything | not_related |
| anything | not_related | not_related |
| intersects_with | anything | indeterminate |

**Indeterminate** means the relationship cannot be definitively derived without additional analysis.

## Inverse Relations

Every relationship has a well-defined inverse:

| Forward | Inverse |
|---------|---------|
| equal | equal |
| subset_of | superset_of |
| superset_of | subset_of |
| intersects_with | intersects_with |
| not_related | not_related |

## Scope Categories

Scopes define what level of the framework hierarchy is being compared:

| Scope | Description |
|-------|-------------|



## Supported Frameworks

The following frameworks are mapped using STRM with NIST SP 800-53 as the canonical hub:

- NIST SP 800-53 Rev.5
- ISO/IEC 27001:2022
- SOC 2 (Trust Services Criteria)
- PCI DSS v4.0.1
- HIPAA Security Rule
- CIS Controls v8.1
- CMMC 2.0
- NIST SP 800-171 Rev.2
- COBIT 2019
- CSA CCM v4
- GDPR
- FedRAMP
- and etc.

## Data Files


- **Schema**: `knowledge/mappings.schema.json` -- JSON Schema for mapping data validation
- **Knowledge**: `/knowledge/*` -- Human-readable cross-framework mapping tables
