# STRM Example: Control-to-Control Mapping
# ISO/IEC 27001:2022 Annex A → SOC 2 Trust Service Criteria (2017)

## Mapping Context

**Scenario**: An organization holds ISO/IEC 27001:2022 certification and is
preparing for a SOC 2 Type II audit. The compliance team needs a precise,
per-control mapping from ISO Annex A to SOC 2 Trust Service Criteria (TSC) to
identify reusable evidence and gaps. This is a control-to-control mapping
between two recognized assurance frameworks, both of which define security
controls at the individual-control level.

**Focal Document**: ISO/IEC 27001:2022 — Annex A Information Security Controls
**Focal Document URL**: https://www.iso.org/standard/27001

**Target Document**: AICPA Trust Services Criteria for Security, Availability, Processing Integrity, Confidentiality, and Privacy (2017)
**Target Document URL**: https://www.aicpa.org/resources/article/trust-services-criteria

**Bridge Framework**: ISO/IEC 27001:2022 (direct mapping)

**File Name**:
```
Set Theory Relationship Mapping (STRM)_ [(ISO_IEC_27001_2022-to-ISO_IEC_27001_2022)-to-SOC2_TSC_2017] - ISO_IEC 27001 2022 to SOC 2 TSC 2017.csv
```

---

## CSV Header Block

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,ISO/IEC 27001:2022 Annex A,,,,
Row 2: Target Document:,AICPA SOC 2 Trust Service Criteria 2017,,,,,Focal Document URL:,https://www.iso.org/standard/27001,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,SOC 2 Criteria Title,Target ID #,SOC 2 Criteria Description,Notes
```

---

## Mapping Rows

### Row 5 — `equal` | Logical Access Controls

| Attribute | Value |
|---|---|
| **FDE#** | `A.5.15` |
| **FDE Name** | Access Control |
| **Focal Document Element (FDE)** | Rules to control physical and logical access to information and other associated assets shall be established and implemented based on business and information security requirements. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.5.15 requires the establishment and implementation of rules governing physical and logical access to information assets based on business and security requirements. SOC 2 CC6.1 requires the entity to implement logical access security software, infrastructure, and architectures over protected information assets to protect them from security events to meet the entity's objectives. Both controls mandate an access control framework that governs which subjects may access which information assets and under what conditions. The scope of both is substantively equivalent: A.5.15 sets the policy requirement; CC6.1 sets the implementation requirement; together they express the same security objective. |
| **STRM Relationship** | `equal` |
| **Strength of Relationship** | `10` |
| **SOC 2 Criteria Title** | Logical and Physical Access Controls — Access to Protected Information Assets |
| **Target ID #** | `CC6.1` |
| **SOC 2 Criteria Description** | The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events to meet the entity's objectives. |
| **Notes** | A.5.15 must be read together with A.5.16 (Identity management) and A.5.18 (Access rights) for full CC6.1 coverage. Map those controls separately. |

---

### Row 6 — `subset_of` | Encryption

| Attribute | Value |
|---|---|
| **FDE#** | `A.8.24` |
| **FDE Name** | Use of Cryptography |
| **Focal Document Element (FDE)** | Rules for the effective use of cryptography, including cryptographic key management, shall be defined and implemented. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.8.24 requires defining and implementing rules for effective cryptographic use, including key management. SOC 2 CC6.7 requires that the entity restricts the transmission, movement, and removal of information to authorized internal and external users and processes and protects it during transmission, movement, or removal using encryption or other appropriate measures. A.8.24 is a subset of CC6.7 because CC6.7 encompasses the full information transmission and movement lifecycle including controls over who can transmit, under what conditions, and with what protections — A.8.24 only addresses the cryptographic mechanism itself, not the transmission authorization or movement controls that CC6.7 also requires. |
| **STRM Relationship** | `subset_of` |
| **Strength of Relationship** | `7` |
| **SOC 2 Criteria Title** | Logical and Physical Access Controls — Transmission and Movement of Information |
| **Target ID #** | `CC6.7` |
| **SOC 2 Criteria Description** | The entity restricts the transmission, movement, and removal of information to authorized internal and external users and processes and protects it during transmission, movement, or removal using encryption or other appropriate measures. |
| **Notes** | Also map A.5.14 (Information transfer) and A.8.20 (Networks security) to CC6.7 for complete transmission control coverage. |

---

### Row 7 — `superset_of` | Vulnerability Management

| Attribute | Value |
|---|---|
| **FDE#** | `A.8.8` |
| **FDE Name** | Management of Technical Vulnerabilities |
| **Focal Document Element (FDE)** | Information about technical vulnerabilities of information systems in use shall be obtained in a timely manner; the organisation's exposure to such vulnerabilities shall be evaluated; and appropriate measures shall be taken to address the associated risk. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.8.8 requires timely identification of technical vulnerabilities, evaluation of organizational exposure, and implementation of appropriate risk response measures. SOC 2 CC7.1 requires the entity to use detection and monitoring procedures to identify changes to configurations or the introduction of new vulnerabilities. A.8.8 is a superset of CC7.1 because A.8.8 additionally requires remediation of identified vulnerabilities through appropriate risk treatment, not only their detection — CC7.1 is limited to the detection and monitoring phase of the vulnerability lifecycle, and does not mandate the evaluation and remediation obligations that A.8.8 imposes. |
| **STRM Relationship** | `superset_of` |
| **Strength of Relationship** | `7` |
| **SOC 2 Criteria Title** | System Operations — Change Detection |
| **Target ID #** | `CC7.1` |
| **SOC 2 Criteria Description** | To meet its objectives, the entity uses detection and monitoring procedures to identify (1) changes to configurations that result in the introduction of new vulnerabilities, and (2) susceptibilities to newly discovered vulnerabilities. |
| **Notes** | Map A.8.8 also to CC7.2 (Monitoring of System Components) for the ongoing monitoring dimension. SOC 2 remediaton activities are covered under CC7.4 (Incident Response) rather than CC7.1. |

---

### Row 8 — `intersects_with` | Logging and Monitoring

| Attribute | Value |
|---|---|
| **FDE#** | `A.8.15` |
| **FDE Name** | Logging |
| **Focal Document Element (FDE)** | Logs that record activities, exceptions, faults and other relevant events shall be produced, stored, protected and analysed. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.8.15 requires producing, storing, protecting, and analysing logs of activities, exceptions, faults, and relevant events. SOC 2 CC7.2 requires the entity to monitor system components and the operation of those components for anomalies that are indicative of malicious acts, natural disasters, and errors affecting the entity's ability to meet its objectives. Both controls address the ongoing collection and review of system log data to detect adverse events. ISO A.8.15 additionally requires log protection and retention management; SOC 2 CC7.2 additionally requires anomaly detection and correlation analysis beyond raw log collection. Neither control fully contains the other. |
| **STRM Relationship** | `intersects_with` |
| **Strength of Relationship** | `4` |
| **SOC 2 Criteria Title** | System Operations — Monitoring of System Components |
| **Target ID #** | `CC7.2` |
| **SOC 2 Criteria Description** | The entity monitors system components and the operation of those components for anomalies that are indicative of malicious acts, natural disasters, and errors affecting the entity's ability to meet its objectives; anomalies are analysed to determine whether they represent security events. |
| **Notes** | Map A.8.16 (Monitoring activities) alongside A.8.15 to CC7.2. A.8.17 (Clock synchronization) supports CC7.2 by ensuring log timestamps are reliable. |

---

### Row 9 — `intersects_with` | Business Continuity

| Attribute | Value |
|---|---|
| **FDE#** | `A.5.30` |
| **FDE Name** | ICT Readiness for Business Continuity |
| **Focal Document Element (FDE)** | ICT readiness shall be planned, implemented, maintained and tested based on business continuity objectives and ICT continuity requirements. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.5.30 requires ICT readiness to be planned, implemented, maintained, and tested based on business continuity objectives. SOC 2 A1.2 (Availability) requires the entity to implement, monitor, and evaluate availability commitments and system requirements to identify additional availability requirements. Both controls address ensuring system availability through planning and testing. ISO A.5.30 focuses on ICT-specific continuity planning and recovery testing; SOC 2 A1.2 focuses on monitoring availability commitments against SLAs and identifying unmet requirements. Neither fully contains the other: A.5.30 requires testing of recovery procedures; A1.2 requires ongoing availability monitoring and SLA compliance. |
| **STRM Relationship** | `intersects_with` |
| **Strength of Relationship** | `4` |
| **SOC 2 Criteria Title** | Availability — Additional Availability Requirements |
| **Target ID #** | `A1.2` |
| **SOC 2 Criteria Description** | The entity authorizes, designs, develops or acquires, implements, operates, approves, maintains, and monitors environmental protections, software, data back-up processes, and recovery infrastructure to meet its objectives. |
| **Notes** | Also map A.5.29 (Information security during disruption) to A1.3 (Recovery from environmental threats) for full Availability TSC coverage. |

---

## Strength Score Calculations

| FDE# | Relationship | Confidence | Rationale | Base | Adj | **Score** |
|---|---|---|---|---|---|---|
| A.5.15 | equal | high | semantic | 10 | 0+0 | **10** |
| A.8.24 | subset_of | high | semantic | 7 | 0+0 | **7** |
| A.8.8 | superset_of | high | functional | 7 | 0+0 | **7** |
| A.8.15 | intersects_with | high | semantic | 4 | 0+0 | **4** |
| A.5.30 | intersects_with | high | semantic | 4 | 0+0 | **4** |

---

## Key Observations for This Mapping Type

- **Control-to-control** mappings between peer frameworks (both output auditable
  controls) produce the highest evidence-reuse value because a single control
  implementation satisfies both frameworks simultaneously.
- ISO Annex A controls are outcome-based ("shall be implemented"); SOC 2 TSC are
  criteria-based ("the entity..."). When writing rationale, translate the ISO
  obligation into an observable state to align with how auditors evaluate TSC.
- SOC 2 TSC are organized by Trust Service Category (Security CC, Availability A,
  Confidentiality C, Processing Integrity PI, Privacy P). Identify which categories
  are in scope for the audit before mapping to avoid populating out-of-scope criteria.
- When building an evidence mapping table from this output, one ISO control
  implementation artifact (e.g., an access control policy) can satisfy multiple
  TSC points — document this explicitly to reduce audit burden.
