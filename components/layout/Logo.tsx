import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label="Mediationfirst domov">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-muted/60 bg-ivory text-sm font-bold text-green-deep">
        MF
      </span>
      <span className="leading-none">
        <span className="block font-serif text-xl text-green-forest">Mediationfirst</span>
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gold-muted">mediujte s(právne)</span>
      </span>
    </Link>
  );
}
