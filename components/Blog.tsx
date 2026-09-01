"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Os maiores Arranha-Céus dos Estados Unidos",
    date: "5 de abril de 2024",
    href: "/blog/arranha-ceus-estados-unidos",
    category: "Destinos",
  },
  {
    title: "Georgia Aquarium: O maior aquário dos Estados Unidos",
    date: "5 de abril de 2024",
    href: "/blog/georgia-aquarium",
    category: "Atrações",
  },
  {
    title: "Cidades onde o dia é mais longo no verão estadunidense",
    date: "5 de abril de 2024",
    href: "/blog/dia-mais-longo-verao",
    category: "Dicas",
  },
  {
    title: "Parques em Atlanta para aproveitar um ótimo dia",
    date: "5 de abril de 2024",
    href: "/blog/parques-atlanta",
    category: "Parques",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-[#f8f7f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <motion.p
              className="text-[#c9a84c] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Conteúdo
            </motion.p>

            <motion.h2
              className="font-heading font-black leading-tight text-black mb-12"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Nosso Blog
            </motion.h2>

            <div className="space-y-0">
              {posts.map((post, i) => (
                <motion.div
                  key={post.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={post.href}
                    className="block py-6 border-b border-gray-200 group hover:border-[#c9a84c] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#c9a84c] font-heading font-bold text-xs tracking-wider uppercase">
                        {post.category}
                      </span>
                      <span className="text-gray-300">·</span>
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-black font-heading font-bold text-lg leading-snug group-hover:text-[#c9a84c] transition-colors">
                        {post.title}
                      </h3>
                      <ArrowRight
                        size={18}
                        className="shrink-0 text-gray-300 group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 bg-black text-white font-heading font-bold tracking-wider px-8 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300 text-sm group"
              >
                Visitar Blog
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="relative h-full min-h-[500px]">
              <Image
                src="/images/garota-loira-disney.webp"
                alt="Visitante na Disney"
                fill
                className="object-cover object-top"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#c9a84c] opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#c9a84c] opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
