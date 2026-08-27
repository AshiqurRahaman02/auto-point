import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_MESSAGE, IMG, SITE, whatsappLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <img
        src={IMG.camaro}
        alt="Performance car ready to drive"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-4 py-20 sm:px-6">
        <div className="reveal">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl">
            Your Car.
            <br />
            Our Responsibility.
          </h2>
          <p className="mt-4 text-lg text-foreground/80">Book your next service with Auto Point.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-12 rounded-none bg-brand text-brand-foreground hover:bg-brand/90"
            >
              <a href={whatsappLink(BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-none border-white/25 bg-transparent"
            >
              <a href={SITE.telHref}>
                <Phone className="size-4" /> Call Auto Point
              </a>
            </Button>
          </div>
          <p className="mt-6 font-display text-2xl tracking-[0.16em]">{SITE.phonePretty}</p>
        </div>
      </div>
    </section>
  );
}
