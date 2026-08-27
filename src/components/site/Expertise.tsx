import { Check } from "lucide-react";

import { CHECKLIST, IMG } from "@/lib/site";

export function Expertise() {
  return (
    <section id="about" className="bg-surface">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[680px]">
          <img
            src={IMG.mechanic}
            alt="Technician working in the engine bay of a modern car"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/40" />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-10 lg:px-16">
          <div className="reveal">
            <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Craft</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl">
              Your Car.
              <br />
              Our Expertise.
            </h2>
            <p className="mt-5 max-w-md text-lg text-foreground/85">
              We believe car servicing should be simple, transparent and professional.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              From diagnostics and electrical work to body repair, painting, cleaning and
              accessories, Auto Point provides a complete range of automotive services under one
              roof.
            </p>
            <ul className="mt-8 space-y-3">
              {CHECKLIST.map((item, i) => (
                <li
                  key={item}
                  className="reveal flex items-center gap-3 text-sm"
                  style={{ "--reveal-delay": `${120 + i * 80}ms` } as React.CSSProperties}
                >
                  <span className="grid size-6 place-items-center rounded-full bg-brand/15 text-brand">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
