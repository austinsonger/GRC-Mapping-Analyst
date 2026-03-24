# STRM Example: Regulation-to-Control Mapping
# HIPAA Security Rule (45 CFR Part 164 Subpart C) → ISO/IEC 27001:2022 Annex A

## Mapping Context

**Scenario**: A healthcare organization holds ISO/IEC 27001:2022 certification and
needs to demonstrate HIPAA Security Rule compliance to its Board and to the
Department of Health and Human Services (HHS) Office for Civil Rights (OCR).
This regulation-to-control mapping shows which HIPAA administrative, physical,
and technical safeguard standards and implementation specifications are addressed
by existing ISO Annex A controls — and which HIPAA requirements have no ISO
equivalent and need supplementary organizational measures.

**Focal Document**: HIPAA Security Rule — 45 CFR Part 164 Subpart C
**Focal Document URL**: https://www.hhs.gov/hipaa/for-professionals/security/index.html

**Target Document**: ISO/IEC 27001:2022 — Annex A Information Security Controls
**Target Document URL**: https://www.iso.org/standard/27001

**Bridge Framework**: HIPAA Security Rule (direct mapping)

**File Name**:
```
Set Theory Relationship Mapping (STRM)_ [(HIPAA_Security_Rule-to-HIPAA_Security_Rule)-to-ISO_IEC_27001_2022] - HIPAA Security Rule to ISO_IEC 27001 2022.csv
```

> **Note on regulation-to-control mappings**: Regulatory standards encode legal
> obligations — required vs. addressable designations, specific timelines, and
> enforcement thresholds. ISO controls provide implementation guidance but not
> legal obligation. Rationale should always clarify whether the ISO control
> satisfies the regulation as-is or requires supplementary documentation.

---

## CSV Header Block

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,HIPAA Security Rule — 45 CFR Part 164 Subpart C,,,,
Row 2: Target Document:,ISO/IEC 27001:2022 Annex A,,,,,Focal Document URL:,https://www.hhs.gov/hipaa/for-professionals/security/index.html,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,ISO 27001 Control Title,Target ID #,ISO 27001 Control Description,Notes
```

---

## Mapping Rows

### Row 5 — `equal` | Risk Analysis (Administrative Safeguard — Required)

| Attribute | Value |
|---|---|
| **FDE#** | `164.308(a)(1)(ii)(A)` |
| **FDE Name** | Risk Analysis — Required Implementation Specification |
| **Focal Document Element (FDE)** | Conduct an accurate and thorough assessment of the potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronic protected health information held by the covered entity or business associate. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | HIPAA 164.308(a)(1)(ii)(A) requires a thorough, documented risk assessment covering risks to the confidentiality, integrity, and availability of ePHI. ISO/IEC 27001:2022 Clause 6.1.2 requires the organization to define and apply an information security risk assessment process that identifies, analyses, and evaluates information security risks. Both require a formal, documented, organization-wide information security risk assessment as the foundational input to the security program. The semantic equivalence is strong: HIPAA specifies CIA of ePHI as the scope; ISO 6.1.2 specifies information assets in scope of the ISMS — for a healthcare organization, ePHI is the primary in-scope asset class. |
| **STRM Relationship** | `equal` |
| **Strength of Relationship** | `10` |
| **ISO 27001 Control Title** | Information Security Risk Assessment Process |
| **Target ID #** | `Clause 6.1.2` |
| **ISO 27001 Control Description** | The organization shall define and apply an information security risk assessment process that establishes and maintains information security risk criteria; ensures that repeated risk assessments produce consistent, valid, and comparable results; identifies the information security risks; and analyses the information security risks. |
| **Notes** | HIPAA designates this as Required (not addressable). ISO Clause 6.1.2 is a mandatory clause. Both require documented evidence. The HIPAA risk analysis must be retained for six years (164.316(b)(2)(i)) — document this retention obligation in the ISO document control procedure. |

---

### Row 6 — `subset_of` | Workforce Training (Administrative Safeguard — Required)

| Attribute | Value |
|---|---|
| **FDE#** | `164.308(a)(5)(i)` |
| **FDE Name** | Security Awareness and Training — Required Standard |
| **Focal Document Element (FDE)** | Implement a security awareness and training program for all members of its workforce (including management). |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | HIPAA 164.308(a)(5)(i) requires implementing a security awareness and training program for all workforce members including management. ISO/IEC 27001:2022 A.6.3 requires that personnel and relevant interested parties receive appropriate information security awareness, education, and training, and regular updates in organizational policies and procedures relevant to their job functions. HIPAA 164.308(a)(5)(i) is a subset of A.6.3 because ISO A.6.3 additionally requires role-based training tailored to job function, regular updates to training content, and extension of training to relevant third parties (interested parties) — obligations not explicitly stated in the HIPAA base standard. |
| **STRM Relationship** | `subset_of` |
| **Strength of Relationship** | `7` |
| **ISO 27001 Control Title** | Information Security Awareness, Education and Training |
| **Target ID #** | `A.6.3` |
| **ISO 27001 Control Description** | Personnel of the organization and relevant interested parties shall receive appropriate information security awareness, education and training and regular updates in organizational policies and procedures, as relevant for their job function. |
| **Notes** | HIPAA implementation specifications under 164.308(a)(5)(ii) (protection from malicious software, log-in monitoring, password management) should each be mapped separately to A.8.7, A.8.16, and A.5.17 respectively. Do not collapse them into this row. |

---

### Row 7 — `superset_of` | Encryption of ePHI in Transit (Technical Safeguard — Addressable)

| Attribute | Value |
|---|---|
| **FDE#** | `164.312(e)(2)(ii)` |
| **FDE Name** | Encryption in Transit — Addressable Implementation Specification |
| **Focal Document Element (FDE)** | Implement a mechanism to encrypt electronic protected health information whenever deemed appropriate. |
| **Confidence Levels** | `medium` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | HIPAA 164.312(e)(2)(ii) designates encryption of ePHI in transit as an addressable implementation specification, meaning the covered entity must implement it or document an equivalent alternative measure. ISO/IEC 27001:2022 A.8.24 requires defining and implementing rules for effective use of cryptography including key management, applied across all information assets in scope of the ISMS. HIPAA 164.312(e)(2)(ii) is a superset of A.8.24 because HIPAA additionally provides the flexibility of an addressable designation — permitting documented alternative equivalent measures when encryption is not feasible — whereas A.8.24 is a mandatory Annex A control requiring cryptography rules for all applicable information without an addressable exception pathway. The HIPAA addressable mechanism creates a governance obligation (risk-based justification or implementation) that exceeds the binary implement/don't-implement scope of A.8.24. |
| **STRM Relationship** | `superset_of` |
| **Strength of Relationship** | `6` |
| **ISO 27001 Control Title** | Use of Cryptography |
| **Target ID #** | `A.8.24` |
| **ISO 27001 Control Description** | Rules for the effective use of cryptography, including cryptographic key management, shall be defined and implemented. |
| **Notes** | Confidence is `medium` because the addressable designation introduces interpretive flexibility that may or may not align with the organization's implementation. Strength reduced to 6 (base 7 − 1 for medium confidence). If the organization has implemented encryption universally, escalate to `equal` with `high` confidence. |

---

### Row 8 — `intersects_with` | Access Controls (Technical Safeguard — Required)

| Attribute | Value |
|---|---|
| **FDE#** | `164.312(a)(1)` |
| **FDE Name** | Access Control — Required Standard |
| **Focal Document Element (FDE)** | Implement technical policies and procedures for electronic information systems that maintain electronic protected health information to allow access only to those persons or software programs that have been granted access rights as specified in 164.308(a)(4). |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | HIPAA 164.312(a)(1) requires technical policies and procedures allowing access to ePHI systems only to persons or software programs granted rights under the access management standard. ISO/IEC 27001:2022 A.5.15 requires establishing and implementing rules to control physical and logical access to information and associated assets based on business and security requirements. Both controls require a technical access control mechanism restricting system access to authorized subjects. HIPAA 164.312(a)(1) additionally requires explicit linkage of technical controls to the workforce clearance and access authorization standards (164.308(a)(4)); ISO A.5.15 additionally requires that access control rules cover both physical and logical dimensions and be based on documented business requirements — a breadth that HIPAA's ePHI-only scope does not impose. |
| **STRM Relationship** | `intersects_with` |
| **Strength of Relationship** | `4` |
| **ISO 27001 Control Title** | Access Control |
| **Target ID #** | `A.5.15` |
| **ISO 27001 Control Description** | Rules to control physical and logical access to information and other associated assets shall be established and implemented based on business and information security requirements. |
| **Notes** | Map the four HIPAA access control implementation specifications separately: unique user identification → A.5.16; emergency access procedure → A.5.29; automatic logoff → A.8.5; encryption/decryption → A.8.24. |

---

### Row 9 — `not_related` | Contingency Plan Testing (Administrative Safeguard — Required) vs. Physical Security Perimeter

| Attribute | Value |
|---|---|
| **FDE#** | `164.308(a)(7)(ii)(D)` |
| **FDE Name** | Testing and Revision Procedures — Required Implementation Specification |
| **Focal Document Element (FDE)** | Implement procedures for periodic testing and revision of contingency plans. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | HIPAA 164.308(a)(7)(ii)(D) requires procedures for periodic testing and revision of contingency plans to ensure they remain effective. ISO/IEC 27001:2022 A.7.1 requires physical security perimeters to be defined and used to protect areas that contain information and information processing facilities. There is no meaningful overlap between the requirement to periodically test contingency plans and the requirement to establish physical security perimeters. HIPAA 164.308(a)(7)(ii)(D) governs the operational continuity domain; A.7.1 governs the physical access control domain. These represent entirely different security domains with no shared requirement set. |
| **STRM Relationship** | `not_related` |
| **Strength of Relationship** | `1` |
| **ISO 27001 Control Title** | Physical Security Perimeters |
| **Target ID #** | `A.7.1` |
| **ISO 27001 Control Description** | Security perimeters shall be defined and used to protect areas that contain information and information processing facilities. |
| **Notes** | HIPAA 164.308(a)(7)(ii)(D) is correctly mapped to ISO A.5.30 (ICT Readiness for Business Continuity) and A.5.29 (Information Security During Disruption). This row documents a negative result from an automated mapping attempt. |

---

## Strength Score Calculations

| FDE# | Relationship | Confidence | Rationale | Base | Adj | **Score** |
|---|---|---|---|---|---|---|
| 164.308(a)(1)(ii)(A) | equal | high | semantic | 10 | 0+0 | **10** |
| 164.308(a)(5)(i) | subset_of | high | semantic | 7 | 0+0 | **7** |
| 164.312(e)(2)(ii) | superset_of | medium | functional | 7 | −1+0 | **6** |
| 164.312(a)(1) | intersects_with | high | semantic | 4 | 0+0 | **4** |
| 164.308(a)(7)(ii)(D) | not_related | high | semantic | 0 | 0+0 | **1** (clamped) |

---

## Key Observations for This Mapping Type

- **Regulation-to-control** mappings must distinguish Required from Addressable
  HIPAA implementation specifications. Required specs must be implemented; addressable
  specs require either implementation or documented risk-based justification. Track
  this distinction in the Notes column — it has enforcement implications.
- HIPAA uses CFR citation format (`164.308(a)(1)(ii)(A)`). Always use the full
  citation as the FDE# to ensure traceability back to the regulation.
- ISO Annex A may not cover all HIPAA obligations. HIPAA-specific obligations with
  no ISO equivalent include: the Emergency Access Procedure (164.312(a)(2)(ii)),
  which has no standalone ISO control and must be addressed through risk treatment.
- Six-year record retention requirements under 164.316(b)(2) must be noted on every
  row covering a required specification — ISO document control procedures
  (Clause 7.5) must be updated to reflect this retention obligation.
- OCR audit protocols (published separately by HHS) provide the implementation
  verification criteria for each specification. Reference the relevant audit protocol
  line item in the Notes column for audit-ready documentation.
