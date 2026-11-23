# Deployment

Orbit Garden is a static site. The production build is written to dist/.

## Cloudflare Pages

1. Create a Pages project and connect this repository.
2. Set the framework preset to Vite.
3. Set the build command to npm run build.
4. Set the build output directory to dist.
5. Deploy from the main branch.

No environment variables are required.

## GitHub Pages

The project uses relative asset paths and Vite's relative base setting. Build it with npm run build and publish the complete dist directory using GitHub Pages. A repository Pages workflow can be added if you want deployments managed entirely by Actions.

## Any static host

Install dependencies, run npm run build, and upload the contents of dist. The host must serve index.html for the root route and preserve the public/characters directory in the output.
