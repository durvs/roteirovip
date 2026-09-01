import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Entry = {
  slug: string;
  title: string;
  date: string; // ISO (AAAA-MM-DD)
  dateLabel: string; // "5 de abril de 2024"
  category: string;
  cover: string;
  excerpt: string;
  html: string;
};

const ROOT = path.join(process.cwd(), "content");

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`)
  );
}

function load(dir: string): Entry[] {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, f), "utf8"));
      return {
        slug: String(data.slug ?? f.replace(/\.md$/, "")),
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        dateLabel: formatDate(String(data.date ?? "1970-01-01")),
        category: String(data.category ?? ""),
        cover: String(data.cover ?? ""),
        excerpt: String(data.excerpt ?? ""),
        html: marked.parse(content, { async: false }) as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPosts = () => load("posts");
export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
export const getParks = () => load("parques");
export const getPark = (slug: string) => getParks().find((p) => p.slug === slug);
