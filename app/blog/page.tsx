import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — Roteiro VIP",
  description: "Destinos, atrações e dicas de viagem pelos Estados Unidos, pela equipe da Roteiro VIP.",
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main>
      <PageHeader
        eyebrow="Conteúdo"
        title="Blog"
        description="Destinos, atrações e dicas para quem viaja pelos Estados Unidos."
      />
      <section className="py-16 lg:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                {post.cover && (
                  <Image src={post.cover} alt={post.title} fill priority={i === 0} className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col border-b-2 border-transparent group-hover:border-[#c9a84c] transition-colors">
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="text-[#c9a84c] font-heading font-bold tracking-wider uppercase">{post.category}</span>
                  <span className="text-gray-300">·</span>
                  <span className="flex items-center gap-1.5 text-gray-400"><Calendar size={12} />{post.dateLabel}</span>
                </div>
                <h2 className="font-heading font-black text-xl text-black leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors">{post.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[#c9a84c] font-heading font-bold text-sm">Ler artigo <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
