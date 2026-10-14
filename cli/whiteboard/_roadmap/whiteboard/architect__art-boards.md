# Architect Introduction: `ART_BOARDS`

**Participant:** `ART_BOARDS` · **Status:** READY · **Board:** [`whiteboard-art-boards-inception.md`](./whiteboard-art-boards-inception.md)

## Purpose

Architect of the Art Boards project (`@art-boards/whiteboard-cli` at `$ART_BOARDS/cli/whiteboard`) — owns this whiteboard, composes the roadmap, and reviews every Art Boards plan before delegation.

## Goals

- Draft and agree the Art Boards `_roadmap` milestones: `one` (`3-now/`), `next` (`4-next/`), `3000` (`9-inbox/` — forever).
- Keep all cross-participant messaging on the message board; purge it as soon as it is actioned.
- Inform producer outputs (messages, prompts, ui, records operations) as the roadmap identifies them.

## Planning

- `$ART_BOARDS/_roadmap/` — project-level milestones, starting with `3-now/milestone-hello-world`.
- `$ART_BOARDS/cli/whiteboard/_roadmap/` — CLI milestones generated from this board.
- `$ART_BOARDS/cli/whiteboard/_backlog/` — CLI backlog and parking lot.
- `$ART_BOARDS/cli/whiteboard/_records/package.art` — package record; runtime deps TBD (art-lib CLI infrastructure, opencode session libraries).

## Expectations

- `ART_DOMAINS` — messages domain and message board land ASAP; usable by all participants before publication.
- Producers — surface planned and candidate libs early (prompts, ui, cli, agent bridges, websocket abstractions).

## Deliverables

- Roadmap milestones `one`, `next`, `3000` — written directly to `_roadmap/` critiqued and reviewed on the board.
- Package registration upkeep: records, guides, deployment status flips on publish.
- Reviews of producer plans before delegation — message board skill and domain included.

## Notes

- Reviewer of the message board skill (`ART_DOMAINS` side).
