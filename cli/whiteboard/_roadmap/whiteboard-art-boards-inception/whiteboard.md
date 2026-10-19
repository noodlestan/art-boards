# Whiteboard: Art Whiteboard CLI Inception

**ID:** `art-boards-inception`

**Owner:** `ART_BOARDS`

**Purpose:** Agree the Art Whiteboard CLI milestones `one`, `next`, and `3000`, and write them to the Art Whiteboard CLI roadmap.

**Description:** Shared whiteboard where architects compose the three magic milestones of `@art-boards/whiteboard-cli` — `one`: the first releasable cut; `next`: feasible ideas only; `3000`: the brightest imagined long-distance future. Whiteboard will work through many focused short goals that jump between milestones until each draft is agreed and written to `$ART_BOARDS/cli/whiteboard/_roadmap/`. Architects draft their planning artefacts in their repositories in parallel and present them here for review and alignment; plans are delegated in the owning repos, and the board waits on those delegations to write better plans. No development or direct changes to codebase allowed.

## Mandatory Reading

::READ `_records/project.art` - This project's record: purpose and description.

::READ `cli/whiteboard/_records/package.art` - The Whiteboard CLI package record: purpose and description.

---

## Facilitation

**Turn:** `ART_WORK`

**Purpose:** Focused roadmap building, research alignment, and message-flow design.

**Description:** Turn-taking, goal tracking, statuses, agreements, and sentiments.

**Goal:** Draft Milestone One — the first releasable cut of `@art-boards/whiteboard-cli` — and start its implementation as soon as possible, where possible.

**Orientation:** During your turn, focus on contributing with short notes to the milestone one draft below, describing succintly and using refs to knowledge/planning artefacts when available, without repeating their content here. If you come across a feature idea or unrealized potential that do not fit the short term, classify it and categorize it anyway, and feel free to add a short note to the another milestone, according to the horizon of the idea.

**Tasks:**

- [x] `ART_WORK` — published-consumer wishlist and dependency order added below.
- [x] `ART_LIB` — config/logger independently; operations model may parallel, operations log follows logger; prompts for `init`; defer UI until persistent-monitor scope is clear.
- [x] `ART_JS` — record operations the CLI needs and their availability.
- [x] `ART_DOMAINS` — domain constraints and opportunities that shape milestone one.
- [x] `ART_BOARDS` — compose the milestone-one draft from the Roadmapping ideas.
- [x] `MANAGEMENT` — first review: challenged Milestone One scope and use-case coverage.
- [ ] All seats — review and agree the milestone-one draft.
- [ ] `ART_BOARDS` — write `_roadmap/6-plan/milestone-art-boards-one/milestone.md`; draft its plans; delegate every `READY` plan where possible. _→ archive this goal here._

**Done:**

- [x] **Introductions and operations** – All active participants introduced and `READY`; message board live; structure and agreements converged.

**Whiteboard Structure:**

- h2. Mandatory Reading
- h2. Facilitation
- h2. Participants (one section per Participant)
- h2. Attachments
- h2. Message Board
- h2. Parking lot
- h2. Research
- h2. Roadmapping
- h2. Changes
- h2. Follow-ups
- h2. Instructions

**Working Agreements:**

- Participants MUST NOT explore each other's artefacts without prior agreement from owners.
- Participants MUST NOT modify each other's artefacts without prior agreement from owners.
- Participants prefer to add questions to the Pending/Questions rather than making assumptions about the state of other projects.
- Only the participant named in `turn` writes to this file — the `## Message Board` section is writable by every participant at any time, with or without the turn.
- Write messages via Routine: Write Message with `%bypass-clean-check` `true` — the Message Board is writable at all times, even with uncommitted changes.
- Fair turn-taking: anyone idle for the preceding `N × 2` turns takes the next turn.
- The list of `changes` is one bullet per turn, at most 120 characters.
- Prefer one short direct sentence to long prose paragraphs.
- Prefer naming resources to abbreviations — no "Package X", "Plan A"; name the actual resource.
- Parking-lot items are at most 300 characters, hold current state only, and are pruned aggressively by their author or the board owner.
- Cross-participant messages travel via the `## Message Board` section — never the parking lot — and are purged as soon as read and actioned; the receiver records any follow-up work in their own artefacts (example: a task in a local parking lot).
- Every introduction attachment carries two custom fields: `Planning` (paths to the participant's Art-Boards-relevant planning artefacts) and `Deliverables` (what this participant delivers for this project).
- Goals follow the goal shape and require approval from all active participants before work starts.

**Participant Statuses:**

- `INTRODUCING` — Participant is still curating their record and attachment.
- `READY` — Participant is participating in the discussion and available to take turns.
- `LEFT` — Participant has left the discussion and is no longer available to take turns.

**Sentiment:**

- `MANAGEMENT` - 😇 wishful thinking; hoping this works 😰 afraid of verbose agents.
- `ART_BOARDS` - 🧭 Reorganized Milestone One around the proposed Art Agents services; citing runner research and defining dependencies.
- `ART_DOMAINS` - 🎯 domain constraints added to milestone one; long-term ideas routed to next/3000; re-diffing after every write from now on.
- `ART_LIB` - 🤔 approve once ui/watcher/lifecycle split; proposed `createRunner` for graceful interruption and shutdown.
- `ART_JS` - 👍 I'm aligned on the records layer; I'm waiting on the constructs release while `ART_DOMAINS` adds domain constraints.
- `ART_WORK` - 👍 goal approved; sharing published-consumer demands and dependency order for milestone one.

---

## Participants

### `MANAGEMENT`

**Status:** `READY`

**Attachment:** [`./architect__management.md`](./architect__management.md)

**Planning:** `$MANAGEMENT/_roadmap/3-now/milestone-hello-world/milestone.md`.

**Goals:** Ensure plans cover all expected use cases.

**Expectation:**

- `ART_BOARDS` – drive this whiteboard; populate the roadmap; define the next plan; identify dependencies; validate plans by others to unblock your path.
- `ART_DOMAINS` – contribute long-term ideas and feasible use cases around your domain models and interactions.
- `ART_LIB` – deliver plans to unblock whiteboards; prefer solutions aligned with your own long-term roadmap to bespoke one-offs; re-align your roadmap with the use cases surfaced here.
- `ART_JS` – deliver plans to unblock whiteboards; prefer solutions aligned with your own long-term roadmap to bespoke one-offs; re-align your roadmap with the use cases surfaced here.
- `ART_WORK` – inform Art Lib's plans; review Art Whiteboard CLI plans; plan refactoring of their own codebase in order to use art-lib's config, operations, and logger as soon as that lands and plan adoption of prompts (in their `init` command), and ui, watcher, and process life-cycle management (in their persistent CLI features).

### `ART_BOARDS`

**Status:** `READY`

**Goals:** Own the Art Whiteboard CLI inception: draft and agree `_roadmap` milestones `one`, `next`, and `3000`; review every plan before delegation; keep the message board as the only messaging channel.

**Expectations:**

- `ART_DOMAINS` – Lands the messages domain and skill ASAP — usable before publication.
- `ART_LIB` – Draft plans for shared CLI tooling (config, logger, operations, prompts, UI, and other reusable libraries surfaced by the roadmap); agent-session connection and management are proposed for `Project: Art Agents`.
- `ART_JS` – Draft plans for libs and tools to read, modify, and write records and resources. Enable composing deterministic read/parse/validate/transform/write operations over the whiteboard document and all its nested records.

**Attachment:** `./architect__art-boards.md`

**Package:** `@art-boards/whiteboard-cli` at `$ART_BOARDS/cli/whiteboard` — CLI monitoring whiteboard participant sessions and dispatching "next turn" prompts.

**Roadmap:** `$ART_BOARDS/cli/whiteboard/_roadmap/` — milestones to be generated: `3-now/milestone-one`, `4-next/milestone-next`, `9-inbox/milestone-3000`.

### `ART_DOMAINS`

**Status:** READY

**Attachment:** `./architect__art-domains.md`

### `ART_LIB`

**Status:** READY

**Attachment:** `./architect__art-lib.md`

### `ART_JS`

**Status:** READY

**Attachment:** `./architect__art-js.md`

### `ART_WORK`

**Status:** READY

**Attachment:** `./architect__art-work.md`

**Goals:** Inform Art Whiteboard CLI Milestone One from the published twin CLI; identify shared infrastructure and adoption order; review plans before delegation.

**Expectations:** `ART_LIB` — plan compatible, incremental adoption for a published consumer; `ART_BOARDS` — review Art Work planning artefacts before delegation.

**Planning:** `$ART_WORK/cli/work/_roadmap/` (`3-now/milestone-rename-art-work-to-art-box`); `$ART_WORK/cli/work/_backlog/` (`3-now/plan-migrate-planning-and-knowledge`, `3-now/plan-rename-repo-and-project`); `$ART_WORK/cli/work/knowledge/overview.md`.

**Deliverables:** Published-twin requirements and dependency order for shared config/operations/logger, prompt-driven `init`, and persistent UI/watcher/process lifecycle; reviews of Art Whiteboard CLI plans.

---

## Attachments

- `./agent-sessions__research.md` — runner integration research, session-management use cases, service boundaries, and open verification questions.
- `./architect__management.md`.
- `./architect__art-boards.md`.
- `./architect__art-domains.md`
- `./architect__art-lib.md`
- `./architect__art-js.md`
- `./architect__art-work.md`
- `./parking-lot__resolved.md` — resolved items archive (created at first goal close).

---

## Message Board

The message board is this board's only messaging channel: short messages are written here and purged as soon as they are read and actioned; long messages travel as `file` media attached to this board.

- The message board is live: `ART_DOMAINS` has delivered the messages domain and `messaging` skill in `$WORKSPACE`. Short messages are written here and purged once read and actioned; long messages travel as file media attached to this board.

**Instructions:**

- Writable by every participant at any time, with or without the turn; writes go through Routine: Write Message with `%bypass-clean-check` `true`.
- Only the receiver named in `to` deletes their messages; the sender never deletes its own message.

### Messages

#### **Type:** `FEEDBACK` | **From:** `ART_LIB` | **To:** `ART_BOARDS`

**Timestamp:** 2026-10-19T12:57:14Z

Milestone One dependencies: split `@art-lib/{new-packages}` — `@art-lib/ui` = terminal rendering, proposed `createRunner` = interruption/crash/shutdown, watcher stays in the whiteboard CLI.

#### **Type:** `FEEDBACK` | **From:** `ART_LIB` | **To:** `ART_BOARDS`

**Timestamp:** 2026-10-19T12:57:15Z

Broken link in Milestone One's Dependency context: `./__research.md` — use `./agent-sessions__research.md`.

### Instructions

- Messages are short-lived: the receiver deletes each message from the message board once read and actioned.
- Only the receiver named in `to` may delete a message; the sender never deletes its own message.

---

## Parking lot

The parking lot tracks short-lived open items only: when planning updates, prepare to remove items that are done and capture valuable information in the artefact where it belongs — a planning artefact, an attachment, or a follow-up.

### Actionable

- `Roadmapping` exceeds the 100-line limit — propose moving the Milestone One draft to an attachment (link plus summary here) or compacting the section in place.

### Pending/Questions

- None.

### Blockers

- None.

---

## Research

Research context for the Art Whiteboard CLI project: runner session integration, whiteboard domain consumption, and producer landscapes (prompts, UI, shared CLI tooling, and session adapters).

- `./agent-sessions__research.md` — research on opencode/others session integration for whiteboard domain consumption, and cli to agent bridges and adapters.

- _Participants add research findings here as they converge; one bullet per finding, linking its source. Long form research content must be authored as attachments and listed here. As content grows, findings are organised in h3. sections, by topic._

---

## Roadmapping

The Art Whiteboard CLI `_roadmap` milestones composed on this board.

Describe ideas that maximise leverage of the existing ecosystem or push it forward with new high-impact capabilities.

Drafts are added here first as notes, later curated and moved to the milestone files.

### Milestone: Art Whiteboard CLI One

**File:** `_roadmap/6-plan/milestone-art-boards-one/milestone.md`

#### Ideas

Essentials, first steps, de-risking, validation.

- Reusable persistent-CLI entry point (`ART_LIB` candidate): `createRunner(logger, options).run(handler => …)` handles interruption and crashes; `handler.onShutdown()` registers cleanup, `handler.shutdown()` ends the run. Keeps watcher lifecycle in the CLI and `@art-lib/ui` to terminal rendering only. Candidate note at `$ART_JS/_backlog/_parking-lot.md`.

#### Milestone One Draft

**ID:** `art-whiteboard-cli-one`

**Status:** `DRAFT`

**Purpose:** Deliver the first releasable `@art-boards/whiteboard-cli` for monitoring whiteboard participant sessions and dispatching next-turn prompts.

**Description:** A usable CLI release that reads and validates a whiteboard, identifies the participant who should act and their running session, attaches to that session when possible, and dispatches next-turn prompts through the proposed Art Agents services while preserving the whiteboard as the source of truth.

**Dependency context:** See [`./__research.md`](./__research.md) for session-management use cases, runner integration research, and boundary questions. The services are a proposal; establishing `Project: Art Agents` and designing the service boundary and contracts up-front are prerequisites.

**Proposal:** Add `Project: Art Agents`.

**Responsibilities:** Provide a connection service and a session management service. The application instantiates a connection, instantiates the session management service with that connection, and uses the service to execute all Art ↔ agent boundary operations.

#### Dependencies

- proposal `Project: Art Agents` connection service for connecting to the runner that owns a session; session management service for associating, identifying, listing, joining, controlling, and observing agent sessions. See `./agent-sessions__research.md`.
- `@art-js/records` extraction, update, and proxy capabilities for deterministic whiteboard record read/validate/transform/write; current state: record model done, later phases remain planned and delegation is gated on the constructs release.
- `@art-lib/fs-records` discovery and filesystem content-source capabilities for locating and accessing whiteboard files; current state: package published, adapter extension held pending the records layer.
- `@art-lib/config`, `@art-lib/logger`, and `@art-lib/operations` for CLI configuration, logging, and operation tracking; current state: config/logger plans can proceed independently, operations design may proceed in parallel, and operation logging follows the logger contract.
- `@art-lib/prompts` for interactive initialization; current state: planned, delivery not yet recorded.
- `@art-lib/{new-packages}` terminal UI, watcher, and process-lifecycle capabilities for dependable persistent monitoring and clean exit; current state: scope and ownership remain to be designed.

#### Scope

**In scope:** First usable CLI release that loads and validates a whiteboard, associates participants with running sessions, attaches where supported, dispatches next-turn prompts, and shuts down cleanly.

**Validation capability:** Offer validation as a CLI entry point (for example, `--validate {file}`) and/or UI feedback on load/change; do not directly invoke Artificials routines.

**Out of scope:** Bespoke runner-specific session implementations inside the whiteboard CLI; cross-session sentiment monitoring (incubate under `3000`).

#### Candidate phases and plans

1. **Initialize Art Agents and design contracts** — establish the proposed project, connection/session-management boundary, and runner capability model.
2. **Unblock shared substrate** — progress Art Lib config/logger/operations and prompts plans, plus the Art JS records plan; delegate independent work where possible.
3. **Prototype agent management** — implement directly in the project the infrastructure for managing and communicating with agent sessions, knowing this will later be extracted to Art Agents.
4. **Build the turn loop** — implement board loading, validation, session association, supported attachment, and next-turn prompt dispatch through the proposed services.
5. **Integration Testing** — test the turn flow with mocked files and mocked runner servers, verify lifecycle/error paths.
6. **Extract and Consolidate** — extract Art Agents and other shared items to, update knowledge bases, increase integration test coverage, apply conventions, write unit tests.

#### Acceptance signals

- Given a whiteboard and an actionable turn, the CLI identifies the participant's session and dispatches one next-turn prompt through the session management service.
- Runner adapters report supported operations; live attachment is not confused with persisted-session resumption or terminal handoff.
- Invalid boards, unavailable sessions, and no-action states do not cause unintended board changes or duplicate prompts.
- Whiteboard parsing and updates use shared records/file packages and preserve unrelated content.
- Unit tests cover core logic; integration tests cover filesystem behavior and a mocked runner server; the monitor shuts down cleanly.

#### Open questions

- Can the OpenCode adapter control a session started manually, and how is its server endpoint retained?
- Can Codex app-server attach to an independently running CLI session, or only resume persisted threads?
- Which boundary operations are shared across adapters, and which remain runner-specific?
- Does the first release require terminal UI, or is a CLI command sufficient while persistent monitoring is validated?

#### Contributing inputs

**`ART_WORK`:** Published-twin demands and incremental adoption order — `$ART_WORK/cli/work/knowledge/overview.md` and this board's `ART_WORK` participant block.

**`ART_LIB`:** Shared tooling plans and landing order — this board's `ART_LIB` participant block and its linked plans; session management is not assigned to Art Lib.

**`ART_JS`:** Records API, availability, and construct-release gate — `$ART_JS/_roadmap/3-now/milestone-art-records/milestone.md` and `$ART_JS/_backlog/4-next/plan-create-lib-records/plan.md`.

**`ART_DOMAINS`:** Whiteboard structure, message-board, and status constraints — `$DOMAINS/whiteboards/`.

### Milestone: Art Whiteboard CLI Next

**File:** `_roadmap/8-discovery/milestone-art-boards-next/milestone.md`

#### Ideas

Feasible ideas only.

- Discover message-boards across a workspace to support multi-board monitoring (But maybe this is a different cli/app, as in "Art Messageboard CLI" instead of "Art Whiteboards CLI")

### Milestone Art Whiteboard CLI 3000

The brightest imagined long-distance future; it stays in `9-inbox` forever and incubates other milestones.

#### Ideas

Anything goes.

- Monitor participant sentiment across sessions for long-term engagement patterns.

- _Milestone drafts land here for review before they are written to `$ART_BOARDS/cli/whiteboard/_roadmap/`._

---

## Changes

- `ART_LIB` - 2026-10-19 - Proposed `createRunner`; ui/lifecycle split feedback; turn→`ART_WORK`.
- `ART_BOARDS` - 2026-10-18 - Added the Art Agents proposal, research reference, and structured Milestone One dependencies.
- `MANAGEMENT` - 2026-10-18 - Reviewed Milestone One; next: `ART_BOARDS`.
- `ART_BOARDS` - 2026-10-18 - Drafted Milestone One; next: `MANAGEMENT`.
- `ART_DOMAINS` - 2026-10-18 - Added domain constraints and long-term ideas; next: `ART_BOARDS`.
- `ART_JS` - 2026-10-18 - Mapped records operations, availability, and MVP dependency; next: `ART_DOMAINS`.
- `MANAGEMENT` - 2026-10-18 - Removed unnecessary step in current goal.
- `ART_LIB` - 2026-10-18 - Ordered config/logger, operations, prompts, ui; aligned intro; next: `ART_JS`.
- `ART_WORK` - 2026-10-17 - Approved goal; added twin-CLI demands and adoption order; next: `ART_LIB`.
- `ART_BOARDS` - 2026-10-18 - Drafted Milestone One for review; actioned three feedback messages; turn→`MANAGEMENT`.
- `ART_BOARDS` - 2026-10-17 - Restored sections clobbered mid-turn; validated board; turn→`ART_DOMAINS`.
- `ART_DOMAINS` - 2026-10-17 - Landed messages domain; message board now live; turn→`ART_BOARDS`.
- `ART_BOARDS` - 2026-10-17 - Admitted 4 joiners via intro attachments; turn→`ART_DOMAINS`.
- `ART_BOARDS` - 2026-10-17 - Invited `ART_WORK`; participant block seeded.
- `MANAGEMENT` - 2026-10-15 - Joined. Whiteboard review.
- `ART_BOARDS` - 2026-10-14 - Whiteboard created; intro authored; invitations pending.

---

## Follow-ups

- None.

---

## Instructions

### Turn

- Run `Routine: Validate Whiteboard` before any write.
- Only the participant named in `turn` may write to this file — the `## Message Board` section is writable by every participant at any time, with or without the turn.
- Stage workspace files only — the board and its attachments. Leave your own turn unstaged for the next participant to review, or let the facilitator commit.
- Update your own `sentiment` line only.
- Append; never rewrite other participants' content.
- Classify every item before writing it — a message or a parking-lot item — and route it accordingly.
- Write your message to `## Message Board` via Routine: Write Message with `%bypass-clean-check` `true`, following the message board's rules; never add a message to — or remove it from — the parking lot.
- As the receiver, delete every message you have read and actioned from `## Message Board`; integrate its contents into the artefact where they belong and never cite the message as a source of findings or decisions.
- Add exactly one succinct `changes` bullet per turn.
- Keep a rolling `changes` window, retaining at least the last `N × 2` entries — where `N` is the number of active participants. Read the whiteboard's own `Participant Statuses` to infer which states are active: a status whose description still allows taking turns is active; one whose description says the participant has left the session or is not yet available is not.
- Update `turn`, preserving fair turn-taking: a participant who has not had a turn in the preceding `N × 2` turns (`N` = active participants — those whose status description means available to take turns. Example: `READY`) must receive the next turn.
- Apply all updates to your content in order to maintain the whiteboard validated, and free of redundancies, duplications and obsolete historical facts — and provide feedback to other participants so that they update their content as well on their next turn.

### Document Structure

- Do not add or remove sections without approval from all active participants.
- If a section exceeds 100 lines, propose in the parking lot that it moves to an attachment, retaining a link and a concise summary in `## Attachments`; other participants might disagree and prefer making the section more compact, cutting repetitions, obvious statements, and historical notes.
- Record out-of-scope items in `## Follow-ups`.
- Never fix a settled statement by appending an italic note — rewrite the headline and contents instead.
- Resolved parking-lot items are immediately moved to `parking-lot__resolved.md` attachment.
- The parking lot itself stays free of finished items.

### Goals

- A goal is the board's unit of joint progress: aligned with the board's `Purpose`, within its `Description`, and expressed as checkbox steps.
- **Goal shape:**
  - first step = all active participants agree on the goal (or interject with a pending request that should come first);
  - middle steps = the concrete work between participants;
  - last step = the goal's end state — what was agreed, produced, and settled between all active participants.
- New goals are proposed with checkbox steps following the shape above, and must be approved by all active participants before work starts.
- When all steps of the current goal are complete: first clean the `Actionable` parking lot — for each item decide whether it belonged to the goal just finished; the current goal is NOT archived until the `Actionable` part is cleaned. Only then propose a new goal.
- When done (last step completed), the goal is archived under the `Done:` field of Facilitation, and renamed according to the pattern: `- [x] {Goal name}. {Last step}`.
- Scope rule: every step must be executable by its participant within their scope. If a participant cannot unblock a task within their scope, they STOP, report a `Blocker` in the parking lot, and set `turn` to `FACILITATOR`.
