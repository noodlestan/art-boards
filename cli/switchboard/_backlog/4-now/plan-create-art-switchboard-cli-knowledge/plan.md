# Plan: Create Art Switchboard CLI Knowledge

**ID:** `create-art-switchboard-cli-knowledge`

**Status:** `PLANNING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Make the CLI's use cases, architecture, and operating model discoverable to users and contributors.

**Description:** Plan record with 2 iterations, executed within `$ART_SWITCHBOARD`.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

---

## Path Variables

| Variable                 | Resolved Path                     | Purpose                                            |
| ------------------------ | --------------------------------- | -------------------------------------------------- |
| `$WORKSPACE`             | Current working directory         | Workspace root directory                           |
| `$DOMAINS`               | `$WORKSPACE/.agents/domains`      | Domain resources directory                         |
| `$ART_BOARDS`            | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                              |
| `$ART_BOARDS_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard`      | Sibling package knowledge index reference          |
| `$ART_SWITCHBOARD`       | `$ART_BOARDS/cli/switchboard`     | The Art Switchboard CLI package, and its planning. |

## Summary

Establish the package knowledge base — index, overview, and architecture/use-case references — covering the command surface, the switchboard artefact model, session turn coordination, and the web application direction.

## Context

### Upstream Work

| Kind        | Path                                                                              | Role                                           |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------------------- |
| Milestone   | `$ART_SWITCHBOARD/_roadmap/6-plan/milestone-art-switchboard-cli-one/milestone.md` | Parent milestone; source of the plan outline.  |
| Parking Lot | `$ART_BOARDS/_roadmap/_parking-lot.md`                                            | Tracks the switchboard CLI milestone proposal. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions.

### Knowledge

::READ `$ART_BOARDS/_guide.md` (Guide) — Repository knowledge references and verification. Relevant for Planning Work Item, Verifying Completion.

::READ `$DOMAINS/messages/index.md` (Domain) — Message Board model behind the transport direction. Relevant for Planning Work Item.

Knowledge: Art Whiteboard CLI — `$ART_BOARDS_WHITEBOARD/knowledge/index.md` — sibling package knowledge index to mirror.

## Scope

Package knowledge only — index, overview, architecture/use-case references, and operating guidance. No code and no published site.

## Iterations

| Index | Name                  | Status     |
| ----- | --------------------- | ---------- |
| 1     | write-index-overview  | `PLANNING` |
| 2     | document-architecture | `PLANNING` |

### Iteration: 1 — write-index-overview

**Id:** `write-index-overview`

**Status:** `PLANNING`

**Purpose:** `knowledge/index.md` links a concise overview and the architecture/use-case references for the package.

**Description:** Create the knowledge index and the package overview that orients users and contributors.

**Instructions Mode:** `INSTRUCTIONS_INLINED_IN_ITERATION`

**Changes:**

- Create `knowledge/index.md` linking the package resources.
- Write the package overview covering purpose and audience.

#### Commits:

| ID                      | Repository / Checkout / Branch           | Policy   | Hash  | Status        |
| ----------------------- | ---------------------------------------- | -------- | ----- | ------------- |
| `write-knowledge-index` | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |

##### Commit: `write-knowledge-index`

**Repository:** Art Boards

**Message:**

docs(switchboard-cli): Write the package knowledge index and overview.

### Iteration: 2 — document-architecture

**Id:** `document-architecture`

**Status:** `PLANNING`

**Purpose:** The architecture and operating model are documented — artefact-scoped prompt prepending, external service boundaries, the Domain: Messages transport direction, TUI exclusion, setup, and verification.

**Description:** Document how the CLI, the switchboard record, the sessions, and the SolidJS application fit together, and how the package is operated.

**Instructions Mode:** `INSTRUCTIONS_INLINED_IN_ITERATION`

**Changes:**

- Document the architecture — CLI process, WebSocket connection, and the SolidJS application served by the CLI.
- Document artefact-scoped prompt prepending and the session turn model.
- Document the service boundaries — Art Lib, Art JS, and Art Agents — and the Domain: Messages transport direction.
- Record the TUI exclusion, setup, and verification.

#### Commits:

| ID                                  | Repository / Checkout / Branch           | Policy   | Hash  | Status        |
| ----------------------------------- | ---------------------------------------- | -------- | ----- | ------------- |
| `document-switchboard-architecture` | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |

##### Commit: `document-switchboard-architecture`

**Repository:** Art Boards

**Message:**

docs(switchboard-cli): Document the switchboard architecture and operating model.

## Work

### Next

- Write implementation instructions for the iterations, then delegate.

### Blockers

- None.

---

## Coordination

### Not In Scope

- **Repository-level knowledge** — belongs to `$ART_BOARDS/knowledge/index.md`.
- **Command reference** — expands once the command surface lands in later phases.

### Decisions

- None yet.

### Feedback

- None.
