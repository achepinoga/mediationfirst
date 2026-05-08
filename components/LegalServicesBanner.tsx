import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function LegalServicesBanner() {
  return (
    <section className="paper-panel rounded-2xl border border-green-deep/10 p-7 sm:p-9">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="mb-5 h-px w-20 bg-gold-muted" />
          <h2 className="font-serif text-3xl text-green-forest">Poskytujeme aj právne služby</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Okrem mediácie poskytujeme aj právne služby. Samostatná webová stránka právnych služieb bude dostupná na
            mills.sk a bude odkazovať späť na Mediationfirst.
          </p>
        </div>
        <Button href={site.legalUrl} variant="primary" className="gap-2">
          Prejsť na právne služby <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </section>
  );
}
