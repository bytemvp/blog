## ADDED Requirements

### Requirement: System Theme Detection
The system SHALL automatically detect the user's operating system color scheme preference on initial page load.

#### Scenario: User has dark mode preference set in OS
- **WHEN** user visits the blog with OS-level dark mode enabled
- **THEN** blog displays in dark theme without manual intervention

#### Scenario: User has light mode preference set in OS
- **WHEN** user visits the blog with OS-level light mode enabled
- **THEN** blog displays in light theme

#### Scenario: User's OS preference is unavailable
- **WHEN** browser does not support color scheme detection
- **THEN** blog defaults to light theme

### Requirement: Manual Theme Toggle
The system SHALL provide a manual control to switch between light and dark themes.

#### Scenario: User toggles to dark theme
- **WHEN** user clicks the theme toggle button while in light mode
- **THEN** blog immediately switches to dark theme
- **AND** theme preference is saved for future visits

#### Scenario: User toggles to light theme
- **WHEN** user clicks the theme toggle button while in dark mode
- **THEN** blog immediately switches to light theme
- **AND** theme preference is saved for future visits

#### Scenario: Toggle button visibility
- **WHEN** page loads
- **THEN** theme toggle button MUST be visible in the header on all pages

### Requirement: Theme Preference Persistence
The system SHALL remember the user's manually selected theme preference across browser sessions.

#### Scenario: User returns after selecting dark theme
- **WHEN** user manually selected dark theme in a previous session
- **AND** user returns to the blog
- **THEN** blog loads in dark theme regardless of system preference

#### Scenario: User clears browser storage
- **WHEN** user's localStorage is cleared
- **THEN** blog reverts to system preference detection

### Requirement: Theme Change Without Flash
The system SHALL apply the correct theme before page content becomes visible to prevent flash of incorrect theme.

#### Scenario: Page load with saved preference
- **WHEN** page loads with a saved theme preference
- **THEN** correct theme MUST be applied before first paint
- **AND** no flash of incorrect theme SHALL occur

#### Scenario: Navigation between pages
- **WHEN** user navigates to another page within the blog
- **THEN** theme SHALL remain consistent across navigation
