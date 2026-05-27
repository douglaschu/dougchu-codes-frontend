// @ts-check

import mdx from "@astrojs/mdx";
import svgr from "vite-plugin-svgr";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
     site: "https://example.com",
     integrations: [mdx(), sitemap(), react()],
     vite: {
          plugins: [svgr()],
     },
});
