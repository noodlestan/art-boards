# Milestone: Hello World

**ID:** `hello-world`

**Status:** `PLANNING`

**Template:** `$DOMAINS/milestones/templates/milestone.tart`

**Skill:** `write-milestone`

**Purpose:** Make the repository public, register it across the ecosystem, and publish the package to npm to claim the `@art-boards` scope.

**Description:** Milestone record with 1 phase and 2 downstream plans, coordinated within `$ART_BOARDS`.

## Mandatory Reading

::READ `$DOMAINS/milestones/structures/milestone.art` (Structure) — Defines the milestone structure and nested types.

---

## Path Variables

| Variable                 | Resolved Path                | Purpose                                                           |
| ------------------------ | ---------------------------- | ----------------------------------------------------------------- |
| `$WORKSPACE`             | Current working directory    | Workspace root directory                                          |
| `$DOMAINS`               | `$WORKSPACE/.agents/domains` | Domain resources directory                                        |
| `$ART_BOARDS`            | Provided with prompt.        | Art Boards repository. Example: `$WORKSPACE/checkouts/art-boards` |
| `$ART_BOARDS_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard` | The Art Whiteboard CLI package, and its roadmap and backlog.      |

## Summary

Take `@art-boards` from private scaffold to public, registered, and published: the repository is public on GitHub, `Project: Art Boards`, `Repository: Art Boards`, and `Namespace: Art Boards` are registered across the ecosystem records, and `@art-boards/whiteboard-cli@0.0.1` is published to npm so the scope is claimed.

## Context

### Upstream Work

| Kind        | Path                                              | Role                                                        |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------- |
| Parking Lot | `$ART_BOARDS/_backlog/_parking-lot.md`            | Project-level actionables, pending questions, and blockers. |
| Parking Lot | `$ART_BOARDS_WHITEBOARD/_backlog/_parking-lot.md` | CLI-level actionables, pending questions, and blockers.     |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions. Required for Planning Work Item.
- `render-template` — Renders milestone and downstream work-item artefacts. Required at all times.

### Domains

| Domain / Path                                       | Description                                                                        |
| --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Roadmaps `$DOMAINS/roadmaps/index.md`       | Roadmapping lifecycle for discovering, strategising, and coordinating work.        |
| Domain: Plans `$DOMAINS/plans/index.md`             | Planning lifecycle for contextualising, drafting, planning, and integrating plans. |
| Domain: Deployments `$DOMAINS/deployments/index.md` | Deployment records and publishing lifecycle.                                       |

### Knowledge

::READ `$ART_BOARDS/_guide.md` (Guide) — Repository setup and verification. Relevant for Setting Up, Verifying Completion.

## Scope

Public availability, ecosystem registration, and the first npm publish of `@art-boards/whiteboard-cli`. No feature work.

## Phases

| Index | Name           | Status     |
| ----- | -------------- | ---------- |
| 1     | Public release | `PLANNING` |

### Phase: 1 — Public release

**Goal:** The repository is public and registered, and `@art-boards/whiteboard-cli` is published to npm.

**Description:** Register the project, repository, and namespace across the ecosystem records, confirm public visibility, and publish the first release to claim the scope.

**Status:** `PLANNING`

**Dependencies:**

- None.

## Items:

| Phase | Resource / Record                      | Status     |
| ----- | -------------------------------------- | ---------- |
| 1     | Plan: Register Art Boards In Ecosystem | `PLANNING` |
| 1     | Plan: Publish Whiteboard CLI           | `PLANNING` |

## Work

### Next

- Draft iterations for both plans, then delegate.

### Blockers

- None.

---

## Operating Instructions

### Setting Up

**Purpose:** Prepare the execution environment. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/setting-up.art`.

**Instructions:** (From `$ART_BOARDS/_guide.md`)

Run from the `$ART_BOARDS` root:

```bash
npm ci # to install dependencies.
```

### Writing Commit Message

**Purpose:** Write standardized message according to context conventions. Operation of Workflow: Planning Work, defined in `$DOMAINS/work/workflows/planning-work/ops/writing-commit-message.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

1. Read commit message conventions from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Write the commit message following: the rules defined there.

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/verifying-completion.art`.

**Instructions:** (From `$ART_BOARDS/_guide.md`)

Run from the `$ART_BOARDS` root:

```bash
npm run lint # prettier check
```

All steps MUST pass.

---

## Coordination

### Not In Scope

- **Feature work** — command surface, session monitoring, and prompt dispatch land under later milestones.
- **Art Lib integration** — dependency capture belongs to the Art Lib consumption milestone.

### Evidence

- None yet.

### Findings

- None yet.

### Decisions

- **Scope claim first** — publishing `0.0.1` early claims the `@art-boards` npm scope before any feature work ships.

### Knowledge to Update

- `$ART_BOARDS/knowledge/index.md` — link the ecosystem registration once Plan: Register Art Boards In Ecosystem lands.

### Follow Ups

- None yet.

### Feedback

- None.
