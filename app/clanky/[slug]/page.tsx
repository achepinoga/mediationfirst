import { notFound } from "next/navigation";
import { marked } from "marked";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleCard } from "@/components/ArticleCard";
import { SanityArticleBody } from "@/components/SanityArticleBody";
import { ContactCTA } from "@/components/ContactCTA";
import { Container } from "@/components/ui/Container";
import { LanguageText } from "@/components/LanguageText";
import { articles as staticArticles } from "@/data/articles";
import { client } from "@/sanity/lib/client";
import { articleBySlugQuery, articleSlugsQuery } from "@/sanity/lib/queries";
import type { PortableTextBlock } from "@portabletext/types";
import type { ArticleListItem } from "@/components/ArticleCard";

type SanityArticleDetail = ArticleListItem & {
  body: PortableTextBlock[];
  bodyEn: PortableTextBlock[];
};

export async function generateStaticParams() {
  const sanitySlugs: { slug: string }[] = await client.fetch(articleSlugsQuery).catch(() => []);
  const sanitySlugSet = new Set(sanitySlugs.map((s) => s.slug));
  const staticSlugs = staticArticles
    .filter((a) => !sanitySlugSet.has(a.slug))
    .map((a) => ({ slug: a.slug }));
  return [...sanitySlugs, ...staticSlugs];
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const sanityArticle: SanityArticleDetail | null = await client
    .fetch(articleBySlugQuery, { slug: params.slug })
    .catch(() => null);

  if (sanityArticle) {
    const related: ArticleListItem[] = await client
      .fetch(`*[_type == "article" && slug.current != $slug] | order(date desc) [0...3] {
        "slug": slug.current, title, titleEn, date, category, categoryEn, excerpt, excerptEn
      }`, { slug: params.slug })
      .catch(() => []);

    return (
      <>
        <article>
          <section className="border-b border-green-deep/10 py-16">
            <Container className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">
                <LanguageText sk={sanityArticle.category} en={sanityArticle.categoryEn ?? sanityArticle.category} />
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-green-forest sm:text-5xl">
                <LanguageText sk={sanityArticle.title} en={sanityArticle.titleEn ?? sanityArticle.title} />
              </h1>
              <p className="mt-5 text-sm font-semibold text-muted">{sanityArticle.date}</p>
            </Container>
          </section>
          <Container className="max-w-4xl py-16">
            <SanityArticleBody skBlocks={sanityArticle.body} enBlocks={sanityArticle.bodyEn} />
          </Container>
        </article>
        {related.length > 0 && (
          <section className="bg-white/45 py-16">
            <Container>
              <h2 className="font-serif text-3xl text-green-forest">Súvisiace články</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <ArticleCard key={item.slug} article={item} />
                ))}
              </div>
            </Container>
          </section>
        )}
        <ContactCTA />
      </>
    );
  }

  const staticArticle = staticArticles.find((a) => a.slug === params.slug);
  if (!staticArticle) notFound();

  const related = staticArticles.filter((a) => a.slug !== staticArticle.slug).slice(0, 3);
  const [skHtml, enHtml] = await Promise.all([
    marked.parse(staticArticle.body),
    marked.parse(staticArticle.bodyEn)
  ]);

  return (
    <>
      <article>
        <section className="border-b border-green-deep/10 py-16">
          <Container className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">{staticArticle.category}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-green-forest sm:text-5xl">{staticArticle.title}</h1>
            <p className="mt-5 text-sm font-semibold text-muted">{staticArticle.date}</p>
          </Container>
        </section>
        <Container className="max-w-4xl py-16">
          <ArticleBody skHtml={skHtml} enHtml={enHtml} />
        </Container>
      </article>
      <section className="bg-white/45 py-16">
        <Container>
          <h2 className="font-serif text-3xl text-green-forest">Súvisiace články</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
