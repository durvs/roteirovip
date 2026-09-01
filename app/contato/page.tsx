import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site, fullAddress, mapsEmbedUrl, mapsLinkUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato — Roteiro VIP",
  description: `Fale com a ${site.legalName}. Escritório em ${fullAddress}. Planejamento de viagens para os parques temáticos de Orlando.`,
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Fale conosco"
          title="Contato"
          description="Quantas pessoas, idade das crianças, datas que estão pensando. Com isso a gente volta em até um dia útil com os próximos passos."
        />

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-16">
            {/* Info */}
            <aside className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading font-black text-2xl text-black mb-6">
                  {site.legalName}
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="text-[#c9a84c] shrink-0 mt-1" size={22} />
                    <div>
                      <p className="font-heading font-bold text-xs tracking-widest uppercase text-gray-500 mb-1">
                        Endereço
                      </p>
                      <a
                        href={mapsLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#c9a84c] transition-colors"
                      >
                        {site.address.street}
                        <br />
                        {site.address.city}, {site.address.state} {site.address.zip}, {site.address.country}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="text-[#c9a84c] shrink-0 mt-1" size={22} />
                    <div>
                      <p className="font-heading font-bold text-xs tracking-widest uppercase text-gray-500 mb-1">
                        Telefone / WhatsApp
                      </p>
                      <a href={site.phoneHref} className="text-black hover:text-[#c9a84c] transition-colors">
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="text-[#c9a84c] shrink-0 mt-1" size={22} />
                    <div>
                      <p className="font-heading font-bold text-xs tracking-widest uppercase text-gray-500 mb-1">
                        Atendimento
                      </p>
                      <p className="text-black">
                        Segunda a sexta, 9h às 18h
                        <span className="block text-gray-500 text-sm">Horário de Orlando (ET)</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c9a84c] text-black font-heading font-bold tracking-wider px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f7f5]">
                <iframe
                  title={`Mapa: ${fullAddress}`}
                  src={mapsEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              <p className="text-[#c9a84c] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4">
                Envie uma mensagem
              </p>
              <h2
                className="font-heading font-black leading-tight text-black mb-10"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
              >
                Conte como imaginam a viagem
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
