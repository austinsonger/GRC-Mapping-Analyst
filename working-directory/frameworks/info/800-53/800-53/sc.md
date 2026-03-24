# NIST SP 800-53 Rev 5 — System and Communications Protection (SC) Family

## SC-1: Policy and Procedures

Develop, document, and disseminate a system and communications protection policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance. Review and update the policy and procedures at organization-defined frequencies.

**Key Enhancements:** None defined for SC-1.

**Related Controls:** PM-9, PS-8, SA-8, SI-12

**Baselines:** Low, Moderate, High

---

## SC-2: Separation of System and User Functionality

Separate user functionality, including user interface services, from system management functionality. Isolate security functions from nonsecurity functions.

**Key Enhancements:**
- **SC-2(1):** Interfaces for Non-Privileged Users — Prevent the presentation of system management functionality at interfaces to non-privileged users.
- **SC-2(2):** Disassociability — Store state information from applications and software separately.

**Related Controls:** AC-6, SA-4, SA-8, SC-3, SC-7, SC-22, SC-32, SC-39

**Baselines:** Moderate, High

---

## SC-3: Security Function Isolation

Isolate security functions from nonsecurity functions.

**Key Enhancements:**
- **SC-3(1):** Hardware Separation — Employ hardware separation mechanisms to implement security function isolation.
- **SC-3(2):** Access and Flow Control Functions — Isolate security functions enforcing access and information flow control from nonsecurity functions and from other security functions.
- **SC-3(3):** Minimize Nonsecurity Functionality — Minimize the number of nonsecurity functions included within the isolation boundary containing security functions.
- **SC-3(4):** Module Coupling and Cohesiveness — Implement security functions as largely independent modules that maximize internal cohesiveness within modules and minimize coupling between modules.
- **SC-3(5):** Layered Structures — Implement security functions as a layered structure minimizing interactions between layers of the design and avoiding any dependence by lower layers on the functionality or correctness of higher layers.

**Related Controls:** AC-3, AC-6, AC-25, CM-2, CM-4, SA-4, SA-5, SA-8, SA-15, SA-17, SC-2, SC-7, SC-32, SC-39, SI-16

**Baselines:** High

---

## SC-4: Information in Shared System Resources

Prevent unauthorized and unintended information transfer via shared system resources.

**Key Enhancements:**
- **SC-4(1):** Security Levels — [Withdrawn: Incorporated into SC-4.]
- **SC-4(2):** Multilevel or Periods Processing — Prevent unauthorized information transfer via shared resources in accordance with organization-defined procedures when system processing explicitly switches between different information classification levels or security categories.

**Related Controls:** AC-3, AC-4, SA-8

**Baselines:** Moderate, High

---

## SC-5: Denial-of-Service Protection

Protect against or limit the effects of organization-defined types of denial-of-service events by employing organization-defined controls.

**Key Enhancements:**
- **SC-5(1):** Restrict Ability to Attack Other Systems — Restrict the ability of individuals to launch denial-of-service attacks against other systems.
- **SC-5(2):** Capacity, Bandwidth, and Redundancy — Manage capacity, bandwidth, or other redundancy to limit the effects of information flooding denial-of-service attacks.
- **SC-5(3):** Detection and Monitoring — Employ organization-defined monitoring tools to detect indicators of denial-of-service attacks against, or launched from, the system and to monitor organization-defined system resources to determine if sufficient resources exist to prevent effective denial-of-service attacks.

**Related Controls:** CP-2, IR-4, SC-6, SC-7, SC-40

**Baselines:** Low, Moderate, High

---

## SC-6: Resource Availability

Protect the availability of resources by allocating organization-defined resources by priority, quota, or organization-defined controls.

**Key Enhancements:** None defined for SC-6.

**Related Controls:** SC-5

**Baselines:** None (not in any baseline)

---

## SC-7: Boundary Protection

Monitor and control communications at the external managed interfaces to the system and at key internal managed interfaces within the system. Implement subnetworks for publicly accessible system components that are physically or logically separated from internal organizational networks. Connect to external networks or systems only through managed interfaces consisting of boundary protection devices arranged in accordance with an organizational security and privacy architecture.

**Key Enhancements:**
- **SC-7(1):** Physically Separated Subnetworks — [Withdrawn: Incorporated into SC-7.]
- **SC-7(2):** Public Access — [Withdrawn: Incorporated into SC-7.]
- **SC-7(3):** Access Points — Limit the number of external network connections to the system.
- **SC-7(4):** External Telecommunications Services — Implement a managed interface for each external telecommunication service; establish a traffic flow policy for each managed interface; protect the confidentiality and integrity of the information being transmitted across each interface; document each exception to the traffic flow policy with a supporting mission or business need and duration of that need; review exceptions to the traffic flow policy at an organization-defined frequency; and remove traffic flow policy exceptions that are no longer supported by an explicit mission or business need.
- **SC-7(5):** Deny by Default — Allow by Exception — Deny network communications traffic by default and allow network communications traffic by exception at managed interfaces.
- **SC-7(6):** Response to Recognized Failures — [Withdrawn: Incorporated into SC-7(18).]
- **SC-7(7):** Split Tunneling for Remote Devices — Prevent split tunneling for remote devices connecting to organizational systems unless the split tunnel is securely provisioned using organization-defined safeguards.
- **SC-7(8):** Route Traffic to Authenticated Proxy Servers — Route organization-defined internal communications traffic to organization-defined external networks through authenticated proxy servers at managed interfaces.
- **SC-7(9):** Restrict Threatening Outgoing Communications Traffic — Detect and deny outgoing communications traffic posing a threat to external systems and audit the identity of internal users associated with denied communications.
- **SC-7(10):** Prevent Exfiltration — Prevent the unauthorized exfiltration of information.
- **SC-7(11):** Restrict Incoming Communications Traffic — Only allow incoming communications from organization-defined authorized sources to be routed to organization-defined authorized destinations.
- **SC-7(12):** Host-Based Protection — Implement organization-defined host-based boundary protection mechanisms at organization-defined system components.
- **SC-7(13):** Isolation of Security Tools, Mechanisms, and Support Components — Isolate organization-defined information security tools, mechanisms, and support components from other internal system components by implementing physically separate subnetworks with managed interfaces to other components of the system.
- **SC-7(14):** Protect Against Unauthorized Physical Connections — Protect against unauthorized physical connections at organization-defined managed interfaces.
- **SC-7(15):** Networked Privileged Accesses — Route networked, privileged accesses through a dedicated, managed interface for purposes of access control and auditing.
- **SC-7(16):** Prevent Discovery of System Components — Prevent discovery of specific system components composing a managed interface.
- **SC-7(17):** Automated Enforcement of Protocol Formats — Enforce adherence to protocol formats.
- **SC-7(18):** Fail Secure — Prevent systems from entering unsecure states in the event of an operational failure of a boundary protection device.
- **SC-7(19):** Block Communication from Non-Organizationally Configured Hosts — Block inbound and outbound communications traffic between organization-defined communication clients that are independently configured by end users and external service providers.
- **SC-7(20):** Dynamic Isolation and Segregation — Provide the capability to dynamically isolate organization-defined system components from other system components.
- **SC-7(21):** Isolation of System Components — Employ boundary protection mechanisms to isolate organization-defined system components supporting organization-defined missions and/or business functions.
- **SC-7(22):** Separate Subnets for Connecting to Different Security Domains — Implement separate network addresses to connect to systems in different security domains.
- **SC-7(23):** Disable Sender Feedback on Protocol Validation Failure — Disable feedback to senders on protocol format validation failure.
- **SC-7(24):** Personally Identifiable Information — For systems that process personally identifiable information, implement organization-defined boundary protections.
- **SC-7(25):** Unclassified National Security System Connections — Prohibit the direct connection of an unclassified national security system to an external network without the use of organization-defined boundary protection device.
- **SC-7(26):** Classified National Security System Connections — Prohibit the direct connection of a classified national security system to an external network without the use of organization-defined boundary protection device.
- **SC-7(27):** Unclassified Non-National Security System Connections — Prohibit the direct connection of an organization-defined unclassified non-national security system to an external network without the use of organization-defined boundary protection device.
- **SC-7(28):** Connections to Public Networks — Prohibit the direct connection of organization-defined system to a public network.
- **SC-7(29):** Separate Subnets to Isolate Functions — Implement organization-defined physically or logically separate subnets to isolate the organization-defined system components supporting the organization-defined mission/business critical functions.

**Related Controls:** AC-4, AC-17, AC-18, AC-19, AC-20, AU-13, CA-3, CM-2, CM-4, CM-7, CM-10, CP-8, CP-10, IR-4, MA-4, PE-3, PL-8, PM-12, SA-8, SA-17, SC-5, SC-26, SC-32, SC-35, SC-43

**Baselines:** Low, Moderate, High

---

## SC-8: Transmission Confidentiality and Integrity

Protect the confidentiality and/or integrity of transmitted information.

**Key Enhancements:**
- **SC-8(1):** Cryptographic Protection — Implement cryptographic mechanisms to prevent unauthorized disclosure of information and/or detect changes to information during transmission.
- **SC-8(2):** Pre- and Post-Transmission Handling — Maintain the confidentiality and/or integrity of information during preparation for transmission and during reception.
- **SC-8(3):** Cryptographic Protection for Message Externals — Implement cryptographic mechanisms to protect message externals unless otherwise protected by organization-defined alternative physical controls.
- **SC-8(4):** Conceal or Randomize Communications — Implement cryptographic mechanisms to conceal or randomize communication patterns unless otherwise protected by organization-defined alternative physical controls.
- **SC-8(5):** Protected Distribution System — Implement organization-defined protected distribution system to protect organization-defined system during transmission.

**Related Controls:** AC-17, AC-18, AU-10, IA-3, IA-8, IA-9, MA-4, PE-4, SA-4, SA-8, SC-7, SC-16, SC-20, SC-23, SC-28

**Baselines:** Moderate, High

---

## SC-9: Transmission Confidentiality

[Withdrawn: Incorporated into SC-8.]

**Baselines:** None (not in any baseline)

---

## SC-10: Network Disconnect

Terminate the network connection associated with a communications session at the end of the session or after an organization-defined time period of inactivity.

**Key Enhancements:** None defined for SC-10.

**Related Controls:** AC-17, SC-23

**Baselines:** Moderate, High

---

## SC-11: Trusted Path

Provide a organization-defined trusted communications path that is irrefutably distinguishable from other communications paths between the organization-defined security functions of the system and the user.

**Key Enhancements:**
- **SC-11(1):** Irrefutable Communications Path — Provide a trusted communications path that is logically isolated and distinguishable from other paths.

**Related Controls:** AC-16, AC-25, SC-12, SC-23

**Baselines:** None (not in any baseline)

---

## SC-12: Cryptographic Key Establishment and Management

Establish and manage cryptographic keys when cryptography is employed within the system in accordance with organization-defined requirements for key generation, distribution, storage, access, and destruction.

**Key Enhancements:**
- **SC-12(1):** Availability — Maintain availability of information in the event of the loss of cryptographic keys by users.
- **SC-12(2):** Symmetric Keys — Produce, control, and distribute symmetric cryptographic keys using NIST-approved or NSA-approved key management technology and processes.
- **SC-12(3):** Asymmetric Keys — Produce, control, and distribute asymmetric cryptographic keys using organization-defined approved key management technology and processes.
- **SC-12(6):** Physical Control of Keys — Maintain physical control of cryptographic keys when stored information is encrypted by external service providers.

**Related Controls:** AC-17, AU-9, AU-10, CM-3, IA-3, IA-7, IA-13, SA-4, SA-8, SA-9, SC-8, SC-11, SC-13, SC-17, SC-20, SC-37, SC-40, SI-3, SI-7

**Baselines:** Low, Moderate, High

---

## SC-13: Cryptographic Protection

Determine the organization-defined cryptographic uses and implement the organization-defined types of cryptography required for each specified cryptographic use in accordance with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines.

**Key Enhancements:**
- **SC-13(1):** FIPS-Validated Cryptography — [Withdrawn: Incorporated into SC-13.]
- **SC-13(2):** NSA-Approved Cryptography — [Withdrawn: Incorporated into SC-13.]
- **SC-13(3):** Individuals Without Formal Access Approvals — [Withdrawn: Incorporated into SC-13.]
- **SC-13(4):** Digital Signatures — [Withdrawn: Incorporated into SC-13.]

**Related Controls:** AC-2, AC-3, AC-7, AC-17, AC-18, AC-19, AU-9, AU-10, CM-11, CP-9, IA-3, IA-5, IA-7, IA-13, MA-4, MP-2, MP-4, MP-5, SA-4, SA-8, SA-9, SC-8, SC-12, SC-20, SC-23, SC-28, SC-40, SI-3, SI-7

**Baselines:** Low, Moderate, High

---

## SC-14: Public Access Protections

[Withdrawn: Incorporated into AC-2, AC-3, AC-5, AC-6, SI-3, SI-4, SI-5, SI-7, and SI-10.]

**Baselines:** None (not in any baseline)

---

## SC-15: Collaborative Computing Devices and Applications

Prohibit remote activation of collaborative computing devices and applications with the following exceptions: organization-defined exceptions where remote activation is to be allowed. Provide an explicit indication of use to users physically present at the devices.

**Key Enhancements:**
- **SC-15(1):** Physical or Logical Disconnect — Provide organization-defined users with the capability to physically or logically disconnect collaborative computing devices in a manner that supports ease of use.
- **SC-15(2):** Blocking Inbound and Outbound Communications Traffic — [Withdrawn: Incorporated into SC-7.]
- **SC-15(3):** Disabling and Removal in Secure Work Areas — Disable or remove collaborative computing devices and applications from organization-defined systems or system components in organization-defined secure work areas.
- **SC-15(4):** Explicitly Indicate Current Participants — Provide an explicit indication of current participants in organization-defined online meetings and teleconferences.

**Related Controls:** AC-21, SC-42

**Baselines:** Low, Moderate, High

---

## SC-16: Transmission of Security and Privacy Attributes

Associate organization-defined security and privacy attributes with information exchanged between systems and between system components.

**Key Enhancements:**
- **SC-16(1):** Integrity Verification — Verify the integrity of transmitted security and privacy attributes.
- **SC-16(2):** Anti-Spoofing Mechanisms — Implement anti-spoofing mechanisms to prevent adversaries from falsifying the security or privacy attributes indicating the security or privacy policy of an information exchange.
- **SC-16(3):** Cryptographic Mechanisms — Implement cryptographic mechanisms to verify the integrity of security and privacy attributes.

**Related Controls:** AC-3, AC-4, AC-16

**Baselines:** None (not in any baseline)

---

## SC-17: Public Key Infrastructure Certificates

Issue public key certificates under an organization-defined certificate policy or obtain public key certificates from an approved service provider. Include only approved trust anchors in trust stores or certificate stores managed by the organization.

**Key Enhancements:** None defined for SC-17.

**Related Controls:** AU-10, IA-5, SC-12

**Baselines:** Moderate, High

---

## SC-18: Mobile Code

Define acceptable and unacceptable mobile code and mobile code technologies. Authorize, monitor, and control the use of mobile code within the system.

**Key Enhancements:**
- **SC-18(1):** Identify Unacceptable Code and Take Corrective Actions — Identify organization-defined unacceptable mobile code and take organization-defined corrective actions.
- **SC-18(2):** Acquisition, Development, and Use — Verify that the acquisition, development, and use of mobile code to be deployed in the system meets organization-defined mobile code requirements.
- **SC-18(3):** Prevent Downloading and Execution — Prevent the download and execution of organization-defined unacceptable mobile code.
- **SC-18(4):** Prevent Automatic Execution — Prevent the automatic execution of mobile code in organization-defined software applications and enforce organization-defined actions prior to executing the code.
- **SC-18(5):** Allow Execution Only in Confined Environments — Allow execution of permitted mobile code only in confined virtual machine environments.

**Related Controls:** AU-2, AU-12, CM-2, CM-6, SI-3

**Baselines:** Moderate, High

---

## SC-19: Voice over Internet Protocol

[Withdrawn: Technology-specific; addressed by other controls.]

**Baselines:** None (not in any baseline)

---

## SC-20: Secure Name/Address Resolution Service (Authoritative Source)

Provide additional data origin authentication and integrity verification artifacts along with the authoritative name resolution data the system returns in response to external name/address resolution queries. Provide the means to indicate the security status of child zones and (if the child supports secure resolution services) to enable verification of a chain of trust among parent and child domains, when operating as part of a distributed, hierarchical namespace.

**Key Enhancements:**
- **SC-20(1):** Child Subspaces — [Withdrawn: Incorporated into SC-20.]
- **SC-20(2):** Data Origin and Integrity — Provide data origin and integrity protection artifacts for internal name/address resolution queries.

**Related Controls:** AU-10, SC-8, SC-12, SC-13, SC-21, SC-22

**Baselines:** Low, Moderate, High

---

## SC-21: Secure Name/Address Resolution Service (Recursive or Caching Resolver)

Request and perform data origin authentication and data integrity verification on the name/address resolution responses the system receives from authoritative sources.

**Key Enhancements:**
- **SC-21(1):** Data Origin and Integrity — [Withdrawn: Incorporated into SC-21.]

**Related Controls:** SC-20, SC-22

**Baselines:** Low, Moderate, High

---

## SC-22: Architecture and Provisioning for Name/Address Resolution Service

Ensure the systems that collectively provide name/address resolution service for an organization are fault-tolerant and implement internal/external role separation.

**Key Enhancements:** None defined for SC-22.

**Related Controls:** SC-2, SC-20, SC-21, SC-24

**Baselines:** Low, Moderate, High

---

## SC-23: Session Authenticity

Protect the authenticity of communications sessions.

**Key Enhancements:**
- **SC-23(1):** Invalidate Session Identifiers at Logout — Invalidate session identifiers upon user logout or other session termination.
- **SC-23(2):** User-Initiated Logouts and Message Displays — [Withdrawn: Incorporated into AC-12(1).]
- **SC-23(3):** Unique System-Generated Session Identifiers — Generate a unique session identifier for each session with organization-defined randomness requirements and recognize only session identifiers that are system-generated.
- **SC-23(5):** Allowed Certificate Authorities — Only allow the use of organization-defined certificate authorities for verification of the establishment of protected sessions.

**Related Controls:** AU-10, SC-8, SC-10, SC-11

**Baselines:** Moderate, High

---

## SC-24: Fail in Known State

Fail to an organization-defined known system state for organization-defined types of failures on organization-defined system components, preserving organization-defined system state information in failure.

**Key Enhancements:** None defined for SC-24.

**Related Controls:** CP-2, CP-4, CP-10, CP-12, SA-8, SC-7, SC-22, SI-13

**Baselines:** High

---

## SC-25: Thin Nodes

Employ organization-defined processing components with minimal functionality and minimal information storage.

**Key Enhancements:** None defined for SC-25.

**Related Controls:** SC-30, SC-44

**Baselines:** None (not in any baseline)

---

## SC-26: Decoys

Employ organization-defined decoys and/or decoy components within organizational systems to detect adversarial activity and to hinder adversary operations.

**Key Enhancements:**
- **SC-26(1):** Detection of Malicious Code — [Withdrawn: Incorporated into SC-35.]

**Related Controls:** RA-5, SC-7, SC-30, SC-35, SC-44, SI-3, SI-4

**Baselines:** None (not in any baseline)

---

## SC-27: Platform-Independent Applications

Include within organizational systems organization-defined platform-independent applications.

**Key Enhancements:** None defined for SC-27.

**Related Controls:** SC-29

**Baselines:** None (not in any baseline)

---

## SC-28: Protection of Information at Rest

Protect the confidentiality and/or integrity of organization-defined information at rest.

**Key Enhancements:**
- **SC-28(1):** Cryptographic Protection — Implement cryptographic mechanisms to prevent unauthorized disclosure and modification of organization-defined information on organization-defined system components.
- **SC-28(2):** Offline Storage — Remove from online storage and store offline in a secure location organization-defined information.
- **SC-28(3):** Cryptographic Keys — Provide protected storage for cryptographic keys with organization-defined controls.

**Related Controls:** AC-3, AC-4, AC-6, AC-19, CA-7, CM-3, CM-5, CM-6, CP-9, MP-4, MP-5, PE-3, SC-8, SC-12, SC-13, SC-34, SI-3, SI-7, SI-16

**Baselines:** Moderate, High

---

## SC-29: Heterogeneity

Employ a diverse set of information technologies for organization-defined system components in the implementation of the system.

**Key Enhancements:**
- **SC-29(1):** Virtualization Techniques — Employ virtualization techniques to support the deployment of a diversity of operating systems and applications that are changed at an organization-defined frequency.

**Related Controls:** AU-9, PL-8, SC-27, SC-30, SR-3

**Baselines:** None (not in any baseline)

---

## SC-30: Concealment and Misdirection

Employ organization-defined concealment and misdirection techniques for organization-defined systems at organization-defined time periods to confuse and mislead adversaries.

**Key Enhancements:**
- **SC-30(1):** Virtualization Techniques — [Withdrawn: Incorporated into SC-29(1).]
- **SC-30(2):** Randomness — Employ organization-defined techniques to introduce randomness into organizational operations and assets.
- **SC-30(3):** Change Processing and Storage Locations — Change the location of organization-defined processing and/or storage at organization-defined time intervals or at random time intervals.
- **SC-30(4):** Misleading Information — Employ realistic but misleading information in organization-defined system components about its security state or posture.
- **SC-30(5):** Concealment of System Components — Employ organization-defined techniques to hide or conceal organization-defined system components.

**Related Controls:** AC-6, SC-25, SC-26, SC-29, SC-44, SI-14

**Baselines:** None (not in any baseline)

---

## SC-31: Covert Channel Analysis

Perform a covert channel analysis to identify those aspects of communications within the system that are potential avenues for covert storage and timing channels. Estimate the maximum bandwidth of those channels.

**Key Enhancements:**
- **SC-31(1):** Test Covert Channels for Exploitability — Test a subset of the identified covert channels to determine the channels that are exploitable.
- **SC-31(2):** Maximum Bandwidth — Reduce the maximum bandwidth for identified covert storage channels to organization-defined values.
- **SC-31(3):** Measure Bandwidth in Operational Environments — Measure the bandwidth of organization-defined subset of identified covert channels in the operational environment of the system.

**Related Controls:** AC-3, AC-4, SA-8, SI-11

**Baselines:** None (not in any baseline)

---

## SC-32: System Partitioning

Partition the system into organization-defined system components residing in separate physical domains or environments based on organization-defined circumstances for physical separation of components.

**Key Enhancements:**
- **SC-32(1):** Separate Physical Domains for Privileged Functions — Partition privileged functions into separate physical domains.

**Related Controls:** AC-4, AC-6, SA-8, SC-2, SC-3, SC-7, SC-36

**Baselines:** None (not in any baseline)

---

## SC-33: Transmission Preparation Integrity

[Withdrawn: Incorporated into SC-8.]

**Baselines:** None (not in any baseline)

---

## SC-34: Non-Modifiable Executable Programs

For organization-defined system components, load and execute the operating environment from hardware-enforced, read-only media and the organization-defined applications from hardware-enforced, read-only media.

**Key Enhancements:**
- **SC-34(1):** No Writable Storage — Employ organization-defined system components with no writeable storage that is persistent across component restart or power on/off.
- **SC-34(2):** Integrity Protection on Read-Only Media — Protect the integrity of information prior to storage on read-only media and control the media after such information has been recorded onto the media.
- **SC-34(3):** Hardware-Based Protection — [Withdrawn: Incorporated into SC-51.]

**Related Controls:** AC-3, SI-7, SI-14

**Baselines:** None (not in any baseline)

---

## SC-35: External Malicious Code Identification

Include system components that proactively seek to identify malicious websites and/or web-based malicious code.

**Key Enhancements:** None defined for SC-35.

**Related Controls:** SC-7, SC-26, SC-44, SI-3, SI-4

**Baselines:** None (not in any baseline)

---

## SC-36: Distributed Processing and Storage

Distribute organization-defined processing and storage across multiple physical locations.

**Key Enhancements:**
- **SC-36(1):** Polling Techniques — Employ polling techniques to identify potential faults, errors, or compromises to organization-defined distributed processing and storage components.
- **SC-36(2):** Synchronization — Synchronize the following duplicate systems or system components at organization-defined frequency.

**Related Controls:** CP-6, CP-7, PL-8, SC-32

**Baselines:** None (not in any baseline)

---

## SC-37: Out-of-Band Channels

Employ organization-defined out-of-band channels for the physical delivery or electronic transmission of organization-defined information, system components, or devices to organization-defined individuals or systems.

**Key Enhancements:**
- **SC-37(1):** Ensure Delivery and Transmission — Employ organization-defined controls to ensure that only organization-defined individuals or systems receive the organization-defined information, system components, or devices.

**Related Controls:** AC-2, CM-3, CM-5, CM-7, IA-2, IA-4, IA-5, MA-4, SC-12, SI-3, SI-4, SI-7

**Baselines:** None (not in any baseline)

---

## SC-38: Operations Security

Employ organization-defined operations security controls to protect key organizational information throughout the system development life cycle.

**Key Enhancements:** None defined for SC-38.

**Related Controls:** CA-2, CA-7, PL-1, PM-9, PM-12, RA-2, RA-3, RA-5, SC-7, SR-3, SR-7

**Baselines:** None (not in any baseline)

---

## SC-39: Process Isolation

Maintain a separate execution domain for each executing system process.

**Key Enhancements:**
- **SC-39(1):** Hardware Separation — Implement hardware separation mechanisms to facilitate process isolation.
- **SC-39(2):** Separate Execution Domain Per Thread — Maintain a separate execution domain for each thread in organization-defined multi-threaded processing.

**Related Controls:** AC-3, AC-4, AC-6, AC-25, SA-8, SC-2, SC-3, SI-16

**Baselines:** Low, Moderate, High

---

## SC-40: Wireless Link Protection

Protect external and internal organization-defined wireless links from organization-defined types of signal parameter attacks or references to sources for such attacks.

**Key Enhancements:**
- **SC-40(1):** Electromagnetic Interference — Implement cryptographic mechanisms that achieve organization-defined level of protection against the effects of intentional electromagnetic interference.
- **SC-40(2):** Reduce Detection Potential — Implement cryptographic mechanisms to reduce the detection potential of wireless links to organization-defined level of reduction.
- **SC-40(3):** Imitative or Manipulative Communications Deception — Implement cryptographic mechanisms to identify and reject wireless transmissions that are deliberate attempts to achieve imitative or manipulative communications deception based on signal parameters.
- **SC-40(4):** Signal Parameter Identification — Implement cryptographic mechanisms to prevent the identification of organization-defined wireless transmitters by using the transmitter signal parameters.

**Related Controls:** AC-18, SC-5

**Baselines:** None (not in any baseline)

---

## SC-41: Port and I/O Device Access

Physically or logically disable or remove organization-defined connection ports or input/output devices on organization-defined systems or system components.

**Key Enhancements:** None defined for SC-41.

**Related Controls:** AC-20, MP-7

**Baselines:** None (not in any baseline)

---

## SC-42: Sensor Capability and Data

Prohibit the use of devices possessing organization-defined environmental sensing capabilities in organization-defined facilities, areas, or systems, or prohibit the remote activation of environmental sensing capabilities on organizational systems or system components with the following exceptions: organization-defined exceptions where remote activation of sensors is allowed.

**Key Enhancements:**
- **SC-42(1):** Reporting to Authorized Individuals or Roles — Verify that the system is configured so that data or information collected by organization-defined sensors is only reported to authorized individuals or roles.
- **SC-42(2):** Authorized Use — Employ organization-defined measures so that data or information collected by organization-defined sensors is only used for authorized purposes.
- **SC-42(3):** Prohibit Use of Devices — Prohibit the use of devices possessing organization-defined sensing capabilities in organization-defined facilities, areas, or systems.

**Related Controls:** SC-15

**Baselines:** None (not in any baseline)

---

## SC-43: Usage Restrictions

Establish usage restrictions and implementation guidelines for organization-defined system components and authorize, monitor, and control the use of such components within the system.

**Key Enhancements:** None defined for SC-43.

**Related Controls:** AC-18, AC-19, CM-6, SC-7, SC-18

**Baselines:** None (not in any baseline)

---

## SC-44: Detonation Chambers

Employ a detonation chamber capability within organization-defined system, system component, or location.

**Key Enhancements:** None defined for SC-44.

**Related Controls:** SC-7, SC-18, SC-25, SC-26, SC-30, SC-35, SC-39, SI-3, SI-7

**Baselines:** None (not in any baseline)

---

## SC-45: System Time Synchronization

Synchronize system clocks within and between systems and system components.

**Key Enhancements:**
- **SC-45(1):** Synchronization with Authoritative Time Source — Compare the internal system clocks at an organization-defined frequency with an organization-defined authoritative time source.
- **SC-45(2):** Secondary Authoritative Time Source — Identify a secondary authoritative time source that is in a different geographic region than the primary authoritative time source.

**Related Controls:** AC-3, AU-8, IA-2, IA-8

**Baselines:** None (not in any baseline)

---

## SC-46: Cross Domain Policy Enforcement

Implement a policy enforcement mechanism between the interconnected security domains.

**Key Enhancements:** None defined for SC-46.

**Related Controls:** AC-4, SC-7

**Baselines:** None (not in any baseline)

---

## SC-47: Alternate Communications Paths

Establish organization-defined alternate communications paths for system operations organizational command and control.

**Key Enhancements:** None defined for SC-47.

**Related Controls:** CP-2, CP-8

**Baselines:** None (not in any baseline)

---

## SC-48: Sensor Relocation

Relocate organization-defined sensors and monitoring capabilities to organization-defined locations under organization-defined conditions or circumstances.

**Key Enhancements:**
- **SC-48(1):** Dynamic Relocation of Sensors or Monitoring Capabilities — Dynamically relocate organization-defined sensors and monitoring capabilities to organization-defined locations under organization-defined conditions or circumstances.

**Related Controls:** AU-2, SC-7, SI-4

**Baselines:** None (not in any baseline)

---

## SC-49: Hardware-Enforced Separation and Policy Enforcement

Implement hardware-enforced separation and policy enforcement mechanisms between organization-defined security domains.

**Key Enhancements:** None defined for SC-49.

**Related Controls:** AC-4, SA-8, SC-50

**Baselines:** None (not in any baseline)

---

## SC-50: Software-Enforced Separation and Policy Enforcement

Implement software-enforced separation and policy enforcement mechanisms between organization-defined security domains.

**Key Enhancements:** None defined for SC-50.

**Related Controls:** AC-3, AC-4, SA-8, SC-2, SC-3, SC-49

**Baselines:** None (not in any baseline)

---

## SC-51: Hardware-Based Protection

Implement hardware-based, write-protect mechanisms for organization-defined system firmware components and implement specific procedures for organization-defined authorized individuals to manually disable hardware write-protect for firmware modifications and re-enable the write-protect prior to returning to operational mode.

**Key Enhancements:** None defined for SC-51.

**Related Controls:** None

**Baselines:** None (not in any baseline)