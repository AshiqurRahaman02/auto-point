import {
  Battery,
  Brush,
  CarFront,
  Cog,
  Disc3,
  Droplets,
  FileCheck2,
  Gauge,
  PaintBucket,
  Snowflake,
  Sparkles,
  Truck,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/site";

const SERVICES = [
  {
    icon: Droplets,
    title: "Car Washing",
    desc: "Foam wash, underbody cleaning and interior vacuum for a showroom-fresh finish.",
  },
  {
    icon: Cog,
    title: "Periodic Maintenance",
    desc: "Scheduled service with oil, filters and multi-point inspection as per brand norms.",
  },
  {
    icon: Gauge,
    title: "Engine Diagnostics",
    desc: "Computerised scanning to pinpoint faults before they become expensive repairs.",
  },
  {
    icon: Disc3,
    title: "Brake Repair",
    desc: "Pad, disc and brake fluid service for confident, noise-free stopping power.",
  },
  {
    icon: CarFront,
    title: "Suspension Repair",
    desc: "Shockers, bushes and linkage work that restores ride comfort on Jaipur roads.",
  },
  {
    icon: Snowflake,
    title: "AC Service",
    desc: "Gas top-up, cooling coil cleaning and complete AC performance checks.",
  },
  {
    icon: PaintBucket,
    title: "Denting & Painting",
    desc: "Panel straightening with computerised shade matching and oven-cured paint.",
  },
  {
    icon: FileCheck2,
    title: "Insurance Claim Assistance",
    desc: "End-to-end paperwork support and surveyor coordination for cashless claims.",
  },
  {
    icon: Sparkles,
    title: "Car Detailing",
    desc: "Paint correction, ceramic-grade polish and deep interior detailing.",
  },
  {
    icon: Brush,
    title: "Wheel Alignment",
    desc: "Precision alignment and balancing for even tyre wear and stable steering.",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    desc: "Load testing and genuine battery replacement with on-the-spot fitment.",
  },
  {
    icon: Truck,
    title: "Pickup & Drop Service",
    desc: "We collect your car from home or office and deliver it back after service.",
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-surface">
      <SectionHeading
        eyebrow="Our Services"
        title="Complete Car Care Under One Roof"
        description="Multi-brand expertise, genuine parts support and transparent pricing on every job card."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <article
            key={service.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lift"
            style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
          >
            <div className="bg-gradient-brand absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            <span className="bg-accent/10 flex size-12 items-center justify-center rounded-xl text-accent transition-smooth group-hover:bg-gradient-blue group-hover:text-accent-foreground">
              <service.icon className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            <Button asChild variant="outlineBrand" size="sm" className="mt-5 h-9 rounded-lg px-4">
              <a
                href={whatsappLink(
                  `Hello ${SITE.name}, I need ${service.title} for my car. Please share the details.`,
                )}
              >
                Book on WhatsApp
              </a>
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}
