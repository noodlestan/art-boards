# Boundaries: Art Switchboard CLI

**Purpose:** Record the upstream service boundaries this package consumes, and the message transport direction it adopts.

## Service Boundaries

The package consumes three upstream services — consumed, never re-implemented: no boundary is duplicated or rebuilt inside this package, and this package modifies no resources of the owning projects.

| Service    | Owner               | Consumed for                                                                                                          |
| ---------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Art Lib    | Project: Art Lib    | Config, logger, operations, prompts, and runner capabilities behind the `art-switchboard-cli` bin.                    |
| Art JS     | Project: Art JS     | The records substrate — `@art-js/records` and the filesystem records layer — for reading and validating switchboards. |
| Art Agents | Project: Art Agents | The connection service and session-management service for starting, attaching to, resuming, and prompting sessions.   |

- **Art Lib** — consumed through Art Lib's own delivery plans; this milestone does not modify Art Lib resources.
- **Art JS** — the switchboard record is read through the shared records API; no switchboard-specific records parser or writer is implemented, and artefact contents are never parsed.
- **Art Agents** — consumed once extracted by Milestone: Art Whiteboard CLI One; until then, runner capabilities are consumed directly as documented in the session-management research, preserving the differences between live attachment, persisted-session resumption, and terminal handoff.

## Transport Direction (Domain: Messages)

Two transports carry collaboration messages, and the switchboard routes over either:

- **Direct session relays** — available from the start: a prompt goes straight to a target session, either sent by the UI or relayed by the user as a generated message.
- **Message board** — a message board artefact modelled by Domain: Messages (Structure: Message Board). Communication switches to or through the board, and when unread messages exist the board's `re-read` instruction is prepended to the next prompt.

The message board is additive — adopting Domain: Messages transport does not remove direct session relays. Domain: Messages is consumed as-is: Structure: Message Board and the message routines, with no domain changes expected, and the domain's routines are offered as CLI and UI behaviour rather than invoked directly.
