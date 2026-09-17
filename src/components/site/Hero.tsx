import { Phone } from "lucide-react";

import heroMercedes from "@/assets/hero-mercedes_workshop.png";
import { Button } from "@/components/ui/button";
import { SITE, TRUST } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-navy">
      <img
        src={heroMercedes}
        alt="Mercedes at Auto Point workshop, Jaipur"
        width={2400}
        height={1600}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_42%] blur-[3px]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy/75 via-navy/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-navy/25" />

      <div className="relative flex min-h-svh flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-end px-4 pb-10 pt-28 sm:px-6 sm:pb-12 lg:pt-32">
          <div className="flex max-w-2xl gap-5">
            <span className="mt-3 hidden h-28 w-px shrink-0 bg-brand sm:block" />
            <div>
              <p
                className="hero-fade text-base font-semibold tracking-[0.18em] text-white uppercase"
                style={{ animationDelay: "80ms" }}
              >
                {SITE.name}
              </p>
              <h1
                className="hero-rise mt-4 font-display text-4xl leading-[1.12] font-bold text-white sm:text-6xl lg:text-7xl"
                style={{ animationDelay: "160ms" }}
              >
                Your Car Deserves
                <br />
                Professional Attention.
              </h1>
              <p
                className="hero-fade mt-5 max-w-lg text-lg leading-relaxed text-white/85 sm:text-xl"
                style={{ animationDelay: "280ms" }}
              >
                Experienced hands. Proper care. Clear communication — trusted workshop care on Tonk
                Road and Jagatpura, Jaipur.
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
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/40 backdrop-blur-md">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {TRUST.map((item, i) => (
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
