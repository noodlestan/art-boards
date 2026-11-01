# Plan: Create Art Relayboard CLI Knowledge

**ID:** `create-art-relayboard-cli-knowledge`

**Status:** `DONE`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Make the CLI's use cases, architecture, and operating model discoverable to users and contributors.

**Description:** Plan record with 2 iterations, executed within `$ART_RELAYBOARD`.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

---

## Path Variables

| Variable                 | Resolved Path                     | Purpose                                           |
| ------------------------ | --------------------------------- | ------------------------------------------------- |
| `$WORKSPACE`             | Current working directory         | Workspace root directory                          |
| `$DOMAINS`               | `$WORKSPACE/.agents/domains`      | Domain resources directory                        |
| `$ART_BOARDS`            | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                             |
| `$ART_BOARDS_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard`      | Sibling package knowledge index reference         |
| `$ART_RELAYBOARD`        | `$ART_BOARDS/cli/relayboard`      | The Art Relayboard CLI package, and its planning. |

## Summary

Establish the package knowledge base — index, overview, and architecture/use-case references — covering the command surface, the relayboard artefact model, session turn coordination, and the web application direction.

## Context

### Upstream Work

| Kind        | Path                                                                            | Role                                          |
| ----------- | ------------------------------------------------------------------------------- | --------------------------------------------- |
| Milestone   | `$ART_RELAYBOARD/_roadmap/6-plan/milestone-art-relayboard-cli-one/milestone.md` | Parent milestone; source of the plan outline. |
| Parking Lot | `$ART_BOARDS/_roadmap/_parking-lot.md`                                          | Tracks the relayboard CLI milestone proposal. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions.

### Knowledge

::READ `$ART_BOARDS/_guide.md` (Guide) — Repository knowledge references and verification. Relevant for Planning Work Item, Verifying Completion.

::READ `$DOMAINS/messages/index.md` (Domain) — Message Board model behind the transport direction. Relevant for Planning Work Item.

Knowledge: Art Whiteboard CLI — `$ART_BOARDS_WHITEBOARD/knowledge/index.md` — sibling package knowledge index to mirror.

## Scope

Package knowledge only — index, overview, architecture/use-case references, and operating guidance. No code and no published site.

## Iterations

| Index | Name                  | Status |
| ----- | --------------------- | ------ |
| 1     | write-index-overview  | `DONE` |
| 2     | document-architecture | `DONE` |

### Iteration: 1 — write-index-overview

**Id:** `write-index-overview`

**Status:** `DONE`

**Purpose:** `knowledge/index.md` links a concise overview and the architecture/use-case references for the package.

**Description:** Create the knowledge index with its documents table and the overview that orients users and contributors.

**Instructions Mode:** `INSTRUCTIONS_INLINED_IN_ITERATION`

**Instructions:**

Execute the Changes listed above.

Before starting:

- ::READ `$ART_BOARDS/_guide.md` — knowledge references and verification for this repository.
- Read `$ART_BOARDS_WHITEBOARD/knowledge/index.md` — the sibling documents-table layout.
- Read `$ART_BOARDS/knowledge/index.md` — repository-level knowledge conventions.

Create `knowledge/index.md` in `$ART_RELAYBOARD` with a `## Documents` table (Document | Purpose) linking `overview.md` (created in this iteration), `architecture.md`, and `boundaries.md` (created in iteration `document-architecture`).

Write `knowledge/overview.md`: the package purpose, its audience, where to start, setup (`npm ci`), and verification (`npm run lint`, `npm run ci`) — pointers only, no command reference yet.

Validate that:

- Every file in `knowledge/` is linked from `knowledge/index.md`.
- `npm run lint` passes from `$ART_BOARDS`.

After executing:

- Commit `write-knowledge-index`, then `write-package-overview`, each with its blueprint message (policy `NOPUSH` — do not push).
- Report the outcome in chat — inlined instructions report in chat.

**Changes:**

- Create `knowledge/index.md` with a documents table linking the package resources.
- Write the package overview — purpose, audience, and where to start.
- Point setup and verification at the repository guide.

#### Commits:

| ID                       | Repository / Checkout / Branch          | Policy   | Hash      | Status      |
| ------------------------ | --------------------------------------- | -------- | --------- | ----------- |
| `write-knowledge-index`  | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | `b125e97` | `COMMITTED` |
| `write-package-overview` | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | `086dba0` | `COMMITTED` |

##### Commit: `write-knowledge-index`

**Repository:** Art Boards

**Message:**

docs(relayboard-cli): Write the package knowledge index.

##### Commit: `write-package-overview`

**Repository:** Art Boards

**Message:**

docs(relayboard-cli): Write the package overview.

### Iteration: 2 — document-architecture

**Id:** `document-architecture`

**Status:** `DONE`

**Purpose:** The architecture and operating model are documented — artefact-scoped prompt prepending, external service boundaries, the Domain: Messages transport direction, TUI exclusion, setup, and verification.

**Description:** Document how the CLI, the relayboard record, the sessions, and the SolidJS application fit together, and how the package is operated.

**Instructions Mode:** `INSTRUCTIONS_INLINED_IN_ITERATION`

**Instructions:**

Execute the Changes listed above.

Before starting:

- ::READ `$DOMAINS/messages/index.md` — the Message Board model behind the transport direction.
- Read `knowledge/index.md` — keep the documents table in sync with the files you create.

Write `knowledge/architecture.md`:

- The CLI process lifecycle and its WebSocket endpoint.
- The SolidJS application — runs standalone with `npm run dev` during development, connects over WebSocket to the running CLI, and is served by the CLI once the web UI is delivered.
- Artefact-scoped prompt prepending (scope, rules, artefacts on the first prompt of a new session) and the user-managed session turn model.
- TUI exclusion, setup, and verification.

Write `knowledge/boundaries.md`:

- The Art Lib, Art JS, and Art Agents service boundaries — consumed, never re-implemented.
- The Domain: Messages transport direction: direct session relays versus a message board with `re-read` prepended to the next prompt.

Validate that:

- Every document linked from `knowledge/index.md` exists.
- Setup and verification match `$ART_BOARDS/_guide.md`; no TUI claims appear anywhere.

After executing:

- Commit `document-relayboard-architecture`, then `document-service-boundaries`, each with its blueprint message (policy `NOPUSH` — do not push).
- Report the outcome in chat — inlined instructions report in chat.

**Changes:**

- Write the architecture document — CLI process, WebSocket connection, and the SolidJS application served by the CLI.
- Document artefact-scoped prompt prepending and the session turn model.
- Record the TUI exclusion, setup, and verification.
- Document the service boundaries — Art Lib, Art JS, and Art Agents — and the Domain: Messages transport direction.

#### Commits:

| ID                                 | Repository / Checkout / Branch          | Policy   | Hash      | Status      |
| ---------------------------------- | --------------------------------------- | -------- | --------- | ----------- |
| `document-relayboard-architecture` | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | `6a1ce07` | `COMMITTED` |
| `document-service-boundaries`      | Art Boards / `$ART_RELAYBOARD` / `main` | `NOPUSH` | `5adf66f` | `COMMITTED` |

##### Commit: `document-relayboard-architecture`

**Repository:** Art Boards

**Message:**

docs(relayboard-cli): Document the relayboard architecture and operating model.

##### Commit: `document-service-boundaries`

**Repository:** Art Boards

**Message:**

docs(relayboard-cli): Document the service boundaries and message transport.

## Work

### Next

- Both iterations are DONE; reflect the outcomes upstream into Milestone: Art Relayboard CLI One.

### Blockers

- None.

---

## Coordination

### Not In Scope

- **Repository-level knowledge** — belongs to `$ART_BOARDS/knowledge/index.md`.
- **Command reference** — expands once the command surface lands in later phases.

### Evidence

- `knowledge/index.md` and `knowledge/overview.md` created; every document linked from the index; `npm run lint` green; commits `b125e97`, `086dba0` local under `NOPUSH`.
- `knowledge/architecture.md` and `knowledge/boundaries.md` created; index links all documents; `npm run ci` green; commits `6a1ce07`, `5adf66f` local under `NOPUSH`.

### Findings

- None yet.

### Decisions

- None yet.

### Knowledge to Update

- None yet.

### Follow Ups

- None.

### Feedback

- None.
