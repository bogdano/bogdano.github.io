import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  // integrations: [react()],
  site: 'https://bogz.dev',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark'
      },
      langs: ["py"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
    }
  }
});