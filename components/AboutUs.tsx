"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const parks = [
  { name: "Magic Kingdom", href: "/magic-kingdom" },
  { name: "Animal Kingdom", href: "/animal-kingdom" },
  { name: "Hollywood Studios", href: "/hollywood-studios" },
  { name: "Universal Orlando", href: "/universal-orlando" },
  { name: "Islands of Adventure", href: "/islands-of-adventure" },
  { name: "Busch Gardens", href: "/busch-gardens" },
  { name: "Legoland", href: "/legoland" },
  { name: "SeaWorld", href: "/seaworld" },
  { name: "Epcot", href: "/epcot" },
];

const photos = [
  {
    src: "https://www.roteirovip.com/wp-content/uploads/elementor/thumbs/Garota-alege-universal-qmidbc3822xkhlh3cygy7prowkp86nf4rpaicwi5ps.webp",
    alt: "Visitante no Universal",
  },
  {
    src: "https://www.roteirovip.com/wp-content/uploads/elementor/thumbs/Garota-mickey-qmidypco4nqw4iviplpr5mjpetspi3d8oqkfqtxojw.webp",
    alt: "Visitante com Mickey",
  },
  {
    src: "https://www.roteirovip.com/wp-content/uploads/elementor/thumbs/Garota-disney-qmidymj5k5n15ozm62hvg59bmo6lv021oclzb01v2k.webp",
    alt: "Visitante na Disney",
  },
];

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Giant heading */}
            <div className="overflow-hidden mb-8">
              <motion.h2
                className="font-heading font-black leading-none tracking-tight text-black"
                style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                Sobre
                <br />
                Nós
              </motion.h2>
            </div>

            <motion.div
              className="w-12 h-1 bg-[#c9a84c] mb-8"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              A Roteiro VIP é uma agência especializada em planejamento e
              organização de viagens para parques temáticos em Orlando. Nossa
              missão é proporcionar serviços personalizados, garantindo uma
              experiência única e sem complicações para nossos clientes durante
              sua visita aos parques.
            </motion.p>

            {/* Parks list */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {parks.map((park, i) => (
                  <motion.div
                    key={park.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                  >
                    <Link
                      href={park.href}
                      className="text-[#1a2744] font-heading font-bold text-sm hover:text-[#c9a84c] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] group-hover:scale-150 transition-transform" />
                      {park.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link
                href="/orcamento"
                className="inline-block bg-black text-white font-heading font-bold text-sm tracking-widest px-8 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
              >
                Faça seu Orçamento
              </Link>
            </motion.div>
          </motion.div>

          {/* Photos column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large photo */}
              <div className="col-span-2 relative h-64 lg:h-80 overflow-hidden rounded-none">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Two smaller photos */}
              {photos.slice(1).map((photo, i) => (
                <div
                  key={i}
                  className="relative h-48 lg:h-56 overflow-hidden"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -left-6 bottom-10 bg-[#c9a84c] text-black p-5 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="font-heading font-black text-3xl leading-none">9+</p>
              <p className="font-heading font-bold text-xs tracking-wider mt-1">PARQUES</p>
              <p className="font-heading text-xs opacity-80">em Orlando</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
