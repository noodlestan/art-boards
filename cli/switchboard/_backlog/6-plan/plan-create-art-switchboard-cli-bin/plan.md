# Plan: Create Art Switchboard CLI Bin

**ID:** `create-art-switchboard-cli-bin`

**Status:** `DRAFT`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Provide the executable command entry point for the first CLI release.

**Description:** Plan record with 3 iterations, executed within `$ART_SWITCHBOARD`.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

---

## Path Variables

| Variable           | Resolved Path                     | Purpose                                            |
| ------------------ | --------------------------------- | -------------------------------------------------- |
| `$WORKSPACE`       | Current working directory         | Workspace root directory                           |
| `$ART_BOARDS`      | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                              |
| `$ART_LIB`         | `$WORKSPACE/checkouts/art-lib`    | Shared CLI infrastructure consumed by the bin      |
| `$ART_SWITCHBOARD` | `$ART_BOARDS/cli/switchboard`     | The Art Switchboard CLI package, and its planning. |

## Summary

Create the `art-switchboard-cli` bin on Art Lib's config, logger, operations, and runner capabilities: argument and help surface, runtime initialization, clean shutdown, and a smoke test — without a terminal UI.

## Context

### Upstream Work

| Kind      | Path                                                                              | Role                                              |
| --------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| Milestone | `$ART_SWITCHBOARD/_roadmap/6-plan/milestone-art-switchboard-cli-one/milestone.md` | Parent milestone; source of the plan outline.     |
| Plan      | `$ART_SWITCHBOARD/_backlog/6-plan/plan-scaffold-art-switchboard-cli/plan.md`      | Provides the package manifest the bin plugs into. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions.

### Knowledge

::READ `$ART_BOARDS/_guide.md` (Guide) — Repository setup and verification. Relevant for Setting Up, Verifying Completion.

Conventions: TypeScript — `$ART_BOARDS/node_modules/@noodlestan/conventions-typescript/art/index.md` — TypeScript conventions for the bin source. Relevant for Executing Work Step.

## Scope

Executable entry point and its runtime foundation — bin metadata, argument/help surface, configuration, logging, operation tracking, and shutdown. No switchboard or session features, no terminal UI.

## Iterations

| Index | Name             | Status  |
| ----- | ---------------- | ------- |
| 1     | create-bin-entry | `DRAFT` |
| 2     | wire-runtime     | `DRAFT` |
| 3     | smoke-test-bin   | `DRAFT` |

### Iteration: 1 — create-bin-entry

**Purpose:** `art-switchboard-cli` is declared as the package bin and renders its argument and help surface.

**Status:** `DRAFT`

### Iteration: 2 — wire-runtime

**Purpose:** Configuration loads, logging and operation tracking initialize, and commands run through Art Lib's runner lifecycle with clean shutdown.

**Status:** `DRAFT`

### Iteration: 3 — smoke-test-bin

**Purpose:** A smoke test exercises the entry point end to end and runs within the package test suite.

**Status:** `DRAFT`

## Work

### Next

- Refine the iterations, then write implementation instructions.

### Blockers

- **Art Lib APIs** — `@art-lib/config`, `@art-lib/logger`, `@art-lib/operations`, and the runner contract are not yet confirmed; finalize the APIs and versions before planning iteration `wire-runtime`.

---

## Coordination

### Not In Scope

- **Switchboard and session behavior** — lands in later phases of Milestone: Art Switchboard CLI One.
- **Terminal UI** — explicitly excluded by the milestone; the user interface is the web application.

### Decisions

- **Art Lib runtime** — the bin consumes Art Lib's config, logger, operations, and runner; no bespoke CLI runtime.

### Feedback

- None.
