# NIST SP 800-53A Rev 5 — SC: System and Communications Protection Assessment Procedures

Assessment procedures for the System and Communications Protection family evaluate whether the organization monitors and protects communications at system boundaries and implements cryptographic protection.

---

## SC-1: Policy and Procedures

**Assessment Objective:** Determine if the organization develops, documents, disseminates, reviews, and updates system and communications protection policy and procedures.

**Examine:** System and communications protection policy; system and communications protection procedures; system security plan.

**Interview:** Organizational personnel responsible for system and communications protection policy.

**Test:** Organizational processes for managing system and communications protection policy.

**Determination Statements:**
- SC-01a. — A system and communications protection policy is developed, documented, and disseminated
- SC-01b. — System and communications protection procedures are developed, documented, and disseminated
- SC-01c. — The policy and procedures are reviewed and updated at an organization-defined frequency

---

## SC-5: Denial-of-Service Protection

**Assessment Objective:** Determine if the system protects against or limits the effects of denial-of-service attacks.

**Examine:** System and communications protection policy; system security plan; system design documentation; system configuration settings; denial-of-service protection mechanisms.

**Interview:** System administrators; network engineers; information system security officers.

**Test:** Denial-of-service protection mechanisms; monitoring and detection capabilities.

**Determination Statements:**
- SC-05 — The system protects against or limits the effects of organization-defined types of denial-of-service events by employing organization-defined controls

---

## SC-7: Boundary Protection

**Assessment Objective:** Determine if the system monitors and controls communications at external and key internal boundaries.

**Examine:** System and communications protection policy; system security plan; system design documentation; boundary protection mechanisms; network diagrams; firewall rules; system configuration settings; system audit records.

**Interview:** System administrators; network engineers; information system security officers.

**Test:** Boundary protection mechanisms (firewalls, gateways, routers); DMZ architecture; network segmentation controls; deny-by-default configurations.

**Determination Statements:**
- SC-07a. — Communications at the external managed interfaces to the system and at key internal managed interfaces within the system are monitored and controlled
- SC-07b. — Subnetworks for publicly accessible system components are implemented that are physically or logically separated from internal organizational networks
- SC-07c. — The system connects to external networks or systems only through managed interfaces consisting of boundary protection devices arranged in accordance with an organizational security and privacy architecture

---

## SC-8: Transmission Confidentiality and Integrity

**Assessment Objective:** Determine if the system protects the confidentiality and/or integrity of transmitted information.

**Examine:** System and communications protection policy; system security plan; system design documentation; system configuration settings; cryptographic mechanism documentation.

**Interview:** System administrators; network engineers; information system security officers.

**Test:** Cryptographic mechanisms for transmission protection (TLS, IPsec, S/MIME); transmission protection verification.

**Determination Statements:**
- SC-08 — The confidentiality and/or integrity of organization-defined information during transmission is protected using organization-defined mechanisms

---

## SC-12: Cryptographic Key Establishment and Management

**Assessment Objective:** Determine if the organization establishes and manages cryptographic keys when cryptography is employed.

**Examine:** System and communications protection policy; cryptographic key management procedures; system security plan; key management documentation; NIST SP 800-57 compliance documentation.

**Interview:** System administrators; organizational personnel responsible for cryptographic key management.

**Test:** Cryptographic key management mechanisms; key lifecycle management processes.

**Determination Statements:**
- SC-12 — Cryptographic keys are established and managed when cryptography is employed within the system in accordance with organization-defined requirements for key generation, distribution, storage, access, and destruction

---

## SC-15: Collaborative Computing Devices and Applications

**Assessment Objective:** Determine if the system prohibits remote activation of collaborative computing devices with defined exceptions.

**Examine:** System and communications protection policy; system security plan; system design documentation; system configuration settings; collaborative computing device inventory.

**Interview:** System administrators; organizational personnel using collaborative computing devices.

**Test:** Collaborative computing device access controls; remote activation prevention mechanisms; active use indicators.

**Determination Statements:**
- SC-15a. — Remote activation of organization-defined collaborative computing devices and applications is prohibited, with organization-defined exceptions
- SC-15b. — An explicit indication of use is provided to users physically present at the devices

---

## SC-23: Session Authenticity

**Assessment Objective:** Determine if the system protects the authenticity of communications sessions.

**Examine:** System and communications protection policy; system security plan; system design documentation; system configuration settings.

**Interview:** System administrators; system developers.

**Test:** Session authenticity mechanisms; TLS configurations; session management controls.

**Determination Statements:**
- SC-23 — The authenticity of communications sessions is protected

---

## SC-28: Protection of Information at Rest

**Assessment Objective:** Determine if the system protects the confidentiality and/or integrity of information at rest.

**Examine:** System and communications protection policy; system security plan; system design documentation; encryption configurations; storage encryption documentation.

**Interview:** System administrators; information system security officers.

**Test:** Information at rest protection mechanisms; encryption verification for stored data.

**Determination Statements:**
- SC-28 — The confidentiality and/or integrity of organization-defined information at rest is protected

---

## SC-39: Process Isolation

**Assessment Objective:** Determine if the system maintains a separate execution domain for each executing system process.

**Examine:** System and communications protection policy; system security plan; system design documentation; system architecture diagrams.

**Interview:** System developers; system administrators.

**Test:** Process isolation mechanisms; execution domain separation verification.

**Determination Statements:**
- SC-39 — The system maintains a separate execution domain for each executing system process

---

## References

- NIST SP 800-53A Rev 5: https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final
- [SP 800-53 SC Family](../800-53/sc.md)
- [SP 800-171 SC Requirements](../800-171/sc.md)
