import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
