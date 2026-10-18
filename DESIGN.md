---
name: Nails by Fati Balakchi
description: Pink photographic salon landing page with Bulgarian copy.
colors:
  ink: "#492833"
  muted: "#75515e"
  rose: "#8a4058"
  line: "#dcc5cc"
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
  title:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.2
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

Rose is the primary accent for italic headline emphasis, the filled action, icons, and the active navigation underline. Ink carries the heading and brand. Muted burgundy supports body copy and small labels. Paper and translucent paper overlays maintain legibility over the photograph; pale rose lines divide the footer.

## Typography

Georgia supplies the regular hero and service headings, plus an italic brand wordmark. Arial supplies body text and controls. The hero uses balanced wrapping, while the introduction uses a maximum width of 420px and pretty wrapping. Desktop brand type is 34px; its owner label is 11px with 2px tracking. Navigation, buttons, signature, and service descriptions resolve to 11px through the final CSS overrides. The footer identity line resolves to 10px.

## Layout

The page is a 100svh grid with header, flexible main, and footer rows. Both document and body suppress overflow and overscroll. The supplied `dist/nails.png` covers the entire viewport with centered cropping. A horizontal translucent veil protects the left copy. Desktop hero width is 49%, capped at 640px, with vertically centered content; the footer has three equal summary columns and a location/identity line.

At 1750px and wider, page insets become 7vw and the hero narrows to 46%. At 1250px and below, the header and supporting type compact. At 1000px and below, navigation becomes a four-column grid. At 650px and below, navigation is replaced by a disabled menu icon, the hero becomes full width (maximum 400px), and content aligns toward the top. The photograph crops at 66% bottom and a vertical veil is much more opaque behind the upper copy. This creates text above the lower photographic area; it is still one background image, not a separate image block. The footer remains three columns, loses its service icons, and uses 15px headings and 10px descriptions. The owner/signature labels become 10px and the footer line becomes 9px.

Height-specific compaction applies below 720px on desktop, below 700px on mobile, and below 480px overall. The last compact-height rule uses a 58% hero, 34px headline, 34px minimum button height, and hides the signature. Later text-size overrides remain authoritative. No scrolling or animated layout is present.

## Elevation & Depth

There are no shadows. Depth comes from the photograph and translucent horizontal or vertical veil. The footer summaries use a near-opaque paper surface and fine borders.

## Shapes

The composition uses rectangular regions and thin dividers. Buttons have subtly softened corners via the button radius token. Thin outline SVGs provide the action arrows, service icons, menu, and location pin.

## Components

Primary and secondary actions share a rose border, inline arrow, 51px desktop minimum height, and 24px internal gap. Responsive rules reduce their dimensions. Both are actual disabled buttons; disabled opacity remains 1 and the cursor is default. There are no hover, focus, or active interaction treatments.

Navigation is a row of disabled text buttons, with a thin rose underline on the current item. The mobile menu is also disabled. Footer summaries use Georgia headings, Arial descriptions, a top border, and vertical column separators.

## Do's and Don'ts

- Do retain the supplied manicure image, pale pink surface, burgundy type, and Bulgarian text.
- Do preserve the fixed viewport and the current disabled control behavior for this scoped static artifact.
- Do read the final CSS overrides when checking small text sizes.
- Don't add scrolling, animations, shadows, or interactive states to this documented artifact.
- Don't assume the mobile footer stacks; the implementation retains three equal columns.
