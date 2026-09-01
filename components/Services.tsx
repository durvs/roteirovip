"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const services = [
  {
    name: "Roteiro dia a dia",
    image: "/images/passagem-aerea.webp",
    description:
      "Cada dia da viagem definido: parque, dia livre, compras, chegada e retorno. Revisado quantas vezes for preciso, sem custo adicional.",
  },
  {
    name: "Ingressos e fura-fila",
    image: "/images/universal-studios.webp",
    description:
      "Intermediamos a emissão dos ingressos da Disney e da Universal, acompanhamos a vinculação ao aplicativo e a compra do Express Pass e do Lightning Lane.",
  },
  {
    name: "Guia dentro do parque",
    image: "/images/disney-world.webp",
    description:
      "Um guia parceiro acompanha a família no parque, agendando atrações e restaurantes enquanto vocês aproveitam.",
  },
  {
    name: "Casa e carro",
    image: "/images/assessoria.webp",
    description:
      "Selecionamos e intermediamos a reserva da casa em condomínio, com piscina aquecida, e do carro retirado no aeroporto. Contrato e vouchers em mãos antes do embarque.",
  },
  {
    name: "Concierge",
    image: "/images/epcot.webp",
    description:
      "Mesa com personagens, festas de Halloween, jogo da NBA, oficina de sabre de luz. Se existe em Orlando, intermediamos a reserva.",
  },
  {
    name: "Chofer",
    image: "/images/chofer.webp",
    description: "Motorista particular, por meio de parceiros locais, para quem prefere não dirigir em Orlando.",
  },
  {
    name: "Babysitter",
    image: "/images/babysitter.webp",
    description: "Profissionais parceiras de confiança, para que os pais tenham uma noite livre com tranquilidade.",
  },
  {
    name: "Registro VIP",
    image: "/images/registro-camera.webp",
    description: "Fotógrafo parceiro acompanhando a família nos parques. Vocês voltam com as fotos, não apenas com a lembrança.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -370 : 370,
      behavior: "smooth",
    });
  };

  return (
    <section id="servicos" ref={sectionRef} className="py-24 lg:py-36 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.p
              className="text-[#c9a84c] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Assessoria completa
            </motion.p>
            <motion.h2
              className="font-heading font-black leading-tight text-black"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Do orçamento ao voo de volta
            </motion.h2>
          </div>

          <motion.div
            className="flex gap-2 shrink-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 lg:px-8 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            className="shrink-0 w-80 lg:w-96"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link href="/contato" className="block group">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Number */}
                <div className="absolute top-5 right-5 w-10 h-10 border border-white/30 flex items-center justify-center">
                  <span className="text-white/70 font-heading font-bold text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="bg-[#f8f7f5] p-6 border-b-2 border-transparent group-hover:border-[#c9a84c] transition-colors duration-300">
                <h3 className="text-black font-heading font-black text-xl mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#c9a84c] font-heading font-bold text-sm group-hover:gap-3 transition-all">
                  Pedir orçamento
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
