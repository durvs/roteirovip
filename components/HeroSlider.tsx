"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/slide-new.webp",
    headline: "Orlando sob medida.\nSem planilha.",
    subtitle:
      "Roteiro dia a dia, ingressos, casa, restaurantes e um guia ao seu lado no parque, tudo coordenado pela Roteiro VIP junto aos melhores fornecedores de Orlando. A vocês, cabe aproveitar.",
    tab: "Disney",
  },
  {
    image: "/images/slider2.webp",
    headline: "Cada dia no parque,\nplanejado ao minuto.",
    subtitle:
      "Express Pass, Lightning Lane, shows e mesas reservadas antes de vocês passarem pela catraca. Intermediamos cada reserva diretamente com os parques.",
    tab: "Universal",
  },
  {
    image: "/images/slider3.webp",
    headline: "Uma viagem à altura\nda sua família.",
    subtitle:
      "Do roteiro pensado para a altura das crianças às refeições brasileiras entregues na casa. Cada detalhe, cuidado por quem conhece Orlando de perto.",
    tab: "Busch Gardens",
  },
  {
    image: "/images/post-14.webp",
    headline: "Atendimento pessoal,\ndo início ao fim.",
    subtitle:
      "Um grupo exclusivo no WhatsApp com a nossa equipe, do primeiro orçamento ao voo de volta. Uma dúvida, uma resposta, sempre com quem conhece a sua viagem.",
    tab: "SeaWorld",
  },
  {
    image: "/images/slider5.webp",
    headline: "Pague em reais.\nViva Orlando em dólar.",
    subtitle:
      "Orçamento detalhado serviço por serviço, pagamento via Pix e aviso quando o câmbio favorece. Transparência do início ao fim.",
    tab: "LegoLand",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Só o primeiro slide vai no HTML inicial (é o LCP). Os demais entram no DOM
  // depois da hidratação, fora do caminho crítico, mas antes do 1º autoplay (6s).
  const [restMounted, setRestMounted] = useState(false);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stripRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  // Mobile: mantém a aba ativa centralizada na faixa rolável
  useEffect(() => {
    const strip = stripRef.current;
    const tab = tabRefs.current[current];
    if (!strip || !tab || strip.scrollWidth <= strip.clientWidth) return;
    strip.scrollTo({
      left: tab.offsetLeft - (strip.clientWidth - tab.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [current]);

  useEffect(() => {
    const t = setTimeout(() => setRestMounted(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const pauseAutoplay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goTo = (index: number) => {
    setRestMounted(true);
    setCurrent(index);
    pauseAutoplay();
  };

  return (
    <motion.section
      className="relative h-screen min-h-[600px] overflow-hidden bg-black"
      style={{ touchAction: "pan-y" }}
      onPanEnd={(_, info) => {
        if (Math.abs(info.offset.x) < 50 || Math.abs(info.offset.x) < Math.abs(info.offset.y)) return;
        if (info.offset.x < 0) next();
        else prev();
        pauseAutoplay();
      }}
    >
      {/* Slides: crossfade via opacity. Slide 0 é preload (LCP); os outros montam após a hidratação. */}
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
            {(i === 0 || restMounted) && (
              <Image
                src={slide.image}
                alt={slide.headline.replace("\n", " ")}
                fill
                className="object-cover object-center"
                preload={i === 0}
                fetchPriority={i === 0 ? "high" : undefined}
                loading={i === 0 ? "eager" : "lazy"}
                quality={60}
                sizes="100vw"
              />
            )}
          </motion.div>
        ))}
        {/* Gradient overlays */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-0">
        <AnimatePresence mode="wait" initial={false}>
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

      {/* Park tabs: faixa rolável no mobile, barra dividida no desktop */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="relative max-w-7xl mx-auto lg:px-8">
          <div
            ref={stripRef}
            className="flex overflow-x-auto snap-x snap-mandatory bg-black/60 lg:bg-transparent px-6 lg:px-0 lg:overflow-visible"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="tablist"
            aria-label="Parques"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.tab}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={i === current}
                onClick={() => goTo(i)}
                className={`shrink-0 lg:shrink lg:flex-1 snap-center whitespace-nowrap px-5 lg:px-0 py-4 font-heading font-bold text-xs lg:text-sm tracking-widest uppercase transition-all duration-300 ${
                  i === current
                    ? "bg-[#c9a84c] text-black"
                    : "bg-transparent lg:bg-black/60 text-white/70 hover:bg-black/80 hover:text-white"
                }`}
              >
                {slide.tab}
              </button>
            ))}
          </div>
          {/* Degradê nas bordas: sinaliza que a faixa rola (mobile) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/70 to-transparent lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/70 to-transparent lg:hidden" />
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
    </motion.section>
  );
}
