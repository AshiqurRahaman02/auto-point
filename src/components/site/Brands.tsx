import { BRANDS } from "@/lib/site";

export function Brands() {
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="reveal text-[11px] tracking-[0.28em] text-brand uppercase">
          Multi-brand expertise
        </p>
        <h2 className="reveal mt-3 font-display text-4xl sm:text-6xl">
          One Workshop. Multiple Brands.
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-muted-foreground">
          Professional car care across multiple vehicle brands. Auto Point is a multi-brand workshop
          — not an authorised dealer for the marques shown.
        </p>
      </div>
      <div
        className="marquee-paused mt-12"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max gap-12 px-8">
          {loop.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-display text-3xl tracking-[0.18em] text-foreground/35 uppercase sm:text-4xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
