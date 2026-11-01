# Milestone: Relayboard POCs

**ID:** `relayboard-pocs`

**Status:** `DRAFT`

**Template:** `$DOMAINS/milestones/templates/milestone.tart`

**Has Context File:** `FALSE`

**Skill:** `write-milestone`

**Purpose:** De-risk Phases 2–5 of Milestone: Art Relayboard CLI One through throwaway research and POCs, producing the verified capability evidence, fixtures, bake-off notes, and UI package topology that the delivery phases and `milestone-relayboard-ui` consume.

**Description:** Five phases — session POC, relayboard record POC, web-app shell POC, interaction POCs, and UI knowledge and planning — coordinated within `$ART_BOARDS`. Outputs are research artefacts and knowledge records; no shipped or published code.

## Mandatory Reading

::READ `$DOMAINS/milestones/structures/milestone.art` (Structure) — Defines the milestone structure and nested types.

---

## Path Variables

| Variable          | Resolved Path                     | Purpose                                            |
| ----------------- | --------------------------------- | -------------------------------------------------- |
| `$WORKSPACE`      | Current working directory         | Workspace root directory                           |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`      | Domain resources directory                         |
| `$ART_BOARDS`     | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                              |
| `$ART_RELAYBOARD` | `$ART_BOARDS/cli/relayboard`      | The package hosting POC scratch code and knowledge |
| `$ART_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard`      | Session research and inception precedent           |
| `$ART_LIB`        | `$WORKSPACE/checkouts/art-lib`    | Config, logger, operations, runner availability    |
| `$ART_JS`         | `$WORKSPACE/checkouts/art-js`     | Records substrate availability                     |

## Summary

Explore and POC the open risks behind Art Relayboard CLI delivery: verify runner session capabilities — start, attach, prompt, dispose — with a capability matrix; roundtrip a relayboard fixture on the Art JS records substrate; stand up a SolidJS shell exchanging state with a running CLI over WebSocket; probe drag-drop and connector approaches; and draft the StandardUi-based package topology — package, module, service, component, mixin, token — for a proposed `@stoodio` namespace, with scaffolding deferred until the topology lands.

## Scope

Research and throwaway exploration only, staged inside the Art Relayboard package. No published artefacts, no delivery features, no namespace scaffolding.

### (Scope) Repository: Art Boards

**Record:** `$ART_BOARDS/_records/repository.art`

**Role:** Hosts the package, roadmap, backlog, and the knowledge outputs of every POC.

**Partial:**

- `workspaces` — `cli/**`

**Changes:** Receive POC scratch code, fixtures, and knowledge records under `cli/relayboard`.

### (Scope) Package: Art Relayboard CLI

**Record:** `$ART_RELAYBOARD/_records/package.art`

**Role:** Hosts POC harnesses and the knowledge outputs; the package itself is not extended by this milestone.

**Partial:**

- `published` — unchanged (`false`); POC code is never part of the published surface.

**Changes:** Add throwaway POC probes, fixtures, and knowledge documents linked from `knowledge/index.md`.

### (Scope) Project: Art Lib

**Record:** `$ART_LIB/_records/project.art`

**Role:** Availability target for the runtime capabilities the session POC verifies.

**Partial:**

- `resources` — Package: Art Lib Config; planned logger, operations, and runner packages.

**Changes:** Verified for availability and API shape by the POCs; this milestone modifies no Art Lib resources.

### (Scope) Project: Art JS

**Record:** `$ART_JS/_records/project.art`

**Role:** Availability target for the records substrate the relayboard-record POC exercises.

**Partial:**

- `resources` — Includes Package: Records and related Art MD tooling.

**Changes:** Verified for availability and API shape by the POCs; this milestone modifies no Art JS resources.

## Execution Context

POC work executes from `$ART_BOARDS` inside `$ART_RELAYBOARD`. Throwaway probes live under the package's POC area and are never published; durable outputs — capability matrix, transport contract, fixtures, bake-off notes, topology — land in `$ART_RELAYBOARD/knowledge/`.

## Upstream Work

- Milestone: Art Relayboard CLI One — `$ART_RELAYBOARD/_roadmap/6-plan/milestone-art-relayboard-cli-one/milestone.md` — Phases 2–5 whose risks this milestone answers.
- Research: Agent Session Management — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/agent-sessions__research.md` — runner capabilities and verification questions.
- Whiteboard: Art Whiteboard CLI Inception — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/whiteboard.md` — precedent for research artefacts feeding a delivery milestone.
- Parking Lot: Art Boards Roadmap — `$ART_BOARDS/_roadmap/_parking-lot.md` — source of this milestone proposal.

## Required Skills

- `write-plan` — `$WORKSPACE/.agents/skills/write-plan/SKILL.md` — Create and refine downstream plans after this milestone's phase scope is approved.
- `render-template` — `$WORKSPACE/.agents/skills/render-template/SKILL.md` — Render milestone and downstream work-item files.

## Domains

- Projects — `$DOMAINS/projects/index.md`
- Packages — `$DOMAINS/packages/index.md`
- Roadmaps — `$DOMAINS/roadmaps/index.md`
- Milestones — `$DOMAINS/milestones/index.md`
- Plans — `$DOMAINS/plans/index.md`
- Work — `$DOMAINS/work/index.md`

## Resource Kinds in Scope

- Project — `$DOMAINS/projects/structures/project.art`
- Package — `$DOMAINS/packages/structures/package.art`
- Milestone — `$DOMAINS/milestones/structures/milestone.art`
- Plan — `$DOMAINS/plans/structures/plan.art`

## Workflows

- Roadmapping — `$DOMAINS/roadmaps/workflows/roadmapping/workflow.art`
- Planning Work — `$DOMAINS/work/workflows/planning-work/workflow.art`
- Delegating Work — `$DOMAINS/work/workflows/delegating-work/workflow.art`
- Executing Work — `$DOMAINS/work/workflows/executing-work/workflow.art`

## Knowledge

- Guide: Art Boards — `$ART_BOARDS/_guide.md` — repository setup and verification.
- Guide: Art Relayboard CLI — `$ART_RELAYBOARD/_guide.md` — package layout and operating instructions.
- Research: Agent Session Management — `$ART_WHITEBOARD/_roadmap/whiteboard-art-boards-inception/agent-sessions__research.md` — runner capabilities, boundaries, and verification questions.

---

## Phases

| Index | Name                      | Status  |
| ----- | ------------------------- | ------- |
| 1     | Session POC               | `DRAFT` |
| 2     | Relayboard Record POC     | `DRAFT` |
| 3     | Web App Shell POC         | `DRAFT` |
| 4     | Interaction POCs          | `DRAFT` |
| 5     | UI Knowledge and Planning | `DRAFT` |

### Phase: 1 — Session POC

**Goal:** A verified capability matrix for starting, attaching to, prompting, and disposing runner sessions.

**Description:** Build a throwaway harness that exercises the runner — list, start, attach, send prompt, resume, kill — against the session-management research's verification questions, and record which capabilities each adapter actually supports rather than assuming attachment, resumption, and terminal handoff are equivalent. Consume Project: Art Agents services if available; otherwise the runner as documented by the research.

**Status:** `DRAFT`

**Dependencies:**

- Runner and SDK availability — confirm the exact Opencode session library and its API per Research: Agent Session Management before finalizing the POC plans.

### Phase: 2 — Relayboard Record POC

**Goal:** A proven roundtrip — read, validate, update, watch — over a relayboard fixture on the records substrate.

**Description:** Exercise `@art-js/records` and `@art-lib/fs-records` against a checked-in fixture carrying scope, rules, and an arbitrary artefact set; verify extraction, nested updates, validation feedback, and change watching; record which capabilities are real versus pending extraction.

**Status:** `DRAFT`

**Dependencies:**

- `@art-js/records` extraction, update, and proxy capabilities — release-gated; verify availability before planning. `@art-lib/fs-records` is published.

### Phase: 3 — Web App Shell POC

**Goal:** A SolidJS shell running standalone with `npm run dev`, exchanging switchboard, session, turn, and change state with a running CLI process over WebSocket.

**Description:** Stand up the throwaway application shell and a stub CLI endpoint; draft the transport contract — message shapes, subscription, reconnect — that the delivery Web UI MVP will formalise; record the contract in knowledge.

**Status:** `DRAFT`

**Dependencies:**

- None — the stub endpoint is local to the POC; the delivery CLI integration belongs to the delivery milestone.

### Phase: 4 — Interaction POCs

**Goal:** Selected drag-drop and connector approaches, evidenced by throwaway probes rather than preference.

**Description:** Build small probes for drag-drop over artefact and session views and for connector rendering between them; compare candidate libraries on interaction quality, maintenance, and fit with the SolidJS stack; record the bake-off notes that Phase 5 of the delivery milestone consumes.

**Status:** `DRAFT`

**Dependencies:**

- None — probes run in throwaway space without delivery coupling.

### Phase: 5 — UI Knowledge and Planning

**Goal:** The StandardUi-based package topology — package, module, service, component, mixin, token — drafted for the proposed `@stoodio` namespace, ready for `milestone-relayboard-ui` to execute.

**Description:** Synthesise the POC outcomes plus the drag-drop and connector requirements into a topology document: which generic packages exist, what each owns, how they compose, and the namespace/repository strategy; draft skeleton specifications only — no repositories, project records, or packages are created here.

**Status:** `DRAFT`

**Dependencies:**

- StandardUi base components — source, version, and licensing to be identified during this phase before the topology can be drafted.

---

## Items:

No plan records yet — Phase 1 plan files are created when planning begins.

## Work

### Next

Draft the Phase 1 (Session POC) plans.

### Blockers

- None currently block drafting the Phase 1 plans; confirm runner and SDK availability when planning them.

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

**Purpose:** Verify repository formatting and package CI.

**Instructions:** Run from `$ART_BOARDS`:

```bash
npm run lint
npm run ci
```

## Coordination

### Not In Scope

- **Delivery implementation** — features land in Milestone: Art Relayboard CLI One; POC code is throwaway and never published.
- **`@stoodio` scaffolding** — no repository, project, or package records are created until the Phase 5 topology delivers them; `milestone-relayboard-ui` then executes the setup.
- **Setup Standard UI** — belongs to the parked `milestone-relayboard-ui`, consuming this milestone's topology.
- **Terminal UI** — the interface stays browser-based, matching the delivery milestone.
- **Message-board transport** — out of scope, matching the delivery milestone; collaboration travels as session messages only.

### Evidence

- None yet.

### Findings

- None yet.

### Decisions

- **POC ≠ delivery** — probes are throwaway; only evidence, fixtures, and knowledge records persist.
- **`@stoodio` deferred** — the namespace and its repositories are created only from the Phase 5 topology.
- **One POC milestone** — covers Phases 2–5 risks of the delivery milestone, replacing the parked UI-only proposal.

### Knowledge to Update

- `$ART_RELAYBOARD/knowledge/index.md` — link the POC outputs: capability matrix, transport contract, fixtures, bake-off notes, and topology.
- `$ART_BOARDS/_roadmap/_parking-lot.md` — remove the POC milestone item once this milestone advances beyond `DRAFT`.

### Follow Ups

- None yet.

### Feedback

- None yet.
