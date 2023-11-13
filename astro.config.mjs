import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://kjellhanken.de",
  integrations: [tailwind(), sitemap(), compress(), react()]
});