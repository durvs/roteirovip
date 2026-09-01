"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/slide-new.webp",
    headline: "Orlando sem planilha,\nsem perrengue.",
    subtitle:
      "A gente monta o roteiro dia a dia, emite os ingressos, reserva os restaurantes e coloca um guia com vocês dentro do parque. Você só aproveita.",
    tab: "Disney",
  },
  {
    image: "/images/slider2.webp",
    headline: "Cada dia de parque\ncom começo, meio e fim.",
    subtitle:
      "Express Pass, Lightning Lane, horário de show e mesa reservada. Tudo agendado antes de vocês passarem pela catraca.",
    tab: "Universal",
  },
  {
    image: "/images/slider3.webp",
    headline: "Viagem em família,\nde verdade.",
    subtitle:
      "Do roteiro pensado para a altura das crianças à marmita brasileira entregue na casa. Cuidamos do que cansa para sobrar o que importa.",
    tab: "Busch Gardens",
  },
  {
    image: "/images/post-14.webp",
    headline: "Você fala com gente,\nnão com um site.",
    subtitle:
      "Um grupo de WhatsApp com a nossa equipe, do primeiro orçamento ao voo de volta. Uma pergunta, uma resposta, no mesmo lugar.",
    tab: "SeaWorld",
  },
  {
    image: "/images/slider5.webp",
    headline: "Pague em reais.\nViaje em dólar.",
    subtitle:
      "Orçamento fechado serviço por serviço, pagamento via Pix e aviso quando o câmbio está bom. Sem surpresa na fatura.",
    tab: "LegoLand",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-black">
      {/* Slides: all mounted and preloaded, crossfade via opacity (no blank gap) */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === current ? 1 : 0,
              scale: i === current ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.image}
              alt={slide.headline.replace("\n", " ")}
              fill
              className="object-cover object-center"
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              sizes="100vw"
            />
          </motion.div>
        ))}
        {/* Gradient overlays */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Decorative line */}
            <motion.div
              className="w-16 h-1 bg-[#c9a84c] mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />

            <h1
              className="text-white font-heading font-black leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                whiteSpace: "pre-line",
              }}
            >
              {slides[current].headline}
            </h1>

            <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-light">
              {slides[current].subtitle}
            </p>

            <Link
              href="/contato"
              className="inline-flex items-center gap-3 bg-white text-black font-heading font-bold tracking-wider px-8 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300 group text-sm"
            >
              Quero meu roteiro
              <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300">→</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Park tabs */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`flex-1 py-4 font-heading font-bold text-xs lg:text-sm tracking-widest uppercase transition-all duration-300 ${
                  i === current
                    ? "bg-[#c9a84c] text-black"
                    : "bg-black/60 text-white/70 hover:bg-black/80 hover:text-white"
                }`}
              >
                {slide.tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-10 h-0.5 bg-white/10">
        <motion.div
          className="h-full bg-[#c9a84c]"
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </section>
  );
}
