import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://cune-programming.github.io",
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  integrations: [tailwind(), alpinejs(), sitemap(), robotsTxt()]
});
