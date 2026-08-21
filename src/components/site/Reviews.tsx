import { BadgeCheck, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section, SectionHeading } from "./Section";
import { REVIEWS, SITE } from "@/lib/site";

export function Reviews() {
  return (
    <Section id="reviews">
      <SectionHeading
        eyebrow="Google Reviews"
        title="Trusted by Car Owners in Jaipur"
        description={`${SITE.rating} Google rating. Honest work, clear estimates and updates on WhatsApp.`}
      />

      <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-6 ${i < 4 ? "fill-brand text-brand" : "fill-brand/40 text-brand/40"}`}
            />
          ))}
        </div>
        <p className="font-display text-2xl font-extrabold text-foreground">
          {SITE.rating}
          <span className="ml-2 text-base font-medium text-muted-foreground">Google Rating</span>
        </p>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="mt-12">
        <CarouselContent>
          {REVIEWS.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-blue flex size-12 items-center justify-center rounded-full font-display text-sm font-bold text-accent-foreground">
                    {review.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{review.place}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-3.5 ${i < review.rating ? "fill-brand text-brand" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{review.text}”
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  <BadgeCheck className="size-3.5" />
                  Verified customer · {review.service}
                </p>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex justify-end gap-2">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </Section>
  );
}
