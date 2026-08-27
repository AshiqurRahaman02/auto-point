import { ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_MESSAGE, SITE, whatsappLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <div className="reveal">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-navy sm:text-7xl">
            Your Car.
            <br />
            Our Responsibility.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Book your next service with Auto Point.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="h-12 rounded-full bg-brand px-7 text-brand-foreground hover:-translate-y-0.5 hover:bg-brand/90"
            >
              <a href={whatsappLink(BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-navy/15 bg-white px-7 text-navy hover:-translate-y-0.5"
            >
              <a href={SITE.telHref}>
                <Phone className="size-4" /> Call Auto Point
              </a>
            </Button>
          </div>
          <p className="mt-8 text-xl font-medium tracking-[0.12em] text-navy">{SITE.phonePretty}</p>
        </div>
      </div>
    </section>
  );
}
