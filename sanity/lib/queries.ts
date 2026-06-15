import { groq } from "next-sanity";

export const articlesListQuery = groq`*[_type == "article"] | order(date desc) {
  "slug": slug.current,
  title,
  titleEn,
  date,
  category,
  categoryEn,
  excerpt,
  excerptEn,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coalesce(coverImage.alt, title)
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
  bodyEn,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coalesce(coverImage.alt, title)
}`;

export const articleSlugsQuery = groq`*[_type == "article"] { "slug": slug.current }`;

export const teamQuery = groq`*[_type == "teamMember"] | order(order asc) {
  name,
  "photo": photo.asset->url,
  role,
  roleEn,
  registration,
  registrationEn,
  summary,
  summaryEn,
  "summaryExtra": coalesce(summaryExtra, ""),
  "summaryExtraEn": coalesce(summaryExtraEn, ""),
  "summaryExtra2": coalesce(summaryExtra2, ""),
  "summaryExtra2En": coalesce(summaryExtra2En, ""),
  phone,
  email
}`;
