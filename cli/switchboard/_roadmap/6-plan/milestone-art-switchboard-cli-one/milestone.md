# Milestone: Art Switchboard CLI One

**ID:** `art-switchboard-cli-one`

**Status:** `DRAFT`

**Template:** `$DOMAINS/milestones/templates/milestone.tart`

**Has Context File:** `FALSE`

**Skill:** `write-milestone`

**Purpose:** Deliver the first releasable `@art-boards/switchboard-cli` for coordinating multi-agent collaboration sessions over arbitrary artefact sets — plans, instructions, attachments — through a web application.

**Description:** Seven phases establish the CLI baseline, session management, switchboard and artefact management, a web UI and its interactions, message-board transport, and a first public release. TUI is explicitly out of scope.

## Mandatory Reading

::READ `$DOMAINS/milestones/structures/milestone.art` (Structure) — Defines the milestone structure and nested types.

---

## Path Variables

| Variable           | Resolved Path                     | Purpose                                      |
| ------------------ | --------------------------------- | -------------------------------------------- |
| `$WORKSPACE`       | Current working directory         | Workspace root directory                     |
| `$DOMAINS`         | `$WORKSPACE/.agents/domains`      | Domain resources directory                   |
| `$ART_BOARDS`      | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                        |
| `$ART_SWITCHBOARD` | `$ART_BOARDS/cli/switchboard`     | Art Switchboard CLI package and its planning |
| `$ART_WHITEBOARD`  | `$ART_BOARDS/cli/whiteboard`      | Sibling CLI package, inception, and research |
| `$ART_LIB`         | `$WORKSPACE/checkouts/art-lib`    | Shared libraries and CLI infrastructure      |
| `$ART_JS`          | `$WORKSPACE/checkouts/art-js`     | Shared record operations                     |

## Summary

Deliver the first `@art-boards/switchboard-cli`: scaffold and launch the CLI, manage runner sessions, read and monitor switchboards — scope, rules, and arbitrary artefact definitions — coordinate user-managed turns across multiple agent sessions over the same artefacts, provide a web UI, adopt message-board transport from Domain: Messages, and release the application. Phase 1 contains three proposed plans; this milestone draft does not create plan files.

## Scope

This milestone coordinates the Art Switchboard CLI from package foundation through its first releasable web-backed application. Phase 1 is the only phase decomposed into plan outlines here; later phases remain high-level delivery summaries.

### (Scope) Repository: Art Boards

**Record:** `$ART_BOARDS/_records/repository.art`

**Role:** Hosts the CLI package, roadmap, backlog, and knowledge.

**Partial:**

- `remote` — `git@github.com:noodlestan/art-boards.git`
- `workspaces` — `cli/**`
- `private` — `false`

**Changes:** Add the switchboard CLI package, web application, and milestone outputs.

### (Scope) Package: Art Switchboard CLI

**Record:** To be created in Phase 1, by Plan: Scaffold Art Switchboard CLI.

**Role:** Product package for artefact-based multi-agent collaboration sessions.

**Partial:**

- `canonicalName` — `@art-boards/switchboard-cli`
- `path` — `cli/switchboard`
- `bin` — `art-switchboard-cli`
- `published` — `true`

**Changes:** Scaffold, provide a CLI bin, implement switchboard and session behavior, build the web UI, and publish the first usable release.

### (Scope) Project: Art Lib

**Record:** `$ART_LIB/_records/project.art`

**Role:** Upstream provider of shared CLI tooling consumed by this milestone.

**Partial:**

- `purpose` — Build high-quality, consistent CLI and tool experiences from composable units.
- `resources` — Package: Art Lib FS Records.

**Changes:** Provide config, logger, operations, prompts, and runner capabilities through Art Lib's own plans; this milestone does not modify Art Lib resources.

### (Scope) Project: Art JS

**Record:** `$ART_JS/_records/project.art`

**Role:** Upstream provider of record operations used by Switchboard Management.

**Partial:**

- `purpose` — Enable Art files to be authored as programs, with validation, language tooling, and automated projection.
- `resources` — Includes Package: Records and related Art MD tooling.

**Changes:** Provide the records API through Art JS's own plans; this milestone consumes the shared capability and does not modify Art JS resources.

### (Scope) Project: Art Agents

**Record:** Proposed; created by Milestone: Art Whiteboard CLI One, Phase 6.

**Role:** Destination owner for the reusable connection and session-management services.

**Partial:**

- `status` — Proposed; project and records not yet initialized.
- `responsibilities` — Connection service and session-management service for Art ↔ agent boundary operations.

**Changes:** Consumed once extracted by Milestone: Art Whiteboard CLI One; this milestone does not modify Art Agents resources and does not duplicate its services.

## Execution Context

Planning and package verification occur from `$ART_BOARDS`; package source and web application work live under `$ART_SWITCHBOARD`. Art Lib and Art JS capabilities are consumed according to their own delivery plans. Session services follow Project: Art Agents once extracted; until then, runner capabilities are consumed directly as documented in the session-management research.

## Upstream Work

- Parking Lot: Art Boards Roadmap — `$ART_BOARDS/_roadmap/_parking-lot.md`
- Milestone: Art Whiteboard CLI One — `$ART_WHITEBOARD/_roadmap/6-plan/milestone-art-whiteboard-cli-one/milestone.md`
- Whiteboard: Art Whiteboard CLI Inception — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/whiteboard.md`
- Research: Agent Session Management — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/agent-sessions__research.md`

## Required Skills

- `write-plan` — `$WORKSPACE/.agents/skills/write-plan/SKILL.md` — Create and refine downstream plans after this milestone's phase scope is approved.
- `render-template` — `$WORKSPACE/.agents/skills/render-template/SKILL.md` — Render milestone and downstream work-item files.
- `scaffold` — `$WORKSPACE/.agents/skills/scaffold/SKILL.md` — Scaffold the Phase 1 CLI package foundation.

## Domains

- Projects — `$DOMAINS/projects/index.md`
- Packages — `$DOMAINS/packages/index.md`
- Roadmaps — `$DOMAINS/roadmaps/index.md`
- Milestones — `$DOMAINS/milestones/index.md`
- Plans — `$DOMAINS/plans/index.md`
- Messages — `$DOMAINS/messages/index.md`
- Deployments — `$DOMAINS/deployments/index.md`
- Work — `$DOMAINS/work/index.md`

## Resource Kinds in Scope

- Project — `$DOMAINS/projects/structures/project.art`
- Repository — `$DOMAINS/repositories/structures/repository.art`
- Package — `$DOMAINS/packages/structures/package.art`
- Milestone — `$DOMAINS/milestones/structures/milestone.art`
- Plan — `$DOMAINS/plans/structures/plan.art`
- Message Board — `$DOMAINS/messages/structures/message-board.art`

## Workflows

- Roadmapping — `$DOMAINS/roadmaps/workflows/roadmapping/workflow.art`
- Planning Work — `$DOMAINS/work/workflows/planning-work/workflow.art`
- Delegating Work — `$DOMAINS/work/workflows/delegating-work/workflow.art`
- Executing Work — `$DOMAINS/work/workflows/executing-work/workflow.art`
- Deploying — `$DOMAINS/deployments/workflows/deploying/workflow.art`

## Knowledge

- Guide: Art Boards — `$ART_BOARDS/_guide.md` — repository setup and verification.
- Guide: Art Whiteboard CLI — `$ART_WHITEBOARD/_guide.md` — sibling CLI package layout to mirror.
- Research: Agent Session Management — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/agent-sessions__research.md` — runner capabilities, boundaries, and verification questions.
- Domain: Messages — `$DOMAINS/messages/index.md` — Message Board structure and message routines used by Phase 6.

---

## Phases

| Index | Name                    | Status     |
| ----- | ----------------------- | ---------- |
| 1     | Hello World             | `PLANNING` |
| 2     | Session Management      | `DRAFT`    |
| 3     | Switchboard Management  | `DRAFT`    |
| 4     | Web UI MVP              | `DRAFT`    |
| 5     | Web UI Interactions     | `DRAFT`    |
| 6     | Message Board Transport | `DRAFT`    |
| 7     | First Release           | `DRAFT`    |

### Phase: 1 — Hello World

**Goal:** Establish a buildable Art Switchboard CLI package, an executable bin using Art Lib's shared CLI infrastructure, and a useful package knowledge base.

**Description:** Scaffold the package, create its bin using Art Lib config/logger/operations/runner capabilities, and create package knowledge. This milestone lists the plan outlines only; no plan files are created yet.

**Status:** `PLANNING`

**Dependencies:**

- Confirm the `@art-lib/config`, `@art-lib/logger`, and `@art-lib/operations` package APIs and versions, and Art Lib's proposed `createRunner` capability (candidate API; package and contract not finalized), before finalizing the bin plan.

### Phase: 2 — Session Management

**Goal:** Provide the connection and session-management services required to start, attach to, and resume agent sessions that collaborate on a switchboard.

**Description:** Deliver runner connection; session listing; starting a new session (the original planner, an invited reviewer, or later participants); attaching to or resuming an existing session where supported; and sending a prompt to a session. Consume Project: Art Agents services once extracted; until then, consume runner capabilities directly. Preserve runner capability differences rather than assuming attachment, resumption, and terminal handoff are equivalent.

**Status:** `DRAFT`

**Dependencies:**

- Project: Art Agents connection and session-management services when extracted by Milestone: Art Whiteboard CLI One, Phase 6; until available, runner capabilities as documented in the session-management research.

### Phase: 3 — Switchboard Management

**Goal:** Reliably interpret a switchboard — a scope, a set of rules, and an arbitrary set of artefacts — and coordinate participant turns through the session services.

**Description:** Define the switchboard record carrying scope, rules, and artefact definitions over arbitrary artefact files (plans, instructions, attachments, any artefact); use `@art-js/records` and the filesystem records layer as the records substrate; read and validate switchboards; identify the artefacts where collaboration happens; watch for switchboard changes; prepend the scope/rules/artefact definitions to the first prompt of a newly started session; and notify sessions when artefacts change. Offer validation as a CLI entry point (for example, `--validate {file}`) and as UI feedback on load and change; do not directly invoke Artificials routines. Do not implement a switchboard-specific records parser or writer.

**Status:** `DRAFT`

**Dependencies:**

- `@art-js/records` extraction, update, and proxy capabilities for deterministic nested record access and updates.
- `@art-lib/fs-records` discovery and filesystem content-source capabilities for locating and accessing switchboard and artefact files.

### Phase: 4 — Web UI MVP

**Goal:** Provide a browser-based view of the switchboard, its artefacts, and current session state.

**Description:** Scaffold, build, and serve the web application; establish its socket connection; display the switchboard scope, rules, and artefact list, the registered sessions, the current turn, and the changes list; and allow starting a session or attaching to an existing one. This is a web UI, not a terminal UI.

**Status:** `DRAFT`

**Dependencies:**

- None identified beyond switchboard and session data supplied by earlier phases.

### Phase: 5 — Web UI Interactions

**Goal:** Let users run user-managed turns across multiple agent sessions over the same artefacts.

**Description:** Provide interactions to continue a turn with the original planning agent or start/attach another session whose first prompt prepends the scope/rules/artefact definitions; ask a second, third, or fourth agent specific questions about the artefacts; let participants update artefacts directly and either generate a message the user can relay to another session, or have the UI send the cross-session update itself (for example, "senior architect changed artefacts A and B; reload and do Y and Z"); inspect session state; and surface unsupported operations or failures clearly.

**Status:** `DRAFT`

**Dependencies:**

- None identified beyond session-management operations and the web UI established by earlier phases.

### Phase: 6 — Message Board Transport

**Goal:** Let collaboration messages flow through a message board artefact instead of direct session relays.

**Description:** Let the UI create and manage a message board artefact modelled by Domain: Messages (Structure: Message Board), switch communication to or through the message board, and prepend a `re-read` instruction to the next prompt when unread board messages exist; keep direct session relays available as an alternative transport.

**Status:** `DRAFT`

**Dependencies:**

- Structure: Message Board and the message routines of Domain: Messages consumed as-is; no domain changes expected.

### Phase: 7 — First Release

**Goal:** Publish a verified first releasable Art Switchboard CLI.

**Description:** Complete integration testing with checked-in filesystem fixtures and a mock runner server, verifying unsupported operations, errors, interruption, and shutdown; then verify the end-to-end multi-session turn flow over shared artefacts — prompt prepending, direct relays, and message-board transport — plus package and web application builds, supported runner behavior, clean shutdown, and release documentation; publish the CLI package and update its deployment record.

**Status:** `DRAFT`

**Dependencies:**

- None beyond the phase deliverables and release verification.

---

## Items:

The following three Phase 1 plans are outlined but do not yet have plan files.

### Plan: Scaffold Art Switchboard CLI

**Phase:** 1 — Hello World

**Status:** `DRAFT`

**Purpose:** Establish the minimum publishable package foundation for `@art-boards/switchboard-cli`.

**Description:** Create the package manifest and build, test, and lint foundation, aligned with the Art Boards workspace and package record.

**Changes:**

- Create the package manifest and package-level build/test configuration.
- Scaffold source and test directories and package release files.
- Create the package records (`_records/package.art`) and the package `_roadmap/` and `_backlog/` with their parking lots.
- Connect package scripts to the repository workspace tooling and verify the package installs and builds.

**Dependencies:**

- None currently identified.

### Plan: Create Art Switchboard CLI Bin

**Phase:** 1 — Hello World

**Status:** `DRAFT`

**Purpose:** Provide the executable command entry point for the first CLI release.

**Description:** Create the `art-switchboard-cli` bin and use Art Lib's config, logger, operations, and runner capabilities; do not add terminal UI.

**Changes:**

- Add the bin entry point, argument/help surface, and executable package metadata.
- Load configuration, initialize logging and operation tracking, and run through Art Lib's runner lifecycle.
- Handle clean shutdown and provide a smoke test for the command entry point.

**Dependencies:**

- Confirm Art Lib's config, logger, operations, and runner package APIs/versions during plan creation.

### Plan: Create Art Switchboard CLI Knowledge

**Phase:** 1 — Hello World

**Status:** `DRAFT`

**Purpose:** Make the CLI's use cases, architecture, and operating model discoverable to users and contributors.

**Description:** Establish the initial package knowledge base for the command, the switchboard artefact model, session turn coordination, and the web application direction.

**Changes:**

- Populate `knowledge/index.md` and add a concise overview and architecture/use-case references.
- Document the artefact-scope prompt prepending model, the Art Agents boundary, Art Lib/Art JS dependencies, the Domain: Messages transport direction, TUI exclusion, setup, and verification.

**Dependencies:**

- None currently identified.

## Work

### Next

Create and refine only the three Phase 1 plans from the outlines above; keep later phases at high-level delivery descriptions until their planning begins.

### Blockers

- None currently block drafting the Phase 1 plans. Confirm Art Lib package APIs/versions before finalizing the bin plan.

---

## Operating Instructions

### Setting Up

**Purpose:** Prepare the repository environment.

**Instructions:** Run from `$ART_BOARDS`:

```bash
npm ci
```

### Writing Commit Message

**Purpose:** Follow workspace commit conventions.

**Instructions:** Read `$WORKSPACE/knowledge/conventions/writing-commit-message.art` and follow `$WORKSPACE/_guide.md`.

### Verifying Completion

**Purpose:** Verify repository formatting and, as package CI becomes available, package build and tests.

**Instructions:** Run from `$ART_BOARDS`:

```bash
npm run lint
npm run ci
```

## Coordination

### Not In Scope

- **Terminal UI (TUI)** — the user interface in this milestone is browser-based, matching Milestone: Art Whiteboard CLI One.
- **Whiteboard participant monitoring** — the fixed whiteboard record and its participant/sentiment model stay owned by the Art Whiteboard CLI; switchboards are arbitrary artefact sets.
- **Session-service extraction** — extracting connection and session management to Project: Art Agents belongs to Milestone: Art Whiteboard CLI One; this milestone consumes the result.
- **Detailed plans for Phases 2–7** — those phases remain high-level; create their plans as the milestone advances.
- **Switchboard-specific records parsing** — use the Art JS records and filesystem records packages.

### Evidence

- **CLI package builds** and exposes the `art-switchboard-cli` executable.
- **Artefact-scoped prompts** — a newly started session receives the switchboard scope, rules, and artefact definitions prepended to its first prompt.
- **Managed turns** — a user continues with the planning agent or starts/attaches a reviewer session, and a cross-session update reaches the target session.
- **Message-board transport** — a message board artefact can be created and used, with `re-read` prepended to the next prompt.
- **Web UI** displays the switchboard artefacts, sessions, current turn, and changes, with supported session interactions.
- **Robustness** — invalid switchboards, unavailable sessions, and no-action states cause no unintended artefact changes or duplicate prompts.
- **Tests** — unit tests cover core logic; integration tests run against checked-in filesystem fixtures and a mock runner server; unsupported operations, errors, interruption, and shutdown are verified.
- **First release** is published to the npm registry with its deployment record updated.

### Findings

- **Runner capabilities differ** — live attachment, persisted-session resumption, and terminal handoff are distinct capabilities and must be verified per adapter.
- **Message channels differ** — direct session prompts and the Message Board are distinct transports; the switchboard routes collaboration over either.
- **Artefacts are arbitrary** — the switchboard references artefact paths and definitions; it must not parse or interpret artefact contents.

### Decisions

- **Phase 1 has three plans only** — scaffold, CLI bin, and package knowledge; no plan files are created by this milestone draft.
- **Art Agents owns session services** — connection and session management are consumed from Project: Art Agents when available, never re-implemented.
- **No TUI** — the user interface in this milestone is a web application.
- **Records substrate** — use `@art-js/records` and the filesystem records layer in Switchboard Management; do not add a bespoke parser/writer.
- **Prompt prepending** — scope, rules, and artefact definitions are prepended to the first prompt of a new session, not injected into artefact contents.
- **Message board is additive** — Domain: Messages transport is adopted later (Phase 6) without removing direct session relays.

### Knowledge to Update

- `$ART_SWITCHBOARD/knowledge/index.md` — link the CLI overview and architecture/use-case resources produced by the Phase 1 knowledge plan.
- `$ART_BOARDS/_guide.md` — list `cli/switchboard` under Repository Layout, Knowledge References, and the hosted roadmaps/backlogs, reconciling the existing `cli/board/` entries.
- `$ART_BOARDS/_roadmap/_parking-lot.md` — remove the POC milestone item once this milestone advances beyond `DRAFT`.

### Follow Ups

- None yet.

### Feedback

- None yet.
