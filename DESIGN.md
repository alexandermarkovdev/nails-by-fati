---
name: Nails by Fati Balakchi
description: Selected Elegant Service List landing page with Bulgarian copy.
colors:
  ink: "#492833"
  muted: "#75515e"
  rose: "#8a4058"
  paper: "#fbf2f3"
  header-porcelain: "#fffaf8"
  button-text: "#fff9fa"
  navigation-text: "#603b49"
  selection: "#e9becb"
  inner-line: "#e1ccd4"
  header-line: "#ecdce0"
  inner-button-text: "#fff8fb"
  button-hover: "#703047"
  inner-footer: "#f2e4e9"
  footer-line: "#ddc5cf"
  filter-line: "#d9bbc7"
  inquiry-line: "#e6d4db"
  field-line: "#d6bfc9"
  field-placeholder: "#8e7180"
  white: "#fff"
typography:
  display:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(55px,5.6vw,88px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-.025em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "14px"
    lineHeight: 1.75
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "11px"
  inner-display:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(48px,5.2vw,74px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-.025em"
  inner-body:
    fontFamily: "'Sofia Sans', Arial, sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
rounded:
  button: "24px"
  image: "2px"
  field: "3px"
  filter: "20px"
  zoom-label: "16px"
spacing:
  page-inset: "clamp(24px,4.8vw,88px)"
  action-gap: "12px"
  action-top: "21px"
  hero-title-bottom: "20px"
components:
  button-primary:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.button-text}"
    rounded: "{rounded.button}"
    padding: "0 21px"
  button-secondary:
    backgroundColor: "rgba(251,242,243,.44)"
    textColor: "{colors.rose}"
    rounded: "{rounded.button}"
    padding: "0 21px"
  inner-button-primary:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.inner-button-text}"
    rounded: "{rounded.button}"
    padding: "13px 20px"
---

# Design System: Nails by Fati Balakchi

## Overview

The primary `dist/index.html` preserves the selected Hero 2, “Elegant Service List,” composition, extended with working page and booking links. It combines the selected Cormorant Garamond hero and three service rows with the compact Porcelain Bar header (`clear-header-1`). The user chose Porcelain as small as possible; header selection is complete. The current page preserves the supplied pink manicure photograph and uses burgundy serif typography for the salon identity. Bulgarian copy sits over the pale left side; the photograph dominates the right side. The chosen home retains its fixed image and Elegant Service List composition. The completed multipage extension adds functioning navigation, service links, booking links, and interactive inner-page features.

## Colors

Rose is the primary accent for the filled action, service icons, and active navigation underline. The current headline uses ink throughout. Ink carries the heading and brand. Muted burgundy supports body copy and small labels. Paper and translucent paper overlays maintain legibility over the photograph. The location and brand metadata sit directly over the image without a footer divider.

## Typography

Self-hosted Cormorant Garamond supplies the headline “Три посоки. Един почерк.” and service-row titles. The display token above is the desktop default; the headline becomes 53px on mobile and 47px below 700px viewport height. Service titles use 24px, reducing to 23px on mobile and 21px below 700px height, at weight 500 and line-height 1. Georgia remains the italic brand wordmark; Arial supplies body text and controls. The introduction is 14px with 1.75 line-height, or 12px on mobile. The compact header logo is 24px desktop and 23px mobile, with an 8px owner label. Navigation is 12px at 1280px and 11px at 1250px. Footer metadata remains 10px desktop and 9px mobile.

## Layout

The home page is a 100svh grid with header, flexible main, and footer rows. On home only, document and body suppress overflow and overscroll. The supplied `dist/nails.png` covers the entire viewport with centered cropping. A horizontal translucent veil protects the left copy. Desktop hero width is 49%, capped at 630px, with vertically centered content; the footer retains only the location/identity metadata, with no horizontal divider or service summary bar.

At 1750px and wider, page insets become 7vw and the hero narrows to 46%. At 1250px and below, the header and supporting type compact. Shared navigation collapses to the working mobile menu at 1050px. At 650px and below, the hero becomes full width without a maximum width, and content aligns toward the top. The photograph crops at 66% bottom and a vertical veil is much more opaque behind the upper copy. This creates text above the lower photographic area; it is still one background image, not a separate image block. The owner label stays 8px and the footer line becomes 9px.

Height-specific compaction remains present. The final Icon Studio overrides are authoritative: the headline is 47px below 700px viewport height, service rows compact to 7px vertical padding, and the signature is absent. The selected compact Porcelain header is 56px desktop and 50px mobile, reducing to 46px below 480px viewport height. Its solid porcelain surface protects navigation readability. No scrolling or animated layout is present.

Four optional static alternatives are available at `dist/variant-1/` through `dist/variant-4/`, with a comparison page at `dist/variants/`. They do not replace the main page as the design authority:

- Variant 1: soft rose full-viewport photograph with pill-shaped calls to action.
- Variant 2: warm ivory split composition with a framed image.
- Variant 3: deep plum split composition with pink calls to action.
- Variant 4: editorial centered header and two-column hero above a panoramic photograph.

The earlier main-page iteration was visually reviewed at 1280×720 and 390×844, with an independent reviewer disposition of ship; this historical review does not establish a final header selection.

Variant 1 is the user's favorite among the optional alternatives. Four further selection options at `dist/details-1/` through `dist/details-4/` preserve its exact background image positioning and veil. Their comparison page is `dist/refinements/`:

- Details 1: menu line icons, a calendar call to action, and service labels.
- Details 2: boutique monogram, underline, and note.
- Details 3: gold accent, corner lines, and service chips.
- Details 4: paired sans and serif headline with a disabled floating gallery toolbar.

Details 1 has been selected and promoted to the main page. Details 2–4 and the earlier variants remain alternatives; all details studies preserve the favorite's photographic treatment.
Five header-only alternatives are available at `dist/header-1/` through `dist/header-5/`, compared at `dist/headers/`. They keep the selected Icon Studio body and reserve the same 112px desktop / 84px mobile header row:

- Header 1 — Clean & Simple: plain text navigation row.
- Header 2 — Centered Signature: logo between navigation groups.
- Header 3 — Floating Rose: rounded pale band.
- Header 4 — Burgundy Band: dark strip.
- Header 5 — Studio Masthead: centered logo above navigation.

These five earlier header studies remain alternatives. The later Porcelain Bar selection below is authoritative.

A further readable-header round responds to the user's report that the drawing behind navigation made labels hard to read. Four optional alternatives use opaque backgrounds and larger navigation labels (12px at 1280px; 11px at 1250px):

- `dist/clear-header-1/` — Porcelain Bar: solid `#fffaf8` surface with active underline.
- `dist/clear-header-2/` — White Navigation Card: opaque `#fff` surface with a filled burgundy active tab.
- `dist/clear-header-3/` — Blush Masthead: solid `#f4e3e8` surface and centered two-row layout.
- `dist/clear-header-4/` — Rosewood Ribbon: solid `#784358` surface, light text, and ivory active tab.

Compare them at `dist/clear-headers/`. Porcelain Bar (`clear-header-1`) is now the selected primary header, compacted to 56px desktop / 50px mobile / 46px below 480px height. This records the header-selection stage; the later Hero 2 selection below supersedes its hero. The other options remain alternatives; their colors do not replace the primary tokens above.
Five optional hero studies are available at `dist/hero-1/` through `dist/hero-5/`, compared at `dist/hero-options/`. Hero 2, Elegant Service List, is selected and promoted to the primary page. The comparison supported separate font, layout, and wording shortlists; the other four hero studies remain alternatives. All five preserve the original image positioning and 56px desktop header:

- Hero 1 — Sofia Sans: headline explicitly names the three services.
- Hero 2 — Cormorant Garamond: service rows.
- Hero 3 — Manrope: large service-choice buttons.
- Hero 4 — Lora: three columns.
- Hero 5 — Georgia: revised headline, chips, and supporting details.

Sofia Sans, Cormorant Garamond, Manrope, and Lora are self-hosted in `dist/fonts/` for the hero studies. Cormorant Garamond is now also the primary hero font; the other three remain alternative fonts. Wording across the hero studies reflects the service offer: salon manicure, pedicure, and nail art; courses for beginners and professionals; airbrush materials, equipment, and consultations.
The selected Hero 2 visual review had a ship disposition and applies to the unchanged production hero; only the document title changed on promotion.

The completed multipage extension uses `dist/site.css` and `dist/site.js`. Inner routes are `/salon/`, `/obucheniya/`, `/aerograf/`, `/za-nas/`, `/galeriya/`, `/novini/`, and `/kontakti/`, plus three articles. These pages scroll naturally under a sticky 56px header (50px at the 700px mobile breakpoint); the approved home stays fixed. Inner content is capped at 1300px with 50px side padding, reducing to 38px at 1250px, 30px at 1050px, and 24px at 700px. Two-column sections stack at 700px; gallery columns reduce from three to two, while article and course layouts become single-column.

Inner display type is Cormorant Garamond, while body type is self-hosted Sofia Sans (17px/1.65 desktop; common mobile paragraphs 16px). Inner controls have pill corners, fields have subtly rounded corners, and images stay nearly square-cornered. The shared mobile menu, gallery filters and lightbox, and course FAQs work. Focus uses a rose 2px outline with 4px offset; reduced-motion preference removes transitions. Inner action hover transitions take .18s.

Main navigation and the three home service rows link to their pages. Booking calls to action use the exact official destination `https://studio24.bg/m/nails-by-fati-balakchi-s7379`. The contact email `hello@example.com` is an approved placeholder clearly marked as a sample. The contact form produces a preview only and sends nothing.

Twenty referenced photo copies are stored in `dist/photos/`; supplied originals under `C:\Users\Home\Documents\Claude\nails\images` remain untouched. Student-result gallery images are explicitly labelled as learning examples. The portrait uses `studio05`. Primary content references are the official Studio24 listing, `https://airbrush.convertbuilder.com/`, and the user-supplied Facebook photo URL. No dates or prices are invented.
## Elevation & Depth

The home uses no decorative shadows; its depth comes from the photograph and translucent veil. The shared mobile navigation uses a subtle dropdown shadow. A dark dialog backdrop separates the gallery lightbox from the page. The footer metadata has no separate surface or divider.

## Shapes

The composition uses rectangular regions and a thin header divider. Buttons have pill-shaped corners via the button radius token. Thin outline SVGs provide the action arrows, menu items, calendar action, service labels, ornament, and location pin.

## Components

Primary and secondary actions share a rose border, inline arrow, 47px desktop minimum height, and 14px internal gap. Both current actions use a trailing arrow; the earlier calendar icon is absent. Responsive rules reduce their dimensions. The current booking actions link to the official Studio24 destination. Inner-page buttons use a rose hover fill and visible keyboard focus; prior alternatives retain their original static controls.

The selected Porcelain Bar navigation uses functioning links in a compact row on an opaque porcelain surface, with a thin rose underline on the current item. The active navigation item uses an underline. At mobile widths a working menu toggle reveals an opaque navigation panel. The current hero contains three full-width service links above the actions: Салон, Обучения, and Аерограф. Each pairs a line icon, Cormorant title, Arial detail, and trailing arrow. The list is capped at 430px desktop / 340px mobile; rows are separated by a pale line. These rows replace the earlier inline service labels and are distinct from the removed footer summary bar. The footer contains only the location and brand metadata; its top border is explicitly zero.

## Do's and Don'ts

- Do retain the supplied manicure image, pale pink surface, burgundy type, and Bulgarian text.
- Do preserve the approved fixed-viewport home while allowing inner pages to scroll naturally.
- Do read the final CSS overrides when checking small text sizes.
- Don't apply the home overflow restriction to inner pages; preserve working navigation, menu, gallery, and FAQs.
- Don't restore the removed service summary bar or footer divider without a new request.











