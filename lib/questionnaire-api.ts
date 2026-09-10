/**
 * Ponte servidor-a-servidor com o admin da Roteiro VIP para o questionário do
 * cliente. O cliente só vê roteirovip.com; quem fala com o admin é este
 * servidor, com chave compartilhada (QUESTIONNAIRE_API_KEY).
 */

export type RatingItem = { id: string; label: string; other?: boolean };
export type Question =
  | { id: string; type: "text" | "textarea" | "yesno"; label: string; hint?: string }
  | { id: string; type: "rating"; label: string; hint?: string; items: RatingItem[] };
export type Section = { id: string; title: string; questions: Question[] };
export type QuestionnaireTemplate = { key: string; label: string; greeting: string; sections: Section[] };
export type QuestionnaireTerms = { version: string; termsUrl: string; privacyUrl: string; company: string };

export type QuestionnairePayload = {
  ok: true;
  status: "sent" | "answered";
  familyName: string;
  destination: string | null;
  arrivalDate: string | null;
  template: QuestionnaireTemplate;
  terms: QuestionnaireTerms;
};

function config() {
  const base = process.env.ADMIN_API_URL;
  const key = process.env.QUESTIONNAIRE_API_KEY;
  if (!base || !key) throw new Error("ADMIN_API_URL / QUESTIONNAIRE_API_KEY não configurados");
  return { base: base.replace(/\/$/, ""), key };
}

export async function fetchQuestionnaire(token: string): Promise<QuestionnairePayload | null> {
  const { base, key } = config();
  const res = await fetch(`${base}/api/questionario/${encodeURIComponent(token)}`, {
    headers: { "x-questionnaire-key": key },
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`admin respondeu ${res.status}`);
  return (await res.json()) as QuestionnairePayload;
}

export async function submitQuestionnaire(
  token: string,
  body: unknown,
  client: { ip: string | null; userAgent: string | null },
): Promise<{ status: number; json: { ok: boolean; error?: string } }> {
  const { base, key } = config();
  const res = await fetch(`${base}/api/questionario/${encodeURIComponent(token)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-questionnaire-key": key,
      ...(client.ip ? { "x-client-ip": client.ip } : {}),
      ...(client.userAgent ? { "x-client-user-agent": client.userAgent } : {}),
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  const json = (await res.json().catch(() => ({ ok: false, error: "Resposta inválida do servidor." }))) as {
    ok: boolean;
    error?: string;
  };
  return { status: res.status, json };
}
