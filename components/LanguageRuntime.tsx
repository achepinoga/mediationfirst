"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { applyLanguage, type PrototypeLanguage } from "@/lib/apply-language";

export function LanguageRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const stored = window.localStorage.getItem("mediationfirst-language") as PrototypeLanguage | null;
    if (stored === "EN") {
      applyLanguage("EN");
    }
  }, [pathname]);

  return null;
}
