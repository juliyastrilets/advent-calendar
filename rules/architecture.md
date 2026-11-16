# Architecture Rules

## Feature-Sliced Design (FSD)

- Use this layer order, from highest to lowest: `app` → `pages` → `widgets` → `features` → `entities` → `shared`.
- A layer may depend only on layers below it in this order. Dependencies on higher layers are forbidden.
- Keep slice internals private. Import other slices through their Public API (`index.ts`).
- Avoid cross-slice deep imports. Imports within the same slice may use internal paths.
- Do not create a new slice, layer, or abstraction without a concrete responsibility.
- Keep domain responsibilities in the appropriate feature/entity rather than in generic shared utilities.

## Separation of Concerns

- UI components render and coordinate user interactions.
- Business rules belong in domain-oriented functions or modules.
- API requests and transport details belong in the data/integration layer.
- Prefer explicit interfaces and dependency boundaries to tightly coupled implementations.

## Example

```ts
// Good: import from another slice's Public API
import { PlayerAvatar } from '@entities/player';

// Avoid: deep import into another slice
// import { PlayerAvatar } from '@entities/player/ui/PlayerAvatar/PlayerAvatar';
```

## Pragmatism

- Respect existing architectural conventions before introducing new patterns.
- Apply SOLID where it makes code easier to change or test, not as a reason to multiply interfaces.
- Keep abstractions local until a real shared use case appears.
