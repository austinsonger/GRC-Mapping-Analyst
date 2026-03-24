# NIST SP 800-53 Rev 5 — IA: Identification and Authentication

The Identification and Authentication family establishes requirements for uniquely identifying and authenticating users, processes, and devices before granting access to organizational systems and resources.

---

## IA-1: Policy and Procedures

Requires the organization to develop, document, disseminate, and periodically review and update identification and authentication policy and procedures addressing purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance.

**Key Enhancements:** None defined.

**Related Controls:** AC-1, PM-9, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## IA-2: Identification and Authentication (Organizational Users)

Requires the system to uniquely identify and authenticate organizational users or processes acting on behalf of organizational users.

**Key Enhancements:**

| # | Title |
|---|-------|
| IA-2(1) | Multi-Factor Authentication to Privileged Accounts |
| IA-2(2) | Multi-Factor Authentication to Non-Privileged Accounts |
| IA-2(5) | Individual Authentication with Group Authentication |
| IA-2(6) | Access to Accounts — Separate Device |
| IA-2(8) | Access to Accounts — Replay Resistant |
| IA-2(10) | Single Sign-On |
| IA-2(12) | Acceptance of PIV Credentials |
| IA-2(13) | Out-of-Band Authentication |

**Related Controls:** AC-2, AC-3, AC-4, AC-14, AC-17, AC-18, AU-1, AU-6, IA-4, IA-5, IA-8, IA-13, MA-4, MA-5, PE-2, PL-4, SA-4, SA-8

**Baselines:** Low, Moderate, High

---

## IA-3: Device Identification and Authentication

Requires the system to uniquely identify and authenticate organization-defined devices and/or types of devices before establishing a local, remote, or network connection.

**Key Enhancements:**

| # | Title |
|---|-------|
| IA-3(1) | Cryptographic Bidirectional Authentication |
| IA-3(3) | Dynamic Address Allocation |
| IA-3(4) | Device Attestation |

**Related Controls:** AC-17, AC-18, AC-19, AU-6, CA-3, CA-9, IA-4, IA-5, IA-9, IA-11, IA-13, SI-4

**Baselines:** Moderate, High

---

## IA-4: Identifier Management

Requires the organization to manage system identifiers by receiving authorization from designated personnel to assign an individual, group, role, service, or device identifier; selecting an identifier that identifies an individual, group, role, service, or device; assigning the identifier to the intended individual, group, role, service, or device; and preventing reuse of identifiers for an organization-defined time period.

**Key Enhancements:**

| # | Title |
|---|-------|
| IA-4(1) | Prohibit Account Identifiers as Public Identifiers |
| IA-4(4) | Identify User Status |
| IA-4(5) | Dynamic Management |
| IA-4(6) | Cross-Organization Management |
| IA-4(8) | Pairwise Pseudonymous Identifiers |
| IA-4(9) | Attribute Maintenance and Protection |

**Related Controls:** AC-5, IA-2, IA-3, IA-5, IA-8, IA-9, IA-12, MA-4, PE-2, PE-3, PE-4, PL-4, PM-12, PS-3, PS-4, PS-5, SC-37

**Baselines:** Low, Moderate, High

---

## IA-5: Authenticator Management

Requires the organization to manage system authenticators by verifying the identity of the individual, group, role, service, or device receiving the authenticator as part of initial distribution; establishing initial authenticator content; ensuring authenticators have sufficient strength of mechanism; establishing and implementing administrative procedures for initial authenticator distribution, lost or compromised authenticators, and revoking authenticators; changing default authenticators prior to first use; and refreshing authenticators at an organization-defined frequency.

**Key Enhancements:**

| # | Title |
|---|-------|
| IA-5(1) | Password-Based Authentication |
| IA-5(2) | Public Key-Based Authentication |
| IA-5(5) | Change Authenticators Prior to Delivery |
| IA-5(6) | Protection of Authenticators |
| IA-5(7) | No Embedded Unencrypted Static Authenticators |
| IA-5(8) | Multiple System Accounts |
| IA-5(9) | Federated Credential Management |
| IA-5(10) | Dynamic Credential Binding |
| IA-5(12) | Biometric Authentication Performance |
| IA-5(13) | Expiration of Cached Authenticators |
| IA-5(14) | Managing Content of PKI Trust Stores |
| IA-5(15) | GSA-Approved Products and Services |
| IA-5(16) | In-Person or Trusted External Party Authenticator Issuance |
| IA-5(17) | Presentation Attack Detection for Biometric Authenticators |
| IA-5(18) | Password Managers |

**Related Controls:** AC-3, AC-6, CM-6, IA-2, IA-4, IA-7, IA-8, IA-9, MA-4, PE-2, PL-4, SC-12, SC-13

**Baselines:** Low, Moderate, High

---

## IA-6: Authentication Feedback

Requires the system to obscure feedback of authentication information during the authentication process to protect the information from possible exploitation or use by unauthorized individuals (e.g., displaying asterisks instead of password characters).

**Key Enhancements:** None defined.

**Related Controls:** AC-3

**Baselines:** Low, Moderate, High

---

## IA-7: Cryptographic Module Authentication

Requires the system to implement mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws, executive orders, directives, policies, regulations, standards, and guidelines for such authentication.

**Key Enhancements:** None defined.

**Related Controls:** AC-3, IA-5, SA-4, SC-12, SC-13

**Baselines:** Low, Moderate, High

---

## IA-8: Identification and Authentication (Non-Organizational Users)

Requires the system to uniquely identify and authenticate non-organizational users or processes acting on behalf of non-organizational users.

**Key Enhancements:**

| # | Title |
|---|-------|
| IA-8(1) | Acceptance of PIV Credentials from Other Agencies |
| IA-8(2) | Acceptance of External Authenticators |
| IA-8(4) | Use of Defined Profiles |
| IA-8(5) | Acceptance of PIV-I Credentials |
| IA-8(6) | Disassociability |

**Related Controls:** AC-2, AC-6, AC-14, AC-17, AC-18, AU-6, IA-2, IA-4, IA-5, IA-10, IA-11, IA-13, MA-4, RA-3, SA-4, SC-8

**Baselines:** Low, Moderate, High

---

## IA-9: Service Identification and Authentication

Requires the organization to uniquely identify and authenticate organization-defined system services and applications using organization-defined security safeguards before establishing communications with the service or application.

**Key Enhancements:** None defined.

**Related Controls:** IA-3, IA-4, IA-5, IA-13, SC-8

**Baselines:** None (not in any baseline)

---

## IA-10: Adaptive Authentication

Requires the organization to require users to employ organization-defined supplemental authentication techniques or mechanisms when accessing the system under organization-defined circumstances or situations (e.g., accessing sensitive data, elevated risk sessions, or after-hours access).

**Key Enhancements:** None defined.

**Related Controls:** IA-2, IA-8

**Baselines:** None (not in any baseline)

---

## IA-11: Re-Authentication

Requires the system to require users to re-authenticate when organization-defined circumstances or situations require re-authentication (e.g., change in role, session timeout, or access to high-value transactions).

**Key Enhancements:** None defined.

**Related Controls:** AC-3, AC-11, IA-2, IA-3, IA-4, IA-8

**Baselines:** Low, Moderate, High

---

## IA-12: Identity Proofing

Requires the organization to identity-proof users that require accounts for logical access to systems based on appropriate identity assurance level requirements. This includes collecting and verifying identity evidence, validating and verifying the identity, and resolving identities across systems.

**Key Enhancements:**

| # | Title |
|---|-------|
| IA-12(1) | Supervisor Authorization |
| IA-12(2) | Identity Evidence |
| IA-12(3) | Identity Evidence Validation and Verification |
| IA-12(4) | In-Person Validation and Verification |
| IA-12(5) | Address Confirmation |
| IA-12(6) | Accept Externally-Proofed Identities |

**Related Controls:** AC-5, IA-1, IA-2, IA-3, IA-4, IA-5, IA-6, IA-8, IA-13

**Baselines:** Moderate, High

---

## IA-13: Identity Providers and Authorization Servers

Requires the organization to employ identity providers and authorization servers to manage user identities and access authorizations. This control supports the use of modern federated identity architectures and OAuth/OpenID Connect protocols.

**Key Enhancements:** None defined.

**Related Controls:** AC-3, IA-2, IA-3, IA-8, IA-9, IA-12

**Baselines:** None (not in any baseline)