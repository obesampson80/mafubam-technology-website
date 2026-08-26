# Portfolio Case Study TODO

The portfolio is the heart of the MAFUBAM Technology website. It must prove real capability without exposing private academic work, student identities, raw datasets, similarity reports, client documents or confidential project material.

## 1. Portfolio Direction

- [x] Keep the portfolio as a professional, confidentiality-safe showcase.
- [x] Use real project work as source material, but publish only anonymised, cropped, recreated or concept-safe visuals.
- [x] Avoid generic claims. Each case study should show a concrete type of work MAFUBAM can deliver.
- [x] Keep all pages static. No backend, file upload system or database is needed for this phase.
- [x] Make every case study useful to a visitor deciding whether to request similar work.

## 2. Confidentiality Rules

- [x] Do not publish student names, supervisor names, institution details or private identifiers.
- [x] Do not publish raw thesis pages, full chapters, full datasets or similarity reports.
- [x] Do not expose private client files, comments, corrections or WhatsApp screenshots.
- [x] Crop or recreate screenshots where names, file paths, marks, comments or personal data appear.
- [x] Use neutral project labels such as "Research analytics project", "Technical architecture sample" or "Defence slide sample".
- [x] Add a short confidentiality note on portfolio detail pages where needed.

## 3. Case Study Set

- [x] `portfolio-data-analysis.html` - Data Analysis and Result Presentation
- [x] `portfolio-technical-diagrams.html` - Technical Diagrams and Architecture
- [x] `portfolio-research-prototype.html` - Research Implementation Prototype
- [x] `portfolio-document-formatting.html` - Document Formatting and Research Report Support
- [x] `portfolio-presentation-slides.html` - Presentation and Defence Slide Support
- [x] `portfolio-web-interface.html` - Website, Interface and Dashboard Samples

## 4. Source Project Candidates

Use `D:\2025 MSC Project` as the private source folder for review only.

- [x] Data analysis candidates: `Nwadike`, `Lewa`, `Mary`, `Thompson`, `Umar`.
- [x] Technical diagram candidates: `Atedi`, `Chisom`, `Duke`, `Eldad`, `Redeemer`, `Wali`.
- [x] Research prototype candidates: `Atedi`, `Essau_1`, `Chisom`, `Umar`, `Redeemer`.
- [x] Document/report candidates: `Mary`, `Duke`, `Kizito`, `Redeemer`, `Obe_Sampson`.
- [x] Presentation candidates: `Duke`, `Mary`, `Umar`, `Wali`, `Atedi`, `Nunu`.
- [x] Web/interface candidates: `Atedi`, `BlessnBob`, `Essau_1`, `Umar`.

## 5. Case Study Page Structure

Each case study page should include:

- [x] Clear title and category.
- [x] Short summary of the work type.
- [x] "Problem" section explaining the client/research need without private details.
- [x] "What MAFUBAM delivered" section with 4-6 concrete deliverables.
- [x] "Tools and methods" section where relevant.
- [x] "Sample visuals" section using safe thumbnails or recreated visuals.
- [x] "Outcome" section explaining the practical value.
- [x] CTA: "Request similar work" linking to `quote.html`.

## 6. Visual Asset Preparation

- [x] Create one hero/summary thumbnail per case study.
- [ ] Create 2-4 safe supporting visuals per case study where available.
- [x] Prefer SVG or compressed PNG for sharp web display.
- [x] Keep large real-image assets high enough resolution for desktop.
- [x] Store public-safe visuals under `assets/images/portfolio/`.
- [x] Document every created or adapted visual in `docs/generated-asset-log.md`.

## 7. Portfolio Index Updates

- [x] Link each existing portfolio card to the relevant detail page.
- [x] Update card copy so each card introduces the case study, not just a category.
- [x] Add consistent CTA text such as "View sample".
- [x] Keep the confidentiality section at the bottom of `portfolio.html`.
- [x] Confirm dark mode and light mode contrast in CSS tokens.

## 8. Content Quality Checklist

- [x] Copy sounds professional and client-facing, not like internal notes.
- [x] No project folder names or private student names appear publicly.
- [x] No claims imply guaranteed academic outcomes.
- [x] No claims imply MAFUBAM writes exams, fabricates data or impersonates students.
- [x] Each case study clearly shows skill, process and value.
- [x] Each page has a clear next action.

## 9. Responsive QA

- [x] Capture desktop screenshots for the portfolio index and all six case study pages.
- [x] Capture mobile screenshots for the portfolio index and all six case study pages.
- [x] Check iPad/tablet layouts for hero, thumbnails and CTA spacing using screenshot capture.
- [x] Confirm no missing local links or image references.
- [x] Confirm all thumbnails are unique and meaningful.
- [ ] Visual review of captured screenshots inside the browser. Screenshot gallery created at `docs/ui-screenshots/portfolio-case-studies/review-gallery.html`.

## 10. Completion Criteria

- [x] Six portfolio case-study pages created.
- [x] Portfolio index links to all case-study pages.
- [x] All public visuals are confidentiality-safe.
- [ ] Desktop, tablet and mobile screenshots visually reviewed.
- [x] Final copy scan completed for internal-sounding language.

## Current Note

First implementation pass is complete. The remaining work is to open the screenshot review gallery, inspect the captures visually, and make any page-by-page layout refinements found during that review.
