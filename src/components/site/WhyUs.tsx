import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const OURS = [
  "Skilled Technicians",
  "Multi-Brand Expertise",
  "Pickup & Drop Facility",
  "Transparent Pricing",
  "Timely Delivery",
  "Genuine Parts Support",
  "Digital Service Updates",
  "Customer First Approach",
];

const OTHERS = [
  "Delayed Delivery",
  "Hidden Charges",
  "No Service Tracking",
  "Inconsistent Quality",
];

export function WhyUs() {
  return (
    <Section id="why-us" className="bg-primary">
      <SectionHeading
        eyebrow="Why Choose Us"
        tone="dark"
        title="Why Owners Across Jaipur Choose Mehta Automobile"
        description="A workshop experience built on honesty, skill and communication, not surprises on the final bill."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="reveal glass-card rounded-3xl border-brand/30 p-8">
          <h3 className="font-display text-xl font-bold text-foreground">Mehta Automobile</h3>
          <p className="mt-1 text-sm text-muted-foreground">What every customer gets, every time.</p>
          <ul className="mt-6 space-y-3">
            {OURS.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-surface p-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="reveal rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <h3 className="font-display text-xl font-bold text-primary-foreground">
            Ordinary Garages
          </h3>
          <p className="mt-1 text-sm text-primary-foreground/60">
            The frustrations we designed our process to remove.
          </p>
          <ul className="mt-6 space-y-3">
            {OTHERS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 p-3"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive-foreground">
                  <X className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-primary-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
