# Component Design and State Rules

## Components

- Give each component a clear UI responsibility.
- Split components when they contain distinct sections, independent behaviors, or difficult-to-read JSX.
- Avoid arbitrary line-count limits: complexity and cohesion matter more than file length.
- Prefer composition over large components with many unrelated conditional branches.
- Keep `ui` components focused on declarative JSX and composition. Move business decisions, state transitions, and non-trivial handler logic into `model` or suitable slice-local helpers in `lib`; wire their results and callbacks into the JSX. Simple presentation-only handlers may stay in the component.
- Use early returns for loading, error, and empty states when they improve readability.

## Rendering and Logic

- Extract stateful reusable UI behavior into custom hooks only when a hook is warranted.
- Do not create a hook simply to hide every function from the component.
- Do not create empty `hooks.ts`, `utils.ts`, or `types.ts` files without a real need.

In an FSD slice, keep code in the segment that matches its responsibility: components in `ui`, domain logic and slice-level state in `model`, API access in `api`, and slice-local helpers in `lib`. State used only by one component can stay with that component in `ui`.

Example structure for a sufficiently complex slice:

```text
player-card/
  api/
    getPlayer.ts
  lib/
    formatRating.ts
  model/
    types.ts
    usePlayerCard.ts     # only for reusable slice-level state or behavior
  ui/
    PlayerCard.tsx
    PlayerCard.module.scss
  index.ts               # slice Public API
```

Create only the segments and files the slice actually needs; do not add empty placeholder files.

## State and Effects

- Keep state as local as practical.
- Compute derived values from props/state during rendering instead of storing duplicate state.
- Use `useEffect` for synchronization with external systems, not for ordinary calculations or user-event logic.
- Avoid `useMemo` and `useCallback` unless there is a concrete identity or performance reason.

## Props

- Prefer clear, typed props with domain-relevant names.
- Avoid a growing collection of mutually exclusive boolean props; consider a discriminated variant when it makes invalid combinations impossible.
- Avoid passing unnecessary state through many component levels.
