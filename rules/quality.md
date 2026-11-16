# Code Quality and AI Delivery Rules

## Principles

- **KISS:** choose the simplest maintainable solution.
- **DRY:** remove meaningful duplication; do not force unrelated code into a shared abstraction.
- **YAGNI:** implement only current, justified requirements.
- **SOLID:** use clear responsibilities and dependency boundaries where beneficial.
- Resolve tensions between principles by prioritizing clarity, cohesion, and actual project needs.

## TypeScript and Reliability

- Use precise types; avoid `any` unless unavoidable and justified.
- Prefer explicit types at public boundaries; allow inference for obvious local values.
- Handle expected errors rather than silently swallowing them.
- Support loading, empty, error, and success states where relevant.
- Use semantic HTML and keyboard-accessible interactive elements.

## Change Scope

- Reuse existing project components, types, helpers, and design tokens.
- Do not add dependencies or abstractions without a clear benefit.
- Do not refactor unrelated files while implementing a focused task.
- Avoid deeply nested branches; use guard clauses or named predicates when clearer.
- Avoid oversized components and hooks with multiple unrelated responsibilities.

## Verification

- Verify responsive behavior for mobile and desktop when changing UI.
- Check accessible labels, focus behavior, and keyboard interactions where relevant.
- Do not claim checks passed unless they were actually run.

## Enforcement

- AGENTS.md is guidance, not a guaranteed enforcement mechanism.
- Encode mechanically checkable conventions in ESLint, Stylelint, TypeScript, architectural import checks, and CI where practical.
