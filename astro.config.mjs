import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

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
  adapter: vercel({
    functionPerRoute: false,
  }),
  redirects: {
    '/li': {
      status: 307,
      destination: '/?utm_source=profile&utm_medium=sharing&utm_campaign=linkedin'
    },
    '/ig': {
      status: 307,
      destination: '/?utm_source=profile&utm_medium=sharing&utm_campaign=instagram'
    },
    '/x': {
      status: 307,
      destination: '/?utm_source=profile&utm_medium=sharing&utm_campaign=x'
    },
    '/kf': {
      status: 307,
      destination: '/?utm_source=profile&utm_medium=sharing&utm_campaign=ko-fi'
    },
    '/mal': {
      status: 307,
      destination: '/?utm_source=profile&utm_medium=sharing&utm_campaign=myanimelist'
    },
    '/th': {
      status: 307,
      destination: '/?utm_source=profile&utm_medium=sharing&utm_campaign=thread'
    },
  },
  site: "https://links.shikanime.studio",
});
