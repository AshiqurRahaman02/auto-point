import { MessageCircle, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_MESSAGE, mapsDirections, mapsEmbed, SITE, whatsappLink } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-2 lg:rounded-none">
        <div className="relative min-h-[420px]">
          <iframe
            title="Auto Point on Google Maps"
            src={mapsEmbed}
            className="absolute inset-0 h-full w-full border-0 grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-10">
          <div className="reveal">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Find Auto Point.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">{SITE.address}</p>
            <p className="mt-2 text-sm font-medium text-brand">{SITE.hours}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-navy text-white hover:bg-navy/90">
                <a href={mapsDirections} target="_blank" rel="noopener noreferrer">
                  <Navigation className="size-4" /> Get Directions
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-border bg-white">
                <a href={SITE.telHref}>
                  <Phone className="size-4" /> Call
                </a>
              </Button>
              <Button asChild className="rounded-full bg-[#25D366] text-white hover:bg-[#1fb85a]">
                <a href={whatsappLink(BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
