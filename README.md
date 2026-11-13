# Zak’s portfolio

A static Astro portfolio with TypeScript and React interactive demos. No backend or environment variables are required.

## Run locally

Install Node.js 22 LTS, then run:

```sh
git clone https://github.com/zakplum/zak-portfolio.git
cd zak-portfolio
npm ci
npm run dev
```

Open the local address printed by Astro. Stop the server with Ctrl+C.

```sh
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy to Vercel

Import this repository, select Astro as the framework, use `npm run build` as the build command and `dist` as the output directory. No environment variables are needed.

## Edit the portfolio

- Homepage: `src/pages/index.astro`
- Project text, technology stacks and ordering: `src/content/projects/*.json`
- Content schema: `src/content.config.ts`
- Project page layout: `src/pages/projects/[slug].astro`
- Interactive demos and artwork: `src/components/`
- Colours and layout: `src/styles/global.css`
- Navigation and social links: `src/layouts/Base.astro`

To add a project, create a JSON file following the collection schema with a unique slug and order. The homepage, project count, routes and next-project links update from the collection. Custom interactive demos can be connected in the project page template.

## Demo content

Radar and Indy use fictional data and independent interfaces. They contain no employer source code or credentials. Fair Play presents recorded dissertation experiment results. Mapping dark matter uses an original synthetic concept illustration; actual research metrics are explained separately in its case study. No dissertation images are included.
