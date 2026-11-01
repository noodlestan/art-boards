# Architecture: Art Relayboard CLI

**Purpose:** Document how the CLI process, the relayboard record, the sessions, and the SolidJS application fit together, and how the package is operated.

## CLI Process

`art-relayboard-cli` is a long-running process started by the user for one collaboration:

1. It reads and validates the relayboard record — a scope, a set of rules, and an arbitrary set of artefacts (plans, instructions, attachments).
2. It watches the relayboard and its artefacts for change and notifies connected sessions when artefacts change.
3. It starts, attaches to, and resumes participant sessions through the session services, and coordinates their user-managed turns over the shared artefacts.
4. It exposes a WebSocket endpoint for as long as it runs and shuts down cleanly when the collaboration ends.

The WebSocket endpoint is the only transport between the application and the CLI: connected clients receive relayboard, session, turn, and change state through it, and never read that state from disk or from the runner directly.

## SolidJS Application

- **Development** — the application runs standalone with `npm run dev` while the CLI serves nothing, and connects over WebSocket to the running `art-relayboard-cli` instance.
- **Delivery** — once the web UI is delivered, the CLI serves the application itself, so a single process provides both the endpoint and the UI.
- **Content** — the UI displays the relayboard scope, rules, and artefact list, the registered sessions, the current turn, and the changes list, and offers the supported session interactions; unsupported operations and failures surface as clear feedback.

## Prompt Prepending and Turns

- **Artefact-scoped prepending** — starting a new session prepends the relayboard scope, rules, and artefact definitions to that session's first prompt. Nothing is injected into artefact contents; artefacts are referenced, never parsed or interpreted.
- **User-managed turns** — the user drives turns: continue a turn with the original planning agent, or start or attach another session (an invited reviewer or a later participant) over the same artefacts. A cross-session update reaches the target session either as a message the user relays or sent by the UI itself.

## TUI Exclusion

This package has no terminal UI. The interface is browser-based: the SolidJS web application is the only user interface, matching Milestone: Art Relayboard CLI One.

## Setup

Run from the repository root (monorepo):

```bash
npm ci
```

Pointer: `$ART_BOARDS/_guide.md` — Operating Instructions: Setting Up.

## Verification

Run from the repository root (monorepo):

```bash
npm run lint # prettier check
npm run ci   # lint, tests, and builds
```

Pointer: `$ART_BOARDS/_guide.md` — Operating Instructions: Verifying Completion.
