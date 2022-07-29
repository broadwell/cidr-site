import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  site: "https://sul-cidr.github.io/",
  base: "/cidr-site/",
  trailingSlash: "always",
  vite: {
    plugins: [yaml()],
  },
  integrations: [mdx()],
});
