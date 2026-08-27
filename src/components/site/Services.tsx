import { ArrowUpRight } from "lucide-react";

import { SERVICES } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Everything Your Car Needs.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From routine servicing to body repairs, Auto Point brings essential automotive services
            together under one roof.
          </p>
        </div>

        <div className="mt-12">
          {SERVICES.map((item, i) => (
            <a
              key={item.n}
              href="#booking"
              className="group reveal relative flex min-h-[140px] items-center overflow-hidden border-t border-border py-8 last:border-b lg:py-10"
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 h-full w-[40%] object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 max-md:hidden"
              />
              <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-background via-background/90 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-20 grid w-full items-center gap-4 md:grid-cols-[5rem_1fr_auto] md:gap-8">
                <p className="font-display text-3xl text-navy/25 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-brand">
                  {item.n}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
                    {item.text}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy">
                  Explore Service
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
