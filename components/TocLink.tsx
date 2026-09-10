"use client";

import type { ReactNode } from "react";

/** Link do sumário que rola até a seção SEM empilhar entrada no histórico.
 *  Com <a href="#id"> puro, cada clique virava um "voltar" a mais: quem lia
 *  três seções precisava apertar voltar quatro vezes pra sair da página. */
export default function TocLink({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`#${targetId}`}
      className={className}
      onClick={(e) => {
        const el = document.getElementById(targetId);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(history.state, "", `#${targetId}`);
      }}
    >
      {children}
    </a>
  );
}
