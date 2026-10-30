# Plan: Publish Whiteboard CLI

**ID:** `publish-whiteboard-cli`

**Status:** `PLANNING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Publish `@art-boards/whiteboard-cli@0.0.1` to npm to claim the `@art-boards` scope.

**Description:** Plan record with 2 iterations, executed within `$ART_BOARDS_WHITEBOARD`.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

---

## Path Variables

| Variable                 | Resolved Path                | Purpose                                                           |
| ------------------------ | ---------------------------- | ----------------------------------------------------------------- |
| `$WORKSPACE`             | Current working directory    | Workspace root directory                                          |
| `$ART_BOARDS`            | Provided with prompt.        | Art Boards repository. Example: `$WORKSPACE/checkouts/art-boards` |
| `$ART_BOARDS_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard` | The Art Whiteboard CLI package, and its roadmap and backlog.      |

## Summary

Scaffold the minimal publishable package — manifest, build config, bin entry, license — publish `0.0.1` to npm, and flip `NPM Package Deployment: Art Whiteboard CLI` from `PLANNED` to `DEPLOYED`.

## Context

### Upstream Work

| Kind        | Path                                                            | Role                                |
| ----------- | --------------------------------------------------------------- | ----------------------------------- |
| Milestone   | `$ART_BOARDS/_roadmap/3-now/milestone-hello-world/milestone.md` | Parent milestone.                   |
| Parking Lot | `$ART_BOARDS_WHITEBOARD/_backlog/_parking-lot.md`               | Tracks the CLI scaffold actionable. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions.

### Knowledge

::READ `$ART_BOARDS_WHITEBOARD/_guide.md` (Guide) — Package layout and records. Relevant for Planning Work Item.

## Scope

Minimal publishable package skeleton and the first npm release. No feature or command-surface work.

## Iterations

| Index | Name                     | Status  |
| ----- | ------------------------ | ------- |
| 1     | scaffold-package-tooling | `DRAFT` |
| 2     | publish-first-release    | `DRAFT` |

### Iteration: 1 — scaffold-package-tooling

**Purpose:** The package builds and exposes the `art-whiteboard-cli` bin from a minimal CLI skeleton.

**Status:** `DRAFT`

### Iteration: 2 — publish-first-release

**Purpose:** `@art-boards/whiteboard-cli@0.0.1` is published and the deployment record reads `DEPLOYED`.

**Status:** `DRAFT`

## Work

### Next

- Refine the iterations, then write implementation instructions.

### Blockers

- None.

---

## Coordination

### Not In Scope

- **Ecosystem registration** — belongs to Plan: Register Art Boards In Ecosystem.
- **Feature work** — session monitoring and prompt dispatch land under later milestones.

### Decisions

- None yet.

### Feedback

- None.
