# NIST SP 800-53 Rev 5 — Maintenance (MA) Family

## MA-1: Policy and Procedures

Develop, document, and disseminate a system maintenance policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance. Review and update the policy and procedures at organization-defined frequencies.

**Key Enhancements:** None defined for MA-1.

**Related Controls:** PM-9, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## MA-2: Controlled Maintenance

Schedule, document, and review records of maintenance, repair, and replacement on system components in accordance with manufacturer or vendor specifications and/or organizational requirements. Approve and monitor all maintenance activities, whether performed on site or remotely and whether the system or component is serviced on site or removed to another location. Require that a designated official explicitly approve the removal of the system or system components from organizational facilities for off-site maintenance or repairs. Sanitize equipment to remove all information from associated media prior to removal from organizational facilities for off-site maintenance or repairs. Check all potentially impacted security controls to verify that the controls are still functioning properly following maintenance or repair actions. Include maintenance-related information in organizational maintenance records.

**Key Enhancements:**
- **MA-2(1):** Record Content — [Withdrawn: Incorporated into MA-2.]
- **MA-2(2):** Automated Maintenance Activities — Employ automated mechanisms to schedule, conduct, and document maintenance and repairs, and to produce up-to-date, accurate, and complete records of all maintenance and repair actions requested, scheduled, in process, and completed.

**Related Controls:** CM-2, CM-3, CM-4, CM-5, CM-8, MA-4, MP-6, PE-16, SI-2, SR-3, SR-4, SR-11

**Baselines:** Low, Moderate, High

---

## MA-3: Maintenance Tools

Approve, control, and monitor the use of system maintenance tools. Review previously approved system maintenance tools at an organization-defined frequency. Prevent the unauthorized removal of maintenance equipment containing organizational information by verifying no information is on the equipment, sanitizing or destroying the equipment, retaining the equipment within the facility, or obtaining an exemption from an authorized official.

**Key Enhancements:**
- **MA-3(1):** Inspect Tools — Inspect the maintenance tools carried into a facility by maintenance personnel for improper or unauthorized modifications.
- **MA-3(2):** Inspect Media — Check media containing diagnostic and test programs for malicious code before the media are used in the system.
- **MA-3(3):** Prevent Unauthorized Removal — Prevent the unauthorized removal of maintenance equipment containing organizational information by verifying that there is no organizational information contained on the equipment, sanitizing or destroying the equipment, retaining the equipment within the facility, or obtaining an exemption.
- **MA-3(4):** Restricted Tool Use — Restrict the use of maintenance tools to authorized personnel only.
- **MA-3(5):** Execution with Privilege — Monitor the use of maintenance tools that execute with increased privilege.
- **MA-3(6):** Software Updates and Patches — Inspect maintenance tools to ensure the latest software updates and patches are installed.

**Related Controls:** MA-2, PE-16

**Baselines:** Moderate, High

---

## MA-4: Nonlocal Maintenance

Approve and monitor nonlocal maintenance and diagnostic activities. Allow the use of nonlocal maintenance and diagnostic tools only as consistent with organizational policy and documented in the security plan for the system. Employ strong identification and authentication techniques in the establishment of nonlocal maintenance and diagnostic sessions. Maintain records for nonlocal maintenance and diagnostic activities. Terminate session and network connections when nonlocal maintenance is completed.

**Key Enhancements:**
- **MA-4(1):** Logging and Review — (a) Log nonlocal maintenance and diagnostic sessions, and (b) Review the audit records of the maintenance and diagnostic sessions for anomalous behavior.
- **MA-4(2):** Document Nonlocal Maintenance — [Withdrawn: Incorporated into MA-1 and MA-4.]
- **MA-4(3):** Comparable Security and Sanitization — Require that nonlocal maintenance and diagnostic services be performed from a system that implements a security capability comparable to the capability implemented on the system being serviced, or remove the component to be serviced from the system prior to nonlocal maintenance or diagnostic services; sanitize the component (with regard to organizational information) before removal from organizational facilities; and after the service is performed, inspect and sanitize the component (with regard to potentially malicious software) before reconnecting the component to the system.
- **MA-4(4):** Authentication and Separation of Maintenance Sessions — Protect nonlocal maintenance sessions by employing organization-defined authenticators that are replay resistant, and separate the maintenance session from other network sessions with the system by either physically separated communications paths or logically separated communications paths.
- **MA-4(5):** Approvals and Notifications — Require the approval of each nonlocal maintenance session by organization-defined personnel or roles, and notify organization-defined personnel or roles of the date and time of planned nonlocal maintenance.
- **MA-4(6):** Cryptographic Protection — Implement cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications.
- **MA-4(7):** Disconnect Verification — Verify session disconnect at the termination of nonlocal maintenance and diagnostic sessions.

**Related Controls:** AC-2, AC-3, AC-6, AC-17, AU-2, AU-3, IA-2, IA-4, IA-5, IA-8, MA-2, MA-5, PL-2, SC-7, SC-10

**Baselines:** Low, Moderate, High

---

## MA-5: Maintenance Personnel

Establish a process for maintenance personnel authorization and maintain a list of authorized maintenance organizations or personnel. Verify that non-escorted personnel performing maintenance on the system possess required access authorizations. Designate organizational personnel with required access authorizations and technical competence to supervise the maintenance activities of personnel who do not possess the required access authorizations.

**Key Enhancements:**
- **MA-5(1):** Individuals Without Appropriate Access — (a) Implement procedures for the use of maintenance personnel that lack appropriate security clearances or are not U.S. citizens, including requirements that maintenance personnel who do not have needed access authorizations, clearances, or formal access approvals are escorted and supervised during the performance of maintenance and diagnostic activities on the system by approved organizational personnel who are fully cleared, have appropriate access authorizations, and are technically qualified, and (b) develop and implement alternative security safeguards in the event a system component cannot be sanitized, removed, or disconnected from the system.
- **MA-5(2):** Security Clearances for Classified Systems — Verify that personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information possess security clearances and formal access approvals for at least the highest classification level and for all compartments of information on the system.
- **MA-5(3):** Citizenship Requirements for Classified Systems — Verify that personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information are U.S. citizens.
- **MA-5(4):** Foreign Nationals — Ensure that cleared foreign nationals are used to conduct maintenance and diagnostic activities on classified systems only when the systems are jointly owned and operated by the United States and foreign allied governments, or owned and operated solely by foreign allied governments, and that approvals, consents, and detailed operational conditions regarding the use of foreign nationals to conduct maintenance and diagnostic activities on classified systems are fully documented within Memoranda of Agreements.
- **MA-5(5):** Non-System Maintenance — Ensure that non-escorted personnel performing maintenance activities not directly associated with the system but in the physical proximity of the system have required access authorizations.

**Related Controls:** AC-2, AC-3, AC-5, AC-6, IA-2, IA-8, MA-4, MP-2, PE-2, PE-3, PS-7, RA-3

**Baselines:** Low, Moderate, High

---

## MA-6: Timely Maintenance

Obtain maintenance support and/or spare parts for organization-defined system components within an organization-defined time period of failure.

**Key Enhancements:**
- **MA-6(1):** Preventive Maintenance — Perform preventive maintenance on organization-defined system components at organization-defined time intervals.
- **MA-6(2):** Predictive Maintenance — Perform predictive maintenance on organization-defined system components at organization-defined time intervals.
- **MA-6(3):** Automated Support for Predictive Maintenance — Transfer predictive maintenance data to a maintenance management system using automated mechanisms.

**Related Controls:** CM-8, CP-2, CP-7, RA-7, SA-15, SI-13, SR-2, SR-3, SR-4

**Baselines:** Moderate, High

---

## MA-7: Field Maintenance

Restrict or prohibit field maintenance on organization-defined systems or system components to organization-defined trusted maintenance facilities.

**Key Enhancements:** None defined for MA-7.

**Related Controls:** MA-2, MA-4, MA-5

**Baselines:** None (not in any baseline)