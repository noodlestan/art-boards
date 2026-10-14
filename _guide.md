# Guide: Art Boards

> Host and manage the Art Boards packages and tools, and their knowledge and planning artefacts.

Monorepo containing the Art Boards roadmap and backlogs, knowledge, and CLI source code.e documentation.

Uses Workflow: Planning Work with one backlog per CLI package, coordinating with Workflow: Roadmapping from one roadmap per CLI package.

## Recommended Reading

Agents SHOULD scan these files for relevant clarifications when faced with ambiguity or omissions that may result from missing definitions.

- `_guide.md` — this file: system overview, layout, setup, verification.
- `_records/project.art` — the project record.
- `_records/repository.art` — the repository record.

## Repository Layout

```
_guide.md        — this file
_records/        — project, repository, and namespace records
knowledge/       — repository-level knowledge documentation
cli/             — CLI packages; each owns its _roadmap/ and _backlog/
cli/whiteboard   — `@art-boards/whiteboard-cli`, plus _roadmap/ and _backlog/
```

## Records Management

Records are co-located with the resources they describe in `_records/` directories:

- **Project:** `_records/project.art`
- **Repository:** `_records/repository.art`
- **Namespace:** `_records/namespace.art`

## Knowledge References

This repository maintains knowledge references at:

- `knowledge/index.md` — Repository-level knowledge.
- `cli/whiteboard/knowledge/index.md` — Art Whiteboard CLI.

## Conventions

This repository follows strict conventions.

Read the convention indexes listed below and follow them when planning and executing work.

The following conventions apply to all packages in this repository:

- `./node_modules/@noodlestan/conventions-typescript/art/index.md` — TypeScript conventions.
- `./node_modules/@noodlestan/conventions-unit-tests/art/index.md` — Unit Test conventions.

In case of ambiguity or conflict applying conventions, follow links from the convention indexes to extended convention files and read the examples there for what to follow and what to avoid.

## Workflows

Projects in this repository use the following workflows:

| Workflow / Path                                                            | Purpose                                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Roadmapping** `$DOMAINS/roadmaps/workflows/roadmapping/workflow.art`     | Organize roadmap creation and maintenance.                                                        |
| **Planning Work** `$DOMAINS/work/workflows/planning-work/workflow.art`     | Create and manage work item lifecycles, collecting operational instructions according to context. |
| **Delegating Work** `$DOMAINS/work/workflows/delegating-work/workflow.art` | Organize work delegation to sub-agents with validation, execution, and verification.              |
| **Executing Work** `$DOMAINS/work/workflows/executing-work/workflow.art`   | Organize work execution by sub-agents to produce completed, verified outcomes and feedback.       |
| **Deploying** `$DOMAINS/deployments/workflows/deploying/workflow.art`      | Organizes deployment of artefacts in operations.                                                  |

### Roadmapping

This repository maintains one repository level roadmap:

- The roadmap lives at `_roadmap/` with subdirectories such as `/3-now` and `/4-next/`.
- The short-term roadmapping focus is captured in `_roadmap/_parking-lot.md`.

This repository hosts also roadmaps for:

- `cli/board/`

### Planning Work

This repository maintains one repository level backlog:

- The backlog lives at `_backlog/` with subdirectories such as `/3-now` and `/4-next/`.
- The short-term focus is captured in `_backlog/_parking-lot.md`.

This repository hosts also backlogs for:

- `cli/board/`

## Operating Instructions

### Operating Instructions: Setting Up

**Instructions:**

Run from the repository root (monorepo):

```bash
npm ci # to install dependencies.
```

### Operating Instructions: Verifying Completion

**Instructions:**

Run from the repository root (monorepo):

```bash
npm run lint # prettier check
```

`npm run ci` lands with the package build tooling.
