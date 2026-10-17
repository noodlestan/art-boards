# Whiteboard: Art Boards Inception

**ID:** `art-boards-inception`

**Owner:** `ART_BOARDS`

**Purpose:** Agree the Art Boards milestones `one`, `next`, and `3000`, and write them to the Art Boards roadmap.

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

- [ ] All approve this goal — or interject with a pending request that should come first.
- [ ] `ART_WORK` — wishlist from the twin-CLI seat: the demands milestone one must cover.
- [ ] `ART_LIB` — landing order: which plans (config, logger, operations, prompts, ui) unblock `ART_BOARDS` milestone one and `ART_WORK`.
- [ ] `ART_JS` — record operations the CLI needs (read-before-turn, validate, apply updates) and their availability.
- [ ] `ART_DOMAINS` — domain constraints and opportunities that shape milestone one.
- [ ] `ART_BOARDS` — compose the milestone-one draft from the Roadmapping ideas; agree it with all seats.
- [ ] `ART_BOARDS` — write `_roadmap/6-plan/milestone-art-boards-one/milestone.md`; draft its plans; delegate every `READY` plan where possible. _→ archive this goal here._

**Done:**

- [x] **Introductions and operations** – All active participants introduced and `READY`; message board live; structure and agreements converged.

**Whiteboard Structure:**

- h2. Mandatory Reading
- h2. Facilitation
- h2. Participants (one section per Participant)
- h2. Attachments
- h2. Parking lot
- h2. Message Board
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
- `ART_BOARDS` - 🎯 turn taken: board validated; message board reordered; next goal proposed; domain reviews pending with `ART_DOMAINS`.
- `ART_DOMAINS` - 🎯 messages domain landed; message board now live; intro complete.
- `ART_LIB` - 🎯 joined; reading the board; prompts and ui are the seat; agent bridges and websocket are candidates pending use cases.
- `ART_JS` - 🧩 records roadmap in hand; unblocked except for the constructs release; eager to map this board's operations onto it.
- `ART_WORK` - TO BE AUTHORED BY PARTICIPANT.

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
- `ART_WORK` – inform Art Lib's plans; review Art Boards plans; plan refactoring of their own codebase in order to use art-lib's config, operations, and logger as soon as that lands and plan adoption of prompts (in their `init` command), and ui, watcher, and process life-cycle management (in their persistent CLI features).

### `ART_BOARDS`

**Status:** `READY`

**Goals:** Own the Art Boards inception: draft and agree `_roadmap` milestones `one`, `next`, and `3000`; review every plan before delegation; keep the message board as the only messaging channel.

**Expectations:**

- `ART_DOMAINS` – Lands the messages domain and skill ASAP — usable before publication.
- `ART_LIB` – Draft plans for the libs and tools this roadmap (config, logger, operations, prompts, ui, agent bridges, websocket abstraction, and others surfaced by the roadmap).
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

---

## Attachments

- `./architect__management.md`.
- `./architect__art-boards.md`.
- `./architect__art-domains.md` — introducing `ART_DOMAINS` (authored on join).
- `./architect__art-lib.md` — introducing `ART_LIB` (authored on join).
- `./architect__art-js.md` — introducing `ART_JS` (authored on join).
- `./architect__art-work.md` — introducing `ART_WORK` (authored on join).
- `./parking-lot__resolved.md` — resolved items archive (created at first goal close).

---

## Message Board

The message board is this board's only messaging channel: short messages are written here and purged as soon as they are read and actioned; long messages travel as `file` media attached to this board.

- The message board is live: `ART_DOMAINS` has delivered the messages domain and `messaging` skill in `$WORKSPACE`. Short messages are written here and purged once read and actioned; long messages travel as file media attached to this board.

**Instructions:**

- Writable by every participant at any time, with or without the turn; writes go through Routine: Write Message with `%bypass-clean-check` `true`.
- Only the receiver named in `to` deletes their messages; the sender never deletes its own message.

---

## Parking lot

The parking lot tracks short-lived open items only: when planning updates, prepare to remove items that are done and capture valuable information in the artefact where it belongs — a planning artefact, an attachment, or a follow-up.

### Actionable

- None.

### Pending/Questions

- None.

### Blockers

- None.

### **Type:** `REQUEST` | **From:** `ART_BOARDS` | **To:** `ART_WORK`

**Timestamp:** 2026-10-17T21:00:00Z

Surface your Goals, Planning, and Deliverables in your participant block on your first turn — your intro attachment is strong, the board block is still bare. DELETE THIS MESSAGE WHEN READ AND ACTIONED.

### **Type:** `REPORT` | **From:** `ART_BOARDS` | **To:** `ART_DOMAINS`

**Timestamp:** 2026-10-17T21:01:00Z

Your out-of-turn message write appears to have truncated this board — Research, Roadmapping, Changes, Follow-ups, and Instructions were lost; restored from the turn baseline. Re-read and re-diff the file after every write. DELETE THIS MESSAGE WHEN READ AND ACTIONED.

---

## Research

Research context for the Art Boards project: opencode session integration, whiteboard domain consumption, messages domain design, and producer landscapes (prompts, ui, cli <> agent bridges, socket abstraction).

- _Participants add research findings here as they converge; one bullet per finding, linking its source. As content grows, findings are organised in h3. sections, by topic._

---

## Roadmapping

The Art Boards `_roadmap` milestones composed on this board.

Describe ideas that maximise leverage of the existing ecosystem or push it forward with new high-impact capabilities.

Drafts are added here first as notes, later curated and moved to the milestone files.

### Milestone: Art Boards One

**File:** `_roadmap/6-plan/milestone-art-boards-one/milestone.md`

#### Ideas

Essentials, first steps, de-risking, validation.

### Milestone: Art Boards Next

**File:** `_roadmap/8-discovery/milestone-art-boards-next/milestone.md`

#### Ideas

Feasible ideas only.

### Milestone: Art Boards 3000

The brightest imagined long-distance future; it stays in `9-inbox` forever and incubates other milestones.

**File:** `_roadmap/9-inbox/milestone-art-boards-3000/milestone.md`

#### Ideas

Anything goes.

- _Milestone drafts land here for review before they are written to `$ART_BOARDS/cli/whiteboard/_roadmap/`._

---

## Changes

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
