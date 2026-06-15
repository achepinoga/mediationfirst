import { ContactCTA } from "@/components/ContactCTA";
import { MunicipalityServiceBanner } from "@/components/MunicipalityServiceBanner";
import { TeamCard } from "@/components/TeamCard";
import type { TeamMember } from "@/components/TeamCard";
import { LanguageText } from "@/components/LanguageText";
import { Container } from "@/components/ui/Container";
import { team as staticTeam } from "@/data/team";
import { client } from "@/sanity/lib/client";
import { teamQuery } from "@/sanity/lib/queries";

async function getTeam(): Promise<TeamMember[]> {
  const sanityTeam: TeamMember[] = await client
    .fetch(teamQuery, {}, { cache: "no-store" })
    .catch(() => []);
  if (sanityTeam.length > 0) return sanityTeam;
  return staticTeam;
}

export default async function TeamPage() {
  const team = await getTeam();

  return (
    <>
      <section className="border-b border-green-deep/10 py-16">
        <Container>
          <div className="w-full">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">Mediationfirst</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-green-forest">
              <LanguageText sk="Náš tím" en="Our team" />
            </h1>
            <p className="mt-5 text-xl leading-8 text-muted">
              <LanguageText
                sk="Mediáciu poskytujú akreditované mediátorky s právnickou praxou."
                en="Mediation is provided by accredited mediators with legal experience."
              />
            </p>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container className="grid gap-6">
          {team.map((member) => (
            <TeamCard key={member.email} member={member} />
          ))}
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <MunicipalityServiceBanner />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
