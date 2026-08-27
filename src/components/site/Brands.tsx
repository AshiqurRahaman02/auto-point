import { BRANDS } from "@/lib/site";

export function Brands() {
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h2 className="reveal font-display text-4xl font-semibold tracking-tight text-navy sm:text-6xl">
          One Workshop.
          <br />
          Multiple Brands.
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-muted-foreground">
          Multi-brand automotive service for a wide range of vehicles. Auto Point is not an
          authorised dealer for the marques shown.
        </p>
      </div>
      <div
        className="marquee-paused mt-14"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max gap-14 px-8">
          {loop.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="text-2xl font-semibold tracking-[0.16em] text-navy/25 uppercase transition-colors duration-300 hover:text-navy sm:text-3xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
