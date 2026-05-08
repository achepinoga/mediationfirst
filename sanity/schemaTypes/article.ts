import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title (SK)",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "titleEn",
      title: "Title (EN)",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required()
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (r) => r.required()
    }),
    defineField({
      name: "category",
      title: "Category (SK)",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "categoryEn",
      title: "Category (EN)",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt (SK)",
      type: "text",
      rows: 3,
      validation: (r) => r.required()
    }),
    defineField({
      name: "excerptEn",
      title: "Excerpt (EN)",
      type: "text",
      rows: 3,
      validation: (r) => r.required()
    }),
    defineField({
      name: "body",
      title: "Body (SK)",
      type: "array",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "bodyEn",
      title: "Body (EN)",
      type: "array",
      of: [{ type: "block" }]
    })
  ],
  preview: {
    select: { title: "title", subtitle: "date" }
  }
});
