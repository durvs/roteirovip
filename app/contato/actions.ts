"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * reCAPTCHA v3. Só verifica quando RECAPTCHA_SECRET_KEY está configurada;
 * sem a chave (dev/local) o formulário segue funcionando só com o honeypot.
 */
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success: boolean; score?: number; action?: string };
    return data.success && (data.score ?? 0) >= 0.5 && data.action === "contato";
  } catch (err) {
    console.error("[contato] reCAPTCHA indisponível:", err);
    return false;
  }
}

function clean(v: FormDataEntryValue | null, max = 2000) {
  return (typeof v === "string" ? v : "").trim().slice(0, max);
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: bots fill hidden fields; humans never see it.
  if (clean(formData.get("website"))) {
    return { status: "success", message: "Mensagem enviada com sucesso!" };
  }

  const data = {
    name: clean(formData.get("name"), 120),
    email: clean(formData.get("email"), 160),
    phone: clean(formData.get("phone"), 40),
    travelDate: clean(formData.get("travelDate"), 40),
    message: clean(formData.get("message")),
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Informe seu nome.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Informe um e-mail válido.";
  if (data.message.length < 10)
    errors.message = "Conte um pouco mais sobre a sua viagem (mínimo 10 caracteres).";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Revise os campos destacados.",
      errors,
    };
  }

  if (!(await verifyRecaptcha(clean(formData.get("recaptchaToken"), 4000)))) {
    return {
      status: "error",
      message: `Não conseguimos confirmar que você não é um robô. Tente de novo ou fale conosco pelo WhatsApp ${site.whatsapp}.`,
    };
  }

  const subject = `Novo contato pelo site: ${data.name}`;
  const text = [
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    `Telefone/WhatsApp: ${data.phone || "-"}`,
    `Data da viagem: ${data.travelDate || "-"}`,
    "",
    "Mensagem:",
    data.message,
  ].join("\n");

  try {
    const resendKey = process.env.RESEND_API_KEY;
    // Vários destinatários separados por vírgula
    const to = (process.env.CONTACT_TO_EMAIL ?? "").split(",").map((s) => s.trim()).filter(Boolean);
    const webhook = process.env.CONTACT_WEBHOOK_URL;

    if (resendKey && to.length) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "Roteiro VIP <contato@roteirovip.com>",
          to,
          reply_to: data.email,
          subject,
          text,
        }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    } else if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject, source: "roteirovip.com/contato" }),
      });
      if (!res.ok) throw new Error(`Webhook ${res.status}`);
    } else if (process.env.NODE_ENV !== "production") {
      console.warn("[contato] Nenhum destino configurado (RESEND_API_KEY+CONTACT_TO_EMAIL ou CONTACT_WEBHOOK_URL). Mensagem recebida:\n" + text);
    } else {
      throw new Error("Contact delivery not configured");
    }
  } catch (err) {
    console.error("[contato] Falha ao enviar:", err);
    return {
      status: "error",
      message: `Não foi possível enviar agora. Fale conosco pelo WhatsApp ${site.whatsapp}.`,
    };
  }

  return {
    status: "success",
    message: "Mensagem enviada! Em breve nossa equipe entrará em contato.",
  };
}
