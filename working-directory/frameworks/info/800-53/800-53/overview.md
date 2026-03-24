# NIST SP 800-53 Rev 5 — Overview

## What It Is

NIST Special Publication 800-53 Revision 5, *Security and Privacy Controls for Information Systems and Organizations*, is the authoritative catalog of security and privacy controls published by the National Institute of Standards and Technology. Released in September 2020 (updated December 2020), Rev 5 is the first revision to integrate privacy controls alongside security controls in a single unified catalog.

## Purpose

SP 800-53 provides a comprehensive set of safeguards and countermeasures for federal information systems and organizations. Its goals are to:

- Protect organizational operations, assets, individuals, other organizations, and the Nation from a diverse set of threats and risks.
- Provide a structured, flexible catalog that can be tailored to any organization regardless of size, sector, or threat profile.
- Support compliance with the Federal Information Security Modernization Act (FISMA) and other federal mandates.
- Decouple controls from specific system types, making them applicable to general-purpose systems, cyber-physical systems, IoT, and cloud environments.

## How It Is Organized

SP 800-53 Rev 5 organizes controls into **20 control families**, each identified by a two-letter code. Controls within a family are numbered sequentially (e.g., AC-1, AC-2). Each base control may have one or more **control enhancements** that extend or refine the base requirement (e.g., AC-2(1), AC-2(2)).

Each control entry includes:

- **Control Identifier** — Family code plus sequence number.
- **Control Name** — Short title.
- **Control Text** — The specific requirement.
- **Discussion** — Rationale and supplemental guidance.
- **Related Controls** — Cross-references to other controls.
- **Control Enhancements** — Optional additions that increase rigor.
- **References** — Applicable laws, directives, or standards.

## The 20 Control Families

| Code | Family Name |
|------|-------------|
| AC   | Access Control |
| AT   | Awareness and Training |
| AU   | Audit and Accountability |
| CA   | Assessment, Authorization, and Monitoring |
| CM   | Configuration Management |
| CP   | Contingency Planning |
| IA   | Identification and Authentication |
| IR   | Incident Response |
| MA   | Maintenance |
| MP   | Media Protection |
| PE   | Physical and Environmental Protection |
| PL   | Planning |
| PM   | Program Management |
| PS   | Personnel Security |
| PT   | Personally Identifiable Information Processing and Transparency |
| RA   | Risk Assessment |
| SA   | System and Services Acquisition |
| SC   | System and Communications Protection |
| SI   | System and Information Integrity |
| SR   | Supply Chain Risk Management |

> **Note:** The PT (PII Processing and Transparency) and SR (Supply Chain Risk Management) families are new in Rev 5.

## Control Baselines

SP 800-53 defines three **security control baselines** corresponding to FIPS 199 impact levels:

| Baseline | Impact Level | Description |
|----------|-------------|-------------|
| **Low** | Low | Minimum set of controls for systems where loss would have limited adverse effect. |
| **Moderate** | Moderate | Controls for systems where loss would have serious adverse effect. This is the most commonly applied baseline in federal agencies. |
| **High** | High | Most stringent set of controls, for systems where loss would have severe or catastrophic adverse effect. |

Baselines are defined in **SP 800-53B** (Control Baselines for Information Systems and Organizations). Organizations select a baseline and then **tailor** it by:

1. Identifying and designating common controls.
2. Applying scoping considerations.
3. Selecting compensating controls.
4. Assigning organization-defined parameter values.
5. Supplementing baselines with additional controls as needed.

Privacy control selection follows a separate process based on PII processing assessments rather than impact levels.

## Relationship to Other NIST Publications

| Document | Relationship |
|----------|-------------|
| **SP 800-37** (Risk Management Framework) | Defines the lifecycle process (Categorize, Select, Implement, Assess, Authorize, Monitor) in which SP 800-53 controls are selected and applied. SP 800-53 is the control catalog used in Step 2 (Select) and Step 3 (Implement). |
| **SP 800-53A** (Assessing Security and Privacy Controls) | Provides assessment procedures for each SP 800-53 control. Used in Step 4 (Assess) of the RMF. Defines assessment methods (examine, interview, test) and assessment objects. |
| **SP 800-53B** (Control Baselines) | Companion document that specifies which controls are included in Low, Moderate, and High baselines, as well as privacy control baselines. |
| **SP 800-171** (Protecting CUI in Nonfederal Systems) | Derives its security requirements from SP 800-53 Moderate baseline, tailored for nonfederal systems that process, store, or transmit Controlled Unclassified Information (CUI). |
| **SP 800-171A** | Assessment procedures for SP 800-171, analogous to SP 800-53A. |
| **FedRAMP** (Federal Risk and Authorization Management Program) | Uses SP 800-53 controls as the basis for cloud service provider authorization. FedRAMP baselines (Low, Moderate, High) are derived from SP 800-53B baselines with additional FedRAMP-specific parameters and requirements. |
| **FIPS 199** | Defines the security categorization (Low, Moderate, High) that determines which SP 800-53 baseline to apply. |
| **FIPS 200** | Specifies minimum security requirements for federal systems by family, satisfied by implementing SP 800-53 controls at the appropriate baseline. |

## Key Changes in Revision 5

- **Unified catalog**: Security and privacy controls integrated into a single publication.
- **Outcome-based language**: Controls are stated as outcomes rather than being directed at specific entities, making them applicable to any organization.
- **New families**: PT (PII Processing and Transparency) and SR (Supply Chain Risk Management) added.
- **Baselines separated**: Control baselines moved to the companion document SP 800-53B.
- **Control parameters**: Increased use of organization-defined parameters (ODPs) to support tailoring.
- **State-of-practice controls**: New controls added for areas such as supply chain risk, privacy, and advanced persistent threats.
