# STRM Example: Control-to-Evidence Mapping
# ISO/IEC 27001:2022 Annex A → Audit Evidence Artifacts

## Mapping Context

**Scenario**: An organization is preparing for an ISO/IEC 27001:2022 Stage 2
certification audit and a concurrent SOC 2 Type II audit. The compliance team
needs to map each Annex A control to specific, producible evidence artifacts
to: (a) identify evidence gaps before the auditor arrives, (b) assign evidence
ownership, and (c) demonstrate that a single artifact can satisfy multiple
controls (evidence reuse). This is a control-to-evidence mapping: the focal
document is a control standard and the reference document is the organization's
evidence artifact catalog — a structured inventory of named, versioned documents,
configurations, tool exports, and process records.

**Focal Document**: ISO/IEC 27001:2022 — Annex A Information Security Controls
**Focal Document URL**: https://www.iso.org/standard/27001

**Target Document**: Organizational Audit Evidence Catalog (internal)
— a versioned catalog of evidence artifacts indexed by type, owner, and review date
**Target Document URL**: Internal — `/compliance/evidence-catalog-2024.xlsx`

**Bridge Framework**: ISO/IEC 27001:2022 (direct mapping)

**File Name**:
```
Set Theory Relationship Mapping (STRM)_ [(ISO_IEC_27001_2022-to-ISO_IEC_27001_2022)-to-Audit_Evidence_Catalog_2024] - ISO_IEC 27001 2022 to Audit Evidence Catalog 2024.csv
```

> **Note on control-to-evidence mappings**: Evidence artifacts are implementation
> outputs, not requirements. The STRM relationship in this mapping type describes
> how completely the evidence artifact demonstrates the control's intent.
> `equal` means the artifact fully satisfies the control's audit objective.
> `subset_of` means additional artifacts are needed. `superset_of` means the
> artifact demonstrates more than the control requires (evidence reuse opportunity).
> `intersects_with` means the artifact partially demonstrates the control and
> needs to be supplemented.

---

## CSV Header Block

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,ISO/IEC 27001:2022 Annex A,,,,
Row 2: Target Document:,Audit Evidence Catalog 2024,,,,,Focal Document URL:,https://www.iso.org/standard/27001,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,Evidence Artifact Title,Target ID #,Evidence Artifact Description,Notes
```

---

## Mapping Rows

### Row 5 — `equal` | Access Control Policy as Evidence

| Attribute | Value |
|---|---|
| **FDE#** | `A.5.15` |
| **FDE Name** | Access Control |
| **Focal Document Element (FDE)** | Rules to control physical and logical access to information and other associated assets shall be established and implemented based on business and information security requirements. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.5.15 requires that access control rules be established and implemented based on documented business and security requirements. Evidence artifact EVD-AC-001 is the organization's Access Control Policy (version 3.2, approved 2024-01-15 by CISO, reviewed annually), which documents the rules governing logical access to all information assets, the principles of need-to-know and least privilege, the requirement for role-based access, and the access review cadence. The policy document fully demonstrates the establishment of access control rules as required by A.5.15 because it contains all elements an auditor would need to verify the control's intent: documented rules, approved scope, business-driven classification, and review evidence. |
| **STRM Relationship** | `equal` |
| **Strength of Relationship** | `10` |
| **Evidence Artifact Title** | Access Control Policy v3.2 |
| **Target ID #** | `EVD-AC-001` |
| **Evidence Artifact Description** | Formal policy document defining access control rules, scope, roles, least-privilege requirements, and review cadence. Owner: CISO. Version: 3.2. Approved: 2024-01-15. Review cycle: Annual. Format: PDF. Location: SharePoint /policies/access-control-policy-v3.2.pdf. |
| **Notes** | EVD-AC-001 also satisfies A.5.16 (Identity Management) and A.5.18 (Access Rights) policy requirements. Document cross-control reuse in the evidence catalog to reduce audit overhead. |

---

### Row 6 — `subset_of` | Vulnerability Scan Report as Evidence

| Attribute | Value |
|---|---|
| **FDE#** | `A.8.8` |
| **FDE Name** | Management of Technical Vulnerabilities |
| **Focal Document Element (FDE)** | Information about technical vulnerabilities of information systems in use shall be obtained in a timely manner; the organisation's exposure to such vulnerabilities shall be evaluated; and appropriate measures shall be taken to address the associated risk. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.8.8 requires timely identification of technical vulnerabilities, evaluation of organizational exposure, and implementation of appropriate risk response. Evidence artifact EVD-VM-003 is the most recent quarterly vulnerability scan report (Q4 2024) produced by the Tenable.io platform, listing discovered vulnerabilities by asset, CVSS score, and remediation status. EVD-VM-003 is a subset of A.8.8's full requirement because the scan report demonstrates vulnerability identification and exposure evaluation, but does not on its own demonstrate that appropriate risk response measures were taken — remediation evidence (patch records, risk acceptance decisions, compensating controls) must be provided separately to satisfy the complete control. |
| **STRM Relationship** | `subset_of` |
| **Strength of Relationship** | `7` |
| **Evidence Artifact Title** | Q4 2024 Vulnerability Scan Report — Tenable.io |
| **Target ID #** | `EVD-VM-003` |
| **Evidence Artifact Description** | Quarterly automated vulnerability scan report covering all in-scope assets. Includes CVSS scores, affected assets, exploitability ratings, and remediation status. Owner: Security Operations. Date: 2024-12-15. Format: PDF export. Location: SharePoint /evidence/vm/q4-2024-scan-report.pdf. |
| **Notes** | Supplement EVD-VM-003 with EVD-VM-004 (Patch Management Log — Q4 2024) and EVD-VM-005 (Vulnerability Risk Acceptance Register) to satisfy the full A.8.8 risk response obligation. |

---

### Row 7 — `superset_of` | Security Awareness Training Records as Multi-Control Evidence

| Attribute | Value |
|---|---|
| **FDE#** | `A.6.3` |
| **FDE Name** | Information Security Awareness, Education and Training |
| **Focal Document Element (FDE)** | Personnel of the organization and relevant interested parties shall receive appropriate information security awareness, education and training and regular updates in organizational policies and procedures, as relevant for their job function. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.6.3 requires all personnel and relevant third parties to receive role-appropriate security awareness training with regular policy updates. Evidence artifact EVD-HR-007 is the annual Security Awareness Training Completion Report (2024), exported from the KnowBe4 platform, showing 100% completion rate across all employees and contractors, including training module completion dates, quiz scores, and phishing simulation results. EVD-HR-007 is a superset of A.6.3's requirements because the report additionally includes phishing simulation metrics, social engineering test results, and departmental completion breakdowns — data that goes beyond A.6.3's training completion requirement and also supports A.8.21 (Security testing) and A.5.7 (Threat intelligence awareness) objectives. The single artifact satisfies multiple controls. |
| **STRM Relationship** | `superset_of` |
| **Strength of Relationship** | `10` |
| **Evidence Artifact Title** | Annual Security Awareness Training Completion Report 2024 — KnowBe4 |
| **Target ID #** | `EVD-HR-007` |
| **Evidence Artifact Description** | Annual training completion report from KnowBe4 LMS showing employee and contractor completion rates, module scores, phishing simulation results, and department breakdowns. Owner: HR / Security. Date: 2024-12-31. Format: PDF. Location: SharePoint /evidence/training/awareness-completion-2024.pdf. |
| **Notes** | EVD-HR-007 reuse opportunities: A.6.3 (primary), A.5.7 (threat awareness training modules), A.6.2 (employment terms — training as condition of employment). Reference this artifact across all three control mappings in the audit evidence pack. |

---

### Row 8 — `intersects_with` | SIEM Alert Log as Monitoring Evidence

| Attribute | Value |
|---|---|
| **FDE#** | `A.8.16` |
| **FDE Name** | Monitoring Activities |
| **Focal Document Element (FDE)** | Networks, systems and applications shall be monitored for anomalous behaviour and appropriate actions taken to evaluate potential information security incidents. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.8.16 requires monitoring networks, systems, and applications for anomalous behaviour with appropriate follow-on actions for potential incidents. Evidence artifact EVD-SOC-012 is a 30-day SIEM alert summary report (November 2024) from the Splunk SIEM, showing alert volumes by severity, false positive rates, and analyst triage actions. EVD-SOC-012 partially satisfies A.8.16: it demonstrates that monitoring produces alerts and that analysts triage them. However, A.8.16 additionally requires evidence that appropriate actions were taken on potential incidents — which EVD-SOC-012 does not contain for escalated events (only triage counts). EVD-SOC-012 additionally contains performance metrics (MTTD, false positive rates) that are not required by A.8.16 but are useful for operational governance. |
| **STRM Relationship** | `intersects_with` |
| **Strength of Relationship** | `4` |
| **Evidence Artifact Title** | November 2024 SIEM Alert Summary Report — Splunk |
| **Target ID #** | `EVD-SOC-012` |
| **Evidence Artifact Description** | Monthly SIEM alert summary report from Splunk showing alert counts by severity, analyst triage disposition, false positive rate, mean time to detect, and escalated incident count. Owner: SOC. Date: 2024-11-30. Format: PDF. Location: SharePoint /evidence/soc/siem-summary-nov-2024.pdf. |
| **Notes** | Supplement EVD-SOC-012 with EVD-IR-003 (Incident Tickets — November 2024) to demonstrate that escalated alerts received appropriate follow-on actions per A.8.16's response requirement. |

---

### Row 9 — `not_related` | Change Management Log vs. Physical Security Evidence

| Attribute | Value |
|---|---|
| **FDE#** | `A.7.1` |
| **FDE Name** | Physical Security Perimeters |
| **Focal Document Element (FDE)** | Security perimeters shall be defined and used to protect areas that contain information and information processing facilities. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | ISO/IEC 27001:2022 A.7.1 requires defining and using physical security perimeters to protect areas containing information processing facilities. Evidence artifact EVD-CM-001 is the Q4 2024 Change Management Log from ServiceNow, recording all approved system configuration changes, change requestors, approvers, and rollback procedures. Physical security perimeter controls and information system change management records address entirely different security domains. EVD-CM-001 demonstrates the change management process; A.7.1 requires evidence of physical perimeter definition, access point controls, and physical entry restrictions. There is no meaningful overlap between these two evidence artifacts and control objectives. |
| **STRM Relationship** | `not_related` |
| **Strength of Relationship** | `1` |
| **Evidence Artifact Title** | Q4 2024 Change Management Log — ServiceNow |
| **Target ID #** | `EVD-CM-001` |
| **Evidence Artifact Description** | Quarterly extract from ServiceNow ITSM showing all approved changes, change type, requestor, approver, implementation date, and post-implementation review outcome. Owner: IT Operations. Date: 2024-12-31. Format: CSV export. Location: SharePoint /evidence/change/cm-log-q4-2024.csv. |
| **Notes** | A.7.1 requires physical evidence: facility access logs, CCTV records, badge access reports, and physical security inspection records. EVD-CM-001 is correctly mapped to A.8.32 (Change Management). This row documents a negative result from an automated evidence-to-control matching attempt. |

---

## Strength Score Calculations

| FDE# | Relationship | Confidence | Rationale | Base | Adj | **Score** |
|---|---|---|---|---|---|---|
| A.5.15 | equal | high | functional | 10 | 0+0 | **10** |
| A.8.8 | subset_of | high | functional | 7 | 0+0 | **7** |
| A.6.3 | superset_of | high | functional | 7 | 0+0 | **10** (clamped) |
| A.8.16 | intersects_with | high | functional | 4 | 0+0 | **4** |
| A.7.1 | not_related | high | semantic | 0 | 0+0 | **1** (clamped) |

---

## Evidence Artifact Catalog Schema

When building a control-to-evidence mapping, each artifact entry in the target
catalog should include the following fields to support the STRM `Target ID #` and
description columns:

| Field | Description | Example |
|---|---|---|
| `ID` | Unique artifact identifier | `EVD-AC-001` |
| `Title` | Short descriptive name | `Access Control Policy v3.2` |
| `Type` | Artifact type | `Policy`, `Procedure`, `Report`, `Log`, `Screenshot`, `Config Export`, `Certificate` |
| `Owner` | Accountable team or role | `CISO`, `SOC`, `HR` |
| `Version / Date` | When last produced or reviewed | `v3.2 / 2024-01-15` |
| `Review Cycle` | How often updated | `Annual`, `Quarterly`, `Continuous` |
| `Format` | File type | `PDF`, `CSV`, `Screenshot`, `JSON` |
| `Location` | Canonical storage path | `SharePoint /policies/access-control-policy-v3.2.pdf` |
| `Controls Satisfied` | Cross-referenced control IDs | `A.5.15, A.5.16, A.5.18` |

---

## Key Observations for This Mapping Type

- **Control-to-evidence** mappings are the most operationally immediate mapping
  type: gaps directly translate to audit findings. Treat every `subset_of` row
  as an open action item requiring additional evidence before the audit window.
- `superset_of` relationships are evidence reuse opportunities — one artifact
  satisfying multiple controls. Document these explicitly to reduce the audit
  evidence burden.
- `intersects_with` rows require a second artifact to be paired with the primary
  artifact. Always note the supplementary artifact ID in the Notes column.
- Evidence artifacts should be versioned and dated. An undated or unversioned
  artifact cannot satisfy an audit requirement for a specific period.
- For continuous controls (e.g., SIEM monitoring, vulnerability scanning), the
  evidence artifact should cover the full audit period — not just a point-in-time
  sample. Note the coverage period in the description column.
- The `not_related` pattern documents incorrect automated mappings. Keeping these
  rows in the STRM file prevents future re-testing of the same incorrect pairing
  and provides an audit trail of what was considered and rejected.
