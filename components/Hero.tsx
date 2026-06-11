import { Award, Languages, Scale } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const trust = [
  { label: "Akreditované mediátorky", icon: Award },
  { label: "Právnická prax", icon: Scale },
  { label: "Slovensky aj anglicky", icon: Languages }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-green-deep/10">
      <Container className="flex items-center py-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-muted">Objavte výhody mediácie</p>
          <h1 className="font-serif text-5xl leading-[1.05] text-green-forest sm:text-6xl lg:text-7xl">
            Mediujte s(právne)
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-muted">
            Mediátorky z Mediationfirst, ako neutrálna strana s odbornou mediátorskou, ako aj právnickou praxou, Vám
            pomôžu nájsť riešenie Vášho sporu.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/kontakt">Kontaktujte nás</Button>
            <Button href="/ako-prebieha-mediacia" variant="secondary">
              Ako prebieha mediácia
            </Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trust.map((item) => (
              <div key={item.label} className="flex items-center gap-3 border-t border-gold-muted/35 pt-4 text-sm font-semibold text-green-forest">
                <item.icon className="h-4 w-4 text-gold-muted" aria-hidden />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
