"use client";

import { BrandMark } from "@/components/site/BrandMark";
import { goToBooking, LUXURY_BRANDS, POPULAR_BRANDS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SelectCar() {
  return (
    <section id="cars" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal flex items-center justify-center gap-6">
          <span className="hidden h-px w-16 bg-border sm:block" />
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Select Your Car
          </h2>
          <span className="hidden h-px w-16 bg-border sm:block" />
        </div>
        <p className="reveal mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
          Choose your brand — popular on Indian roads, plus luxury we service every week. Not an
          authorised dealer.
        </p>

        <BrandGrid title="Popular in India" brands={POPULAR_BRANDS} columns="lg:grid-cols-5" />
        <BrandGrid title="Luxury" brands={LUXURY_BRANDS} columns="lg:grid-cols-5" />
      </div>
    </section>
  );
}

function BrandGrid({
  title,
  brands,
  columns,
}: {
  title: string;
  brands: readonly { name: string; slug: string }[];
  columns: string;
}) {
  return (
    <div className="mt-12">
      <p className="reveal text-center text-sm font-medium text-muted-foreground">{title}</p>
      <ul className={cn("mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3", columns)}>
        {brands.map((brand, i) => (
          <li
            key={brand.slug}
            className="reveal"
            style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
          >
            <button
              type="button"
              onClick={() => goToBooking({ brand: brand.name })}
              className="flex w-full flex-col items-center gap-3 text-navy transition-opacity hover:opacity-70"
            >
              <BrandMark slug={brand.slug} name={brand.name} />
              <span className="text-sm">{brand.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
