# Technical Diagram Redraw Plan

## Source Project Used

Public case-study visuals are recreated from the context-aware mobile notification management project. Private names, file paths, raw screenshots and exact project-owner details must not be exposed.

## Correct Component Map Meaning

The component map should not show a generic mobile app flow. It should show the experimental prediction workflow:

1. Notification-event records
   - app/source metadata
   - timestamp
   - urgency and developer priority

2. Context and history evidence
   - temporal signals
   - spatial/mobility signals
   - screen/current-app behaviour
   - notification fatigue counts
   - previous click/interaction history

3. Feature engineering and preprocessing
   - leakage-safe feature selection
   - numeric imputation/standardisation
   - categorical encoding
   - population and personalised feature matrices

4. Model layer
   - Random Forest
   - Extra Trees
   - XGBoost
   - LightGBM
   - probability-average ensemble

5. Validation and decision layer
   - random population/personalised validation
   - chronological validation
   - user-holdout validation
   - threshold selection

6. Outputs
   - receptivity probability
   - receptive/not-receptive decision
   - model comparison tables
   - report figures

## Drawing Rules

- Use a clean left-to-right research workflow, not tangled subsystem arrows.
- Keep one direction of travel: source evidence -> feature pipeline -> models -> validation -> outputs.
- Use no overlapping connectors, no decorative arrows and no unexplained loops.
- Feedback/history should be shown as an input evidence group, not as a large decorative return path.
- Render SVGs to PNG only for QA review; the website should display the approved SVGs.
- Keep SVG as editable master only.
