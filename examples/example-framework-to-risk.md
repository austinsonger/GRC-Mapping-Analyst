# STRM Example: Framework-to-Risk Mapping
# NIST CSF 2.0 → Organizational Risk Register (ISO 31000 Format)

## Mapping Context

**Scenario**: A financial services organization uses NIST CSF 2.0 as its primary
cybersecurity framework and ISO 31000 as its enterprise risk management methodology.
The risk management team needs to demonstrate which CSF subcategories correspond
to specific risk scenarios in the organizational risk register — and which
material risks in the register are not covered by any CSF subcategory (residual
risk gaps). This is a framework-to-risk mapping: the focal document is a
cybersecurity framework and the reference document is a structured risk register
of named, quantified risk scenarios.

**Focal Document**: NIST Cybersecurity Framework 2.0
**Focal Document URL**: https://doi.org/10.6028/NIST.CSWP.29

**Target Document**: Organizational Information Security Risk Register (ISO 31000 format)
— containing named risk scenarios with likelihood, impact, and inherent/residual
risk ratings
**Target Document URL**: Internal — `/risk/risk-register-2024.xlsx`

**Bridge Framework**: NIST CSF 2.0 (direct mapping)

**File Name**:
```
Set Theory Relationship Mapping (STRM)_ [(NIST_CSF_2.0-to-NIST_CSF_2.0)-to-InfoSec_Risk_Register_2024] - NIST CSF 2.0 to InfoSec Risk Register 2024.csv
```

> **Note on framework-to-risk mappings**: Risk register entries describe
> scenarios (threat × asset × impact), not requirements. STRM relationships in
> this mapping type indicate how completely a framework subcategory mitigates a
> risk scenario. `equal` means the subcategory fully addresses the risk;
> `subset_of` means the risk scenario is broader than what the subcategory covers;
> `superset_of` means the subcategory addresses more than just this risk.
> `intersects_with` is the most common result in this mapping type.

---

## CSV Header Block

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,NIST Cybersecurity Framework 2.0,,,,
Row 2: Target Document:,Organizational Information Security Risk Register 2024,,,,,Focal Document URL:,https://doi.org/10.6028/NIST.CSWP.29,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,Risk Scenario Title,Target ID #,Risk Scenario Description,Notes
```

---

## Mapping Rows

### Row 5 — `equal` | Ransomware Detection

| Attribute | Value |
|---|---|
| **FDE#** | `DE.CM-01` |
| **FDE Name** | Networks and Environments Monitored |
| **Focal Document Element (FDE)** | Networks and network services are monitored to find potentially adverse events. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | NIST CSF 2.0 DE.CM-01 requires continuous monitoring of networks and network services to identify potentially adverse events. Risk Register scenario RS-014 describes the risk of ransomware propagation across internal network segments due to undetected lateral movement, rated High inherent risk. Both the CSF subcategory and the risk scenario address the same security outcome: detecting malicious network activity before it causes material damage. The network monitoring capability described in DE.CM-01 directly mitigates RS-014 by providing the detection mechanism that would identify ransomware lateral movement in the network layer before encryption of endpoints. |
| **STRM Relationship** | `equal` |
| **Strength of Relationship** | `10` |
| **Risk Scenario Title** | Ransomware Lateral Movement via Unmonitored Network Segments |
| **Target ID #** | `RS-014` |
| **Risk Scenario Description** | Threat actor deploys ransomware that propagates via unmonitored internal network segments, encrypting file shares and backup systems before detection. Likelihood: Medium. Impact: Critical. Inherent Risk: High. Residual Risk: Medium (post-monitoring controls). |
| **Notes** | DE.CM-01 addresses detection only. Map PR.IR-01 (Network Integrity) and RS.MA-01 (Incident Management) for the full risk treatment chain covering prevention and response. |

---

### Row 6 — `subset_of` | Third-Party Data Breach Risk

| Attribute | Value |
|---|---|
| **FDE#** | `GV.SC-06` |
| **FDE Name** | Suppliers and Third Parties — Cybersecurity Requirements in Contracts |
| **Focal Document Element (FDE)** | Cybersecurity requirements to address risks in the supply chain are established, prioritized, and integrated into contracts and other types of agreements with suppliers and other relevant third parties. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST CSF 2.0 GV.SC-06 requires cybersecurity requirements to be established, prioritized, and integrated into supplier contracts and third-party agreements. Risk Register scenario RS-027 describes the risk of sensitive customer data being exposed through a third-party processor's security failure, rated Critical inherent risk. GV.SC-06 is a subset of RS-027 because the risk scenario encompasses the full third-party data breach lifecycle — from initial supplier compromise through data exfiltration, customer notification, regulatory response, and reputational damage — whereas GV.SC-06 addresses only the contractual requirement-setting step at the beginning of the supplier relationship. The risk scenario also includes failure modes during ongoing operations and termination that GV.SC-06 does not govern. |
| **STRM Relationship** | `subset_of` |
| **Strength of Relationship** | `7` |
| **Risk Scenario Title** | Third-Party Data Processor Security Breach Exposing Customer PII |
| **Target ID #** | `RS-027` |
| **Risk Scenario Description** | A third-party data processor suffers a security breach that exposes customer PII processed on behalf of the organization. Regulatory notification obligations trigger. Likelihood: Low. Impact: Critical. Inherent Risk: High. Residual Risk: Medium (post-DPA and audit controls). |
| **Notes** | Map GV.SC-07 (Third-party compliance monitoring), GV.SC-08 (Incident notification in supplier agreements), and PR.DS-01 (Data protection) alongside GV.SC-06 for broader RS-027 risk treatment coverage. |

---

### Row 7 — `superset_of` | Insider Threat — Privilege Misuse

| Attribute | Value |
|---|---|
| **FDE#** | `PR.AA-05` |
| **FDE Name** | Access Permissions and Authorizations Managed |
| **Focal Document Element (FDE)** | Access permissions, entitlements, and authorizations are managed, incorporating the principles of least privilege and separation of duties. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST CSF 2.0 PR.AA-05 requires managing access permissions and authorizations incorporating least privilege and separation of duties. Risk Register scenario RS-041 describes the risk of an authorized administrator abusing privileged access to exfiltrate financial data, rated High inherent risk. PR.AA-05 is a superset of RS-041 because PR.AA-05 governs access permission management across all user roles and all information assets in the organization — not only privileged administrative accounts — whereas RS-041 is narrowly scoped to the specific insider threat scenario of financial data exfiltration via administrative privilege misuse. PR.AA-05's scope of controlling all access permissions exceeds the specific risk scenario. |
| **STRM Relationship** | `superset_of` |
| **Strength of Relationship** | `7` |
| **Risk Scenario Title** | Privileged Administrator Exfiltrates Financial Records |
| **Target ID #** | `RS-041` |
| **Risk Scenario Description** | An authorized system administrator with access to financial systems deliberately exfiltrates customer financial records for personal gain. Likelihood: Low. Impact: High. Inherent Risk: Medium. Residual Risk: Low (post-PAM and DLP controls). |
| **Notes** | RS-041 residual risk depends on PAM (Privileged Access Management) tooling. Map DE.CM-03 (Personnel and User Activity Monitored) for the detection dimension of this risk scenario. |

---

### Row 8 — `intersects_with` | DDoS Attack on Customer Portal

| Attribute | Value |
|---|---|
| **FDE#** | `PR.IR-02` |
| **FDE Name** | Resilience to Disruption |
| **Focal Document Element (FDE)** | Adequate resource capacity to ensure availability is maintained. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | NIST CSF 2.0 PR.IR-02 requires maintaining adequate resource capacity to ensure availability. Risk Register scenario RS-008 describes the risk of a volumetric DDoS attack rendering the customer portal unavailable, causing SLA breach and customer churn. Both address the availability dimension of the customer portal. PR.IR-02 additionally covers non-DDoS availability threats (capacity exhaustion due to organic load, hardware failure, misconfiguration); RS-008 additionally specifies the DDoS attack vector and its business impact on SLA obligations and customer retention — a business consequence dimension not addressed by the technical capacity control. Neither fully contains the other. |
| **STRM Relationship** | `intersects_with` |
| **Strength of Relationship** | `4` |
| **Risk Scenario Title** | Volumetric DDoS Attack Causing Customer Portal Unavailability |
| **Target ID #** | `RS-008` |
| **Risk Scenario Description** | Threat actor executes a volumetric DDoS attack against the public customer portal, causing unavailability for 4+ hours, triggering SLA penalties and customer churn. Likelihood: Medium. Impact: High. Inherent Risk: High. Residual Risk: Low (post-CDN and scrubbing controls). |
| **Notes** | Also map DE.CM-01 (network monitoring) and RS.MA-01 (incident response activation) to RS-008. The business impact dimension (SLA penalties, churn) requires separate treatment in the Business Impact Analysis (BIA). |

---

### Row 9 — `not_related` | Geopolitical Regulatory Change Risk

| Attribute | Value |
|---|---|
| **FDE#** | `GV.OC-02` |
| **FDE Name** | Internal and External Stakeholder Needs |
| **Focal Document Element (FDE)** | Internal and external stakeholders with cybersecurity risk management roles and responsibilities are identified and communicated with, as appropriate, to support the organization's overall mission and objectives. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST CSF 2.0 GV.OC-02 requires identifying and communicating with stakeholders who have cybersecurity risk management roles and responsibilities. Risk Register scenario RS-055 describes the risk of new cross-border data transfer regulations (e.g., SCCs invalidation) requiring costly re-architecture of EU data flows, rated Medium inherent risk. Stakeholder communication (GV.OC-02) and regulatory change management (RS-055) operate in entirely different domains. GV.OC-02 addresses the internal/external communication structure of the cybersecurity function; RS-055 addresses a legal and geopolitical risk to data transfer compliance that requires legal analysis, re-architecture, and contract renegotiation — none of which are within the scope of stakeholder communication management. |
| **STRM Relationship** | `not_related` |
| **Strength of Relationship** | `1` |
| **Risk Scenario Title** | Cross-Border Data Transfer Regulatory Change Requiring Re-Architecture |
| **Target ID #** | `RS-055` |
| **Risk Scenario Description** | New regulatory decision invalidates existing Standard Contractual Clauses for EU-US data transfers, requiring re-architecture of data flows and renegotiation of DPAs with EU customers. Likelihood: Medium. Impact: High. Inherent Risk: High. Residual Risk: Medium (post-legal review). |
| **Notes** | RS-055 is a legal/regulatory risk that falls outside the scope of the NIST CSF's technical and operational domains. It should be treated as a compliance risk and mapped to the organization's legal risk register and monitored by the DPO and Legal function rather than the CISO. |

---

## Strength Score Calculations

| FDE# | Relationship | Confidence | Rationale | Base | Adj | **Score** |
|---|---|---|---|---|---|---|
| DE.CM-01 | equal | high | functional | 10 | 0+0 | **10** |
| GV.SC-06 | subset_of | high | semantic | 7 | 0+0 | **7** |
| PR.AA-05 | superset_of | high | semantic | 7 | 0+0 | **7** |
| PR.IR-02 | intersects_with | high | functional | 4 | 0+0 | **4** |
| GV.OC-02 | not_related | high | semantic | 0 | 0+0 | **1** (clamped) |

---

## Key Observations for This Mapping Type

- **Framework-to-risk** mappings are the primary tool for demonstrating that
  a framework implementation reduces specific organizational risks. This is
  essential for Board-level risk reporting and for justifying security investment.
- `intersects_with` is the dominant relationship type in this mapping because
  risk scenarios typically combine multiple threat vectors while CSF subcategories
  address individual protective or detective capabilities.
- Risk Register scenario IDs (RS-XXX) should match the organization's GRC
  platform identifiers exactly to enable automated risk-control linkage.
- When a risk scenario has no CSF subcategory mapping (`not_related` or missing
  row), it indicates a risk that the framework does not address. These should be
  treated as residual risks requiring supplementary controls or risk acceptance.
- Risk ratings (Likelihood, Impact, Inherent/Residual) should be noted in the
  Risk Scenario Description column to enable prioritization of which mappings
  are most critical to validate with evidence.
- Framework-to-risk mappings enable **bow-tie analysis**: map preventive
  subcategories (Identify, Protect) on the left side and detective/responsive
  subcategories (Detect, Respond, Recover) on the right side of each risk scenario.
