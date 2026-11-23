# Architecture

## System overview

Orbit Garden is a static, client-side application. Vite provides the development server and production bundling; TypeScript validates the data model and interaction logic. The browser loads the character illustrations as local image documents.

## Runtime sequence

1. src/catalog.ts exports the immutable catalogue of thirty characters.
2. src/main.ts resolves required interface controls and fails early if the HTML contract is incomplete.
3. Search and mood selection call filterCharacters, a pure function in src/lib/filters.ts.
4. The renderer creates semantic article and anchor elements using DOM APIs. Character metadata is assigned through textContent rather than interpolated HTML.
5. Surprise-me delegates to randomItem, preferring Web Crypto and falling back to Math.random.
6. Motion state is reflected on the root element as a class and an aria-pressed state.

## Why separate SVG documents?

Each illustration has its own path and can be reused outside the gallery. Loading SVG as an image keeps its markup isolated from the host document. SMIL animation runs without an extra runtime or JavaScript timer. A complete static state remains visible if the browser does not animate the file.

## Extension points

- Add a resident by creating a standalone asset and a catalogue record.
- Add a mood by extending the option list and covering the filter behavior with tests.
- Add a new interaction by keeping state changes explicit and using native controls.
- Add a deployment target by publishing dist after a successful build.

## Deliberate non-goals

There is no login, remote API, personal-data collection, analytics, persistence, or editing interface. Search state is ephemeral by design.
