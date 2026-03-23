import Link from "next/link";
import Image from "next/image";

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

const services = [
  { label: "Roteiro Personalizado", href: "/services/roteiro-personalizado" },
  { label: "Guia VIP", href: "/services/guia_vip" },
  { label: "Assessoria VIP", href: "/services/assessoria_vip" },
  { label: "Registro VIP", href: "/services/registro_vip" },
  { label: "Chofer", href: "/services/chofer" },
  { label: "Babysitter", href: "/services/babysitter" },
];

const parks = [
  { label: "Magic Kingdom", href: "/magic-kingdom" },
  { label: "Animal Kingdom", href: "/animal-kingdom" },
  { label: "Hollywood Studios", href: "/hollywood-studios" },
  { label: "Universal Orlando", href: "/universal-orlando" },
  { label: "Islands of Adventure", href: "/islands-of-adventure" },
  { label: "Epcot", href: "/epcot" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Map/decorative top area */}
      <div className="relative h-2 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-6">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.webp"
                  alt="Roteiro VIP"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-8 font-light">
              Sua Viagem ao Estilo VIP
            </p>

            <p className="text-white/40 text-sm leading-relaxed mb-8">
              A melhor experiência em planejamento de viagens para os parques
              temáticos de Orlando.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#c9a84c] hover:text-black hover:border-[#c9a84c] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
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
                <li key={s.href}>
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
                <li key={p.href}>
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
            <ul className="space-y-3 mb-8">
              <li>
                <Link
                  href="/contato"
                  className="text-white/50 text-sm hover:text-[#c9a84c] transition-colors font-light"
                >
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/50 text-sm hover:text-[#c9a84c] transition-colors font-light"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <Link
              href="/orcamento"
              className="inline-block bg-[#c9a84c] text-black font-heading font-bold text-xs tracking-widest px-6 py-3 hover:bg-white transition-colors"
            >
              Faça seu Orçamento
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-light">
            Copyright © 2024 Roteiro VIP. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-white/20 text-xs">Desenvolvido com</span>
            <span className="text-[#c9a84c] text-xs mx-1">♥</span>
            <span className="text-white/20 text-xs">para viajantes VIP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
