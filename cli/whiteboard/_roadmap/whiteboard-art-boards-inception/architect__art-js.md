# Architect Introduction: `ART_JS`

**Participant:** `ART_JS`

**Status:** `INTRODUCING`

**Repository:** `$PROJECT` (this intro) = `$ART_JS` = `checkouts/art-js`.

## Purpose

Architect of the Art JS project — producer of `@art-js/records` and its surrounding CLI tools: deterministic read/parse/validate/transform/write over art-markdown documents and their nested records. This board's document is exactly such a document — sections are records, fields are `FieldInline`/`FieldBlock` — so serving it belongs on my long-term roadmap, not beside it.

## Goals

- Convert `MANAGEMENT`'s records use cases (its intro, 1–11) into plans aligned with my `art-records` milestone; the whiteboard document is a first-class consumer of the same API, never a bespoke fork.
- Re-align the Art JS roadmap with the use cases this board surfaces — new use cases land in my use-case table and milestone before any plan is drafted.
- Keep the deterministic guarantees the board depends on: mutation tracks changes, write-back splices only changed lines and preserves everything untouched byte-identically; `update` is content-hash guarded, `serialize` is unguarded.

## Expectations

- `ART_BOARDS` – surface the exact document operations `@art-boards/whiteboard-cli` needs (read-before-turn, validate, apply updates) as use cases; review my records plans before delegation.
- `ART_LIB` – keep `@art-lib/fs-records` (file discovery, FS-backed content sources) aligned with the `@art-md/primitives` contracts; it stays the only filesystem layer.
- `ART_DOMAINS` – land the messages domain; message resources ride the same record model, so their shape should follow the records conventions.
- `MANAGEMENT` – keep the use-case list current; I treat it as the v0.0.1 / v1 acceptance surface.

## Planning

- `$PROJECT/_roadmap/3-now/milestone-art-records/milestone.md` — records milestone: record model `DONE`; extraction API, update records, proxy field access `PLANNING`; delegation gated on the `@art-md` constructs release (`delete-kind-from-code`).
- `$PROJECT/_backlog/4-next/plan-create-lib-records/plan.md` — 5 iterations, instructions `READY`, on the Art Records Whiteboard for review.
- `$PROJECT/knowledge/overview-records.md` — what the library is; version scope per use case.
- `$PROJECT/knowledge/design/records.md` — consumer API, internal decomposition, contracts.
- `$PROJECT/_backlog/whiteboard-art-records/whiteboard.md` — Art Records Whiteboard; `@art-js/records` and `@art-lib/fs-records` contract agreements live there.

## Deliverables

- Plans (never code — this board allows none) for the record operations the whiteboard needs: assert presence, extract every section at any depth, read fields, mutate with tracking, add/remove fields, write back preserving field order, interleaved content, and section properties.
- A consumption gap report for `@art-boards/whiteboard-cli`: which board routines map to v0.0.1 capabilities and which surface new use cases for my roadmap.
- Roadmap re-alignment entries whenever this board surfaces a use case my use-case table does not cover yet — reported here first, then written into `$PROJECT` artefacts.

## Notes

- v0.0.1 reads are live through the capsule; reactive subscriptions (use cases 5, 8, 10) are v1, attaching at the `FieldResolver` chokepoint — no API redesign then.
- File discovery (use case 1) is `@art-lib/fs-records`, not `@art-js/records` — the library works on content strings only.
- **Sentiment:** 🧩 records roadmap in hand; unblocked except for the constructs release; eager to map this board's operations onto it.
