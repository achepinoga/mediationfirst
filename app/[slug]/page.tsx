import Image from "next/image";
import { notFound } from "next/navigation";
import { BenefitItem } from "@/components/BenefitItem";
import { ContactCTA } from "@/components/ContactCTA";
import { LanguageText } from "@/components/LanguageText";
import { LegalServicesBanner } from "@/components/LegalServicesBanner";
import { MunicipalityServiceBanner } from "@/components/MunicipalityServiceBanner";
import { PriceList } from "@/components/PriceList";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServiceCard } from "@/components/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits, disputeCategories, staticPages } from "@/data/pages";

const routeTitles: Record<string, { title: string; titleEn: string; subtitle: string; subtitleEn: string }> = {
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

const pageImages: Record<string, { src: string; alt: string; objectPosition?: string }> = {
  "o-nas": { src: "/images/about-office.png", alt: "Kancelária Mediationfirst" },
  "co-je-mediacia": { src: "/images/mediation-room.png", alt: "Mediačná miestnosť" },
  "ako-prebieha-mediacia": { src: "/images/process-office.png", alt: "Mediačná zasadacia miestnosť" },
  cennik: { src: "/images/office-round-table.png", alt: "Moderná kancelária" },
  "vyhody-mediacie": { src: "/images/benefits-office.png", alt: "Pokojná kancelária", objectPosition: "center 70%" }
};

export function generateStaticParams() {
  return [
    ...Object.keys(staticPages).map((slug) => ({ slug })),
    { slug: "ako-prebieha-mediacia" },
    { slug: "cennik" },
    { slug: "vyhody-mediacie" },
    { slug: "vratenie-sudnych-poplatkov" },
    { slug: "pravne-ucinky-mediacie" }
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
  const pageImage = pageImages[params.slug];
  const isFullBleed = ["cennik", "vyhody-mediacie", "co-je-mediacia", "o-nas", "ako-prebieha-mediacia"].includes(params.slug) && pageImage;

  return (
    <>
      {isFullBleed && pageImage ? (
        <section className="relative flex min-h-[340px] items-center overflow-hidden border-b border-green-deep/10">
          <Image src={pageImage.src} alt={pageImage.alt} fill className="object-cover" style={pageImage.objectPosition ? { objectPosition: pageImage.objectPosition } : undefined} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-beige/95 via-beige/60 to-transparent" aria-hidden />
          <Container className="relative z-10 py-16">
            <div className={["vyhody-mediacie", "ako-prebieha-mediacia", "cennik"].includes(params.slug) ? "max-w-3xl" : "mx-auto max-w-3xl"}>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">Mediationfirst</p>
              <h1 className="mt-4 font-serif text-5xl leading-tight text-green-forest">
                <LanguageText sk={title} en={titleEn} />
              </h1>
              <p className="mt-5 text-xl leading-8 text-green-deep">
                <LanguageText sk={subtitle} en={subtitleEn} />
              </p>
            </div>
          </Container>
        </section>
      ) : (
        <section className="border-b border-green-deep/10 py-16">
          <Container>
            {pageImage ? (
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
                <div className="mx-auto max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">Mediationfirst</p>
                  <h1 className="mt-4 font-serif text-5xl leading-tight text-green-forest">
                    <LanguageText sk={title} en={titleEn} />
                  </h1>
                  <p className="mt-5 text-xl leading-8 text-green-deep">
                    <LanguageText sk={subtitle} en={subtitleEn} />
                  </p>
                </div>
                <div className="relative hidden h-[300px] overflow-hidden rounded-xl lg:block">
                  <Image src={pageImage.src} alt={pageImage.alt} fill className="object-cover" priority />
                </div>
              </div>
            ) : (
              <div className="mx-auto max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">Mediationfirst</p>
                <h1 className="mt-4 font-serif text-5xl leading-tight text-green-forest">
                  <LanguageText sk={title} en={titleEn} />
                </h1>
                <p className="mt-5 text-xl leading-8 text-green-deep">
                  <LanguageText sk={subtitle} en={subtitleEn} />
                </p>
              </div>
            )}
          </Container>
        </section>
      )}

      {page ? (
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-lg leading-9 text-muted">
              {page.paragraphs.map((paragraph, i) => (
                <p key={paragraph}>
                  <LanguageText sk={paragraph} en={page.paragraphsEn[i]} />
                </p>
              ))}
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
            <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-stretch">
              <div className="relative min-h-[200px] overflow-hidden rounded-xl">
                <Image
                  src="/images/mediationfirst-1.jpg"
                  alt="Dohoda — podanie rúk"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <SectionHeading
                  eyebrow={<LanguageText sk="Prečo mediácia" en="Why mediation" />}
                  title={<LanguageText sk="Výhody, ktoré majú praktický význam" en="Benefits with practical significance" />}
                  text={
                    <LanguageText
                      sk="Mediácia je navrhnutá tak, aby stranám pomohla nájsť riešenie bez zbytočného eskalovania konfliktu."
                      en="Mediation is designed to help the parties find a solution without unnecessarily escalating the conflict."
                    />
                  }
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <BenefitItem key={benefit} text={benefit} />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-20">
        <Container>
          {params.slug === "o-nas" ? <LegalServicesBanner /> : <MunicipalityServiceBanner />}
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
