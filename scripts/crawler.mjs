/**
 * Roteiro VIP — Site Crawler
 *
 * Crawls roteirovip.com and extracts structured content into JSON files
 * ready for CMS migration.
 *
 * Usage:
 *   node scripts/crawler.mjs
 *   node scripts/crawler.mjs --url https://www.roteirovip.com/blog/
 *   node scripts/crawler.mjs --depth 3
 *
 * Output: scripts/output/ directory with JSON files per content type
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "output");

// ── Config ────────────────────────────────────────────────────────────────────
const BASE_URL = "https://www.roteirovip.com";
const MAX_DEPTH = parseInt(process.argv[process.argv.indexOf("--depth") + 1] || "2", 10);
const CRAWL_DELAY_MS = 800; // be polite to the server

const ROUTES = [
  { url: "/", type: "page", label: "home" },
  { url: "/orcamento/", type: "page", label: "orcamento" },
  { url: "/contato", type: "page", label: "contato" },
  { url: "/blog/", type: "archive", label: "blog" },
  // Services
  { url: "/services/roteiro-personalizado/", type: "service", label: "roteiro-personalizado" },
  { url: "/services/guia_vip/", type: "service", label: "guia-vip" },
  { url: "/services/assessoria_vip/", type: "service", label: "assessoria-vip" },
  { url: "/services/registro_vip/", type: "service", label: "registro-vip" },
  { url: "/services/chofer/", type: "service", label: "chofer" },
  { url: "/services/babysitter/", type: "service", label: "babysitter" },
  // Parks
  { url: "/magic-kingdom/", type: "park", label: "magic-kingdom" },
  { url: "/animal-kingdom/", type: "park", label: "animal-kingdom" },
  { url: "/hollywood-studios/", type: "park", label: "hollywood-studios" },
  { url: "/universal-orlando/", type: "park", label: "universal-orlando" },
  { url: "/islands-of-adventure/", type: "park", label: "islands-of-adventure" },
  { url: "/busch-gardens/", type: "park", label: "busch-gardens" },
  { url: "/legoland/", type: "park", label: "legoland" },
  { url: "/seaworld/", type: "park", label: "seaworld" },
  { url: "/epcot/", type: "park", label: "epcot" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function log(msg, type = "info") {
  const prefix = { info: "  →", ok: "  ✓", warn: "  ⚠", error: "  ✗" }[type] ?? "  ·";
  console.log(`${prefix} ${msg}`);
}

async function fetchPage(url) {
  const fullUrl = url.startsWith("http") ? url : BASE_URL + url;
  try {
    const res = await fetch(fullUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; RoteiroVIP-Crawler/1.0; content migration bot)",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      log(`HTTP ${res.status} — ${fullUrl}`, "warn");
      return null;
    }
    return await res.text();
  } catch (err) {
    log(`Fetch failed: ${fullUrl} — ${err.message}`, "error");
    return null;
  }
}

// Minimal HTML parser — no dependencies needed
function extractText(html, selector) {
  // Very simple tag content extraction
  const match = html.match(new RegExp(`<${selector}[^>]*>([\\s\\S]*?)<\\/${selector}>`, "i"));
  return match ? stripTags(match[1]).trim() : "";
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function extractMeta(html, name) {
  const match =
    html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, "i")) ||
    html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`, "i"));
  return match ? match[1].trim() : "";
}

function extractOGMeta(html, property) {
  const match =
    html.match(new RegExp(`<meta[^>]+property=["']og:${property}["'][^>]+content=["']([^"']+)["']`, "i")) ||
    html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:${property}["']`, "i"));
  return match ? match[1].trim() : "";
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? stripTags(match[1]).replace(/\s*[-|]\s*Roteiro VIP.*$/i, "").trim() : "";
}

function extractImages(html, baseUrl) {
  const images = [];
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*(alt=["']([^"']*)["'])?[^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    const alt = match[3] || "";
    // Only include images from the site, skip icons/pixel trackers
    if (
      (src.includes("roteirovip.com") || src.startsWith("/")) &&
      !src.includes("pixel") &&
      !src.includes("icon") &&
      !src.includes("logo") &&
      src.match(/\.(jpg|jpeg|png|webp|gif)/i)
    ) {
      images.push({
        src: src.startsWith("//") ? "https:" + src : src,
        alt,
      });
    }
  }
  return [...new Map(images.map((i) => [i.src, i])).values()]; // dedupe
}

function extractLinks(html, baseUrl) {
  const links = new Set();
  const linkRegex = /<a[^>]+href=["']([^"'#]+)["'][^>]*>/gi;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    if (
      href.startsWith("/") ||
      href.includes("roteirovip.com")
    ) {
      const clean = href
        .replace(/^https?:\/\/www\.roteirovip\.com/, "")
        .replace(/\?.*$/, "")
        .split("#")[0];
      if (clean && clean !== "/" && clean.length > 1) links.add(clean);
    }
  }
  return [...links];
}

function extractHeadings(html) {
  const headings = [];
  for (const tag of ["h1", "h2", "h3"]) {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
    let match;
    while ((match = regex.exec(html)) !== null) {
      const text = stripTags(match[1]).trim();
      if (text) headings.push({ tag, text });
    }
  }
  return headings;
}

function extractParagraphs(html) {
  const paragraphs = [];
  // Focus on content areas, skip nav/header/footer
  const contentMatch =
    html.match(/<(?:main|article|div[^>]*(?:content|entry|post)[^>]*)>([\s\S]*?)(?:<\/main>|<\/article>)/i) ||
    html.match(/<div[^>]*class=["'][^"']*(?:content|entry|post)[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);

  const contentHtml = contentMatch ? contentMatch[1] : html;
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = pRegex.exec(contentHtml)) !== null) {
    const text = stripTags(match[1]).trim();
    if (text.length > 30) paragraphs.push(text); // skip short/empty paragraphs
  }
  return paragraphs;
}

function extractBlogPosts(html) {
  const posts = [];
  // WordPress post list patterns
  const articleRegex = /<article[^>]*>([\s\S]*?)<\/article>/gi;
  let match;
  while ((match = articleRegex.exec(html)) !== null) {
    const articleHtml = match[1];
    const title = extractText(articleHtml, "h2") || extractText(articleHtml, "h3");
    const hrefMatch = articleHtml.match(/href=["']([^"']+)["']/);
    const href = hrefMatch ? hrefMatch[1] : "";
    const dateMatch = articleHtml.match(/<time[^>]*datetime=["']([^"']+)["'][^>]*>([^<]*)<\/time>/i);
    const date = dateMatch ? { iso: dateMatch[1], display: dateMatch[2] } : null;
    const excerpt = extractText(articleHtml, "p") || "";

    if (title) {
      posts.push({ title, href, date, excerpt: excerpt.slice(0, 300) });
    }
  }
  return posts;
}

// ── Parsers per content type ──────────────────────────────────────────────────

function parsePage(html, route) {
  return {
    type: route.type,
    slug: route.label,
    url: BASE_URL + route.url,
    seo: {
      title: extractTitle(html),
      description: extractMeta(html, "description"),
      ogImage: extractOGMeta(html, "image"),
    },
    headings: extractHeadings(html),
    paragraphs: extractParagraphs(html),
    images: extractImages(html, BASE_URL),
    crawledAt: new Date().toISOString(),
  };
}

function parseBlogArchive(html, route) {
  return {
    type: "blog-archive",
    slug: "blog",
    url: BASE_URL + route.url,
    seo: {
      title: extractTitle(html),
      description: extractMeta(html, "description"),
    },
    posts: extractBlogPosts(html),
    crawledAt: new Date().toISOString(),
  };
}

function parsePost(html, url) {
  const slug = url.replace(/\/$/, "").split("/").pop() || "post";
  return {
    type: "blog-post",
    slug,
    url: BASE_URL + url,
    seo: {
      title: extractTitle(html),
      description: extractMeta(html, "description"),
      ogImage: extractOGMeta(html, "image"),
    },
    title: extractTitle(html),
    headings: extractHeadings(html),
    paragraphs: extractParagraphs(html),
    images: extractImages(html, BASE_URL),
    crawledAt: new Date().toISOString(),
  };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n🕷  Roteiro VIP Crawler\n");
  console.log(`Base URL : ${BASE_URL}`);
  console.log(`Max depth: ${MAX_DEPTH}`);
  console.log(`Output   : ${OUTPUT_DIR}\n`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = {
    pages: [],
    services: [],
    parks: [],
    posts: [],
    blogArchive: null,
  };

  const crawled = new Set();
  const blogPostUrls = new Set();

  // ── Phase 1: defined routes ─────────────────────────────────────────────────
  console.log("Phase 1: Crawling defined routes...\n");

  for (const route of ROUTES) {
    if (crawled.has(route.url)) continue;
    crawled.add(route.url);

    log(`Fetching ${route.url}`);
    const html = await fetchPage(route.url);
    await sleep(CRAWL_DELAY_MS);

    if (!html) continue;

    let data;
    if (route.type === "archive") {
      data = parseBlogArchive(html, route);
      results.blogArchive = data;
      // collect blog post URLs for phase 2
      for (const post of data.posts) {
        if (post.href) blogPostUrls.add(post.href.replace(BASE_URL, ""));
      }
    } else {
      data = parsePage(html, route);
      if (route.type === "service") results.services.push(data);
      else if (route.type === "park") results.parks.push(data);
      else results.pages.push(data);
    }

    // Save individual file
    const filePath = path.join(OUTPUT_DIR, `${route.type}-${route.label}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    log(`Saved → ${path.relative(process.cwd(), filePath)}`, "ok");
  }

  // ── Phase 2: blog posts discovered in archive ───────────────────────────────
  if (blogPostUrls.size > 0) {
    console.log(`\nPhase 2: Crawling ${blogPostUrls.size} blog posts...\n`);

    for (const postUrl of blogPostUrls) {
      if (crawled.has(postUrl)) continue;
      crawled.add(postUrl);

      log(`Fetching blog post ${postUrl}`);
      const html = await fetchPage(postUrl);
      await sleep(CRAWL_DELAY_MS);

      if (!html) continue;

      const data = parsePost(html, postUrl);
      results.posts.push(data);

      const slug = data.slug;
      const filePath = path.join(OUTPUT_DIR, `post-${slug}.json`);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      log(`Saved → ${path.relative(process.cwd(), filePath)}`, "ok");
    }
  }

  // ── Phase 3: write combined manifest ────────────────────────────────────────
  console.log("\nPhase 3: Writing manifest...\n");

  const manifest = {
    crawledAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    counts: {
      pages: results.pages.length,
      services: results.services.length,
      parks: results.parks.length,
      posts: results.posts.length,
    },
    pages: results.pages,
    services: results.services,
    parks: results.parks,
    blogArchive: results.blogArchive,
    posts: results.posts,
  };

  const manifestPath = path.join(OUTPUT_DIR, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  log(`Manifest → ${path.relative(process.cwd(), manifestPath)}`, "ok");

  // ── CMS-ready format (flat content list) ────────────────────────────────────
  const cmsContent = [
    ...results.pages.map((p) => ({ contentType: "page", ...p })),
    ...results.services.map((s) => ({ contentType: "service", ...s })),
    ...results.parks.map((p) => ({ contentType: "park", ...p })),
    ...results.posts.map((p) => ({ contentType: "post", ...p })),
  ];

  const cmsPath = path.join(OUTPUT_DIR, "cms-content.json");
  fs.writeFileSync(cmsPath, JSON.stringify(cmsContent, null, 2));
  log(`CMS export → ${path.relative(process.cwd(), cmsPath)}`, "ok");

  console.log("\n✅ Done!\n");
  console.log(`  Pages    : ${results.pages.length}`);
  console.log(`  Services : ${results.services.length}`);
  console.log(`  Parks    : ${results.parks.length}`);
  console.log(`  Posts    : ${results.posts.length}`);
  console.log(`  Output   : ${OUTPUT_DIR}\n`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
