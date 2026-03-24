# NIST SP 800-53 Rev 5 — System and Services Acquisition (SA) Family

## SA-1: Policy and Procedures

Develop, document, and disseminate a system and services acquisition policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance. Review and update the policy and procedures at organization-defined frequencies.

**Key Enhancements:** None defined for SA-1.

**Related Controls:** PM-9, PS-8, SA-8, SI-12

**Baselines:** Low, Moderate, High

---

## SA-2: Allocation of Resources

Determine the high-level information security and privacy requirements for the system or system service in mission and business process planning. Determine, document, and allocate the resources required to protect the system or system service as part of the organizational capital planning and investment control process. Establish a discrete line item for information security and privacy in organizational programming and budgeting documentation.

**Key Enhancements:** None defined for SA-2.

**Related Controls:** PL-7, PM-3, PM-11, SA-9, SR-3, SR-5

**Baselines:** Low, Moderate, High

---

## SA-3: System Development Life Cycle

Acquire, develop, and manage the system using an organization-defined system development life cycle that incorporates information security and privacy considerations. Define and document information security and privacy roles and responsibilities throughout the system development life cycle. Identify individuals having information security and privacy roles and responsibilities. Integrate the organizational information security and privacy risk management process into system development life cycle activities.

**Key Enhancements:**
- **SA-3(1):** Manage Preproduction Environment — Protect the preproduction environment commensurate with risk throughout the system development life cycle for the system, system component, or system service.
- **SA-3(2):** Use of Live or Operational Data — Protect the preproduction environment by not using live data or operational data in testing, training, and research.
- **SA-3(3):** Technology Refresh — Plan for and implement a technology refresh schedule for the system throughout the system development life cycle.

**Related Controls:** AT-3, PL-8, PM-7, SA-4, SA-5, SA-8, SA-11, SA-15, SA-17, SA-22, SR-3, SR-4, SR-5, SR-9

**Baselines:** Low, Moderate, High

---

## SA-4: Acquisition Process

Include the following requirements, descriptions, and criteria, explicitly or by reference, using organization-defined acquisition documents for the system, system component, or system service: security and privacy functional requirements; strength of mechanism requirements; security and privacy assurance requirements; controls needed to satisfy the security and privacy requirements; security and privacy documentation requirements; requirements for protecting security and privacy documentation; description of the system development environment and environment in which the system is intended to operate; and allocation of responsibility or identification of parties responsible for information security, privacy, and supply chain risk management.

**Key Enhancements:**
- **SA-4(1):** Functional Properties of Controls — Require the developer of the system, system component, or system service to provide a description of the functional properties of the controls to be employed.
- **SA-4(2):** Design and Implementation Information for Controls — Require the developer of the system, system component, or system service to provide design and implementation information for the controls that includes security-relevant external system interfaces, high-level design, low-level design, source code or hardware schematics, and organization-defined design and implementation information at an organization-defined level of detail.
- **SA-4(3):** Development Methods, Techniques, and Practices — Require the developer of the system, system component, or system service to demonstrate the use of a system development life cycle process that includes organization-defined state-of-the-practice systems and software engineering methods, development tools, quality assurance techniques, and process standards.
- **SA-4(4):** Assignment of Components to Systems — [Withdrawn: Incorporated into CM-8(9).]
- **SA-4(5):** System, Component, and Service Configurations — Require the developer of the system, system component, or system service to identify the functions, ports, protocols, and services intended for organizational use, and deliver and implement the system, component, or service with organization-defined configurations.
- **SA-4(6):** Use of Information Assurance Products — Employ only government off-the-shelf or commercial off-the-shelf information assurance and information assurance-enabled information technology products that compose an NSA-approved solution.
- **SA-4(7):** NIAP-Approved Protection Profiles — Limit the use of commercially provided information technology products to those products that have been successfully evaluated against a National Information Assurance Partnership (NIAP)-approved Protection Profile.
- **SA-4(8):** Continuous Monitoring Plan for Controls — Require the developer of the system, system component, or system service to produce a plan for continuous monitoring of control effectiveness.
- **SA-4(9):** Functions, Ports, Protocols, and Services in Use — Require the developer of the system, system component, or system service to identify the functions, ports, protocols, and services intended for organizational use.
- **SA-4(10):** Use of Approved PIV Products — Employ only information technology products on the FIPS 201-approved products list for PIV capability.
- **SA-4(11):** System of Records — Include Federal Acquisition Regulation clause C.204-21 and other applicable clauses in contracts for PII processing.
- **SA-4(12):** Data Ownership — Include organization-defined data ownership requirements in the acquisition contract; require all data to be returned to the organization at the end of the contract and require the contractor to delete all organization data from contractor systems upon contract completion.

**Related Controls:** CM-6, CM-8, PS-7, SA-3, SA-5, SA-8, SA-11, SA-15, SA-16, SA-17, SA-21, SR-3, SR-5

**Baselines:** Low, Moderate, High

---

## SA-5: System Documentation

Obtain or develop administrator documentation for the system, system component, or system service that describes secure configuration, installation, and operation of the system; effective use and maintenance of security and privacy functions and mechanisms; known vulnerabilities regarding configuration and use of administrative or privileged functions; user-accessible security and privacy functions/mechanisms and how to use them effectively; methods for user interaction; user responsibilities in maintaining system security and privacy; and procedures for restarting the system.

**Key Enhancements:** None defined for SA-5.

**Related Controls:** CM-4, CM-6, CM-7, CM-8, PL-2, PL-4, PL-8, PS-2, SA-3, SA-4, SA-8, SA-9, SA-10, SA-11, SA-15, SA-16, SA-17, SI-12, SR-3

**Baselines:** Low, Moderate, High

---

## SA-6: Software Usage Restrictions

[Withdrawn: Incorporated into CM-10 and SI-7.]

**Baselines:** None (not in any baseline)

---

## SA-7: User-Installed Software

[Withdrawn: Incorporated into CM-11 and SI-7.]

**Baselines:** None (not in any baseline)

---

## SA-8: Security and Privacy Engineering Principles

Apply organization-defined systems security and privacy engineering principles in the specification, design, development, implementation, and modification of the system and system components.

**Key Enhancements:**
- **SA-8(1):** Clear Abstractions — Implement the security design principle of clear abstractions.
- **SA-8(2):** Least Common Mechanism — Implement the security design principle of least common mechanism.
- **SA-8(3):** Modularity and Layering — Implement the security design principle of modularity and layering.
- **SA-8(4):** Partially Ordered Dependencies — Implement the security design principle of partially ordered dependencies.
- **SA-8(5):** Efficiently Mediated Access — Implement the security design principle of efficiently mediated access.
- **SA-8(6):** Minimized Sharing — Implement the security design principle of minimized sharing.
- **SA-8(7):** Reduced Complexity — Implement the security design principle of reduced complexity.
- **SA-8(8):** Secure Evolvability — Implement the security design principle of secure evolvability.
- **SA-8(9):** Trusted Components — Implement the security design principle of trusted components.
- **SA-8(10):** Hierarchical Trust — Implement the security design principle of hierarchical trust.
- **SA-8(11):** Inverse Modification Threshold — Implement the security design principle of inverse modification threshold.
- **SA-8(12):** Hierarchical Protection — Implement the security design principle of hierarchical protection.
- **SA-8(13):** Minimized Security Elements — Implement the security design principle of minimized security elements.
- **SA-8(14):** Least Privilege — Implement the security design principle of least privilege.
- **SA-8(15):** Predicate Permission — Implement the security design principle of predicate permission.
- **SA-8(16):** Self-Reliant Trustworthiness — Implement the security design principle of self-reliant trustworthiness.
- **SA-8(17):** Secure Distributed Composition — Implement the security design principle of secure distributed composition.
- **SA-8(18):** Trusted Communications — Implement the security design principle of trusted communications.
- **SA-8(19):** Continuous Protection — Implement the security design principle of continuous protection.
- **SA-8(20):** Secure Metadata Management — Implement the security design principle of secure metadata management.
- **SA-8(21):** Self-Analysis — Implement the security design principle of self-analysis.
- **SA-8(22):** Accountability and Traceability — Implement the security design principle of accountability and traceability.
- **SA-8(23):** Secure Defaults — Implement the security design principle of secure defaults.
- **SA-8(24):** Secure Failure and Recovery — Implement the security design principle of secure failure and recovery.
- **SA-8(25):** Economic Security — Implement the security design principle of economic security.
- **SA-8(26):** Performance Security — Implement the security design principle of performance security.
- **SA-8(27):** Human Factored Security — Implement the security design principle of human factored security.
- **SA-8(28):** Acceptable Security — Implement the security design principle of acceptable security.
- **SA-8(29):** Repeatable and Documented Procedures — Implement the security design principle of repeatable and documented procedures.
- **SA-8(30):** Procedural Rigor — Implement the security design principle of procedural rigor.
- **SA-8(31):** Secure System Modification — Implement the security design principle of secure system modification.
- **SA-8(32):** Sufficient Documentation — Implement the security design principle of sufficient documentation.
- **SA-8(33):** Minimization — Implement the privacy design principle of minimization.

**Related Controls:** PL-8, PM-7, RA-2, RA-3, RA-9, SA-3, SA-4, SA-15, SA-17, SA-20, SC-2, SC-3, SC-32, SC-39, SR-2, SR-3, SR-4, SR-5

**Baselines:** Low, Moderate, High

---

## SA-9: External System Services

Require that providers of external system services comply with organizational security and privacy requirements and employ organization-defined controls in accordance with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Define and document organizational oversight and user roles and responsibilities with regard to external system services. Employ organization-defined processes, methods, and techniques to monitor control compliance by external service providers on an ongoing basis.

**Key Enhancements:**
- **SA-9(1):** Risk Assessments and Organizational Approvals — Assess supply chain risk, conduct an organizational assessment of risk prior to the acquisition or outsourcing of information security services, and verify that the acquisition or outsourcing is approved by organization-defined personnel or roles.
- **SA-9(2):** Identification of Functions, Ports, Protocols, and Services — Require providers of organization-defined external system services to identify the functions, ports, protocols, and other services required for the use of such services.
- **SA-9(3):** Establish and Maintain Trust Relationship with Providers — Establish, document, and maintain trust relationships with external service providers.
- **SA-9(4):** Consistent Interests of Consumers and Providers — Take organization-defined actions to ensure that the interests of organization-defined external service providers are consistent with and reflect organizational interests.
- **SA-9(5):** Processing, Storage, and Service Location — Restrict the location of information processing, information/data storage, or information services to organization-defined locations based on organization-defined requirements or conditions.
- **SA-9(6):** Organization-Controlled Cryptographic Keys — Maintain exclusive control of cryptographic keys for encrypted material stored or transmitted through an external system.
- **SA-9(7):** Organization-Controlled Integrity Checking — Provide the capability to check the integrity of information while it resides in the external system.
- **SA-9(8):** Processing and Storage Location — U.S. Jurisdiction — Restrict the geographic location of information processing and data storage to facilities located within in the legal jurisdictional boundary of the United States.

**Related Controls:** AC-20, CA-3, CP-2, IR-4, IR-7, PL-10, PL-11, PS-7, SA-2, SA-4, SR-3, SR-5

**Baselines:** Low, Moderate, High

---

## SA-10: Developer Configuration Management

Require the developer of the system, system component, or system service to perform configuration management during system, component, or service development, integration, and implementation. Document, manage, and control the integrity of changes to organization-defined configuration items under configuration management. Implement only organization-approved changes to the system, component, or service. Document approved changes and the potential security and privacy impacts of such changes. Track security flaws and flaw resolution within the system, component, or service and report findings to organization-defined personnel.

**Key Enhancements:**
- **SA-10(1):** Software and Firmware Integrity Verification — Require the developer of the system, system component, or system service to enable integrity verification of software and firmware components.
- **SA-10(2):** Alternative Configuration Management Processes — Provide an alternate configuration management process using organizational personnel in the absence of a dedicated developer configuration management team.
- **SA-10(3):** Hardware Integrity Verification — Require the developer of the system, system component, or system service to enable integrity verification of hardware components.
- **SA-10(4):** Trusted Generation — Require the developer of the system, system component, or system service to employ tools for comparing newly generated versions of security-relevant hardware descriptions, source code, and object code with previous versions.
- **SA-10(5):** Mapping Integrity for Version Control — Require the developer of the system, system component, or system service to maintain the integrity of the mapping between the master build data describing the current version of security-relevant hardware, software, and firmware and the on-site master copy of the data for the current version.
- **SA-10(6):** Trusted Distribution — Require the developer of the system, system component, or system service to execute procedures for ensuring that security-relevant hardware, software, and firmware updates distributed to the organization are exactly as specified by the master copies.
- **SA-10(7):** Security and Privacy Representatives — Require that an organization-defined security or privacy representative be included in the developer configuration management and change control process.

**Related Controls:** CM-2, CM-3, CM-4, CM-7, CM-9, SA-4, SA-5, SA-8, SA-15, SI-2, SR-3, SR-4, SR-5, SR-6

**Baselines:** Moderate, High

---

## SA-11: Developer Testing and Evaluation

Require the developer of the system, system component, or system service at all post-design stages of the system development life cycle to develop and implement a plan for ongoing security and privacy assessments. Perform organization-defined depth and coverage testing and evaluation. Produce evidence of the execution of the assessment plan and the results of the testing and evaluation. Implement a verifiable flaw remediation process. Correct flaws identified during testing and evaluation.

**Key Enhancements:**
- **SA-11(1):** Static Code Analysis — Require the developer of the system, system component, or system service to employ static code analysis tools to identify common flaws and document the results of the analysis.
- **SA-11(2):** Threat Modeling and Vulnerability Analyses — Require the developer of the system, system component, or system service to perform threat modeling and vulnerability analyses during development and the subsequent testing/evaluation of the system, component, or service.
- **SA-11(3):** Independent Verification of Assessment Plans and Evidence — Require an independent agent to verify the implementation of the developer security and privacy assessment plan and evidence produced.
- **SA-11(4):** Manual Code Reviews — Require the developer of the system, system component, or system service to perform a manual code review of organization-defined specific code.
- **SA-11(5):** Penetration Testing — Require the developer of the system, system component, or system service to perform penetration testing at an organization-defined breadth and depth and with organization-defined constraints.
- **SA-11(6):** Attack Surface Reviews — Require the developer of the system, system component, or system service to review attack surfaces.
- **SA-11(7):** Verify Scope of Testing and Evaluation — Require the developer of the system, system component, or system service to verify that the scope of testing and evaluation provides complete coverage of required controls at an organization-defined depth of testing.
- **SA-11(8):** Dynamic Code Analysis — Require the developer of the system, system component, or system service to employ dynamic code analysis tools to identify common flaws and document the results.
- **SA-11(9):** Interactive Application Security Testing — Require the developer of the system, system component, or system service to employ interactive application security testing tools to identify flaws and document the results.

**Related Controls:** CA-2, CA-7, CM-4, SA-3, SA-4, SA-5, SA-8, SA-15, SA-17, SI-2, SR-5, SR-6, SR-7

**Baselines:** Moderate, High

---

## SA-12: Supply Chain Protection

[Withdrawn: Incorporated into SR-1 through SR-11.]

**Baselines:** None (not in any baseline)

---

## SA-13: Trustworthiness

[Withdrawn: Incorporated into SA-8.]

**Baselines:** None (not in any baseline)

---

## SA-14: Criticality Analysis

[Withdrawn: Incorporated into RA-9.]

**Baselines:** None (not in any baseline)

---

## SA-15: Development Process, Standards, and Tools

Require the developer of the system, system component, or system service to follow a documented development process that explicitly addresses security and privacy requirements; identifies the standards and tools used in the development process; documents the specific tool options and tool configurations used in the development process; and documents, manages, and ensures the integrity of changes to the process and/or tools used in development. Review the development process, standards, tools, tool options, and tool configurations at an organization-defined frequency to determine if the process, standards, tools, tool options, and tool configurations selected and employed can satisfy organization-defined security and privacy requirements.

**Key Enhancements:**
- **SA-15(1):** Quality Metrics — Require the developer of the system, system component, or system service to define quality metrics at the beginning of the development process, and provide evidence of meeting the quality metrics.
- **SA-15(2):** Security and Privacy Tracking Tools — Require the developer of the system, system component, or system service to select and employ security and privacy tracking tools for use during the development process.
- **SA-15(3):** Criticality Analysis — Require the developer of the system, system component, or system service to perform a criticality analysis at organization-defined breadth and depth and at organization-defined decision points in the system development life cycle.
- **SA-15(4):** Threat Modeling and Vulnerability Analysis — [Withdrawn: Incorporated into SA-11(2).]
- **SA-15(5):** Attack Surface Reduction — Require the developer of the system, system component, or system service to reduce attack surfaces to organization-defined thresholds.
- **SA-15(6):** Continuous Improvement — Require the developer of the system, system component, or system service to implement an explicit process to continuously improve the development process.
- **SA-15(7):** Automated Vulnerability Analysis — Require the developer of the system, system component, or system service to use automated tools to support the analysis of vulnerabilities.
- **SA-15(8):** Reuse of Threat and Vulnerability Information — Require the developer of the system, system component, or system service to use threat modeling and vulnerability analyses from similar systems, components, or services to inform the current development process.

**Related Controls:** MA-6, SA-3, SA-4, SA-8, SA-10, SA-11, SR-3, SR-4, SR-5, SR-6, SR-9

**Baselines:** Moderate, High

---

## SA-16: Developer-Provided Training

Require the developer of the system, system component, or system service to provide organization-defined training on the correct use and operation of the implemented security and privacy functions, controls, and/or mechanisms.

**Key Enhancements:** None defined for SA-16.

**Related Controls:** AT-2, AT-3, PE-3, SA-4, SA-5

**Baselines:** High

---

## SA-17: Developer Security and Privacy Architecture and Design

Require the developer of the system, system component, or system service to produce a design specification and security and privacy architecture that is consistent with the organization's security and privacy architecture, accurately and completely describes the required security and privacy functionality, and addresses the allocation of controls among physical and logical components, and accurately and completely describes the design and implementation of the controls including security-relevant interfaces and the interactions and exclusions among design elements.

**Key Enhancements:**
- **SA-17(1):** Formal Policy Model — Require the developer of the system, system component, or system service to design and implement the controls using a formal policy model.
- **SA-17(2):** Security-Relevant Components — Require the developer of the system, system component, or system service to define security-relevant hardware, software, and firmware.
- **SA-17(3):** Formal Correspondence — Require the developer of the system, system component, or system service to produce a formal top-level specification showing correspondence with the formal policy model.
- **SA-17(4):** Informal Correspondence — Require the developer of the system, system component, or system service to produce, as an integral part of the development process, an informal descriptive top-level specification that shows correspondence with the formal policy model.
- **SA-17(5):** Conceptually Simple Design — Require the developer of the system, system component, or system service to design and structure the security-relevant hardware, software, and firmware to use a complete, conceptually simple protection mechanism with precisely defined semantics.
- **SA-17(6):** Structure for Testing — Require the developer of the system, system component, or system service to structure security-relevant hardware, software, and firmware to facilitate testing.
- **SA-17(7):** Structure for Least Privilege — Require the developer of the system, system component, or system service to structure security-relevant hardware, software, and firmware to facilitate controlling access with least privilege.
- **SA-17(8):** Orchestration — Design organization-defined critical systems or system components to be orchestrated.
- **SA-17(9):** Design Diversity — Use different designs for organization-defined critical systems or system components to satisfy a common set of requirements or provide equivalent functionality.

**Related Controls:** PL-2, PL-8, PM-7, SA-3, SA-4, SA-8, SC-7

**Baselines:** High

---

## SA-18: Tamper Resistance and Detection

[Withdrawn: Incorporated into SR-9.]

**Baselines:** None (not in any baseline)

---

## SA-19: Component Authenticity

[Withdrawn: Incorporated into SR-11.]

**Baselines:** None (not in any baseline)

---

## SA-20: Customized Development of Critical Components

Reimplement or custom develop organization-defined critical system components.

**Key Enhancements:** None defined for SA-20.

**Related Controls:** CP-2, RA-9, SA-8

**Baselines:** None (not in any baseline)

---

## SA-21: Developer Screening

Require that the developer of organization-defined system, system component, or system service satisfies the organization-defined screening requirements for access to the system, system component, or system service.

**Key Enhancements:**
- **SA-21(1):** Validation of Screening — [Withdrawn: Incorporated into SA-21.]

**Related Controls:** PS-2, PS-3, PS-6, PS-7, SA-4, SR-6

**Baselines:** High

---

## SA-22: Unsupported System Components

Replace system components when support for the components is no longer available from the developer, vendor, or manufacturer. Provide organization-defined options for alternative sources for continued support for unsupported components, including in-house support.

**Key Enhancements:**
- **SA-22(1):** Alternative Sources for Continued Support — [Withdrawn: Incorporated into SA-22.]

**Related Controls:** PL-2, SA-3

**Baselines:** Low, Moderate, High

---

## SA-23: Specialization

Employ organization-defined specialization techniques to organization-defined systems or system components. Use organization-defined techniques to constrain, restrict, or reduce the attack surface of systems or system components.

**Key Enhancements:** None defined for SA-23.

**Related Controls:** RA-9, SA-8

**Baselines:** None (not in any baseline)