# Plan: Register Art Boards In Ecosystem

**ID:** `register-art-boards-in-ecosystem`

**Status:** `PLANNING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Register `Project: Art Boards`, `Repository: Art Boards`, and `Namespace: Art Boards` across the ecosystem records, and make the repository public.

**Description:** Plan record with 2 iterations, executed within `$ART_BOARDS` and the workspace records.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

---

## Path Variables

| Variable      | Resolved Path             | Purpose                                                           |
| ------------- | ------------------------- | ----------------------------------------------------------------- |
| `$WORKSPACE`  | Current working directory | Workspace root directory                                          |
| `$ART_BOARDS` | Provided with prompt.     | Art Boards repository. Example: `$WORKSPACE/checkouts/art-boards` |

## Summary

Register the Art Boards project, repository, and namespace with their owner chain so the ecosystem resolves them, and confirm the GitHub repository is public with the records pointing at it.

## Context

### Upstream Work

| Kind        | Path                                                            | Role                                |
| ----------- | --------------------------------------------------------------- | ----------------------------------- |
| Milestone   | `$ART_BOARDS/_roadmap/3-now/milestone-hello-world/milestone.md` | Parent milestone.                   |
| Parking Lot | `$ART_BOARDS/_backlog/_parking-lot.md`                          | Tracks the registration actionable. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions.

### Knowledge

::READ `$ART_BOARDS/_guide.md` (Guide) — Records management layout. Relevant for Planning Work Item.

## Scope

Ecosystem record registration and repository visibility. No package or feature changes.

## Iterations

| Index | Name                      | Status  |
| ----- | ------------------------- | ------- |
| 1     | register-umbrella-records | `DRAFT` |
| 2     | make-repo-public          | `DRAFT` |

### Iteration: 1 — register-umbrella-records

**Purpose:** The Art Boards project and repository are registered under their umbrella owner and verified in the workspace records.

**Status:** `DRAFT`

### Iteration: 2 — make-repo-public

**Purpose:** The GitHub repository is public and every record's remote and consumer references resolve to it.

**Status:** `DRAFT`

## Work

### Next

- Refine the iterations, then write implementation instructions.

### Blockers

- None.

---

## Coordination

### Not In Scope

- **Package publishing** — belongs to Plan: Publish Whiteboard CLI.

### Decisions

- None yet.

### Feedback

- None.
