# Gemini CLI Extension and MCP Tools

<cite>
**Referenced Files in This Document**
- [package.json](file://gemini-extension/package.json)
- [tsconfig.json](file://gemini-extension/tsconfig.json)
- [src/index.ts](file://gemini-extension/src/index.ts)
- [gemini-extension.json](file://gemini-extension/gemini-extension.json)
- [GEMINI.md](file://gemini-extension/GEMINI.md)
- [GEMINI.md](file://GEMINI.md)
- [commands/strm/init.toml](file://gemini-extension/commands/strm/init.toml)
- [commands/strm/map.toml](file://gemini-extension/commands/strm/map.toml)
- [commands/strm/gap-analysis.toml](file://gemini-extension/commands/strm/gap-analysis.toml)
- [commands/strm/validate.toml](file://gemini-extension/commands/strm/validate.toml)
- [scripts/package.mjs](file://gemini-extension/scripts/package.mjs)
- [scripts/bin/strm-init-mapping.mjs](file://scripts/bin/strm-init-mapping.mjs)
- [scripts/bin/strm-validate-csv.mjs](file://scripts/bin/strm-validate-csv.mjs)
- [scripts/lib/strm-core.mjs](file://scripts/lib/strm-core.mjs)
- [README.md](file://README.md)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Security and Production Deployment](#security-and-production-deployment)
10. [Conclusion](#conclusion)

## Introduction
This document describes the Gemini CLI Extension and Model Context Protocol (MCP) Tools that power deterministic STRM (Set-Theory Relationship Mapping) operations for cybersecurity frameworks. It explains how the MCP server exposes tools for computing strength scores, generating filenames, building CSV headers, validating rows, discovering inputs, and checking for existing mappings. It also documents the TypeScript-based processing engine, the slash command integration via prompt-driven TOML commands, and the build and distribution pipeline. Guidance is included for installation, configuration, server initialization, troubleshooting, and secure, production-ready deployment.

## Project Structure
The Gemini extension is organized around a TypeScript MCP server, a companion Markdown context file, TOML-based slash command prompts, and a shared TypeScript/JavaScript core library used by both the MCP server and standalone CLI scripts.

```mermaid
graph TB
subgraph "gemini-extension/"
A_pkg["package.json"]
A_ts["tsconfig.json"]
A_src["src/index.ts"]
A_manifest["gemini-extension.json"]
A_readme["GEMINI.md"]
A_cmd_init["commands/strm/init.toml"]
A_cmd_map["commands/strm/map.toml"]
A_cmd_gap["commands/strm/gap-analysis.toml"]
A_cmd_val["commands/strm/validate.toml"]
A_scripts["scripts/package.mjs"]
end
subgraph "scripts/"
S_bin_init["bin/strm-init-mapping.mjs"]
S_bin_val["bin/strm-validate-csv.mjs"]
S_lib_core["lib/strm-core.mjs"]
end
A_src --> S_lib_core
A_cmd_map --> S_bin_init
A_cmd_map --> S_bin_val
A_cmd_init --> S_bin_init
A_cmd_val --> S_bin_val
A_cmd_gap --> S_bin_init
A_cmd_gap --> S_bin_val
A_scripts --> A_manifest
A_scripts --> A_pkg
A_scripts --> A_ts
A_scripts --> A_src
```

**Diagram sources**
- [src/index.ts:1-522](file://gemini-extension/src/index.ts#L1-L522)
- [gemini-extension.json:1-13](file://gemini-extension/gemini-extension.json#L1-L13)
- [GEMINI.md:1-91](file://gemini-extension/GEMINI.md#L1-L91)
- [commands/strm/map.toml:1-20](file://gemini-extension/commands/strm/map.toml#L1-L20)
- [commands/strm/init.toml:1-14](file://gemini-extension/commands/strm/init.toml#L1-L14)
- [commands/strm/gap-analysis.toml:1-19](file://gemini-extension/commands/strm/gap-analysis.toml#L1-L19)
- [commands/strm/validate.toml:1-18](file://gemini-extension/commands/strm/validate.toml#L1-L18)
- [scripts/package.mjs:1-106](file://gemini-extension/scripts/package.mjs#L1-L106)
- [scripts/bin/strm-init-mapping.mjs:1-58](file://scripts/bin/strm-init-mapping.mjs#L1-L58)
- [scripts/bin/strm-validate-csv.mjs:1-77](file://scripts/bin/strm-validate-csv.mjs#L1-L77)
- [scripts/lib/strm-core.mjs:1-343](file://scripts/lib/strm-core.mjs#L1-L343)

**Section sources**
- [package.json:1-26](file://gemini-extension/package.json#L1-L26)
- [tsconfig.json:1-18](file://gemini-extension/tsconfig.json#L1-L18)
- [src/index.ts:1-522](file://gemini-extension/src/index.ts#L1-L522)
- [gemini-extension.json:1-13](file://gemini-extension/gemini-extension.json#L1-L13)
- [GEMINI.md:1-91](file://gemini-extension/GEMINI.md#L1-L91)
- [GEMINI.md:1-224](file://GEMINI.md#L1-L224)

## Core Components
- MCP Server: Implements six deterministic tools for STRM operations and runs over STDIO using the Model Context Protocol SDK.
- TypeScript Processing Engine: Shared utilities for CSV parsing, validation, filename generation, and directory scanning used by both the MCP server and CLI scripts.
- Slash Command Prompts: TOML files that define Gemini CLI slash commands (/strm:init, /strm:map, /strm:gap-analysis, /strm:validate) with step-by-step workflows.
- Build and Distribution: TypeScript compilation, source maps, declarations, and packaging script for multi-platform releases.

Key responsibilities:
- Deterministic STRM scoring and validation
- File discovery and naming consistency
- CSV header construction and row validation
- Cross-platform packaging for the extension

**Section sources**
- [src/index.ts:263-522](file://gemini-extension/src/index.ts#L263-L522)
- [scripts/lib/strm-core.mjs:35-265](file://scripts/lib/strm-core.mjs#L35-L265)
- [commands/strm/map.toml:1-20](file://gemini-extension/commands/strm/map.toml#L1-L20)
- [commands/strm/init.toml:1-14](file://gemini-extension/commands/strm/init.toml#L1-L14)
- [commands/strm/gap-analysis.toml:1-19](file://gemini-extension/commands/strm/gap-analysis.toml#L1-L19)
- [commands/strm/validate.toml:1-18](file://gemini-extension/commands/strm/validate.toml#L1-L18)
- [scripts/package.mjs:47-100](file://gemini-extension/scripts/package.mjs#L47-L100)

## Architecture Overview
The MCP server initializes, registers tools, and listens over STDIO. The extension manifest defines how Gemini CLI launches the server. The shared core library ensures consistent behavior across the MCP server and CLI scripts.

```mermaid
sequenceDiagram
participant User as "User"
participant Gemini as "Gemini CLI"
participant Ext as "Extension Manifest"
participant MCP as "MCP Server (index.ts)"
participant Core as "Shared Core (strm-core.mjs)"
User->>Gemini : "/strm : map" or "/strm : init"
Gemini->>Ext : Resolve mcpServers.strm
Ext-->>Gemini : Launch command (node dist/index.js)
Gemini->>MCP : Connect over STDIO
MCP->>MCP : registerTool(...) x6
User->>Gemini : Issue tool request (e.g., strm_compute_strength)
Gemini->>MCP : Request tool with JSON args
MCP->>Core : Invoke shared logic (compute/validation)
Core-->>MCP : Results
MCP-->>Gemini : Tool response (JSON)
Gemini-->>User : Render results
```

**Diagram sources**
- [gemini-extension.json:5-11](file://gemini-extension/gemini-extension.json#L5-L11)
- [src/index.ts:263-522](file://gemini-extension/src/index.ts#L263-L522)
- [scripts/lib/strm-core.mjs:35-265](file://scripts/lib/strm-core.mjs#L35-L265)

## Detailed Component Analysis

### MCP Server Implementation
The server creates an MCP instance, registers six tools, and connects over STDIO. Each tool enforces schema validation and returns structured JSON responses.

```mermaid
classDiagram
class McpServer {
+registerTool(name, schema, handler)
+connect(transport)
}
class ToolComputeStrength {
+input : relationship, confidence, rationale_type
+output : score, formula, inputs
}
class ToolGenerateFilename {
+input : focal_framework, target_framework, bridge_framework?
+output : filename
}
class ToolBuildCsvHeader {
+input : target_name?
+output : csv_header_row, note
}
class ToolValidateRow {
+input : fde_num, relationship, confidence, rationale_type, rationale_text, strength_score, target_id, notes?
+output : valid, errors[], warnings[]
}
class ToolListInputFiles {
+input : subdirectory?
+output : directory, file_count, files[]
}
class ToolCheckExistingMapping {
+input : focal_framework, target_framework
+output : found, match_count, files[], recommendation
}
McpServer --> ToolComputeStrength : "registers"
McpServer --> ToolGenerateFilename : "registers"
McpServer --> ToolBuildCsvHeader : "registers"
McpServer --> ToolValidateRow : "registers"
McpServer --> ToolListInputFiles : "registers"
McpServer --> ToolCheckExistingMapping : "registers"
```

**Diagram sources**
- [src/index.ts:263-522](file://gemini-extension/src/index.ts#L263-L522)

**Section sources**
- [src/index.ts:263-522](file://gemini-extension/src/index.ts#L263-L522)

### Slash Command Integration
Slash commands are defined as TOML prompts that orchestrate CLI scripts and the MCP server. They guide users through listing inputs, initializing mappings, performing gap analysis, and validating outputs.

- /strm:init: Initializes a new STRM artifact folder and CSV using the shared filename generator and header builder.
- /strm:map: Starts a mapping session by discovering inputs, checking for existing mappings, initializing the CSV, and validating rows.
- /strm:gap-analysis: Performs a full STRM mapping between two frameworks and generates a gap summary.
- /strm:validate: Validates existing STRM CSV files and reports errors/warnings.

```mermaid
flowchart TD
Start(["User invokes /strm:*"]) --> Choose["Select command (init/map/gap/validate)"]
Choose --> Init["/strm:init: list inputs -> init mapping -> generate CSV"]
Choose --> Map["/strm:map: list inputs -> check existing -> init CSV -> compute strength -> validate row"]
Choose --> Gap["/strm:gap-analysis: list inputs -> map two frameworks -> generate gap report"]
Choose --> Val["/strm:validate: find STRM CSV -> validate rows -> summarize errors/warnings"]
Init --> End(["Done"])
Map --> End
Gap --> End
Val --> End
```

**Diagram sources**
- [commands/strm/init.toml:1-14](file://gemini-extension/commands/strm/init.toml#L1-L14)
- [commands/strm/map.toml:1-20](file://gemini-extension/commands/strm/map.toml#L1-L20)
- [commands/strm/gap-analysis.toml:1-19](file://gemini-extension/commands/strm/gap-analysis.toml#L1-L19)
- [commands/strm/validate.toml:1-18](file://gemini-extension/commands/strm/validate.toml#L1-L18)

**Section sources**
- [commands/strm/init.toml:1-14](file://gemini-extension/commands/strm/init.toml#L1-L14)
- [commands/strm/map.toml:1-20](file://gemini-extension/commands/strm/map.toml#L1-L20)
- [commands/strm/gap-analysis.toml:1-19](file://gemini-extension/commands/strm/gap-analysis.toml#L1-L19)
- [commands/strm/validate.toml:1-18](file://gemini-extension/commands/strm/validate.toml#L1-L18)

### TypeScript Integration, Build, and Distribution
- TypeScript configuration targets ES2022 with NodeNext module resolution, emits declarations and source maps, and compiles from src to dist.
- Build scripts compile TS, watch for development, run the built server, and package releases.
- The packaging script validates required assets, stages them, and archives per platform/arch.

```mermaid
flowchart TD
Dev["Developer"] --> Build["npm run build"]
Build --> TSC["tsc -> dist/*.js + *.map + *.d.ts"]
Dev --> Watch["npm run dev (watch mode)"]
Dev --> Start["npm start (run dist/index.js)"]
Dev --> Package["npm run package (single platform)"]
Dev --> PackageAll["npm run package:all (multi-platform)"]
Package --> Stage["Stage release assets"]
PackageAll --> Stage
Stage --> Archive["Archive to tar.gz or zip"]
```

**Diagram sources**
- [tsconfig.json:2-14](file://gemini-extension/tsconfig.json#L2-L14)
- [package.json:7-12](file://gemini-extension/package.json#L7-L12)
- [scripts/package.mjs:47-100](file://gemini-extension/scripts/package.mjs#L47-L100)

**Section sources**
- [tsconfig.json:1-18](file://gemini-extension/tsconfig.json#L1-L18)
- [package.json:1-26](file://gemini-extension/package.json#L1-L26)
- [scripts/package.mjs:1-106](file://gemini-extension/scripts/package.mjs#L1-L106)

### MCP Tools: Initialization, Mapping, Validation, and Gap Analysis Operations
- Initialization: Generates a properly formatted CSV filename and writes the header row to a dated artifact directory.
- Mapping: Discovers inputs, checks for duplicates, computes strength scores deterministically, and validates rows.
- Validation: Parses CSV, verifies required columns, and applies quality rules to each data row.
- Gap Analysis: Produces a summary of relationships and coverage gaps between two frameworks.

```mermaid
sequenceDiagram
participant User as "User"
participant CLI as "CLI Scripts"
participant Core as "strm-core.mjs"
participant FS as "File System"
User->>CLI : "strm-init-mapping.mjs --focal ... --target ..."
CLI->>Core : generateFilename(), buildHeader(), resolveArtifactDir()
Core-->>CLI : filename, header, artifactDir
CLI->>FS : mkdir(), writeFile()
User->>CLI : "strm-validate-csv.mjs --file ..."
CLI->>Core : parseCsv(), findColumnIndexes(), validateDataRow()
Core-->>CLI : {status, errors, warnings, ...}
CLI-->>User : JSON report
```

**Diagram sources**
- [scripts/bin/strm-init-mapping.mjs:36-57](file://scripts/bin/strm-init-mapping.mjs#L36-L57)
- [scripts/lib/strm-core.mjs:67-97](file://scripts/lib/strm-core.mjs#L67-L97)
- [scripts/bin/strm-validate-csv.mjs:50-76](file://scripts/bin/strm-validate-csv.mjs#L50-L76)

**Section sources**
- [scripts/bin/strm-init-mapping.mjs:1-58](file://scripts/bin/strm-init-mapping.mjs#L1-L58)
- [scripts/lib/strm-core.mjs:35-265](file://scripts/lib/strm-core.mjs#L35-L265)
- [scripts/bin/strm-validate-csv.mjs:1-77](file://scripts/bin/strm-validate-csv.mjs#L1-L77)

## Dependency Analysis
External and internal dependencies:
- External: @modelcontextprotocol/sdk (MCP server runtime), zod (schema validation).
- Internal: Shared core library used by MCP server and CLI scripts.

```mermaid
graph LR
Pkg["package.json"] --> Dep1["@modelcontextprotocol/sdk"]
Pkg --> Dep2["zod"]
Src["src/index.ts"] --> Zod["zod"]
Src --> MCP["@modelcontextprotocol/sdk/server/mcp"]
Src --> STDIO["@modelcontextprotocol/sdk/server/stdio"]
Src --> Core["scripts/lib/strm-core.mjs"]
CLI_Init["scripts/bin/strm-init-mapping.mjs"] --> Core
CLI_Val["scripts/bin/strm-validate-csv.mjs"] --> Core
```

**Diagram sources**
- [package.json:14-21](file://gemini-extension/package.json#L14-L21)
- [src/index.ts:9-13](file://gemini-extension/src/index.ts#L9-L13)
- [scripts/lib/strm-core.mjs:1-3](file://scripts/lib/strm-core.mjs#L1-L3)

**Section sources**
- [package.json:14-21](file://gemini-extension/package.json#L14-L21)
- [src/index.ts:9-13](file://gemini-extension/src/index.ts#L9-L13)
- [scripts/lib/strm-core.mjs:1-3](file://scripts/lib/strm-core.mjs#L1-L3)

## Performance Considerations
- Prefer streaming or batched processing for large CSVs; current validators load entire files into memory.
- Cache directory scans for repeated input discovery operations.
- Minimize filesystem writes by batching CSV updates and writing headers once during initialization.
- Use strict schema validation to fail fast and reduce downstream computation.

## Troubleshooting Guide
Common issues and resolutions:
- Gemini CLI connectivity
  - Ensure the MCP server is built and the manifest points to the correct executable path.
  - Verify the WORKSPACE_PATH environment variable if tools rely on it for scanning.
- Extension loading issues
  - Confirm the extension manifest includes the correct command and args.
  - Check that dist/index.js exists after building.
- Script execution failures
  - Validate required arguments for CLI scripts (e.g., --focal, --target).
  - Confirm CSV files include required columns and adhere to quality rules.
- Performance optimization
  - Avoid redundant file scans; reuse discovered inputs.
  - Use deterministic computations to prevent rework.

**Section sources**
- [gemini-extension.json:5-11](file://gemini-extension/gemini-extension.json#L5-L11)
- [src/index.ts:451-471](file://gemini-extension/src/index.ts#L451-L471)
- [scripts/bin/strm-validate-csv.mjs:15-20](file://scripts/bin/strm-validate-csv.mjs#L15-L20)

## Security and Production Deployment
- Authentication and secrets
  - The MCP server and scripts operate locally on the filesystem; no network credentials are required.
  - Restrict access to the working directory and avoid embedding secrets in CSVs.
- Hardening
  - Run builds and packaging in CI with locked dependencies.
  - Sign and distribute packages via a trusted channel.
- Production patterns
  - Use the packaging script to generate platform-specific archives.
  - Pin Node.js versions and install dependencies with lockfiles.
  - Store artifacts in the designated working directory and dated folders.

**Section sources**
- [scripts/package.mjs:47-100](file://gemini-extension/scripts/package.mjs#L47-L100)
- [README.md:24-29](file://README.md#L24-L29)

## Conclusion
The Gemini CLI Extension and MCP Tools provide a robust, deterministic foundation for STRM mapping across cybersecurity frameworks. The MCP server encapsulates validated, repeatable operations, while the shared TypeScript core ensures consistency with CLI scripts. The slash command prompts streamline end-to-end workflows from initialization to gap analysis and validation. With proper build and packaging processes, the extension is ready for secure, production-grade distribution and operation.