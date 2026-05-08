import { prices } from "@/data/pages";

export function PriceList() {
  return (
    <div className="rounded-2xl border border-green-deep/10 bg-white/80">
      {prices.map((item, index) => (
        <div key={item} className="grid gap-4 border-b border-green-deep/10 p-5 last:border-b-0 md:grid-cols-[80px_1fr]">
          <span className="font-serif text-2xl text-gold-muted">{String(index + 1).padStart(2, "0")}</span>
          <p className="text-lg font-semibold leading-7 text-green-forest">{item}</p>
        </div>
      ))}
    </div>
  );
}
