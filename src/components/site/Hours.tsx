import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_MESSAGE, SITE, whatsappLink } from "@/lib/site";

export function Hours() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-background px-6 py-16 sm:px-16 sm:py-24">
          <span className="absolute top-0 left-0 h-full w-2 bg-brand sm:w-3" />
          <div className="flex items-center gap-3">
            <span className="animate-status size-2.5 rounded-full bg-brand" />
            <p className="text-[11px] font-medium tracking-[0.28em] text-brand uppercase">
              Open 24 Hours
            </p>
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold tracking-tight text-navy sm:text-7xl lg:text-8xl">
            Here When
            <br />
            You Need Us.
          </h2>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">{SITE.hoursNote}</p>
          <Button
            asChild
            className="mt-10 h-12 rounded-full bg-brand px-7 text-brand-foreground hover:-translate-y-0.5 hover:bg-brand/90"
          >
            <a href={whatsappLink(BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer">
              Contact Auto Point <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
