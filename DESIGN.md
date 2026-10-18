---
name: Nails by Fati Balakchi
description: Selected Icon Studio landing page with Bulgarian copy.
colors:
  ink: "#492833"
  muted: "#75515e"
  rose: "#8a4058"
  paper: "#fbf2f3"
  button-text: "#fff9fa"
  navigation-text: "#603b49"
  selection: "#e9becb"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(48px,5.7vw,92px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-.035em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "15px"
    lineHeight: 1.85
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "11px"
rounded:
  button: "24px"
spacing:
  page-inset: "clamp(24px,4.8vw,88px)"
  action-gap: "14px"
  action-top: "34px"
  hero-title-bottom: "24px"
components:
  button-primary:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.button-text}"
    rounded: "{rounded.button}"
    padding: "0 22px"
  button-secondary:
    backgroundColor: "rgba(251,242,243,.44)"
    textColor: "{colors.rose}"
    rounded: "{rounded.button}"
    padding: "0 22px"
---

# Design System: Nails by Fati Balakchi

## Overview

The user selected Details 1, “Icon Studio,” which is copied exactly to `dist/index.html` and is now the primary design authority. The current page preserves the supplied pink manicure photograph and uses burgundy serif typography for the salon identity. Bulgarian copy sits over the pale left side; the photograph dominates the right side. This is a single-screen static presentation with disabled navigation and calls to action.

## Colors

Rose is the primary accent for italic headline emphasis, the filled action, icons, and the active navigation underline. Ink carries the heading and brand. Muted burgundy supports body copy and small labels. Paper and translucent paper overlays maintain legibility over the photograph. The location and brand metadata sit directly over the image without a footer divider.

## Typography

Georgia supplies the regular hero heading and italic brand wordmark. Arial supplies body text, controls, and service labels. The hero uses balanced wrapping; the introduction has a 390px desktop maximum width. Desktop brand type is 32px, reducing to 29px at 1250px. Navigation labels are 10px, reducing to 9px at 1250px; body buttons are 11px. The owner label is 11px with 2px tracking. At mobile widths the heading is 44px and the introduction is 12px. The footer identity is 10px desktop and 9px mobile. The previous signature is hidden.

## Layout

The page is a 100svh grid with header, flexible main, and footer rows. Both document and body suppress overflow and overscroll. The supplied `dist/nails.png` covers the entire viewport with centered cropping. A horizontal translucent veil protects the left copy. Desktop hero width is 49%, capped at 640px, with vertically centered content; the footer retains only the location/identity metadata, with no horizontal divider or service summary bar.

At 1750px and wider, page insets become 7vw and the hero narrows to 46%. At 1250px and below, the header and supporting type compact. At 1000px and below, navigation becomes a four-column grid. At 650px and below, navigation is replaced by a disabled menu icon, the hero becomes full width (maximum 400px), and content aligns toward the top. The photograph crops at 66% bottom and a vertical veil is much more opaque behind the upper copy. This creates text above the lower photographic area; it is still one background image, not a separate image block. The owner label becomes 10px and the footer line becomes 9px.

Height-specific compaction remains present. The final Icon Studio overrides are authoritative: the headline is 42px below 650px viewport height, service-label spacing compacts below 700px height, and the signature is hidden. The header reserves 112px desktop and 84px mobile. No scrolling or animated layout is present.

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

The header selection is pending. None of these alternatives is recorded as the final choice.

## Elevation & Depth

There are no shadows. Depth comes from the photograph and translucent horizontal or vertical veil. The footer metadata has no separate surface or divider.

## Shapes

The composition uses rectangular regions and a thin header divider. Buttons have pill-shaped corners via the button radius token. Thin outline SVGs provide the action arrows, menu items, calendar action, service labels, ornament, and location pin.

## Components

Primary and secondary actions share a rose border, inline arrow, 51px desktop minimum height, and 12px internal gap. The primary action also has a calendar icon. Responsive rules reduce their dimensions. Both are actual disabled buttons; disabled opacity remains 1 and the cursor is default. There are no hover, focus, or active interaction treatments.

Current navigation is a row of disabled buttons with line icons above their labels, with a thin rose underline on the current item. At 1000px and below, icons move beside labels within the four-column navigation grid. At mobile widths the navigation is replaced by a disabled menu. Three inline icon-and-text service labels sit under the hero actions; these are not the removed footer summary bar. The footer contains only the location and brand metadata; its top border is explicitly zero.

## Do's and Don'ts

- Do retain the supplied manicure image, pale pink surface, burgundy type, and Bulgarian text.
- Do preserve the fixed viewport and the current disabled control behavior for this scoped static artifact.
- Do read the final CSS overrides when checking small text sizes.
- Don't add scrolling, animations, shadows, or interactive states to this documented artifact.
- Don't restore the removed service summary bar or footer divider without a new request.




