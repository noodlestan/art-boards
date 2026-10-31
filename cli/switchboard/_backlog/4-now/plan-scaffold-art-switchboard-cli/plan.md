# Plan: Scaffold Art Switchboard CLI

**ID:** `scaffold-art-switchboard-cli`

**Status:** `PLANNING`

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

| Index | Name                  | Status     |
| ----- | --------------------- | ---------- |
| 1     | scaffold-package      | `PLANNING` |
| 2     | create-package-record | `PLANNING` |

### Iteration: 1 — scaffold-package

**Id:** `scaffold-package`

**Status:** `PLANNING`

**Purpose:** The package installs, builds, tests, and lints locally through the repository workspace tooling, mirroring the sibling CLI package.

**Description:** Create the manifest and toolchain configuration, scaffold source, test, and release files, and connect the package scripts to the repository workspace tooling.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Create `package.json` with the package identity, scripts, and workspace linkage — no `bin` yet.
- Add TypeScript and build configuration mirroring `$ART_BOARDS_WHITEBOARD`.
- Add test and lint configuration wired to the repository conventions.
- Scaffold `src/` and `test/` with placeholder modules.
- Add the package release files — `README.md` and `LICENSE-MIT`.
- Verify install, build, test, and lint through the repository scripts.

#### Commits:

| ID                              | Repository / Checkout / Branch           | Policy   | Hash  | Status        |
| ------------------------------- | ---------------------------------------- | -------- | ----- | ------------- |
| `scaffold-package-foundation`   | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |
| `scaffold-source-test-skeleton` | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |
| `add-package-release-files`     | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |
| `wire-workspace-tooling`        | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |

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

**Status:** `PLANNING`

**Purpose:** `_records/package.art` records `@art-boards/switchboard-cli` at `cli/switchboard` with its `art-switchboard-cli` bin.

**Description:** Create the package record from the package identity, consistent with `package.json`, and keep it unpublished until the first release.

**Instructions Mode:** `INSTRUCTIONS_INLINED_IN_ITERATION`

**Changes:**

- Create `_records/package.art` declaring Package: Art Switchboard CLI with `canonicalName` `@art-boards/switchboard-cli`, `path` `cli/switchboard`, and `bin` `art-switchboard-cli`.
- Keep the record consistent with the `package.json` identity.
- Set `published` to `false`; the First Release phase flips it after the first publish.

**Dependencies:**

- Iteration: `scaffold-package` — provides the manifest identity the record mirrors.

#### Commits:

| ID                           | Repository / Checkout / Branch           | Policy   | Hash  | Status        |
| ---------------------------- | ---------------------------------------- | -------- | ----- | ------------- |
| `record-switchboard-package` | Art Boards / `$ART_SWITCHBOARD` / `main` | `NOPUSH` | (TBD) | `PLACEHOLDER` |

##### Commit: `record-switchboard-package`

**Repository:** Art Boards

**Message:**

records(switchboard-cli): Record the Art Switchboard CLI package and its bin.

## Work

### Next

- Write implementation instructions for the iterations, then delegate.

### Blockers

- None.

---

## Coordination

### Not In Scope

- **Command surface** — the `art-switchboard-cli` bin lands in Plan: Create Art Switchboard CLI Bin.
- **npm publish** — releasing lands under the milestone's First Release phase; the `@art-boards` scope is already claimed by `@art-boards/whiteboard-cli@0.0.1`.

### Decisions

- **Mirror the sibling package** — layout, scripts, and configuration follow the Art Whiteboard CLI package.

### Feedback

- None.
