"use client";

import { useEffect, useRef } from "react";

/**
 * Fundo animado dos heros internos: focos de luz navy e dourado em loop lento.
 * Pausa a animação quando o hero sai da tela (economiza GPU/bateria) e
 * respeita prefers-reduced-motion via CSS (.hero-glow).
 */
export default function AmbientGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle("is-paused", !entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-glow hero-glow--navy" />
      <div className="hero-glow hero-glow--gold" />
      <div className="hero-glow hero-glow--ember" />
    </div>
  );
}
