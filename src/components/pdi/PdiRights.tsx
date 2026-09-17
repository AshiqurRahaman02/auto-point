import { locations } from "@/lib/site";
import { PDI_RIGHTS } from "@/lib/pdi";

export function PdiRights() {
  return (
    <section id="rights" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Trust &amp; coverage
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Your rights, our commitment
          </h2>
          <p className="mt-4 text-muted-foreground">
            Indian consumer law backs your right to know what you are buying. We write down what we
            see — no conflict with the seller, no dealership pitch.
          </p>
        </div>
        <ul className="mt-12 grid gap-10 lg:grid-cols-3">
          {PDI_RIGHTS.map((item, i) => (
            <li
              key={item.title}
              className="reveal border-t border-border pt-6"
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="reveal mt-16 border-t border-border pt-10">
          <h3 className="font-display text-2xl font-semibold text-navy">Inspected in Jaipur</h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Tonk Road and Jagatpura. We also go to the seller or dealer in the city when the slot
            allows.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {locations.map((shop) => (
              <li key={shop.name} className="border-t border-border pt-5">
                <p className="font-medium text-navy">{shop.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{shop.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
