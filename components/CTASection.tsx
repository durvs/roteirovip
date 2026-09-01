"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/epcot.webp"
          alt="Epcot background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-orange-900/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[600px] items-center">
          {/* Image side */}
          <motion.div
            className="relative hidden lg:flex items-end justify-center pt-0 pb-0"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-[600px]">
              <Image
                src="/images/casal-feliz-disney.webp"
                alt="Casal feliz na Disney"
                fill
                className="object-cover object-top"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="py-20 lg:pl-16 xl:pl-24"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.p
              className="text-[#c9a84c] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Próximo passo
            </motion.p>

            <motion.h2
              className="text-white font-heading font-black leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Conte como vocês
              <span className="text-[#c9a84c]"> imaginam a viagem.</span>
            </motion.h2>

            <motion.div
              className="w-12 h-1 bg-[#c9a84c] mb-8"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            />

            <motion.p
              className="text-white/80 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Quantas pessoas, idade das crianças, datas. Com isso a gente marca
              uma reunião por vídeo e volta com sugestões de casa, roteiro e
              valores. Sem compromisso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 bg-[#c9a84c] text-black font-heading font-bold tracking-wider px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 text-sm group"
              >
                Quero meu roteiro
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {[
                { value: "Orlando", label: "Escritório local" },
                { value: "Pix", label: "Pague em reais" },
                { value: "1 dia útil", label: "Para responder" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-white font-heading font-black text-2xl">{stat.value}</p>
                  <p className="text-white/60 font-heading text-xs tracking-wider mt-1 uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
