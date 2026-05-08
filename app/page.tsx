import { ArticleCard } from "@/components/ArticleCard";
import { BenefitItem } from "@/components/BenefitItem";
import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { LegalServicesBanner } from "@/components/LegalServicesBanner";
import { MunicipalityServiceBanner } from "@/components/MunicipalityServiceBanner";
import { ServiceCard } from "@/components/ServiceCard";
import { TeamCard } from "@/components/TeamCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";
import { benefits, disputeCategories } from "@/data/pages";
import { team } from "@/data/team";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">Úvod</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-green-forest">
                Máte spor, ktorý Vás ťaží a dostali ste sa v jeho riešení do slepej uličky?
              </h2>
              <p className="mt-5 font-serif text-2xl leading-snug text-green-deep">
                Chcete ho vyriešiť, nechcete sa však súdiť?
              </p>
            </div>
            <div className="space-y-5 border-l border-gold-muted/35 pl-7 text-lg leading-8 text-muted">
              <p>
                Mediácia je mimosúdne konanie, v ktorom strany riešia spor za účasti a pomoci nezávislého a nestranného
                mediátora, s cieľom dosiahnuť dohodu akceptovateľnú pre obidve strany.
              </p>
              <p>
                Mediátorky z Mediationfirst vytvárajú pokojný a dôverný priestor, v ktorom môžu strany pomenovať svoje
                potreby, porozumieť právnemu rámcu a hľadať praktické riešenie bez zdĺhavého súdneho konania.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/45 py-20">
        <Container>
          <SectionHeading
            eyebrow="Spory"
            title="Oblasti, v ktorých mediácia pomáha"
            text="Prehľad najčastejších typov sporov, pri ktorých môže byť mediácia efektívnym a dôverným riešením."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {disputeCategories.map((category) => (
              <ServiceCard key={category} title={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <MunicipalityServiceBanner />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading eyebrow="Tím" title="Akreditované mediátorky s právnickou praxou" />
            <Button href="/nas-tim" variant="secondary">
              Spoznajte náš tím
            </Button>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {team.map((member) => (
              <TeamCard key={member.email} member={member} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-green-forest py-20 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-pale">Výhody mediácie</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">Riešenie, ktoré necháva stranám kontrolu.</h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                Výhody mediácie vychádzajú z dobrovoľnosti, dôvernosti a možnosti vytvoriť dohodu prispôsobenú reálnej
                situácii strán.
              </p>
            </div>
            <div className="[&_p]:text-white [&_span]:border-gold-pale/45">
              {benefits.slice(0, 6).map((benefit) => (
                <BenefitItem key={benefit} text={benefit} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Články"
              title="Čistý článkový prehľad bez vizuálneho preťaženia"
              text="Namiesto veľkých ilustračných fotografií články pracujú s typografiou, dátumom a jasnou témou."
            />
            <Button href="/clanky" variant="secondary">
              Všetky články
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {articles.slice(0, 4).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <LegalServicesBanner />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
