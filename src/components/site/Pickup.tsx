import { CalendarCheck, CheckCircle2, ClipboardList, Car, Wrench, Truck } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/site";

const STEPS = [
  { icon: CalendarCheck, title: "Schedule on WhatsApp", desc: "Share your car and preferred time slot." },
  { icon: Truck, title: "Vehicle Pickup", desc: "Our driver collects the car from your doorstep." },
  { icon: ClipboardList, title: "Expert Inspection", desc: "Multi-point check and a clear estimate before work starts." },
  { icon: Wrench, title: "Service & Repair", desc: "Trained technicians with genuine parts support." },
  { icon: CheckCircle2, title: "Quality Check", desc: "Road test and final inspection by the supervisor." },
  { icon: Car, title: "Vehicle Delivered", desc: "Washed, sanitised and delivered back on time." },
];

export function Pickup() {
  return (
    <Section id="pickup">
      <SectionHeading
        eyebrow="Pickup & Drop"
        title="We Pick Up, Service, and Deliver Back"
        description="Zero-hassle servicing across Jagatpura and nearby Jaipur, without you leaving home or office."
      />

      <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <span className="pointer-events-none absolute inset-x-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" />
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="reveal group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1.5 hover:shadow-lift"
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="flex items-center justify-between">
              <span className="bg-gradient-blue flex size-12 items-center justify-center rounded-xl text-accent-foreground shadow-soft transition-smooth group-hover:rotate-6">
                <step.icon className="size-5" />
              </span>
              <span className="font-display text-4xl font-extrabold text-muted/80">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
          </li>
        ))}
      </ol>

      <div className="reveal mt-12 flex flex-col items-center gap-4 rounded-3xl bg-primary p-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground">
            Need a pickup today?
          </h3>
          <p className="mt-1 text-sm text-primary-foreground/70">
            Slots available daily, {SITE.hours.replace("Daily, ", "")}.
          </p>
        </div>
        <Button asChild variant="brand" size="xl">
          <a
            href={whatsappLink(
              `Hello ${SITE.name}, I would like to request Pickup & Drop for my car.`,
            )}
          >
            Request Pickup & Drop
          </a>
        </Button>
      </div>
    </Section>
  );
}
