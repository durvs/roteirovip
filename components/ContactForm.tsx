"use client";

import { useActionState, useState, useEffect, startTransition, type FormEvent } from "react";
import Script from "next/script";
import { sendGAEvent } from "@next/third-parties/google";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContact, type ContactState } from "@/app/contato/actions";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
// Espera mínima antes de enviar: dá tempo do reCAPTCHA pontuar e evita que o
// envio pareça instantâneo demais.
const SUBMIT_DELAY_MS = 1500;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

function getRecaptchaToken(): Promise<string> {
  return new Promise((resolve) => {
    const g = window.grecaptcha;
    if (!RECAPTCHA_SITE_KEY || !g) return resolve("");
    g.ready(() => {
      g.execute(RECAPTCHA_SITE_KEY, { action: "contato" }).then(resolve, () => resolve(""));
    });
  });
}

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "w-full bg-white border border-gray-200 px-4 py-3.5 text-black text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-colors";
const labelClass =
  "block font-heading font-bold text-xs tracking-widest uppercase text-black mb-2";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const [submitting, setSubmitting] = useState(false);
  const busy = pending || submitting;

  // Conversão GA4: dispara uma vez, quando a action confirma o envio
  useEffect(() => {
    if (state.status === "success") {
      sendGAEvent("event", "generate_lead", { method: "formulario_contato" });
    }
  }, [state.status]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const [token] = await Promise.all([
      getRecaptchaToken(),
      new Promise((r) => setTimeout(r, SUBMIT_DELAY_MS)),
    ]);
    data.set("recaptchaToken", token);
    startTransition(() => formAction(data));
    setSubmitting(false);
  };

  if (state.status === "success") {
    return (
      <div className="bg-[#f8f7f5] border-l-4 border-[#c9a84c] p-8" role="status">
        <CheckCircle2 className="text-[#c9a84c] mb-4" size={36} />
        <h3 className="font-heading font-black text-2xl text-black mb-2">
          Recebemos sua mensagem
        </h3>
        <p className="text-gray-600 leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {RECAPTCHA_SITE_KEY && (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="lazyOnload" />
      )}
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Nome completo *</label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Seu nome" className={inputClass} aria-invalid={!!state.errors?.name} />
          {state.errors?.name && <p className="text-red-600 text-xs mt-1.5">{state.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>E-mail *</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="voce@email.com" className={inputClass} aria-invalid={!!state.errors?.email} />
          {state.errors?.email && <p className="text-red-600 text-xs mt-1.5">{state.errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>Telefone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+55 (11) 99999-9999" className={inputClass} />
        </div>
        <div>
          <label htmlFor="travelDate" className={labelClass}>Data prevista da viagem</label>
          <input id="travelDate" name="travelDate" type="month" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Mensagem *</label>
        <textarea id="message" name="message" required rows={6} placeholder="Ex.: somos 2 adultos e 2 crianças (5 e 9 anos), pensando em 10 dias em outubro, Disney e Universal..." className={`${inputClass} resize-y`} aria-invalid={!!state.errors?.message} />
        {state.errors?.message && <p className="text-red-600 text-xs mt-1.5">{state.errors.message}</p>}
      </div>

      {state.status === "error" && !state.errors && (
        <p className="flex items-start gap-2 text-red-700 text-sm bg-red-50 border border-red-100 p-4" role="alert">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          {state.message}
        </p>
      )}

      <p className="text-gray-500 text-xs leading-relaxed">
        Ao enviar, você concorda com nossa{" "}
        <a href="/politica-de-privacidade" className="underline hover:text-[#c9a84c]">Política de Privacidade</a>{" "}
        e nossos{" "}
        <a href="/termos-de-uso" className="underline hover:text-[#c9a84c]">Termos de Uso</a>.
        {RECAPTCHA_SITE_KEY && (
          <>
            {" "}Este formulário é protegido pelo reCAPTCHA e se aplicam a{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c9a84c]">Política de Privacidade</a>{" "}
            e os{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c9a84c]">Termos de Serviço</a>{" "}
            do Google.
          </>
        )}
      </p>

      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center gap-3 bg-black text-white font-heading font-bold tracking-wider px-8 py-4 text-sm hover:bg-[#c9a84c] hover:text-black transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {busy ? "Enviando..." : "Quero meu roteiro"}
        <Send size={16} />
      </button>
    </form>
  );
}
