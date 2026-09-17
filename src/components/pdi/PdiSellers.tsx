import { ArrowUpRight } from "lucide-react";

import sellers from "@/assets/gallery/yard-suvs-under-shade.jpg";
import { goToPdiBooking, PDI_SELLER_BENEFITS, PDI_SELLER_POINTS } from "@/lib/pdi";

export function PdiSellers() {
  return (
    <section id="sellers" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="reveal text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            For used car sellers
          </p>
          <h2 className="reveal mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            PDI before you list
          </h2>
          <p className="reveal mt-4 max-w-md text-muted-foreground">
            Build buyer confidence, ask a cleaner price, and keep a written snapshot of the car on
            sale day.
          </p>
          <ul className="reveal mt-8 space-y-2 text-sm text-navy/80">
            {PDI_SELLER_POINTS.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            {PDI_SELLER_BENEFITS.map((item, i) => (
              <div
                key={item.title}
                className="reveal border-t border-border py-5 last:border-b"
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <p className="font-medium text-navy">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => goToPdiBooking({ service: "used" })}
            className="reveal mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy"
          >
            Book a pre-sale inspection
            <ArrowUpRight className="size-4" />
          </button>
        </div>
        <div className="reveal overflow-hidden lg:col-span-6">
          <img
            src={sellers}
            alt="Cars in the Auto Point yard"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
