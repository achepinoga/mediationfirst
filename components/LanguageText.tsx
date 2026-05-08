"use client";

import { useLanguage } from "@/lib/use-language";

export function LanguageText({ sk, en }: { sk: string; en: string }) {
  const lang = useLanguage();
  return <>{lang === "EN" ? en : sk}</>;
}
