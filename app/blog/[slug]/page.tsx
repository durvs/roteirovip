import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "@/components/Article";
import { getPost, getPosts } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} — Roteiro VIP`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: post.cover ? [post.cover] : [] },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return (
    <Article
      entry={post}
      eyebrow={post.category}
      backHref="/blog"
      backLabel="Voltar ao blog"
      cta={{
        title: "Pensando em viajar para os Estados Unidos?",
        text: "Conte quantas pessoas, as idades e as datas em mente. Retornamos em até um dia útil com os próximos passos.",
        label: "Quero meu roteiro",
      }}
    />
  );
}
