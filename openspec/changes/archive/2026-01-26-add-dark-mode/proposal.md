## Why

Users need the ability to view the blog in dark mode to reduce eye strain and improve readability in low-light environments. This is a commonly expected feature for modern web applications.

## What Changes

- Add dark mode theme with automatic detection of system preference
- Add manual theme toggle control in the UI
- Persist user theme preference across sessions
- Update all components and styles to support both light and dark themes

## Capabilities

### New Capabilities
- `theme-system`: Automatic detection of system color scheme preference and manual theme toggle functionality
- `theme-styling`: Dark mode color palette and component styling that adapts to the selected theme

### Modified Capabilities
<!-- No existing capabilities are being modified -->

## Impact

- **Affected Components**: All Astro components in `src/components/` (Header, Footer, BaseHead, etc.)
- **Affected Layouts**: BlogPost layout and page layouts
- **Affected Styles**: Global CSS in `src/styles/global.css`
- **Browser APIs**: Uses `window.matchMedia` for system preference detection and `localStorage` for persistence
- **No Breaking Changes**: This is purely additive functionality
