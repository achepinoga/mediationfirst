import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageRuntime } from "@/components/LanguageRuntime";

export const metadata: Metadata = {
  title: "Mediationfirst | Modernizovaný prototyp",
  description: "Moderný prototyp webu Mediationfirst pre mediačné služby v Bratislave."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body>
        <LanguageRuntime />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
