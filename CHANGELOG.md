# Changelog

All notable changes to Pathways will be documented here.

## [Unreleased]

## [0.1.0] - 2026-02-24

### Added
- `SocialButtons.astro` - Implemented component: renders social icon images from `/images/social/` using `.map()` over a `SocialLink[]` prop, with circular bordered styling

### Updated
- `src/data/links.ts` - Refactored `SocialLinks` interface into `SocialLink` (singular) with explicit `icon` and `link` fields; updated `social_links` type to `SocialLink[]` across all page data; updated `Card` interface to use `text` and `alt` fields; added real card data to `indexData`; reorganized image paths into subdirectories (`/images/headers/`, `/images/logos/`, `/images/cards/`, `/images/social/`)
- `LinkCard.astro` - Implemented component: replaced flex layout with responsive CSS Grid (`grid-cols-1 lg:grid-cols-3`), made full card clickable via wrapping `<a>` tag, added text label bar at bottom of each card
- `BaseLayout.astro` - Updated `LinkCard` usage to pass `cards={page.cards}`

---

## [0.0.3] - 2026-02-23

### Updated
- `ProfileCard.astro` - Implemented full component: header image, circular profile image overlapping header, name, and tagline
- `src/data/links.ts` - Populated `header_image` and `profile_image` paths for all four pages using correct root-relative `/images/` paths

---

## [0.0.2] - 2026-02-22

### Added
- `BaseLayout.astro` - Shared layout component accepting a `PageData` prop, renders profile, social buttons, cards, and section link
- `src/data/links.ts` - Typed interfaces (`PageData`, `Card`, `SocialLink`) and data stubs for all four pages (`indexData`, `shineburstData`, `polarisData`, `skyholdsData`)


## [0.0.1] - 2026-02-21

### Added
- Initial Astro project setup with Tailwind CSS
- `src/pages/` for four pages: `index`, `polaris`, `shineburst`, `skyholds`
- `ProfileCard.astro` and `LinkCard.astro` components
- README
