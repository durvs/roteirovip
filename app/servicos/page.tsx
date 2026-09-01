import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços — Roteiro VIP",
  description:
    "Roteiro dia a dia, ingressos e fura-fila, guia dentro do parque, casa e carro, concierge, chofer, babysitter e registro fotográfico. Assessoria em Orlando desde 2019.",
};

export default function ServicosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Serviços"
        title="Do orçamento ao voo de volta"
        description="Cada parte da viagem coordenada pela Roteiro VIP junto aos melhores fornecedores de Orlando. Escolha o que faz sentido para a sua família."
      />
      <section className="py-16 lg:py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/servicos/${s.slug}`} className="group bg-white flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={s.image} alt={s.name} fill priority={i < 3} className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 flex-1 flex flex-col border-b-2 border-transparent group-hover:border-[#c9a84c] transition-colors">
                <h2 className="font-heading font-black text-xl text-black leading-snug mb-1 group-hover:text-[#c9a84c] transition-colors">{s.name}</h2>
                <p className="text-[#c9a84c] font-heading font-bold text-sm mb-3">{s.tagline}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{s.short}</p>
                <span className="inline-flex items-center gap-2 text-black font-heading font-bold text-sm">Ver detalhes <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
