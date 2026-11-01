# Plan: Scaffold Art Switchboard CLI

**ID:** `scaffold-art-switchboard-cli`

**Status:** `DONE`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Establish the minimum publishable package foundation for `@art-boards/switchboard-cli`.

**Description:** Plan record with 2 iterations, executed within `$ART_SWITCHBOARD`.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

---

## Path Variables

| Variable                 | Resolved Path                     | Purpose                                            |
| ------------------------ | --------------------------------- | -------------------------------------------------- |
| `$WORKSPACE`             | Current working directory         | Workspace root directory                           |
| `$ART_BOARDS`            | `$WORKSPACE/checkouts/art-boards` | Art Boards repository                              |
| `$ART_BOARDS_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard`      | Sibling CLI package layout reference               |
| `$ART_SWITCHBOARD`       | `$ART_BOARDS/cli/switchboard`     | The Art Switchboard CLI package, and its planning. |

## Summary

Scaffold `@art-boards/switchboard-cli` at `cli/switchboard`: manifest, build/test/lint foundation, and source/test skeleton wired to the repository workspace tooling, plus the package record describing the package and its bin.

## Context

### Upstream Work

| Kind        | Path                                                                              | Role                                           |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------------------- |
| Milestone   | `$ART_SWITCHBOARD/_roadmap/6-plan/milestone-art-switchboard-cli-one/milestone.md` | Parent milestone; source of the plan outline.  |
| Parking Lot | `$ART_BOARDS/_roadmap/_parking-lot.md`                                            | Tracks the switchboard CLI milestone proposal. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions.
- `scaffold` — Scaffolds project files from records and templates.

### Knowledge

::READ `$ART_BOARDS/_guide.md` (Guide) — Repository layout, records, conventions, setup, and verification. Relevant for Setting Up, Executing Work Step, Verifying Completion.

::READ `$ART_BOARDS_WHITEBOARD/_guide.md` (Guide) — Sibling package layout and records management. Relevant for Executing Work Step.

## Scope

Package skeleton only — manifest, build/test/lint configuration, source and test directories, release files, and the package record. No command surface, no npm publish, no feature work.

## Iterations

| Index | Name                  | Status |
| ----- | --------------------- | ------ |
| 1     | scaffold-package      | `DONE` |
| 2     | create-package-record | `DONE` |

### Iteration: 1 — scaffold-package

**Id:** `scaffold-package`

**Status:** `DONE`

**Purpose:** The package installs, builds, tests, and lints locally through the repository workspace tooling on the `@noodlestan/*` toolchain.

**Description:** Create the manifest and toolchain configuration, scaffold source, test, and release files, and connect the package scripts to the repository workspace tooling.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Instructions:** `./instructions/scaffold-package.md`

**Report:** `./instructions/scaffold-package__report.md`

**Changes:**

- Create `package.json` with the package identity, scripts, and workspace linkage — no `bin` yet.
- Add TypeScript and build configuration extending the `@noodlestan/tsconfig` and `@noodlestan/esbuild` root tooling.
- Add test and lint configuration wired to the repository conventions.
- Scaffold `src/` and `test/` with placeholder modules.
- Add the package release files — `README.md` and `LICENSE-MIT`.
- Verify install, build, test, and lint through the repository scripts.

#### Commits:

| ID                              | Repository / Checkout / Branch           | Policy   | Hash      | Status      |
| ------------------------------- | ---------------------------------------- | -------- | --------- | ----------- |
| `scaffold-package-foundation`   | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | `b52d3e0` | `COMMITTED` |
| `scaffold-source-test-skeleton` | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | `c8a9ab3` | `COMMITTED` |
| `add-package-release-files`     | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | `11d68a0` | `COMMITTED` |
| `wire-workspace-tooling`        | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | `ee6a40e` | `COMMITTED` |

##### Commit: `scaffold-package-foundation`

**Repository:** Art Boards

**Message:**

scaffold(switchboard-cli): Add the package manifest and build, test, and lint configuration.

##### Commit: `scaffold-source-test-skeleton`

**Repository:** Art Boards

**Message:**

scaffold(switchboard-cli): Scaffold the source and test directories with placeholders.

##### Commit: `add-package-release-files`

**Repository:** Art Boards

**Message:**

scaffold(switchboard-cli): Add the package README and license files.

##### Commit: `wire-workspace-tooling`

**Repository:** Art Boards

**Message:**

build(switchboard-cli): Connect package scripts to the repository workspace tooling.

### Iteration: 2 — create-package-record

**Id:** `create-package-record`

**Status:** `DONE`

**Purpose:** `_records/package.art` records `@art-boards/switchboard-cli` at `cli/switchboard` with its `art-switchboard-cli` bin.

**Description:** Create the package record from the package identity, consistent with `package.json`, and keep it unpublished until the first release.

**Instructions Mode:** `INSTRUCTIONS_INLINED_IN_ITERATION`

**Instructions:**

Execute the Changes listed above.

Before starting:

- ::READ `$ART_BOARDS_WHITEBOARD/_records/package.art` — mirror this record's structure for the switchboard package.
- Mirror `package.json` values exactly: `name`, `files`, `engines`, `keywords`, `packageManager`.
- Omit the `Deployment:` field — the npm deployment record is created by the First Release phase.

Use these values:

- `Purpose`: Coordinate multi-agent collaboration sessions over arbitrary artefacts.
- `Description`: CLI package that starts and attaches agent sessions over a switchboard record; contains the command surface, switchboard management, and turn coordination modules.
- `Canonical Name`: `@art-boards/switchboard-cli` · `Path`: `cli/switchboard` · `Bin`: `art-switchboard-cli`: `./dist/index.mjs`.
- `Published`: `false` · `Private`: `false` · `License`: License: Noodlestan 2026 MIT.
- Runtime dependencies: TBD Art Lib CLI infrastructure packages (commander wrapper, config, logger, operations) — PLANNED with the Art Lib plan.
- `Scaffolders`: Scaffolder Skeleton: CLI Package, Scaffolder Skeleton: Package Common.

Validate that:

- The record parses and `npm run lint` passes from `$ART_BOARDS`.
- The record identity matches `package.json`.

After executing:

- Commit `record-switchboard-package` with its blueprint message (policy `NOPUSH` — do not push).
- Report the outcome in chat — inlined instructions report in chat.

**Changes:**

- Create `_records/package.art` declaring Package: Art Switchboard CLI with `canonicalName` `@art-boards/switchboard-cli`, `path` `cli/switchboard`, and `bin` `art-switchboard-cli`.
- Keep the record consistent with the `package.json` identity.
- Set `published` to `false`; the First Release phase flips it after the first publish.

**Dependencies:**

- Iteration: `scaffold-package` — provides the manifest identity the record mirrors.

#### Commits:

| ID                           | Repository / Checkout / Branch           | Policy   | Hash      | Status      |
| ---------------------------- | ---------------------------------------- | -------- | --------- | ----------- |
| `record-switchboard-package` | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | `aa9335c` | `COMMITTED` |

##### Commit: `record-switchboard-package`

**Repository:** Art Boards

**Message:**

records(switchboard-cli): Record the Art Switchboard CLI package and its bin.

## Work

### Next

- Both iterations are DONE; reflect the outcomes upstream into Milestone: Art Switchboard CLI One.

### Blockers

- None.

---

## Coordination

### Not In Scope

- **Command surface** — the `art-switchboard-cli` bin lands in Plan: Create Art Switchboard CLI Bin.
- **npm publish** — releasing lands under the milestone's First Release phase; the `@art-boards` scope is already claimed by `@art-boards/whiteboard-cli@0.0.1`.

### Evidence

- `npm run lint` and `npm run ci` pass from `$ART_BOARDS`; `turbo run ci` builds `dist/index.mjs` and runs 1/1 tests.
- Commits `b52d3e0`, `c8a9ab3`, `11d68a0`, `ee6a40e` created locally under policy `NOPUSH`; lefthook pre-commit green on all four.
- `_records/package.art` created and mirrored against `package.json`; `npm run lint` and `npm run ci` green; commit `aa9335c` local under `NOPUSH`.

### Findings

- Package-scope `prettier . -c` does not inherit the root `.prettierignore` — the package carries its own `.prettierignore` for `dist/` and `coverage/`.

### Decisions

- **Layout mirrors the sibling; toolchain comes from the repository root** — the Art Whiteboard CLI package is not scaffolded yet, so configurations extend the `@noodlestan/*` root tooling instead of copying sibling files.

### Knowledge to Update

- `$ART_BOARDS/_guide.md` — add `cli/switchboard` to the repository layout when the guide is next updated.

### Follow Ups

- None.

### Feedback

- None.
