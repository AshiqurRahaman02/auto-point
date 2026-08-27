"use client";

import { useRef, useState } from "react";

import afterDent from "@/assets/after-dent.jpg";
import afterWash from "@/assets/after-wash.jpg";
import beforeDent from "@/assets/before-dent.jpg";
import beforeWash from "@/assets/before-wash.jpg";

const PAIRS = [
  {
    label: "Paint restoration",
    before: beforeDent,
    after: afterDent,
    beforeAlt: "Damaged paint and surface chip before restoration",
    afterAlt: "Restored metallic panel after paint work",
  },
  {
    label: "Car cleaning",
    before: beforeWash,
    after: afterWash,
    beforeAlt: "Muddy vehicle before wash",
    afterAlt: "Clean finished vehicle after wash and detailing",
  },
] as const;

export function BeforeAfter() {
  const [pair, setPair] = useState(0);
  const active = PAIRS[pair] ?? PAIRS[0];

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-brand uppercase">Results</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl">See The Difference.</h2>
          </div>
          <div className="flex gap-2">
            {PAIRS.map((item, i) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setPair(i)}
                className={`rounded-none border px-4 py-2 text-xs tracking-[0.16em] uppercase ${
                  pair === i
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-white/15 text-foreground/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {active ? <Compare key={active.label} pair={active} /> : null}
        <p className="mt-4 text-xs text-muted-foreground">
          Drag the handle to compare. Images illustrate typical workshop results.
        </p>
      </div>
    </section>
  );
}

function Compare({
  pair,
}: {
  pair: {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
  };
}) {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);

  function move(clientX: number) {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    const next = ((clientX - box.left) / box.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }

  return (
    <div
      ref={ref}
      className="reveal relative mt-10 aspect-[16/9] cursor-ew-resize overflow-hidden border border-white/10 select-none"
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons) move(e.clientX);
      }}
    >
      <img
        src={pair.after}
        alt={pair.afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={pair.before}
        alt={pair.beforeAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="absolute inset-y-0 w-px bg-brand" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand bg-background text-[10px] tracking-widest text-brand">
          DRAG
        </span>
      </div>
    </div>
  );
}
