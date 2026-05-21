import { prices } from "@/data/pages";
import { LanguageText } from "@/components/LanguageText";

export function PriceList() {
  const featured = prices[0];
  const rest = prices.slice(1);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-green-deep p-6 text-white sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-pale">
          <LanguageText sk={featured.service} en={featured.serviceEn} />
        </p>
        <p className="mt-3 font-serif text-5xl text-gold-pale">
          <LanguageText sk={featured.price} en={featured.priceEn} />
        </p>
      </div>

      <div className="rounded-2xl border border-green-deep/10 bg-white/80">
        {rest.map((item) => (
          <div key={item.service} className="border-b border-green-deep/10 p-5 last:border-b-0">
            <p className="font-semibold text-green-forest">
              <LanguageText sk={item.service} en={item.serviceEn} />
            </p>
            <p className="mt-1 text-sm text-muted">
              <LanguageText sk={item.price} en={item.priceEn} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
