"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PICKUP_STEPS, whatsappLink } from "@/lib/site";

export function Pickup() {
  const ref = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.7;
      const progress = (start - rect.top) / (rect.height * 0.9);
      setFill(Math.min(100, Math.max(0, progress * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="reveal font-display max-w-xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          We Make Car Service Easier.
        </h2>

        <ol ref={ref} className="relative mt-16 grid gap-10 md:grid-cols-4">
          <span className="pointer-events-none absolute top-5 left-5 h-[calc(100%-2.5rem)] w-px bg-border md:top-5 md:right-8 md:left-8 md:h-px md:w-auto" />
          <span
            className="pointer-events-none absolute top-5 left-5 w-px bg-brand md:hidden"
            style={{ height: `${fill}%` }}
          />
          <span
            className="pointer-events-none absolute top-5 right-8 left-8 hidden h-px bg-brand md:block"
            style={{ width: `calc(${fill}% - 0px)`, maxWidth: "100%" }}
          />
          {PICKUP_STEPS.map((step, i) => (
            <li
              key={step.n}
              className="reveal relative pl-10 md:pl-0"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="absolute top-3 left-3 size-4 rounded-full border-2 border-brand bg-background md:relative md:top-0 md:left-0 md:mb-6 md:block" />
              <p className="font-display text-4xl text-navy/20">{step.n}</p>
              <h3 className="mt-2 text-xl font-semibold text-navy">{step.title}</h3>
            </li>
          ))}
        </ol>

        <p className="reveal mt-10 max-w-xl text-muted-foreground">
          Book your service through WhatsApp and coordinate vehicle pickup and delivery directly
          with the workshop.
        </p>
        <Button
          asChild
          className="reveal mt-8 h-12 rounded-full bg-brand px-7 text-brand-foreground hover:-translate-y-0.5 hover:bg-brand/90"
        >
          <a
            href={whatsappLink(
              "Hello Auto Point, I would like to request vehicle pickup for a service. Please share availability.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Pickup <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
