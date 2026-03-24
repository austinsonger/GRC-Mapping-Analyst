# NIST SP 800-53 Rev 5 — Incident Response (IR) Family

## IR-1: Policy and Procedures

Develop, document, and disseminate an incident response policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance. Review and update the policy and procedures at organization-defined frequencies.

**Key Enhancements:** None defined for IR-1.

**Related Controls:** PM-9, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## IR-2: Incident Response Training

Provide incident response training to system users consistent with assigned roles and responsibilities within an organization-defined time period of assuming an incident response role or responsibility, when required by system changes, and at an organization-defined frequency thereafter.

**Key Enhancements:**
- **IR-2(1):** Simulated Events — Incorporate simulated events into incident response training to facilitate effective response by personnel in crisis situations.
- **IR-2(2):** Automated Training Environments — Provide an incident response training environment using automated mechanisms.
- **IR-2(3):** Breach — Provide incident response training on how to identify and respond to a breach, including the organization's process for reporting a breach.

**Related Controls:** AT-2, AT-3, AT-4, CP-3, IR-3, IR-4, IR-8, IR-9

**Baselines:** Low, Moderate, High

---

## IR-3: Incident Response Testing

Test the effectiveness of the incident response capability for the system at an organization-defined frequency using organization-defined tests.

**Key Enhancements:**
- **IR-3(1):** Automated Testing — Employ automated mechanisms to more thoroughly and effectively test the incident response capability.
- **IR-3(2):** Coordination with Related Plans — Coordinate incident response testing with organizational elements responsible for related plans (e.g., business continuity, disaster recovery, continuity of operations).
- **IR-3(3):** Continuous Improvement — Use qualitative and quantitative data from testing to improve incident response processes, training, and organizational resilience.

**Related Controls:** CP-3, CP-4, IR-2, IR-4, IR-8, PM-14

**Baselines:** Moderate, High

---

## IR-4: Incident Handling

Implement an incident handling capability for incidents that includes preparation, detection and analysis, containment, eradication, and recovery. Coordinate incident handling activities with contingency planning activities. Incorporate lessons learned from ongoing incident handling activities into incident response procedures, training, and testing, and implement the resulting changes accordingly.

**Key Enhancements:**
- **IR-4(1):** Automated Incident Handling Processes — Support the incident handling process using automated mechanisms.
- **IR-4(2):** Dynamic Reconfiguration — Include dynamic reconfiguration of the system as part of the incident response capability.
- **IR-4(3):** Continuity of Operations — Identify classes of incidents and associated actions to take to ensure continuation of organizational mission and business functions.
- **IR-4(4):** Information Correlation — Correlate incident information and individual incident responses to achieve an organization-wide perspective on incident awareness and response.
- **IR-4(5):** Automatic Disabling of System — Implement a configurable capability to automatically disable the system if organization-defined security violations are detected.
- **IR-4(6):** Insider Threats — Implement an incident handling capability for incidents involving insider threats.
- **IR-4(7):** Insider Threats — Intra-Organization Coordination — Coordinate incident handling capability for insider threats across organizational components.
- **IR-4(8):** Correlation with External Organizations — Coordinate with external organizations to correlate and share incident information to achieve a cross-organization perspective on incident awareness.
- **IR-4(9):** Dynamic Response Capability — Employ organization-defined dynamic response capabilities to respond to incidents.
- **IR-4(10):** Supply Chain Coordination — Coordinate incident handling activities involving supply chain events with other organizations involved in the supply chain.
- **IR-4(11):** Integrated Incident Response Team — Establish and maintain an integrated incident response team that can be deployed to any location identified by the organization within an organization-defined time period.
- **IR-4(12):** Malicious Code and Forensic Analysis — Analyze malicious code and/or other residual artifacts remaining in the system after the incident.
- **IR-4(13):** Behavior Analysis — Analyze anomalous or suspected adversarial behavior in or related to the system.
- **IR-4(14):** Security Operations Center — Establish and maintain a security operations center.
- **IR-4(15):** Public Relations and Reputation Repair — manage public relations associated with an incident and repair organizational reputation.

**Related Controls:** AC-19, AU-6, AU-7, CM-6, CP-2, CP-3, CP-4, IR-2, IR-3, IR-5, IR-6, IR-8, PE-6, PL-2, PM-12, SA-8, SC-5, SC-7, SI-3, SI-4, SI-7

**Baselines:** Low, Moderate, High

---

## IR-5: Incident Monitoring

Track and document incidents on an ongoing basis.

**Key Enhancements:**
- **IR-5(1):** Automated Tracking, Data Collection, and Analysis — Track incidents and collect and analyze incident information using automated mechanisms.

**Related Controls:** AU-6, AU-7, IR-4, IR-6, IR-8, PE-6, PM-5, SC-5, SC-7, SI-3, SI-4, SI-7

**Baselines:** Low, Moderate, High

---

## IR-6: Incident Reporting

Require personnel to report suspected incidents to the organizational incident response capability within an organization-defined time period. Report incident information to organization-defined authorities.

**Key Enhancements:**
- **IR-6(1):** Automated Reporting — Report incidents using automated mechanisms.
- **IR-6(2):** Vulnerabilities Related to Incidents — Report system vulnerabilities associated with reported incidents to organization-defined personnel or roles.
- **IR-6(3):** Supply Chain Coordination — Provide incident information to the provider of the product or service and other organizations involved in the supply chain for systems or system components related to the incident.

**Related Controls:** CM-6, CP-2, IR-4, IR-5, IR-8, IR-9

**Baselines:** Low, Moderate, High

---

## IR-7: Incident Response Assistance

Provide an incident response support resource, integral to the organizational incident response capability, that offers advice and assistance to users of the system for the handling and reporting of incidents.

**Key Enhancements:**
- **IR-7(1):** Automation Support for Availability — Increase the availability of incident response information and support using automated mechanisms.
- **IR-7(2):** Coordination with External Providers — Establish a direct, cooperative relationship between the incident response capability and external providers of system protection capability.

**Related Controls:** AT-2, AT-3, IR-4, IR-6, IR-8, PM-22, PM-26, SA-9, SI-18

**Baselines:** Low, Moderate, High

---

## IR-8: Incident Response Plan

Develop an incident response plan that provides the organization with a roadmap for implementing its incident response capability. The plan addresses roles, responsibilities, and communication/coordination structures. It defines reportable incidents, provides metrics for measuring incident response capability, and defines the resources and management support needed. The plan is reviewed and approved by organization-defined personnel or roles, distributed to incident response personnel, and reviewed/updated at an organization-defined frequency or following changes.

**Key Enhancements:**
- **IR-8(1):** Breaches — Include processes for responding to breaches in the incident response plan.

**Related Controls:** AC-2, CP-2, CP-4, IR-4, IR-7, IR-9, PE-6, PL-2, SA-15, SI-12, SR-8

**Baselines:** Low, Moderate, High

---

## IR-9: Information Spillage Response

Respond to information spills by identifying the specific information involved in the system contamination, alerting organization-defined personnel or roles using a method of communication not associated with the spill, isolating the contaminated system or system component, eradicating the information from the contaminated system or component, identifying other systems or system components that may have been subsequently contaminated, and performing other organization-defined actions.

**Key Enhancements:**
- **IR-9(1):** Responsible Personnel — Assign organization-defined personnel or roles with responsibility for responding to information spills.
- **IR-9(2):** Training — Provide information spillage response training at an organization-defined frequency.
- **IR-9(3):** Post-Spill Operations — Implement organization-defined procedures to ensure that organizational personnel impacted by information spills can continue to carry out assigned tasks while contaminated systems are undergoing corrective actions.
- **IR-9(4):** Exposure to Unauthorized Personnel — Employ organization-defined controls for personnel exposed to information not within assigned access authorizations.

**Related Controls:** CP-2, IR-6, PM-26, PM-27, PT-2, PT-3, PT-7, RA-7

**Baselines:** None (not in any baseline)

---

## IR-10: Integrated Information Security Analysis Team

Establish an integrated team of forensic/malicious code analysts, tool developers, and real-time operations personnel.

**Key Enhancements:** None defined for IR-10.

**Baselines:** None (not in any baseline)