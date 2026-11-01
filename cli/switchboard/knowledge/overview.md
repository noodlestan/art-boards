# Overview: Art Switchboard CLI

**Purpose:** Orient users and contributors to the Art Switchboard CLI package.

## What

`@art-boards/switchboard-cli` runs multi-agent collaboration sessions over arbitrary artefacts — plans, instructions, attachments. A switchboard defines a scope, a set of rules, and an artefact set; participant sessions collaborate over those artefacts through user-managed turns, coordinated by the CLI and presented through a SolidJS web application.

Switching sessions and relaying messages between them is this package's responsibility: it starts, attaches, and switches sessions and carries relays between them. It introduces no message-board artefact or transport.

## Use Cases

- **Start sessions** — open a switchboard and start the planner session; its first prompt carries the switchboard scope, rules, and artefact definitions.
- **Attach to sessions** — attach to existing sessions — an invited reviewer or a later participant — over the same artefacts and drive their turns from the switchboard.
- **Relay messages manually** — ask a session a question, take the message it generates, and relay it to another session by hand.
- **Relay automatically** — let the UI send the cross-session update itself ("senior architect changed artefacts A and B; reload and do Y and Z").
- **Set up triggers to interrupt relays** — configure triggers that interrupt relays mid-flight, stopping or redirecting a message when conditions are met.

## Audience

- **Users** — run the CLI, open a switchboard, and coordinate agent sessions over shared artefacts.
- **Contributors** — extend the CLI, its switchboard and session behaviour, or the web application; read this knowledge base before reading the source.

## Service Boundaries

The package consumes three upstream services — consumed, never re-implemented: no boundary is duplicated or rebuilt inside this package, and this package modifies no resources of the owning projects.

| Service    | Owner               | Consumed for                                                                                                          |
| ---------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Art Lib    | Project: Art Lib    | Config, logger, operations, prompts, and runner capabilities behind the `art-switchboard-cli` bin.                    |
| Art JS     | Project: Art JS     | The records substrate — `@art-js/records` and the filesystem records layer — for reading and validating switchboards. |
| Art Agents | Project: Art Agents | The connection service and session-management service for starting, attaching to, resuming, and prompting sessions.   |

- **Art Lib** — consumed through Art Lib's own delivery plans; this package modifies no Art Lib resources.
- **Art JS** — the switchboard record is read through the shared records API; no switchboard-specific records parser or writer is implemented, and artefact contents are never parsed.
- **Art Agents** — consumed once extracted by Milestone: Art Whiteboard CLI One; until then, runner capabilities are consumed directly as documented in the session-management research, preserving the differences between live attachment, persisted-session resumption, and terminal handoff.

## Where to Start

- [`index.md`](index.md) — the package documents table.
- [`overview.md`](overview.md) — this file: purpose, use cases, audience, and boundaries.
- [`architecture.md`](architecture.md) — how the CLI, the switchboard record, the sessions, and the web application fit together, and how the package is operated.

No command reference yet — it expands once the command surface lands in later phases.
