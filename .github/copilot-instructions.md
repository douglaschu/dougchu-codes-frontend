# Copilot Instructions

## Project Overview

Personal blog and portfolio site for `dougchu.codes` built with **Astro 5**. Blog posts are sourced from local Markdown files in `src/content/blog/` using Astro's content collections API.

## Architecture

**Content strategy:**

- `/blog` routes use Astro's `getCollection("blog")` to load posts from `src/content/blog/`
- Posts are filtered by `draft: false` and sorted by `pubDate` descending
- Static paths for blog posts are generated via `getStaticPaths()` in `src/pages/blog/[...slug].astro` using `getCollection` and `render()` from `astro:content`
- Post frontmatter fields: `title`, `description`, `pubDate`, `updatedDate` (optional), `heroImage` (optional), `draft`

**`src/lib/payload.ts` — dormant, pending repurpose:**

- Currently unused by any active page after migration to local Markdown for longform blog posts
- Planned for repurposing as the data layer for a microblog/notes feature backed by PayloadCMS
- `convertLexicalToHTML()` will need extending beyond `paragraph` nodes when notes authoring begins
- `getPosts()` fetch pattern and Payload query syntax serve as reference for future collection fetches

**Page layout pattern:**

- Blog post pages use `src/layouts/BlogPost.astro`, which internally composes `<BaseHead>`, `<Header>`, and `<Footer>`
- All other pages (`index.astro`, `about.astro`, `portfolio.astro`, `blog/index.astro`) manually compose `<BaseHead>`, `<Header>`, and `<Footer>` directly

**React integration:**

- `@astrojs/react` is installed and configured in `astro.config.mjs`
- `src/components/HeaderLink.tsx` is a React component; `Header.astro` computes `isActive()` using `Astro.url.pathname` and passes `active` as a prop
- React components are server-rendered by default (no JS shipped); add `client:*` directives only when interactivity is needed

**Planned: unified home feed (`index.astro`):**

- Home page will render a chronologically sorted stream mixing longform blog post previews and shortform notes/microblog posts (Tumblr-style)
- Longform previews sourced from `src/content/blog/` via `getCollection`; excerpt via `description` frontmatter field
- Notes sourced from PayloadCMS via `src/lib/payload.ts`; support 1–4 media items (images/video) per note
- A shared feed card React component will handle both render variants
- `src/lib/payload.ts` is being repurposed as the notes data layer; `convertLexicalToHTML()` will need extending for note content node types

## Key Files

| File                            | Purpose                                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `src/content/blog/`             | Markdown source files for all blog posts                                                                       |
| `src/content.config.ts`         | Defines `blog` collection schema with Zod validation                                                           |
| `src/layouts/BlogPost.astro`    | Shared layout for blog post pages                                                                              |
| `src/components/HeaderLink.tsx` | React nav link component; accepts `active` prop                                                                |
| `src/components/Header.astro`   | Site header; computes active link state, renders `HeaderLink`                                                  |
| `src/consts.ts`                 | `SITE_TITLE`, `SITE_DESCRIPTION` — used in every `<BaseHead>`                                                  |
| `astro.config.mjs`              | Integrations: `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/react`; `site` URL needs updating from placeholder |
| `src/lib/payload.ts`            | Dormant — being repurposed as the notes data layer for the planned microblog feature                           |

                                       |

## Developer Commands

```sh
npm run dev      # dev server at localhost:4321
npm run build    # static build to ./dist/
npm run preview  # preview production build locally
```
