import { ArrowUpRight } from "lucide-react";

import usedCar from "@/assets/gallery/bay-innova-wagonr.jpg";
import newCar from "@/assets/hero-mercedes.jpg";
import { formatInr, goToPdiBooking, PDI_NEW, PDI_SEGMENTS, PDI_USED } from "@/lib/pdi";

export function PdiOfferings() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">Our services</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Choose your inspection
          </h2>
          <p className="mt-4 text-muted-foreground">
            Certified pre-owned or a brand-new car from a dealership — same workshop, same written
            report.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <article id="used" className="reveal scroll-mt-28 border-t border-border pt-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
              {PDI_USED.badge}
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-navy">{PDI_USED.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{PDI_USED.kicker}</p>
            <div className="mt-6 overflow-hidden">
              <img
                src={usedCar}
                alt="Used cars in the Auto Point bay"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <p className="mt-5 text-muted-foreground">{PDI_USED.text}</p>
            <CheckBlock title="What we check" items={PDI_USED.checks} />
            <CheckBlock title="Common concerns we detect" items={PDI_USED.concerns} />
            <div className="mt-8">
              <p className="text-sm font-medium text-navy">Pricing by car type</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Based on indicative ex-showroom price of a new equivalent
              </p>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {PDI_SEGMENTS.map((row) => (
                  <li key={row.id} className="flex items-baseline justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium text-navy">{row.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {row.range} — {row.examples}
                      </p>
                    </div>
                    <p className="shrink-0 font-display text-xl font-semibold text-navy">
                      {formatInr(row.price)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => goToPdiBooking({ service: "used", segment: "mid" })}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy"
            >
              Book used car PDI
              <ArrowUpRight className="size-4" />
            </button>
          </article>

          <article id="new" className="reveal scroll-mt-28 border-t border-border pt-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
              {PDI_NEW.badge}
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-navy">{PDI_NEW.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{PDI_NEW.kicker}</p>
            <div className="mt-6 overflow-hidden">
              <img
                src={newCar}
                alt="New luxury car before delivery"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover object-[center_40%]"
              />
            </div>
            <p className="mt-5 text-muted-foreground">{PDI_NEW.text}</p>
            <CheckBlock title="What we'll check" items={PDI_NEW.checks} />
            <div className="mt-8 border-y border-border py-5">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="font-display text-4xl font-semibold text-navy">
                {formatInr(PDI_NEW.price)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => goToPdiBooking({ service: "new" })}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy"
            >
              Book new car PDI
              <ArrowUpRight className="size-4" />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}

function CheckBlock({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold text-navy">{title}</h4>
      <ul className="mt-3 space-y-1.5 text-sm text-navy/80">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
