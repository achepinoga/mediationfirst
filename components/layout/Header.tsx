"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 border-b border-green-deep/10 transition-colors duration-300",
      scrolled ? "bg-ivory shadow-sm" : "bg-ivory/92 backdrop-blur"
    )}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavná navigácia">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="focus-ring inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-green-forest hover:bg-white"
              >
                {item.label}
                {item.children ? <ChevronDown aria-hidden className="h-4 w-4 text-gold-muted" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-2xl border border-green-deep/10 bg-white p-2 opacity-0 shadow-line transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="focus-ring block rounded-xl px-4 py-3 text-sm font-semibold text-charcoal hover:bg-ivory"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href={site.legalUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-xl px-3 py-2 text-sm font-semibold text-green-forest hover:bg-white"
          >
            Právne služby
          </Link>
          <Button href="/kontakt">Napíšte nám</Button>
        </div>
        <button
          type="button"
          className="focus-ring rounded-xl border border-green-deep/15 bg-white p-2 text-green-forest lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Zatvoriť menu" : "Otvoriť menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className={cn("border-t border-green-deep/10 bg-ivory lg:hidden", !open && "hidden")}>
        <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-5 sm:px-6" aria-label="Mobilná navigácia">
          {navigation.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring block rounded-xl px-3 py-3 font-semibold text-green-forest hover:bg-white"
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="ml-3 border-l border-gold-muted/35 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="focus-ring block rounded-xl px-3 py-2 text-sm font-semibold text-muted hover:bg-white hover:text-green-forest"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-4">
            <LanguageSwitcher />
            <Button href="/kontakt">Napíšte nám</Button>
            <Button href={site.legalUrl} variant="secondary">
              Právne služby
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
