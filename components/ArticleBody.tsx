"use client";

import { useEffect, useState } from "react";
import type { PrototypeLanguage } from "@/lib/apply-language";

type Props = {
  skHtml: string;
  enHtml: string;
};

export function ArticleBody({ skHtml, enHtml }: Props) {
  const [html, setHtml] = useState(skHtml);

  useEffect(() => {
    const stored = window.localStorage.getItem("mediationfirst-language") as PrototypeLanguage | null;
    if (stored === "EN") setHtml(enHtml);

    const handler = (e: Event) => {
      const lang = (e as CustomEvent<PrototypeLanguage>).detail;
      setHtml(lang === "EN" ? enHtml : skHtml);
    };

    window.addEventListener("mediationfirst-language", handler);
    return () => window.removeEventListener("mediationfirst-language", handler);
  }, [skHtml, enHtml]);

  return (
    <div
      className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-green-forest prose-p:leading-8 prose-p:text-muted prose-strong:text-green-forest prose-li:text-muted"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
