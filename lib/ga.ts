/**
 * Analytics via Google Tag Manager: o gtm.js é carregado em app/layout.tsx
 * (@next/third-parties, strategy afterInteractive). O GA4 é configurado dentro
 * do container, não mais no código.
 *
 * Eventos são empurrados no dataLayer no formato do GTM ({ event, ...params }).
 * Para chegarem ao GA4, o container precisa de um gatilho "Evento personalizado"
 * com o nome do evento e uma tag "Evento do GA4" lendo os parâmetros de
 * variáveis da camada de dados. Eventos disparados antes do gtm.js chegar ficam
 * enfileirados e são processados depois.
 */
export const GTM_ID = "GTM-5N4Z8QDC";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function gaEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
