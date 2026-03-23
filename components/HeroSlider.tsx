"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "https://www.roteirovip.com/wp-content/uploads/revslider/california/slide-new-copyright1.jpg",
    headline: "Viaje, descubra,\nviva, inspire.",
    subtitle:
      "Transforme sua jornada em Orlando com a expertise da Roteiro VIP. Faça seu orçamento hoje e comece a criar memórias para toda a vida!",
    tab: "Disney",
  },
  {
    image: "https://www.roteirovip.com/wp-content/uploads/revslider/california/slider2-copyright1.jpg",
    headline: "Torne cada\njornada especial",
    subtitle:
      "Deixe a Roteiro VIP guiar você pelos encantos de Orlando. Prepare-se para uma experiência verdadeiramente memorável!",
    tab: "Universal",
  },
  {
    image: "https://www.roteirovip.com/wp-content/uploads/revslider/california/slider3-copyright1.jpg",
    headline: "Crie memórias\ninesquecíveis",
    subtitle:
      "Com a Roteiro VIP, sua viagem a Orlando será uma aventura única. Venha escrever o próximo capítulo das suas memórias!",
    tab: "Busch Gardens",
  },
  {
    image: "https://www.roteirovip.com/wp-content/uploads/revslider/california/post-14-copyright1.jpg",
    headline: "Seu destino,\nnossa expertise.",
    subtitle:
      "Sua viagem extraordinária. Descubra o melhor dos parques temáticos conosco!",
    tab: "SeaWorld",
  },
  {
    image: "https://www.roteirovip.com/wp-content/uploads/revslider/california/slider5-copyright1.jpg",
    headline: "Transformamos\nsonhos em destinos",
    subtitle:
      "Deixe-nos tornar sua viagem uma experiência única e memorável. Descubra o encanto dos parques temáticos conosco!",
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
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].headline}
            fill
            className="object-cover object-center"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
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
              className="text-white font-[Montserrat] font-black leading-[1.05] mb-6"
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
              href="/orcamento"
              className="inline-flex items-center gap-3 bg-white text-black font-[Montserrat] font-bold tracking-wider px-8 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300 group text-sm"
            >
              Faça seu Orçamento
              <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300">→</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Park tabs */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`flex-1 py-4 font-[Montserrat] font-bold text-xs lg:text-sm tracking-widest uppercase transition-all duration-300 ${
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
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10">
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
