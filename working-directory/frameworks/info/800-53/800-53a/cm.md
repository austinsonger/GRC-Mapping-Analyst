# NIST SP 800-53A Rev 5 — CM: Configuration Management Assessment Procedures

Assessment procedures for the Configuration Management family evaluate whether the organization establishes and maintains baseline configurations, manages changes to systems, and enforces security configuration settings.

---

## CM-1: Policy and Procedures

**Assessment Objective:** Determine if the organization develops, documents, disseminates, reviews, and updates configuration management policy and procedures.

**Examine:** Configuration management policy; configuration management procedures; system security plan.

**Interview:** Organizational personnel responsible for configuration management policy.

**Test:** Organizational processes for managing configuration management policy.

**Determination Statements:**
- CM-01a. — A configuration management policy is developed, documented, and disseminated
- CM-01b. — Configuration management procedures are developed, documented, and disseminated
- CM-01c. — The policy and procedures are reviewed and updated at an organization-defined frequency

---

## CM-2: Baseline Configuration

**Assessment Objective:** Determine if the organization develops, documents, and maintains a current baseline configuration of the system.

**Examine:** Configuration management policy; baseline configuration documentation; system security plan; system design documentation; system configuration settings; configuration management records.

**Interview:** System administrators; organizational personnel responsible for configuration management.

**Test:** Automated mechanisms supporting baseline configuration management; configuration comparison tools.

**Determination Statements:**
- CM-02a. — A current baseline configuration of the system is developed, documented, and maintained under configuration control
- CM-02b. — The baseline configuration is reviewed and updated at an organization-defined frequency, when required due to organization-defined circumstances, and as part of system installations and upgrades

---

## CM-3: Configuration Change Control

**Assessment Objective:** Determine if the organization controls changes to the system using configuration change control.

**Examine:** Configuration management policy; configuration change control procedures; change requests; change control records; system security plan; system audit records.

**Interview:** System administrators; configuration change control board members; organizational personnel responsible for configuration change control.

**Test:** Configuration change control mechanisms; change control verification processes.

**Determination Statements:**
- CM-03a. — The types of changes to the system that are configuration-controlled are determined and documented
- CM-03b. — Changes to the system are reviewed and approved or disapproved with explicit consideration for security and privacy impact
- CM-03c. — Configuration change decisions are documented with the associated implementation rationale
- CM-03d. — Approved configuration-controlled changes to the system are implemented
- CM-03e. — Records of configuration-controlled changes to the system are retained for an organization-defined time period
- CM-03f. — Configuration change control activities are monitored and reviewed

---

## CM-4: Impact Analyses

**Assessment Objective:** Determine if the organization analyzes changes to the system to determine potential security and privacy impacts.

**Examine:** Configuration management policy; security and privacy impact analysis documentation; change control records; system security plan; system audit records.

**Interview:** Organizational personnel responsible for conducting security impact analysis; system administrators; system developers.

**Test:** Processes for conducting security impact analyses of proposed changes.

**Determination Statements:**
- CM-04 — Changes to the system are analyzed to determine potential security and privacy impacts prior to change implementation

---

## CM-5: Access Restrictions for Change

**Assessment Objective:** Determine if the organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the system.

**Examine:** Configuration management policy; system security plan; system design documentation; system configuration settings; access control lists; change control records; system audit records.

**Interview:** System administrators; organizational personnel responsible for access restrictions related to system changes.

**Test:** Access restriction mechanisms for change; configuration change control enforcement mechanisms.

**Determination Statements:**
- CM-05 — Physical and logical access restrictions associated with changes to the system are defined, documented, approved, and enforced

---

## CM-6: Configuration Settings

**Assessment Objective:** Determine if the organization establishes and enforces security and privacy configuration settings.

**Examine:** Configuration management policy; system security plan; security configuration checklists; system configuration settings; configuration management records; system audit records; STIG/CIS benchmark compliance reports.

**Interview:** System administrators; organizational personnel responsible for configuration management.

**Test:** Configuration setting enforcement mechanisms; automated configuration monitoring tools.

**Determination Statements:**
- CM-06a. — Mandatory configuration settings for IT products employed within the system are established and documented using organization-defined security configuration checklists
- CM-06b. — The configuration settings are implemented
- CM-06c. — Deviations from established configuration settings are identified, documented, and approved
- CM-06d. — Changes to the configuration settings are monitored and controlled in accordance with organizational policies and procedures

---

## CM-7: Least Functionality

**Assessment Objective:** Determine if the organization configures the system to provide only essential capabilities and restricts non-essential capabilities.

**Examine:** Configuration management policy; system security plan; system design documentation; system configuration settings; list of essential capabilities; list of prohibited or restricted functions/ports/protocols/services; system audit records.

**Interview:** System administrators; organizational personnel responsible for system hardening.

**Test:** System configuration verification; port and service scanning; function restriction mechanisms.

**Determination Statements:**
- CM-07a. — The system is configured to provide only organization-defined essential capabilities
- CM-07b. — The use of organization-defined prohibited or restricted functions, ports, protocols, connections, and services is restricted and/or disabled

---

## CM-8: System Component Inventory

**Assessment Objective:** Determine if the organization develops, documents, and maintains an inventory of system components.

**Examine:** Configuration management policy; system component inventory; system security plan; system design documentation; system configuration settings.

**Interview:** System administrators; organizational personnel responsible for component inventory management.

**Test:** Automated mechanisms for maintaining component inventory; inventory accuracy verification.

**Determination Statements:**
- CM-08a. — An inventory of system components is developed and documented that accurately reflects the system, includes all components within the system boundary, and is at the level of granularity deemed necessary for tracking and reporting
- CM-08b. — The system component inventory is reviewed and updated at an organization-defined frequency

---

## CM-11: User-Installed Software

**Assessment Objective:** Determine if the organization establishes and enforces policies governing the installation of software by users.

**Examine:** Configuration management policy; software installation policies; system configuration settings; system audit records; list of approved software.

**Interview:** System administrators; organizational personnel responsible for software installation management.

**Test:** Software installation restriction mechanisms; application whitelisting controls.

**Determination Statements:**
- CM-11a. — A policy governing the installation of software by users is established
- CM-11b. — User software installation is enforced through organization-defined methods
- CM-11c. — User-installed software is monitored for compliance with established policies

---

## References

- NIST SP 800-53A Rev 5: https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final
- [SP 800-53 CM Family](../800-53/cm.md)
- [SP 800-171 CM Requirements](../800-171/cm.md)
