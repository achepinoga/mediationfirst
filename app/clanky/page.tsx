import { ArticleCard } from "@/components/ArticleCard";
import { ContactCTA } from "@/components/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles as staticArticles } from "@/data/articles";
import { client } from "@/sanity/lib/client";
import { articlesListQuery } from "@/sanity/lib/queries";
import type { ArticleListItem } from "@/components/ArticleCard";

async function getArticles(): Promise<ArticleListItem[]> {
  const sanityArticles: ArticleListItem[] = await client.fetch(articlesListQuery, {}, { cache: "no-store" }).catch(() => []);

  const sanitySlugSet = new Set(sanityArticles.map((a) => a.slug));
  const fallback = staticArticles
    .filter((a) => !sanitySlugSet.has(a.slug))
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      date: a.date,
      category: a.category,
      excerpt: a.excerpt
    }));

  return [...sanityArticles, ...fallback];
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <>
      <section className="border-b border-green-deep/10 py-16">
        <Container>
          <SectionHeading
            eyebrow="Články"
            title="Poznámky a témy z mediácie"
            text="Prehľad článkov je zámerne typografický a pokojný, bez veľkých ilustračných fotografií pri každom texte."
          />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
