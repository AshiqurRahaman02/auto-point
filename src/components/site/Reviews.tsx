"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { mapsDirections, SITE } from "@/lib/site";

const SLIDES = [
  {
    title: `${SITE.rating} on Google`,
    text: "The listed Google rating for Auto Point Multi Brand Car Service Center.",
  },
  {
    title: `${SITE.reviewCount} reviews`,
    text: "Customer comments from Google will appear here. We do not invent testimonials.",
  },
  {
    title: "Read them on Maps",
    text: "Open the Google listing to see every genuine review in full.",
  },
] as const;

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="reveal font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          What Car Owners Say.
        </h2>

        <div className="reveal mt-12 flex flex-wrap items-end gap-6">
          <p className="flex items-center gap-3 font-display text-7xl font-semibold tracking-tight text-navy">
            <Star className="size-10 fill-brand text-brand" />
            {SITE.rating}
          </p>
          <p className="pb-2 text-lg text-muted-foreground">{SITE.reviewCount} Reviews</p>
        </div>

        <div
          className="reveal relative mt-10 overflow-hidden rounded-3xl bg-background"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((item) => (
              <article key={item.title} className="min-w-full px-6 py-14 sm:px-14">
                <p className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  {item.title}
                </p>
                <p className="mt-4 max-w-xl text-muted-foreground">{item.text}</p>
                <a
                  href={mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-sm font-medium text-brand"
                >
                  Open Google listing →
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          {SLIDES.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-10 rounded-full ${i === index ? "bg-brand" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
