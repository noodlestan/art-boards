# Instructions: `scaffold-package`

**Plan:** `scaffold-art-switchboard-cli`

**Iteration Id:** `scaffold-package`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-scaffold-art-switchboard-cli/instructions/scaffold-package__report.md`.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `scaffold-package`, created {artefacts}, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable                 | Resolved Path                     | Purpose                                            |
| ------------------------ | --------------------------------- | -------------------------------------------------- |
| `$WORKSPACE`             | Current working directory         | Workspace root directory                           |
| `$ART_BOARDS`            | `$WORKSPACE/checkouts/art-boards` | Art Boards repository — run all commands from here |
| `$ART_BOARDS_WHITEBOARD` | `$ART_BOARDS/cli/whiteboard`      | Sibling package layout reference                   |
| `$ART_SWITCHBOARD`       | `$ART_BOARDS/cli/switchboard`     | The package being scaffolded                       |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `scaffold-package`, created {artefacts}, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Deliver a buildable `@art-boards/switchboard-cli` package foundation at `$ART_SWITCHBOARD` — manifest, TypeScript/build/test/lint configuration, source and test skeletons, release files, and repository wiring — through the commits `scaffold-package-foundation`, `scaffold-source-test-skeleton`, `add-package-release-files`, and `wire-workspace-tooling`.

## Mandatory Reading

- ::READ `$ART_BOARDS/_guide.md` (Guide) — repository layout, records, conventions, setup, and verification.
- ::READ `$ART_BOARDS_WHITEBOARD/_guide.md` (Guide) — sibling package layout and records management.
- ::READ `$ART_BOARDS/node_modules/@noodlestan/conventions-typescript/art/index.md` (Conventions: TypeScript) — TypeScript conventions for the package source.
- ::READ `$ART_BOARDS/node_modules/@noodlestan/conventions-unit-tests/art/index.md` (Conventions: Unit Tests) — unit test conventions.
- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

Note: the sibling package is **not scaffolded yet** — it has records, guides, and knowledge only. Do not expect `cli/whiteboard/package.json` or source files to copy; the toolchain comes from the repository root (`@noodlestan/tsconfig`, `@noodlestan/esbuild`, `vitest`, `prettier`).

---

## Operating Instructions

**Source:** Setting Up and Verifying Completion from `$ART_BOARDS/_guide.md`; Writing Commit Message from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.

### Setting Up

**Purpose:** Prepare the repository environment.

Run from `$ART_BOARDS`:

```bash
npm ci
```

### Writing Commit Message

**Purpose:** Write standardized message according to context conventions.

1. Read `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Use each Commit step's message exactly as given; it is already written to the conventions.

### Verifying Completion

**Purpose:** Confirm that the work has been completed and satisfies its intended outcome.

Run from `$ART_BOARDS`:

```bash
npm run lint
npm run ci
```

All steps MUST pass.

---

## Changes

- Step 1 / 9 — Create the package manifest
- Step 2 / 9 — Add TypeScript and build configuration
- Step 3 / 9 — Commit `scaffold-package-foundation`
- Step 4 / 9 — Scaffold the source and test skeletons
- Step 5 / 9 — Commit `scaffold-source-test-skeleton`
- Step 6 / 9 — Add the release files
- Step 7 / 9 — Commit `add-package-release-files`
- Step 8 / 9 — Connect the package scripts to the repository tooling
- Step 9 / 9 — Commit `wire-workspace-tooling`

## Steps

### Step `1 / 9` — Create the package manifest

Create `$ART_SWITCHBOARD/package.json` with:

- `name`: `@art-boards/switchboard-cli`
- `version`: `0.0.1`
- `description`: `Switchboard CLI — multi-agent collaboration sessions over arbitrary artefacts.`
- `type`: `module`
- `license`: `MIT`, `author`: `Noodlestan`
- `private`: `false`, `keywords`: mirror the package record (`cli`, `switchboards`, `art`, `agent-workflows`, `delegation`, `agent-visualization`)
- `engines`: `{ "node": ">=22" }`
- `files`: `["dist", "LICENSE-MIT", "README.md"]`
- `repository`: mirror the root repository object (`git`, `https://github.com/noodlestan/art-boards.git`)

Do **not** add a `bin` field — the command surface lands in Plan: Create Art Switchboard CLI Bin. Do not add scripts yet — Step 8 wires them.

Expected outcome: `npm install` in the workspace recognises the package (`cli/**` is already a workspace glob in the root manifest).

### Step `2 / 9` — Add TypeScript and build configuration

- Create `$ART_SWITCHBOARD/tsconfig.json` extending the `@noodlestan/tsconfig` package preset — inspect `node_modules/@noodlestan/tsconfig/` for the available presets (the root uses `@noodlestan/tsconfig/monorepo/tsconfig.json`); include `src/` and `test/`, exclude `node_modules/`, `dist/`, `coverage/`.
- Configure the build to emit `dist/index.mjs` from `src/index.ts` using `@noodlestan/esbuild` (root devDependency) — inspect `node_modules/@noodlestan/esbuild` for the expected invocation or config file.
- Vitest runs from the repository root devDependencies; ensure the default test glob picks up `test/` (add `vitest.config.ts` only if needed).

Expected outcome: `dist/index.mjs` is buildable from `src/index.ts`; tests in `test/` are discoverable by `vitest run`.

### Step `3 / 9` — Commit `scaffold-package-foundation`

---

#### Commit: `scaffold-package-foundation`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

scaffold(switchboard-cli): Add the package manifest and build, test, and lint configuration.

### Step `4 / 9` — Scaffold the source and test skeletons

- Create `$ART_SWITCHBOARD/src/index.ts` — minimal ESM entry placeholder (a trivial exported constant is enough; no argument parsing, no CLI behavior).
- Create `$ART_SWITCHBOARD/test/index.test.ts` — minimal vitest test importing from `../src/index.ts` and asserting the placeholder export, following the unit-test conventions from the Mandatory Reading.

Expected outcome: the test file passes under `vitest run`.

### Step `5 / 9` — Commit `scaffold-source-test-skeleton`

---

#### Commit: `scaffold-source-test-skeleton`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

scaffold(switchboard-cli): Scaffold the source and test directories with placeholders.

### Step `6 / 9` — Add the release files

- Create `$ART_SWITCHBOARD/README.md` — package name, one-line purpose, setup (`npm ci` from `$ART_BOARDS`), and verification (`npm run lint`, `npm run ci`); keep it short, the knowledge plan expands the documentation.
- Create `$ART_SWITCHBOARD/LICENSE-MIT` — copy `$ART_BOARDS/LICENSE-MIT`.

### Step `7 / 9` — Commit `add-package-release-files`

---

#### Commit: `add-package-release-files`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

scaffold(switchboard-cli): Add the package README and license files.

### Step `8 / 9` — Connect the package scripts to the repository tooling

Add the package scripts that satisfy the repository turbo tasks (`turbo.json` defines `build`, `test`, `lint`, `ci`):

- `build` — emit `dist/index.mjs` via the `@noodlestan/esbuild` wiring prepared in Step 2.
- `test` — `vitest run`.
- `lint` — `prettier . -c` at package scope.
- `ci` — run lint, test, and build in sequence so `turbo run ci` picks the package up.

Then verify from `$ART_BOARDS`:

```bash
npm run lint
npm run ci
```

Expected outcome: the workspace links the package, `turbo run ci` builds `dist/index.mjs`, runs the tests, and prettier passes.

### Step `9 / 9` — Commit `wire-workspace-tooling`

---

#### Commit: `wire-workspace-tooling`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

build(switchboard-cli): Connect package scripts to the repository workspace tooling.

## Final Verification

**Instructions:**

- Verify that commits have been executed and NOT pushed, according to each commit's `NOPUSH` policy.
- Verify that `package.json` carries the package identity, `files`, and `engines`, and that no `bin` field exists yet.
- Verify that `npm run ci` from `$ART_BOARDS` builds `dist/index.mjs`, passes the tests, and passes prettier.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
