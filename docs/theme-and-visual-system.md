# Theme and Visual System

This document defines the visual system for later website implementation.

## 1. Theme Strategy

Recommended approach:

- Light-first website
- Dark-mode support or dark sections
- Proof visuals remain bright and framed

Reason:

- Research documents, charts and reports are easiest to read on light surfaces.
- Dark mode improves comfort and modern feel for mobile/technical users.
- The site should look good in both environments without relying on heavy gradients.

## 2. Light Theme

Purpose:

- Default reading and service-discovery experience.

Suggested tokens:

- Page background: `#F7FAFC`
- Surface: `#FFFFFF`
- Surface subtle: `#EEF5F7`
- Text primary: `#102033`
- Text secondary: `#526173`
- Border: `#D8E3EA`
- Primary/navy: `#08233F`
- Accent/teal: `#0E9BB0`
- Accent/cyan: `#21B8D0`
- Success/WhatsApp support: `#1FA463`
- Warning/amber: `#C8841A`

Use:

- Light backgrounds for content-heavy pages.
- Navy headings and strong CTAs.
- Teal for links, selected states and highlights.
- White surfaces for service cards and proof panels.

Avoid:

- All-white pages with no hierarchy.
- Too many blue-tinted sections.
- Weak grey text.

## 3. Dark Theme

Purpose:

- Comfortable browsing, modern technical feel and premium contrast.

Suggested tokens:

- Page background: `#07111F`
- Surface: `#0D1B2D`
- Surface raised: `#13263B`
- Text primary: `#F4F8FB`
- Text secondary: `#B8C7D6`
- Border: `#294055`
- Primary/navy: `#06172A`
- Accent/teal: `#2EC4D6`
- Accent/cyan: `#54D8E8`
- Success/WhatsApp support: `#32C878`
- Warning/amber: `#E3A23A`

Use:

- Dark sections for hero, footer, CTA bands or theme option.
- Light proof image as a framed object.
- Strong contrast for text and buttons.

Avoid:

- Pure black backgrounds.
- Neon styling.
- Purple-heavy gradients.
- Inverted screenshots.
- Low-contrast grey text.

## 4. Hero Visual Treatment

Preferred asset:

`mafubam-website/assets/images/hero/hero-proof-workbench-v2@2x.png`

Light mode:

- Place on light or near-white background.
- Let the image blend naturally with the page.
- Use minimal shadow.

Dark mode:

- Place the image inside a framed light evidence panel.
- Add a subtle border or shadow.
- Do not invert, tint or darken the image.
- Keep surrounding text in white/light grey.

## 5. Typography

Recommended:

- Primary: Inter
- Fallback: Source Sans 3, Arial, sans-serif

Rules:

- Use strong headings, not oversized headings.
- Keep body copy readable on mobile.
- Avoid thin font weights.
- Avoid negative letter spacing.
- Keep service-card headings short.

## 6. Component Taste Rules

Navigation:

- Simple, predictable and compact.
- Quote CTA visible on desktop.
- Mobile menu should be easy to tap.

Buttons:

- Primary buttons should be clear and confident.
- WhatsApp button can use green accent but should not dominate every section.

Cards:

- Use for services, portfolio and packages.
- Keep radius modest.
- Do not nest cards.

Proof panels:

- Should feel like real evidence.
- Use labels and captions.
- Avoid decorative-only mockups.

## 7. Motion

Use:

- Subtle hover states
- Small reveal transitions
- Smooth theme switch if dark mode is implemented

Avoid:

- Heavy scroll animation
- Moving backgrounds
- Auto-playing media
- Animation that delays reading

