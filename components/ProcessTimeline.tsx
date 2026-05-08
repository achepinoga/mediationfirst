import { processSteps } from "@/data/pages";

export function ProcessTimeline() {
  return (
    <div className="space-y-5">
      {processSteps.map((step, index) => (
        <article key={step.title} className="grid gap-5 rounded-2xl border border-green-deep/10 bg-white/80 p-6 md:grid-cols-[120px_1fr]">
          <div>
            <span className="font-serif text-5xl text-gold-muted">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-green-forest">{step.title}</h2>
            <p className="mt-3 leading-8 text-muted">{step.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
