import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID } from "@/lib/ga";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "600"],
  // Sem itálico: só os depoimentos usam, e o browser sintetiza. Poupa um woff2 (~35 KB) no caminho crítico.
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roteirovip.com"),
  title: "Roteiro VIP | Viagens para os parques de Orlando",
  description:
    "Assessoria em Orlando desde 2019 que monta o seu roteiro dia a dia e intermedia ingressos, casa, restaurantes e guia nos parques junto aos melhores fornecedores. Atendimento em português, pagamento em reais.",
  keywords: "roteiro vip, orlando, disney, universal, parques temáticos, roteiro personalizado, guia nos parques, ingressos disney",
  openGraph: {
    title: "Roteiro VIP | Viagens para os parques de Orlando",
    description:
      "Roteiro dia a dia e intermediação de ingressos, casa, carro e guia nos parques. Atendimento em português, pagamento em reais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${montserrat.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
      {/* GTM (afterInteractive, equivale ao snippet oficial com async). O GA4 passa a ser configurado dentro do container. */}
      <GoogleTagManager gtmId={GTM_ID} />
      {/* Umami: afterInteractive equivale ao `defer` do snippet oficial (carrega após a hidratação, sem bloquear o LCP) */}
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="65521f94-3c59-4809-93c3-a71fb72233d2"
        strategy="afterInteractive"
      />
    </html>
  );
}
