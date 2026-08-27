"use client";

import { useEffect, useState } from "react";

import { BOOKING_MESSAGE, whatsappLink } from "@/lib/site";

const PLACEHOLDERS = [
  {
    title: "Google reviews will appear here",
    text: "This carousel is ready for genuine Google reviews. We do not invent testimonials.",
  },
  {
    title: "Ask the workshop directly",
    text: "Until the listing feed is connected, contact Auto Point on WhatsApp for recent customer references.",
  },
  {
    title: "Real voices only",
    text: "When live reviews are available, they will auto-slide here — pause on hover, one card at a time.",
  },
] as const;

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % PLACEHOLDERS.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="reviews" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-10">
          <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Reviews</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">Trusted by Car Owners.</h2>
        </div>

        <div
          className="relative overflow-hidden border border-white/10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {PLACEHOLDERS.map((item) => (
              <article key={item.title} className="min-w-full bg-background px-6 py-16 sm:px-16">
                <p className="font-display text-3xl sm:text-4xl">{item.title}</p>
                <p className="mt-4 max-w-xl text-muted-foreground">{item.text}</p>
                <a
                  href={whatsappLink(BOOKING_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-xs tracking-[0.18em] text-brand uppercase"
                >
                  Talk to Auto Point
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          {PLACEHOLDERS.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-10 ${i === index ? "bg-brand" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
