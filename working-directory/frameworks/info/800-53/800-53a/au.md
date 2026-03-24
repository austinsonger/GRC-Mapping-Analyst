# NIST SP 800-53A Rev 5 — AU: Audit and Accountability Assessment Procedures

Assessment procedures for the Audit and Accountability family evaluate whether the organization creates, protects, retains, and reviews audit records to enable monitoring, analysis, and reporting of unauthorized system activity.

---

## AU-1: Policy and Procedures

**Assessment Objective:** Determine if the organization develops, documents, disseminates, reviews, and updates audit and accountability policy and procedures.

**Examine:** Audit and accountability policy; audit and accountability procedures; system security plan.

**Interview:** Organizational personnel responsible for audit and accountability policy.

**Test:** Organizational processes for managing audit and accountability policy and procedures.

**Determination Statements:**
- AU-01a. — An audit and accountability policy is developed, documented, and disseminated
- AU-01b. — Audit and accountability procedures are developed, documented, and disseminated
- AU-01c. — The audit and accountability policy and procedures are reviewed and updated at an organization-defined frequency

---

## AU-2: Event Logging

**Assessment Objective:** Determine if the organization identifies events that the system must be capable of logging and coordinates the event logging function with other organizational entities.

**Examine:** Audit and accountability policy; system security plan; system design documentation; system configuration settings; list of organization-defined auditable events; audit records.

**Interview:** System administrators; organizational personnel responsible for defining auditable events; information system security officers.

**Test:** System audit logging configuration; mechanisms for selecting auditable events.

**Determination Statements:**
- AU-02a. — The types of events that the system is capable of logging in support of the audit function are identified
- AU-02b. — The event logging function is coordinated with other organizational entities requiring audit-related information
- AU-02c. — The organization-defined event types that the system logs within the system are specified along with the frequency of or situation requiring logging for each event type
- AU-02d. — The types of logged events and logging frequencies are reviewed and updated

---

## AU-3: Content of Audit Records

**Assessment Objective:** Determine if audit records contain the required information to establish what, when, where, source, outcome, and identity.

**Examine:** Audit and accountability policy; system security plan; system design documentation; system configuration settings; audit records; audit record content documentation.

**Interview:** System administrators; system developers.

**Test:** Audit record generation mechanisms; audit record content verification.

**Determination Statements:**
- AU-03a. — Audit records contain what type of event occurred
- AU-03b. — Audit records contain when the event occurred
- AU-03c. — Audit records contain where the event occurred
- AU-03d. — Audit records contain the source of the event
- AU-03e. — Audit records contain the outcome of the event
- AU-03f. — Audit records contain the identity of individuals, subjects, or objects/entities associated with the event

---

## AU-6: Audit Record Review, Analysis, and Reporting

**Assessment Objective:** Determine if the organization reviews and analyzes audit records for indications of inappropriate or unusual activity and reports findings.

**Examine:** Audit and accountability policy; audit review and analysis procedures; audit records; audit analysis reports; incident reports; system security plan.

**Interview:** Organizational personnel responsible for audit review, analysis, and reporting; information system security officers.

**Test:** Audit review and analysis mechanisms; automated audit analysis tools; reporting mechanisms.

**Determination Statements:**
- AU-06a. — System audit records are reviewed and analyzed at an organization-defined frequency for indications of organization-defined inappropriate or unusual activity
- AU-06b. — Findings are reported to organization-defined personnel or roles

---

## AU-7: Audit Record Reduction and Report Generation

**Assessment Objective:** Determine if the system provides an audit record reduction and report generation capability.

**Examine:** Audit and accountability policy; system security plan; system design documentation; system configuration settings; audit record reduction capabilities; report generation tools.

**Interview:** System administrators; organizational personnel responsible for audit analysis.

**Test:** Audit record reduction mechanisms; report generation capabilities.

**Determination Statements:**
- AU-07a. — The system provides an audit record reduction and report generation capability that supports on-demand audit review, analysis, and reporting requirements
- AU-07b. — The system provides an audit record reduction and report generation capability that supports after-the-fact investigations of incidents

---

## AU-8: Time Stamps

**Assessment Objective:** Determine if the system uses internal system clocks to generate time stamps for audit records.

**Examine:** Audit and accountability policy; system security plan; system design documentation; system configuration settings; time synchronization configuration.

**Interview:** System administrators.

**Test:** System clock synchronization mechanisms; time stamp generation in audit records.

**Determination Statements:**
- AU-08a. — The system uses internal system clocks to generate time stamps for audit records
- AU-08b. — Time stamps use Coordinated Universal Time (UTC) or local time with an offset from UTC and meet organization-defined granularity of time measurement

---

## AU-9: Protection of Audit Information

**Assessment Objective:** Determine if the system protects audit information and audit logging tools from unauthorized access, modification, and deletion.

**Examine:** Audit and accountability policy; system security plan; system design documentation; system configuration settings; access control lists for audit information; audit storage configurations.

**Interview:** System administrators; organizational personnel responsible for audit data protection.

**Test:** Access controls for audit information; integrity protection mechanisms for audit records; audit logging tool protections.

**Determination Statements:**
- AU-09 — Audit information and audit logging tools are protected from unauthorized access, modification, and deletion

---

## AU-11: Audit Record Retention

**Assessment Objective:** Determine if the organization retains audit records for an organization-defined time period.

**Examine:** Audit and accountability policy; audit record retention procedures; system security plan; system configuration settings; audit record storage; records retention schedules.

**Interview:** Organizational personnel responsible for audit record retention; system administrators.

**Test:** Audit record retention mechanisms; audit record archival processes.

**Determination Statements:**
- AU-11 — Audit records are retained for an organization-defined time period to provide support for after-the-fact investigations and to meet regulatory and organizational information retention requirements

---

## AU-12: Audit Record Generation

**Assessment Objective:** Determine if the system provides audit record generation capability for the events defined in AU-2 and allows designated personnel to select events for logging.

**Examine:** Audit and accountability policy; system security plan; system design documentation; system configuration settings; auditable events list; audit records.

**Interview:** System administrators; system developers.

**Test:** Audit record generation mechanisms; audit event selection capabilities.

**Determination Statements:**
- AU-12a. — The system provides audit record generation capability for the event types the system is capable of auditing as defined in AU-2a on all system components
- AU-12b. — Designated organizational personnel are allowed to select the event types to be logged by specific components of the system
- AU-12c. — Audit records are generated for the event types defined in AU-2c that include the audit record content defined in AU-3

---

## References

- NIST SP 800-53A Rev 5: https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final
- [SP 800-53 AU Family](../800-53/au.md)
- [SP 800-171 AU Requirements](../800-171/au.md)
