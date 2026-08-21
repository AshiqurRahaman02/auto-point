import { BadgeCheck, Clock, ShieldCheck, Wrench } from "lucide-react";
import { useCountUp } from "@/hooks/use-reveal";

const STATS = [
  { value: 5000, suffix: "+", label: "Cars Serviced", icon: Wrench },
  { value: 10, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 98, suffix: "%", label: "Customer Satisfaction", icon: BadgeCheck },
  { value: 100, suffix: "%", label: "Transparent Pricing", icon: ShieldCheck },
];

function Stat({
  value,
  suffix,
  label,
  icon: Icon,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: typeof Wrench;
  delay: number;
}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div
      className="reveal glass-card group rounded-2xl p-6 text-center transition-smooth hover:-translate-y-1 hover:shadow-lift"
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      <span className="bg-gradient-blue mx-auto flex size-12 items-center justify-center rounded-xl text-accent-foreground shadow-soft transition-smooth group-hover:scale-110">
        <Icon className="size-5" />
      </span>
      <p className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
        <span ref={ref}>{current}</span>
        {suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export function TrustStats() {
  return (
    <section className="relative z-10 -mt-16 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
