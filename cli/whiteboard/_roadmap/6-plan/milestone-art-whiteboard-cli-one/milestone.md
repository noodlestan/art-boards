# Milestone: Art Whiteboard CLI One

**ID:** `art-whiteboard-cli-one`

**Status:** `DRAFT`

**Template:** `$DOMAINS/milestones/templates/milestone.tart`

**Has Context File:** `FALSE`

**Skill:** `write-milestone`

**Purpose:** Deliver the first releasable `@art-boards/whiteboard-cli` for monitoring whiteboard participant sessions and dispatching next-turn prompts through a web application.

**Description:** Seven phases establish the CLI baseline, session management, whiteboard turn processing, a web UI and interactions, extraction of session management to Project: Art Agents, and a first public release. TUI is explicitly out of scope.

## Mandatory Reading

::READ `$DOMAINS/milestones/structures/milestone.art` (Structure) — Defines the milestone structure and nested types.

---

## Path Variables

| Variable          | Resolved Path                     | Purpose                                      |
| ----------------- | --------------------------------- | -------------------------------------------- |
| `$WORKSPACE`      | Current working directory         | Workspace root directory                     |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`      | Domain resources directory                   |
| `$ART_BOARDS`     | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                        |
| `$ART_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard`      | Art Whiteboard CLI package and its planning  |
| `$ART_LIB`        | `$WORKSPACE/checkouts/art-lib`    | Shared libraries and CLI infrastructure      |
| `$ART_JS`         | `$WORKSPACE/checkouts/art-js`     | Shared record operations                     |
| `$ART_WORK`       | `$WORKSPACE/checkouts/art-work`   | Published twin CLI and consumer requirements |

## Summary

Deliver the first releasable `@art-boards/whiteboard-cli`: scaffold and launch the CLI, manage runner sessions, read and monitor whiteboards, dispatch next-turn prompts, provide a web UI, extract reusable session management to Project: Art Agents, and release the application. Phase 1 contains three proposed plans; this milestone draft does not create plan files.

## Scope

This milestone coordinates the Art Whiteboard CLI from package foundation through its first releasable web-backed application. Phase 1 is the only phase decomposed into plan outlines here; later phases remain high-level delivery summaries.

### (Scope) Repository: Art Boards

**Record:** `$ART_BOARDS/_records/repository.art`

**Role:** Hosts the CLI package, roadmap, backlog, and knowledge.

**Partial:**

- `remote` — `git@github.com:noodlestan/art-boards.git`
- `workspaces` — `cli/**`
- `private` — `false`

**Changes:** Add the CLI implementation, web application, and milestone outputs.

### (Scope) Package: Art Whiteboard CLI

**Record:** `$ART_WHITEBOARD/_records/package.art`

**Role:** Product package for whiteboard session monitoring and next-turn dispatch.

**Partial:**

- `canonicalName` — `@art-boards/whiteboard-cli`
- `path` — `cli/whiteboard`
- `bin` — `art-boards-whiteboard`
- `published` — `true`

**Changes:** Scaffold, provide a CLI bin, implement whiteboard/session behavior, build the web UI, and publish the first usable release.

### (Scope) Project: Art Lib

**Record:** `$ART_LIB/_records/project.art`

**Role:** Upstream provider of shared CLI tooling consumed by this milestone.

**Partial:**

- `purpose` — Build high-quality, consistent CLI and tool experiences from composable units.
- `resources` — Package: Art Lib FS Records.

**Changes:** Provide config, logger, operations, prompts, and runner capabilities through Art Lib's own plans; this milestone does not modify Art Lib resources.

### (Scope) Project: Art JS

**Record:** `$ART_JS/_records/project.art`

**Role:** Upstream provider of record operations used by Whiteboard Management.

**Partial:**

- `purpose` — Enable Art files to be authored as programs, with validation, language tooling, and automated projection.
- `resources` — Includes Package: Records and related Art MD tooling.

**Changes:** Provide the records API through Art JS's own plans; this milestone consumes the shared capability and does not modify Art JS resources.

### (Scope) Project: Art Work

**Record:** `$ART_WORK/_records/project.art`

**Role:** Published twin CLI and consumer source for incremental-adoption requirements.

**Partial:**

- `purpose` — Manage multi-repository development environments for parallel planning and execution.
- `resources` — Package: Art Work CLI.
- `private` — `false`

**Changes:** Provide consumer requirements and review input; this milestone does not modify Art Work resources.

### (Scope) Project: Art Agents

**Record:** To be created in Phase 6.

**Role:** Destination project for the extracted connection and session-management services.

**Partial:**

- `status` — Proposed; project and records not yet initialized.
- `responsibilities` — Connection service and session-management service for Art ↔ agent boundary operations.

**Changes:** Receive the reusable services and runner adapters in Phase 6.

## Execution Context

Planning and package verification occur from `$ART_BOARDS`; package source and web application work live under `$ART_WHITEBOARD`. Art Lib and Art JS capabilities are consumed according to their own delivery plans. Project: Art Agents is the planned downstream owner for extracted session services.

## Upstream Work

- Whiteboard: Art Whiteboard CLI Inception — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/whiteboard.md`
- Research: Agent Session Management — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/agent-sessions__research.md`
- Milestone: Art Records — `$ART_JS/_roadmap/3-now/milestone-art-records/milestone.md`
- Plan: Create Lib Records — `$ART_JS/_backlog/4-next/plan-create-lib-records/plan.md`

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
- Deployments — `$DOMAINS/deployments/index.md`
- Work — `$DOMAINS/work/index.md`

## Resource Kinds in Scope

- Project — `$DOMAINS/projects/structures/project.art`
- Repository — `$DOMAINS/repositories/structures/repository.art`
- Package — `$DOMAINS/packages/structures/package.art`
- Milestone — `$DOMAINS/milestones/structures/milestone.art`
- Plan — `$DOMAINS/plans/structures/plan.art`

## Workflows

- Roadmapping — `$DOMAINS/roadmaps/workflows/roadmapping/workflow.art`
- Planning Work — `$DOMAINS/work/workflows/planning-work/workflow.art`
- Delegating Work — `$DOMAINS/work/workflows/delegating-work/workflow.art`
- Executing Work — `$DOMAINS/work/workflows/executing-work/workflow.art`
- Deploying — `$DOMAINS/deployments/workflows/deploying/workflow.art`

## Knowledge

- Guide: Art Boards — `$ART_BOARDS/_guide.md` — repository setup and verification.
- Guide: Art Whiteboard CLI — `$ART_WHITEBOARD/_guide.md` — package layout and workflows.
- Research: Agent Session Management — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/agent-sessions__research.md` — runner capabilities, boundaries, and verification questions.
- Whiteboard: Art Whiteboard CLI Inception — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/whiteboard.md` — approved product direction and phase outline.
- Knowledge: Art Work CLI Overview — `$ART_WORK/cli/work/knowledge/overview.md` — published-twin requirements.

---

## Phases

| Index | Name                  | Status     |
| ----- | --------------------- | ---------- |
| 1     | Hello World           | `PLANNING` |
| 2     | Session Management    | `DRAFT`    |
| 3     | Whiteboard Management | `DRAFT`    |
| 4     | Web UI MVP            | `DRAFT`    |
| 5     | Web UI Interactions   | `DRAFT`    |
| 6     | Extract Agents        | `DRAFT`    |
| 7     | First Release         | `DRAFT`    |

### Phase: 1 — Hello World

**Goal:** Establish a buildable Art Whiteboard CLI package, an executable bin using Art Lib's shared CLI infrastructure, and a useful package knowledge base.

**Description:** Scaffold the package, create its bin using Art Lib config/logger/operations/runner capabilities, and create package knowledge. This milestone lists the plan outlines only; no plan files are created yet.

**Status:** `PLANNING`

**Dependencies:**

- Confirm the `@art-lib/config`, `@art-lib/logger`, and `@art-lib/operations` package APIs and versions, and Art Lib's proposed `createRunner` capability (candidate API; package and contract not finalized), before finalizing the bin plan.

### Phase: 2 — Session Management

**Goal:** Provide the connection and session-management services required to associate agent sessions with whiteboard artefacts.

**Description:** Design the application-level service boundary and contracts for eventual ownership by Project: Art Agents, then deliver runner connection; session listing and artefact association; known-session persistence and reload; session-update subscriptions; sending a message to a session; and starting or resuming sessions where supported. Preserve runner capability differences rather than assuming attachment, resumption, and terminal handoff are equivalent; Phase 6 extracts the services and adapters to Art Agents.

**Status:** `DRAFT`

**Dependencies:**

- None identified beyond the runner capabilities documented in the session-management research.

### Phase: 3 — Whiteboard Management

**Goal:** Reliably interpret whiteboard records and coordinate participant turns through the session services.

**Description:** Use `@art-js/records` and the filesystem records layer as the records substrate; read and validate whiteboards, identify the current eligible participant and associated session, watch for whiteboard changes, and send next-turn prompts through session management. Offer validation as a CLI entry point (for example, `--validate {file}`) and as UI feedback on load and change; do not directly invoke Artificials routines. Do not implement a whiteboard-specific records parser or writer.

**Status:** `DRAFT`

**Dependencies:**

- `@art-js/records` extraction, update, and proxy capabilities for deterministic nested record access and updates; the record model is done, later phases remain planned, and delegation is gated on the constructs release.
- `@art-lib/fs-records` discovery and filesystem content-source capabilities for locating and accessing whiteboard files; the package is published, and its adapter extension is held pending the records layer.

### Phase: 4 — Web UI MVP

**Goal:** Provide a browser-based view of the whiteboard and current session state.

**Description:** Scaffold, build, and serve the web application; establish its socket connection; display the whiteboard record, current turn, participant sentiments, and changes list. This is a web UI, not a terminal UI.

**Status:** `DRAFT`

**Dependencies:**

- None identified beyond whiteboard and session data supplied by earlier phases.

### Phase: 5 — Web UI Interactions

**Goal:** Let users manage session associations and perform supported session actions from the web application.

**Description:** Provide interactions to register or associate a session with a whiteboard participant, start or attach/resume sessions where supported, send prompts, inspect session state, and surface unsupported operations or failures clearly.

**Status:** `DRAFT`

**Dependencies:**

- None identified beyond session-management operations and the web UI established by earlier phases.

### Phase: 6 — Extract Agents

**Goal:** Establish Project: Art Agents as the owner of reusable runner connection and session-management services.

**Description:** Initialize Project: Art Agents and its records; extract the connection/session services and runner adapters behind the agreed contracts; update the Art Whiteboard CLI to consume the extracted services without retaining duplicate session-management implementations.

**Status:** `DRAFT`

**Dependencies:**

- The session service boundary and runner contracts established in Phase 2.

### Phase: 7 — First Release

**Goal:** Publish a verified first releasable Art Whiteboard CLI.

**Description:** Complete integration testing with checked-in filesystem fixtures and a mock runner server, verifying unsupported operations, errors, interruption, and shutdown; then verify the end-to-end whiteboard-to-session turn flow, package and web application builds, supported runner behavior, clean shutdown, and release documentation; publish the CLI package and update its deployment record.

**Status:** `DRAFT`

**Dependencies:**

- None beyond the phase deliverables and release verification.

---

## Items:

The following three Phase 1 plans are outlined but do not yet have plan files.

### Plan: Scaffold Art Whiteboard CLI

**Phase:** 1 — Hello World

**Status:** `DRAFT`

**Purpose:** Establish the minimum publishable package foundation for `@art-boards/whiteboard-cli`.

**Description:** Create the package manifest and build, test, and lint foundation, aligned with the Art Boards workspace and package record.

**Changes:**

- Create the package manifest and package-level build/test configuration.
- Scaffold source and test directories and package release files.
- Connect package scripts to the repository workspace tooling and verify the package installs and builds.

**Dependencies:**

- None currently identified.

### Plan: Create Art Whiteboard CLI Bin

**Phase:** 1 — Hello World

**Status:** `DRAFT`

**Purpose:** Provide the executable command entry point for the first CLI release.

**Description:** Create the `art-boards-whiteboard` bin and use Art Lib's config, logger, operations, and runner capabilities; do not add terminal UI.

**Changes:**

- Add the bin entry point, argument/help surface, and executable package metadata.
- Load configuration, initialize logging and operation tracking, and run through Art Lib's runner lifecycle.
- Handle clean shutdown and provide a smoke test for the command entry point.

**Dependencies:**

- Confirm Art Lib's config, logger, operations, and runner package APIs/versions during plan creation.

### Plan: Create Art Whiteboard CLI Knowledge

**Phase:** 1 — Hello World

**Status:** `DRAFT`

**Purpose:** Make the CLI's use cases, architecture, and operating model discoverable to users and contributors.

**Description:** Establish the initial package knowledge base for the command, session-management boundary, whiteboard model, and web application direction.

**Changes:**

- Populate `knowledge/index.md` and add a concise overview and architecture/use-case references.
- Document the proposed Art Agents boundary, Art Lib/Art JS dependencies, TUI exclusion, setup, and verification.

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

- **Terminal UI (TUI)** — this application will not be the first adopter of Art Lib terminal UI. The user interface in this milestone is browser-based.
- **Cross-session sentiment monitoring** — incubate under `3000`; displaying per-board participant sentiments (Phase 4) remains in scope.
- **Detailed plans for Phases 2–7** — those phases remain high-level; create their plans as the milestone advances.
- **Whiteboard-specific records parsing** — use the Art JS records and filesystem records packages.

### Evidence

- **CLI package builds** and exposes the `art-boards-whiteboard` executable.
- **Session turn flow** identifies the associated participant session and dispatches a next-turn prompt through the session-management service.
- **Web UI** displays a current whiteboard record, turn, sentiments, and changes, with supported session interactions.
- **Robustness** — invalid boards, unavailable sessions, and no-action states cause no unintended board changes or duplicate prompts.
- **Tests** — unit tests cover core logic; integration tests run against checked-in filesystem fixtures and a mock runner server; unsupported operations, errors, interruption, and shutdown are verified.
- **First release** is published to the npm registry with its deployment record updated.

### Findings

- **Runner capabilities differ** — live attachment, persisted-session resumption, and terminal handoff are distinct capabilities and must be verified per adapter.
- **Message channels differ** — the whiteboard Message Board is participant collaboration; runner prompts are sent through session management.

### Decisions

- **Phase 1 has three plans only** — scaffold, CLI bin, and package knowledge; no plan files are created by this milestone draft.
- **Art Agents owns extracted session services** — connection and session management are designed as a reusable boundary and extracted in Phase 6.
- **No TUI** — the user interface in this milestone is a web application.
- **Records substrate** — use `@art-js/records` and the filesystem records layer in Whiteboard Management; do not add a bespoke parser/writer.

### Knowledge to Update

- `$ART_WHITEBOARD/knowledge/index.md` — link the CLI overview and architecture/use-case resources produced by the Phase 1 knowledge plan.
- `$ART_WHITEBOARD/_guide.md` and `$ART_WHITEBOARD/README.md` — update usage/setup/release instructions when the CLI and web application are ready.

### Follow Ups

- None yet.

### Feedback

- None yet.
