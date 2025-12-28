// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://mariajose-serrano.github.io",
  base: "/my-portfolio-maria-jose-serrano-higueras/",
  build: { assets: "assets" },
});
