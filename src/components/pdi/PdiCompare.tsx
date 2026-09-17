import { PDI_COMPARE } from "@/lib/pdi";

export function PdiCompare() {
  return (
    <section id="compare" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Feature matrix
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            New cars vs used cars
          </h2>
          <p className="mt-4 text-muted-foreground">
            Same workshop. The protocol shifts with the car’s age and history.
          </p>
        </div>
        <div className="reveal mt-10 overflow-x-auto border-y border-border">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-white">
                <th className="px-4 py-4 font-semibold text-navy">Aspect</th>
                <th className="px-4 py-4 font-semibold text-navy">Used car PDI</th>
                <th className="px-4 py-4 font-semibold text-navy">New car PDI</th>
              </tr>
            </thead>
            <tbody>
              {PDI_COMPARE.map((row) => (
                <tr key={row.aspect} className="border-b border-border last:border-0">
                  <td className="px-4 py-4 font-medium text-navy">{row.aspect}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.used}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.neu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
