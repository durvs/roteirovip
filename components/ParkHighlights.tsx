"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const parks = [
  { name: "Magic Kingdom", href: "/magic-kingdom", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/Disney-World-1.webp" },
  { name: "Animal Kingdom", href: "/animal-kingdom", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/Animal-Kingdom.webp" },
  { name: "Hollywood Studios", href: "/hollywood-studios", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/Hollywood-Studios.webp" },
  { name: "Universal", href: "/universal-orlando", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/Universal-Studios-1.webp" },
  { name: "Islands of Adventure", href: "/islands-of-adventure", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/Islands-of-Adventures.webp" },
  { name: "Busch Gardens", href: "/busch-gardens", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/Bush-Gardens.webp" },
  { name: "LegoLand", href: "/legoland", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/Legoland-1.webp" },
  { name: "SeaWorld", href: "/seaworld", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/SeaWorld-1.webp" },
  { name: "Epcot", href: "/epcot", image: "https://www.roteirovip.com/wp-content/uploads/2024/04/Epcot-1.webp" },
];

export default function ParkHighlights() {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-[#f8f7f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.p
              className="text-[#c9a84c] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Experiências
            </motion.p>
            <motion.h2
              className="font-heading font-black leading-tight text-black"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Destaques da viagem
            </motion.h2>
            <motion.p
              className="text-gray-500 text-base lg:text-lg mt-4 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Uma experiência que não apenas marca, mas também transforma sua
              jornada em algo verdadeiramente inesquecível.
            </motion.p>
          </div>

          {/* Scroll buttons */}
          <motion.div
            className="flex gap-2 shrink-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
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

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 lg:px-8 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {parks.map((park, i) => (
          <motion.div
            key={park.href}
            className="shrink-0 w-72 lg:w-80"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.07 }}
          >
            <Link href={park.href} className="block group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={park.image}
                  alt={park.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Park name */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-8 h-0.5 bg-[#c9a84c] mb-3 group-hover:w-12 transition-all duration-500" />
                  <h3 className="text-white font-heading font-black text-xl leading-tight">
                    {park.name}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
