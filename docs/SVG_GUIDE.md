# SVG authoring guide

## File contract

Store each character at public/characters/<id>.svg. Keep SVGs self-contained: no remote images, external stylesheets, fonts, or scripts. Use a square viewBox="0 0 160 160", a descriptive title, and role="img" with aria-labelledby.

## Animation rules

- Prefer declarative animate and animateTransform elements.
- Keep motion gentle and slow enough to avoid distraction.
- Do not use flashing or strobing effects.
- Ensure the static frame is complete and recognizable.
- Test at thumbnail size and in a browser without SMIL support.

## Visual language

Use one primary hue and one light accent. A silhouette, a face, and one small decorative detail are usually enough. Keep the face readable around 100 pixels wide. Personality belongs in the silhouette and details, not only in color.

## Review checklist

- [ ] Unique lowercase ID and matching filename
- [ ] Descriptive title and accessible root label
- [ ] No external URL dependencies
- [ ] No script elements or inline event handlers
- [ ] Gentle looping animation with a readable resting pose
- [ ] Distinctive at 96–140 pixels
- [ ] Catalogue entry and test coverage updated
