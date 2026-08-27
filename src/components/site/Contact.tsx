import { MessageCircle, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_MESSAGE, mapsDirections, mapsEmbed, SITE, whatsappLink } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] grayscale contrast-125">
          <iframe
            title="Auto Point on Google Maps"
            src={mapsEmbed}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 bg-brand/10 mix-blend-multiply" />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-10">
          <div className="reveal">
            <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Location</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl">Find Auto Point.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">{SITE.address}</p>
            <p className="mt-2 text-sm text-brand">{SITE.hours}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-none bg-brand text-brand-foreground hover:bg-brand/90"
              >
                <a href={mapsDirections} target="_blank" rel="noopener noreferrer">
                  <Navigation className="size-4" /> Get Directions
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-white/20 bg-transparent"
              >
                <a href={SITE.telHref}>
                  <Phone className="size-4" /> Call
                </a>
              </Button>
              <Button asChild className="rounded-none bg-[#25D366] text-white hover:bg-[#1fb85a]">
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
