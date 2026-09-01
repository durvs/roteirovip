import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "@/components/Article";
import { getPark, getParks } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getParks().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const park = getPark((await params).slug);
  if (!park) return {};
  return {
    title: `${park.title} — Roteiro VIP`,
    description: park.excerpt,
    openGraph: { title: park.title, description: park.excerpt, images: park.cover ? [park.cover] : [] },
  };
}

export default async function ParkPage({ params }: { params: Promise<Params> }) {
  const park = getPark((await params).slug);
  if (!park) notFound();
  return (
    <Article
      entry={park}
      eyebrow="Parques de Orlando"
      backHref="/#parques"
      backLabel="Todos os parques"
      cta={{
        title: `${park.title} no seu roteiro.`,
        text: "Ingressos, fura-fila, guia dentro do parque e reserva de restaurantes, tudo intermediado pela Roteiro VIP com quem conhece o parque de perto.",
        label: "Quero este parque no meu roteiro",
      }}
    />
  );
}
