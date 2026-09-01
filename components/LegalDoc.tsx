import type { ReactNode } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export type LegalSection = { id: string; title: string; body: ReactNode };

type Props = {
  eyebrow: string;
  title: string;
  updatedAt?: string;
  intro?: ReactNode;
  sections: LegalSection[];
  /** Idioma do documento (define rótulos e o atributo lang do texto) */
  lang?: "pt" | "en";
  /** Versão do mesmo documento no outro idioma */
  alternate?: { lang: "pt" | "en"; href: string };
};

const LABELS = {
  pt: { toc: "Sumário", updated: "Última atualização", langNav: "Idioma", pt: "Português", en: "English" },
  en: { toc: "Contents", updated: "Last updated", langNav: "Language", pt: "Português", en: "English" },
};

export default function LegalDoc({ eyebrow, title, updatedAt, intro, sections, lang = "pt", alternate }: Props) {
  const t = LABELS[lang];
  return (
    <>
      <main lang={lang === "en" ? "en" : undefined}>
        <PageHeader eyebrow={eyebrow} title={title} description={updatedAt ? `${t.updated}: ${updatedAt}` : undefined} />
        {alternate && (
          <div className="bg-[#f8f7f5] border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-4 text-xs font-heading font-bold tracking-widest uppercase" aria-label={t.langNav}>
              <span className="text-gray-400">{t.langNav}</span>
              <span className="text-black" aria-current="page">{t[lang]}</span>
              <span className="text-gray-300">/</span>
              <Link href={alternate.href} hrefLang={alternate.lang === "en" ? "en" : "pt-BR"} className="text-gray-500 hover:text-[#c9a84c] transition-colors">
                {t[alternate.lang]}
              </Link>
            </nav>
          </div>
        )}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-4 gap-16">
            <nav className="hidden lg:block lg:col-span-1" aria-label={t.toc}>
              <div className="sticky top-28">
                <p className="font-heading font-bold text-xs tracking-widest uppercase text-gray-500 mb-4">
                  {t.toc}
                </p>
                <ol className="space-y-2.5">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-sm text-gray-600 hover:text-[#c9a84c] transition-colors leading-snug block">
                        <span className="text-[#c9a84c] font-heading font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <article className="lg:col-span-3 max-w-3xl legal-prose">
              {intro && <div className="mb-12 text-gray-700 leading-relaxed space-y-4">{intro}</div>}
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="mb-12 scroll-mt-28">
                  <h2 className="font-heading font-black text-2xl text-black mb-5 flex items-baseline gap-3">
                    <span className="text-[#c9a84c] text-base">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">{s.body}</div>
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
