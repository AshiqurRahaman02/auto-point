import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, mapsDirections, whatsappLink } from "@/lib/site";
import heroImage from "@/assets/hero-workshop.jpg";

const TRUST_POINTS = [
  "Multi-Brand Workshop",
  "Pickup & Drop Available",
  "Experienced Technicians",
  "Genuine Parts Support",
  "On-Time Delivery",
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Mehta Automobile multi-brand car workshop in Jagatpura, Jaipur with cars on service lifts"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="bg-gradient-hero absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="glass-panel reveal inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-primary-foreground uppercase">
            <Star className="size-3.5 fill-brand text-brand" />
            4.3 Google Rating · {SITE.tagline}
          </span>

          <h1
            className="reveal mt-6 font-display text-4xl leading-[1.05] font-extrabold text-primary-foreground sm:text-6xl lg:text-7xl"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Premium Car Care <span className="text-gradient-brand">You Can Trust</span>
          </h1>

          <p
            className="reveal mt-6 max-w-2xl text-base text-primary-foreground/80 sm:text-lg"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            Expert Repairs, Professional Service, Pickup &amp; Drop Facility, and On-Time Delivery
            for Every Vehicle.
          </p>

          <div
            className="reveal mt-8 flex flex-wrap gap-3"
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            <Button asChild variant="brand" size="xl">
              <a href={whatsappLink(`Hello ${SITE.name}, I would like to book a car service.`)}>
                <MessageCircle /> Book on WhatsApp
              </a>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href={SITE.telHref}>
                <Phone /> Call Now
              </a>
            </Button>
            <Button asChild variant="heroGhost" size="xl" className="hidden sm:inline-flex">
              <a href={mapsDirections} target="_blank" rel="noreferrer">
                <MapPin /> Visit Workshop
              </a>
            </Button>
          </div>

          <ul
            className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3"
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          >
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-brand/90 text-[11px] font-bold text-brand-foreground">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
