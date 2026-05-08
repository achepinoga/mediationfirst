import { reverseTranslations, translations } from "@/data/translations";

export type PrototypeLanguage = "SK" | "EN";

function replaceTextNode(node: Text, dictionary: Record<string, string>) {
  const value = node.nodeValue;
  if (!value) return;

  const trimmed = value.trim();
  const replacement = dictionary[trimmed];
  if (!replacement) return;

  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${replacement}${trailing}`;
}

export function applyLanguage(language: PrototypeLanguage) {
  if (typeof document === "undefined") return;

  const dictionary = language === "EN" ? translations : reverseTranslations;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  nodes.forEach((node) => replaceTextNode(node, dictionary));
  document.documentElement.lang = language === "EN" ? "en" : "sk";
  window.localStorage.setItem("mediationfirst-language", language);
  window.dispatchEvent(new CustomEvent("mediationfirst-language", { detail: language }));
}
