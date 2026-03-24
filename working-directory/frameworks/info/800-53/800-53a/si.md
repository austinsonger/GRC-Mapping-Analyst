# NIST SP 800-53A Rev 5 — SI: System and Information Integrity Assessment Procedures

Assessment procedures for the System and Information Integrity family evaluate whether the organization identifies and corrects system flaws, protects against malicious code, monitors systems, and validates information inputs.

---

## SI-1: Policy and Procedures

**Assessment Objective:** Determine if the organization develops, documents, disseminates, reviews, and updates system and information integrity policy and procedures.

**Examine:** System and information integrity policy; system and information integrity procedures; system security plan.

**Interview:** Organizational personnel responsible for system and information integrity policy.

**Test:** Organizational processes for managing system and information integrity policy.

**Determination Statements:**
- SI-01a. — A system and information integrity policy is developed, documented, and disseminated
- SI-01b. — System and information integrity procedures are developed, documented, and disseminated
- SI-01c. — The policy and procedures are reviewed and updated at an organization-defined frequency

---

## SI-2: Flaw Remediation

**Assessment Objective:** Determine if the organization identifies, reports, and corrects system flaws.

**Examine:** System and information integrity policy; flaw remediation procedures; patch management records; system security plan; system configuration settings; vulnerability scan reports.

**Interview:** System administrators; organizational personnel responsible for flaw remediation.

**Test:** Flaw remediation processes; patch management tools; automated update mechanisms.

**Determination Statements:**
- SI-02a. — System flaws are identified, reported, and corrected
- SI-02b. — Software and firmware updates related to flaw remediation are tested for effectiveness and potential side effects before installation
- SI-02c. — Security-relevant software and firmware updates are installed within an organization-defined time period of the release of the updates
- SI-02d. — Flaw remediation is incorporated into the organizational configuration management process

---

## SI-3: Malicious Code Protection

**Assessment Objective:** Determine if the organization implements malicious code protection at system entry and exit points.

**Examine:** System and information integrity policy; malicious code protection procedures; system security plan; system configuration settings; malicious code protection tool configurations; scan logs; update logs.

**Interview:** System administrators; organizational personnel responsible for malicious code protection.

**Test:** Malicious code protection mechanisms; real-time scanning capabilities; signature update mechanisms; periodic scanning processes.

**Determination Statements:**
- SI-03a. — Malicious code protection mechanisms are implemented at system entry and exit points to detect and eradicate malicious code
- SI-03b. — Malicious code protection mechanisms are updated as new releases are available in accordance with organizational configuration management policy and procedures
- SI-03c. — The system is periodically scanned and real-time scans of files from external sources as files are downloaded, opened, or executed are performed
- SI-03d. — Malicious code detection results trigger organization-defined actions in response to malicious code detection

---

## SI-4: System Monitoring

**Assessment Objective:** Determine if the organization monitors the system to detect attacks, indicators of potential attacks, and unauthorized connections.

**Examine:** System and information integrity policy; system monitoring procedures; system security plan; system design documentation; system configuration settings; system monitoring tool configurations; intrusion detection/prevention system records; system audit records.

**Interview:** System administrators; organizational personnel responsible for system monitoring; information system security officers.

**Test:** System monitoring tools and mechanisms; intrusion detection/prevention systems; network monitoring tools; alert and notification mechanisms.

**Determination Statements:**
- SI-04a. — The system is monitored to detect attacks and indicators of potential attacks in accordance with organization-defined monitoring objectives, and unauthorized local, network, and remote connections
- SI-04b. — The system is monitored to identify unauthorized use
- SI-04c. — System monitoring information is provided to organization-defined personnel or roles as needed
- SI-04d. — The monitoring devices are deployed strategically within the system to collect organization-determined essential information
- SI-04e. — Monitoring of the system is heightened whenever there is an indication of increased risk to organizational operations and assets based on law enforcement information, intelligence information, or other credible sources

---

## SI-5: Security Alerts, Advisories, and Directives

**Assessment Objective:** Determine if the organization receives and responds to security alerts, advisories, and directives from external organizations.

**Examine:** System and information integrity policy; security alert procedures; security alerts and advisories; system security plan; system configuration settings.

**Interview:** Organizational personnel responsible for receiving and responding to security alerts; system administrators.

**Test:** Security alert processing and dissemination mechanisms; directive implementation processes.

**Determination Statements:**
- SI-05a. — Security alerts, advisories, and directives are received from organization-defined external organizations on an ongoing basis
- SI-05b. — Organization-defined security alerts, advisories, and directives are generated and disseminated internally as deemed necessary
- SI-05c. — Security directives are implemented in accordance with established time frames or the issuing organization is notified of the degree of noncompliance

---

## SI-10: Information Input Validation

**Assessment Objective:** Determine if the system checks the validity of information inputs.

**Examine:** System and information integrity policy; system security plan; system design documentation; system configuration settings; list of information inputs subject to validation.

**Interview:** System developers; system administrators.

**Test:** Input validation mechanisms; input checking processes.

**Determination Statements:**
- SI-10 — The validity of organization-defined information inputs to the system is checked

---

## SI-11: Error Handling

**Assessment Objective:** Determine if the system generates error messages that provide information necessary for corrective actions without revealing sensitive information.

**Examine:** System and information integrity policy; system security plan; system design documentation; system configuration settings; error message content.

**Interview:** System developers; system administrators.

**Test:** Error handling mechanisms; error message content verification.

**Determination Statements:**
- SI-11a. — Error messages that provide information necessary for corrective actions are generated without revealing information that could be exploited
- SI-11b. — Error messages are revealed only to organization-defined personnel or roles

---

## SI-12: Information Management and Retention

**Assessment Objective:** Determine if the organization manages and retains information within the system in accordance with applicable requirements.

**Examine:** System and information integrity policy; information retention procedures; records retention schedules; system security plan; system configuration settings.

**Interview:** Organizational personnel responsible for information management and retention; records management personnel.

**Test:** Information management and retention processes; data lifecycle management mechanisms.

**Determination Statements:**
- SI-12 — Information within the system and information output from the system is managed and retained in accordance with applicable laws, executive orders, directives, regulations, policies, standards, guidelines, and operational requirements

---

## References

- NIST SP 800-53A Rev 5: https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final
- [SP 800-53 SI Family](../800-53/si.md)
- [SP 800-171 SI Requirements](../800-171/si.md)
