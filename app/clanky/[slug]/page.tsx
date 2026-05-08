import { notFound } from "next/navigation";
import { marked } from "marked";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleCard } from "@/components/ArticleCard";
import { ContactCTA } from "@/components/ContactCTA";
import { Container } from "@/components/ui/Container";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const [skHtml, enHtml] = await Promise.all([
    marked.parse(article.body),
    marked.parse(article.bodyEn),
  ]);

  return (
    <>
      <article>
        <section className="border-b border-green-deep/10 py-16">
          <Container className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">{article.category}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-green-forest sm:text-5xl">{article.title}</h1>
            <p className="mt-5 text-sm font-semibold text-muted">{article.date}</p>
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
