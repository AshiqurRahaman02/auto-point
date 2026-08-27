import { useEffect, useRef } from "react";

import { IMG } from "@/lib/site";

const FLOATS = ["Multi-Brand Service", "Car Repair", "Body Work", "Car Care"];

export function Workshop() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = Math.max(-24, Math.min(24, (window.innerHeight / 2 - rect.top) * 0.06));
      el.style.transform = `translateY(${offset}px) scale(1.06)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="workshop" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Our workshop</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">Welcome to Auto Point.</h2>
          <p className="mt-4 text-muted-foreground">
            A local workshop built around complete automotive care.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden border border-white/10">
          <img
            ref={imgRef}
            src="/og-workshop.jpg"
            alt="Auto Point workshop floor — technician working on engine components"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover will-change-transform lg:aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 sm:bottom-8 sm:left-8">
            {FLOATS.map((label) => (
              <span
                key={label}
                className="glass-card px-3 py-2 text-[10px] tracking-[0.16em] uppercase"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <img
            src={IMG.undercarriage}
            alt="Technician working under a vehicle during mechanical repair"
            loading="lazy"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="flex flex-col justify-center border border-white/10 p-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              This is the real workshop — the place where the work happens. The website is built to
              match the standard of care we want every visit to feel like: clear, professional and
              easy to book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
