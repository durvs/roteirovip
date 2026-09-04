/**
 * GA4 sem @next/third-parties: o gtag.js é carregado com strategy="lazyOnload"
 * (ver app/layout.tsx) para não concorrer com o LCP. Eventos disparados antes
 * do script chegar ficam enfileirados no dataLayer e são processados depois.
 */
export const GA_ID = "G-BYDJ5WS4EQ";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function gaEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    // gtag.js só processa entradas no formato `arguments`; arrays são ignorados
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }
  window.gtag("event", name, params);
}
