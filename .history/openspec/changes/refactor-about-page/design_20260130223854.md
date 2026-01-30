## Context

The current about page is a single block of placeholder text with minimal hierarchy. The goal is to create a modern, sectioned layout that clearly presents the author bio, story, values, timeline, skills, and contact information.

**Current State:**
- Long-form placeholder paragraphs
- No distinct sections or visual hierarchy
- No CTA or contact block

**Constraints:**
- Must remain an Astro static page
- Use simple HTML + CSS, no runtime dependencies
- Keep content editable within the page

## Goals / Non-Goals

**Goals:**
- Build a structured about page with hero, story, values, timeline, skills, and contact sections
- Improve typographic hierarchy and spacing for readability
- Ensure layout is responsive and visually modern

**Non-Goals:**
- Adding a CMS or dynamic content system
- Integrating third-party forms or analytics
- Changing global site navigation or routing

## Decisions

### 1. Section-based layout
**Decision:** Implement clear section blocks with headings and supporting content.
**Rationale:** Improves readability and allows quick scanning.

### 2. Reuse existing layout wrapper
**Decision:** Keep using the existing `BlogPost` layout for metadata and shared chrome.
**Rationale:** Minimizes changes outside the about page and keeps SEO metadata consistent.

### 3. CSS-first styling
**Decision:** Add page-scoped styles in `about.astro` without new dependencies.
**Rationale:** Keeps the change lightweight and easy to maintain.

## Risks / Trade-offs

**[Risk]** Large content blocks reduce readability → **Mitigation:** Use cards, columns, and spacing.
**[Risk]** Too many sections increase maintenance → **Mitigation:** Keep content concise with reusable patterns.
**[Trade-off]** Static content limits personalization → **Mitigation:** Design content to be easily editable.

## Migration Plan

1. Replace placeholder text with structured section markup.
2. Add scoped CSS for layout, typography, and responsiveness.
3. Verify content hierarchy and CTA placement.
4. Test layout across breakpoints.

Rollback: Revert `about.astro` to the previous template.

## Open Questions

- Should the contact section link to email or a contact form?
- Should the timeline be in reverse chronological order?
