import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import type { Entry } from "@/lib/content";

type Props = {
  entry: Entry;
  eyebrow: string;
  cta: { title: string; text: string; label: string };
  backHref?: string;
  backLabel?: string;
};

export default function Article({ entry, eyebrow, cta, backHref, backLabel }: Props) {
  return (
    <main>
      <PageHeader eyebrow={eyebrow} title={entry.title} description={entry.dateLabel} />

      {entry.cover && (
        <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-10 lg:-mt-14 relative">
          <div className="relative aspect-[16/9] overflow-hidden shadow-2xl">
            <Image src={entry.cover} alt={entry.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
          </div>
        </div>
      )}

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <article className="post-prose text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: entry.html }} />

          <div className="mt-16 bg-[#111111] text-white p-8 lg:p-10">
            <p className="text-[#c9a84c] font-heading font-bold text-xs tracking-[0.3em] uppercase mb-3">Roteiro VIP</p>
            <h2 className="font-heading font-black text-2xl lg:text-3xl mb-3">{cta.title}</h2>
            <p className="text-white/70 leading-relaxed mb-6 max-w-xl">{cta.text}</p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 bg-[#c9a84c] text-black font-heading font-bold tracking-wider px-8 py-4 text-sm hover:bg-white transition-colors"
            >
              {cta.label}
              <ArrowRight size={16} />
            </Link>
          </div>

          {backHref && (
            <p className="mt-10">
              <Link href={backHref} className="text-sm font-heading font-bold text-gray-500 hover:text-[#c9a84c] transition-colors">
                ← {backLabel}
              </Link>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
