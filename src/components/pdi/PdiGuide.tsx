import { PDI_STATS } from "@/lib/pdi";

export function PdiGuide() {
  return (
    <section id="guide" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Educational guide
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            What is Pre-Delivery Inspection?
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              A Pre-Delivery Inspection is a thorough check of a vehicle before it is handed to the
              buyer. New from a dealership or used from a private seller — PDI is how you confirm
              the car is in the condition you think it is, mechanically, structurally, cosmetically,
              and on paper.
            </p>
            <p>
              For <span className="font-medium text-navy">new cars</span>, we look for transit
              damage, manufacturing marks, dealer handling, demo use, and whether the accessories
              you paid for are actually there. Many buyers assume a new car is perfect. A large
              share of PDIs still find at least one issue — from a paint scratch to a software
              fault.
            </p>
            <p>
              For <span className="font-medium text-navy">used cars</span>, we go deeper: accident
              clues, odometer honesty, hidden mechanicals, structure, paint thickness, OBD codes,
              and documents — RC, insurance, hypothecation. A proper used-car PDI can save you from
              a car whose repairs cost more than the inspection, many times over.
            </p>
          </div>
        </div>

        <div className="reveal mt-16 grid gap-10 lg:grid-cols-2">
          <div className="border-t border-border pt-8">
            <h3 className="font-display text-2xl font-semibold text-navy">Why PDI matters</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Skipping it — new or used — is how expensive problems show up after you have already
              paid.
            </p>
            <div className="mt-8 space-y-8">
              <div>
                <p className="text-sm font-semibold tracking-[0.12em] text-brand uppercase">
                  For new cars
                </p>
                <p className="mt-2 text-navy">Don’t assume factory-fresh means zero errors.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Yards, trucks, and handling leave scratches, dents, and the odd mechanical mark.
                  Some deliveries are demo cars or panels already touched up. PDI is when you still
                  have leverage to reject or demand a fix.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.12em] text-brand uppercase">
                  For used cars
                </p>
                <p className="mt-2 text-navy">Avoid the lemon-car surprise.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Accident history, rolled-back meters, pending loans, hidden engine issues — a
                  paint gauge and OBD scan catch a lot that a short test drive will not.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-navy">What inspections commonly find</p>
            <ul className="mt-6 grid grid-cols-2 gap-px bg-border">
              {PDI_STATS.map((stat) => (
                <li key={stat.label} className="bg-background p-6">
                  <p className="font-display text-3xl font-bold text-navy sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-navy">{stat.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{stat.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              A PDI at ₹1,499–₹2,999 is cheap next to a ₹50,000–₹5,00,000 repair bill on a car you
              already own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
