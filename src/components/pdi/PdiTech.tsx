import diagnostic from "@/assets/pdi/diagnostic.jpg";
import engine from "@/assets/pdi/engine.jpg";
import paint from "@/assets/gallery/hatchback-body-repair.jpg";
import report from "@/assets/pdi/mechanic-inspect.jpg";
import { PDI_TECH } from "@/lib/pdi";

const IMAGES = [paint, engine, diagnostic, report];

export function PdiTech() {
  return (
    <section id="technology" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Our technology
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Professional-grade checks
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diagnostic tools and a workshop bay — so paint, codes, and mechanicals don’t get a
            once-over from the kerb.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {PDI_TECH.map((item, i) => (
            <article
              key={item.title}
              className="reveal group"
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <div className="overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-navy/80">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
