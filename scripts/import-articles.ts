import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { articles } from "../data/articles";
import { translations } from "../data/translations";

// Load .env.local without needing dotenv
const envContent = readFileSync(".env.local", "utf-8");
for (const line of envContent.split("\n")) {
  const [k, ...rest] = line.split("=");
  if (k?.trim() && rest.length) process.env[k.trim()] = rest.join("=").trim();
}

// Slovak month name → ISO month number
const months: Record<string, string> = {
  januára: "01", februára: "02", marca: "03", apríla: "04",
  mája: "05", júna: "06", júla: "07", augusta: "08",
  septembra: "09", októbra: "10", novembra: "11", decembra: "12"
};

function toIsoDate(sk: string): string {
  const [day, month, year] = sk.replace(".", "").trim().split(/\s+/);
  return `${year}-${months[month] ?? "01"}-${day.padStart(2, "0")}`;
}

// Portable Text types
type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type Block = {
  _type: "block"; _key: string;
  style: "normal" | "h2" | "h3" | "h4";
  listItem?: "bullet"; level?: number;
  children: Span[]; markDefs: [];
};

let keyCounter = 0;
function key() { return `k${++keyCounter}`; }

function parseInline(text: string): Span[] {
  const spans: Span[] = [];
  const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*|([^*]+)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match[1] !== undefined) spans.push({ _type: "span", _key: key(), text: match[1], marks: ["strong"] });
    else if (match[2] !== undefined) spans.push({ _type: "span", _key: key(), text: match[2], marks: ["em"] });
    else if (match[3] !== undefined) spans.push({ _type: "span", _key: key(), text: match[3], marks: [] });
  }
  return spans.length ? spans : [{ _type: "span", _key: key(), text, marks: [] }];
}

function block(text: string, style: Block["style"]): Block {
  return { _type: "block", _key: key(), style, children: parseInline(text), markDefs: [] };
}

function listItem(text: string): Block {
  return { _type: "block", _key: key(), style: "normal", listItem: "bullet", level: 1, children: parseInline(text), markDefs: [] };
}

function markdownToBlocks(md: string): Block[] {
  return md.split("\n").reduce<Block[]>((acc, line) => {
    const t = line.trim();
    if (!t) return acc;
    if (t.startsWith("#### ")) return [...acc, block(t.slice(5), "h4")];
    if (t.startsWith("### ")) return [...acc, block(t.slice(4), "h3")];
    if (t.startsWith("## ")) return [...acc, block(t.slice(3), "h2")];
    if (t.startsWith("# ")) return [...acc, block(t.slice(2), "h2")];
    if (t.startsWith("- ")) return [...acc, listItem(t.slice(2))];
    return [...acc, block(t, "normal")];
  }, []);
}

async function main() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) { console.error("Missing SANITY_API_WRITE_TOKEN in .env.local"); process.exit(1); }

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
    apiVersion: "2024-01-01",
    token,
    useCdn: false
  });

  console.log(`Importing ${articles.length} articles into Sanity...`);

  for (const article of articles) {
    const doc = {
      _type: "article",
      _id: `article-${article.slug}`,
      title: article.title,
      titleEn: article.title,
      slug: { _type: "slug", current: article.slug },
      date: toIsoDate(article.date),
      category: article.category,
      categoryEn: translations[article.category] ?? article.category,
      excerpt: article.excerpt,
      excerptEn: article.excerpt,
      body: markdownToBlocks(article.body),
      bodyEn: markdownToBlocks(article.bodyEn)
    };

    await client.createOrReplace(doc);
    console.log(`  ✓  ${article.slug}`);
  }

  console.log("\nDone! Open /studio to review and translate titleEn and excerptEn fields.");
}

main().catch((err) => { console.error(err); process.exit(1); });
