---
name: Nails by Fati Balakchi
description: Pink photographic salon landing page with Bulgarian copy.
colors:
  ink: "#492833"
  muted: "#75515e"
  rose: "#8a4058"
  paper: "#fbf2f3"
  button-text: "#fff9fa"
  navigation-text: "#603b49"
  signature-rule: "#b68c9b"
  selection: "#e9becb"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(44px,5.15vw,88px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.035em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "15px"
    lineHeight: 1.85
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "11px"
rounded:
  button: "2px"
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
    padding: "0 25px"
  button-secondary:
    backgroundColor: "rgba(251,242,243,.44)"
    textColor: "{colors.rose}"
    rounded: "{rounded.button}"
    padding: "0 25px"
---

# Design System: Nails by Fati Balakchi

## Overview

The current page preserves the supplied pink manicure photograph and uses burgundy serif typography for the salon identity. Bulgarian copy sits over the pale left side; the photograph dominates the right side. This is a single-screen static presentation with disabled navigation and calls to action.

## Colors

Rose is the primary accent for italic headline emphasis, the filled action, icons, and the active navigation underline. Ink carries the heading and brand. Muted burgundy supports body copy and small labels. Paper and translucent paper overlays maintain legibility over the photograph. The location and brand metadata sit directly over the image without a footer divider.

## Typography

Georgia supplies the regular hero heading and italic brand wordmark. Arial supplies body text and controls. The hero uses balanced wrapping, while the introduction uses a maximum width of 420px and pretty wrapping. Desktop brand type is 34px; its owner label is 11px with 2px tracking. Navigation, buttons, and signature resolve to 11px through the final CSS overrides. The footer identity line resolves to 10px.

## Layout

The page is a 100svh grid with header, flexible main, and footer rows. Both document and body suppress overflow and overscroll. The supplied `dist/nails.png` covers the entire viewport with centered cropping. A horizontal translucent veil protects the left copy. Desktop hero width is 49%, capped at 640px, with vertically centered content; the footer retains only the location/identity metadata, with no horizontal divider or service summary bar.

At 1750px and wider, page insets become 7vw and the hero narrows to 46%. At 1250px and below, the header and supporting type compact. At 1000px and below, navigation becomes a four-column grid. At 650px and below, navigation is replaced by a disabled menu icon, the hero becomes full width (maximum 400px), and content aligns toward the top. The photograph crops at 66% bottom and a vertical veil is much more opaque behind the upper copy. This creates text above the lower photographic area; it is still one background image, not a separate image block. The owner/signature labels become 10px and the footer line becomes 9px.

Height-specific compaction applies below 720px on desktop, below 700px on mobile, and below 480px overall. The last compact-height rule uses a 58% hero, 34px headline, 34px minimum button height, and hides the signature. Later text-size overrides remain authoritative. No scrolling or animated layout is present.

Four optional static alternatives are available at `dist/variant-1/` through `dist/variant-4/`, with a comparison page at `dist/variants/`. They do not replace the main page as the design authority:

- Variant 1: soft rose full-viewport photograph with pill-shaped calls to action.
- Variant 2: warm ivory split composition with a framed image.
- Variant 3: deep plum split composition with pink calls to action.
- Variant 4: editorial centered header and two-column hero above a panoramic photograph.

The main page was visually reviewed at 1280×720 and 390×844, with an independent reviewer disposition of ship.

Variant 1 is the user's favorite among the optional alternatives. Four further selection options at `dist/details-1/` through `dist/details-4/` preserve its exact background image positioning and veil. Their comparison page is `dist/refinements/`:

- Details 1: menu line icons, a calendar call to action, and service labels.
- Details 2: boutique monogram, underline, and note.
- Details 3: gold accent, corner lines, and service chips.
- Details 4: paired sans and serif headline with a disabled floating gallery toolbar.

These details studies remain optional alternatives for selection. They preserve the favorite's photographic treatment and do not replace the main design authority.
## Elevation & Depth

There are no shadows. Depth comes from the photograph and translucent horizontal or vertical veil. The footer metadata has no separate surface or divider.

## Shapes

The composition uses rectangular regions and a thin header divider. Buttons have subtly softened corners via the button radius token. Thin outline SVGs provide the action arrows, menu, and location pin.

## Components

Primary and secondary actions share a rose border, inline arrow, 51px desktop minimum height, and 24px internal gap. Responsive rules reduce their dimensions. Both are actual disabled buttons; disabled opacity remains 1 and the cursor is default. There are no hover, focus, or active interaction treatments.

Navigation is a row of disabled text buttons, with a thin rose underline on the current item. The mobile menu is also disabled. The footer contains only the location and brand metadata; its top border is explicitly zero.

## Do's and Don'ts

- Do retain the supplied manicure image, pale pink surface, burgundy type, and Bulgarian text.
- Do preserve the fixed viewport and the current disabled control behavior for this scoped static artifact.
- Do read the final CSS overrides when checking small text sizes.
- Don't add scrolling, animations, shadows, or interactive states to this documented artifact.
- Don't restore the removed service summary bar or footer divider without a new request.



