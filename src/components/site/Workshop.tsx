import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { mapsDirections, SITE } from "@/lib/site";

export function Workshop() {
  return (
    <section id="workshop" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12">
        <div className="reveal lg:col-span-7">
          <div className="overflow-hidden rounded-3xl shadow-[0_24px_80px_-28px_rgb(15_23_42/0.2)]">
            <img
              src="/og-workshop.jpg"
              alt="Auto Point workshop — technician working on engine components"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
        <div className="reveal lg:col-span-5">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            This Is Where Your Car Gets Cared For.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Located on Tonk Road, Jaipur, Auto Point provides a complete range of automotive repair,
            maintenance and care services.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-navy">{SITE.address}</p>
          <Button
            asChild
            className="mt-8 h-12 rounded-full bg-navy px-7 text-white hover:-translate-y-0.5 hover:bg-navy/90"
          >
            <a href={mapsDirections} target="_blank" rel="noopener noreferrer">
              Get Directions <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
