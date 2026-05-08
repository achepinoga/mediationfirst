import { notFound } from "next/navigation";
import { BenefitItem } from "@/components/BenefitItem";
import { ContactCTA } from "@/components/ContactCTA";
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

const routeTitles: Record<string, { title: string; subtitle: string }> = {
  "nas-tim": {
    title: "Náš tím",
    subtitle: "Mediáciu poskytujú akreditované mediátorky s právnickou praxou."
  },
  "ako-prebieha-mediacia": {
    title: "Ako prebieha mediácia",
    subtitle: "Prehľadný proces od prvého kontaktu po uzavretie mediačnej dohody."
  },
  cennik: {
    title: "Cenník",
    subtitle: "Transparentné sadzby a podmienky odmeny mediátora."
  },
  "vyhody-mediacie": {
    title: "Výhody mediácie",
    subtitle: "Dôverná, rýchla a flexibilná cesta k dohode."
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

  return (
    <>
      <section className="border-b border-green-deep/10 py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">Mediationfirst</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-green-forest">{page?.title ?? route.title}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-muted">{page?.subtitle ?? route.subtitle}</p>
        </Container>
      </section>

      {page ? (
        <section className="py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionHeading title={page.subtitle} eyebrow={page.title} />
              <div className="space-y-6 text-lg leading-9 text-muted">
                {page.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
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
              <p>Odmena mediátora je stanovená na základe dohody medzi mediátorom a stranami sporu.</p>
              <p>Platobné podmienky sú súčasťou dohody o začatí mediácie. Hodinová sadzba sa účtuje za každú začatú hodinu.</p>
              <p>Spísanie mediačnej dohody nie je zahrnuté v cene mediácie, pokiaľ sa strany s mediátorom nedohodnú inak.</p>
            </div>
          </Container>
        </section>
      ) : null}

      {params.slug === "vyhody-mediacie" ? (
        <section className="py-20">
          <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Prečo mediácia"
              title="Výhody, ktoré majú praktický význam"
              text="Mediácia je navrhnutá tak, aby stranám pomohla nájsť riešenie bez zbytočného eskalovania konfliktu."
            />
            <div>
              {benefits.map((benefit) => (
                <BenefitItem key={benefit} text={benefit} />
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
