import { Clock3, Layers3, MessageCircle, Wrench } from "lucide-react";

const STATS = [
  { icon: Layers3, title: "Multi-Brand", sub: "Service Expertise" },
  { icon: Wrench, title: "Complete Care", sub: "One Workshop" },
  { icon: Clock3, title: "24/7", sub: "Availability" },
  { icon: MessageCircle, title: "Direct Support", sub: "Easy Communication" },
] as const;

export function TrustStats() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="reveal font-display max-w-xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          Built Around Your Car.
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((item, i) => (
            <article
              key={item.title}
              className="reveal"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <item.icon className="size-6 stroke-[1.4] text-brand" />
              <p className="mt-5 text-sm font-semibold tracking-[0.16em] text-navy uppercase">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{item.sub}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
