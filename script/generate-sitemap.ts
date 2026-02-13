import { readFile, writeFile, mkdir, readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const STATIC_ROUTES = ["/", "/services", "/about", "/areas", "/quote", "/faq"];

interface ServiceMeta {
  id: string;
  title: string;
  shortDesc: string;
}

async function getServicesMeta(): Promise<ServiceMeta[]> {
  const servicesPath = path.resolve(__dirname, "../client/src/data/services.ts");
  const content = await readFile(servicesPath, "utf-8");
  const services: ServiceMeta[] = [];
  const idMatches = [...content.matchAll(/id:\s*"([^"]+)"/g)];
  const titleMatches = [...content.matchAll(/title:\s*"([^"]+)"/g)];
  const shortDescMatches = [...content.matchAll(/shortDesc:\s*"([^"]*)"/g)];
  for (let i = 0; i < idMatches.length; i++) {
    services.push({
      id: idMatches[i][1],
      title: titleMatches[i][1],
      shortDesc: shortDescMatches[i][1],
    });
  }
  return services;
}

async function getServiceIds(): Promise<string[]> {
  const services = await getServicesMeta();
  return services.map((s) => s.id);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemapXml(baseUrl: string, urls: string[]): string {
  const now = new Date().toISOString().slice(0, 10);
  const urlEntries = urls
    .map(
      (loc) =>
        `  <url>\n    <loc>${escapeXml(`${baseUrl}${loc}`)}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${loc === "/" ? "1.0" : "0.8"}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export async function generateSitemap() {
  const baseUrl =
    process.env.SITE_URL?.replace(/\/$/, "") || "https://thoroughlypro.com";
  const outDir = path.resolve(__dirname, "../dist/public");

  const serviceIds = await getServiceIds();
  const serviceRoutes = serviceIds.map((id) => `/services/${id}`);
  const allRoutes = [...STATIC_ROUTES, ...serviceRoutes];

  const xml = buildSitemapXml(baseUrl, allRoutes);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "sitemap.xml"), xml);
  console.log(`sitemap: generated ${allRoutes.length} URLs → dist/public/sitemap.xml`);

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;
  await writeFile(path.join(outDir, "robots.txt"), robotsTxt);
  console.log("robots: updated with sitemap URL → dist/public/robots.txt");

  const servicesMeta = await getServicesMeta();
  const siteName = "Thoroughly Pro";
  const routeMeta: Record<string, { title: string; description: string }> = {
    "/": {
      title: "Thoroughly Pro | Your Trusted Facility Partner Since 1983",
      description:
        "Thoroughly Pro has been a trusted commercial cleaning partner in Southern New Hampshire since 1983. We listen first, then deliver tailored solutions for industrial manufacturing facilities.",
    },
    "/services": {
      title: `Our Services | ${siteName}`,
      description:
        "Tailored cleaning and maintenance solutions for industrial manufacturing facilities across Southern New Hampshire. Commercial cleaning, facility cleanouts, carpet cleaning, and floor care.",
    },
    "/about": {
      title: `About Us | ${siteName}`,
      description:
        "Your trusted facility partner since 1983. We listen first, then deliver tailored cleaning and maintenance solutions for industrial manufacturing facilities in Southern New Hampshire.",
    },
    "/areas": {
      title: `Service Areas | ${siteName}`,
      description:
        "Serving industrial manufacturing facilities across Southern New Hampshire since 1983. We cover Chesterfield, Keene, Swanzey, Concord, Lebanon, Newport, and New London.",
    },
    "/faq": {
      title: `FAQ | ${siteName}`,
      description:
        "Frequently asked questions about Thoroughly Pro's commercial cleaning services, service areas, and how we work with industrial manufacturing facilities in Southern New Hampshire.",
    },
    "/quote": {
      title: `Get a Quote | ${siteName}`,
      description:
        "Request a consultation for commercial cleaning and facility maintenance services. We'll discuss your needs and create a tailored proposal for your Southern New Hampshire facility.",
    },
  };

  for (const service of servicesMeta) {
    routeMeta[`/services/${service.id}`] = {
      title: `${service.title} | ${siteName}`,
      description: service.shortDesc,
    };
  }

  let defaultOgImage = "/assets/og-default.png";
  try {
    const assetsDir = path.join(outDir, "assets");
    const files = await readdir(assetsDir);
    const png =
      files.find((f) => f.includes("clean_industrial") && f.endsWith(".png")) ||
      files.find((f) => f.endsWith(".png"));
    if (png) defaultOgImage = `/assets/${png}`;
  } catch {
    /* no assets yet */
  }

  const metaOutput = {
    routes: routeMeta,
    defaultOgImage,
  };

  await writeFile(
    path.join(outDir, "route-meta.json"),
    JSON.stringify(metaOutput, null, 0)
  );
  console.log(
    `route-meta: generated meta for ${Object.keys(routeMeta).length} routes → dist/public/route-meta.json`
  );
}
