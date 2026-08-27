import { IMG, WHY } from "@/lib/site";

const BACKGROUNDS = [IMG.bay, IMG.service, IMG.underCar, IMG.inspection] as const;

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.64_0.21_38/0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal">
          <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Why Auto Point</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">More Than a Workshop.</h2>
        </div>
        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
          {WHY.map((item, i) => (
            <article
              key={item.title}
              className="group reveal relative min-h-[260px] overflow-hidden bg-background p-8 sm:p-12"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <img
                src={BACKGROUNDS[i]}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-25"
              />
              <div className="relative">
                <p className="font-display text-6xl text-white/10">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
