"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { applyLanguage, type PrototypeLanguage } from "@/lib/apply-language";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<PrototypeLanguage>("SK");

  useEffect(() => {
    const stored = window.localStorage.getItem("mediationfirst-language");
    if (stored === "EN" || stored === "SK") {
      setLanguage(stored);
    }

    const onLanguageChange = (event: Event) => {
      const detail = (event as CustomEvent<PrototypeLanguage>).detail;
      if (detail === "EN" || detail === "SK") {
        setLanguage(detail);
      }
    };

    window.addEventListener("mediationfirst-language", onLanguageChange);
    return () => window.removeEventListener("mediationfirst-language", onLanguageChange);
  }, []);

  const selectLanguage = (item: PrototypeLanguage) => {
    setLanguage(item);
    applyLanguage(item);
  };

  return (
    <div className="flex items-center rounded-full border border-green-deep/15 bg-white p-1" aria-label="Jazyk">
      {(["SK", "EN"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => selectLanguage(item)}
          className={cn(
            "focus-ring rounded-full px-2.5 py-1 text-xs font-bold transition",
            language === item ? "bg-green-deep text-white" : "text-muted hover:text-green-forest"
          )}
          aria-pressed={language === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
