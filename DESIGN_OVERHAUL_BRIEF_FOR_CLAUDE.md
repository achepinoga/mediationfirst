# Mediationfirst Design Overhaul Brief

## Purpose

Redesign the Mediationfirst website into a more striking, premium, trustworthy mediation brand while preserving its professional legal credibility.

The recommended direction is **Editorial Legal Calm with Human Warmth**.

The site should feel composed, serious, and refined, but not cold. It should communicate that Mediationfirst helps people move from conflict into a workable agreement with legal clarity, confidentiality, and dignity.

## Current Project Context

This is a Next.js 14 project using:

- App Router
- React 18
- Tailwind CSS
- `next/image`
- `lucide-react`
- Sanity for articles, with static article fallback data

Important files:

- `app/page.tsx` - homepage
- `app/[slug]/page.tsx` - most static content pages
- `app/kontakt/page.tsx` - contact page
- `app/clanky/page.tsx` - article listing
- `app/clanky/[slug]/page.tsx` - article detail
- `app/globals.css` - global CSS and current visual primitives
- `tailwind.config.ts` - theme colors, fonts, shadows
- `components/Hero.tsx` - homepage hero
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `components/TeamCard.tsx`
- `components/ServiceCard.tsx`
- `components/ContactCTA.tsx`
- `components/MunicipalityServiceBanner.tsx`
- `components/LegalServicesBanner.tsx`
- `components/ArticleCard.tsx`
- `components/ProcessTimeline.tsx`
- `components/PriceList.tsx`
- `components/ui/Button.tsx`
- `components/ui/Container.tsx`
- `components/ui/SectionHeading.tsx`
- `data/pages.ts`
- `data/team.ts`
- `data/navigation.ts`
- `data/site.ts`

Existing useful image assets:

- `public/images/hero-mediation-room.png`
- `public/images/about-office.png`
- `public/images/benefits-dawn.png`
- `public/images/contact-office.png`
- `public/images/process-table.png`
- `public/images/pricelist-scales.png`
- `public/images/article-cover-fallback.png`
- `public/images/marcela.jpeg`
- `public/images/simona-mills.jpg`
- `public/images/logo.png`
- `public/images/logo-green.png`

## Current Design Diagnosis

The current site is clean and functional, but it is visually too conservative. It relies heavily on:

- rounded white cards,
- ivory backgrounds,
- forest green and muted gold,
- serif headings,
- simple two-column sections,
- mostly text-first presentation.

This creates trust, but not enough memorability. The site does not yet have a strong first impression. Existing images are underused, especially on the homepage and static pages.

The redesign should avoid generic legal-site blandness and avoid decorative visuals that do not explain the service.

## Creative Direction

### Name

Editorial Legal Calm

### Brand Feeling

The redesigned site should feel like:

- a premium legal/editorial publication,
- a calm mediation room,
- a professional advisory service,
- a human alternative to court conflict.

It should not feel like:

- a generic corporate law template,
- a wellness/spa brand,
- a loud startup landing page,
- a decorative AI-generated page,
- a card-heavy SaaS dashboard.

### Core Message

Use this idea to guide layout and art direction:

> Mediationfirst is the composed, legally grounded place where conflict becomes a workable agreement.

## Visual System

### Color

Keep the existing brand colors, but make them more deliberate and less flat.

Recommended palette:

- Deep forest: `#142821`
- Professional green: `#1F3D33`
- Soft ivory: `#F8F5EF`
- Warm paper: `#EFE8DA`
- Muted legal gold: `#B89B5E`
- Pale gold: `#D8C79D`
- Ink/charcoal: `#1E1E1E`
- Soft text: `#6E6A63`
- Optional warm white: `#FFFDF8`

Use forest green for serious brand moments: hero overlays, footer, important CTAs, benefit sections.

Use ivory/paper backgrounds for content sections.

Use gold only as an accent: rules, small labels, icon color, hover detail, section dividers. Do not flood the UI with gold.

### Typography

The current pairing is `Libre Baskerville` and `Source Sans 3`. This is acceptable, but the redesign should feel more editorial.

Options:

1. Keep `Libre Baskerville` for headings and use it more boldly.
2. Replace with a stronger editorial serif such as `Cormorant Garamond`, `Fraunces`, `Lora`, or `Spectral`.
3. Keep body text practical and readable.

Avoid generic system-looking typography. Headings should have strong editorial presence, especially the hero.

Do not use negative letter spacing. Do not scale font sizes with viewport width.

### Layout

Move away from repeated rounded cards as the primary visual language.

Use:

- full-width bands,
- strong vertical rhythm,
- asymmetrical grids,
- large editorial image blocks,
- thin dividing lines,
- text columns,
- overlapping but controlled image/text compositions,
- calm whitespace.

Cards are still allowed for repeated content like articles, service types, or contact blocks, but they should not dominate every section.

### Border Radius

Reduce excessive roundness.

- Main image blocks: `rounded-lg` or `rounded-xl`
- Repeated cards: max `rounded-xl`, preferably `rounded-lg`
- Buttons: `rounded-md` or `rounded-lg`
- Avoid `rounded-2xl` everywhere.

### Motion

Keep motion subtle and professional.

Recommended:

- slight image scale on hover for article/team cards,
- header background transition on scroll,
- button arrow movement,
- gentle section reveal if already easy to implement.

Do not add flashy animation, parallax overload, or scroll-jacking.

## Image Strategy

Images should not be decorative filler. Each image should support one of these ideas:

- calm room for difficult conversation,
- legal clarity,
- mediation process,
- human expertise,
- professional Bratislava office context,
- resolution and relief.

### Homepage Image Placement

Use `public/images/hero-mediation-room.png` in the hero.

Recommended hero composition:

- full-bleed or near full-bleed image treatment,
- dark green overlay or gradient,
- hero text placed over the image or in a strong editorial split,
- image should be visible enough to establish atmosphere,
- avoid placing the image inside a generic card.

Hero should include:

- brand promise,
- short explanation,
- primary CTA: contact,
- secondary CTA: mediation process,
- trust markers: accredited mediators, legal experience, Slovak/English.

Suggested hero headline:

`Mediácia s právnou istotou a pokojom pri stole.`

Alternative:

`Keď spor potrebuje dohodu, nie ďalší konflikt.`

Keep the existing slogan `Mediujte s(právne)` as a supporting brand line if desired, but it should not be the only major hero message unless visually strengthened.

### About / Intro Section

Use `public/images/about-office.png`.

Recommended use:

- large editorial image on one side,
- text on the other,
- small caption-style trust detail,
- maybe a narrow gold vertical rule.

The goal is to make the service feel tangible and grounded.

### Benefits Section

Use `public/images/benefits-dawn.png`.

Recommended use:

- dark green band with image as side panel or background slice,
- benefits as a clean numbered or ruled list,
- avoid many small white cards.

### Process Page / Process Section

Use `public/images/process-table.png`.

Recommended use:

- image-led page header for `/ako-prebieha-mediacia`,
- process steps as a vertical editorial timeline with large step numbers,
- use lines and spacing rather than cards.

### Pricing Page

Use `public/images/pricelist-scales.png`.

Recommended use:

- pricing page header or side image,
- price list should look transparent and calm, not like a SaaS pricing table.

### Contact Page

Use `public/images/contact-office.png`.

Recommended use:

- image-led contact header or side panel,
- contact details beside form,
- map remains useful but should be visually integrated.

### Team Images

Use existing portraits:

- `public/images/marcela.jpeg`
- `public/images/simona-mills.jpg`

Make team presentation more premium:

- larger portraits,
- less cramped cards,
- strong name typography,
- credentials and contact details clearly grouped,
- avoid tiny thumbnail feel.

### Articles

Use `article-cover-fallback.png` for fallback article cards.

Article listing should feel like an editorial index:

- image cards are acceptable,
- category/date should be precise,
- typography should carry more weight,
- hover states should be refined.

## Page-by-Page Redesign Requirements

### Homepage

The homepage should become the strongest page.

Required structure:

1. Hero
2. Intro: what mediation is and why it matters
3. Dispute categories
4. Municipality service callout
5. Team preview
6. Benefits of mediation
7. Mediation process teaser
8. Articles preview
9. Legal services banner
10. Contact CTA

#### Hero Requirements

Replace the current plain text + green placeholder block with a real image-led hero.

Use `hero-mediation-room.png`.

Design:

- strong first viewport,
- editorial type,
- visible image,
- no generic rounded hero card,
- trust markers integrated below or inside the hero,
- primary and secondary CTAs clearly visible.

#### Intro Section

Use a strong two-column editorial layout.

Left:

- large question or statement.

Right:

- explanatory text.

Add `about-office.png` either in this section or immediately after it.

#### Dispute Categories

Current service cards are too generic.

Redesign as a structured grid/list:

- use small icons from `lucide-react`,
- use thin lines,
- compact but elegant,
- no oversized card look.

Suggested icons:

- family: `Users`
- neighbour/property: `Home`
- employment: `BriefcaseBusiness`
- inheritance: `FileText`
- commercial: `Building2`
- civil: `Scale`
- real estate: `MapPinned`
- school: `GraduationCap`

#### Municipality Banner

Make this feel like a civic announcement, not a generic marketing banner.

Keep:

- monthly cadence,
- Bratislava Nové Mesto,
- mediation + legal advice,
- CTA to contact,
- CTA to external info.

Use a structured civic layout with clear facts.

#### Team Preview

Make this one of the emotional trust anchors.

Use larger portraits and better hierarchy.

Avoid small image thumbnails.

Show:

- name,
- role,
- one-sentence specialization,
- contact action,
- link to full team page.

#### Benefits Section

Use a dark green editorial band.

Use `benefits-dawn.png`.

Benefits should be scannable:

- numbered list,
- thin dividers,
- short labels,
- optional one-line explanations if available.

#### Process Teaser

Add a homepage section that previews the mediation process, even if brief.

Use 3 or 4 steps:

- Contact
- Agreement to begin mediation
- Mediation meeting
- Mediation agreement

Link to `/ako-prebieha-mediacia`.

#### Articles Preview

Make article cards editorial and calmer.

Use image fallback where needed.

Avoid visual clutter.

#### Final CTA

Contact CTA should feel decisive.

Use:

- clear question,
- phone/email contact details,
- button to contact form,
- optional background image or dark green band.

### Static Pages

`app/[slug]/page.tsx` currently renders many pages with the same generic page header.

Improve by creating reusable page templates:

- text content page,
- team page,
- process page,
- pricing page,
- benefits page.

All static pages should have stronger page headers:

- title,
- subtitle,
- optional image depending on page,
- visible brand rhythm.

Use different image assets where appropriate:

- `/o-nas`: `about-office.png`
- `/ako-prebieha-mediacia`: `process-table.png`
- `/cennik`: `pricelist-scales.png`
- `/vyhody-mediacie`: `benefits-dawn.png`

### Contact Page

Use `contact-office.png`.

Improve hierarchy:

- image-led intro,
- clear contact methods,
- form,
- office address,
- map,
- Google review CTA.

The current Google review URL contains `REPLACE_WITH_GOOGLE_PLACE_ID`. Leave as-is unless a real URL is provided, but visually style it so it does not look broken.

### Header

The current header is functional.

Refine:

- make it feel more premium,
- reduce pill/rounded hover styling,
- use subtle underline or background line,
- preserve mobile menu,
- preserve language switcher,
- preserve external legal services link.

Ensure sticky behavior remains.

### Footer

Keep dark green footer, but improve editorial spacing.

Include:

- logo,
- short description,
- contact details,
- navigation,
- legal services link,
- copyright.

## Component-Level Requirements

### `Hero.tsx`

Rewrite around image-led composition.

Use `next/image`.

Must remain responsive:

- desktop: editorial image + text composition or full image hero,
- mobile: image visible, text readable, CTAs stacked cleanly.

### `Button.tsx`

Refine styling:

- less rounded,
- stronger hover states,
- optional icon support if useful,
- preserve current API if possible to avoid broad refactor.

### `SectionHeading.tsx`

Make section headings more editorial:

- eyebrow smaller and tighter,
- title larger but controlled,
- optional max-width,
- optional alignment.

### `ServiceCard.tsx`

Either redesign or replace with a service item component.

It should not look like a generic SaaS card.

### `TeamCard.tsx`

Make portraits more prominent.

Ensure image cropping is respectful and professional.

### `ContactCTA.tsx`

Redesign into a strong closing section.

Consider using dark green background and structured contact blocks.

### `ArticleCard.tsx`

Make image treatment and typography more editorial.

Use subtle hover image scale.

### `ProcessTimeline.tsx`

Move away from stacked rounded cards.

Use:

- vertical timeline,
- large step numbers,
- thin dividers,
- generous spacing.

### `PriceList.tsx`

Make pricing feel transparent and professional.

Avoid overly decorative cards.

## Content and Encoding Warning

Many Slovak strings currently appear mojibaked in source files, for example `MediÃ¡cia` instead of `Mediácia`.

Do not intentionally worsen encoding.

If editing text-heavy files, preserve existing behavior but consider fixing encoding only if it can be done consistently across the project. Do not partially fix random strings unless the task explicitly includes content cleanup.

## Accessibility Requirements

Preserve or improve:

- semantic headings,
- meaningful image alt text,
- keyboard focus states,
- color contrast,
- button/link distinction,
- mobile navigation accessibility,
- iframe title on map,
- readable text over images.

Text over images must always have sufficient overlay contrast.

All interactive controls must be keyboard reachable.

## Responsive Requirements

Test mentally and through browser where possible:

- mobile around 375px wide,
- tablet,
- desktop,
- wide desktop.

Prevent:

- text overflow,
- button text wrapping awkwardly,
- image/text overlap,
- hero taking so much height that next section is invisible,
- cards becoming uneven in broken ways.

Hero must show a hint of the next section on common desktop and mobile screens where possible.

## Implementation Notes

Prefer scoped, practical changes.

Recommended order:

1. Update `tailwind.config.ts` and `globals.css` for refined theme primitives.
2. Redesign `Hero.tsx`.
3. Redesign shared UI primitives: `Button`, `SectionHeading`, maybe `Container`.
4. Redesign homepage sections in `app/page.tsx`.
5. Redesign reusable components: `TeamCard`, `ServiceCard`, `ContactCTA`, `ArticleCard`, `ProcessTimeline`, `PriceList`.
6. Improve static page layouts in `app/[slug]/page.tsx`.
7. Improve contact page.
8. Run build/lint and fix issues.

## Design Guardrails

Do:

- use the existing images prominently,
- make the first viewport memorable,
- use strong typography,
- maintain legal credibility,
- make content easier to scan,
- keep CTAs clear,
- maintain bilingual functionality,
- preserve Sanity article fallback behavior.

Do not:

- create a marketing landing page that hides the service,
- use purple/blue gradients,
- overuse rounded cards,
- create decorative SVG blobs/orbs,
- make the site feel like a wellness brand,
- make image overlays too dark to understand,
- remove existing content without a clear reason,
- break mobile navigation,
- break language switching,
- break article fetching.

## Acceptance Criteria

The redesign is successful when:

- the homepage immediately feels more premium and visually memorable,
- real images are integrated into the core layout,
- mediation still feels calm, confidential, and professional,
- the site no longer feels like repeated generic cards,
- team credibility is stronger,
- service categories and benefits are easier to scan,
- all pages remain responsive,
- build passes,
- no existing core route is broken.

## Final QA Checklist

Run:

```bash
npm run build
```

Check pages:

- `/`
- `/o-nas`
- `/nas-tim`
- `/co-je-mediacia`
- `/spory-riesene-mediaciou`
- `/ako-prebieha-mediacia`
- `/mediacne-sluzby`
- `/pravne-ucinky-mediacie`
- `/vratenie-sudnych-poplatkov`
- `/cennik`
- `/vyhody-mediacie`
- `/clanky`
- `/kontakt`

Check interactions:

- desktop navigation dropdown,
- mobile menu,
- language switcher,
- contact links,
- external legal services link,
- article links,
- map embed,
- contact form layout.

Check visual quality:

- hero image loads and is readable,
- no text overlaps images,
- no button text overflows,
- no section feels like an isolated generic card,
- image cropping looks intentional,
- spacing feels calm and premium.
