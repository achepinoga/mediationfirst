import Link from "next/link";
import { FileText } from "lucide-react";
import type { Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-green-deep/10 bg-white/80 p-6 transition hover:border-gold-muted/60 hover:bg-white">
      <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-muted">
        <span>{article.category}</span>
        <FileText className="h-4 w-4" aria-hidden />
      </div>
      <h2 className="mt-5 font-serif text-2xl leading-snug text-green-forest">
        <Link href={`/clanky/${article.slug}`} className="focus-ring rounded-md hover:text-green-deep">
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm font-semibold text-muted">{article.date}</p>
      <p className="mt-4 flex-1 leading-7 text-muted">{article.excerpt}</p>
      <Link
        href={`/clanky/${article.slug}`}
        className="focus-ring mt-6 inline-flex w-fit rounded-md text-sm font-bold text-green-deep underline decoration-gold-muted/50 underline-offset-4"
      >
        Čítať viac
      </Link>
    </article>
  );
}
