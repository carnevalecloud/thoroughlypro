import express, { type Express } from "express";
import fs from "fs";
import path from "path";

interface RouteMetaData {
  routes: Record<string, { title: string; description: string }>;
  defaultOgImage: string;
}

function loadRouteMeta(distPath: string): RouteMetaData | null {
  try {
    const metaPath = path.join(distPath, "route-meta.json");
    const raw = fs.readFileSync(metaPath, "utf-8");
    return JSON.parse(raw) as RouteMetaData;
  } catch {
    return null;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function injectMetaIntoHtml(
  html: string,
  meta: { title: string; description: string },
  baseUrl: string,
  path: string,
  defaultOgImage: string
): string {
  const canonical = `${baseUrl}${path}`;
  const ogImage = defaultOgImage.startsWith("http") ? defaultOgImage : `${baseUrl}${defaultOgImage}`;

  const metaBlock = `
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}">
    <link rel="canonical" href="${escapeHtml(canonical)}">
    <meta property="og:title" content="${escapeHtml(meta.title)}">
    <meta property="og:description" content="${escapeHtml(meta.description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${escapeHtml(canonical)}">
    <meta property="og:image" content="${escapeHtml(ogImage)}">
    <meta property="og:site_name" content="Thoroughly Pro">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(meta.title)}">
    <meta name="twitter:description" content="${escapeHtml(meta.description)}">`;

  return html.replace(
    /<title>.*?<\/title>/s,
    metaBlock.trim()
  );
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const metaData = loadRouteMeta(distPath);

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");

    if (metaData) {
      const pathName = req.path || "/";
      const meta = metaData.routes[pathName];

      if (meta) {
        const baseUrl = `${req.protocol}://${req.get("host") || "thoroughlypro.com"}`;
        let html = fs.readFileSync(indexPath, "utf-8");
        html = injectMetaIntoHtml(
          html,
          meta,
          baseUrl,
          pathName,
          metaData.defaultOgImage
        );
        res.setHeader("Content-Type", "text/html");
        return res.send(html);
      }
    }

    res.sendFile(indexPath);
  });
}
