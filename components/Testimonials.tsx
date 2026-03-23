"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Monica Azevedo",
    text: "Não sei dirigir e preferi contratar o serviço, adorei!",
    service: "Chofer",
    stars: 5,
  },
  {
    name: "Victória Abelardo",
    text: "AMEI o serviço e vou indicar sempre para todos que me perguntarem. Todas as fotos ficaram incríveis.",
    service: "Registro VIP",
    stars: 5,
  },
  {
    name: "Jonathan André",
    text: "Viagem inteira sem me preocupar em dirigir, ficar procurando vaga… melhor serviço de chofer, são nota 10.",
    service: "Chofer",
    stars: 5,
  },
  {
    name: "Priscila Fernandes",
    text: "Adorei o serviço de babá, são super atenciosos, cuidadosos. Saímos sem preocupação. Indico!",
    service: "Babysitter",
    stars: 5,
  },
];

function SkylineSVG() {
  return (
    <svg
      viewBox="0 0 1440 120"
      className="absolute bottom-0 left-0 right-0 w-full"
      preserveAspectRatio="none"
      fill="white"
      fillOpacity="0.04"
    >
      <path d="M0,80 L20,80 L20,40 L30,40 L30,20 L40,20 L40,40 L50,40 L50,80 L80,80 L80,50 L90,50 L90,30 L100,30 L100,10 L110,10 L110,30 L120,30 L120,50 L130,50 L130,80 L160,80 L160,55 L170,55 L170,35 L180,35 L180,55 L190,55 L190,80 L210,80 L210,45 L220,45 L220,25 L230,25 L230,5 L240,5 L240,25 L250,25 L250,45 L260,45 L260,80 L290,80 L290,60 L300,60 L300,40 L310,40 L310,20 L320,20 L320,40 L330,40 L330,60 L340,60 L340,80 L380,80 L380,50 L390,50 L390,30 L400,30 L400,50 L410,50 L410,80 L440,80 L440,45 L450,45 L450,25 L460,25 L460,5 L470,5 L470,25 L480,25 L480,45 L490,45 L490,80 L520,80 L520,55 L530,55 L530,35 L540,35 L540,55 L550,55 L550,80 L580,80 L580,40 L590,40 L590,20 L600,20 L600,40 L610,40 L610,80 L640,80 L640,60 L650,60 L650,30 L660,30 L660,10 L670,10 L670,30 L680,30 L680,60 L690,60 L690,80 L720,80 L720,50 L730,50 L730,25 L740,25 L740,50 L750,50 L750,80 L780,80 L780,45 L790,45 L790,25 L800,25 L800,5 L810,5 L810,25 L820,25 L820,45 L830,45 L830,80 L860,80 L860,55 L870,55 L870,30 L880,30 L880,55 L890,55 L890,80 L920,80 L920,50 L930,50 L930,30 L940,30 L940,10 L950,10 L950,30 L960,30 L960,50 L970,50 L970,80 L1000,80 L1000,45 L1010,45 L1010,65 L1020,65 L1020,80 L1050,80 L1050,40 L1060,40 L1060,20 L1070,20 L1070,40 L1080,40 L1080,80 L1110,80 L1110,55 L1120,55 L1120,35 L1130,35 L1130,55 L1140,55 L1140,80 L1170,80 L1170,45 L1180,45 L1180,25 L1190,25 L1190,5 L1200,5 L1200,25 L1210,25 L1210,45 L1220,45 L1220,80 L1250,80 L1250,60 L1260,60 L1260,40 L1270,40 L1270,60 L1280,60 L1280,80 L1310,80 L1310,50 L1320,50 L1320,30 L1330,30 L1330,50 L1340,50 L1340,80 L1370,80 L1370,45 L1380,45 L1380,65 L1390,65 L1390,80 L1440,80 L1440,120 L0,120 Z" />
    </svg>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] py-28 lg:py-40 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-60" />

      {/* Skyline */}
      <SkylineSVG />

      {/* Birds */}
      <div className="absolute top-20 right-20 opacity-10">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="absolute text-white text-2xl"
            style={{
              top: `${i * 20}px`,
              right: `${i * 25}px`,
              transform: `scale(${0.6 + i * 0.15})`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#c9a84c] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4">
            O que dizem
          </p>
          <h2
            className="text-white font-heading font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Depoimentos
          </h2>
        </motion.div>

        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Big quote mark */}
            <div className="flex justify-center mb-8">
              <Quote
                size={60}
                className="text-[#c9a84c] opacity-50"
                fill="currentColor"
              />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[current].stars)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-[#c9a84c]"
                  fill="currentColor"
                />
              ))}
            </div>

            {/* Text */}
            <blockquote
              className="text-white/90 font-light leading-relaxed mb-10 italic"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
            >
              "{testimonials[current].text}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-px bg-[#c9a84c]" />
              <p className="text-white font-heading font-bold text-lg mt-2">
                {testimonials[current].name}
              </p>
              <p className="text-[#c9a84c] font-heading text-sm tracking-wider uppercase">
                {testimonials[current].service}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={prev}
            className="w-12 h-12 border border-white/20 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-[#c9a84c]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 border border-white/20 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors flex items-center justify-center"
            aria-label="Próximo"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
