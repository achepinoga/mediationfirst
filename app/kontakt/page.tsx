import { Mail, MapPin, Phone, Star } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { LanguageText } from "@/components/LanguageText";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow={<LanguageText sk="Kontakt" en="Contact" />}
              title="Mediationfirst"
              text={<LanguageText sk="Kontaktujte nás telefonicky, emailom alebo cez formulár nižšie." en="Contact us by phone, email or via the form below." />}
            />
            <div className="mt-10 space-y-5">
              <div className="rounded-2xl border border-green-deep/10 bg-white/80 p-6">
                <p className="flex items-center gap-2 font-semibold text-green-forest">
                  <MapPin className="h-4 w-4 text-gold-muted" aria-hidden />
                  <LanguageText sk="Adresa" en="Address" />: {site.address}
                </p>
              </div>
              {site.contacts.map((contact) => (
                <div key={contact.email} className="rounded-2xl border border-green-deep/10 bg-white/80 p-6">
                  <h2 className="font-serif text-2xl text-green-forest">{contact.name}</h2>
                  <div className="mt-4 space-y-2 text-sm font-semibold text-green-deep">
                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="focus-ring flex w-fit items-center gap-2 rounded-md hover:text-green-forest">
                      <Phone className="h-4 w-4 text-gold-muted" aria-hidden />
                      {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}`} className="focus-ring flex w-fit items-center gap-2 rounded-md hover:text-green-forest">
                      <Mail className="h-4 w-4 text-gold-muted" aria-hidden />
                      {contact.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="mt-12 rounded-2xl border border-gold-muted/35 bg-green-deep p-6 text-white sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-pale">
                <LanguageText sk="Google recenzie" en="Google reviews" />
              </p>
              <h2 className="mt-2 font-serif text-2xl">
                <LanguageText sk="Zanechajte nám recenziu" en="Leave us a review" />
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/75">
                <LanguageText sk="Vaša spätná väzba nám pomáha zlepšovať naše služby a pomáha ďalším klientom." en="Your feedback helps us improve our services and helps other clients." />
              </p>
            </div>
            <a
              href="https://g.page/r/REPLACE_WITH_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-green-forest transition hover:bg-gold-pale"
            >
              <Star className="h-4 w-4 text-gold-muted" aria-hidden />
              <LanguageText sk="Ohodnotiť na Google" en="Rate us on Google" />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 font-serif text-2xl text-green-forest">
            <LanguageText sk="Kde nás nájdete" en="Where to find us" /></h2>
          <div className="overflow-hidden rounded-2xl border border-green-deep/10 shadow-line">
            <iframe
              src="https://maps.google.com/maps?q=Dobrovičova+16,+Bratislava,+Slovakia&output=embed&zoom=16"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mediationfirst – Dobrovičova 16, Bratislava"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
