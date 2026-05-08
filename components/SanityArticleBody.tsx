"use client";

import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { useLanguage } from "@/lib/use-language";

export function SanityArticleBody({
  skBlocks,
  enBlocks
}: {
  skBlocks: PortableTextBlock[];
  enBlocks: PortableTextBlock[];
}) {
  const lang = useLanguage();
  const blocks = lang === "EN" ? enBlocks : skBlocks;

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-green-forest prose-p:leading-8 prose-p:text-muted prose-strong:text-green-forest prose-li:text-muted">
      <PortableText value={blocks} />
    </div>
  );
}
