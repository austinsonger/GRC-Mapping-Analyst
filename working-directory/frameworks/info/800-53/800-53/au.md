# NIST SP 800-53 Rev 5 — AU: Audit and Accountability

The Audit and Accountability family establishes requirements for creating, protecting, retaining, and reviewing audit records to enable the monitoring, analysis, investigation, and reporting of unauthorized activity, and to ensure individual accountability.

---

## AU-1: Policy and Procedures

Requires the organization to develop, document, disseminate, and periodically review and update audit and accountability policy and procedures addressing purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance.

**Key Enhancements:** None defined.

**Related Controls:** PM-9, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## AU-2: Event Logging

Requires the organization to identify the types of events that the system must be capable of logging in support of the audit function, and to coordinate the event logging function with other organizational entities requiring audit-related information. The organization must specify which events require logging on the system.

**Key Enhancements:** None defined. (Former enhancements withdrawn and incorporated into base control.)

**Related Controls:** AC-2, AC-3, AC-6, AC-7, AC-8, AC-16, AC-17, AU-3, AU-4, AU-5, AU-6, AU-7, AU-11, AU-12, CM-3, CM-5, CM-6, CM-13, IA-3, MA-4, MP-4, PE-3, PM-21, PT-2, PT-7, RA-8, SA-8, SC-7, SC-18, SI-3, SI-4, SI-7, SI-10, SI-11

**Baselines:** Low, Moderate, High

---

## AU-3: Content of Audit Records

Requires audit records to contain sufficient information to establish what type of event occurred, when it occurred, where it occurred, the source of the event, the outcome of the event, and the identity of any individuals, subjects, or objects associated with the event.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-3(1) | Additional Audit Information |
| AU-3(2) | Centralized Management of Planned Audit Record Content |
| AU-3(3) | Limit Personally Identifiable Information Elements |

**Related Controls:** AU-2, AU-8, AU-12, AU-14, MA-4, PL-9, SA-8, SI-7, SI-11

**Baselines:** Low, Moderate, High

---

## AU-4: Audit Log Storage Capacity

Requires the organization to allocate audit log storage capacity in accordance with organization-defined requirements, to reduce the likelihood of storage capacity being exceeded.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-4(1) | Transfer to Alternate Storage |

**Related Controls:** AU-2, AU-5, AU-6, AU-7, AU-9, AU-11, AU-12, AU-14, SI-4

**Baselines:** Low, Moderate, High

---

## AU-5: Response to Audit Logging Process Failures

Requires the system to alert designated personnel in the event of an audit logging process failure and take organization-defined additional actions (e.g., shut down the system, overwrite oldest audit records, stop generating audit records).

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-5(1) | Storage Capacity Warning |
| AU-5(2) | Real-Time Alerts |
| AU-5(3) | Configurable Traffic Volume Thresholds |
| AU-5(4) | Shutdown on Failure |
| AU-5(5) | Alternate Audit Logging Capability |

**Related Controls:** AU-2, AU-4, AU-7, AU-9, AU-11, AU-12, AU-14, SI-4, SI-12

**Baselines:** Low, Moderate, High

---

## AU-6: Audit Record Review, Analysis, and Reporting

Requires the organization to review and analyze system audit records at an organization-defined frequency for indications of inappropriate or unusual activity, and report findings to designated personnel or roles. Integrate audit review, analysis, and reporting with processes for investigation and response to suspicious activities.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-6(1) | Automated Process Integration |
| AU-6(3) | Correlate Audit Record Repositories |
| AU-6(4) | Central Review and Analysis |
| AU-6(5) | Integrated Analysis of Audit Records |
| AU-6(6) | Correlation with Physical Monitoring |
| AU-6(7) | Permitted Actions |
| AU-6(8) | Full Text Analysis of Privileged Commands |
| AU-6(9) | Correlation with Information from Nontechnical Sources |

**Related Controls:** AC-2, AC-3, AC-5, AC-6, AC-7, AC-17, AU-7, AU-16, CA-2, CA-7, CM-2, CM-5, CM-6, CM-10, CM-11, IA-2, IA-3, IA-5, IA-8, IR-5, MA-4, MP-4, PE-3, PE-6, RA-5, SA-8, SC-7, SI-3, SI-4, SI-7

**Baselines:** Low, Moderate, High

---

## AU-7: Audit Record Reduction and Report Generation

Requires the system to provide an audit record reduction and report generation capability that supports on-demand audit review, analysis, and reporting requirements and after-the-fact investigations of incidents.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-7(1) | Automatic Processing |

**Related Controls:** AC-2, AU-2, AU-3, AU-4, AU-5, AU-6, AU-12, AU-16, CM-5, IA-5, IR-4, PM-12, SI-4

**Baselines:** Moderate, High

---

## AU-8: Time Stamps

Requires the system to use internal system clocks to generate time stamps for audit records, and record time stamps that can be mapped to Coordinated Universal Time (UTC) or Greenwich Mean Time (GMT).

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-8(1) | Synchronization with Authoritative Time Source |

**Related Controls:** AU-3, AU-12, AU-14, SC-45

**Baselines:** Low, Moderate, High

---

## AU-9: Protection of Audit Information

Requires the system to protect audit information and audit logging tools from unauthorized access, modification, and deletion.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-9(1) | Hardware Write-Once Media |
| AU-9(2) | Store on Separate Physical Systems or Components |
| AU-9(3) | Cryptographic Protection |
| AU-9(4) | Access by Subset of Privileged Users |
| AU-9(5) | Dual Authorization |
| AU-9(6) | Read-Only Access |
| AU-9(7) | Store on Component with Different Operating System |

**Related Controls:** AC-3, AC-6, AU-6, AU-11, AU-14, AU-15, MP-2, MP-4, PE-2, PE-3, PE-6, SA-8, SC-8, SI-4

**Baselines:** Low, Moderate, High

---

## AU-10: Non-Repudiation

Requires the system to provide irrefutable evidence that a specific action was performed by a specific individual, protecting against claims by the author of an action that they did not perform it.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-10(1) | Association of Identities |
| AU-10(2) | Validate Binding of Information Producer Identity |
| AU-10(3) | Chain of Custody |
| AU-10(4) | Validate Binding of Information Reviewer Identity |
| AU-10(5) | Digital Signatures |

**Related Controls:** AU-9, PM-12, SA-8, SC-8, SC-12, SC-13, SC-16, SC-17, SC-23

**Baselines:** High

---

## AU-11: Audit Record Retention

Requires the organization to retain audit records for an organization-defined time period consistent with records retention policies, to provide support for after-the-fact investigations of incidents and to meet regulatory and organizational information retention requirements.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-11(1) | Long-Term Retrieval Capability |

**Related Controls:** AU-2, AU-4, AU-5, AU-6, AU-9, AU-14, MP-6, RA-5, SI-12

**Baselines:** Low, Moderate, High

---

## AU-12: Audit Record Generation

Requires the system to provide audit record generation capability for the events identified in AU-2 at all system components where audit capability is needed, allow designated personnel to select the events to be logged, and generate audit records with the content defined in AU-3.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-12(1) | System-Wide and Time-Correlated Audit Trail |
| AU-12(2) | Standardized Formats |
| AU-12(3) | Changes by Authorized Individuals |
| AU-12(4) | Query Parameter Audits of Personally Identifiable Information |

**Related Controls:** AC-6, AC-17, AU-2, AU-3, AU-4, AU-5, AU-6, AU-7, AU-14, CM-5, MA-4, MP-4, PM-12, SA-8, SC-18, SI-3, SI-4, SI-7, SI-10

**Baselines:** Low, Moderate, High

---

## AU-13: Monitoring for Information Disclosure

Requires the organization to monitor designated open-source information and/or information sites at an organization-defined frequency for evidence of unauthorized disclosure of organizational information.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-13(1) | Use of Automated Tools |
| AU-13(2) | Review of Monitored Sites |
| AU-13(3) | Unauthorized Replication of Information |

**Related Controls:** AC-22, PE-3, PM-12, RA-5, SC-7, SI-20

**Baselines:** None (not in any baseline)

---

## AU-14: Session Audit

Requires the system to provide and implement the capability for authorized users to select a user session to capture and record, or view and hear content related to a session in real time.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-14(1) | System Start-Up |
| AU-14(2) | Capture and Record Content |
| AU-14(3) | Remote Viewing and Listening |

**Related Controls:** AC-3, AC-8, AU-2, AU-3, AU-4, AU-5, AU-8, AU-9, AU-11, AU-12

**Baselines:** None (not in any baseline)

---

## AU-15: Alternate Audit Logging Capability

*Withdrawn.* Incorporated into AU-5(5).

---

## AU-16: Cross-Organizational Audit Logging

Requires the organization to employ organization-defined methods for coordinating audit logging information among external organizations when audit information is transmitted across organizational boundaries. Ensures end-to-end audit trail coverage.

**Key Enhancements:**

| # | Title |
|---|-------|
| AU-16(1) | Identity Preservation |
| AU-16(2) | Sharing of Audit Information |
| AU-16(3) | Disassociability |

**Related Controls:** AU-3, AU-6, AU-7, CA-3, PT-7

**Baselines:** None (not in any baseline)