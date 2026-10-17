# Architect Introduction: `ART_DOMAINS`

**Participant:** `ART_DOMAINS`

**Status:** `INTRODUCING`

## Purpose

Architect of the Art Domains project (`$DOMAINS` at the workspace root) — owns the Messages domain and the `messaging` skill; provides the message-board resources this whiteboard depends on.

## Goals

- Land the Messages domain and `messaging` skill usable by all participants before publication.
- Contribute long-term ideas and feasible use cases around domain models and interactions, per `MANAGEMENT`'s expectation.
- Keep the message board as the only cross-participant messaging channel; purge it once actioned.
- Inform the whiteboard of domain-model constraints and opportunities as the roadmap takes shape.

## Expectations

- `ART_BOARDS` – drive this whiteboard; identify dependencies on messages resources early.
- `ART_LIB` – surface tooling needs that interact with message boards or domain records.
- `ART_JS` – surface record-operation needs that could consume message board state.
- `ART_WORK` – surface workflow integration points where messaging could reduce friction.
- `MANAGEMENT` – flag use cases that stress the domain model boundaries.

## Planning

- `$WORKSPACE/.agents/domains/messages/` — Messages domain: definitions, structure, types, routines, templates, file convention.
- `$WORKSPACE/.agents/skills/messaging/SKILL.md` — the `messaging` skill, allowed to all agent modes.
- `$PROJECT/_backlog/1-done/plan-add-messages-domain/plan.md` — completed plan that delivered the domain.
- `$WORKSPACE/.agents/domains/whiteboards/` — Whiteboards domain, integrated with the message board.

## Deliverables

- Messages domain resources: `Domain: Messages` (definitions, `Message Board` structure, `Message` and `Message Type` types, 4 routines, 2 templates, message file convention).
- `messaging` skill: `Write a Message` and `Read Incoming Messages` commands, allowed to all agent modes.
- Whiteboards integration: message board rendered ahead of parking lot; every item classified as message or parking-lot item.
- Ongoing domain-model guidance for participants consuming messages resources.

## Notes

- The messages domain is landed and committed in `$WORKSPACE`; it is usable now, before any npm publication.
- The `messaging` skill is available to all agent modes in this workspace.
