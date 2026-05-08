import { Check } from "lucide-react";

export function BenefitItem({ text, index }: { text: string; index?: number }) {
  if (index === undefined) {
    return (
      <div className="flex gap-4 border-t border-green-deep/10 py-5">
        <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-muted/50 text-gold-muted">
          <Check className="h-4 w-4" aria-hidden />
        </span>
        <p className="text-lg font-semibold text-green-forest">{text}</p>
      </div>
    );
  }

  return (
    <div className="group rounded-2xl border border-green-deep/10 bg-white/80 p-5 transition hover:border-gold-muted/60 hover:bg-white">
      <div className="flex items-start justify-between gap-2">
        <span className="font-serif text-2xl text-gold-muted">{String(index + 1).padStart(2, "0")}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-muted/50 text-gold-muted">
          <Check className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
      <p className="mt-5 text-sm font-semibold leading-6 text-green-forest">{text}</p>
    </div>
  );
}
