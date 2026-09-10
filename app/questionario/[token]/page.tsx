import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import QuestionnaireForm from "@/components/QuestionnaireForm";
import { fetchQuestionnaire } from "@/lib/questionnaire-api";

export const metadata: Metadata = {
  title: "Questionário da viagem | Roteiro VIP",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export default async function QuestionarioPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const data = await fetchQuestionnaire(token);
  if (!data) notFound();

  const subtitle = data.destination
    ? `${data.destination}${data.arrivalDate ? ` · chegada em ${formatDate(data.arrivalDate)}` : ""}`
    : undefined;

  return (
    <main>
      <PageHeader
        eyebrow={`Questionário · ${data.template.label}`}
        title={`Olá, ${data.familyName}! Animados com a viagem chegando?`}
        description={subtitle}
      />
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {data.status === "answered" ? (
            <div className="rounded-sm border border-gray-200 bg-[#f8f7f5] p-8 text-center">
              <p className="font-heading font-bold text-lg text-black">Este questionário já foi respondido.</p>
              <p className="mt-2 text-gray-600">
                Obrigado! Se quiser complementar alguma informação, é só falar com a equipe pelo WhatsApp.
              </p>
            </div>
          ) : (
            <QuestionnaireForm token={token} template={data.template} terms={data.terms} />
          )}
        </div>
      </section>
    </main>
  );
}
