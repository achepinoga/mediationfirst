import { Mail, MapPin, Phone } from "lucide-react";
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
              eyebrow="Kontakt"
              title="Mediationfirst"
              text="Kontaktujte nás telefonicky, emailom alebo cez formulár. Formulár je v prototype iba vizuálny."
            />
            <div className="mt-10 space-y-5">
              <div className="rounded-2xl border border-green-deep/10 bg-white/80 p-6">
                <p className="flex items-center gap-2 font-semibold text-green-forest">
                  <MapPin className="h-4 w-4 text-gold-muted" aria-hidden />
                  Adresa: {site.address}
                </p>
              </div>
              {site.contacts.map((contact) => (
                <div key={contact.email} className="rounded-2xl border border-green-deep/10 bg-white/80 p-6">
                  <h2 className="font-serif text-2xl text-green-forest">{contact.name}</h2>
                  <div className="mt-4 space-y-2 text-sm font-semibold text-green-deep">
                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="focus-ring flex w-fit items-center gap-2 rounded-md hover:text-green-forest">
                      <Phone className="h-4 w-4 text-gold-muted" aria-hidden />
                      TEL: {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}`} className="focus-ring flex w-fit items-center gap-2 rounded-md hover:text-green-forest">
                      <Mail className="h-4 w-4 text-gold-muted" aria-hidden />
                      Email: {contact.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-2xl border border-green-deep/10 bg-white p-6 shadow-line sm:p-8">
            {/* TODO: Integrate form submission with email service or CMS backend. */}
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-green-forest">
                Meno
                <input className="focus-ring rounded-xl border border-green-deep/15 bg-ivory px-4 py-3 text-base text-charcoal" name="name" type="text" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-green-forest">
                Email
                <input className="focus-ring rounded-xl border border-green-deep/15 bg-ivory px-4 py-3 text-base text-charcoal" name="email" type="email" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-green-forest">
                Telefón
                <input className="focus-ring rounded-xl border border-green-deep/15 bg-ivory px-4 py-3 text-base text-charcoal" name="phone" type="tel" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-green-forest">
                Správa
                <textarea className="focus-ring min-h-40 rounded-xl border border-green-deep/15 bg-ivory px-4 py-3 text-base text-charcoal" name="message" />
              </label>
              <button
                type="button"
                className="focus-ring inline-flex w-fit items-center justify-center rounded-xl bg-green-deep px-6 py-3 text-sm font-bold text-white transition hover:bg-green-forest"
              >
                Odoslať
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 font-serif text-2xl text-green-forest">Kde nás nájdete</h2>
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
