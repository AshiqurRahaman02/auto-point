"use client";

import { Star } from "lucide-react";

import { mapsDirections, SITE } from "@/lib/site";

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            What Car Owners Say.
          </h2>
        </div>

        <div className="reveal mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-2 font-display text-7xl font-semibold tracking-tight text-navy">
              <Star className="size-10 fill-brand text-brand" />
              {SITE.rating}
            </p>
            <p className="mt-3 text-lg text-muted-foreground">{SITE.reviewCount} Reviews on Google</p>
            <a
              href={mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-brand hover:underline"
            >
              Read reviews on Google Maps →
            </a>
          </div>
          <blockquote className="lg:col-span-7">
            <p className="font-display text-3xl leading-snug font-medium tracking-tight text-navy/80 sm:text-4xl">
              “Genuine Google reviews will appear here. We do not invent testimonials.”
            </p>
            <footer className="mt-6 text-sm text-muted-foreground">
              Auto Point · Beelwa, Tonk Road, Jaipur
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
