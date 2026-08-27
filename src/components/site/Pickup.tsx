import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IMG, whatsappLink } from "@/lib/site";

const STEPS = ["Pickup", "Service", "Quality Check", "Drop"];

export function Pickup() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <img
        src={IMG.underCar}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal border border-white/10 bg-background/50 px-6 py-14 backdrop-blur-sm sm:px-12">
          <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Convenience</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">We Make Car Service Easier.</h2>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-lg tracking-wide text-brand sm:text-2xl">
            {STEPS.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-3">
                {step}
                {i < STEPS.length - 1 ? <ArrowRight className="size-4 text-foreground/40" /> : null}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Book your service through WhatsApp and coordinate vehicle pickup and delivery directly
            with the workshop.
          </p>
          <Button
            asChild
            className="mt-8 h-12 rounded-none bg-brand text-brand-foreground hover:bg-brand/90"
          >
            <a
              href={whatsappLink(
                "Hello Auto Point, I would like to request vehicle pickup for a service. Please share availability.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Pickup
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
