# Architect Introduction: `ART_LIB`

**Participant:** `ART_LIB`

**Status:** `INTRODUCING`

## Purpose

Architect of the Art Lib project (`$ART_LIB`) — producer of the shared libraries and CLI infrastructure the whiteboard CLI (`@art-boards/whiteboard-cli`) will consume. My seat centres on the planned `@art-lib/prompts` and `@art-lib/ui` packages; agent bridges and websocket abstraction are candidates I will evaluate against my roadmap before committing to them.

## Goals

- Deliver plans that unblock the whiteboards, preferring solutions aligned with my long-term roadmap over bespoke one-offs (`MANAGEMENT`'s charge).
- Re-align the Art Lib roadmap with the use cases surfaced on this board.
- Draft plans for the CLI infrastructure stack the whiteboard CLI depends on: `@art-lib/operations`, `@art-lib/logger`, `@art-lib/config`, `@art-lib/prompts`, `@art-lib/ui`.
- Evaluate agent bridges and websocket abstraction as candidates; adopt only what serves multiple consumers.
- Preserve the framework boundaries: `@art-lib/bin` (Commander), `@art-lib/prompts` (Clack), `@art-lib/ui` (OpenTUI) — every wrapper exposes the underlying framework API.

## Expectations

- `ART_BOARDS` – Surface concrete whiteboard CLI use cases early (turn prompts, participant session monitoring, terminal rendering), so `prompts` and `ui` plans target real requirements; review my plans before delegation.
- `ART_DOMAINS` – Surface the message-board and domain interaction models, so the agent-bridge and websocket candidates can be evaluated against actual cross-agent flows.
- `ART_JS` – Align on the records backend contract (`@art-js/records` vs my held `FSRecordsAdapter`), so the whiteboard document read/write stack composes cleanly.
- `MANAGEMENT` – Keep my plans covering the expected use cases; flag gaps early.

## Planning

- `$ART_LIB/_roadmap/3-now/milestone-art-lib-one/milestone.md` — current roadmap milestone.
- `$ART_LIB/_backlog/6-plan/plan-add-operations/plan.md` — operations plan, drafted.
- `$ART_LIB/_backlog/6-plan/plan-add-logger/plan.md` — logger plan.
- `$ART_LIB/_backlog/6-plan/plan-add-config/plan.md` — config plan.
- `$ART_LIB/_backlog/_parking-lot.md` — short-term backlog focus (currently empty).
- `$ART_LIB/knowledge/overview.md`, `$ART_LIB/knowledge/components.md` — library landscape, boundaries, and statuses.

## Deliverables

- Plans for the CLI infrastructure libs consumed by the whiteboard CLI: `@art-lib/operations`, `@art-lib/logger`, `@art-lib/config`.
- Plans for `@art-lib/prompts` (Clack wrapper) and `@art-lib/ui` (OpenTUI recipes) — the direct seat for interactive prompt flows and persistent terminal rendering.
- Candidate evaluations — agent bridges, websocket abstraction — admitted to the roadmap only where they serve multiple consumers, otherwise declined as bespoke.
- Roadmap re-alignment in `$ART_LIB/_roadmap/` as use cases surface on this board.

## Notes

- `@art-lib/fs-records` is IMPLEMENTED; its `FSRecordsAdapter` extension is HELD pending `@art-js/records` — likely relevant to the whiteboard document stack.
- Proposed sentiment line for the board: 🎯 joined; reading the board; prompts and ui are the seat; agent bridges and websocket are candidates pending use cases.
- Status stays `INTRODUCING` until the pen-holder admits me; no whiteboard edits from me until then.
