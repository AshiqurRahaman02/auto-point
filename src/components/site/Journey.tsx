"use client";

import { useEffect, useRef, useState } from "react";

import { JOURNEY } from "@/lib/site";

export function Journey() {
  const ref = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.72;
      const progress = (start - rect.top) / (rect.height * 0.85);
      setFill(Math.min(100, Math.max(0, progress * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Process</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">From Drop-Off to Drive-Away.</h2>
        </div>

        <ol ref={ref} className="relative mt-14 grid gap-0 md:grid-cols-5">
          <span className="pointer-events-none absolute top-6 bottom-6 left-0 w-px bg-white/10 md:top-0 md:right-0 md:bottom-auto md:left-0 md:h-px md:w-full" />
          <span
            className="pointer-events-none absolute top-6 left-0 w-px origin-top bg-brand md:hidden"
            style={{ height: `${fill}%` }}
          />
          <span
            className="pointer-events-none absolute top-0 left-0 hidden h-px bg-brand md:block"
            style={{ width: `${fill}%` }}
          />
          {JOURNEY.map((step, i) => {
            const active = fill >= (i / Math.max(JOURNEY.length - 1, 1)) * 100 - 4;
            return (
              <li
                key={step.n}
                className="reveal relative py-6 pl-6 md:pt-10 md:pb-0 md:pl-0 md:pr-6"
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <span
                  className={`absolute top-6 -left-[5px] size-2.5 rounded-full transition-colors duration-500 md:top-0 md:left-0 ${
                    active ? "bg-brand" : "bg-white/25"
                  }`}
                />
                <p className="font-display text-3xl text-brand">{step.n}</p>
                <h3 className="mt-3 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
