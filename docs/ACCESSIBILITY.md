# Accessibility

Orbit Garden is intended to remain useful without a mouse, animation, or color perception.

## Keyboard

- Tab and Shift+Tab navigate links and controls.
- Slash focuses the search field when focus is not already in an editable control.
- Escape clears and leaves the search field.
- The mood selector and action buttons are native HTML controls.
- Interactive elements have a visible focus ring.

## Semantics

- One primary heading and a named collection section structure the page.
- Each character is an article containing a link with a descriptive accessible name.
- Card artwork is decorative because the link name already includes the character's name and personality.
- Result counts are announced through a polite live region.
- The empty state is hidden until no matches remain.

## Motion

- The motion control reports its state through aria-pressed.
- prefers-reduced-motion: reduce starts the interface in a paused state.
- Character art is embedded as same-origin SVG documents. The controls call pauseAnimations() and unpauseAnimations() on each loaded SVG root, so the embedded SMIL loops can pause and resume in browsers that implement the SVG animation API.
- Motion is decorative; no instruction depends on animation.

## Color and sizing

Text and controls use a dark background with high-contrast foregrounds. Names and moods remain text, never color-only signals. The responsive grid adapts to narrow screens.
