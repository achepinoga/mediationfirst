"use client";

import { useEffect } from "react";
import { applyLanguage, type PrototypeLanguage } from "@/lib/apply-language";

export function LanguageRuntime() {
  useEffect(() => {
    const stored = window.localStorage.getItem("mediationfirst-language") as PrototypeLanguage | null;
    if (stored === "EN") {
      applyLanguage("EN");
    }
  }, []);

  return null;
}
