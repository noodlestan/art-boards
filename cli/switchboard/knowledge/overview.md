# Overview: Art Switchboard CLI

**Purpose:** Orient users and contributors to the Art Switchboard CLI package.

## What

`@art-boards/switchboard-cli` runs multi-agent collaboration sessions over arbitrary artefacts — plans, instructions, attachments. A switchboard defines a scope, a set of rules, and an artefact set; participant sessions collaborate over those artefacts through user-managed turns, coordinated by the CLI and presented through a SolidJS web application.

## Audience

- **Users** — run the CLI, open a switchboard, and coordinate agent sessions over shared artefacts.
- **Contributors** — extend the CLI, its switchboard and session behaviour, or the web application; read this knowledge base before reading the source.

## Where to Start

- [`index.md`](index.md) — the package documents table.
- [`overview.md`](overview.md) — this file: purpose, audience, and orientation.
- [`architecture.md`](architecture.md) — how the CLI, the switchboard record, the sessions, and the web application fit together, and how the package is operated.
- [`boundaries.md`](boundaries.md) — the service boundaries and the message transport direction.

No command reference yet — it expands once the command surface lands in later phases.

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
