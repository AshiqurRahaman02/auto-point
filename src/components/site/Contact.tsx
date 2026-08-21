import { Clock, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { SITE, mapsDirections, mapsEmbed, whatsappLink } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Visit Us"
        title="Car Service in Jagatpura, Jaipur"
        description="Easy to reach from Kendriya Vihar Road. Open daily for walk-ins and WhatsApp bookings."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="reveal space-y-6">
          <h3 className="font-display text-2xl font-bold text-foreground">{SITE.name}</h3>
          <p className="flex gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
            {SITE.address}
          </p>
          <p className="flex gap-3 text-sm text-muted-foreground">
            <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
            <a href={SITE.telHref} className="hover:text-foreground">
              {SITE.phone}
            </a>
          </p>
          <p className="flex gap-3 text-sm text-muted-foreground">
            <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
            {SITE.hours}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="brand" size="lg">
              <a href={whatsappLink(`Hello ${SITE.name}, I would like to book a service.`)}>
                Book on WhatsApp
              </a>
            </Button>
            <Button asChild variant="electric" size="lg">
              <a href={SITE.telHref}>Call Now</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={mapsDirections} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title={`${SITE.name} location map in Jagatpura, Jaipur`}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-[320px] w-full border-0 sm:h-[420px]"
          />
        </div>
      </div>
    </Section>
  );
}
