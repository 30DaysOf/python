# Project Website

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

The website is built with [Astro Starlight](https://starlight.astro.build) and hosted on GitHub Pages. The objective is to document my learning journey and insights in a beginner-friendly and structured way that can help other learners.

## Site Setup 
The site was setup using the following command. This starts a wizard that walks you through the process to scaffold the basic site under the selected folder (in this case `docs/`).

```bash
npm create astro@latest -- --template starlight
```

## Astro Commands

Once setup, you can use the following commands to build or preview the site, or get help with additional options:

Run these from the root of the site, from any terminal.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm install @astrojs/starlight@latest --save` |  Update to latest Astro / Starlight release |
| | |

## Astro Configuration

The default scaffolding looks as follows:

```bash
.
├── public/
├── src/
│   ├── assets/
│   │   ├── houston.webp
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── .gitignore
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Place static assets under `src/assets` to serve them _with Astro optimizations_ - or place them under `public/` to serve them _as is_. The latter will be directly accesible under the `/<imgname>` route while the former will have a custom filename generated.

Astro uses file-based routing so any `.md` or `.mdx` file under `src/content/docs/<X>` gets mapped to `/<X>` by default.

Configure Astro by updating the [`astro.config.mjs`](https://docs.astro.build/en/guides/configuring-astro/#the-astro-config-file) file. Learn about [Startlight customization options](https://starlight.astro.build/guides/customization/) you can make here.


## Astro Content Collections

Astro [Content Collections](https://docs.astro.build/en/guides/content-collections/#defining-collections) can help you "organize your documents, validate your frontmatter, and provide automatic TypeScript type-safety for all of your content". 

A "collection" is formed by any top-level directory within `src/content`.Once you have a collection, you can start querying your content using Astro’s built-in content APIs. Use the `src/content/config.ts` file to [define collections](https://docs.astro.build/en/guides/content-collections/#defining-collections)


## Astro Resources

- Explore the [Starlight docs](https://starlight.astro.build/), 
- Read [the Astro documentation](https://docs.astro.build)
- Join [Astro Discord server](https://astro.build/chat).
