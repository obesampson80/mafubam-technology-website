# Animation Implementation TODO

Purpose: add subtle, professional motion that makes the website feel polished and human-made without reducing trust, readability, speed, or accessibility.

## Animation Principles

- [ ] Keep motion calm, fast, and purposeful.
- [ ] Use animation to clarify interaction, hierarchy, and page flow.
- [ ] Avoid bouncing text, heavy parallax, flashy loops, spinning icons, and decorative motion that feels generic.
- [ ] Respect `prefers-reduced-motion` with a near-static experience.
- [ ] Keep animations consistent across light and dark mode.
- [ ] Verify on mobile, tablet, and desktop screenshots before accepting changes.

## Phase 1 - Motion System Foundation

- [ ] Define reusable CSS variables for durations, easing, distance, and hover lift.
- [ ] Add a reduced-motion block that disables transitions and scroll reveals for users who prefer reduced motion.
- [ ] Create reusable classes for reveal, staggered reveal, hover lift, press feedback, and image reveal.
- [ ] Keep all motion CSS in `assets/css/styles.css` unless a separate animation file becomes clearly cleaner.
- [ ] Add minimal JS in `assets/js/site.js` only for scroll-reveal observation and active state orchestration.

Acceptance checks:
- [ ] No layout shift when animation starts or finishes.
- [ ] No text overlap caused by transforms.
- [ ] No horizontal scrollbar on mobile.
- [ ] Reduced-motion mode works.

## Phase 2 - Global Interaction Polish

- [ ] Add refined hover/press states to primary buttons, secondary buttons, WhatsApp buttons, and quote CTAs.
- [ ] Add subtle hover lift to service cards, package cards, portfolio cards, case-study figures, and proof cards.
- [ ] Improve theme-toggle and mobile-menu button feedback without using text-heavy or distracting animation.
- [ ] Add a smooth active nav indicator where appropriate, while keeping current page indication clear.
- [ ] Ensure sticky WhatsApp animation is limited to hover/focus only, not constant motion.

Acceptance checks:
- [ ] Buttons feel responsive but not playful.
- [ ] Card hover does not crop shadows or resize layout.
- [ ] Keyboard focus states remain visible.

## Phase 3 - Page Reveal System

- [ ] Add gentle reveal animations for major sections as they enter the viewport.
- [ ] Use staggered reveal only for repeated groups such as service grids, package grids, portfolio cards, and outcome grids.
- [ ] Apply shorter reveal distances on mobile.
- [ ] Ensure hero content appears immediately enough that the page does not feel delayed.

Priority pages:
- [ ] `index.html`
- [ ] `research.html`
- [ ] `business.html`
- [ ] `portfolio.html`
- [ ] `packages.html`
- [ ] `quote.html`
- [ ] `contact.html`
- [ ] `about.html`

Acceptance checks:
- [ ] Page remains readable before JS runs.
- [ ] No important CTA waits too long to appear.
- [ ] Scrolling feels smoother, not slower.

## Phase 4 - Portfolio Case Study Motion

- [ ] Add image/figure reveal for case-study hero visuals.
- [ ] Add subtle reveal to story sections, timeline rows, challenge cards, and outcome cards.
- [ ] Add hover polish to case-study figures without animating the SVG internals.
- [ ] Avoid animating technical diagram arrows or SVG contents unless a specific reason exists.

Pages:
- [ ] `portfolio-data-analysis.html`
- [ ] `portfolio-technical-diagrams.html`
- [ ] `portfolio-research-prototype.html`
- [ ] `portfolio-document-formatting.html`
- [ ] `portfolio-presentation-slides.html`
- [ ] `portfolio-web-interface.html`

Acceptance checks:
- [ ] Technical diagrams remain still and easy to inspect.
- [ ] Figure hover effects do not reduce image clarity.
- [ ] Captions remain stable and readable.

## Phase 5 - Conversion-Focused Details

- [ ] Make quote buttons feel clickable through subtle lift and color response.
- [ ] Add gentle reveal emphasis around final CTA sections.
- [ ] Improve form-field focus transitions on quote/contact forms.
- [ ] Add small success/error state transitions if forms currently have visible states.
- [ ] Keep WhatsApp and quote actions visually prominent without pulsing loops.

Acceptance checks:
- [ ] CTAs are more noticeable without feeling aggressive.
- [ ] Forms feel professional and clear.
- [ ] No animation distracts from pricing, scope, or trust content.

## Phase 6 - Verification

- [ ] Capture desktop screenshots for key pages.
- [ ] Capture tablet screenshots for key pages.
- [ ] Capture mobile screenshots for key pages.
- [ ] Test light mode and dark mode.
- [ ] Test navigation, menu, theme toggle, quote links, and WhatsApp links.
- [ ] Search CSS/JS for one-off animation values and consolidate if needed.
- [ ] Confirm `git status` is clean after commit and push.

Screenshot script:

```powershell
& "C:\Users\SAMPSON\Videos\2025 MSC Project\utility\notebook_screenshots_scripts\capture_local_html_screenshots.ps1" -HtmlFolder "C:\Users\SAMPSON\Pictures\App Hub\mafubam-website" -Pattern "*.html" -Width 1500 -Height 1800
```

## Do Not Do

- [ ] Do not add looping motion to every page.
- [ ] Do not animate large technical SVGs internally by default.
- [ ] Do not make hero text slide in late.
- [ ] Do not use animation to hide weak layout or spacing.
- [ ] Do not introduce external animation libraries unless there is a strong reason.
- [ ] Do not create an AI-looking animated landing page style.

## Implementation Order

1. [ ] Build the reusable motion system.
2. [ ] Apply global hover/focus polish.
3. [ ] Add scroll reveal to the homepage and verify.
4. [ ] Extend reveal to service and package pages.
5. [ ] Extend reveal to portfolio and case-study pages.
6. [ ] Polish quote/contact conversion details.
7. [ ] Run full screenshot and interaction verification.
