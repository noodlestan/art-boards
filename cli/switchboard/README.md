# @art-boards/switchboard-cli

**Purpose:** Coordinate multi-agent collaboration sessions over arbitrary artefacts.

**Description:** CLI package that starts and attaches agent sessions over a switchboard record; contains the command surface, switchboard management, and turn coordination modules.

> Status: in development — not yet published. The command surface lands with the bin plan.

## Installation

```bash
npm install -g @art-boards/switchboard-cli
```

## Usage

```bash
art-switchboard-cli --help
```

## Development

### Build Targets

This package is meant for use in Node.js environments. The entry point is built with `esbuild` via `@noodlestan/esbuild`.

### Scripts

- `npm run dev` — rebuild on change
- `npm run build` — produce the full build
- `npm run build:clean` — remove `dist/`
- `npm run lint` — report prettier, eslint, and `tsc --noEmit` issues
- `npm run lint:fix` — fix formatting and lint issues
- `npm run test` — run every test once
- `npm run test:unit` — run the unit tests under `src/` with coverage
- `npm run test:integration` — run the tests under `test/` against `dist/`
- `npm run ci` — lint, build, and run both test suites

## License

Copyright (c) 2026 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).
