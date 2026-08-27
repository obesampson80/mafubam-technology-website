# SVG Diagram Design Standard

This standard applies to public website visuals, especially portfolio proof images.

## Core Principle

A website SVG must be understandable in 3-5 seconds. If a visitor must study the figure like a thesis diagram, it is too dense for the page.

Use SVG as the editable and live web format. Use PNG only to review how the SVG renders.

## Diagram Type Decision

Choose the diagram type before drawing:

- Process/pipeline: use a left-to-right flow with 3-5 major stages.
- Sequence: use actors/lifelines only when order of messages matters.
- Architecture: use grouped layers or modules with clear boundaries.
- Class/UML: use strict boxes and relationships, usually as a secondary proof image, not a main web card.
- Evidence card: use summary blocks and visual hierarchy, not every technical detail.

If one diagram tries to be process, sequence, architecture and class diagram at the same time, split it.

## Web Portfolio Rules

- Limit the main visual to 3-5 major groups.
- Keep labels short: usually 1-3 words for headings and one short supporting line.
- Do not place long explanations inside the SVG. Put them in HTML copy or figcaption.
- Use one primary reading direction.
- Avoid crossed lines and avoid arrows that bend through unrelated content.
- Use arrows only for true direction of flow. Use plain lines for relationships.
- Use medium arrowheads. Arrowheads should be visible but smaller than the text height.
- Keep stroke width consistent, usually 3-5px on a 1200-1600px wide SVG.
- Use enough empty space to show grouping and hierarchy.
- Avoid decorative complexity that does not clarify the system.
- Avoid dense report captions inside the image.

## Technical Accuracy Rules

Before accepting an SVG:

1. Verify the source meaning from the project document or evidence.
2. List the entities and relationships before drawing.
3. Decide what the web visitor needs to understand.
4. Remove details that belong in a report, not a web portfolio card.
5. Check every label for spelling and technical correctness.
6. Ensure arrows match the actual relationship.
7. Render the SVG to PNG for visual inspection.
8. Re-check the live page after inserting the SVG.

## Accessibility Rules

- Use `role="img"` only when the SVG is embedded inline as an image.
- For external SVGs used through `<img>`, provide a useful HTML `alt` attribute.
- Keep visible labels legible at the rendered page size.
- Do not rely on colour alone to explain meaning.
- Keep contrast high in light and dark mode.

## Acceptance Checklist

An SVG is accepted only when all are true:

- It has one clear purpose.
- It is readable at the actual website size.
- No text overlaps or feels cramped.
- Arrowheads are proportional.
- Connectors do not cross unrelated elements.
- The diagram matches the verified source material.
- It contains no private names, local paths or sensitive details.
- It renders correctly to PNG during QA.
- The page screenshot confirms it works in context.

## Current Page Recommendation

For `portfolio-technical-diagrams.html`, the main visual should be a polished web proof graphic, not a full IEEE-style subsystem diagram. The full technical version can be shown later as a secondary evidence image if needed.
