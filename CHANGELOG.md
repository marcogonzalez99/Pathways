# Changelog

All notable changes to Pathways will be documented here.

## [Unreleased]

## [0.0.3] - 2026-02-23

### Updated
- `ProfileCard.astro` - Implemented full component: header image, circular profile image overlapping header, name, and tagline
- `src/data/links.ts` - Populated `header_image` and `profile_image` paths for all four pages using correct root-relative `/images/` paths

---

## [0.0.2] - 2026-02-22

### Added
- `BaseLayout.astro` - Shared layout component accepting a `PageData` prop, renders profile, social buttons, cards, and section link
- `src/data/links.ts` - Typed interfaces (`PageData`, `Card`, `SocialLinks`) and data stubs for all four pages (`indexData`, `shineburstData`, `polarisData`, `skyholdsData`)


## [0.0.1] - 2026-02-21

### Added
- Initial Astro project setup with Tailwind CSS
- `src/pages/` for four pages: `index`, `polaris`, `shineburst`, `skyholds`
- `ProfileCard.astro` and `LinkCard.astro` components
- README
