import { PDI_WHO } from "@/lib/pdi";

export function PdiWho() {
  return (
    <section id="who" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Who it’s for
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Who should get a PDI?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Anyone about to pay for a car they haven’t had independently checked.
          </p>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PDI_WHO.map((item, i) => (
            <li
              key={item.title}
              className="reveal border-t border-border pt-6"
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
