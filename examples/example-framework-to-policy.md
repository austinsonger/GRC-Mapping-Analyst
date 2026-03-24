# STRM Example: Framework-to-Policy Mapping
# CIS Controls v8.1 → Organizational Information Security Policy Suite

## Mapping Context

**Scenario**: An organization has implemented CIS Controls v8.1 as its technical
security baseline and now needs to verify that its internal policy suite provides
adequate governance coverage for each CIS Implementation Group 2 (IG2) Safeguard.
This is a framework-to-policy mapping: the focal document is an external control
framework and the reference documents are internal organizational policies. The
goal is to identify which safeguards are policy-backed, which are covered only
technically without policy support, and which are policy gaps.

**Focal Document**: CIS Critical Security Controls v8.1
**Focal Document URL**: https://www.cisecurity.org/controls/v8

**Target Document**: Organizational Information Security Policy Suite
(composed of discrete policies: Acceptable Use Policy, Access Control Policy,
Incident Response Policy, Change Management Policy, Vulnerability Management Policy,
Data Classification Policy, and Business Continuity Policy)
**Target Document URL**: Internal — `/policies/`

**Bridge Framework**: CIS Controls v8.1 (direct mapping)

**File Name**:
```
Set Theory Relationship Mapping (STRM)_ [(CIS_Controls_v8.1-to-CIS_Controls_v8.1)-to-InfoSec_Policy_Suite] - CIS Controls v8.1 to InfoSec Policy Suite.csv
```

> **Note on policy mappings**: Policy documents are typically broader and less
> prescriptive than framework controls. Expect a high proportion of `superset_of`
> relationships (policy covers more ground than the control) and `intersects_with`
> (policy and control partially align but diverge in scope or specificity).

---

## CSV Header Block

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,CIS Critical Security Controls v8.1,,,,
Row 2: Target Document:,Organizational Information Security Policy Suite,,,,,Focal Document URL:,https://www.cisecurity.org/controls/v8,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,Policy Title,Target ID #,Policy Statement,Notes
```

---

## Mapping Rows

### Row 5 — `equal` | Acceptable Use

| Attribute | Value |
|---|---|
| **FDE#** | `2.1` |
| **FDE Name** | Establish and Maintain a Software Inventory |
| **Focal Document Element (FDE)** | Establish and maintain a detailed inventory of all licensed software installed on enterprise assets. The software inventory must document the title, publisher, initial install/use date and business purpose for each entry; where appropriate, include the Uniform Resource Locator (URL), app store(s), version(s), deployment mechanism, and decommission date. Review and update the software inventory bi-annually, or more frequently. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | CIS Controls v8.1 Safeguard 2.1 requires maintaining a detailed inventory of all licensed software on enterprise assets, reviewed bi-annually. The organization's Acceptable Use Policy (AUP) Section 4.2 requires employees to use only approved and licensed software, and mandates that IT maintain an approved software register that is reviewed and approved annually. Both require maintaining an authoritative record of approved software installations and prohibiting unapproved software. The policy statement and the CIS safeguard achieve the same governance and operational outcome through equivalent documentation requirements. |
| **STRM Relationship** | `equal` |
| **Strength of Relationship** | `10` |
| **Policy Title** | Acceptable Use Policy |
| **Target ID #** | `AUP-4.2` |
| **Policy Statement** | Employees shall use only software that has been approved and licensed by IT. The IT department shall maintain an approved software register, reviewed and updated annually or upon any material change in the software environment. |
| **Notes** | CIS specifies bi-annual review; AUP specifies annual. Update the AUP review cadence or document the gap in the policy exception register. |

---

### Row 6 — `subset_of` | Access Control

| Attribute | Value |
|---|---|
| **FDE#** | `5.4` |
| **FDE Name** | Restrict Administrator Privileges to Dedicated Administrator Accounts |
| **Focal Document Element (FDE)** | Restrict administrator privileges to dedicated administrator accounts on enterprise assets. Conduct general computing activities, such as internet browsing, email, and productivity suite use, from the user's primary, non-privileged account. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | CIS Controls v8.1 Safeguard 5.4 requires that administrative privileges be restricted to dedicated administrator accounts, with general computing performed from non-privileged accounts. The organization's Access Control Policy (ACP) Section 3.1 requires that privileged access be assigned based on role, documented in the access control matrix, reviewed quarterly, and subject to MFA. CIS 5.4 is a subset of ACP-3.1 because ACP-3.1 additionally requires: documentation of all privileged roles in an access control matrix, quarterly review of all privileged assignments, and mandatory MFA for all privileged accounts — requirements not present in CIS 5.4's scope of account separation. |
| **STRM Relationship** | `subset_of` |
| **Strength of Relationship** | `7` |
| **Policy Title** | Access Control Policy |
| **Target ID #** | `ACP-3.1` |
| **Policy Statement** | Privileged access shall be assigned on a role-based, least-privilege basis and documented in the organizational access control matrix. All privileged accounts shall be subject to multi-factor authentication. Privileged access assignments shall be reviewed quarterly by the system owner and access revoked within 24 hours of role change or termination. |
| **Notes** | The ACP's MFA requirement for privileged accounts provides additional coverage for CIS 6.3 (Require MFA for Externally-Exposed Applications) and CIS 6.5 (Require MFA for Administrative Access). Note those cross-mappings. |

---

### Row 7 — `superset_of` | Incident Response

| Attribute | Value |
|---|---|
| **FDE#** | `17.3` |
| **FDE Name** | Establish and Maintain Contact Information for Reporting Security Incidents |
| **Focal Document Element (FDE)** | Establish and maintain contact information for parties that need to be informed of security incidents. Contacts may include internal staff, third-party vendors, law enforcement, cyber insurance providers, relevant government agencies, Information Sharing and Analysis Center (ISAC) partners, or other stakeholders. Verify contacts annually, or when significant enterprise changes occur that could impact this Safeguard. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | CIS Controls v8.1 Safeguard 17.3 requires maintaining verified contact information for all parties to be informed during a security incident, reviewed annually. The organization's Incident Response Policy (IRP) Section 5.1 requires establishing and maintaining an incident notification matrix identifying internal and external contacts for each incident severity level. IRP-5.1 is a superset of CIS 17.3 because the IRP additionally requires: mapping contacts to specific incident severity levels (P1/P2/P3/P4), specifying notification timeframes per severity, and including regulatory notification obligations — dimensions not addressed by the CIS safeguard's basic contact inventory requirement. |
| **STRM Relationship** | `superset_of` |
| **Strength of Relationship** | `7` |
| **Policy Title** | Incident Response Policy |
| **Target ID #** | `IRP-5.1` |
| **Policy Statement** | The organization shall maintain an incident notification matrix identifying required internal and external contacts by incident severity level, with specified notification timeframes. The matrix shall include regulatory and law enforcement notification requirements. Contacts shall be verified semi-annually. |
| **Notes** | IRP notification timeframes (e.g., 72-hour regulatory notification) add compliance obligations that CIS 17.3 does not address. Use IRP-5.1 as the authoritative contact matrix; reference CIS 17.3 as the technical baseline. |

---

### Row 8 — `intersects_with` | Vulnerability Management

| Attribute | Value |
|---|---|
| **FDE#** | `7.4` |
| **FDE Name** | Perform Automated Application Patch Management |
| **Focal Document Element (FDE)** | Perform application updates on enterprise assets through automated patch management on a monthly basis, or more frequently. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | CIS Controls v8.1 Safeguard 7.4 requires automated application patch management on enterprise assets performed at least monthly. The organization's Vulnerability Management Policy (VMP) Section 6.2 requires that critical patches (CVSS ≥ 9.0) be applied within 72 hours, high patches (CVSS 7.0–8.9) within 14 days, and medium patches within 30 days of vendor release, with exceptions requiring CISO approval. Both controls mandate timely application patching. CIS 7.4 additionally specifies automated patch deployment as the required mechanism; VMP-6.2 additionally imposes risk-tiered remediation timelines based on CVSS score — a specificity that CIS 7.4 does not include. Neither fully contains the other. |
| **STRM Relationship** | `intersects_with` |
| **Strength of Relationship** | `4` |
| **Policy Title** | Vulnerability Management Policy |
| **Target ID #** | `VMP-6.2` |
| **Policy Statement** | Critical vulnerabilities (CVSS ≥ 9.0) shall be remediated within 72 hours. High vulnerabilities (CVSS 7.0–8.9) shall be remediated within 14 days. Medium vulnerabilities shall be remediated within 30 days. Exceptions require documented CISO approval and a compensating control. |
| **Notes** | The VMP's CVSS-tiered timelines are more operationally specific than the CIS monthly cadence. Use the VMP as the operative requirement; CIS 7.4 provides the automation-mechanism guidance. |

---

### Row 9 — `not_related` | Data Classification Policy vs. Network Segmentation

| Attribute | Value |
|---|---|
| **FDE#** | `12.2` |
| **FDE Name** | Establish and Maintain a Secure Network Architecture |
| **Focal Document Element (FDE)** | Establish and maintain a secure network architecture. A secure network architecture must address segmentation, least privilege, availability, and a secure channel for out-of-band management. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | CIS Controls v8.1 Safeguard 12.2 requires establishing and maintaining a secure network architecture addressing segmentation, least privilege, and availability. The organization's Data Classification Policy (DCP) Section 2.1 requires classifying all information assets into four tiers (Public, Internal, Confidential, Restricted) and applying handling requirements for each tier. Network architecture requirements and data classification requirements operate in entirely different domains: 12.2 governs how network infrastructure is designed and segmented; DCP-2.1 governs how information content is labelled and handled. There is no meaningful set overlap between the obligation to design a segmented network and the obligation to classify information. |
| **STRM Relationship** | `not_related` |
| **Strength of Relationship** | `1` |
| **Policy Title** | Data Classification Policy |
| **Target ID #** | `DCP-2.1` |
| **Policy Statement** | All information assets shall be classified into one of four tiers: Public, Internal Use Only, Confidential, or Restricted. Classification shall be assigned by the data owner at creation and reviewed annually. Each tier carries defined handling, storage, transmission, and disposal requirements. |
| **Notes** | CIS 12.2 is better mapped to the organization's Network Security Policy (NSP) or Data Center Security Policy. DCP-2.1 is better mapped to CIS 3.7 (Establish and Maintain a Data Classification Scheme). Flag this as a mapping error if found in a draft crosswalk table. |

---

## Strength Score Calculations

| FDE# | Relationship | Confidence | Rationale | Base | Adj | **Score** |
|---|---|---|---|---|---|---|
| 2.1 | equal | high | functional | 10 | 0+0 | **10** |
| 5.4 | subset_of | high | semantic | 7 | 0+0 | **7** |
| 17.3 | superset_of | high | semantic | 7 | 0+0 | **7** |
| 7.4 | intersects_with | high | functional | 4 | 0+0 | **4** |
| 12.2 | not_related | high | semantic | 0 | 0+0 | **1** (clamped) |

---

## Key Observations for This Mapping Type

- **Framework-to-policy** mappings are the primary tool for identifying policy
  gaps: any CIS safeguard that produces `not_related` or has no mapping row at all
  is a control without policy support — a finding in most audits.
- Internal policy IDs should follow a consistent format (e.g., `<PolicyCode>-<Section>`)
  to make cross-references unambiguous.
- Policy statements are often broader than framework controls. A single policy
  section (e.g., ACP-3.1) may map to multiple CIS safeguards. Track many-to-one
  relationships in the Notes column.
- Policy review cadences frequently conflict with framework scanning/patching
  timelines. Always note these discrepancies — they represent operational gaps
  even when the subject matter aligns.
- For organizations using a GRC platform, the `Target ID #` column should contain
  a reference to the platform's policy document ID (e.g., `POL-2024-AC-001`) for
  automated evidence linking.
