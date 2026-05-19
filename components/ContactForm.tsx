"use client";

import { useState } from "react";
import { LanguageText } from "@/components/LanguageText";
import { useLanguage } from "@/lib/use-language";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const lang = useLanguage();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      subject: "Nová správa z mediationfirst.sk"
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-green-deep/10 bg-white p-8 text-center shadow-line">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-green-deep/10 text-2xl">✓</div>
        <h3 className="mt-5 font-serif text-2xl text-green-forest">
          {lang === "EN" ? "Message sent!" : "Správa odoslaná!"}
        </h3>
        <p className="mt-3 text-muted">
          {lang === "EN" ? "Thank you, we will get back to you shortly." : "Ďakujeme, ozveme sa Vám čoskoro."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-green-deep/10 bg-white p-6 shadow-line sm:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-green-forest">
          <LanguageText sk="Meno" en="Name" />
          <input required className="focus-ring rounded-xl border border-green-deep/15 bg-ivory px-4 py-3 text-base text-charcoal" name="name" type="text" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-green-forest">
          Email
          <input required className="focus-ring rounded-xl border border-green-deep/15 bg-ivory px-4 py-3 text-base text-charcoal" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-green-forest">
          <LanguageText sk="Telefón" en="Phone" />
          <input className="focus-ring rounded-xl border border-green-deep/15 bg-ivory px-4 py-3 text-base text-charcoal" name="phone" type="tel" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-green-forest">
          <LanguageText sk="Správa" en="Message" />
          <textarea required className="focus-ring min-h-40 rounded-xl border border-green-deep/15 bg-ivory px-4 py-3 text-base text-charcoal" name="message" />
        </label>
        {status === "error" && (
          <p className="text-sm font-semibold text-red-600">
            <LanguageText sk="Niečo sa pokazilo. Skúste to prosím znova." en="Something went wrong. Please try again." />
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="focus-ring inline-flex w-fit items-center justify-center rounded-xl bg-green-deep px-6 py-3 text-sm font-bold text-white transition hover:bg-green-forest disabled:opacity-60"
        >
          {status === "sending"
            ? (lang === "EN" ? "Sending…" : "Odosielam…")
            : <LanguageText sk="Odoslať" en="Send" />}
        </button>
      </div>
    </form>
  );
}
