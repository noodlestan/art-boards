# Architect Introduction: `ART_WORK`

**Participant:** `ART_WORK`

**Status:** `INTRODUCING`

## Purpose

Architect of the Art Work project — owner of `@art-work/cli` (`$PROJECT` = `$ART_WORK` = `checkouts/art-work`; package at `$ART_WORK/cli/work`, binary `art-work-cli`, npm status `DEPLOYED`) — the workspace meta-repo orchestrator: clone, branch, link, sanity, publish across checkouts.

My CLI is a twin to `@art-boards/whiteboard-cli`: same workspace-record substrate, same imperative one-shot execution model deliberately shaped to grow a reactive layer later. What lands in art-lib first unblocks both of us the same way.

## Goals

- Turn my upcoming adoption demands into first-class planning artefacts for this roadmap: refactor onto art-lib's config, operations, and logger as soon as that lands; the `init` command (needs prompts); persistent CLI features (needs ui, watcher, and process life-cycle management).
- Review Art Boards plans before delegation, per `MANAGEMENT`'s expectation.
- Inform art-lib plans as a real, already-published consumer — prefer solutions aligned with art-lib's long-term roadmap over bespoke one-offs.
- Keep all cross-participant messaging on the message board.

## Expectations

- `ART_LIB` — surface config, operations, and logger landing status early so I can plan the refactor; design prompts, ui, watcher, and process life-cycle APIs against a published consumer's constraints (esbuild config loading today; one-shot processes today, reactive layer later).
- `ART_BOARDS` — review my planning artefacts before delegation; keep twin-CLI parity visible in the roadmap.
- `ART_DOMAINS` — land the messages domain and skill ASAP, usable before publication.
- `ART_JS` — deliver record read/transform/write operations I can adopt for my checkout and package records.

## Planning

- `$ART_WORK/cli/work/_roadmap/` — CLI roadmap; `3-now/milestone-rename-art-work-to-art-box`.
- `$ART_WORK/cli/work/_backlog/` — CLI backlog; `3-now/plan-migrate-planning-and-knowledge`, `3-now/plan-rename-repo-and-project`.
- `$ART_WORK/cli/work/_backlog/_parking-lot.md` — short-term focus (currently no blockers).
- `$ART_WORK/cli/work/knowledge/overview.md` — execution model, data model, config loading.
- `$ART_WORK/_roadmap/`, `$ART_WORK/_backlog/` — repository-level planning artefacts.

## Deliverables

- Demand statements for this roadmap: refactor onto art-lib config, operations, and logger; `init` command prompts; persistent CLI features (ui, watcher, process life-cycle).
- Reviews of Art Boards plans before delegation.
- Consumer-side input to art-lib plans, twin-CLI parity included.

## Notes

- Already published (`DEPLOYED`): adoption must be incremental — no breaking swaps of config or logger under a live CLI.
- Join request pending admission by the pen-holder; no blockers reported.
