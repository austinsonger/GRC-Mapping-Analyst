# NIST SP 800-53 Rev 5 — System and Information Integrity (SI) Family

## SI-1: Policy and Procedures

Develop, document, and disseminate a system and information integrity policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance. Review and update the policy and procedures at organization-defined frequencies.

**Key Enhancements:** None defined for SI-1.

**Related Controls:** PM-9, PS-8, SA-8, SI-12

**Baselines:** Low, Moderate, High

---

## SI-2: Flaw Remediation

Identify, report, and correct system flaws. Test software and firmware updates related to flaw remediation for effectiveness and potential side effects before installation. Install security-relevant software and firmware updates within an organization-defined time period of the release of the updates. Incorporate flaw remediation into the organizational configuration management process.

**Key Enhancements:**
- **SI-2(1):** Central Management — [Withdrawn: Incorporated into PL-9.]
- **SI-2(2):** Automated Flaw Remediation Status — Determine the state of system components with regard to flaw remediation using automated mechanisms at an organization-defined frequency.
- **SI-2(3):** Time to Remediate Flaws and Benchmarks for Corrective Actions — Measure the time between flaw identification and flaw remediation and establish organization-defined benchmarks for taking corrective actions.
- **SI-2(4):** Automated Patch Management Tools — Employ automated patch management tools to facilitate flaw remediation to organization-defined system components.
- **SI-2(5):** Automatic Software and Firmware Updates — Install organization-defined security-relevant software and firmware updates automatically to organization-defined system components.
- **SI-2(6):** Removal of Previous Versions of Software and Firmware — Remove organization-defined software and firmware components after updated versions have been installed.

**Related Controls:** CA-5, CM-3, CM-4, CM-5, CM-6, CM-8, MA-2, RA-5, SA-8, SA-10, SA-11, SI-3, SI-5, SI-7, SI-11

**Baselines:** Low, Moderate, High

---

## SI-3: Malicious Code Protection

Implement organization-defined signature-based and/or non-signature-based malicious code protection mechanisms at system entry and exit points to detect and eradicate malicious code. Automatically update malicious code protection mechanisms as new releases are available in accordance with organizational configuration management policy and procedures. Configure malicious code protection mechanisms to perform periodic scans of the system at an organization-defined frequency and real-time scans of files from external sources at endpoints and/or network entry and exit points as the files are downloaded, opened, or executed in accordance with organizational policy. Address the receipt of false positives during malicious code detection and eradication and the resulting potential impact on the availability of the system. Address the receipt of false positives during malicious code detection and eradication.

**Key Enhancements:**
- **SI-3(1):** Central Management — [Withdrawn: Incorporated into PL-9.]
- **SI-3(2):** Automatic Updates — [Withdrawn: Incorporated into SI-3.]
- **SI-3(3):** Non-Privileged Users — [Withdrawn: Incorporated into AC-6(10).]
- **SI-3(4):** Updates Only by Privileged Users — Update malicious code protection mechanisms only when directed by a privileged user.
- **SI-3(5):** Portable Storage Devices — [Withdrawn: Incorporated into MP-7.]
- **SI-3(6):** Testing and Verification — Test malicious code protection mechanisms at an organization-defined frequency by introducing known benign code into the system and verify that both detection of the code and the associated incident reporting occur.
- **SI-3(7):** Nonsignature-Based Detection — [Withdrawn: Incorporated into SI-3.]
- **SI-3(8):** Detect Unauthorized Commands — Detect organization-defined unauthorized operating system commands through the kernel application programming interface at organization-defined system hardware components and issue an alert.
- **SI-3(9):** Authenticate Remote Commands — [Withdrawn: Incorporated into AC-17(10).]
- **SI-3(10):** Malicious Code Analysis — Employ organization-defined tools and techniques to analyze the characteristics and behavior of malicious code and incorporate the results into organizational incident response and flaw remediation processes.

**Related Controls:** AC-4, AC-19, CM-3, CM-8, IR-4, MA-3, MA-4, PL-9, RA-5, SC-7, SC-23, SC-26, SC-28, SC-44, SI-2, SI-4, SI-7, SI-8, SI-15

**Baselines:** Low, Moderate, High

---

## SI-4: System Monitoring

Monitor the system to detect attacks and indicators of potential attacks in accordance with organization-defined monitoring objectives, and unauthorized local, network, and remote connections. Identify unauthorized use of the system through organization-defined techniques and methods. Invoke internal monitoring capabilities or deploy monitoring devices strategically within the system to collect organization-determined essential information. Analyze detected events and anomalies. Adjust the level of system monitoring activity when there is a change in risk to organizational operations and assets, individuals, other organizations, or the Nation. Obtain legal opinion regarding system monitoring activities in accordance with applicable laws, executive orders, directives, regulations, or policies.

**Key Enhancements:**
- **SI-4(1):** System-Wide Intrusion Detection System — Connect and configure individual intrusion detection tools into a system-wide intrusion detection system.
- **SI-4(2):** Automated Tools and Mechanisms for Real-Time Analysis — Employ automated tools and mechanisms to support near real-time analysis of events.
- **SI-4(3):** Automated Tool and Mechanism Integration — Employ automated tools and mechanisms to integrate intrusion detection tools and mechanisms into access control and flow control mechanisms.
- **SI-4(4):** Inbound and Outbound Communications Traffic — Monitor inbound and outbound communications traffic at an organization-defined frequency for unusual or unauthorized activities or conditions.
- **SI-4(5):** System-Generated Alerts — Alert organization-defined personnel or roles when organization-defined compromise indicators occur.
- **SI-4(6):** Restrict Non-Privileged Users — [Withdrawn: Incorporated into AC-6(10).]
- **SI-4(7):** Automated Response to Suspicious Events — Notify organization-defined incident response personnel of organization-defined suspicious events and take organization-defined least-disruptive actions to terminate suspicious events.
- **SI-4(8):** Protection of Monitoring Information — [Withdrawn: Incorporated into SI-4.]
- **SI-4(9):** Testing of Monitoring Tools and Mechanisms — Test intrusion-monitoring tools and mechanisms at an organization-defined frequency.
- **SI-4(10):** Visibility of Encrypted Communications — Make provisions so that organization-defined encrypted communications traffic is visible to organization-defined system monitoring tools and mechanisms.
- **SI-4(11):** Analyze Communications Traffic Anomalies — Analyze outbound communications traffic at the external interfaces to the system and at organization-defined interior points to discover anomalies.
- **SI-4(12):** Automated Organization-Generated Alerts — Alert organization-defined personnel or roles using automated mechanisms when organization-defined indications of compromise or potential compromise occur.
- **SI-4(13):** Analyze Traffic and Event Patterns — Analyze communications traffic and event patterns for the system, develop profiles representing common traffic and event patterns, and use the traffic and event profiles in tuning system-monitoring devices.
- **SI-4(14):** Wireless Intrusion Detection — Employ a wireless intrusion detection system to identify rogue wireless devices and to detect attack attempts and potential compromises or breaches to the system.
- **SI-4(15):** Wireless to Wireline Communications — Employ an intrusion detection system to monitor wireless communications traffic as the traffic passes from wireless to wireline networks.
- **SI-4(16):** Correlate Monitoring Information — Correlate information from monitoring tools and mechanisms employed throughout the system.
- **SI-4(17):** Integrated Situational Awareness — Correlate information from monitoring physical, cyber, and supply chain activities to achieve integrated, organization-wide situational awareness.
- **SI-4(18):** Analyze Traffic and Covert Exfiltration — Analyze outbound communications traffic at external interfaces to the system and at organization-defined interior points to detect covert exfiltration of information.
- **SI-4(19):** Risk for Individuals — Implement organization-defined additional monitoring of individuals who have been identified by organization-defined sources as posing an increased level of risk.
- **SI-4(20):** Privileged Users — Implement organization-defined additional monitoring of privileged users.
- **SI-4(21):** Probationary Periods — Implement organization-defined additional monitoring of individuals during organization-defined probationary period.
- **SI-4(22):** Unauthorized Network Services — Detect network services that have not been authorized or approved by organization-defined authorization or approval processes and take organization-defined action.
- **SI-4(23):** Host-Based Devices — Implement organization-defined host-based monitoring mechanisms at organization-defined system components.
- **SI-4(24):** Indicators of Compromise — Discover, collect, and distribute to organization-defined personnel or roles, indicators of compromise provided by organization-defined sources.
- **SI-4(25):** Optimize Network Traffic Analysis — Provide visibility into network traffic at external and key internal system interfaces to optimize the effectiveness of monitoring devices.

**Related Controls:** AC-2, AC-3, AC-4, AC-8, AC-17, AU-2, AU-6, AU-7, AU-9, AU-12, AU-13, AU-14, CA-7, CM-3, CM-6, CM-8, CM-11, IA-10, IR-4, MA-3, MA-4, PL-9, PM-12, RA-5, RA-10, SC-5, SC-7, SC-18, SC-26, SC-31, SC-35, SC-36, SC-37, SC-43, SI-3, SI-6, SI-7, SR-9, SR-10

**Baselines:** Low, Moderate, High

---

## SI-5: Security Alerts, Advisories, and Directives

Receive system security alerts, advisories, and directives from organization-defined external organizations on an ongoing basis. Generate internal security alerts, advisories, and directives as deemed necessary. Disseminate security alerts, advisories, and directives to organization-defined personnel, roles, and/or organizational elements. Implement security directives in accordance with established time frames, or notify the issuing organization of the degree of noncompliance.

**Key Enhancements:**
- **SI-5(1):** Automated Alerts and Advisories — Broadcast security alert and advisory information throughout the organization using automated mechanisms.

**Related Controls:** PM-15, RA-5, SI-2

**Baselines:** Low, Moderate, High

---

## SI-6: Security and Privacy Function Verification

Verify the correct operation of organization-defined security and privacy functions. Perform the verification at organization-defined system transitional states. Notify organization-defined personnel or roles of failed security and privacy verification tests. Shut the system down, restart the system, or perform organization-defined alternative actions when anomalies are discovered.

**Key Enhancements:**
- **SI-6(1):** Notification of Failed Security Tests — [Withdrawn: Incorporated into SI-6.]
- **SI-6(2):** Automation Support for Distributed Testing — Implement automated mechanisms to support the management of distributed security and privacy function testing.
- **SI-6(3):** Report Verification Results — Report the results of security and privacy function verification to organization-defined personnel or roles.

**Related Controls:** CA-7, CM-4, CM-6, SI-7

**Baselines:** High

---

## SI-7: Software, Firmware, and Information Integrity

Employ integrity verification tools to detect unauthorized changes to organization-defined software, firmware, and information. Take organization-defined actions when unauthorized changes to the software, firmware, and information are detected. Verify the integrity of the boot process of organization-defined system components.

**Key Enhancements:**
- **SI-7(1):** Integrity Checks — Perform an integrity check of organization-defined software, firmware, and information at organization-defined transitional states or security-relevant events.
- **SI-7(2):** Automated Notifications of Integrity Violations — Employ automated tools that provide notification to organization-defined personnel or roles upon discovering discrepancies during integrity verification.
- **SI-7(3):** Centrally Managed Integrity Tools — Employ centrally managed integrity verification tools.
- **SI-7(4):** Tamper-Evident Packaging — [Withdrawn: Incorporated into SR-9.]
- **SI-7(5):** Automated Response to Integrity Violations — Automatically shut the system down, restart the system, or implement organization-defined controls when integrity violations are discovered.
- **SI-7(6):** Cryptographic Protection — Implement cryptographic mechanisms to detect unauthorized changes to software, firmware, and information.
- **SI-7(7):** Integration of Detection and Response — Incorporate the detection of organization-defined security-relevant changes to the system into the organizational incident response capability.
- **SI-7(8):** Auditing Capability for Significant Events — Upon detection of a potential integrity violation, provide the capability to audit the event and initiate the following actions: generate an audit record, alert the current user, alert organization-defined personnel or roles, and take organization-defined other actions.
- **SI-7(9):** Verify Boot Process — Verify the integrity of the boot process of organization-defined system components.
- **SI-7(10):** Protection of Boot Firmware — Implement organization-defined mechanisms to protect the integrity of boot firmware in organization-defined system components.
- **SI-7(12):** Integrity Verification — Require that the integrity of organization-defined user-installed software be verified prior to execution.
- **SI-7(15):** Code Authentication — Implement cryptographic mechanisms to authenticate organization-defined software or firmware components prior to installation.
- **SI-7(16):** Time Limit on Process Execution Without Supervision — Prohibit processes from executing without supervision for more than an organization-defined time period.
- **SI-7(17):** Runtime Application Self-Protection — Implement organization-defined controls for application self-protection at runtime.

**Related Controls:** AC-4, CM-3, CM-7, CM-8, MA-3, MA-4, RA-5, SA-8, SA-9, SA-10, SC-8, SC-12, SC-13, SC-28, SC-37, SI-3, SR-3, SR-4, SR-5, SR-6, SR-9, SR-10, SR-11

**Baselines:** Moderate, High

---

## SI-8: Spam Protection

Employ spam protection mechanisms at system entry and exit points to detect and act on unsolicited messages. Update spam protection mechanisms when new releases are available in accordance with organizational configuration management policy and procedures.

**Key Enhancements:**
- **SI-8(1):** Central Management — [Withdrawn: Incorporated into PL-9.]
- **SI-8(2):** Automatic Updates — Automatically update spam protection mechanisms.
- **SI-8(3):** Continuous Learning Capability — Implement spam protection mechanisms with a learning capability to more effectively identify legitimate communications traffic.

**Related Controls:** PL-9, SC-5, SC-7, SC-38, SI-3, SI-4

**Baselines:** Moderate, High

---

## SI-9: Information Input Restrictions

[Withdrawn: Incorporated into AC-2, AC-3, AC-5, and AC-6.]

**Baselines:** None (not in any baseline)

---

## SI-10: Information Input Validation

Check the validity of organization-defined information inputs.

**Key Enhancements:**
- **SI-10(1):** Manual Override Capability — Provide a manual override capability for input validation of organization-defined information inputs. Restrict the use of the manual override capability to only organization-defined authorized individuals. Audit the use of the manual override capability.
- **SI-10(2):** Review and Resolve Errors — Review and resolve input validation errors within an organization-defined time period.
- **SI-10(3):** Predictive Content Analysis — Employ predictive content analysis to determine if the input to a transaction contains content indicative of anomalous behavior.
- **SI-10(4):** Timing Interactions — Account for timing interactions among system components in determining if invalid inputs lead to adverse system behavior.
- **SI-10(5):** Restrict Inputs to Trusted Sources and Approved Formats — Restrict the use of information inputs to organization-defined trusted sources and/or organization-defined formats.
- **SI-10(6):** Injection Prevention — Prevent untrusted data injections.

**Related Controls:** None

**Baselines:** Moderate, High

---

## SI-11: Error Handling

Generate error messages that provide information necessary for corrective actions without revealing information that could be exploited. Reveal error messages only to organization-defined personnel or roles.

**Key Enhancements:** None defined for SI-11.

**Related Controls:** AU-2, AU-3, SC-31, SI-2, SI-15

**Baselines:** Moderate, High

---

## SI-12: Information Management and Retention

Manage and retain information within the system and information output from the system in accordance with applicable laws, executive orders, directives, regulations, policies, standards, guidelines, and operational requirements.

**Key Enhancements:**
- **SI-12(1):** Limit Personally Identifiable Information Elements — Limit personally identifiable information being processed in the information life cycle to organization-defined elements of personally identifiable information.
- **SI-12(2):** Minimize Personally Identifiable Information in Testing, Training, and Research — Use organization-defined techniques to minimize the use of personally identifiable information for research, testing, or training.
- **SI-12(3):** Information Disposal — Use organization-defined techniques to dispose of, destroy, or erase information following the retention period.

**Related Controls:** AC-16, AU-5, AU-11, CA-2, CA-3, CA-5, CA-6, CA-7, CA-9, CM-5, CM-9, CP-2, IR-8, MP-2, MP-3, MP-4, MP-6, PL-2, PL-4, PM-4, PM-8, PM-9, PS-2, PS-6, PT-2, PT-3, RA-2, RA-3, SA-5, SA-8, SR-2

**Baselines:** Low, Moderate, High

---

## SI-13: Predictable Failure Prevention

Determine mean time to failure (MTTF) for organization-defined system components in specific environments of operation. Provide substitute system components and a means to exchange active and standby components in accordance with the organization-defined MTTF substitution criteria.

**Key Enhancements:**
- **SI-13(1):** Transferring Component Responsibilities — Take organization-defined system components out of service by transferring component responsibilities to substitute components no later than organization-defined fraction or percentage of mean time to failure.
- **SI-13(2):** Time Limit on Process Execution Without Supervision — [Withdrawn: Incorporated into SI-7(16).]
- **SI-13(3):** Manual Transfer Between Components — Manually initiate transfers between active and standby system components when the use of the active component reaches organization-defined percentage of the mean time to failure.
- **SI-13(4):** Standby Component Installation and Notification — If system component failures are detected, ensure that the standby components are successfully and transparently installed within an organization-defined time period and that organization-defined personnel or roles are notified.
- **SI-13(5):** Failover Capability — Provide organization-defined failover capability for the system.

**Related Controls:** CP-2, CP-10, CP-13, MA-2, MA-6, SA-8, SC-6

**Baselines:** None (not in any baseline)

---

## SI-14: Non-Persistence

Implement organization-defined non-persistent system components and services that are initiated in a known state and terminated at organization-defined conditions including end of session of use, at an organization-defined frequency, or after organization-defined time period of non-use.

**Key Enhancements:**
- **SI-14(1):** Refresh from Trusted Sources — Obtain software and data employed during system component and service refreshes from organization-defined trusted sources.
- **SI-14(2):** Non-Persistent Information — Maintain the organization-defined information generated during the non-persistent system component and service lifetime only while actively being used, and delete it when no longer needed.
- **SI-14(3):** Non-Persistence for Selected System Components — Refresh organization-defined software or firmware components at an organization-defined frequency.

**Related Controls:** SC-30, SC-34, SI-21

**Baselines:** None (not in any baseline)

---

## SI-15: Information Output Filtering

Validate information output from organization-defined software programs and/or applications to ensure that the information is consistent with the expected content.

**Key Enhancements:** None defined for SI-15.

**Related Controls:** SI-3, SI-4, SI-11

**Baselines:** None (not in any baseline)

---

## SI-16: Memory Protection

Implement organization-defined controls to protect the system memory from unauthorized code execution.

**Key Enhancements:** None defined for SI-16.

**Related Controls:** AC-25, SC-3, SI-7

**Baselines:** Moderate, High

---

## SI-17: Fail-Safe Procedures

Implement organization-defined fail-safe procedures when organization-defined failure conditions occur.

**Key Enhancements:** None defined for SI-17.

**Related Controls:** CP-12, CP-13, SC-24, SI-13

**Baselines:** None (not in any baseline)

---

## SI-18: Personally Identifiable Information Quality Operations

Check the accuracy, relevance, timeliness, and completeness of personally identifiable information across the information life cycle at an organization-defined frequency. Correct or delete inaccurate or outdated personally identifiable information.

**Key Enhancements:**
- **SI-18(1):** Automation Support — Correct or delete personally identifiable information that is inaccurate or outdated, incorrectly determined regarding impact, or incorrectly de-identified using automated mechanisms.
- **SI-18(2):** Data Tags — Employ data tags to automate the correction or deletion of personally identifiable information across the information life cycle within organizational systems.
- **SI-18(3):** Collection — Collect personally identifiable information directly from the individual to the greatest extent practicable.
- **SI-18(4):** Individual Requests — Correct or delete personally identifiable information upon request by individuals or their designated representatives that the personally identifiable information is inaccurate.
- **SI-18(5):** Notice of Correction or Deletion — Notify organization-defined recipients of personally identifiable information when the personally identifiable information is corrected or deleted.

**Related Controls:** PM-22, PM-24, PT-2, SI-4

**Baselines:** None (not in any baseline)

---

## SI-19: De-Identification

Remove personally identifiable information from datasets at an organization-defined frequency and implement organization-defined de-identification techniques to protect individual privacy.

**Key Enhancements:**
- **SI-19(1):** Collection — De-identify the dataset upon collection by not collecting personally identifiable information.
- **SI-19(2):** Archiving — Prohibit archiving of personally identifiable information elements if those elements in a dataset will not be needed after the dataset is archived.
- **SI-19(3):** Release — Remove personally identifiable information from datasets prior to release if the information in the dataset does not need to be part of the data released.
- **SI-19(4):** Removal, Masking, Encryption, Hashing, or Replacement of Direct Identifiers — Remove, mask, encrypt, hash, or replace direct identifiers in a dataset.
- **SI-19(5):** Statistical Disclosure Control — Manipulate numerical data, contingency tables, and statistical findings so that no individual or organization is identifiable in the results of the disclosure.
- **SI-19(6):** Differential Privacy — Prevent disclosure of personally identifiable information by adding non-deterministic noise to the results of mathematical operations before the results are reported.
- **SI-19(7):** Validated Software — Perform de-identification using validated algorithms and software that is validated to implement the algorithms.
- **SI-19(8):** Motivated Intruder — Perform a motivated intruder test on the de-identified dataset to determine if the de-identification produced a dataset that can be re-identified.

**Related Controls:** MP-6, PM-22, PM-23, PM-24, RA-2, SI-12

**Baselines:** None (not in any baseline)

---

## SI-20: Tainting

Embed data or capabilities in organization-defined systems or system components for the purpose of discovering the unauthorized exfiltration of information and facilitating the tracking and tracing of information.

**Key Enhancements:** None defined for SI-20.

**Related Controls:** AU-13

**Baselines:** None (not in any baseline)

---

## SI-21: Information Refresh

Refresh organization-defined information at an organization-defined frequency or generate the information on demand and delete the information when no longer needed.

**Key Enhancements:** None defined for SI-21.

**Related Controls:** SI-14

**Baselines:** None (not in any baseline)

---

## SI-22: Information Diversity

Employ organization-defined alternative information sources to identify potential information integrity issues in the primary source of information.

**Key Enhancements:** None defined for SI-22.

**Related Controls:** None

**Baselines:** None (not in any baseline)

---

## SI-23: Information Fragmentation

Fragment organization-defined information under organization-defined circumstances based on organization-defined fragmentation methods.

**Key Enhancements:** None defined for SI-23.

**Related Controls:** None

**Baselines:** None (not in any baseline)