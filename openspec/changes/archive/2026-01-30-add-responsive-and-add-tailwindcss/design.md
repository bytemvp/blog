## Context

The site currently uses mostly handcrafted CSS in [src/styles/global.css](src/styles/global.css) with component-level styles in Astro components. This makes responsive behavior inconsistent and increases effort to maintain a cohesive layout and typography system. The change introduces Tailwind CSS and formalizes responsive layout rules for shared UI and core pages.

Constraints:
- Keep Astro build working with existing content and components.
- Minimize visual regressions by incrementally migrating styles.
- Preserve existing theme tokens where possible and map them into Tailwind configuration.

## Goals / Non-Goals

**Goals:**
- Add Tailwind CSS to the Astro build pipeline with clear content scanning paths.
- Define responsive breakpoints and layout rules for core pages and shared components.
- Provide a consistent, utility-first styling approach aligned with existing theme tokens.
- Enable incremental migration from existing CSS to Tailwind utilities.

**Non-Goals:**
- Full redesign of the site’s visual identity.
- Rewriting every existing component in one pass.
- Introducing a new design system beyond the current theme tokens and layout needs.

## Decisions

1. **Adopt Tailwind CSS with PostCSS integration**
   - **Decision:** Add Tailwind CSS and PostCSS configuration integrated with Astro’s build pipeline.
   - **Rationale:** Standard approach for utility-first styling with minimal runtime overhead.
   - **Alternatives:** Continue with handcrafted CSS (slower iteration, inconsistent responsiveness).

2. **Define a small, explicit breakpoint set aligned with existing layouts**
   - **Decision:** Use Tailwind’s default breakpoints unless design constraints require adjustments; document responsive layout rules in specs.
   - **Rationale:** Avoids over-customization and keeps community tooling/recipes compatible.
   - **Alternatives:** Custom breakpoints (more control but more maintenance and risk of inconsistency).

3. **Incremental migration strategy**
   - **Decision:** Convert shared layout components and top-level pages first; leave specialized components for later.
   - **Rationale:** Reduces risk of regressions and enables quick wins.
   - **Alternatives:** Big-bang migration (higher risk and harder to review).

4. **Map existing theme tokens into Tailwind config**
   - **Decision:** Expose current theme colors/spacing/typography as Tailwind tokens, then use utilities in components.
   - **Rationale:** Maintains visual continuity while leveraging Tailwind utilities.
   - **Alternatives:** Replace theme tokens entirely (risk of visual mismatch).

## Risks / Trade-offs

- **Risk:** Visual regressions from partial migration → **Mitigation:** Start with shared layout components and add visual checks for core pages.
- **Risk:** CSS specificity conflicts between global CSS and utilities → **Mitigation:** Reduce global overrides and keep utilities authoritative for migrated components.
- **Trade-off:** Keeping some handcrafted CSS temporarily → **Mitigation:** Track remaining components and plan follow-up migration tasks.

## Migration Plan

1. Add Tailwind and PostCSS configuration; verify build and content scanning.
2. Update global styles to defer to Tailwind utilities where applicable.
3. Migrate shared layout components and core pages to Tailwind utilities.
4. Validate responsive behavior across breakpoints; adjust tokens as needed.
5. Document remaining components for follow-up migrations.

## Open Questions

- Are there any pages/components that must remain on handcrafted CSS for now?
- Do we need to customize Tailwind’s default breakpoints to match existing layout assumptions?
- Which theme tokens should be expanded or adjusted to support responsive typography?
