# STRM Example: Framework-to-Regulation Mapping
# NIST SP 800-53 Rev 5 → GDPR (Regulation (EU) 2016/679)

## Mapping Context

**Scenario**: A U.S.-based organization that processes EU personal data needs to
understand how its existing NIST SP 800-53 Rev 5 implementation satisfies GDPR
technical and organisational security obligations. This is a framework-to-regulation
mapping: the focal document is a technical security control catalog and the
reference document is binding law with specific articles requiring implementation.

**Focal Document**: NIST SP 800-53 Rev 5 — Security and Privacy Controls for
Information Systems and Organizations
**Focal Document URL**: https://doi.org/10.6028/NIST.SP.800-53r5

**Target Document**: General Data Protection Regulation (GDPR) — Regulation (EU) 2016/679
**Target Document URL**: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679

**Bridge Framework**: NIST SP 800-53 Rev 5 (direct mapping)

**File Name**:
```
Set Theory Relationship Mapping (STRM)_ [(NIST_SP_800-53_Rev5-to-NIST_SP_800-53_Rev5)-to-GDPR_2016_679] - NIST SP 800-53 Rev5 to GDPR 2016-679.csv
```

---

## CSV Header Block

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,NIST SP 800-53 Rev 5,,,,
Row 2: Target Document:,GDPR — Regulation (EU) 2016/679,,,,,Focal Document URL:,https://doi.org/10.6028/NIST.SP.800-53r5,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,GDPR Article Title,Target ID #,GDPR Article Description,Notes
```

---

## Mapping Rows

### Row 5 — `equal` | Data Encryption at Rest and in Transit

| Attribute | Value |
|---|---|
| **FDE#** | `SC-28(1)` |
| **FDE Name** | Protection of Information at Rest — Cryptographic Protection |
| **Focal Document Element (FDE)** | Implement cryptographic mechanisms to prevent unauthorized disclosure and modification of the following information at rest on system components. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | NIST SP 800-53 SC-28(1) requires cryptographic mechanisms to prevent unauthorized disclosure and modification of data at rest. GDPR Article 32(1)(a) requires the controller and processor to implement, as appropriate, the pseudonymisation and encryption of personal data as technical measures ensuring a level of security appropriate to the risk. Both require encryption of stored sensitive data as a primary technical safeguard. The functional equivalence is direct: SC-28(1) specifies the cryptographic mechanism; GDPR Art. 32(1)(a) names encryption as an enumerated appropriate measure. |
| **STRM Relationship** | `equal` |
| **Strength of Relationship** | `10` |
| **GDPR Article Title** | Security of Processing — Technical Measures |
| **Target ID #** | `Art. 32(1)(a)` |
| **GDPR Article Description** | The controller and the processor shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including as appropriate: the pseudonymisation and encryption of personal data. |
| **Notes** | SC-8(1) (Cryptographic Protection in Transit) should be mapped alongside SC-28(1) for complete Art. 32(1)(a) coverage of both at-rest and in-transit encryption obligations. |

---

### Row 6 — `subset_of` | Breach Notification

| Attribute | Value |
|---|---|
| **FDE#** | `IR-6` |
| **FDE Name** | Incident Reporting |
| **Focal Document Element (FDE)** | Require personnel to report suspected incidents to the organizational incident response capability within a defined time period; report incident information to designated authorities. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST SP 800-53 IR-6 requires personnel to report suspected incidents to the internal incident response capability within a defined timeframe and to report to designated authorities. GDPR Article 33 requires the controller to notify the competent supervisory authority of a personal data breach without undue delay and, where feasible, within 72 hours of becoming aware, including the nature of the breach, categories and approximate number of data subjects affected, likely consequences, and measures taken. IR-6 is a subset of GDPR Art. 33 because GDPR imposes the additional obligations of: a 72-hour supervisory authority notification window, prescribed notification content (data subject categories, likely consequences, remediation measures), and specific processor-to-controller notification requirements — none of which are required by IR-6's internal-reporting scope. |
| **STRM Relationship** | `subset_of` |
| **Strength of Relationship** | `7` |
| **GDPR Article Title** | Notification of a Personal Data Breach to the Supervisory Authority |
| **Target ID #** | `Art. 33` |
| **GDPR Article Description** | In the case of a personal data breach, the controller shall without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the supervisory authority competent in accordance with Article 55, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons. |
| **Notes** | Also map IR-6 to GDPR Art. 34 (Communication of breach to data subjects) for full breach notification chain. The 72-hour SLA is a GDPR-specific requirement; organizations must add it as an explicit ODP to IR-6. |

---

### Row 7 — `superset_of` | Access to Personal Data

| Attribute | Value |
|---|---|
| **FDE#** | `AC-3` |
| **FDE Name** | Access Enforcement |
| **Focal Document Element (FDE)** | Enforce approved authorizations for logical access to information and system resources in accordance with applicable access control policies. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST SP 800-53 AC-3 requires enforcement of approved authorizations for logical access to all information and system resources across all data types and sensitivity levels. GDPR Article 25(1) requires the controller to implement data protection by design and default, including ensuring that by default personal data is not made accessible without the individual's intervention to an indefinite number of natural persons. AC-3 is a superset of GDPR Art. 25(1) access default because AC-3 covers enforcement of access controls for all organizational information types, while GDPR Art. 25(1) narrowly addresses the default accessibility principle for personal data only. AC-3 additionally covers system resources, authentication enforcement, and multi-system access paths not addressed by Art. 25(1). |
| **STRM Relationship** | `superset_of` |
| **Strength of Relationship** | `7` |
| **GDPR Article Title** | Data Protection by Design and by Default |
| **Target ID #** | `Art. 25(1)` |
| **GDPR Article Description** | Taking into account the state of the art, the cost of implementation and the nature, scope, context and purposes of processing as well as the risks of varying likelihood and severity for rights and freedoms of natural persons posed by the processing, the controller shall, both at the time of the determination of the means for processing and at the time of the processing itself, implement appropriate technical and organisational measures, such as pseudonymisation, which are designed to implement data-protection principles in an effective manner. |
| **Notes** | Art. 25 (Data Protection by Design and by Default) is broader than access enforcement alone. Map SA-8 (Security Engineering Principles) and PL-8 (Security and Privacy Architectures) for the design-phase obligations. |

---

### Row 8 — `intersects_with` | Data Minimisation

| Attribute | Value |
|---|---|
| **FDE#** | `PT-2` |
| **FDE Name** | Authority to Process Personally Identifiable Information |
| **Focal Document Element (FDE)** | Determine and document the legal authority that permits the collection, use, maintenance, sharing, and disposal of personally identifiable information and restrict the processing of PII to those purposes identified in the notice and consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. |
| **Confidence Levels** | `medium` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST SP 800-53 PT-2 requires documenting legal authority for PII processing and restricting processing to identified purposes consistent with law and policy. GDPR Article 5(1)(b) requires that personal data be collected for specified, explicit and legitimate purposes and not further processed in a manner incompatible with those purposes (purpose limitation). Both address purpose-bound processing as a constraint on what the organization may do with personal data. NIST PT-2 additionally requires documenting the specific legal authority and restricting processing to that documented scope; GDPR Art. 5(1)(b) additionally encompasses the concept of compatibility assessment for secondary processing and the archiving/research/statistical exceptions, which PT-2 does not address. |
| **STRM Relationship** | `intersects_with` |
| **Strength of Relationship** | `3` |
| **GDPR Article Title** | Principles Relating to Processing of Personal Data — Purpose Limitation |
| **Target ID #** | `Art. 5(1)(b)` |
| **GDPR Article Description** | Personal data shall be collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall, in accordance with Article 89(1), not be considered to be incompatible with the initial purposes. |
| **Notes** | Confidence is `medium` because GDPR Art. 5(1)(b) is a legal principle rather than an operational requirement; the mapping depends significantly on how the organization documents its processing purposes. Also map PT-3 (Personally Identifiable Information Processing Purposes) for stronger coverage. |

---

### Row 9 — `not_related` | Data Subject Rights

| Attribute | Value |
|---|---|
| **FDE#** | `AU-11` |
| **FDE Name** | Audit Record Retention |
| **Focal Document Element (FDE)** | Retain audit records for a defined time period to provide support for after-the-fact investigations of security incidents and to meet regulatory and organizational information retention requirements. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | NIST SP 800-53 AU-11 requires retention of audit records for a defined period to support post-incident investigations and regulatory requirements. GDPR Article 17 (Right to Erasure / Right to be Forgotten) requires controllers to erase personal data without undue delay upon request when specified conditions are met, including when the data is no longer necessary for its original purpose. These controls are not related and in some circumstances are in direct tension: AU-11 creates obligations to retain logs (which may contain personal data) while GDPR Art. 17 creates obligations to delete personal data on request. The audit-log retention obligation is an operational security function; the right to erasure is a data subject rights obligation. No meaningful set overlap exists between the two requirements. |
| **STRM Relationship** | `not_related` |
| **Strength of Relationship** | `1` |
| **GDPR Article Title** | Right to Erasure ('Right to Be Forgotten') |
| **Target ID #** | `Art. 17` |
| **GDPR Article Description** | The data subject shall have the right to obtain from the controller the erasure of personal data concerning him or her without undue delay and the controller shall have the obligation to erase personal data without undue delay where one of the following grounds applies... |
| **Notes** | This conflict between AU-11 (retain logs) and GDPR Art. 17 (erase on request) should be escalated to legal counsel for resolution via data retention schedules or pseudonymisation of log data. Organizations often resolve this by separating security logs from personal data logs architecturally. |

---

## Strength Score Calculations

| FDE# | Relationship | Confidence | Rationale | Base | Adj | **Score** |
|---|---|---|---|---|---|---|
| SC-28(1) | equal | high | functional | 10 | 0+0 | **10** |
| IR-6 | subset_of | high | semantic | 7 | 0+0 | **7** |
| AC-3 | superset_of | high | semantic | 7 | 0+0 | **7** |
| PT-2 | intersects_with | medium | semantic | 4 | −1+0 | **3** |
| AU-11 | not_related | high | functional | 0 | 0+0 | **1** (clamped) |

---

## Key Observations for This Mapping Type

- **Framework-to-regulation** mappings frequently produce `subset_of` relationships
  because regulations impose legally binding obligations (timelines, content
  requirements, data subject rights) that exceed a technical control's scope.
- GDPR obligations that have no NIST 800-53 equivalent — such as the lawful basis
  for processing (Art. 6), data subject rights (Arts. 15–22), and DPO appointment
  (Art. 37) — should be documented as **unmapped gaps** requiring supplementary
  organizational controls outside the NIST catalog.
- NIST SP 800-53 PT family controls (PT-1 through PT-8) are the primary candidates
  for GDPR technical article mappings. AC, SC, and IR families address the
  technical safeguard articles (Art. 32).
- The `not_related` row (AU-11 vs. Art. 17) demonstrates that regulatory
  obligations can conflict with security controls. Flag these conflicts explicitly
  rather than forcing a mapping.
