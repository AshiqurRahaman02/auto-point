import { Phone } from "lucide-react";

import heroCar from "@/assets/pdi/bmw.jpg";
import { Button } from "@/components/ui/button";
import { PDI_TRUST } from "@/lib/pdi";
import { SITE } from "@/lib/site";

export function PdiHero() {
  return (
    <section id="pdi-home" className="relative min-h-svh overflow-hidden bg-navy">
      <img
        src={heroCar}
        alt="BMW ready for a pre-delivery inspection"
        width={2000}
        height={1200}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_40%] blur-[3px]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy/80 via-navy/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-navy/75 via-transparent to-navy/25" />

      <div className="relative flex min-h-svh flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-end px-4 pb-10 pt-28 sm:px-6 sm:pb-12 lg:pt-32">
          <div className="flex max-w-2xl gap-5">
            <span className="mt-3 hidden h-28 w-px shrink-0 bg-brand sm:block" />
            <div>
              <p
                className="hero-fade text-base font-semibold tracking-[0.18em] text-white uppercase"
                style={{ animationDelay: "80ms" }}
              >
                Pre-Delivery Inspection
              </p>
              <h1
                className="hero-rise mt-4 font-display text-4xl leading-[1.12] font-bold text-white sm:text-6xl lg:text-7xl"
                style={{ animationDelay: "160ms" }}
              >
                Trust Every Mile.
                <br />
                Professional PDI.
              </h1>
              <p
                className="hero-fade mt-5 max-w-lg text-lg leading-relaxed text-white/85 sm:text-xl"
                style={{ animationDelay: "280ms" }}
              >
                280+ point check, OBD diagnostics, and a written digital report — before you buy a
                used car or take delivery of a new one. Starting at ₹1,499 in Jaipur.
              </p>
              <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "420ms" }}>
                <Button
                  asChild
                  className="h-12 rounded-none bg-brand px-8 text-base font-semibold text-brand-foreground hover:bg-brand/90"
                >
                  <a href="#booking">Book</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-none border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white/15 hover:text-white"
                >
                  <a href={SITE.telHref}>
                    <Phone className="size-4" /> Call
                  </a>
                </Button>
              </div>
              <div
                className="hero-fade mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80"
                style={{ animationDelay: "500ms" }}
              >
                <a href="#used" className="hover:text-brand">
                  Used car inspection
                </a>
                <a href="#new" className="hover:text-brand">
                  New car PDI
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/40 backdrop-blur-md">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {PDI_TRUST.map((item, i) => (
              <li
                key={item.label}
                className="hero-fade px-4 py-5 sm:px-6 sm:py-6"
                style={{ animationDelay: `${520 + i * 80}ms` }}
              >
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-white/75">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
