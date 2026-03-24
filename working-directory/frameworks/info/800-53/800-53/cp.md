# NIST SP 800-53 Rev 5 — CP: Contingency Planning

The Contingency Planning family establishes requirements for planning, testing, and executing response activities to maintain essential functions during and after system disruptions, and for restoring systems to normal operations.

---

## CP-1: Policy and Procedures

Requires the organization to develop, document, disseminate, and periodically review and update contingency planning policy and procedures addressing purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance.

**Key Enhancements:** None defined.

**Related Controls:** PM-9, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## CP-2: Contingency Plan

Requires the organization to develop a contingency plan that identifies essential mission and business functions, provides recovery objectives, restoration priorities, and metrics, addresses roles, responsibilities, and assigned individuals with contact information, addresses maintaining mission and business functions despite disruption, compromise, or failure, addresses full system restoration without deterioration of security safeguards, and is reviewed and approved by designated officials.

**Key Enhancements:**

| # | Title |
|---|-------|
| CP-2(1) | Coordinate with Related Plans |
| CP-2(2) | Capacity Planning |
| CP-2(3) | Resume Mission and Business Functions |
| CP-2(4) | Resume All Mission and Business Functions |
| CP-2(5) | Continue Mission and Business Functions |
| CP-2(6) | Alternate Processing and Storage Site |
| CP-2(7) | Coordinate with External Service Providers |
| CP-2(8) | Identify Critical Assets |

**Related Controls:** CP-3, CP-4, CP-6, CP-7, CP-8, CP-9, CP-10, CP-11, CP-13, IR-4, IR-6, IR-8, IR-9, MA-6, MP-2, MP-4, MP-5, PL-2, PM-8, PM-11, SA-15, SA-20, SC-7, SC-23, SI-12

**Baselines:** Low, Moderate, High

---

## CP-3: Contingency Training

Requires the organization to provide contingency training to system users consistent with assigned roles and responsibilities within an organization-defined time period of assuming a role, when required by system changes, and at an organization-defined frequency thereafter.

**Key Enhancements:**

| # | Title |
|---|-------|
| CP-3(1) | Simulated Events |
| CP-3(2) | Mechanisms Used in Training Environments |

**Related Controls:** AT-2, AT-3, AT-4, CP-2, CP-4, CP-8, IR-2, IR-4, IR-9

**Baselines:** Low, Moderate, High

---

## CP-4: Contingency Plan Testing

Requires the organization to test the contingency plan at an organization-defined frequency using organization-defined tests to determine the effectiveness of the plan and the readiness to execute the plan. Review the test results and initiate corrective actions if needed.

**Key Enhancements:**

| # | Title |
|---|-------|
| CP-4(1) | Coordinate with Related Plans |
| CP-4(2) | Alternate Processing Site |
| CP-4(3) | Automated Testing |
| CP-4(4) | Full Recovery and Reconstitution |
| CP-4(5) | Self-Challenge |

**Related Controls:** AT-3, CP-2, CP-3, CP-8, CP-9, IR-3, IR-4, PL-2, PM-14, SR-2

**Baselines:** Low, Moderate, High

---

## CP-5: Contingency Plan Update

*Withdrawn.* Incorporated into CP-2.

---

## CP-6: Alternate Storage Site

Requires the organization to establish an alternate storage site, including necessary agreements to permit the storage and retrieval of system backup information, and ensure that the alternate storage site provides equivalent security safeguards to those of the primary site.

**Key Enhancements:**

| # | Title |
|---|-------|
| CP-6(1) | Separation from Primary Site |
| CP-6(2) | Recovery Time and Recovery Point Objectives |
| CP-6(3) | Accessibility |

**Related Controls:** CP-2, CP-7, CP-8, CP-9, CP-10, MP-4, MP-5, PE-3, SC-36, SI-13

**Baselines:** Moderate, High

---

## CP-7: Alternate Processing Site

Requires the organization to establish an alternate processing site, including necessary agreements to permit the transfer and resumption of organization-defined system operations within an organization-defined time period when the primary processing capabilities are unavailable.

**Key Enhancements:**

| # | Title |
|---|-------|
| CP-7(1) | Separation from Primary Site |
| CP-7(2) | Accessibility |
| CP-7(3) | Priority of Service |
| CP-7(4) | Preparation for Use |
| CP-7(5) | Equivalent Information Security Safeguards |
| CP-7(6) | Inability to Return to Primary Site |

**Related Controls:** CP-2, CP-6, CP-8, CP-9, CP-10, MA-6, PE-3, PE-11, PE-12, PE-17, SC-36, SI-13

**Baselines:** Moderate, High

---

## CP-8: Telecommunications Services

Requires the organization to establish alternate telecommunications services, including necessary agreements to permit the resumption of system operations for essential mission and business functions within an organization-defined time period when the primary telecommunications capabilities are unavailable.

**Key Enhancements:**

| # | Title |
|---|-------|
| CP-8(1) | Priority of Service Provisions |
| CP-8(2) | Single Points of Failure |
| CP-8(3) | Separation of Primary and Alternate Providers |
| CP-8(4) | Provider Contingency Plan |
| CP-8(5) | Alternate Telecommunication Service Testing |

**Related Controls:** CP-2, CP-6, CP-7, CP-11, SC-7

**Baselines:** Moderate, High

---

## CP-9: System Backup

Requires the organization to conduct backups of user-level information, system-level information, and system documentation at an organization-defined frequency, and protect the confidentiality, integrity, and availability of backup information.

**Key Enhancements:**

| # | Title |
|---|-------|
| CP-9(1) | Testing for Reliability and Integrity |
| CP-9(2) | Test Restoration Using Sampling |
| CP-9(3) | Separate Storage for Critical Information |
| CP-9(5) | Transfer to Alternate Storage Site |
| CP-9(6) | Redundant Secondary System |
| CP-9(7) | Dual Authorization for Deletion or Destruction |
| CP-9(8) | Cryptographic Protection |

**Related Controls:** CP-2, CP-6, CP-10, MP-4, MP-5, SC-8, SC-12, SC-13, SI-4, SI-13

**Baselines:** Low, Moderate, High

---

## CP-10: System Recovery and Reconstitution

Requires the organization to provide for the recovery and reconstitution of the system to a known state within an organization-defined time period after disruption, compromise, or failure. This includes restoring the system to operational readiness, validating integrity, and activating any necessary compensating controls.

**Key Enhancements:**

| # | Title |
|---|-------|
| CP-10(2) | Transaction Recovery |
| CP-10(4) | Restore Within Time Period |

**Related Controls:** CP-2, CP-4, CP-6, CP-7, CP-9, IR-4, SA-8, SC-24, SI-13

**Baselines:** Low, Moderate, High

---

## CP-11: Alternate Communications Protocols

Requires the system to provide the capability to employ organization-defined alternative communications protocols in support of maintaining continuity of operations.

**Key Enhancements:** None defined.

**Related Controls:** CP-2, CP-8, CP-13

**Baselines:** None (not in any baseline)

---

## CP-12: Safe Mode

Requires the system to enter a safe mode of operation with organization-defined restrictions when organization-defined conditions are detected. This mode limits system functions to only those essential for continued secure operations during adverse conditions.

**Key Enhancements:** None defined.

**Related Controls:** CM-2, SA-8, SC-24, SI-13, SI-17

**Baselines:** None (not in any baseline)

---

## CP-13: Alternative Security Mechanisms

Requires the organization to employ organization-defined alternative or supplemental security mechanisms for satisfying organization-defined security functions when the primary means of implementing the security function is unavailable or compromised.

**Key Enhancements:** None defined.

**Related Controls:** CP-2, CP-11, SI-13

**Baselines:** None (not in any baseline)