# NIST SP 800-53 Rev 5 — Risk Assessment (RA) Family

## RA-1: Policy and Procedures

Develop, document, and disseminate a risk assessment policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance. Review and update the policy and procedures at organization-defined frequencies.

**Key Enhancements:** None defined for RA-1.

**Related Controls:** PM-9, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## RA-2: Security Categorization

Categorize the system and the information it processes, stores, and transmits. Document the security categorization results, including supporting rationale, in the security plan for the system. Verify that the authorizing official or authorizing official designated representative reviews and approves the security categorization decision.

**Key Enhancements:**
- **RA-2(1):** Impact-Level Prioritization — Conduct an impact-level prioritization of organizational systems to obtain additional granularity on the impact level of the system based on mission criticality.

**Related Controls:** CM-8, MP-4, PL-2, PL-10, PL-11, PM-7, RA-3, RA-5, RA-7, RA-8, SA-8, SC-7, SC-38, SI-12

**Baselines:** Low, Moderate, High

---

## RA-3: Risk Assessment

Conduct a risk assessment, including identifying threats to and vulnerabilities in the system, the likelihood and magnitude of harm from unauthorized access, use, disclosure, disruption, modification, or destruction of the system, the information it processes, stores, or transmits, and any related information, and the likelihood and impact of adverse effects on individuals arising from the processing of personally identifiable information. Integrate risk assessment results and risk management decisions from the organization and mission or business process perspectives with system-level risk assessments. Document risk assessment results in the security and privacy plans, risk assessment report, or organization-defined document. Review risk assessment results at an organization-defined frequency. Disseminate risk assessment results to organization-defined personnel or roles. Update the risk assessment at an organization-defined frequency or when there are significant changes to the system, its environment of operation, or other conditions that may impact the security or privacy state of the system.

**Key Enhancements:**
- **RA-3(1):** Supply Chain Risk Assessment — Assess supply chain risks associated with organization-defined systems, system components, and system services, and update the supply chain risk assessment at an organization-defined frequency or when there are significant changes to the relevant supply chain, or when changes to the system, environments of operation, or other conditions may necessitate a change in the supply chain.
- **RA-3(2):** Use of All-Source Intelligence — Use all-source intelligence to assist in the analysis of risk.
- **RA-3(3):** Dynamic Threat Awareness — Determine the current cyber threat environment on an ongoing basis using organization-defined means.
- **RA-3(4):** Predictive Cyber Analytics — Employ organization-defined advanced automation and analytics capabilities to predict and identify risks.

**Related Controls:** CA-3, CA-6, CM-4, CM-13, CP-6, CP-7, IA-8, MA-5, PE-3, PE-8, PE-18, PL-2, PL-10, PL-11, PM-8, PM-9, PM-28, PT-2, PT-7, RA-2, RA-5, RA-7, SA-8, SA-9, SC-38, SI-12

**Baselines:** Low, Moderate, High

---

## RA-4: Risk Assessment Update

[Withdrawn: Incorporated into RA-3.]

**Baselines:** None (not in any baseline)

---

## RA-5: Vulnerability Monitoring and Scanning

Monitor and scan for vulnerabilities in the system and hosted applications at an organization-defined frequency and/or randomly in accordance with an organization-defined process, and when new vulnerabilities potentially affecting the system are identified and reported. Employ vulnerability monitoring tools and techniques that facilitate interoperability among tools and automate parts of the vulnerability management process. Analyze vulnerability scan reports and results from vulnerability monitoring. Remediate legitimate vulnerabilities in accordance with an organizational assessment of risk. Share information obtained from the vulnerability monitoring process and control assessments with organization-defined personnel or roles to help eliminate similar vulnerabilities in other systems.

**Key Enhancements:**
- **RA-5(1):** Update Tool Capability — [Withdrawn: Incorporated into RA-5.]
- **RA-5(2):** Update Vulnerabilities to Be Scanned — Update the system vulnerabilities to be scanned at an organization-defined frequency, prior to a new scan, and/or when new vulnerabilities are identified and reported.
- **RA-5(3):** Breadth and Depth of Coverage — Define the breadth and depth of vulnerability scanning coverage.
- **RA-5(4):** Discoverable Information — Determine information about the system that is discoverable and take organization-defined corrective actions.
- **RA-5(5):** Privileged Access — Implement privileged access authorization to organization-defined system components for organization-defined vulnerability scanning activities.
- **RA-5(6):** Automated Trend Analyses — Compare the results of multiple vulnerability scans using automated mechanisms.
- **RA-5(7):** Automated Detection and Notification of Unauthorized Components — [Withdrawn: Incorporated into CM-8.]
- **RA-5(8):** Review Historic Audit Logs — Review historic audit logs to determine if a vulnerability identified in a system has been previously exploited within an organization-defined time period.
- **RA-5(9):** Penetration Testing and Analyses — [Withdrawn: Incorporated into CA-8.]
- **RA-5(10):** Correlate Scanning Information — Correlate the output from vulnerability scanning tools to determine the presence of multi-vulnerability and multi-hop attack vectors.
- **RA-5(11):** Public Disclosure Program — Establish a public reporting channel for receiving reports of vulnerabilities in organizational systems and system components.

**Related Controls:** CA-2, CA-7, CA-8, CM-2, CM-4, CM-6, CM-8, RA-2, RA-3, SA-11, SA-15, SC-38, SI-2, SI-3, SI-4, SI-7, SR-11

**Baselines:** Low, Moderate, High

---

## RA-6: Technical Surveillance Countermeasures Survey

Employ a technical surveillance countermeasures survey at organization-defined locations at an organization-defined frequency or when organization-defined events or indicators occur.

**Key Enhancements:** None defined for RA-6.

**Related Controls:** None

**Baselines:** None (not in any baseline)

---

## RA-7: Risk Response

Respond to findings from security and privacy assessments, monitoring, and audits in accordance with organizational risk tolerance.

**Key Enhancements:** None defined for RA-7.

**Related Controls:** CA-5, IR-9, PM-4, PM-28, RA-2, RA-3, SR-2

**Baselines:** Low, Moderate, High

---

## RA-8: Privacy Impact Assessments

Conduct privacy impact assessments for systems, programs, or other activities before developing or procuring information technology that processes personally identifiable information, and when there are changes in the processing of personally identifiable information. The privacy impact assessment describes the information collected, the reason for collection, intended use, sharing practices, individual notice, retention, and security protections. It also evaluates the risks and documents the measures taken to mitigate those risks.

**Key Enhancements:** None defined for RA-8.

**Related Controls:** CM-4, CM-9, CM-13, PT-2, PT-3, PT-5, RA-1, RA-2, RA-3, RA-7

**Baselines:** None (not in any baseline)

---

## RA-9: Criticality Analysis

Identify critical system components and functions by performing a criticality analysis for organization-defined systems, system components, or system services at organization-defined decision points in the system development life cycle.

**Key Enhancements:** None defined for RA-9.

**Related Controls:** CP-2, PL-2, PL-8, PL-11, PM-1, PM-11, RA-2, SA-8, SA-15, SA-20, SR-5

**Baselines:** Moderate, High

---

## RA-10: Threat Hunting

Establish and maintain a cyber threat hunting capability to search for indicators of compromise in organizational systems and detect, track, and disrupt threats that evade existing controls. Employ threat hunting at an organization-defined frequency. The threat hunting capability uses threat intelligence, information from the security operations center, incident response team, and other sources. Findings from threat hunting are used to adjust defensive measures.

**Key Enhancements:** None defined for RA-10.

**Related Controls:** CA-2, CA-7, CA-8, RA-3, RA-5, RA-6, SI-4

**Baselines:** None (not in any baseline)