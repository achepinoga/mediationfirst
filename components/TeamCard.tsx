import { Mail, Phone } from "lucide-react";
import type { team } from "@/data/team";

type Member = (typeof team)[number];

export function TeamCard({ member }: { member: Member }) {
  return (
    <article className="grid gap-6 rounded-2xl border border-green-deep/10 bg-white/80 p-6 md:grid-cols-[160px_1fr]">
      <div className="min-h-44 rounded-xl border border-gold-muted/25 bg-[linear-gradient(145deg,#efe8da,#ffffff)] p-5">
        <div className="h-full rounded-full border border-gold-muted/40 bg-ivory" aria-label={`Portrét placeholder ${member.name}`} />
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-muted">{member.role}</p>
        <h2 className="mt-2 font-serif text-3xl text-green-forest">{member.name}</h2>
        <p className="mt-4 leading-7 text-muted">{member.registration}</p>
        <p className="mt-3 leading-7 text-muted">{member.summary}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-green-deep">
          <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="focus-ring inline-flex items-center gap-2 rounded-md hover:text-green-forest">
            <Phone className="h-4 w-4 text-gold-muted" aria-hidden />
            {member.phone}
          </a>
          <a href={`mailto:${member.email}`} className="focus-ring inline-flex items-center gap-2 rounded-md hover:text-green-forest">
            <Mail className="h-4 w-4 text-gold-muted" aria-hidden />
            {member.email}
          </a>
        </div>
      </div>
    </article>
  );
}
