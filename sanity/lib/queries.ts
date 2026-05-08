import { groq } from "next-sanity";

export const articlesListQuery = groq`*[_type == "article"] | order(date desc) {
  "slug": slug.current,
  title,
  titleEn,
  date,
  category,
  categoryEn,
  excerpt,
  excerptEn
}`;

export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  titleEn,
  date,
  category,
  categoryEn,
  excerpt,
  excerptEn,
  body,
  bodyEn
}`;

export const articleSlugsQuery = groq`*[_type == "article"] { "slug": slug.current }`;
