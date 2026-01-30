## Why

The site’s current styling is mostly handcrafted CSS, which slows iteration and makes consistent responsive behavior harder to maintain. Adding Tailwind CSS and formal responsive layout requirements will speed development and improve consistency across pages and components.

## What Changes

- Add Tailwind CSS to the Astro build pipeline with configured content paths and build tooling.
- Define responsive layout and typography requirements for core pages and shared components.
- Update existing layout and component styles to use Tailwind utility classes where appropriate.
- Align global styles and theme tokens with Tailwind-based utilities (e.g., colors, spacing, typography).

## Capabilities

### New Capabilities
- `responsive-layout`: Responsive layout rules and breakpoints for core pages and shared UI components.
- `tailwindcss-integration`: Tailwind CSS setup, configuration, and usage guidelines for the project.

### Modified Capabilities

## Impact

- Build/config: astro config, Tailwind/PostCSS configuration, package dependencies.
- Styles: [src/styles/global.css](src/styles/global.css) and shared styling tokens.
- UI: [src/components](src/components), [src/layouts](src/layouts), and [src/pages](src/pages) for responsive updates.
