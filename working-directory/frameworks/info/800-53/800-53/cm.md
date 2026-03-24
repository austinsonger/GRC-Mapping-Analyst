# NIST SP 800-53 Rev 5 — CM: Configuration Management

The Configuration Management family addresses policies and mechanisms for establishing and maintaining baseline configurations and inventories, managing changes to systems, and enforcing security configuration settings.

---

## CM-1: Policy and Procedures

Requires the organization to develop, document, disseminate, and periodically review and update configuration management policy and procedures addressing purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance.

**Key Enhancements:** None defined.

**Related Controls:** PM-9, PS-8, SA-8, SI-12

**Baselines:** Low, Moderate, High

---

## CM-2: Baseline Configuration

Requires the organization to develop, document, and maintain under configuration control a current baseline configuration of the system, reviewing and updating it at an organization-defined frequency, when required due to system changes, and as an integral part of system component installations and upgrades.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-2(1) | Reviews and Updates |
| CM-2(2) | Automation Support for Accuracy and Currency |
| CM-2(3) | Retention of Previous Configurations |
| CM-2(6) | Development and Test Environments |
| CM-2(7) | Configure Systems and Components for High-Risk Areas |

**Related Controls:** AC-19, AU-6, CA-9, CM-1, CM-3, CM-5, CM-6, CM-8, CM-9, CP-9, CP-10, CP-12, MA-2, PL-8, PM-5, SA-8, SA-10, SA-15, SC-18

**Baselines:** Low, Moderate, High

---

## CM-3: Configuration Change Control

Requires the organization to determine and document the types of changes to the system that are configuration-controlled, review proposed changes and approve or disapprove with explicit consideration for security and privacy impact, document configuration change decisions, implement approved changes, retain records of changes, audit and review configuration change activities, and coordinate and provide oversight for changes.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-3(1) | Automated Documentation, Notification, and Prohibition of Changes |
| CM-3(2) | Testing, Validation, and Documentation of Changes |
| CM-3(3) | Automated Change Implementation |
| CM-3(4) | Security and Privacy Representatives |
| CM-3(5) | Automated Security Response |
| CM-3(6) | Cryptography Management |
| CM-3(7) | Review System Changes |
| CM-3(8) | Prevent or Restrict Configuration Changes |

**Related Controls:** CA-7, CM-2, CM-4, CM-5, CM-6, CM-9, CM-11, IA-3, MA-2, PE-16, PT-6, RA-8, SA-8, SA-10, SC-28, SC-34, SC-37, SI-2, SI-3, SI-4, SI-7, SI-10, SR-11

**Baselines:** Moderate, High

---

## CM-4: Impact Analyses

Requires the organization to analyze changes to the system to determine potential security and privacy impacts prior to change implementation.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-4(1) | Separate Test Environments |
| CM-4(2) | Verification of Controls |

**Related Controls:** CA-7, CM-3, CM-8, CM-9, MA-2, RA-3, RA-5, RA-8, SA-5, SA-8, SA-10, SI-2

**Baselines:** Low, Moderate, High

---

## CM-5: Access Restrictions for Change

Requires the organization to define, document, approve, and enforce physical and logical access restrictions associated with changes to the system. Only qualified and authorized individuals may make changes to the system.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-5(1) | Automated Access Enforcement and Audit Records |
| CM-5(5) | Privilege Limitation for Production and Operation |
| CM-5(6) | Limit Library Privileges |

**Related Controls:** AC-3, AC-5, AC-6, CM-9, PE-3, SC-28, SC-34, SC-37, SI-2, SI-10

**Baselines:** Low, Moderate, High

---

## CM-6: Configuration Settings

Requires the organization to establish and document configuration settings for system components that reflect the most restrictive mode consistent with operational requirements, implement the settings, and identify, document, and approve any deviations from established settings.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-6(1) | Automated Management, Application, and Verification |
| CM-6(2) | Respond to Unauthorized Changes |
| CM-6(3) | Unauthorized Change Detection |
| CM-6(4) | Conformance Demonstration |

**Related Controls:** AC-3, AC-19, AU-2, AU-6, CA-9, CM-2, CM-3, CM-5, CM-7, CM-11, CP-7, CP-9, CP-10, IA-3, IA-5, PL-8, PL-9, RA-5, SA-4, SA-5, SA-8, SA-9, SC-18, SC-28, SC-43, SI-2, SI-4, SI-6

**Baselines:** Low, Moderate, High

---

## CM-7: Least Functionality

Requires the organization to configure the system to provide only mission-essential capabilities and to prohibit or restrict the use of organization-defined functions, ports, protocols, software, and/or services.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-7(1) | Periodic Review |
| CM-7(2) | Prevent Program Execution |
| CM-7(3) | Registration Compliance |
| CM-7(4) | Unauthorized Software — Deny-by-Exception |
| CM-7(5) | Authorized Software — Allow-by-Exception |
| CM-7(6) | Confined Environments with Limited Privileges |
| CM-7(7) | Code Execution in Protected Environments |
| CM-7(8) | Binary or Machine Executable Code |
| CM-7(9) | Prohibiting the Use of Unauthorized Hardware |

**Related Controls:** AC-3, AC-4, CM-2, CM-5, CM-6, CM-11, RA-5, SA-4, SA-5, SA-8, SA-9, SA-15, SC-2, SC-3, SC-7, SC-37, SI-4

**Baselines:** Low, Moderate, High

---

## CM-8: System Component Inventory

Requires the organization to develop and document an inventory of system components that accurately reflects the system, is at a level of granularity deemed necessary for tracking and reporting, and includes organization-defined information deemed necessary to achieve effective property accountability. Review and update the component inventory at an organization-defined frequency.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-8(1) | Updates During Installation and Removal |
| CM-8(2) | Automated Maintenance |
| CM-8(3) | Automated Unauthorized Component Detection |
| CM-8(4) | Accountability Information |
| CM-8(5) | No Duplicate Accounting of Components |
| CM-8(6) | Assessed Configurations and Approved Deviations |
| CM-8(7) | Centralized Repository |
| CM-8(8) | Automated Location Tracking |
| CM-8(9) | Assignment of Components to Systems |

**Related Controls:** CM-2, CM-7, CM-9, CM-10, CM-11, CM-13, CP-2, CP-9, MA-2, MA-6, PE-20, PL-9, PM-5, SA-4, SA-5, SI-2, SR-4

**Baselines:** Low, Moderate, High

---

## CM-9: Configuration Management Plan

Requires the organization to develop, document, and implement a configuration management plan that addresses roles, responsibilities, and processes and procedures; establishes a process for identifying configuration items; defines where and when configuration items are placed under configuration management; and defines the configuration items for the system.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-9(1) | Assignment of Responsibility |

**Related Controls:** CM-2, CM-3, CM-4, CM-5, CM-8, PL-2, RA-8, SA-10, SI-12

**Baselines:** Moderate, High

---

## CM-10: Software Usage Restrictions

Requires the organization to use software and associated documentation in accordance with contract agreements and copyright laws, track the use of software and documentation protected by quantity licenses, and control and document the use of peer-to-peer file sharing technology.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-10(1) | Open-Source Software |

**Related Controls:** AC-17, AU-6, CM-7, CM-8, PM-30, SC-7

**Baselines:** Low, Moderate, High

---

## CM-11: User-Installed Software

Requires the organization to establish policies governing the installation of software by users, enforce installation policies through automated or manual methods, and monitor policy compliance.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-11(1) | Alerts for Unauthorized Installations |
| CM-11(2) | Software Installation with Privileged Status |
| CM-11(3) | Automated Enforcement and Monitoring |

**Related Controls:** AC-3, AU-6, CM-2, CM-3, CM-5, CM-6, CM-7, CM-8, PL-4, SI-4, SI-7

**Baselines:** Low, Moderate, High

---

## CM-12: Information Location

Requires the organization to identify and document the location of organization-defined information and the system components on which the information is processed and stored.

**Key Enhancements:**

| # | Title |
|---|-------|
| CM-12(1) | Automated Tools to Support Information Location |

**Related Controls:** AC-2, AC-3, AC-4, AC-6, AC-23, CM-8, PM-5, RA-2, SA-4, SA-8, SA-17, SC-4, SC-16, SC-28, SI-4, SI-7

**Baselines:** Moderate, High

---

## CM-13: Data Action Mapping

Requires the organization to develop and document a map of system data actions. The map identifies the system components that process personally identifiable information (PII), the types of PII processed, and the processing purposes, supporting privacy impact assessment and data protection.

**Key Enhancements:** None defined.

**Related Controls:** AC-3, CM-4, CM-12, PM-5, PM-27, PT-2, PT-3, RA-3, RA-8

**Baselines:** None (not in any baseline)

---

## CM-14: Signed Components

Requires the organization to prevent the installation of organization-defined software and firmware components without verification that the component has been digitally signed using a certificate that is recognized and approved by the organization.

**Key Enhancements:** None defined.

**Related Controls:** CM-7, SC-12, SC-13, SI-7

**Baselines:** None (not in any baseline)