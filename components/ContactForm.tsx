"use client";

import { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContact, type ContactState } from "@/app/contato/actions";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "w-full bg-white border border-gray-200 px-4 py-3.5 text-black text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-colors";
const labelClass =
  "block font-heading font-bold text-xs tracking-widest uppercase text-black mb-2";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

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
    <form action={formAction} className="space-y-6" noValidate>
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
      </p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-3 bg-black text-white font-heading font-bold tracking-wider px-8 py-4 text-sm hover:bg-[#c9a84c] hover:text-black transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Enviando..." : "Quero meu roteiro"}
        <Send size={16} />
      </button>
    </form>
  );
}
