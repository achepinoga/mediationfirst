import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { LanguageText } from "@/components/LanguageText";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactCTA() {
  return (
    <section className="bg-white/50 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={<LanguageText sk="Kontakt" en="Contact" />}
              title={<LanguageText sk="Potrebujete vyriešiť spor pokojnou cestou?" en="Do you need to resolve a dispute calmly?" />}
              text={<LanguageText sk="Napíšte nám alebo zavolajte. Najprv si stručne prejdeme Vašu situáciu a navrhneme ďalší postup." en="Write to us or call us. We will first briefly review your situation and suggest the next steps." />}
            />
            <Button href="/kontakt" className="mt-6">
              <LanguageText sk="Napísať cez formulár" en="Write via form" />
            </Button>
          </div>
          <div className="grid gap-4">
            {site.contacts.map((contact) => (
              <div key={contact.email} className="rounded-2xl border border-green-deep/10 bg-white p-6 shadow-line">
                <h3 className="font-serif text-2xl text-green-forest">{contact.name}</h3>
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-green-deep">
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="focus-ring inline-flex items-center gap-2 rounded-md hover:text-green-forest">
                    <Phone className="h-4 w-4 text-gold-muted" aria-hidden />
                    {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}`} className="focus-ring inline-flex items-center gap-2 rounded-md hover:text-green-forest">
                    <Mail className="h-4 w-4 text-gold-muted" aria-hidden />
                    {contact.email}
                  </a>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-green-deep/10 bg-white p-6 text-green-forest shadow-line">
              <p className="flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 text-gold-muted" aria-hidden />
                {site.address}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
