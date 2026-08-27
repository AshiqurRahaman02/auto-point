import { useCountUp } from "@/hooks/use-reveal";

const STATS = [
  { value: 11, label: "Multi-Brand", sub: "Car Care" },
  { value: 8, label: "Complete", sub: "Service Solutions" },
  { value: 24, label: "Availability", sub: "Listed hours" },
  { value: 1, label: "One Stop", sub: "Car Care Center" },
] as const;

function Stat({ value, label, sub }: { value: number; label: string; sub: string }) {
  const { ref, value: current } = useCountUp(value);
  const shown =
    value === 24
      ? `${current}/7`
      : value === 8 || value === 1
        ? String(current).padStart(2, "0")
        : String(current);

  return (
    <div className="border-white/10 px-4 py-12 text-center sm:border-l sm:first:border-l-0">
      <p className="font-display text-5xl text-brand sm:text-6xl">
        <span ref={ref}>{shown}</span>
      </p>
      <p className="mt-3 font-display text-xl">{label}</p>
      <p className="mt-1 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">{sub}</p>
    </div>
  );
}

export function TrustStats() {
  return (
    <section className="border-y border-white/10 bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {STATS.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} sub={stat.sub} />
        ))}
      </div>
    </section>
  );
}
