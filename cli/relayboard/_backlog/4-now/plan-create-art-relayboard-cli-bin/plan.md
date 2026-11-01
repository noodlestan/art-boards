# Plan: Create Art Relayboard CLI Bin

**ID:** `create-art-relayboard-cli-bin`

**Status:** `PLANNING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Provide the executable command entry point for the first CLI release.

**Description:** Plan record with 3 iterations, executed within `$ART_RELAYBOARD`.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

---

## Path Variables

| Variable          | Resolved Path                     | Purpose                                           |
| ----------------- | --------------------------------- | ------------------------------------------------- |
| `$WORKSPACE`      | Current working directory         | Workspace root directory                          |
| `$ART_BOARDS`     | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                             |
| `$ART_LIB`        | `$WORKSPACE/checkouts/art-lib`    | Shared CLI infrastructure consumed by the bin     |
| `$ART_RELAYBOARD` | `$ART_BOARDS/cli/relayboard`      | The Art Relayboard CLI package, and its planning. |

## Summary

Create the `art-relayboard-cli` bin on Art Lib's config, logger, operations, and runner capabilities: argument and help surface, runtime initialization, clean shutdown, and a smoke test — without a terminal UI.

## Context

### Upstream Work

| Kind      | Path                                                                            | Role                                              |
| --------- | ------------------------------------------------------------------------------- | ------------------------------------------------- |
| Milestone | `$ART_RELAYBOARD/_roadmap/6-plan/milestone-art-relayboard-cli-one/milestone.md` | Parent milestone; source of the plan outline.     |
| Plan      | `$ART_RELAYBOARD/_backlog/4-now/plan-scaffold-art-relayboard-cli/plan.md`       | Provides the package manifest the bin plugs into. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions.

### Knowledge

::READ `$ART_BOARDS/_guide.md` (Guide) — Repository setup and verification. Relevant for Setting Up, Verifying Completion.

Conventions: TypeScript — `$ART_BOARDS/node_modules/@noodlestan/conventions-typescript/art/index.md` — TypeScript conventions for the bin source. Relevant for Executing Work Step.

## Scope

Executable entry point and its runtime foundation — bin metadata, argument/help surface, configuration, logging, operation tracking, and shutdown. No relayboard or session features, no terminal UI.

## Iterations

| Index | Name             | Status     |
| ----- | ---------------- | ---------- |
| 1     | create-bin-entry | `PLANNING` |
| 2     | wire-runtime     | `PLANNING` |
| 3     | smoke-test-bin   | `PLANNING` |

### Iteration: 1 — create-bin-entry

**Id:** `create-bin-entry`

**Status:** `PLANNING`

**Purpose:** `art-relayboard-cli` is declared as the package bin and renders its argument and help surface.

**Description:** Add the manifest `bin` mapping and the executable entry module, keeping the command surface free of relayboard behavior.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Add the `bin` mapping for `art-relayboard-cli` to `package.json`.
- Create the executable entry module with argument parsing and the help and version surface.
- Keep the command surface free of relayboard and session behavior.

#### Commits:

| ID                   | Repository / Checkout / Branch          | Policy   | Hash  | Status        |
| -------------------- | --------------------------------------- | -------- | ----- | ------------- |
| `declare-cli-bin`    | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |
| `add-relayboard-bin` | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |

##### Commit: `declare-cli-bin`

**Repository:** Art Boards

**Message:**

scaffold(relayboard-cli): Declare the `art-relayboard-cli` bin in the package manifest.

##### Commit: `add-relayboard-bin`

**Repository:** Art Boards

**Message:**

scaffold(relayboard-cli): Add the `art-relayboard-cli` bin entry and help surface.

### Iteration: 2 — wire-runtime

**Id:** `wire-runtime`

**Status:** `PLANNING`

**Purpose:** Configuration loads, logging and operation tracking initialize, and commands run through Art Lib's runner lifecycle with clean shutdown.

**Description:** Wire the Art Lib runtime into the entry point — config, logging, operation tracking, runner lifecycle, and shutdown handling.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Load configuration through `@art-lib/config` before any command executes.
- Initialize logging and operation tracking through `@art-lib/logger` and `@art-lib/operations`.
- Run commands through Art Lib's runner lifecycle.
- Handle clean shutdown on command completion and on interruption.

**Dependencies:**

- Art Lib package APIs and versions confirmed — blocked per Blockers.

#### Commits:

| ID                      | Repository / Checkout / Branch          | Policy   | Hash  | Status        |
| ----------------------- | --------------------------------------- | -------- | ----- | ------------- |
| `wire-art-lib-runtime`  | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |
| `handle-clean-shutdown` | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |

##### Commit: `wire-art-lib-runtime`

**Repository:** Art Boards

**Message:**

build(relayboard-cli): Wire config, logging, and runner lifecycle into the bin.

##### Commit: `handle-clean-shutdown`

**Repository:** Art Boards

**Message:**

build(relayboard-cli): Handle clean shutdown in the CLI runtime.

### Iteration: 3 — smoke-test-bin

**Id:** `smoke-test-bin`

**Status:** `PLANNING`

**Purpose:** A smoke test exercises the entry point end to end and runs within the package test suite.

**Description:** Add a smoke test that drives the entry point through its public arguments and runs with the package test suite.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Add a smoke test exercising `--help` and `--version` through the entry point.
- Assert clean exit and rendered help output.
- Run the smoke test with the package test suite and the repository CI.

#### Commits:

| ID                   | Repository / Checkout / Branch          | Policy   | Hash  | Status        |
| -------------------- | --------------------------------------- | -------- | ----- | ------------- |
| `add-bin-smoke-test` | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |

##### Commit: `add-bin-smoke-test`

**Repository:** Art Boards

**Message:**

test(relayboard-cli): Smoke test the `art-relayboard-cli` entry point.

## Work

### Next

- Write implementation instructions for the iterations, then delegate.

### Blockers

- **Art Lib APIs** — `@art-lib/config`, `@art-lib/logger`, `@art-lib/operations`, and the runner contract are not yet confirmed; finalize the APIs and versions before writing the `wire-runtime` instructions.

---

## Coordination

### Not In Scope

- **Relayboard and session behavior** — lands in later phases of Milestone: Art Relayboard CLI One.
- **Terminal UI** — explicitly excluded by the milestone; the user interface is the web application.

### Decisions

- **Art Lib runtime** — the bin consumes Art Lib's config, logger, operations, and runner; no bespoke CLI runtime.

### Feedback

- None.
