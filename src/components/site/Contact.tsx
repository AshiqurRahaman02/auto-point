import { Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { locations, mapsDirections, mapsEmbed, SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <iframe
            title="Auto Point on Google Maps"
            src={mapsEmbed}
            className="absolute inset-0 h-full w-full border-0 grayscale-[0.15]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-10">
          <div className="reveal">
            <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
              Two workshops. Tonk Road &amp; Jagatpura.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Same city, two branches. Address is a shared placeholder for now — call the shop you
              want, or Book and we will send you to the right one.
            </p>

            <ul className="mt-8 space-y-6">
              {locations.map((shop) => (
                <li key={shop.name} className="border-t border-border pt-5">
                  <p className="font-display text-xl font-semibold text-navy">{shop.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{shop.address}</p>
                  <a
                    href={`tel:+${shop.phoneRaw}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-brand"
                  >
                    <Phone className="size-4" />
                    {shop.phone}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-medium text-navy">{SITE.hours}</p>
            <p className="mt-1 text-xs text-muted-foreground">{SITE.hoursNote}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-none bg-brand text-brand-foreground hover:bg-brand/90"
              >
                <a href="#booking">Book</a>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-navy/20 bg-white">
                <a href={SITE.telHref}>
                  <Phone className="size-4" /> Call
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-navy/20 bg-white">
                <a href={mapsDirections} target="_blank" rel="noopener noreferrer">
                  <Navigation className="size-4" /> Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
