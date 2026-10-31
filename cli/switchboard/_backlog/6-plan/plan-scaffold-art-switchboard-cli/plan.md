# Plan: Scaffold Art Switchboard CLI

**ID:** `scaffold-art-switchboard-cli`

**Status:** `DRAFT`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Establish the minimum publishable package foundation for `@art-boards/switchboard-cli`.

**Description:** Plan record with 2 iterations, executed within `$ART_SWITCHBOARD`.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

---

## Path Variables

| Variable                 | Resolved Path                     | Purpose                                            |
| ------------------------ | --------------------------------- | -------------------------------------------------- |
| `$WORKSPACE`             | Current working directory         | Workspace root directory                           |
| `$ART_BOARDS`            | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                              |
| `$ART_BOARDS_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard`      | Sibling CLI package layout reference               |
| `$ART_SWITCHBOARD`       | `$ART_BOARDS/cli/switchboard`     | The Art Switchboard CLI package, and its planning. |

## Summary

Scaffold `@art-boards/switchboard-cli` at `cli/switchboard`: manifest, build/test/lint foundation, and source/test skeleton wired to the repository workspace tooling, plus the package record describing the package and its bin.

## Context

### Upstream Work

| Kind        | Path                                                                              | Role                                           |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------------------- |
| Milestone   | `$ART_SWITCHBOARD/_roadmap/6-plan/milestone-art-switchboard-cli-one/milestone.md` | Parent milestone; source of the plan outline.  |
| Parking Lot | `$ART_BOARDS/_roadmap/_parking-lot.md`                                            | Tracks the switchboard CLI milestone proposal. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions.
- `scaffold` — Scaffolds project files from records and templates.

### Knowledge

::READ `$ART_BOARDS/_guide.md` (Guide) — Repository layout, records, conventions, setup, and verification. Relevant for Setting Up, Executing Work Step, Verifying Completion.

::READ `$ART_BOARDS_WHITEBOARD/_guide.md` (Guide) — Sibling package layout and records management. Relevant for Executing Work Step.

## Scope

Package skeleton only — manifest, build/test/lint configuration, source and test directories, release files, and the package record. No command surface, no npm publish, no feature work.

## Iterations

| Index | Name                  | Status  |
| ----- | --------------------- | ------- |
| 1     | scaffold-package      | `DRAFT` |
| 2     | create-package-record | `DRAFT` |

### Iteration: 1 — scaffold-package

**Purpose:** The package installs and builds locally: manifest, build/test/lint configuration, and source/test skeleton connected to the repository workspace tooling.

**Status:** `DRAFT`

### Iteration: 2 — create-package-record

**Purpose:** `_records/package.art` records `@art-boards/switchboard-cli` at `cli/switchboard` with its `art-switchboard-cli` bin.

**Status:** `DRAFT`

## Work

### Next

- Refine the iterations, then write implementation instructions.

### Blockers

- None.

---

## Coordination

### Not In Scope

- **Command surface** — the `art-switchboard-cli` bin lands in Plan: Create Art Switchboard CLI Bin.
- **npm publish** — releasing lands under the milestone's First Release phase; the `@art-boards` scope is already claimed by `@art-boards/whiteboard-cli@0.0.1`.

### Decisions

- **Mirror the sibling package** — layout, scripts, and configuration follow the Art Whiteboard CLI package.

### Feedback

- None.
