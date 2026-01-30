## ADDED Requirements

### Requirement: Tailwind CSS build integration
The system SHALL integrate Tailwind CSS into the Astro build pipeline with PostCSS so utility classes are processed at build time.

#### Scenario: Tailwind utilities compile successfully
- **WHEN** the project is built
- **THEN** Tailwind CSS utilities are generated and included in the output CSS bundle

### Requirement: Content scanning configuration
The system SHALL configure Tailwind to scan Astro, MDX, and Markdown sources used for UI rendering.

#### Scenario: Tailwind scans all UI sources
- **WHEN** Tailwind is run during build
- **THEN** utility classes referenced in Astro, MDX, and Markdown files are included in the output

### Requirement: Theme token mapping
The system SHALL expose existing theme tokens (colors, spacing, typography) in Tailwind configuration.

#### Scenario: Tailwind uses theme tokens
- **WHEN** utility classes reference tokenized values
- **THEN** the generated styles reflect the configured theme tokens

### Requirement: Utility-first styling guidelines
The system SHALL document utility-first usage guidelines for shared components and layouts.

#### Scenario: Team can follow styling guidelines
- **WHEN** a developer styles a shared component
- **THEN** the guidelines specify which utilities and patterns to prefer
