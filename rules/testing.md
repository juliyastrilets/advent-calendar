# Testing Rules

## Tool Responsibilities

- Use Storybook for UI development and for documenting representative component states.
- Use Storybook interaction tests to verify UI behavior; prefer testing UI behavior through stories.
- Use Vitest for unit tests of business logic and other code that can be tested independently of React.
- Do not duplicate the same behavior coverage in Storybook and Vitest.

## Test Design

- Mock external dependencies and API requests.
- Ensure tests can run without a backend.
- Keep Vitest tests close to the code they cover and name them `*.test.ts` or `*.test.tsx`.
- Keep Storybook stories beside their component, name them `ComponentName.stories.tsx`, and cover meaningful variants and states.
