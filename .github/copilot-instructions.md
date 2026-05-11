# Copilot Instructions

## Project Overview

Personal blog and portfolio site for `dougchu.codes` built with **Astro 5**. Blog posts are fetched at build time from a **PayloadCMS backend** (not sourced from local Markdown files for the live blog). The local `src/content/blog/` Markdown files are starter templates and are not used by the blog pages.

## Architecture

**Dual content strategy:**
- `/blog` routes use `src/lib/payload.ts` to fetch posts from a remote PayloadCMS instance at `http://134.209.36.188:3000`
- The `src/content/blog/` collection (defined in `src/content.config.ts`) and its Markdown/MDX files are **not wired to any active page** — they are leftover scaffolding
- Static paths for blog posts are generated via `getStaticPaths()` in `src/pages/blog/[...slug].astro` using `getPosts()` from the Payload API

**PayloadCMS integration (`src/lib/payload.ts`):**
- `getPosts()` — fetches all posts, returns `data.docs[]`
- `getPost(slug)` — fetches a single post by slug using Payload's query syntax (`where[slug][equals]=`)
- `convertLexicalToHTML()` — minimal converter for Payload's Lexical rich-text format; only handles `paragraph` nodes; extend this when adding support for headings, lists, links, etc.
- Post fields used in templates: `post.title`, `post.slug`, `post.publishedAt`, `post.contentHTML` (derived)

**Page layout pattern:** Pages do NOT use a shared layout component. Each `.astro` page manually composes `<BaseHead>`, `<Header>`, and `<Footer>` directly in its template.

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/payload.ts` | All CMS data fetching + Lexical-to-HTML conversion |
| `src/consts.ts` | `SITE_TITLE`, `SITE_DESCRIPTION` — used in every `<BaseHead>` |
| `src/content.config.ts` | Defines `blog` collection schema (unused by live pages) |
| `astro.config.mjs` | Integrations: `@astrojs/mdx`, `@astrojs/sitemap`; `site` URL needs updating from placeholder |

## Developer Commands

```sh
npm run dev      # dev server at localhost:4321
npm run build    # static build to ./dist/
npm run preview  # preview production build locally
```

The PayloadCMS backend must be reachable at `http://134.209.36.188:3000` for `build` and `dev` to populate blog pages.

## Conventions

- Global styles live in `src/styles/global.css`; scoped `<style>` blocks are used in individual pages for layout-specific styles
- Inline `toLocaleDateString("en-US", { year, month, day })` is the date formatting pattern used consistently across blog pages
- `SITE_TITLE` and `SITE_DESCRIPTION` from `src/consts.ts` are passed to every `<BaseHead>` — per-page overrides are not yet implemented
- TypeScript is used; `any` types are currently used for Payload response shapes — add proper types in `src/lib/payload.ts` when the schema stabilizes
