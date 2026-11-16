# Styling Rules

## CSS Modules

- Always use CSS Modules for component styles: `*.module.scss` or `*.module.css`.
- Import classes and apply them with React `className`.
- Avoid global selectors for component-specific styles; use global styles only for app-wide resets, tokens, and base typography.
- Avoid inline styles unless a value genuinely depends on runtime data or a CSS custom property is the clearest interface.

## Mobile First

- Write the base style for small screens first.
- Use `min-width` media queries for progressive enhancement.
- Nest media queries inside the selector they modify.
- Prefer responsive dimensions and content-driven layouts over hard-coded heights and widths.

```scss
.card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 25px;
  }
}
```

## Layout

- Prefer normal flow, Flexbox, and Grid for structural layout.
- Avoid `position: absolute` for page or component structure; reserve it for genuine overlays, badges, and decorative positioning.
- Use `min-width: 0` / `minmax(0, 1fr)` where necessary to prevent overflow.
- Do not use arbitrary fixed heights to force content to match a screenshot.
- Use existing spacing, color, typography, and breakpoint tokens; introduce new tokens only when justified.
- Prefer spacing through `gap` and container padding instead of fragile positional offsets.

## Notes

- Nested media queries require a toolchain supporting CSS nesting or SCSS.
- Match the project's chosen CSS Modules extension; do not introduce Sass solely to use nesting if native CSS nesting is already supported.
