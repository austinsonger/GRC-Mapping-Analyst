# NIST SP 800-53A Rev 5 — AC: Access Control Assessment Procedures

Assessment procedures for the Access Control family evaluate whether the organization has implemented effective mechanisms for managing system access, enforcing authorizations, controlling information flow, and applying the principle of least privilege.

---

## AC-1: Policy and Procedures

**Assessment Objective:** Determine if the organization develops, documents, disseminates, reviews, and updates access control policy and procedures.

**Examine:** Access control policy; access control procedures; system security plan; privacy plan; organizational policy development documentation.

**Interview:** Organizational personnel responsible for developing, implementing, and managing access control policy and procedures.

**Test:** Organizational processes for developing, documenting, reviewing, and updating access control policy and procedures.

**Determination Statements:**
- AC-01a.[01] — An access control policy is developed and documented
- AC-01a.[02] — The access control policy addresses purpose, scope, roles, responsibilities, management commitment, coordination, and compliance
- AC-01a.[03] — The access control policy is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines
- AC-01b. — The access control policy is disseminated to organization-defined personnel or roles
- AC-01c.[01] — Access control procedures to facilitate implementation of the policy are developed and documented
- AC-01c.[02] — Access control procedures are disseminated to organization-defined personnel or roles
- AC-01d.[01] — The access control policy is reviewed and updated at an organization-defined frequency and following organization-defined events
- AC-01d.[02] — The access control procedures are reviewed and updated at an organization-defined frequency and following organization-defined events

---

## AC-2: Account Management

**Assessment Objective:** Determine if the organization manages system accounts including defining account types, assigning account managers, establishing conditions for membership, and performing account lifecycle management.

**Examine:** Access control policy; account management procedures; system security plan; system design documentation; system configuration settings; system audit records; list of system account types; list of authorized system users; notifications of account management activities.

**Interview:** System administrators; account managers; organizational personnel responsible for account management; information system security officers.

**Test:** Automated mechanisms for account management; processes for creating, enabling, modifying, disabling, and removing accounts; notification mechanisms.

**Determination Statements:**
- AC-02a.[01] — Account types allowed for the system are defined
- AC-02a.[02] — Account managers are assigned for system accounts
- AC-02b. — Conditions for group and role membership are established
- AC-02c. — Authorized users, group and role membership, and access authorizations for each account are specified
- AC-02d. — A process for creating, enabling, modifying, disabling, and removing accounts is established
- AC-02e. — Approval is required for requests to create system accounts
- AC-02f. — Accounts are created, enabled, modified, disabled, and removed in accordance with organizational policy
- AC-02g. — Accounts are monitored for use
- AC-02h. — Account managers and appropriate personnel are notified when accounts are no longer required, users are terminated or transferred, and when system usage or need-to-know changes
- AC-02i. — Access is authorized for accounts based on a valid access authorization, intended system usage, and other organizational attributes
- AC-02j. — Accounts are reviewed for compliance with account management requirements at an organization-defined frequency
- AC-02k. — A process is established for changing shared or group account authenticators when members leave the group

---

## AC-3: Access Enforcement

**Assessment Objective:** Determine if the system enforces approved authorizations for logical access to information and system resources.

**Examine:** Access control policy; access control procedures; system security plan; system design documentation; system configuration settings; system audit records; access control lists; access control mechanisms.

**Interview:** System administrators; system developers; organizational personnel responsible for access control enforcement.

**Test:** Access enforcement mechanisms; automated mechanisms implementing access control policies; access control configurations.

**Determination Statements:**
- AC-03 — The system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies

---

## AC-4: Information Flow Enforcement

**Assessment Objective:** Determine if the system enforces approved authorizations for controlling the flow of information within the system and between connected systems.

**Examine:** Access control policy; information flow enforcement procedures; system security plan; system design documentation; system configuration settings; system audit records; information flow control policies.

**Interview:** System administrators; system developers; organizational personnel responsible for information flow enforcement; network engineers.

**Test:** Information flow enforcement mechanisms; automated mechanisms implementing information flow policies; boundary protection devices.

**Determination Statements:**
- AC-04 — The system enforces approved authorizations for controlling the flow of information within the system and between connected systems based on organization-defined information flow control policies

---

## AC-5: Separation of Duties

**Assessment Objective:** Determine if the organization identifies and separates duties of individuals and defines system access authorizations to support separation of duties.

**Examine:** Access control policy; separation of duties procedures; system security plan; system configuration settings; system access authorizations; list of duties requiring separation; system audit records.

**Interview:** Organizational personnel responsible for defining duties and access authorizations; system administrators.

**Test:** Access enforcement mechanisms that implement separation of duties policies.

**Determination Statements:**
- AC-05a. — Organization-defined duties of individuals requiring separation are identified and documented
- AC-05b. — System access authorizations to support separation of duties are defined

---

## AC-6: Least Privilege

**Assessment Objective:** Determine if the organization employs the principle of least privilege, allowing only authorized accesses for users and processes necessary to accomplish assigned organizational tasks.

**Examine:** Access control policy; least privilege procedures; system security plan; system design documentation; system configuration settings; system audit records; list of security functions requiring privileged access; list of authorized users of privileged accounts.

**Interview:** System administrators; organizational personnel responsible for defining least privilege requirements; system developers.

**Test:** Automated mechanisms implementing least privilege functions; privileged access controls; processes for reviewing and adjusting privileges.

**Determination Statements:**
- AC-06 — The system employs the principle of least privilege, allowing only authorized accesses for users and processes which are necessary to accomplish assigned organizational tasks

---

## AC-7: Unsuccessful Logon Attempts

**Assessment Objective:** Determine if the system enforces a limit on consecutive invalid logon attempts and takes appropriate action when limits are exceeded.

**Examine:** Access control policy; system security plan; system design documentation; system configuration settings; system audit records; account lockout settings.

**Interview:** System administrators; organizational personnel responsible for account management.

**Test:** Automated mechanisms for limiting unsuccessful logon attempts; account lockout mechanisms; logon attempt monitoring.

**Determination Statements:**
- AC-07a. — The system enforces a limit of organization-defined number of consecutive invalid logon attempts by a user during an organization-defined time period
- AC-07b. — The system automatically locks the account or node for an organization-defined time period, locks the account or node until released by an administrator, delays next logon prompt for an organization-defined delay, notifies system administrator, and/or takes other organization-defined action when the maximum number of unsuccessful attempts is exceeded

---

## AC-8: System Use Notification

**Assessment Objective:** Determine if the system displays an approved notification message before granting access.

**Examine:** Access control policy; system security plan; system use notification messages/banners; system design documentation; system configuration settings; system audit records.

**Interview:** System administrators; organizational personnel responsible for defining system use notification content.

**Test:** System use notification mechanisms; system logon processes displaying notification banners.

**Determination Statements:**
- AC-08a.[01] — The system displays an organization-defined system use notification message or banner before granting access to the system that provides privacy and security notices consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines
- AC-08a.[02] — The notification states that users are accessing a government system (or an organization system, as applicable)
- AC-08a.[03] — The notification states that system usage may be monitored, recorded, and subject to audit
- AC-08a.[04] — The notification states that unauthorized use of the system is prohibited and subject to criminal and civil penalties
- AC-08a.[05] — The notification states that use of the system indicates consent to monitoring and recording
- AC-08b. — The notification message or banner is retained on the screen until users acknowledge the notification and take explicit actions to log on to or further access the system

---

## AC-11: Device Lock

**Assessment Objective:** Determine if the system initiates a session lock after an organization-defined time period of inactivity.

**Examine:** Access control policy; system security plan; system design documentation; system configuration settings; system audit records.

**Interview:** System administrators; organizational personnel responsible for configuring session lock.

**Test:** Session lock mechanisms; session lock configuration settings; pattern-hiding display mechanisms.

**Determination Statements:**
- AC-11a. — The system prevents further access by initiating a session lock after an organization-defined time period of inactivity or upon receiving a request from a user
- AC-11b. — The system retains the session lock until the user reestablishes access using established identification and authentication procedures

---

## AC-17: Remote Access

**Assessment Objective:** Determine if the organization establishes usage restrictions and manages remote access to the system.

**Examine:** Access control policy; remote access procedures; system security plan; system configuration settings; remote access authorizations; system audit records; VPN configurations.

**Interview:** System administrators; organizational personnel responsible for remote access management; information system security officers.

**Test:** Remote access management mechanisms; remote access encryption mechanisms; remote access authentication mechanisms; managed access control points.

**Determination Statements:**
- AC-17a. — Usage restrictions, configuration/connection requirements, and implementation guidance are established and documented for each type of remote access allowed
- AC-17b. — Each type of remote access is authorized prior to establishing connections

---

## AC-18: Wireless Access

**Assessment Objective:** Determine if the organization establishes configuration and connection requirements for wireless access and authorizes wireless access before allowing connections.

**Examine:** Access control policy; wireless access procedures; system security plan; system design documentation; system configuration settings; wireless access authorizations; system audit records.

**Interview:** System administrators; organizational personnel responsible for wireless access management.

**Test:** Wireless access authentication mechanisms; wireless encryption mechanisms; wireless access configuration settings.

**Determination Statements:**
- AC-18a. — Configuration requirements, connection requirements, and implementation guidance are established for each type of wireless access
- AC-18b. — Each type of wireless access is authorized prior to allowing connections

---

## AC-19: Access Control for Mobile Devices

**Assessment Objective:** Determine if the organization establishes configuration and connection requirements for mobile devices and authorizes their connection.

**Examine:** Access control policy; mobile device policies; system security plan; system configuration settings; mobile device management configuration; authorization records.

**Interview:** System administrators; organizational personnel responsible for mobile device management.

**Test:** Mobile device management mechanisms; mobile device encryption mechanisms; mobile device access controls.

**Determination Statements:**
- AC-19a. — Configuration requirements, connection requirements, and implementation guidance are established for organization-controlled mobile devices
- AC-19b. — Connection of mobile devices to organizational systems is authorized

---

## AC-20: Use of External Systems

**Assessment Objective:** Determine if the organization establishes terms and conditions for use of external systems.

**Examine:** Access control policy; external system use procedures; system security plan; terms and conditions for external system access; list of approved external systems; system configuration settings.

**Interview:** Organizational personnel using external systems; organizational personnel responsible for defining external system use requirements.

**Test:** Mechanisms for enforcing terms and conditions of external system use; portable storage device restrictions.

**Determination Statements:**
- AC-20a. — Terms and conditions are established for authorized individuals to access the system from external systems
- AC-20b. — Terms and conditions are established for processing, storing, or transmitting organization-controlled information using external systems

---

## AC-21: Information Sharing

**Assessment Objective:** Determine if the organization facilitates information sharing by enabling authorized users to determine whether access authorizations match access restrictions.

**Examine:** Access control policy; information sharing procedures; system security plan; system design documentation; system configuration settings.

**Interview:** Organizational personnel involved in information sharing decisions.

**Test:** Information sharing mechanisms; access authorization verification mechanisms.

**Determination Statements:**
- AC-21a. — Authorized users are enabled to determine whether access authorizations assigned to a sharing partner match the information's access restrictions
- AC-21b. — Organization-defined automated mechanisms or manual processes are employed to assist users in making information sharing decisions

---

## References

- NIST SP 800-53A Rev 5: https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final
- [SP 800-53 AC Family](../800-53/ac.md)
- [SP 800-171 AC Requirements](../800-171/ac.md)
