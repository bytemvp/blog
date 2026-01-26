## 1. Foundation Setup

- [x] 1.1 Create theme initialization script with localStorage read and system preference detection
- [x] 1.2 Add inline script to BaseHead component before any CSS loads
- [x] 1.3 Define dark theme CSS variables in global.css under `[data-theme="dark"]` selector

## 2. Theme System Implementation

- [x] 2.1 Implement `getThemePreference()` function to check localStorage and system preference
- [x] 2.2 Implement `setTheme()` function to update data-theme attribute on document element
- [x] 2.3 Implement `toggleTheme()` function to switch between light and dark themes
- [x] 2.4 Add localStorage write when theme is manually changed

## 3. Theme Toggle UI

- [x] 3.1 Create ThemeToggle component with button and sun/moon icons
- [x] 3.2 Add click handler to toggle theme and update icon
- [x] 3.3 Integrate ThemeToggle component into Header component
- [x] 3.4 Add ARIA labels for accessibility (e.g., "Toggle dark mode")

## 4. Dark Theme Color Palette

- [x] 4.1 Define dark theme colors for primary variables (background, text, accent)
- [x] 4.2 Define dark theme colors for gray scale variables
- [x] 4.3 Update gradient variables for dark theme
- [x] 4.4 Update box-shadow variables for dark theme

## 5. Component Styling Updates

- [x] 5.1 Update Header component styles to support dark theme
- [x] 5.2 Update Footer component styles to support dark theme
- [x] 5.3 Update BlogPost layout styles to support dark theme
- [x] 5.4 Update blog index page styles to support dark theme
- [x] 5.5 Update code block syntax highlighting for dark theme

## 6. Global Styles Adjustments

- [x] 6.1 Update body background gradient for dark theme
- [x] 6.2 Update link colors and hover states for dark theme
- [x] 6.3 Update border and separator colors for dark theme
- [x] 6.4 Test and adjust color contrast ratios for accessibility (WCAG AA)

## 7. Testing and Refinement

- [x] 7.1 Test theme persistence across page navigations
- [x] 7.2 Test system preference detection on page load
- [x] 7.3 Verify no flash of wrong theme occurs (FOUC test)
- [x] 7.4 Test theme toggle functionality on all pages
- [x] 7.5 Verify all components render correctly in both themes
- [x] 7.6 Run accessibility audit for color contrast in dark theme
