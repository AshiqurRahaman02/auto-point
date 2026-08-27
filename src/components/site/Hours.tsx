import { BOOKING_MESSAGE, IMG, SITE, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Hours() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <img
        src={IMG.inspection}
        alt="Technician inspecting an engine bay with a work light"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6">
        <div className="reveal">
          <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Always on</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl">
            Your Car Doesn&apos;t
            <br />
            Choose the Time.
          </h2>
          <p className="mt-4 text-lg text-foreground/80">We&apos;re here when you need us.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="animate-status size-3 rounded-full bg-emerald-400" />
            <span className="font-display text-3xl tracking-[0.2em] text-brand">Open 24 Hours</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">{SITE.hoursNote}</p>
          <Button
            asChild
            className="mt-8 h-12 rounded-none bg-brand text-brand-foreground hover:bg-brand/90"
          >
            <a href={whatsappLink(BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer">
              Contact Auto Point
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
