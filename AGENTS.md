# AI Engineering Instructions

This project follows **Frontend Standards v1.0.0**.

## AI Agent Workflow

1. Inspect the task and relevant code; identify nearby patterns and reuse existing project solutions.
2. Use [Rules by Task](#rules-by-task) to find and read the rules relevant to the task.
3. Implement the smallest coherent change.
4. Verify with available lint, typecheck, and tests.
5. Summarize the changes and remaining limitations.

## Rules by Task

- For FSD layers, slice boundaries, and cross-slice imports, follow [Architecture](rules/architecture.md).
- For React component structure, state, effects, and FSD slice segments, follow [Components](rules/components.md).
- For CSS Modules, responsive styling, layout, and design tokens, follow [Styling](rules/styling.md).
- For names and self-documenting code, follow [Naming](rules/naming.md).
- For UI development, tests, and stories, follow [Testing](rules/testing.md).
- For every code change, apply [Quality](rules/quality.md) for TypeScript, maintainability, reliability, accessibility, scope, and verification requirements.
