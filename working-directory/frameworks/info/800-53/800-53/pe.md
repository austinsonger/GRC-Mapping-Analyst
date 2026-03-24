# NIST SP 800-53 Rev 5 — Physical and Environmental Protection (PE) Family

## PE-1: Policy and Procedures

Develop, document, and disseminate a physical and environmental protection policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance. Review and update the policy and procedures at organization-defined frequencies.

**Key Enhancements:** None defined for PE-1.

**Related Controls:** AT-3, PM-9, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## PE-2: Physical Access Authorizations

Develop, approve, and maintain a list of individuals with authorized access to the facility where the system resides. Issue authorization credentials for facility access. Review the access list detailing authorized facility access by individuals at an organization-defined frequency. Remove individuals from the facility access list when access is no longer required.

**Key Enhancements:**
- **PE-2(1):** Access by Position or Role — Authorize physical access to the facility where the system resides based on position or role.
- **PE-2(2):** Two Forms of Identification — Require two forms of identification from organization-defined list of acceptable forms of identification for visitor access to the facility.
- **PE-2(3):** Restrict Unescorted Access — Restrict unescorted access to the facility where the system resides to personnel with organization-defined security clearances, formal access authorizations, or organization-defined credentials.

**Related Controls:** AT-3, AU-9, IA-4, MA-5, MP-2, PE-3, PE-4, PE-5, PE-8, PM-12, PS-3, PS-4, PS-5, PS-6

**Baselines:** Low, Moderate, High

---

## PE-3: Physical Access Control

Enforce physical access authorizations at organization-defined entry and exit points to the facility where the system resides by verifying individual access authorizations before granting access to the facility and controlling ingress and egress to the facility using organization-defined physical access control systems/devices or guards. Maintain physical access audit logs for organization-defined entry or exit points. Control access to areas within the facility officially designated as publicly accessible by employing organization-defined controls. Escort visitors and control visitor activity at organization-defined circumstances. Secure keys, combinations, and other physical access devices. Inventory physical access devices at an organization-defined frequency. Change combinations and keys at an organization-defined frequency and/or when keys are lost, combinations are compromised, or when individuals possessing the keys or combinations are transferred or terminated.

**Key Enhancements:**
- **PE-3(1):** System Access — Enforce physical access authorizations to the system in addition to the physical access controls for the facility.
- **PE-3(2):** Facility and Systems — Perform security checks at the physical perimeter of the facility or system for exfiltration of information or removal of system components at organization-defined frequency.
- **PE-3(3):** Continuous Guards — Employ guards to control organization-defined physical access points to the facility where the system resides 24 hours per day, 7 days per week.
- **PE-3(4):** Lockable Casings — Use lockable physical casings to protect organization-defined system components from unauthorized physical access.
- **PE-3(5):** Tamper Protection — Employ organization-defined anti-tamper technologies to detect and/or prevent physical tampering or alteration of organization-defined hardware components within the system.
- **PE-3(6):** Facility Penetration Testing — Employ organization-defined frequency facility penetration testing for organization-defined elements of the physical security of the facility.
- **PE-3(7):** Physical Barriers — Limit uncontrolled physical access using physical barriers.
- **PE-3(8):** Access Control Vestibules — Employ access control vestibules at organization-defined locations within the facility.

**Related Controls:** AT-3, AU-2, AU-6, AU-9, AU-13, CP-10, IA-3, IA-8, MA-5, MP-2, MP-4, PE-2, PE-4, PE-5, PE-8, PS-2, PS-3, PS-6, PS-7, RA-3, SC-28, SI-4, SR-3

**Baselines:** Low, Moderate, High

---

## PE-4: Access Control for Transmission

Control physical access to organization-defined system distribution and transmission lines within organizational facilities using organization-defined security controls.

**Key Enhancements:** None defined for PE-4.

**Related Controls:** AT-3, IA-4, MP-2, MP-4, PE-2, PE-3, PE-5, PE-9, SC-7, SC-8

**Baselines:** Moderate, High

---

## PE-5: Access Control for Output Devices

Control physical access to output from organization-defined output devices to prevent unauthorized individuals from obtaining the output.

**Key Enhancements:**
- **PE-5(1):** Access to Output by Authorized Individuals — [Withdrawn: Incorporated into PE-5.]
- **PE-5(2):** Link to Individual Identity — Link individual identity to receipt of output from output devices.
- **PE-5(3):** Marking Output Devices — Mark organization-defined system output devices indicating the appropriate security marking of the information permitted to be output from the device.

**Related Controls:** PE-2, PE-3, PE-4, PE-18

**Baselines:** Moderate, High

---

## PE-6: Monitoring Physical Access

Monitor physical access to the facility where the system resides to detect and respond to physical security incidents. Review physical access logs at an organization-defined frequency and upon occurrence of organization-defined events or potential indications of events. Coordinate results of reviews and investigations with the organizational incident response capability.

**Key Enhancements:**
- **PE-6(1):** Intrusion Alarms and Surveillance Equipment — Monitor physical access to the facility where the system resides using physical intrusion alarms and surveillance equipment.
- **PE-6(2):** Automated Intrusion Recognition and Responses — Recognize organization-defined classes or types of intrusions and initiate organization-defined response actions using automated mechanisms.
- **PE-6(3):** Video Surveillance — Employ video surveillance of organization-defined operational areas and retain video recordings for an organization-defined time period.
- **PE-6(4):** Monitoring Physical Access to Systems — Monitor physical access to the system in addition to the physical access monitoring of the facility.

**Related Controls:** AU-2, AU-6, AU-9, AU-12, CA-7, CP-10, IR-4, IR-8

**Baselines:** Low, Moderate, High

---

## PE-7: Visitor Control

[Withdrawn: Incorporated into PE-2 and PE-3.]

**Baselines:** None (not in any baseline)

---

## PE-8: Visitor Access Records

Maintain visitor access records to the facility where the system resides for an organization-defined time period. Review visitor access records at an organization-defined frequency.

**Key Enhancements:**
- **PE-8(1):** Automated Records Maintenance and Review — Maintain and review visitor access records using automated mechanisms.
- **PE-8(2):** Physical Access Records — [Withdrawn: Incorporated into PE-2.]
- **PE-8(3):** Limit Personally Identifiable Information Elements — Limit personally identifiable information contained in visitor access records to the organization-defined elements.

**Related Controls:** PE-2, PE-3, PE-6

**Baselines:** Low, Moderate, High

---

## PE-9: Power Equipment and Cabling

Protect power equipment and power cabling for the system from damage and destruction.

**Key Enhancements:**
- **PE-9(1):** Redundant Cabling — Employ redundant power cabling paths that are physically separated by organization-defined distance.
- **PE-9(2):** Automatic Voltage Controls — Employ automatic voltage controls for organization-defined critical system components.

**Related Controls:** PE-4

**Baselines:** Moderate, High

---

## PE-10: Emergency Shutoff

Provide the capability of shutting off power to organization-defined system components or the system in emergency situations. Place emergency shutoff switches or devices in an organization-defined location by system or system component to facilitate access for authorized personnel. Protect emergency power shutoff capability from unauthorized activation.

**Key Enhancements:**
- **PE-10(1):** Accidental and Unauthorized Activation — [Withdrawn: Incorporated into PE-10.]

**Related Controls:** PE-15

**Baselines:** Moderate, High

---

## PE-11: Emergency Power

Provide an uninterruptible power supply to facilitate an orderly shutdown of the system in the event of a primary power source loss.

**Key Enhancements:**
- **PE-11(1):** Alternate Power Supply — Permanent — Provide an alternate power supply for the system that is self-contained and not reliant on external power generation.
- **PE-11(2):** Alternate Power Supply — Self-Contained — Provide an alternate power supply for the system that is activated without loss of information or information system capability and that can maintain the system in an operational state for an organization-defined time period.

**Related Controls:** AT-3, CP-2, CP-7

**Baselines:** Moderate, High

---

## PE-12: Emergency Lighting

Employ and maintain automatic emergency lighting for the system that activates in the event of a power outage or disruption and that covers emergency exits and evacuation routes within the facility.

**Key Enhancements:**
- **PE-12(1):** Essential Mission and Business Functions — Provide emergency lighting for all areas within the facility supporting essential mission and business functions.

**Related Controls:** CP-2, CP-7

**Baselines:** Low, Moderate, High

---

## PE-13: Fire Protection

Employ and maintain fire detection and suppression systems for the system that are supported by an independent energy source.

**Key Enhancements:**
- **PE-13(1):** Detection Systems — Automatic Activation and Notification — Employ fire detection systems that activate automatically and notify organization-defined personnel or roles and organization-defined emergency responders in the event of a fire.
- **PE-13(2):** Suppression Systems — Automatic Activation and Notification — Employ fire suppression systems that activate automatically and notify organization-defined personnel or roles and organization-defined emergency responders.
- **PE-13(3):** Automatic Fire Suppression — [Withdrawn: Incorporated into PE-13(2).]
- **PE-13(4):** Inspections — Ensure that the facility undergoes organization-defined frequency fire protection inspections by authorized and qualified inspectors and that identified deficiencies are resolved within organization-defined time period.

**Related Controls:** AT-3

**Baselines:** Low, Moderate, High

---

## PE-14: Environmental Controls

Maintain organization-defined environmental control levels within the facility where the system resides. Monitor environmental control levels at an organization-defined frequency.

**Key Enhancements:**
- **PE-14(1):** Automatic Controls — Employ automated environmental controls in the facility to prevent fluctuations potentially harmful to the system.
- **PE-14(2):** Monitoring with Alarms and Notifications — Employ environmental monitoring that provides an alarm or notification of changes potentially harmful to personnel or equipment to organization-defined personnel or roles.

**Related Controls:** AT-3, CP-2

**Baselines:** Low, Moderate, High

---

## PE-15: Water Damage Protection

Protect the system from damage resulting from water leakage by providing master shutoff or isolation valves that are accessible, working properly, and known to key personnel.

**Key Enhancements:**
- **PE-15(1):** Automation Support — Detect the presence of water near the system and alert organization-defined personnel or roles using automated mechanisms.

**Related Controls:** AT-3, PE-10

**Baselines:** Low, Moderate, High

---

## PE-16: Delivery and Removal

Authorize and control organization-defined types of system components entering and exiting the facility. Maintain records of the system components.

**Key Enhancements:**
- **PE-16(1):** Alarming — Employ an alarming mechanism to detect unauthorized exfiltration of organization-defined system components from the facility.

**Related Controls:** CM-3, CM-8, MA-2, MA-3, MP-5, PE-20, SR-2, SR-3, SR-4, SR-6

**Baselines:** Low, Moderate, High

---

## PE-17: Alternate Work Site

Determine and document the organization-defined alternate work sites allowed for use by employees. Employ organization-defined controls at alternate work sites. Assess the effectiveness of controls at alternate work sites.

**Key Enhancements:** None defined for PE-17.

**Related Controls:** AC-17, AC-18, CP-7

**Baselines:** Moderate, High

---

## PE-18: Location of System Components

Position system components within the facility to minimize potential damage from organization-defined physical and environmental hazards and to minimize the opportunity for unauthorized access.

**Key Enhancements:**
- **PE-18(1):** Facility Site — Plan the location or site of the facility where the system resides considering physical and environmental hazards and for existing facilities, consider the physical and environmental hazards in the organizational risk management strategy.

**Related Controls:** CP-2, PE-5, PE-19, PE-20, RA-3

**Baselines:** High

---

## PE-19: Information Leakage

Protect the system from information leakage due to electromagnetic signals emanations.

**Key Enhancements:**
- **PE-19(1):** National Emissions and TEMPEST Policies and Procedures — Ensure that system components, associated data communications, and networks are protected in accordance with national emissions and TEMPEST policies and procedures based on the security category or classification of the information.

**Related Controls:** AC-18, PE-18, PE-20

**Baselines:** None (not in any baseline)

---

## PE-20: Asset Monitoring and Tracking

Employ organization-defined asset location technologies to track and monitor the location and movement of organization-defined assets within organization-defined controlled areas.

**Key Enhancements:** None defined for PE-20.

**Related Controls:** CM-8, PE-16, PM-8

**Baselines:** None (not in any baseline)

---

## PE-21: Electromagnetic Pulse Protection

Employ organization-defined protective measures against electromagnetic pulse damage for organization-defined systems and system components.

**Key Enhancements:** None defined for PE-21.

**Related Controls:** PE-18, PE-19

**Baselines:** None (not in any baseline)

---

## PE-22: Component Marking

Mark organization-defined system hardware components indicating the impact level or classification level of the information permitted to be processed, stored, or transmitted by the hardware component.

**Key Enhancements:** None defined for PE-22.

**Related Controls:** AC-3, AC-4, AC-16, MP-3

**Baselines:** None (not in any baseline)

---

## PE-23: Facility Location

Plan the location or site of the facility where the system resides considering physical and environmental hazards. For existing facilities, consider the physical and environmental hazards in the organizational risk management strategy.

**Key Enhancements:** None defined for PE-23.

**Related Controls:** CP-2, PE-18, PE-19, PM-8, PM-9, RA-3

**Baselines:** None (not in any baseline)