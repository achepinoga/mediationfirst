import { notFound } from "next/navigation";
import { BenefitItem } from "@/components/BenefitItem";
import { ContactCTA } from "@/components/ContactCTA";
import { LanguageText } from "@/components/LanguageText";
import { LegalServicesBanner } from "@/components/LegalServicesBanner";
import { MunicipalityServiceBanner } from "@/components/MunicipalityServiceBanner";
import { PriceList } from "@/components/PriceList";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServiceCard } from "@/components/ServiceCard";
import { TeamCard } from "@/components/TeamCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits, disputeCategories, staticPages } from "@/data/pages";
import { team } from "@/data/team";

const routeTitles: Record<string, { title: string; titleEn: string; subtitle: string; subtitleEn: string }> = {
  "nas-tim": {
    title: "Náš tím",
    titleEn: "Our team",
    subtitle: "Mediáciu poskytujú akreditované mediátorky s právnickou praxou.",
    subtitleEn: "Mediation is provided by accredited mediators with legal experience."
  },
  "ako-prebieha-mediacia": {
    title: "Ako prebieha mediácia",
    titleEn: "Mediation process",
    subtitle: "Prehľadný proces od prvého kontaktu po uzavretie mediačnej dohody.",
    subtitleEn: "A clear process from the first contact to the conclusion of the mediation agreement."
  },
  cennik: {
    title: "Cenník",
    titleEn: "Price list",
    subtitle: "Transparentné sadzby a podmienky odmeny mediátora.",
    subtitleEn: "Transparent rates and conditions for the mediator's fee."
  },
  "vyhody-mediacie": {
    title: "Výhody mediácie",
    titleEn: "Benefits of mediation",
    subtitle: "Dôverná, rýchla a flexibilná cesta k dohode.",
    subtitleEn: "A confidential, fast and flexible path to agreement."
  }
};

export function generateStaticParams() {
  return [
    ...Object.keys(staticPages).map((slug) => ({ slug })),
    { slug: "nas-tim" },
    { slug: "ako-prebieha-mediacia" },
    { slug: "cennik" },
    { slug: "vyhody-mediacie" }
  ];
}

export default function StaticPage({ params }: { params: { slug: string } }) {
  const page = staticPages[params.slug as keyof typeof staticPages];
  const route = routeTitles[params.slug];

  if (!page && !route) {
    notFound();
  }

  const title = page?.title ?? route?.title ?? "";
  const titleEn = page?.titleEn ?? route?.titleEn ?? "";
  const subtitle = page?.subtitle ?? route?.subtitle ?? "";
  const subtitleEn = page?.subtitleEn ?? route?.subtitleEn ?? "";

  return (
    <>
      <section className="border-b border-green-deep/10 py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">Mediationfirst</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-green-forest">
            <LanguageText sk={title} en={titleEn} />
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-muted">
            <LanguageText sk={subtitle} en={subtitleEn} />
          </p>
        </Container>
      </section>

      {page ? (
        <section className="py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionHeading
                title={<LanguageText sk={page.subtitle} en={page.subtitleEn} />}
                eyebrow={<LanguageText sk={page.title} en={page.titleEn} />}
              />
              <div className="space-y-6 text-lg leading-9 text-muted">
                {page.paragraphs.map((paragraph, i) => (
                  <p key={paragraph}>
                    <LanguageText sk={paragraph} en={page.paragraphsEn[i]} />
                  </p>
                ))}
              </div>
            </div>
            {params.slug === "spory-riesene-mediaciou" || params.slug === "mediacne-sluzby" ? (
              <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {disputeCategories.map((category) => (
                  <ServiceCard key={category} title={category} />
                ))}
              </div>
            ) : null}
            {params.slug === "mediacne-sluzby" ? (
              <div className="mt-12">
                <MunicipalityServiceBanner />
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      {params.slug === "nas-tim" ? (
        <section className="py-20">
          <Container className="grid gap-6">
            {team.map((member) => (
              <TeamCard key={member.email} member={member} />
            ))}
          </Container>
        </section>
      ) : null}

      {params.slug === "ako-prebieha-mediacia" ? (
        <section className="py-20">
          <Container>
            <ProcessTimeline />
          </Container>
        </section>
      ) : null}

      {params.slug === "cennik" ? (
        <section className="py-20">
          <Container>
            <PriceList />
            <div className="mt-8 space-y-4 rounded-2xl border border-green-deep/10 bg-white/80 p-6 text-muted">
              <p>
                <LanguageText
                  sk="Odmena mediátora je stanovená na základe dohody medzi mediátorom a stranami sporu."
                  en="The mediator's fee is determined by agreement between the mediator and the parties to the dispute."
                />
              </p>
              <p>
                <LanguageText
                  sk="Platobné podmienky sú súčasťou dohody o začatí mediácie. Hodinová sadzba sa účtuje za každú začatú hodinu."
                  en="The terms of payment are part of the agreement to commence mediation. The hourly rate is charged for every hour started."
                />
              </p>
              <p>
                <LanguageText
                  sk="Spísanie mediačnej dohody nie je zahrnuté v cene mediácie, pokiaľ sa strany s mediátorom nedohodnú inak."
                  en="Drafting the mediation agreement is not included in the price of mediation, unless the parties agree otherwise with the mediator."
                />
              </p>
            </div>
          </Container>
        </section>
      ) : null}

      {params.slug === "vyhody-mediacie" ? (
        <section className="py-20">
          <Container>
            <SectionHeading
              align="center"
              eyebrow={<LanguageText sk="Prečo mediácia" en="Why mediation" />}
              title={<LanguageText sk="Výhody, ktoré majú praktický význam" en="Benefits with practical significance" />}
              text={
                <LanguageText
                  sk="Mediácia je navrhnutá tak, aby stranám pomohla nájsť riešenie bez zbytočného eskalovania konfliktu."
                  en="Mediation is designed to help the parties find a solution without unnecessarily escalating the conflict."
                />
              }
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, i) => (
                <BenefitItem key={benefit} text={benefit} index={i} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-20">
        <Container>
          <LegalServicesBanner />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
