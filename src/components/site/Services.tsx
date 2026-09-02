"use client";

import { ArrowUpRight } from "lucide-react";

import { goToBooking, SERVICES } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Everything Your Car Needs.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three ways we help — repair, inspect before you buy, or pick the car up from your door.
          </p>
        </div>

        <div className="mt-14">
          {SERVICES.map((item, i) => (
            <article
              key={item.id}
              className="reveal group grid items-center gap-6 border-t border-border py-10 last:border-b lg:grid-cols-12 lg:gap-10"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <p className="font-display text-3xl text-navy/20 lg:col-span-1">{item.n}</p>
              <div className="lg:col-span-5">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">{item.text}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-navy/80">
                  {item.subs.map((sub) => (
                    <li key={sub} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                      {sub}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() =>
                    goToBooking({
                      service: item.id === "pickup" ? item.title : `${item.title} — ${item.subs[0]}`,
                    })
                  }
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy"
                >
                  Book this
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
              <div className="overflow-hidden lg:col-span-6">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:aspect-[5/3]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
