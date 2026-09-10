import { NextRequest, NextResponse } from "next/server";
import { submitQuestionnaire } from "@/lib/questionnaire-api";

export const dynamic = "force-dynamic";

/** Recebe a resposta do cliente e repassa ao admin, levando IP e navegador
 *  do cliente como evidência do aceite dos termos. */
export async function POST(req: NextRequest, ctx: { params: Promise<{ token: string }> }) {
  const { token } = await ctx.params;
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Resposta inválida." }, { status: 400 });
  }
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null;
  try {
    const { status, json } = await submitQuestionnaire(token, body, {
      ip,
      userAgent: req.headers.get("user-agent"),
    });
    return NextResponse.json(json, { status });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar agora. Tente de novo em instantes." },
      { status: 502 },
    );
  }
}
