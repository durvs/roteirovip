import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
