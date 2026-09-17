import mechanicsSuv from "@/assets/gallery/mechanics-repairing-suv.jpg";
import { WHY } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="reveal overflow-hidden lg:col-span-6">
          <img
            src={mechanicsSuv}
            alt="Mechanics at Auto Point working on a car"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[560px]"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-6 lg:pl-8">
          <h2 className="reveal font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            A trusted local workshop — not a dealership pitch.
          </h2>
          <ul className="mt-10">
            {WHY.map((item, i) => (
              <li
                key={item.n}
                className="reveal border-t border-border py-6 last:border-b"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <p className="text-base font-semibold text-navy">
                  <span className="text-brand">{item.n}</span>
                  <span className="mx-2 text-navy/30">—</span>
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
