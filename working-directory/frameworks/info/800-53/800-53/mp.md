# NIST SP 800-53 Rev 5 — Media Protection (MP) Family

## MP-1: Policy and Procedures

Develop, document, and disseminate a media protection policy and procedures that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance. Review and update the policy and procedures at organization-defined frequencies.

**Key Enhancements:** None defined for MP-1.

**Related Controls:** PM-9, PS-8, SI-12

**Baselines:** Low, Moderate, High

---

## MP-2: Media Access

Restrict access to organization-defined types of digital and/or non-digital media to organization-defined personnel or roles.

**Key Enhancements:**
- **MP-2(1):** Automated Restricted Access — [Withdrawn: Incorporated into MP-4(2).]
- **MP-2(2):** Cryptographic Protection — [Withdrawn: Incorporated into SC-28(1).]

**Related Controls:** AC-19, AU-9, CP-2, CP-9, CP-10, MA-5, MP-4, MP-6, PE-2, PE-3, SC-12, SC-13, SC-34, SI-12

**Baselines:** Low, Moderate, High

---

## MP-3: Media Marking

Mark system media indicating the distribution limitations, handling caveats, and applicable security markings (if any) of the information. Exempt organization-defined types of system media from marking if the media remain within organization-defined controlled areas.

**Key Enhancements:** None defined for MP-3.

**Related Controls:** AC-16, CP-9, MP-5, PE-22, SI-12

**Baselines:** Moderate, High

---

## MP-4: Media Storage

Physically control and securely store organization-defined types of digital and/or non-digital media within organization-defined controlled areas. Protect system media types defined by the organization until the media are destroyed or sanitized using approved equipment, techniques, and procedures.

**Key Enhancements:**
- **MP-4(1):** Cryptographic Protection — [Withdrawn: Incorporated into SC-28(1).]
- **MP-4(2):** Automated Restricted Access — Restrict access to media storage areas and log access attempts and access granted using automated mechanisms.

**Related Controls:** AC-19, CP-2, CP-6, CP-9, CP-10, MP-2, MP-7, PE-3, PL-2, SC-12, SC-13, SC-28, SC-34, SI-12

**Baselines:** Moderate, High

---

## MP-5: Media Transport

Protect and control organization-defined types of system media during transport outside of controlled areas using organization-defined controls. Maintain accountability for system media during transport outside of controlled areas. Document activities associated with the transport of system media. Restrict the activities associated with the transport of system media to authorized personnel.

**Key Enhancements:**
- **MP-5(1):** Protection Outside of Controlled Areas — [Withdrawn: Incorporated into MP-5.]
- **MP-5(2):** Documentation of Activities — [Withdrawn: Incorporated into MP-5.]
- **MP-5(3):** Custodians — Employ an identified custodian throughout the transport of system media outside of controlled areas.
- **MP-5(4):** Cryptographic Protection — Implement cryptographic mechanisms to protect the confidentiality and integrity of information stored on digital media during transport outside of controlled areas.

**Related Controls:** AC-7, AC-19, CP-2, CP-9, MP-3, MP-4, PE-16, PL-2, SC-12, SC-13, SC-28, SC-34

**Baselines:** Moderate, High

---

## MP-6: Media Sanitization

Sanitize organization-defined system media prior to disposal, release out of organizational control, or release for reuse using organization-defined sanitization techniques and procedures. Employ sanitization mechanisms with the strength and integrity commensurate with the security category or classification of the information.

**Key Enhancements:**
- **MP-6(1):** Review, Approve, Track, Document, and Verify — Review, approve, track, document, and verify media sanitization and disposal actions.
- **MP-6(2):** Equipment Testing — Test sanitization equipment and procedures at an organization-defined frequency to ensure correct performance.
- **MP-6(3):** Nondestructive Techniques — Apply nondestructive sanitization techniques to portable storage devices prior to connecting such devices to the system under organization-defined circumstances.
- **MP-6(4):** Controlled Unclassified Information — [Withdrawn: Incorporated into MP-6.]
- **MP-6(5):** Classified Information — [Withdrawn: Incorporated into MP-6.]
- **MP-6(6):** Media Destruction — [Withdrawn: Incorporated into MP-6.]
- **MP-6(7):** Dual Authorization — Enforce dual authorization for the sanitization of organization-defined system media.
- **MP-6(8):** Remote Purging or Wiping of Information — Provide the capability to purge or wipe information from organization-defined systems or system components remotely.

**Related Controls:** AC-3, AC-7, AU-11, MA-2, MA-3, MA-4, MA-5, PM-22, SI-12, SI-18, SI-19, SR-11

**Baselines:** Low, Moderate, High

---

## MP-7: Media Use

Restrict or prohibit the use of organization-defined types of system media on organization-defined systems or system components using organization-defined controls.

**Key Enhancements:**
- **MP-7(1):** Prohibit Use Without Owner — Prohibit the use of portable storage devices in organizational systems when such devices have no identifiable owner.
- **MP-7(2):** Prohibit Use of Sanitization-Resistant Media — Prohibit the use of sanitization-resistant media in organizational systems.

**Related Controls:** AC-19, AC-20, PL-4, PM-12, SC-34, SC-41

**Baselines:** Low, Moderate, High

---

## MP-8: Media Downgrading

Establish an organization-defined system media downgrading process that includes employing downgrading mechanisms with organization-defined strength and integrity. Verify that the system media downgrading process is commensurate with the security category and/or classification level of the information to be removed and the access authorizations of the potential recipients of the downgraded information. Identify organization-defined system media requiring downgrading. Downgrade the identified system media using the established process.

**Key Enhancements:**
- **MP-8(1):** Documentation of Process — Document system media downgrading actions.
- **MP-8(2):** Equipment Testing — Test downgrading equipment and procedures at an organization-defined frequency to ensure correct performance.
- **MP-8(3):** Controlled Unclassified Information — Downgrade system media containing controlled unclassified information prior to public release.
- **MP-8(4):** Classified Information — Downgrade system media containing classified information prior to release to individuals without required access authorizations.

**Related Controls:** None

**Baselines:** None (not in any baseline)