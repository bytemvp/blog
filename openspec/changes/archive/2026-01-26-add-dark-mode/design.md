## Context

The blog currently uses a fixed light color scheme defined in `src/styles/global.css`. Modern web applications typically support dark mode to improve user experience in low-light environments. This design addresses implementing theme switching for the Astro-based blog.

**Current State:**
- CSS variables defined in `:root` with hardcoded light theme colors
- No theme detection or switching mechanism
- All components use the global light theme

**Constraints:**
- Must work with Astro's static site generation
- No runtime framework dependencies (minimize client-side JS)
- Should respect user's system preferences automatically
- Theme preference must persist across page navigations

## Goals / Non-Goals

**Goals:**
- Implement automatic system preference detection
- Provide manual theme toggle control
- Persist theme preference in browser storage
- Create cohesive dark theme color palette
- Ensure all existing components work in both themes
- Minimize JavaScript execution overhead

**Non-Goals:**
- Additional theme options beyond light/dark
- Per-component theme customization
- Animated theme transitions (keep simple)
- Support for Internet Explorer or legacy browsers

## Decisions

### 1. CSS Variables with Data Attribute Strategy

**Decision:** Use a `data-theme` attribute on the HTML element combined with CSS variables to manage themes.

**Rationale:**
- CSS variables provide clean theming without duplicating styles
- Data attribute avoids FOUC (Flash of Unstyled Content) issues
- Works seamlessly with SSR/SSG (can set initial value server-side)
- Better performance than class-based toggling

**Alternative Considered:** Class-based theme switching (e.g., `.dark-mode`)
- Rejected: Less semantic, same implementation complexity

### 2. Inline Script for Theme Initialization

**Decision:** Place a blocking inline script in `<head>` to initialize theme before page render.

**Rationale:**
- Prevents flash of wrong theme on page load
- Script runs before body renders, reading localStorage
- Tiny performance impact (< 1KB inline)
- Standard pattern for theme systems

**Alternative Considered:** Load theme after page render
- Rejected: Creates noticeable flash on page load

### 3. LocalStorage for Persistence

**Decision:** Use `localStorage` with key `theme` to store user preference.

**Rationale:**
- Simple API, widely supported
- Persists across sessions
- No server-side state needed
- Falls back gracefully if unavailable

**Alternative Considered:** Cookies for SSR theme detection
- Rejected: Unnecessary complexity for a static site

### 4. System Preference Detection with Fallback

**Decision:** Check `window.matchMedia('(prefers-color-scheme: dark)')` with light mode as default.

**Rationale:**
- Respects user's OS-level preference
- Standard web API
- Light mode is safer fallback for accessibility

### 5. Component-Level Theme Toggle

**Decision:** Add theme toggle button to Header component with icon-based UI.

**Rationale:**
- Header is present on all pages
- Icon-based toggle is intuitive (sun/moon)
- Keeps toggle logic centralized

**Alternative Considered:** Toggle in Footer
- Rejected: Less discoverable, requires scrolling

## Risks / Trade-offs

**[Risk]** Flash of unstyled content if JavaScript fails
→ **Mitigation:** Inline script in head runs before render; falls back to system preference

**[Risk]** CSS variable browser support issues
→ **Mitigation:** CSS variables supported in all modern browsers (95%+ coverage); acceptable for a modern blog

**[Risk]** Color contrast issues in dark mode
→ **Mitigation:** Use WCAG AA compliant color palette; test with accessibility tools

**[Trade-off]** Inline script adds ~500 bytes to every page
→ **Acceptable:** Prevents FOUC, worth the cost for better UX

**[Trade-off]** All components need dark mode styling consideration
→ **Acceptable:** One-time effort with long-term benefit

## Open Questions

- Should we add a transition animation when toggling themes? (Suggest: no, keep it instant)
- Do we need to support high contrast themes in the future? (Defer to later)
