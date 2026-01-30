## 1. Tooling & Configuration

- [x] 1.1 Add Tailwind CSS, PostCSS, and Autoprefixer dependencies
- [x] 1.2 Create Tailwind config with content paths for Astro, MDX, and Markdown
- [x] 1.3 Wire Tailwind into Astro build pipeline and verify CSS output
- [x] 1.4 Map existing theme tokens (colors, spacing, typography) into Tailwind config

## 2. Global Styling Alignment

- [x] 2.1 Review [src/styles/global.css](src/styles/global.css) and reduce conflicting global overrides
- [x] 2.2 Update global styles to defer to Tailwind utilities where appropriate
- [x] 2.3 Add or update documentation for utility-first styling guidelines

## 3. Responsive Layout Requirements

- [x] 3.1 Document breakpoint usage and layout rules based on responsive layout spec
- [x] 3.2 Implement responsive typography scale for headings and body text
- [x] 3.3 Ensure header and navigation responsiveness on small screens
- [x] 3.4 Apply content width and spacing constraints for readability across breakpoints

## 4. Component & Page Migration

- [x] 4.1 Migrate shared layout components (Header, Footer, BaseHead) to Tailwind utilities
- [x] 4.2 Update top-level pages (home, blog index, about) to Tailwind utilities
- [x] 4.3 Validate responsive behavior across breakpoints and fix regressions
- [x] 4.4 Track remaining components for follow-up migration
