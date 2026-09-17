import howImg from "@/assets/gallery/mechanics-repairing-suv.jpg";
import { PDI_STEPS } from "@/lib/pdi";

export function PdiHowItWorks() {
  return (
    <section id="how" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="reveal overflow-hidden lg:col-span-5">
          <img
            src={howImg}
            alt="Auto Point technicians inspecting a car"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[520px]"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-4">
          <p className="reveal text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            How it works
          </p>
          <h2 className="reveal mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Simple 4-step process
          </h2>
          <p className="reveal mt-4 max-w-md text-muted-foreground">
            From WhatsApp to a detailed report. No online payment — we confirm the slot, then inspect.
          </p>
          <ol className="mt-10">
            {PDI_STEPS.map((step, i) => (
              <li
                key={step.n}
                className="reveal border-t border-border py-6 last:border-b"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <p className="text-base font-semibold text-navy">
                  <span className="text-brand">{step.n}</span>
                  <span className="mx-2 text-navy/30">—</span>
                  {step.title}
                  <span className="ml-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {step.time}
                  </span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
