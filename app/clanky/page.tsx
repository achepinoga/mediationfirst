import { ArticleCard } from "@/components/ArticleCard";
import { ContactCTA } from "@/components/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
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
