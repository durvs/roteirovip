import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { site, fullAddress, services, legalLinks, mapsLinkUrl } from "@/lib/site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const parks = [
  { label: "Magic Kingdom", href: "/parques/magic-kingdom" },
  { label: "Animal Kingdom", href: "/parques/animal-kingdom" },
  { label: "Hollywood Studios", href: "/parques/hollywood-studios" },
  { label: "Universal Orlando", href: "/parques/universal-orlando" },
  { label: "Islands of Adventure", href: "/parques/islands-of-adventure" },
  { label: "Epcot", href: "/parques/epcot" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden">
      {/* Linha dourada no topo */}
      <div className="relative h-2 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-40" />

      {/* Rota do avião (arte do site antigo): branco sobre preto, atrás das colunas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-8 h-[420px] bg-[url('/images/footer-rota.webp')] bg-contain bg-top bg-no-repeat opacity-[0.12]"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-6">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.webp"
                  alt="Roteiro VIP"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
              {site.tagline}
            </p>

            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Assessoria com escritório em Orlando desde 2019. Intermediamos roteiro,
              ingressos, casa, carro e guia nos parques, com atendimento em
              português e pagamento em reais.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#c9a84c] hover:text-black hover:border-[#c9a84c] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#c9a84c] hover:text-black hover:border-[#c9a84c] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-black text-sm tracking-widest uppercase text-white mb-6">
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/50 text-sm hover:text-[#c9a84c] transition-colors font-light"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Parks */}
          <div>
            <h3 className="font-heading font-black text-sm tracking-widest uppercase text-white mb-6">
              Parques
            </h3>
            <ul className="space-y-3">
              {parks.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-white/50 text-sm hover:text-[#c9a84c] transition-colors font-light"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="font-heading font-black text-sm tracking-widest uppercase text-white mb-6">
              Contato
            </h3>
            <ul className="space-y-4 mb-8">
              <li>
                <p className="text-white font-heading font-bold text-sm mb-1">
                  {site.legalName}
                </p>
                <a
                  href={mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/50 text-sm hover:text-[#c9a84c] transition-colors font-light"
                >
                  <MapPin size={16} className="shrink-0 mt-0.5 text-[#c9a84c]" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </a>
              </li>
              <li>
                <TrackedLink
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  event="contact"
                  params={{ method: "whatsapp", location: "footer" }}
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-[#c9a84c] transition-colors font-light"
                >
                  <Phone size={16} className="shrink-0 text-[#c9a84c]" />
                  WhatsApp {site.whatsapp}
                </TrackedLink>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-white/50 text-sm hover:text-[#c9a84c] transition-colors font-light"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>

            <Link
              href="/contato"
              className="inline-block bg-[#c9a84c] text-black font-heading font-bold text-xs tracking-widest px-6 py-3 hover:bg-white transition-colors"
            >
              Quero meu roteiro
            </Link>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-white/30 text-xs leading-relaxed max-w-4xl">
            A {site.legalName} é uma empresa registrada no Estado da Flórida, EUA,
            que atua na assessoria, planejamento e intermediação de serviços de
            viagem. Não somos afiliados, patrocinados ou endossados por The Walt
            Disney Company, Universal Destinations &amp; Experiences, SeaWorld
            Parks &amp; Entertainment, LEGOLAND ou qualquer outro parque, hotel ou
            fornecedor mencionado neste site. Todas as marcas citadas pertencem
            aos seus respectivos proprietários. Os serviços prestados por
            terceiros estão sujeitos aos termos e condições de cada fornecedor.
            Consulte nossos{" "}
            <Link href="/termos-de-uso" className="underline hover:text-[#c9a84c]">
              Termos de Uso
            </Link>
            .
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-light">
            © {new Date().getFullYear()} {site.legalName}. {fullAddress}. Todos
            os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/30 text-xs hover:text-[#c9a84c] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
