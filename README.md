# Orbit Garden — SVG Character Playground

Thirty original animated vector companions. One tiny universe.

Orbit Garden is a responsive, accessible character gallery and motion playground. It includes 30 standalone SVG illustrations, a searchable TypeScript catalogue, mood filters, shuffle controls, and reduced-motion support. It requires no runtime framework and no application API key.

## Features

- Thirty distinct SVG characters, each a standalone image with a palette, silhouette, face, and looping animation.
- Search by character name or personality; combine search with a mood filter.
- Surprise-me selection using Web Crypto when supported.
- Motion pause/resume control and a respectful reduced-motion default.
- Responsive card gallery, semantic links, keyboard shortcuts, visible focus states, and live result announcements.
- Local artwork; no analytics, tracking, or application backend.
- Strict TypeScript, isolated helpers, and unit tests.

## Quick start

Requirements: Node.js 20.19+ or 22.12+, and npm.

    git clone https://github.com/developer04onserver/orbit-garden-svg-lab.git
    cd orbit-garden-svg-lab
    npm install
    npm run dev

Vite prints the local URL, normally http://localhost:5173.

## Scripts

| Command | Description |
| --- | --- |
| npm run dev | Start the development server |
| npm run build | Type-check and create the production bundle |
| npm run preview | Preview the production bundle |
| npm test | Run unit tests once |
| npm run test:watch | Run tests in watch mode |

## Structure

    public/characters/     30 independent animated SVG assets
    src/catalog.ts         Typed character catalogue
    src/lib/filters.ts     Pure search and mood-filter helpers
    src/lib/random.ts      Random-selection helper
    src/main.ts            Accessible gallery and UI interactions
    src/styles.css         Responsive design and motion states
    docs/                  Architecture, accessibility, and SVG guides
    tests/                 Automated unit tests

## Add a character

1. Add a self-contained file at public/characters/your-id.svg.
2. Give it a descriptive title, square viewBox, and accessible root labeling.
3. Prefer gentle declarative SVG animation. Do not include script tags or event attributes.
4. Add one record to src/catalog.ts with a unique lowercase ID and a valid mood.
5. Run npm test and npm run build.

See docs/SVG_GUIDE.md for the authoring checklist.

## Accessibility

The gallery uses native controls and semantic article/link structures. Slash focuses search; Escape clears it. Character illustrations are decorative inside links whose accessible names already include the character's identity. Motion can be paused, and reduced-motion preferences are observed.

## Browser and deployment

The project targets current evergreen browsers with ES modules, CSS Grid, and SVG support. Unsupported SMIL animation degrades to a complete static illustration. Run npm run build and publish the dist directory to any static host.

## License

MIT. See LICENSE.
