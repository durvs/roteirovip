"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Roteiro Personalizado", href: "/services/roteiro-personalizado" },
  { label: "Guia VIP", href: "/services/guia_vip" },
  { label: "Assessoria VIP", href: "/services/assessoria_vip" },
  { label: "Registro VIP", href: "/services/registro_vip" },
  { label: "Chofer", href: "/services/chofer" },
  { label: "Babysitter", href: "/services/babysitter" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.webp"
                  alt="Roteiro VIP"
                  fill
                  className={`object-contain object-left transition-all duration-500 ${
                    scrolled ? "" : "brightness-0 invert"
                  }`}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {["Home", "Blog", "Contato"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`font-heading font-600 text-sm tracking-wide transition-colors duration-300 hover:text-[#c9a84c] ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-heading font-semibold text-sm tracking-wide transition-colors duration-300 hover:text-[#c9a84c] ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Serviços
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-2xl rounded-sm overflow-hidden"
                      initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                      transition={{ duration: 0.2 }}
                      style={{ transformOrigin: "top center" }}
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-3 text-sm font-heading font-medium text-black hover:bg-black hover:text-white transition-colors border-b border-gray-50 last:border-0"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/orcamento"
                className="inline-flex items-center gap-2 bg-black text-white font-heading font-bold text-sm tracking-wider px-6 py-3 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
              >
                Faça seu Orçamento
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col pt-20"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col px-8 py-8 gap-6">
              {["Home", "Blog", "Contato"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-white font-heading font-bold text-2xl"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.24 }}
              >
                <p className="text-[#c9a84c] font-heading font-bold text-sm tracking-widest mb-3">
                  SERVIÇOS
                </p>
                {services.map((s, i) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/70 font-heading font-medium text-lg py-1.5 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/orcamento"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block bg-[#c9a84c] text-black font-heading font-bold tracking-wider px-8 py-4 text-lg"
                >
                  Faça seu Orçamento
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
