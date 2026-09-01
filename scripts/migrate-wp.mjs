// Migra posts do WordPress antigo (via REST API em www.roteirovip.com) para content/*.md
// Uso: node scripts/migrate-wp.mjs
import fs from "node:fs";
import path from "node:path";

const API = "https://www.roteirovip.com/wp-json/wp/v2";
const OUT = { 1: "content/parques", 69: "content/posts" }; // categoria WP -> pasta
const IMG_DIR = "public/images/blog";

const decode = (s) =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
   .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#8217;/g, "’")
   .replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

async function download(url, slug) {
  const name = path.basename(new URL(url).pathname).toLowerCase().replace(/[^a-z0-9.\-]/g, "-");
  const dir = path.join(IMG_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, name);
  if (!fs.existsSync(dest)) {
    for (let attempt = 1; ; attempt++) {
      try {
        const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        if (!res.ok) throw new Error(`${res.status} ${url}`);
        fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
        break;
      } catch (e) {
        if (attempt >= 5) throw e;
        console.log(`  retry ${attempt} ${name}: ${e.cause?.code ?? e.message}`);
        await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
    }
  }
  return "/" + dest.replace(/^public\//, "");
}

function htmlToMarkdown(html, imgMap) {
  let s = html;
  s = s.replace(/<figure[^>]*>\s*<img[^>]*src="([^"]+)"[^>]*?(?:alt="([^"]*)")?[^>]*>\s*(?:<figcaption>(.*?)<\/figcaption>)?\s*<\/figure>/gs,
    (_, src, alt = "", cap = "") => imgMap[src] === null ? "\n\n" : `\n\n![${decode(alt || cap)}](${imgMap[src] ?? src})\n\n`);
  s = s.replace(/<img[^>]*src="([^"]+)"[^>]*?(?:alt="([^"]*)")?[^>]*>/g, (_, src, alt = "") => imgMap[src] === null ? "\n\n" : `\n\n![${decode(alt)}](${imgMap[src] ?? src})\n\n`);
  s = s.replace(/<strong>\s*<\/strong>/g, "");
  // (?:(?!<\/?strong>).)*? impede o lazy match de "pular" para o </strong> seguinte
  const bold = (t) =>
    t.split(/<br\s*\/?>/).map((x) => x.trim()).filter(Boolean).map((x) => `**${x}**`).join("  \n");
  s = s.replace(/<strong>((?:(?!<\/?strong>).)*?)<\/strong>(?=[A-Za-zÀ-ú0-9])/gs, (_, t) => `${bold(t)} `);
  s = s.replace(/<strong>((?:(?!<\/?strong>).)*?)<\/strong>/gs, (_, t) => bold(t));
  s = s.replace(/<em>(.*?)<\/em>/gs, (_, t) => `*${t.trim()}*`);
  s = s.replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gs, (_, h, t) => `[${t}](${h})`);
  s = s.replace(/<br\s*\/?>/g, "  \n");
  s = s.replace(/<\/p>/g, "\n\n").replace(/<p[^>]*>/g, "");
  s = s.replace(/<[^>]+>/g, "");
  s = decode(s).split("\n").map((l) => l.replace(/[ \t]+$/g, (m) => (m.length >= 2 ? "  " : ""))).join("\n");
  return s.replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

const res = await fetch(`${API}/posts?per_page=100&_embed=wp:featuredmedia`);
const posts = await res.json();
let n = 0;
for (const p of posts) {
  const cat = p.categories[0];
  const dir = OUT[cat];
  if (!dir) continue;
  const slug = p.slug.replace(/-+$/, "");
  const title = decode(p.title.rendered).trim();
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const cover = media?.source_url ? await download(media.source_url, slug) : "";
  const imgMap = {};
  for (const src of p.content.rendered.matchAll(/<img[^>]*src="([^"]+)"/g)) {
    // blob:/data: = imagem que nunca foi enviada ao WP (já quebrada no site antigo): descarta
    if (!/^https?:/.test(src[1])) { imgMap[src[1]] = null; continue; }
    imgMap[src[1]] = await download(src[1], slug);
  }
  const body = htmlToMarkdown(p.content.rendered, imgMap);
  // Primeira linha em negrito costuma ser o título interno do post: vira excerpt se não houver
  const raw = decode(p.excerpt.rendered).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  const excerpt = raw.length > 180 ? raw.slice(0, 180).replace(/\s+\S*$/, "") + "…" : raw;
  const fm = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `date: "${p.date.slice(0, 10)}"`,
    `slug: "${slug}"`,
    `category: ${JSON.stringify(cat === 1 ? "Parques Temáticos" : "Notícias")}`,
    `cover: "${cover}"`,
    `excerpt: ${JSON.stringify(excerpt)}`,
    `source: "${p.link}"`,
    "---",
    "",
  ].join("\n");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${slug}.md`), fm + body);
  n++;
  console.log(`ok  ${dir}/${slug}.md  (${body.length} chars, capa ${cover ? "sim" : "não"}, ${Object.keys(imgMap).length} imgs)`);
}
console.log(`\n${n} arquivos gerados`);
