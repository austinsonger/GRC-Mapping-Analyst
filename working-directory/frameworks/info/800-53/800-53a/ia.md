# NIST SP 800-53A Rev 5 — IA: Identification and Authentication Assessment Procedures

Assessment procedures for the Identification and Authentication family evaluate whether the organization uniquely identifies and authenticates users, processes, and devices before granting access to systems.

---

## IA-1: Policy and Procedures

**Assessment Objective:** Determine if the organization develops, documents, disseminates, reviews, and updates identification and authentication policy and procedures.

**Examine:** Identification and authentication policy; identification and authentication procedures; system security plan.

**Interview:** Organizational personnel responsible for identification and authentication policy.

**Test:** Organizational processes for managing identification and authentication policy.

**Determination Statements:**
- IA-01a. — An identification and authentication policy is developed, documented, and disseminated
- IA-01b. — Identification and authentication procedures are developed, documented, and disseminated
- IA-01c. — The policy and procedures are reviewed and updated at an organization-defined frequency

---

## IA-2: Identification and Authentication (Organizational Users)

**Assessment Objective:** Determine if the system uniquely identifies and authenticates organizational users and associates that unique identification with processes acting on behalf of those users.

**Examine:** Identification and authentication policy; system security plan; system design documentation; system configuration settings; system audit records; authentication mechanisms.

**Interview:** System administrators; organizational personnel responsible for user identification and authentication.

**Test:** Identification and authentication mechanisms; multifactor authentication mechanisms; replay-resistant authentication mechanisms.

**Determination Statements:**
- IA-02 — Organizational users are uniquely identified and authenticated for system access

---

## IA-3: Device Identification and Authentication

**Assessment Objective:** Determine if the system uniquely identifies and authenticates devices before establishing a connection.

**Examine:** Identification and authentication policy; system security plan; system design documentation; device identification and authentication mechanisms; system configuration settings.

**Interview:** System administrators; network engineers.

**Test:** Device identification and authentication mechanisms; 802.1X configurations; certificate-based device authentication.

**Determination Statements:**
- IA-03 — Organization-defined devices and/or types of devices are uniquely identified and authenticated before establishing a system connection

---

## IA-4: Identifier Management

**Assessment Objective:** Determine if the organization manages system identifiers by receiving authorization, selecting, assigning, preventing reuse, and disabling identifiers.

**Examine:** Identification and authentication policy; identifier management procedures; system security plan; list of system identifiers; system configuration settings.

**Interview:** Organizational personnel responsible for identifier management; system administrators.

**Test:** Identifier management mechanisms; identifier lifecycle processes.

**Determination Statements:**
- IA-04a. — Authorization is received from organization-defined personnel or roles to assign an individual, group, role, service, or device identifier
- IA-04b. — An identifier that identifies an individual, group, role, service, or device is selected
- IA-04c. — The identifier is assigned to the intended individual, group, role, service, or device
- IA-04d. — Reuse of identifiers is prevented for an organization-defined time period
- IA-04e. — The identifier is disabled after an organization-defined time period of inactivity

---

## IA-5: Authenticator Management

**Assessment Objective:** Determine if the organization manages system authenticators through initial distribution, lost/compromised procedures, and periodic changes.

**Examine:** Identification and authentication policy; authenticator management procedures; system security plan; system configuration settings; password policies; PKI documentation; token management procedures.

**Interview:** System administrators; organizational personnel responsible for authenticator management.

**Test:** Authenticator management mechanisms; password enforcement mechanisms; certificate management systems.

**Determination Statements:**
- IA-05a. — The identity of the individual, group, role, service, or device receiving the authenticator is verified as part of the initial authenticator distribution
- IA-05b. — Initial authenticator content is established for authenticators defined by the organization
- IA-05c. — Authenticators have sufficient strength of mechanism for their intended use
- IA-05d. — Administrative procedures for initial authenticator distribution, for lost/compromised/damaged authenticators, and for revoking authenticators are established and implemented
- IA-05e. — Default content of authenticators is changed prior to system installation
- IA-05f. — Authenticators are changed/refreshed at an organization-defined frequency or when organization-defined events occur
- IA-05g. — Authenticator content is protected from unauthorized disclosure and modification
- IA-05h. — Individuals take specific controls to protect authenticators

---

## IA-6: Authentication Feedback

**Assessment Objective:** Determine if the system obscures feedback of authentication information during the authentication process.

**Examine:** Identification and authentication policy; system security plan; system design documentation; system configuration settings.

**Interview:** System administrators; system developers.

**Test:** Authentication feedback mechanisms; password masking verification.

**Determination Statements:**
- IA-06 — The system obscures feedback of authentication information during the authentication process to protect the information from possible exploitation/use by unauthorized individuals

---

## IA-7: Cryptographic Module Authentication

**Assessment Objective:** Determine if the system implements mechanisms for authentication to a cryptographic module that comply with applicable requirements.

**Examine:** Identification and authentication policy; system security plan; system design documentation; cryptographic module validation certificates; FIPS 140 documentation.

**Interview:** System administrators; system developers; information system security officers.

**Test:** Cryptographic module authentication mechanisms; FIPS 140 compliance verification.

**Determination Statements:**
- IA-07 — The system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws, executive orders, directives, policies, regulations, standards, and guidelines for such authentication

---

## IA-8: Identification and Authentication (Non-Organizational Users)

**Assessment Objective:** Determine if the system uniquely identifies and authenticates non-organizational users or processes acting on behalf of non-organizational users.

**Examine:** Identification and authentication policy; system security plan; system design documentation; system configuration settings; system audit records.

**Interview:** System administrators; organizational personnel responsible for managing non-organizational user access.

**Test:** Non-organizational user identification and authentication mechanisms.

**Determination Statements:**
- IA-08 — Non-organizational users or processes acting on behalf of non-organizational users are uniquely identified and authenticated

---

## References

- NIST SP 800-53A Rev 5: https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final
- [SP 800-53 IA Family](../800-53/ia.md)
- [SP 800-171 IA Requirements](../800-171/ia.md)
