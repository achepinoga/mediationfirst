import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ title }: { title: string }) {
  return (
    <div className="group rounded-2xl border border-green-deep/10 bg-white/75 p-5 transition hover:border-gold-muted/60 hover:bg-white">
      <div className="mb-8 h-px w-12 bg-gold-muted/70 transition group-hover:w-20" />
      <div className="flex items-end justify-between gap-4">
        <h3 className="font-serif text-xl text-green-forest">{title}</h3>
        <ArrowUpRight className="h-4 w-4 text-gold-muted" aria-hidden />
      </div>
    </div>
  );
}
