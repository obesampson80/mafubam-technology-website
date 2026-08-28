# Animation Implementation TODO

Purpose: add subtle, professional motion that makes the website feel polished and human-made without reducing trust, readability, speed, or accessibility.

## Animation Principles

- [x] Keep motion calm, fast, and purposeful.
- [x] Use animation to clarify interaction, hierarchy, and page flow.
- [x] Avoid bouncing text, heavy parallax, flashy loops, spinning icons, and decorative motion that feels generic.
- [x] Respect `prefers-reduced-motion` with a near-static experience.
- [x] Keep animations consistent across light and dark mode.
- [x] Verify on mobile, tablet, and desktop screenshots before accepting changes. Desktop captured; tablet/mobile accepted after user review.

## Phase 1 - Motion System Foundation

- [x] Define reusable CSS variables for durations, easing, distance, and hover lift.
- [x] Add a reduced-motion block that disables transitions and scroll reveals for users who prefer reduced motion.
- [x] Create reusable classes for reveal, staggered reveal, hover lift, press feedback, and image reveal.
- [x] Keep all motion CSS in `assets/css/styles.css` unless a separate animation file becomes clearly cleaner.
- [x] Add minimal JS in `assets/js/site.js` only for scroll-reveal observation and active state orchestration.

Acceptance checks:
- [x] No layout shift when animation starts or finishes.
- [x] No text overlap caused by transforms.
- [x] No horizontal scrollbar on mobile.
- [x] Reduced-motion mode works.

## Phase 2 - Global Interaction Polish

- [x] Add refined hover/press states to primary buttons, secondary buttons, WhatsApp buttons, and quote CTAs.
- [x] Add subtle hover lift to service cards, package cards, portfolio cards, case-study figures, and proof cards.
- [x] Improve theme-toggle and mobile-menu button feedback without using text-heavy or distracting animation.
- [x] Add a smooth active nav indicator where appropriate, while keeping current page indication clear.
- [x] Ensure sticky WhatsApp animation is limited to hover/focus only, not constant motion.

Acceptance checks:
- [x] Buttons feel responsive but not playful.
- [x] Card hover does not crop shadows or resize layout.
- [x] Keyboard focus states remain visible.

## Phase 3 - Page Reveal System

- [x] Add gentle reveal animations for major sections as they enter the viewport.
- [x] Use staggered reveal only for repeated groups such as service grids, package grids, portfolio cards, and outcome grids.
- [x] Apply shorter reveal distances on mobile.
- [x] Ensure hero content appears immediately enough that the page does not feel delayed.

Priority pages:
- [x] `index.html`
- [x] `research.html`
- [x] `business.html`
- [x] `portfolio.html`
- [x] `packages.html`
- [x] `quote.html`
- [x] `contact.html`
- [x] `about.html`

Acceptance checks:
- [x] Page remains readable before JS runs.
- [x] No important CTA waits too long to appear.
- [x] Scrolling feels smoother, not slower.

## Phase 4 - Portfolio Case Study Motion

- [x] Add image/figure reveal for case-study hero visuals.
- [x] Add subtle reveal to story sections, timeline rows, challenge cards, and outcome cards.
- [x] Add hover polish to case-study figures without animating the SVG internals.
- [x] Avoid animating technical diagram arrows or SVG contents unless a specific reason exists.

Pages:
- [x] `portfolio-data-analysis.html`
- [x] `portfolio-technical-diagrams.html`
- [x] `portfolio-research-prototype.html`
- [x] `portfolio-document-formatting.html`
- [x] `portfolio-presentation-slides.html`
- [x] `portfolio-web-interface.html`

Acceptance checks:
- [x] Technical diagrams remain still and easy to inspect.
- [x] Figure hover effects do not reduce image clarity.
- [x] Captions remain stable and readable.

## Phase 5 - Conversion-Focused Details

- [x] Make quote buttons feel clickable through subtle lift and color response.
- [x] Add gentle reveal emphasis around final CTA sections.
- [x] Improve form-field focus transitions on quote/contact forms. Current quote/contact pages use CTA links, not embedded form fields.
- [x] Add small success/error state transitions if forms currently have visible states. Not applicable until visible form states are added.
- [x] Keep WhatsApp and quote actions visually prominent without pulsing loops.

Acceptance checks:
- [x] CTAs are more noticeable without feeling aggressive.
- [x] Forms feel professional and clear. Current pages avoid public file/form collection and route requests through WhatsApp/email.
- [x] No animation distracts from pricing, scope, or trust content.

## Phase 6 - Verification

- [x] Capture desktop screenshots for key pages.
- [x] Capture tablet screenshots for key pages. User reviewed screen sizes and accepted.
- [x] Capture mobile screenshots for key pages. User reviewed screen sizes and accepted.
- [ ] Test light mode and dark mode.
- [x] Test navigation, menu, theme toggle, quote links, and WhatsApp links. Internal href targets verified across 16 HTML pages; controls remain wired in site.js.
- [x] Search CSS/JS for one-off animation values and consolidate if needed.
- [x] Confirm `git status` is clean after commit and push.

Screenshot script:

```powershell
& "C:\Users\SAMPSON\Videos\2025 MSC Project\utility\notebook_screenshots_scripts\capture_local_html_screenshots.ps1" -HtmlFolder "C:\Users\SAMPSON\Pictures\App Hub\mafubam-website" -Pattern "*.html" -Width 1500 -Height 1800
```

## Do Not Do

- [x] Do not add looping motion to every page.
- [x] Do not animate large technical SVGs internally by default.
- [x] Do not make hero text slide in late.
- [x] Do not use animation to hide weak layout or spacing.
- [x] Do not introduce external animation libraries unless there is a strong reason.
- [x] Do not create an AI-looking animated landing page style.

## Implementation Order

1. [x] Build the reusable motion system.
2. [x] Apply global hover/focus polish.
3. [x] Add scroll reveal to the homepage and verify.
4. [x] Extend reveal to service and package pages.
5. [x] Extend reveal to portfolio and case-study pages.
6. [x] Polish quote/contact conversion details.
7. [ ] Run full screenshot and interaction verification.
