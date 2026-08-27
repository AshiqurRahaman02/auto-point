import { ArrowUpRight, Check, Phone } from "lucide-react";

import storefront from "@/assets/auto-point-storefront.png";
import { Button } from "@/components/ui/button";
import { BOOKING_MESSAGE, SITE, whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="bg-white pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <p className="hero-fade text-[11px] font-medium tracking-[0.28em] text-navy/50 uppercase">
            Multi-Brand Automotive Care
          </p>
          <h1
            className="hero-rise mt-5 font-display text-5xl leading-[0.95] font-semibold tracking-tight text-navy uppercase sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Complete
            <br />
            Car Care.
            <br />
            <span className="text-brand">Done Right.</span>
          </h1>
          <p
            className="hero-fade mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "280ms" }}
          >
            Professional servicing, repairs, detailing and complete automotive care — handled by
            experienced technicians.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "420ms" }}>
            <Button
              asChild
              className="h-12 rounded-full bg-brand px-7 text-brand-foreground hover:-translate-y-0.5 hover:bg-brand/90"
            >
              <a href={whatsappLink(BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer">
                Book a Service <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-navy/15 bg-white px-7 text-navy hover:-translate-y-0.5 hover:bg-background"
            >
              <a href={SITE.telHref}>
                <Phone className="size-4" /> Call Now
              </a>
            </Button>
          </div>
          <ul
            className="hero-fade mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy/80"
            style={{ animationDelay: "560ms" }}
          >
            {["Multi-Brand Service", "Professional Care", "Easy Booking"].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-3.5 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div className="hero-image-in relative">
            <div className="absolute -left-3 top-10 hidden h-28 w-px bg-brand lg:block" />
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_80px_-28px_rgb(15_23_42/0.22)]">
              <img
                src={storefront}
                alt="Auto Point Multi Brand Car Service Center storefront on Tonk Road, Jaipur"
                width={1600}
                height={900}
                fetchPriority="high"
                decoding="async"
                className="animate-ken aspect-[4/3] w-full object-cover object-[center_35%]"
              />
            </div>
            <div className="animate-float absolute -bottom-4 left-4 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_40px_-20px_rgb(15_23_42/0.28)] sm:left-6">
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Car Service
              </p>
              <p className="mt-1 text-sm font-medium text-navy">Professional Care</p>
            </div>
            <div
              className="animate-float absolute top-6 right-4 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_40px_-20px_rgb(15_23_42/0.28)] sm:right-8"
              style={{ animationDelay: "1.2s" }}
            >
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">24/7</p>
              <p className="mt-1 text-sm font-medium text-navy">Workshop Availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
