import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: cloudflare(),
  redirects: {
    "/li": {
      status: 307,
      destination:
        "/?utm_source=profile&utm_medium=sharing&utm_campaign=linkedin",
    },
    "/ig": {
      status: 307,
      destination:
        "/?utm_source=profile&utm_medium=sharing&utm_campaign=instagram",
    },
    "/x": {
      status: 307,
      destination: "/?utm_source=profile&utm_medium=sharing&utm_campaign=x",
    },
    "/kf": {
      status: 307,
      destination: "/?utm_source=profile&utm_medium=sharing&utm_campaign=ko-fi",
    },
    "/mal": {
      status: 307,
      destination:
        "/?utm_source=profile&utm_medium=sharing&utm_campaign=myanimelist",
    },
  },
  site: "https://links.shikanime.studio",
});
