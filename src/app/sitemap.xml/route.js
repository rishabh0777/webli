// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = "https://webli.vercel.app";

  const staticRoutes = ["", "#service", "#about", "#portfolio", "#contact"];

  const urls = staticRoutes
    .map((path) => {
      return `
        <url>
          <loc>${baseUrl}/${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${path === "" ? "1.0" : "0.8"}</priority>
        </url>
      `;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      ${urls}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
