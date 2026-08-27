import { ArrowUpRight } from "lucide-react";

import { SERVICES } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Services</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">Everything Your Car Needs.</h2>
          <p className="mt-4 text-muted-foreground">
            From routine maintenance to major repairs, our workshop brings essential car care
            services together in one place.
          </p>
        </div>

        <div className="hide-scrollbar mt-12 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {SERVICES.map((item, i) => (
            <a
              key={item.n}
              href="#booking"
              className="group reveal relative min-h-[280px] w-[78vw] shrink-0 overflow-hidden border border-white/10 bg-surface md:w-auto"
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <p className="font-display text-4xl text-brand/80">{item.n}</p>
                <div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-brand uppercase">
                    Book
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
