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
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-muted">Objavte výhody mediácie</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-green-forest sm:text-6xl lg:text-7xl">
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
        <div className="relative">
          <div className="architectural-texture min-h-[430px] overflow-hidden rounded-2xl border border-green-deep/10 shadow-line">
            <div className="flex h-full min-h-[430px] flex-col justify-end p-8 text-white">
              <div className="max-w-sm border-l border-gold-pale/70 pl-5">
                <p className="font-serif text-2xl leading-snug">Pokojný priestor pre dohodu, nie konfrontáciu.</p>
                <p className="mt-4 text-sm leading-6 text-white/72">Placeholder vizuál: architektúra kancelárie, jemné línie, prirodzené svetlo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
