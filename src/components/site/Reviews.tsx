import { Star } from "lucide-react";

import { REVIEWS, SITE } from "@/lib/site";

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            What car owners say.
          </h2>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="size-4 fill-brand text-brand" />
            {SITE.rating} · {SITE.reviewCount} Google reviews
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {REVIEWS.map((item, i) => (
            <li
              key={item.handle}
              className="reveal border-b border-border pb-8"
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <article>
                <header className="flex items-start gap-3">
                  <img
                    src={item.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="truncate font-semibold text-navy">{item.name}</p>
                      <time className="shrink-0 text-xs text-muted-foreground">{item.time}</time>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.handle}</p>
                  </div>
                </header>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/90">{item.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
