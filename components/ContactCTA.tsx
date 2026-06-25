import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { LanguageText } from "@/components/LanguageText";
import { Container } from "@/components/ui/Container";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <Image
        src="/images/castle.jpg"
        alt=""
        fill
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-green-forest/80" aria-hidden />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-pale">
              <LanguageText sk="Kontakt" en="Contact" />
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
              <LanguageText sk="Potrebujete vyriešiť spor pokojnou cestou?" en="Do you need to resolve a dispute calmly?" />
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              <LanguageText sk="Napíšte nám alebo zavolajte. Najprv si stručne prejdeme Vašu situáciu a navrhneme ďalší postup." en="Write to us or call us. We will first briefly review your situation and suggest the next steps." />
            </p>
            <Button href="/kontakt" className="mt-6 bg-white text-green-forest hover:bg-ivory">
              <LanguageText sk="Napísať cez formulár" en="Write via form" />
            </Button>
          </div>
          <div className="grid gap-4">
            {site.contacts.map((contact) => (
              <div key={contact.email} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="font-serif text-2xl text-white">{contact.name}</h3>
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-white/90">
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="focus-ring inline-flex items-center gap-2 rounded-md hover:text-white">
                    <Phone className="h-4 w-4 text-gold-pale" aria-hidden />
                    {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}`} className="focus-ring inline-flex items-center gap-2 rounded-md hover:text-white">
                    <Mail className="h-4 w-4 text-gold-pale" aria-hidden />
                    {contact.email}
                  </a>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <MapPin className="h-4 w-4 text-gold-pale" aria-hidden />
                {site.address}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
