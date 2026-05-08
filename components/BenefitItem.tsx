import { Check } from "lucide-react";

export function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex gap-4 border-t border-green-deep/10 py-5">
      <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-muted/50 text-gold-muted">
        <Check className="h-4 w-4" aria-hidden />
      </span>
      <p className="text-lg font-semibold text-green-forest">{text}</p>
    </div>
  );
}
