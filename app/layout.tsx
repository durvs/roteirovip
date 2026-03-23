import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roteiro VIP — Sua Viagem ao Estilo VIP",
  description:
    "A Roteiro VIP é uma agência especializada em planejamento e organização de viagens para parques temáticos em Orlando. Serviços personalizados para uma experiência única.",
  keywords: "roteiro vip, orlando, disney, universal, parques temáticos, viagem personalizada",
  openGraph: {
    title: "Roteiro VIP — Sua Viagem ao Estilo VIP",
    description:
      "Planejamento e organização de viagens para parques temáticos em Orlando.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
