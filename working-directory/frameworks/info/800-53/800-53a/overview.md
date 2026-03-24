# NIST SP 800-53A Rev 5 — Assessing Security and Privacy Controls in Information Systems and Organizations

## Purpose

NIST Special Publication 800-53A Revision 5 provides a comprehensive set of **assessment procedures** for the security and privacy controls defined in SP 800-53 Rev 5. It gives organizations and assessors a standardized, repeatable methodology for evaluating whether controls are:

- **Implemented correctly** — the control is in place as designed
- **Operating as intended** — the control functions as expected during normal operations
- **Producing the desired outcome** — the control achieves the security or privacy objective it was designed to meet

The publication supports all phases of the NIST Risk Management Framework (RMF), particularly Step 4 (Assess) as defined in SP 800-37, but is also valuable during continuous monitoring (Step 7).

## Relationship to SP 800-53

SP 800-53A Rev 5 is the **companion assessment guide** to SP 800-53 Rev 5. The relationship is direct and one-to-one:

- Every control and control enhancement in SP 800-53 Rev 5 has a corresponding **assessment procedure** in SP 800-53A Rev 5
- The assessment procedures are organized using the same **20 control families** as SP 800-53
- When SP 800-53 is updated, SP 800-53A is updated in parallel to maintain alignment
- SP 800-53A translates each control's requirements into specific, testable **assessment objectives** (determination statements)

Together, SP 800-53 defines *what* must be done, and SP 800-53A defines *how to verify* it was done.

## Assessment Methods

SP 800-53A defines **three assessment methods**, each suited to different types of evidence:

### 1. Examine

The process of reviewing, inspecting, observing, studying, or analyzing assessment objects such as:

- **Specifications:** Policies, procedures, plans, system security plans (SSPs), system designs, architecture diagrams, configuration documentation
- **Mechanisms:** Hardware, software, or firmware safeguards; technical control implementations
- **Activities:** System operations, administration, management, and exercises

Examine is used to evaluate documentation, configuration settings, system architecture, and other artifacts to determine if controls are properly defined and implemented.

### 2. Interview

The process of conducting discussions with individuals or groups within the organization to facilitate understanding, achieve clarification, or obtain evidence. Interview subjects include:

- System owners and authorizing officials
- Information system security officers (ISSOs)
- System administrators and network administrators
- System developers and engineers
- Security control assessors
- End users and other personnel with relevant knowledge

Interviews help assessors understand how controls are implemented in practice and identify gaps between documented procedures and actual operations.

### 3. Test

The process of exercising assessment objects under specified conditions to compare actual behavior with expected behavior. Testing includes:

- **Functional testing:** Verifying that a control mechanism works as documented
- **Penetration testing:** Attempting to circumvent or defeat security controls
- **Regression testing:** Verifying that changes have not degraded control effectiveness
- **Automated scanning:** Using tools to evaluate configurations, vulnerabilities, and compliance

Testing provides the most direct evidence of control effectiveness but is also the most resource-intensive method.

## Assessment Objectives

Each control in SP 800-53A is broken down into one or more **assessment objectives**, which are further decomposed into **determination statements**. These represent the granular, testable conditions that must be satisfied for the control to be considered effective.

Example structure for AC-2 (Account Management):

```
Control: AC-2 Account Management
  Assessment Objective: AC-02
    Determination Statements:
      AC-02(a)[01] - organization-level account types are identified and defined
      AC-02(a)[02] - conditions for group and role membership are defined
      AC-02(b)     - account managers are assigned
      AC-02(c)     - requirements for group and role membership are established
      ... (continues for each sub-part of the control)
```

For each determination statement, the assessor selects appropriate assessment methods (examine, interview, test) and identifies specific assessment objects.

### Assessment Objects

Each assessment procedure specifies potential objects to examine, individuals to interview, and mechanisms to test. These are provided as **suggested starting points**, not exhaustive requirements. Examples:

- **Examine objects:** Access control policies, account management procedures, system security plans, audit logs, configuration settings, system design documentation
- **Interview subjects:** System administrators, security officers, account managers, system owners
- **Test mechanisms:** Account management functions, access enforcement mechanisms, audit logging capabilities

## Depth and Coverage Attributes

Assessors tailor assessment rigor using two key attributes:

### Depth

Depth characterizes the level of detail in the assessment:

| Depth Level | Description | Typical Use |
|-------------|-------------|-------------|
| **Basic** | High-level review focused on the control's existence and general implementation | Low-impact systems, initial assessments |
| **Focused** | More detailed analysis of control mechanisms, implementation specifics, and operational procedures | Moderate-impact systems, standard assessments |
| **Comprehensive** | In-depth, thorough examination including analysis of implementation details, dependencies, and interactions | High-impact systems, critical controls, high-risk areas |

### Coverage

Coverage characterizes the scope or breadth of the assessment:

| Coverage Level | Description | Typical Use |
|----------------|-------------|-------------|
| **Basic** | Assessment of a representative sample of assessment objects | Low-impact systems, large populations of objects |
| **Focused** | Assessment of a larger, more targeted sample of assessment objects | Moderate-impact systems, targeted risk areas |
| **Comprehensive** | Assessment of all or nearly all assessment objects | High-impact systems, critical controls |

The combination of depth and coverage determines the overall **rigor** of the assessment. For example, a high-impact system might require comprehensive depth and comprehensive coverage for critical controls, while a low-impact system might use basic depth and basic coverage.

## How Third-Party Assessment Organizations (3PAOs) Use SP 800-53A

Third-Party Assessment Organizations, particularly those operating under **FedRAMP** and **CMMC**, rely heavily on SP 800-53A:

### FedRAMP Assessments

- 3PAOs accredited by the FedRAMP Program Management Office (PMO) use SP 800-53A as the **foundational methodology** for assessing cloud service providers (CSPs)
- The FedRAMP Security Assessment Framework (SAF) builds upon SP 800-53A procedures
- 3PAOs create a **Security Assessment Plan (SAP)** that maps SP 800-53A procedures to the specific FedRAMP baseline (Low, Moderate, or High)
- The **Security Assessment Report (SAR)** documents findings using the structure and terminology from SP 800-53A
- FedRAMP may specify additional depth/coverage requirements beyond what SP 800-53A recommends as a minimum

### Assessment Workflow for 3PAOs

1. **Plan:** Develop the SAP identifying scope, methodology, depth, coverage, and assessment schedule based on SP 800-53A
2. **Execute:** Conduct assessments using examine, interview, and test methods for each applicable control
3. **Evaluate:** Determine control effectiveness for each assessment objective — findings are categorized as:
   - **Satisfied:** The control is implemented correctly, operating as intended, and producing the desired outcome
   - **Other Than Satisfied:** The control has deficiencies — these are documented with risk exposure details
4. **Report:** Document results in the SAR, including findings, evidence, and risk determinations
5. **Recommend:** Provide a risk-based recommendation to the Authorizing Official (AO)

### Key Considerations for Assessors

- **Independence:** Assessors must maintain appropriate independence from the system being assessed
- **Evidence:** All findings must be supported by objective evidence collected through the three assessment methods
- **Sampling:** When assessing large populations (e.g., thousands of user accounts), assessors use statistical or judgmental sampling with documented rationale
- **Reuse of evidence:** Previous assessment results may be reused if the control environment has not changed, reducing assessment burden
- **Continuous monitoring:** SP 800-53A procedures support ongoing assessment as part of continuous monitoring programs, not just point-in-time assessments

## References

- NIST SP 800-53A Rev 5: https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final
- NIST SP 800-53 Rev 5: https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final
- NIST SP 800-37 Rev 2: Risk Management Framework
- FedRAMP Security Assessment Framework: https://www.fedramp.gov/
