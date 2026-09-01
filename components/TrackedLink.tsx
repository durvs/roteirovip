"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { sendGAEvent } from "@next/third-parties/google";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Nome do evento GA4 (ex.: "contact") */
  event: string;
  /** Parâmetros do evento (ex.: { method: "whatsapp", location: "footer" }) */
  params?: Record<string, string>;
  children: ReactNode;
};

/** Link que registra um evento no GA4 ao ser clicado. */
export default function TrackedLink({ event, params, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        sendGAEvent("event", event, params ?? {});
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
