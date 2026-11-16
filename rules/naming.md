# Naming and Self-Documenting Code

## General

- Choose names that reveal purpose, intent, and domain meaning.
- Prefer full words over obscure abbreviations.
- Use consistent terminology for the same concept across UI, logic, and types.
- Avoid generic names such as `data`, `item`, `value`, or `result` when the domain offers a clearer name.

## Functions

- Name commands with an action verb: `updatePlayerBalance`, `joinTournament`.
- Name computations by their result: `calculatePrizePool`, `getAvailableSeats`.
- Use `handle*` for event handlers when it clarifies their role, e.g. `handleJoinClick`.
- Avoid names such as `processData`, `doStuff`, and `check` without context.

## Booleans

- Use `is*`, `has*`, `can*`, or `should*` where natural.
- Examples: `isPlayerActive`, `hasEnoughChips`, `canJoinTournament`, `shouldShowTooltip`.
- Ensure a boolean name describes a true/false proposition, not an ambiguous state.

## Self-Documenting Code

- Prefer explicit control flow and small, cohesive functions.
- Extract named predicates when complex conditions obscure business meaning.
- Use comments to explain *why* a non-obvious decision exists, not to repeat *what* the code does.
- Avoid magic numbers when values have domain meaning; use named constants or existing tokens.

```ts
const hasEnoughChips = playerBalance >= tournamentBuyIn;
const canJoinTournament = isRegistrationOpen && hasEnoughChips;
```
