import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-muted">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-green-forest sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
