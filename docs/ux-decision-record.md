# UX Decision Record

Prepared: August 2026

This document turns the research into decisions for the first MAFUBAM website.

## 1. Product Scope

Decision:

- Build a static marketing website.
- Do not build a backend, dashboard, database, login system or web app for version 1.

Reason:

- The blueprint needs credibility, service explanation, portfolio proof and enquiry generation.
- WhatsApp, email and third-party forms can handle early enquiries.
- A backend would add cost and complexity before the sales process is proven.

## 2. Primary Conversion

Decision:

- Make WhatsApp the primary conversion path.
- Support email and quote-request page as secondary paths.

Reason:

- Nigerian customers commonly use WhatsApp for business conversations.
- Research and business enquiries usually need clarification before final pricing.
- A prefilled WhatsApp message can collect enough context without a backend.

## 3. Homepage Structure

Decision:

- The homepage should lead with the service promise and split visitors into two paths:
  - Research Solutions
  - Business Technology Solutions

Reason:

- The two audiences have different needs and trust concerns.
- Mixing them too heavily makes the company look unfocused.
- Clear paths improve scanning and decision-making.

## 4. Writing Style

Decision:

- Use concise, scannable and objective copy.
- Avoid promotional filler and AI-style agency language.

Reason:

- Web users scan instead of reading line by line.
- Nielsen Norman Group guidance supports short, structured, scannable web content.
- MAFUBAM needs to sound credible and practical, not inflated.

## 5. Trust Strategy

Decision:

- Place trust signals close to decision points.

Trust signals:

- CAC registration number
- Port Harcourt location
- Ethical research policy
- Written quotation process
- Deposit and revision rules
- Portfolio evidence
- Confidentiality policy

Reason:

- Visitors need confidence before sending academic, business or technical files.
- Trust content is stronger when placed near services and calls to action, not hidden only in the footer.

## 6. Visual Strategy

Decision:

- Use real proof assets as the main visual system.

Preferred visuals:

- Document previews
- Data charts
- Dashboard snippets
- Technical diagrams
- Website screenshots
- Annotated process visuals

Reason:

- Real deliverables make the site feel human and specific.
- Generic tech imagery weakens credibility.

## 7. Accessibility Standard

Decision:

- Design against WCAG 2.2 AA expectations where practical.

Requirements:

- Visible focus states
- Sufficient contrast
- Large touch targets
- Clear labels
- Consistent navigation
- Consistent help/contact placement
- No color-only meaning

Reason:

- The site must work well on mobile and remain usable for a broad audience.
- Accessibility also improves clarity and professionalism.

## 8. Performance Standard

Decision:

- Keep the first version lightweight.

Rules:

- Avoid heavy animation libraries.
- Avoid video backgrounds.
- Compress all images.
- Use static pages.
- Keep third-party scripts minimal.

Reason:

- Nigeria is a mobile-first market.
- Fast pages improve user trust and conversion.

## 9. Form Strategy

Decision:

- Version 1 can use a quote page with WhatsApp/email handoff.
- A third-party form service can be added later if needed.

Reason:

- A custom backend is unnecessary at launch.
- Form maintenance, spam protection and file security are easier to defer.

## 10. Anti-Generic Standard

Decision:

- Every page section must contain a concrete MAFUBAM-specific detail, proof item, process step or client-facing boundary.

Reason:

- This prevents the site from looking like a generic AI-built agency website.

## 11. User Taste Fit

Decision:

- Design for Nigerian mobile-first behaviour, WhatsApp-led enquiries, research-user confidentiality concerns and business-owner credibility expectations.

Reason:

- The website serves two audiences with different trust triggers.
- Researchers need calm, ethical, confidential proof.
- Business owners need professional, outcome-focused proof.
- Nigerian users expect quick mobile access and WhatsApp contact.

Implementation implication:

- Keep light mode as the safest default for content-heavy pages.
- Support dark sections or dark-mode styling where it improves comfort and modern feel.
- Keep the proof-workbench visual bright and framed in dark mode instead of inverting it.
