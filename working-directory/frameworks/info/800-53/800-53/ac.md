# NIST SP 800-53 Rev 5 — AC: Access Control

The Access Control family addresses policies and mechanisms for managing who and what can access information systems and resources, under what conditions, and to what extent.

---

## AC-1: Policy and Procedures

Requires the organization to develop, document, disseminate, and periodically review and update access control policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination, and compliance.

**Key Enhancements:** None defined.

**Related Controls:** IA-1, PM-9, PM-24, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## AC-2: Account Management

Requires the organization to define and manage information system accounts, including identifying account types (individual, shared, group, system, guest, temporary, emergency), establishing conditions for group and role membership, assigning account managers, authorizing access, and establishing, activating, modifying, reviewing, disabling, and removing accounts.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-2(1) | Automated System Account Management |
| AC-2(2) | Automated Temporary and Emergency Account Management |
| AC-2(3) | Disable Accounts |
| AC-2(4) | Automated Audit Actions |
| AC-2(5) | Inactivity Logout |
| AC-2(6) | Dynamic Privilege Management |
| AC-2(7) | Privileged User Accounts |
| AC-2(8) | Dynamic Account Management |
| AC-2(9) | Restrictions on Use of Shared and Group Accounts |
| AC-2(11) | Usage Conditions |
| AC-2(12) | Account Monitoring for Atypical Usage |
| AC-2(13) | Disable Accounts for High-Risk Individuals |

**Related Controls:** AC-3, AC-5, AC-6, AC-17, AC-18, AC-20, AC-24, AU-2, AU-12, CM-5, IA-2, IA-4, IA-5, IA-8, MA-3, MA-5, PE-2, PL-4, PS-2, PS-4, PS-5, PS-7, PT-2, PT-3, SC-7, SC-12, SC-13, SC-37

**Baselines:** Low, Moderate, High

---

## AC-3: Access Enforcement

Requires the system to enforce approved authorizations for logical access to information and system resources in accordance with applicable access control policies.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-3(2) | Dual Authorization |
| AC-3(3) | Mandatory Access Control |
| AC-3(4) | Discretionary Access Control |
| AC-3(5) | Security-Relevant Information |
| AC-3(7) | Role-Based Access Control |
| AC-3(8) | Revocation of Access Authorizations |
| AC-3(9) | Controlled Release |
| AC-3(10) | Audited Override of Access Control Mechanisms |
| AC-3(11) | Restrict Access to Specific Information Types |
| AC-3(12) | Assert and Enforce Application Access |
| AC-3(13) | Attribute-Based Access Control |
| AC-3(14) | Individual Access |
| AC-3(15) | Discretionary and Mandatory Access Control |

**Related Controls:** AC-2, AC-4, AC-5, AC-6, AC-16, AC-17, AC-18, AC-19, AC-20, AC-21, AC-22, AC-24, AC-25, AT-2, AT-3, AU-9, CA-9, CM-5, CM-11, IA-2, IA-5, IA-6, IA-7, IA-11, IA-13, MA-3, MA-4, MA-5, MP-4, PM-2, PS-3, PT-2, PT-3, SA-17, SC-2, SC-3, SC-4, SC-12, SC-13, SC-28, SC-31, SC-34, SI-4, SI-8

**Baselines:** Low, Moderate, High

---

## AC-4: Information Flow Enforcement

Requires the system to enforce approved authorizations for controlling the flow of information within the system and between connected systems based on information flow control policies.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-4(1) | Object Security and Privacy Attributes |
| AC-4(2) | Processing Domains |
| AC-4(3) | Dynamic Information Flow Control |
| AC-4(4) | Flow Control of Encrypted Information |
| AC-4(5) | Embedded Data Types |
| AC-4(6) | Metadata |
| AC-4(7) | One-Way Flow Mechanisms |
| AC-4(8) | Security and Privacy Policy Filters |
| AC-4(9) | Human Reviews |
| AC-4(10) | Enable and Disable Security or Privacy Policy Filters |
| AC-4(11) | Configuration of Security or Privacy Policy Filters |
| AC-4(12) | Data Type Identifiers |
| AC-4(13) | Decomposition into Policy-Relevant Subcomponents |
| AC-4(14) | Security or Privacy Policy Filter Constraints |
| AC-4(15) | Detection of Unsanctioned Information |
| AC-4(17) | Domain Authentication |
| AC-4(19) | Validation of Metadata |
| AC-4(20) | Approved Solutions |
| AC-4(21) | Physical or Logical Separation of Information Flows |
| AC-4(22) | Access Only |
| AC-4(23) | Modify Non-Releasable Information |
| AC-4(24) | Internal Normalized Format |
| AC-4(25) | Data Sanitization |
| AC-4(26) | Audit Filtering Actions |
| AC-4(27) | Redundant/Independent Filtering Mechanisms |
| AC-4(28) | Linear Filter Pipelines |
| AC-4(29) | Filter Orchestration Engines |
| AC-4(30) | Filter Mechanisms Using Multiple Processes |
| AC-4(31) | Failed Content Transfer Prevention |
| AC-4(32) | Process Requirements for Information Transfer |

**Related Controls:** AC-3, AC-6, AC-16, AC-17, AC-19, AC-21, AU-10, CA-3, CA-9, CM-7, PL-9, PM-24, SA-17, SC-4, SC-7, SC-16, SC-31

**Baselines:** Moderate, High

---

## AC-5: Separation of Duties

Requires the organization to identify and separate duties of individuals to prevent potential for abuse of authorized privileges. Define system access authorizations to support separation of duties.

**Key Enhancements:** None defined.

**Related Controls:** AC-2, AC-3, AC-6, AU-9, CM-5, CM-11, CP-9, IA-2, IA-4, IA-5, IA-12, MA-3, MA-5, PS-2, SA-8, SA-17

**Baselines:** Moderate, High

---

## AC-6: Least Privilege

Requires the organization to employ the principle of least privilege, allowing only authorized access for users and processes that is necessary to accomplish assigned organizational tasks.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-6(1) | Authorize Access to Security Functions |
| AC-6(2) | Non-Privileged Access for Nonsecurity Functions |
| AC-6(3) | Network Access to Privileged Commands |
| AC-6(4) | Separate Processing Domains |
| AC-6(5) | Privileged Accounts |
| AC-6(6) | Privileged Access by Non-Organizational Users |
| AC-6(7) | Review of User Privileges |
| AC-6(8) | Privilege Levels for Code Execution |
| AC-6(9) | Log Use of Privileged Functions |
| AC-6(10) | Prohibit Non-Privileged Users from Executing Privileged Functions |

**Related Controls:** AC-2, AC-3, AC-5, AC-16, CM-5, CM-11, PL-2, PM-12, SA-8, SA-15, SA-17, SC-38

**Baselines:** Moderate, High

---

## AC-7: Unsuccessful Logon Attempts

Requires the system to enforce a limit on the number of consecutive invalid logon attempts by a user within a defined time period and automatically lock the account or delay the next logon prompt when the maximum number is exceeded.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-7(1) | Automatic Account Lock |
| AC-7(2) | Purge or Wipe Mobile Device |
| AC-7(3) | Biometric Attempt Limiting |
| AC-7(4) | Use of Alternate Authentication Factor |

**Related Controls:** AC-2, AC-9, AU-2, AU-6, IA-5

**Baselines:** Low, Moderate, High

---

## AC-8: System Use Notification

Requires the system to display an approved system use notification message or banner before granting access, informing users of applicable monitoring, recording, and auditing conditions, and of unauthorized use consequences.

**Key Enhancements:** None defined.

**Related Controls:** AC-14, PL-4, SI-4

**Baselines:** Low, Moderate, High

---

## AC-9: Previous Logon Notification

Requires the system to notify the user upon successful logon of the date and time of the last logon, and the number of unsuccessful logon attempts since the last successful logon.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-9(1) | Unsuccessful Logons |
| AC-9(2) | Successful and Unsuccessful Logons |
| AC-9(3) | Notification of Account Changes |
| AC-9(4) | Additional Logon Information |

**Related Controls:** AC-7, PL-4

**Baselines:** None (not in any baseline)

---

## AC-10: Concurrent Session Control

Requires the system to limit the number of concurrent sessions for each system account to an organization-defined number.

**Key Enhancements:** None defined.

**Related Controls:** SC-23

**Baselines:** High

---

## AC-11: Device Lock

Requires the system to prevent further access by initiating a device lock after an organization-defined time period of inactivity, and retain the lock until the user reestablishes access using established identification and authentication procedures.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-11(1) | Pattern-Hiding Displays |

**Related Controls:** AC-2, AC-7, IA-11, PL-4

**Baselines:** Moderate, High

---

## AC-12: Session Termination

Requires the system to automatically terminate a user session after organization-defined conditions or trigger events.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-12(1) | User-Initiated Logouts |

**Related Controls:** MA-4, SC-10, SC-23

**Baselines:** Moderate, High

---

## AC-13: Supervision and Review — Access Control

*Withdrawn.* Incorporated into AC-2 and AU-6.

---

## AC-14: Permitted Actions Without Identification or Authentication

Requires the organization to identify specific user actions that can be performed on the system without identification or authentication, and document and justify those actions.

**Key Enhancements:** None defined.

**Related Controls:** AC-8, IA-2, PL-2

**Baselines:** Low, Moderate, High

---

## AC-15: Automated Marking

*Withdrawn.* Incorporated into MP-3.

---

## AC-16: Security and Privacy Attributes

Requires the system to provide the means to associate organization-defined security and privacy attributes with information in storage, in process, and in transmission. Supports attribute-based access control mechanisms.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-16(1) | Dynamic Attribute Association |
| AC-16(2) | Attribute Value Changes by Authorized Individuals |
| AC-16(3) | Maintenance of Attribute Associations by System |
| AC-16(4) | Association of Attributes by Authorized Individuals |
| AC-16(5) | Attribute Displays on Objects to Be Output |
| AC-16(6) | Maintenance of Attribute Association |
| AC-16(7) | Consistent Attribute Interpretation |
| AC-16(8) | Association Techniques and Technologies |
| AC-16(9) | Attribute Reassignment — Regrading Mechanisms |
| AC-16(10) | Attribute Configuration by Authorized Individuals |

**Related Controls:** AC-3, AC-4, AC-6, AC-21, AC-25, AU-2, AU-10, MP-3, PE-22, PT-2, PT-3, PT-4, SC-11, SC-16, SI-12, SI-18

**Baselines:** None (not in any baseline)

---

## AC-17: Remote Access

Requires the organization to establish and document usage restrictions, configuration and connection requirements, and implementation guidance for each type of remote access allowed. Authorize each type of remote access prior to allowing such connections.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-17(1) | Monitoring and Control |
| AC-17(2) | Protection of Confidentiality and Integrity Using Encryption |
| AC-17(3) | Managed Access Control Points |
| AC-17(4) | Privileged Commands and Access |
| AC-17(6) | Protection of Mechanism Information |
| AC-17(9) | Disconnect or Disable Access |
| AC-17(10) | Authenticate Remote Commands |

**Related Controls:** AC-2, AC-3, AC-4, AC-18, AC-19, AC-20, CA-3, CM-10, IA-2, IA-3, IA-8, MA-4, PE-17, PL-2, PL-4, SC-10, SC-12, SC-13, SI-4

**Baselines:** Low, Moderate, High

---

## AC-18: Wireless Access

Requires the organization to establish configuration requirements, connection requirements, and implementation guidance for each type of wireless access. Authorize wireless access prior to allowing such connections.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-18(1) | Authentication and Encryption |
| AC-18(3) | Disable Wireless Networking |
| AC-18(4) | Restrict Configurations by Users |
| AC-18(5) | Antennas and Transmission Power Levels |

**Related Controls:** AC-2, AC-3, AC-17, AC-19, CA-9, CM-7, IA-2, IA-3, IA-8, PL-4, SC-40, SC-43, SI-4

**Baselines:** Low, Moderate, High

---

## AC-19: Access Control for Mobile Devices

Requires the organization to establish configuration requirements, connection requirements, and implementation guidance for organization-controlled mobile devices, and authorize the connection of mobile devices to organizational systems.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-19(1) | Use of Writable and Portable Storage Devices |
| AC-19(2) | Use of Personally Owned Portable Storage Devices |
| AC-19(4) | Restrictions for Classified Information |
| AC-19(5) | Full Device or Container-Based Encryption |

**Related Controls:** AC-3, AC-4, AC-7, AC-11, AC-17, AC-18, AC-20, CA-9, CM-2, CM-6, IA-2, IA-3, MP-2, MP-4, MP-5, MP-7, PL-4, SC-7, SC-34, SC-43, SI-3, SI-4

**Baselines:** Low, Moderate, High

---

## AC-20: Use of External Systems

Requires the organization to establish terms and conditions for authorized individuals to access the system from external systems, and establish terms and conditions for processing, storing, or transmitting organization-controlled information using external systems.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-20(1) | Limits on Authorized Use |
| AC-20(2) | Portable Storage Devices — Restricted Use |
| AC-20(3) | Non-Organizationally Owned Systems — Restricted Use |
| AC-20(4) | Network Accessible Storage Devices — Prohibited Use |
| AC-20(5) | Portable Storage Devices — Prohibited Use |

**Related Controls:** AC-2, AC-3, AC-17, AC-19, CA-3, PL-2, PL-4, SA-9, SC-7

**Baselines:** Low, Moderate, High

---

## AC-21: Information Sharing

Requires the organization to facilitate information sharing by enabling authorized users to determine whether access authorizations assigned to a sharing partner match the access restrictions on the information, and employ automated mechanisms or manual processes to assist users in making sharing decisions.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-21(1) | Automated Decision Support |
| AC-21(2) | Information Search and Retrieval |

**Related Controls:** AC-3, AC-4, AC-16, PT-2, PT-7, RA-3, SC-15

**Baselines:** Moderate, High

---

## AC-22: Publicly Accessible Content

Requires the organization to designate individuals authorized to make information publicly accessible, review publicly accessible content for nonpublic information and remove it if found, and review content on the publicly accessible system periodically.

**Key Enhancements:** None defined.

**Related Controls:** AC-3, AT-2, AT-3, AU-13

**Baselines:** Low, Moderate, High

---

## AC-23: Data Mining Protection

Requires the organization to employ data mining prevention and detection techniques for organization-defined data storage objects to detect and protect against unauthorized data mining.

**Key Enhancements:** None defined.

**Related Controls:** PM-12, PT-2

**Baselines:** None (not in any baseline)

---

## AC-24: Access Control Decisions

Requires the system to establish procedures to ensure that access control decisions are applied to each access request prior to access enforcement.

**Key Enhancements:**

| # | Title |
|---|-------|
| AC-24(1) | Transmit Access Authorization Information |
| AC-24(2) | No User or Process Identity |

**Related Controls:** AC-2, AC-3

**Baselines:** None (not in any baseline)

---

## AC-25: Reference Monitor

Requires the system to implement a reference monitor for access control that is tamperproof, always invoked, and small enough to be subject to analysis and testing, the completeness of which can be assured.

**Key Enhancements:** None defined.

**Related Controls:** AC-3, AC-16, SA-8, SA-17, SC-3, SC-11, SC-39, SI-13

**Baselines:** None (not in any baseline)