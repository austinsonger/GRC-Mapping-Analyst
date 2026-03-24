# STRM Example: Framework-to-Control Mapping
# NIST SP 800-53 Rev 5 → CIS Controls v8.1

## Mapping Context

**Scenario**: An organization is implementing CIS Controls v8.1 as its primary
security baseline and needs to understand which NIST SP 800-53 Rev 5 control
families provide coverage, partial coverage, or exceed each CIS Safeguard. This
is a framework-to-control mapping where the focal document is a comprehensive
federal control catalog and the reference document is an implementation-focused
control set.

**Focal Document**: NIST SP 800-53 Rev 5 — Security and Privacy Controls for
Information Systems and Organizations
**Focal Document URL**: https://doi.org/10.6028/NIST.SP.800-53r5

**Target Document**: CIS Critical Security Controls v8.1
**Target Document URL**: https://www.cisecurity.org/controls/v8

**Bridge Framework**: NIST SP 800-53 Rev 5 (direct mapping — no intermediate bridge)

**File Name**:
```
Set Theory Relationship Mapping (STRM)_ [(NIST_SP_800-53_Rev5-to-NIST_SP_800-53_Rev5)-to-CIS_Controls_v8.1] - NIST SP 800-53 Rev5 to CIS Controls v8.1.csv
```

---

## CSV Header Block

```
Row 1: NIST IR 8477-Based Set Theory Relationship Mapping (STRM),,,,,,Focal Document:,NIST SP 800-53 Rev 5,,,,
Row 2: Target Document:,CIS Critical Security Controls v8.1,,,,,Focal Document URL:,https://doi.org/10.6028/NIST.SP.800-53r5,,,,
Row 3: (empty)
Row 4: FDE#,FDE Name,Focal Document Element (FDE),Confidence Levels,NIST IR-8477 Rational,STRM Rationale,STRM Relationship,Strength of Relationship,CIS Control Title,Target ID #,CIS Control Description,Notes
```

---

## Mapping Rows

### Row 5 — `equal` | Access Control

| Attribute | Value |
|---|---|
| **FDE#** | `AC-2` |
| **FDE Name** | Account Management |
| **Focal Document Element (FDE)** | Manage system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts; authorize access to the system based on a valid need-to-know or need-to-share; review accounts for compliance with account management requirements. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST SP 800-53 AC-2 requires organizations to manage the full lifecycle of system accounts including establishment, modification, review, disabling, and removal based on valid need-to-know. CIS Controls v8.1 Safeguard 5.2 requires the use of unique passwords and the management of all user accounts to limit access based on the principle of need-to-know. Both controls mandate systematic account lifecycle management to ensure only authorized users retain access to organizational systems. |
| **STRM Relationship** | `equal` |
| **Strength of Relationship** | `10` |
| **CIS Control Title** | Use Unique Passwords |
| **Target ID #** | `5.2` |
| **CIS Control Description** | Use unique passwords for all enterprise assets. Best practice implementation includes, at minimum, an 8-character password for accounts using MFA and a 14-character password for accounts not using MFA. |
| **Notes** | CIS 5.2 emphasizes password uniqueness; AC-2 focuses on lifecycle. Map AC-2 also to CIS 5.1 (Establish and Maintain an Inventory of Accounts) for full coverage. |

---

### Row 6 — `superset_of` | Audit and Accountability

| Attribute | Value |
|---|---|
| **FDE#** | `AU-6` |
| **FDE Name** | Audit Record Review, Analysis, and Reporting |
| **Focal Document Element (FDE)** | Review and analyze system audit records for indications of inappropriate or unusual activity; report findings to designated officials; adjust the level of audit record review, analysis, and reporting within the system when there is a change in risk based on law enforcement information, intelligence information, or other credible sources of information. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | NIST SP 800-53 AU-6 requires automated and manual review of audit records for inappropriate or unusual activity, with dynamic adjustment of review intensity based on current threat intelligence. CIS Controls v8.1 Safeguard 8.11 requires conducting reviews of audit logs to detect anomalies at least weekly. NIST AU-6 is a superset of CIS 8.11 because NIST additionally requires risk-driven adjustment of review frequency and formal reporting of findings to designated officials, obligations not present in the CIS safeguard's weekly review cadence. |
| **STRM Relationship** | `superset_of` |
| **Strength of Relationship** | `7` |
| **CIS Control Title** | Conduct Audit Log Reviews |
| **Target ID #** | `8.11` |
| **CIS Control Description** | Conduct reviews of audit logs to detect anomalies or abnormal events that could indicate a potential threat. Conduct reviews on a weekly basis, or more frequently. |
| **Notes** | CIS specifies a minimum weekly cadence; AU-6 ties cadence to current risk posture. Also map AU-6 to CIS 8.9 (Centralize Audit Logs) for the collection side. |

---

### Row 7 — `subset_of` | Configuration Management

| Attribute | Value |
|---|---|
| **FDE#** | `CM-7` |
| **FDE Name** | Least Functionality |
| **Focal Document Element (FDE)** | Configure the system to provide only essential capabilities; prohibit or restrict the use of functions, ports, protocols, software, and services not required. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST SP 800-53 CM-7 requires systems to be configured to provide only essential capabilities, prohibiting or restricting unnecessary functions, ports, protocols, and services. CIS Controls v8.1 Safeguard 4.1 requires establishing and maintaining a secure configuration process for enterprise assets and software, ensuring all unnecessary features are disabled. CM-7 is a subset of CIS 4.1 because CIS 4.1 encompasses the broader secure configuration lifecycle — including initial hardening standards, change management, and ongoing compliance verification — whereas CM-7 addresses only the run-state restriction of unnecessary functionality without mandating the governance process around configuration baselines. |
| **STRM Relationship** | `subset_of` |
| **Strength of Relationship** | `7` |
| **CIS Control Title** | Establish and Maintain a Secure Configuration Process |
| **Target ID #** | `4.1` |
| **CIS Control Description** | Establish and maintain a secure configuration process for enterprise assets (end-user devices, including portable and mobile; non-computing/IoT devices; and servers) and software. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard. |
| **Notes** | Map CM-6 (Configuration Settings) alongside CM-7 to CIS 4.1 for complete configuration management coverage. CM-7(1) and CM-7(2) enhancements (periodic reviews and vetted software) also contribute. |

---

### Row 8 — `intersects_with` | Incident Response

| Attribute | Value |
|---|---|
| **FDE#** | `IR-4` |
| **FDE Name** | Incident Handling |
| **Focal Document Element (FDE)** | Implement an incident handling capability for incidents that is consistent with the incident response plan; coordinate incident handling activities with contingency planning activities; incorporate lessons learned from ongoing incident handling activities into incident response procedures, training, and testing. |
| **Confidence Levels** | `high` |
| **NIST IR-8477 Rational** | `semantic` |
| **STRM Rationale** | NIST SP 800-53 IR-4 requires implementing an incident handling capability aligned to the incident response plan, coordinating with contingency planning, and incorporating lessons learned into procedures, training, and testing. CIS Controls v8.1 Safeguard 17.4 requires establishing and maintaining an incident response process that includes preparation, detection, analysis, containment, eradication, and recovery. Both controls require a structured incident handling process covering the core IR lifecycle. NIST IR-4 additionally requires explicit coordination with contingency planning and formal lessons-learned integration into training; CIS 17.4 additionally specifies the PICEDR phase model as the required structure, which is not prescribed by IR-4. |
| **STRM Relationship** | `intersects_with` |
| **Strength of Relationship** | `4` |
| **CIS Control Title** | Establish and Maintain an Incident Response Process |
| **Target ID #** | `17.4` |
| **CIS Control Description** | Establish and maintain an incident response process that addresses roles and responsibilities, compliance requirements, and a communication plan. Review annually, or when significant enterprise changes occur that could impact this Safeguard. |
| **Notes** | Also map IR-5 (Incident Monitoring) to CIS 17.5 and IR-8 (Incident Response Plan) to CIS 17.1 for complete incident response family coverage. |

---

### Row 9 — `not_related` | System and Communications Protection (edge case)

| Attribute | Value |
|---|---|
| **FDE#** | `SC-39` |
| **FDE Name** | Process Isolation |
| **Focal Document Element (FDE)** | Maintain a separate execution domain for each executing process. |
| **Confidence Levels** | `medium` |
| **NIST IR-8477 Rational** | `functional` |
| **STRM Rationale** | NIST SP 800-53 SC-39 requires the operating environment to maintain separate execution domains for each process, preventing one process from accessing another's memory space. CIS Controls v8.1 Safeguard 10.5 requires enabling anti-exploitation features on enterprise assets and software. While both controls address host-level protection, they operate on entirely different attack surfaces: SC-39 addresses kernel-level process isolation as an OS architecture property, while CIS 10.5 addresses exploit mitigation features (ASLR, DEP/NX, stack canaries) as software hardening techniques. There is no meaningful set-overlap between the requirement to maintain separate execution domains and the requirement to enable exploit mitigation features. |
| **STRM Relationship** | `not_related` |
| **Strength of Relationship** | `1` |
| **CIS Control Title** | Enable Anti-Exploitation Features |
| **Target ID #** | `10.5` |
| **CIS Control Description** | Enable anti-exploitation features on enterprise assets and software, where possible, such as Microsoft's Enhanced Mitigation Experience Toolkit (EMET) or Windows Defender Exploit Guard. |
| **Notes** | SC-39 is best mapped to CIS 4.8 (Uninstall or Disable Unnecessary Services) or left without a CIS equivalent. Flagged for manual review. |

---

## Strength Score Calculations

| FDE# | Relationship | Confidence | Rationale | Base | Adj | **Score** |
|---|---|---|---|---|---|---|
| AC-2 | equal | high | semantic | 10 | 0+0 | **10** |
| AU-6 | superset_of | high | functional | 7 | 0+0 | **7** |
| CM-7 | subset_of | high | semantic | 7 | 0+0 | **7** |
| IR-4 | intersects_with | high | semantic | 4 | 0+0 | **4** |
| SC-39 | not_related | medium | functional | 0 | −1+0 | **1** (clamped) |

---

## Key Observations for This Mapping Type

- **Framework-to-control** mappings typically yield many `subset_of` results
  because a comprehensive catalog (NIST 800-53) routinely exceeds the scope of
  an implementation-focused control set (CIS Controls).
- NIST control enhancements (e.g., AC-2(1), AU-6(1)) often have no direct CIS
  Safeguard equivalent and should be flagged as coverage gaps in the Notes column.
- When a CIS Implementation Group (IG1/IG2/IG3) maturity tier applies, note which
  IG level the safeguard belongs to in the Notes column to support risk-based
  scoping decisions.
