"use client";

import { useEffect, useState } from "react";
import type { PrototypeLanguage } from "@/lib/apply-language";

export function useLanguage(): PrototypeLanguage {
  const [lang, setLang] = useState<PrototypeLanguage>("SK");

  useEffect(() => {
    const stored = window.localStorage.getItem("mediationfirst-language") as PrototypeLanguage | null;
    if (stored) setLang(stored);

    const handler = (e: Event) => setLang((e as CustomEvent<PrototypeLanguage>).detail);
    window.addEventListener("mediationfirst-language", handler);
    return () => window.removeEventListener("mediationfirst-language", handler);
  }, []);

  return lang;
}
