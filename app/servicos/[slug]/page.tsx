import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { getService, services } from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.name} — Roteiro VIP`,
    description: service.short,
    openGraph: { title: `${service.name} — Roteiro VIP`, description: service.short, images: [service.image] },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main>
      <PageHeader eyebrow="Serviços" title={service.name} description={service.tagline} />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Texto */}
          <div className="lg:col-span-3">
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="font-heading font-black text-2xl text-black mt-14 mb-6">O que está incluído</h2>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700 leading-relaxed">
                  <Check size={18} className="text-[#c9a84c] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading font-black text-2xl text-black mt-14 mb-6">Como funciona</h2>
            <ol className="space-y-6">
              {service.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-heading font-black text-[#c9a84c] text-lg leading-none mt-1 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-heading font-bold text-black mb-1">{step.title}</p>
                    <p className="text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {service.note && (
              <p className="mt-12 text-sm text-gray-500 leading-relaxed border-l-2 border-[#c9a84c] pl-4">{service.note}</p>
            )}
          </div>

          {/* Coluna lateral */}
          <aside className="lg:col-span-2 space-y-8 lg:sticky lg:top-28 self-start">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={service.image} alt={service.name} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            <div className="bg-[#111111] text-white p-8">
              <p className="text-[#c9a84c] font-heading font-bold text-xs tracking-[0.3em] uppercase mb-3">Próximo passo</p>
              <p className="text-white/80 leading-relaxed mb-6">
                Conte quantas pessoas, as idades e as datas em mente. Retornamos em até um dia útil.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 bg-[#c9a84c] text-black font-heading font-bold tracking-wider px-7 py-4 text-sm hover:bg-white transition-colors"
              >
                {service.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Outros serviços */}
      <section className="py-16 lg:py-20 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#c9a84c] font-heading font-bold text-xs tracking-[0.3em] uppercase mb-6">Outros serviços</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            {others.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}`} className="group py-3 border-b border-gray-200 hover:border-[#c9a84c] transition-colors">
                <p className="font-heading font-bold text-black group-hover:text-[#c9a84c] transition-colors">{s.name}</p>
                <p className="text-gray-500 text-sm">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
