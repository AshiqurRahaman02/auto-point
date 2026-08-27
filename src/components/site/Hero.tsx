import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_MESSAGE, IMG, SITE, whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-background">
      <img
        src={IMG.hero}
        alt="Performance cars in a premium multi-brand service center"
        width={2200}
        height={1400}
        fetchPriority="high"
        decoding="async"
        className="animate-ken absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-24 sm:px-6 md:justify-center md:pb-0">
        <p className="hero-fade text-[11px] font-medium tracking-[0.32em] text-brand uppercase">
          Multi-Brand Automotive Care
        </p>
        <h1
          className="hero-rise mt-5 max-w-3xl font-display text-5xl leading-[0.9] font-semibold sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "180ms" }}
        >
          Your Car Deserves
          <br />
          Better Care.
        </h1>
        <p
          className="hero-fade mt-6 max-w-xl text-base text-foreground/75 sm:text-lg"
          style={{ animationDelay: "380ms" }}
        >
          Professional service, repairs and complete car care — handled by experienced technicians
          under one roof.
        </p>
        <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "560ms" }}>
          <Button
            asChild
            className="h-12 rounded-none bg-brand px-7 text-brand-foreground hover:bg-brand/90"
          >
            <a href={whatsappLink(BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer">
              Book a Service
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-none border-white/25 bg-transparent px-7 text-foreground hover:bg-white/10"
          >
            <a href={SITE.telHref}>
              <Phone className="size-4" /> Call Now
            </a>
          </Button>
        </div>
        <p
          className="hero-fade mt-8 text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
          style={{ animationDelay: "720ms" }}
        >
          Multi-Brand · Transparent Service · Complete Car Care
        </p>
      </div>

      <div className="animate-pulse-line absolute inset-x-0 bottom-0 h-px bg-brand" />
      <div className="animate-scroll-pulse absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="h-8 w-px bg-white/40" />
        <span className="text-[9px] tracking-[0.28em] text-white/50 uppercase">Scroll</span>
      </div>
    </section>
  );
}
