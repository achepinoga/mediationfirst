import { CalendarDays, MapPin, Scale } from "lucide-react";
import { Button } from "@/components/ui/Button";

const details = [
  { label: "1× mesačne", icon: CalendarDays },
  { label: "Bratislava Nové Mesto", icon: MapPin },
  { label: "Mediácia a právne poradenstvo", icon: Scale }
];

export function MunicipalityServiceBanner() {
  return (
    <section className="rounded-2xl border border-gold-muted/35 bg-green-deep p-6 text-white sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-pale">Nová aktivita</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Mediácia a právne poradenstvo pre Bratislava Nové Mesto
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
            Raz mesačne poskytujeme mediáciu a právne poradenstvo v spolupráci s miestnym úradom Bratislava Nové Mesto.
          </p>
        </div>
        <div className="space-y-4">
          {details.map((detail) => (
            <div key={detail.label} className="flex items-center gap-3 border-t border-white/15 pt-4 text-sm font-semibold">
              <detail.icon className="h-4 w-4 text-gold-pale" aria-hidden />
              {detail.label}
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-3">
            <Button href="/kontakt" variant="secondary" className="bg-white text-green-forest">
              Kontaktovať nás
            </Button>
            <Button href="/mediacne-sluzby" variant="quiet" className="text-white hover:text-gold-pale">
              Zistiť viac
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
