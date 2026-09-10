"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Star } from "lucide-react";
import type { Question, QuestionnaireTemplate, QuestionnaireTerms } from "@/lib/questionnaire-api";

type RatingAnswer = { [itemId: string]: number | string | undefined };
type Answers = Record<string, string | RatingAnswer | undefined>;

const GOLD = "#c9a84c";
const inputClass =
  "w-full rounded-sm border border-gray-300 bg-white px-3 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]";

/** Formulário do questionário. Tudo opcional de propósito (cliente responde no
 *  celular) — só o aceite dos termos é obrigatório. */
export default function QuestionnaireForm({
  token,
  template,
  terms,
}: {
  token: string;
  template: QuestionnaireTemplate;
  terms: QuestionnaireTerms;
}) {
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setText = (id: string, value: string) => setAnswers((a) => ({ ...a, [id]: value }));
  const setRating = (qid: string, itemId: string, value: number | string) =>
    setAnswers((a) => {
      const cur = (a[qid] as RatingAnswer | undefined) ?? {};
      return { ...a, [qid]: { ...cur, [itemId]: value } };
    });

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!accepted) {
      setError("Para enviar, marque o aceite dos Termos de Uso e da Política de Privacidade.");
      return;
    }
    setSending(true);
    setError(null);
    try {
      const res = await fetch(`/api/questionario/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, respondentName: name, acceptTerms: accepted }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!data.ok) {
        setError(data.error ?? "Não foi possível enviar. Tente de novo.");
        return;
      }
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Sem conexão. Tente de novo em instantes.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-sm border border-[#c9a84c] bg-[#fbf7ee] p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[#c9a84c]" />
        <p className="mt-3 font-heading font-bold text-lg text-black">Recebemos suas respostas. Obrigado!</p>
        <p className="mt-2 text-gray-600">
          Agora é com a gente: vamos usar tudo isso para deixar o roteiro com a cara de vocês.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <p className="text-gray-700 leading-relaxed">{template.greeting}</p>

      {template.sections.map((section, si) => (
        <section key={section.id} className="rounded-sm border border-gray-200 p-5 sm:p-7">
          <h2 className="font-heading font-black text-xl text-black mb-6 flex items-baseline gap-3">
            <span className="text-[#c9a84c] text-sm">{String(si + 1).padStart(2, "0")}</span>
            {section.title}
          </h2>
          <div className="space-y-7">
            {section.questions.map((q) => (
              <QuestionField key={q.id} question={q} value={answers[q.id]} onText={setText} onRating={setRating} />
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-sm border border-gray-200 p-5 sm:p-7">
        <label className="block font-heading font-semibold text-sm text-black">Quem está respondendo? (opcional)</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className={`${inputClass} mt-2`} maxLength={120} />
      </section>

      <section className="rounded-sm border border-[#c9a84c] bg-[#fbf7ee] p-5 sm:p-7">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-[#c9a84c]"
            required
          />
          <span className="text-sm leading-relaxed text-gray-800">
            Li e aceito os{" "}
            <a href={terms.termsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-[#c9a84c]">
              Termos de Uso
            </a>{" "}
            e a{" "}
            <a href={terms.privacyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-[#c9a84c]">
              Política de Privacidade
            </a>{" "}
            da {terms.company}, e autorizo o uso destas respostas para planejar e organizar a minha viagem e
            para contato por e-mail, telefone ou WhatsApp.
          </span>
        </label>
        <p className="mt-2 pl-7 text-xs text-gray-500">O aceite fica registrado com data e hora junto com as suas respostas.</p>
      </section>

      {error && (
        <p className="rounded-sm border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={sending || !accepted}
          className="inline-flex items-center gap-2 bg-black text-white font-heading font-bold text-sm tracking-wider px-8 py-4 shadow-xl hover:bg-[#c9a84c] hover:text-black transition-all duration-300 disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white"
        >
          {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Enviar respostas
        </button>
      </div>
    </form>
  );
}

function QuestionField({
  question,
  value,
  onText,
  onRating,
}: {
  question: Question;
  value: Answers[string];
  onText: (id: string, v: string) => void;
  onRating: (qid: string, itemId: string, v: number | string) => void;
}) {
  const label = (
    <div>
      <p className="font-heading font-semibold text-sm text-black leading-snug">{question.label}</p>
      {question.hint && <p className="mt-0.5 text-xs text-gray-500">{question.hint}</p>}
    </div>
  );

  if (question.type === "text") {
    return (
      <div className="space-y-2">
        {label}
        <input value={(value as string) ?? ""} onChange={(e) => onText(question.id, e.target.value)} maxLength={2000} className={inputClass} />
      </div>
    );
  }
  if (question.type === "textarea") {
    return (
      <div className="space-y-2">
        {label}
        <textarea rows={3} value={(value as string) ?? ""} onChange={(e) => onText(question.id, e.target.value)} maxLength={2000} className={inputClass} />
      </div>
    );
  }
  if (question.type === "yesno") {
    const v = value as string | undefined;
    return (
      <div className="space-y-2">
        {label}
        <div className="grid grid-cols-2 gap-2 sm:max-w-xs">
          {(["yes", "no"] as const).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => onText(question.id, v === opt ? "" : opt)}
              className={`h-11 rounded-sm border font-heading font-semibold text-sm transition-colors ${
                v === opt ? "border-black bg-black text-white" : "border-gray-300 bg-white text-black hover:border-[#c9a84c]"
              }`}
            >
              {opt === "yes" ? "Sim" : "Não"}
            </button>
          ))}
        </div>
      </div>
    );
  }
  if (question.type !== "rating") return null;

  const rating = (value as RatingAnswer | undefined) ?? {};
  return (
    <div className="space-y-3">
      {label}
      <ul className="divide-y divide-gray-200 rounded-sm border border-gray-200">
        {question.items.map((item) => {
          const current = typeof rating[item.id] === "number" ? (rating[item.id] as number) : 0;
          return (
            <li key={item.id} className="space-y-2 px-3 py-2.5">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <span className="text-sm text-gray-800">{item.label}</span>
                <div className="flex items-center gap-0.5" role="radiogroup" aria-label={item.label}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={current === n}
                      aria-label={`${n} de 5`}
                      onClick={() => onRating(question.id, item.id, current === n ? 0 : n)}
                      className="rounded-full p-1 transition-transform hover:scale-110"
                    >
                      <Star className="h-6 w-6" fill={n <= current ? GOLD : "none"} color={n <= current ? GOLD : "#d1d5db"} />
                    </button>
                  ))}
                </div>
              </div>
              {item.other && current > 0 && (
                <input
                  value={(rating[`${item.id}_text`] as string) ?? ""}
                  onChange={(e) => onRating(question.id, `${item.id}_text`, e.target.value)}
                  placeholder="Qual?"
                  className={`${inputClass} py-2`}
                  maxLength={2000}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
