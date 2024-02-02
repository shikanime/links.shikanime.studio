import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
    const sitemapUrl = new URL("sitemap-index.xml", import.meta.env.SITE);
    return new Response(
    [
      "User-agent: *",
      "Allow: /",
      `Sitemap: ${sitemapUrl.href}`,
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
};
