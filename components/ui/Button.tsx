import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
        variant === "primary" && "bg-green-deep text-white hover:bg-green-forest",
        variant === "secondary" &&
          "border border-gold-muted/45 bg-white/70 text-green-forest hover:border-gold-muted hover:bg-white",
        variant === "quiet" && "px-0 text-green-deep underline decoration-gold-muted/50 underline-offset-4 hover:text-green-forest",
        className
      )}
    >
      {children}
    </Link>
  );
}
