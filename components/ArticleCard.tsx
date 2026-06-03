import Image from "next/image";
import Link from "next/link";
import { LanguageText } from "@/components/LanguageText";

export type ArticleListItem = {
  slug: string;
  title: string;
  titleEn?: string;
  date: string;
  category: string;
  categoryEn?: string;
  excerpt: string;
  excerptEn?: string;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
};

export function ArticleCard({ article }: { article: ArticleListItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-green-deep/10 bg-white/80 transition hover:border-gold-muted/60 hover:bg-white">
      {article.coverImageUrl ? (
        <div className="relative h-44 w-full shrink-0">
          <Image
            src={article.coverImageUrl}
            alt={article.coverImageAlt ?? article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-forest/30 to-transparent" />
          <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-[0.18em] text-white drop-shadow">
            <LanguageText sk={article.category} en={article.categoryEn ?? article.category} />
          </span>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        {!article.coverImageUrl ? (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-muted">
            <LanguageText sk={article.category} en={article.categoryEn ?? article.category} />
          </p>
        ) : null}
        <h2 className="font-serif text-2xl leading-snug text-green-forest">
          <Link href={`/clanky/${article.slug}`} className="focus-ring rounded-md hover:text-green-deep">
            <LanguageText sk={article.title} en={article.titleEn ?? article.title} />
          </Link>
        </h2>
        <p className="mt-3 text-sm font-semibold text-muted">{article.date}</p>
        <p className="mt-4 flex-1 leading-7 text-muted">
          <LanguageText sk={article.excerpt} en={article.excerptEn ?? article.excerpt} />
        </p>
        <Link
          href={`/clanky/${article.slug}`}
          className="focus-ring mt-6 inline-flex w-fit rounded-md text-sm font-bold text-green-deep underline decoration-gold-muted/50 underline-offset-4"
        >
          Čítať viac
        </Link>
      </div>
    </article>
  );
}
