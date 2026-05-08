import Link from "next/link";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-green-deep/10 bg-green-forest text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="[&_span]:text-white">
              <Logo />
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">{site.description}</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-pale">Kontakt</h2>
            <div className="mt-4 space-y-4 text-sm text-white/76">
              {site.contacts.map((contact) => (
                <p key={contact.email}>
                  <span className="block font-semibold text-white">{contact.name}</span>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-gold-pale">
                    {contact.phone}
                  </a>
                  <span className="mx-2 text-white/35">/</span>
                  <a href={`mailto:${contact.email}`} className="hover:text-gold-pale">
                    {contact.email}
                  </a>
                </p>
              ))}
              <p>{site.address}</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-pale">Menu</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-white/76 hover:text-gold-pale">
                  {item.label}
                </Link>
              ))}
              <Link href={site.legalUrl} target="_blank" rel="noreferrer" className="text-white/76 hover:text-gold-pale">
                Právne služby
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/55">
          © {new Date().getFullYear()} Mediationfirst. Prototyp redesignu.
        </div>
      </Container>
    </footer>
  );
}
