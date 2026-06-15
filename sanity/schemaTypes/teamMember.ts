import { defineField, defineType } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role (SK)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "roleEn", title: "Role (EN)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "registration", title: "Registration (SK)", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "registrationEn", title: "Registration (EN)", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "summary", title: "Summary paragraph 1 (SK)", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "summaryEn", title: "Summary paragraph 1 (EN)", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "summaryExtra", title: "Summary paragraph 2 (SK)", type: "text", rows: 3 }),
    defineField({ name: "summaryExtraEn", title: "Summary paragraph 2 (EN)", type: "text", rows: 3 }),
    defineField({ name: "summaryExtra2", title: "Summary paragraph 3 (SK)", type: "text", rows: 3 }),
    defineField({ name: "summaryExtra2En", title: "Summary paragraph 3 (EN)", type: "text", rows: 3 }),
    defineField({ name: "phone", title: "Phone", type: "string", validation: (r) => r.required() }),
    defineField({ name: "email", title: "Email", type: "string", validation: (r) => r.required() }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() })
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } }
});
