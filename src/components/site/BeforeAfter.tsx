import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import beforeWash from "@/assets/before-wash.jpg";
import afterWash from "@/assets/after-wash.jpg";
import beforeDent from "@/assets/before-dent.jpg";
import afterDent from "@/assets/after-dent.jpg";
import galleryDetailing from "@/assets/gallery-detailing.jpg";

const ITEMS = [
  { label: "Car Wash", before: beforeWash, after: afterWash },
  { label: "Dent Repair & Paint Restoration", before: beforeDent, after: afterDent },
  { label: "Detailing", before: beforeWash, after: galleryDetailing },
];

function Compare({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <figure className="reveal overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div
        ref={frameRef}
        className="relative aspect-4/3 cursor-ew-resize touch-none select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={after}
          alt={`${label} after service at Mehta Automobile`}
          loading="lazy"
          width={1024}
          height={768}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before}
            alt={`${label} before service at Mehta Automobile`}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
            style={{ width: frameRef.current?.clientWidth ?? "100%", maxWidth: "none" }}
          />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-primary/80 px-3 py-1 text-[11px] font-bold tracking-wide text-primary-foreground uppercase backdrop-blur">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-brand px-3 py-1 text-[11px] font-bold tracking-wide text-brand-foreground uppercase">
          After
        </span>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-brand"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-glow">
            <MoveHorizontal className="size-4" />
          </span>
        </div>
      </div>
      <figcaption className="flex items-center justify-between px-5 py-4">
        <span className="font-display text-sm font-semibold text-foreground">{label}</span>
        <span className="text-xs text-muted-foreground">Drag to compare</span>
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  return (
    <Section id="before-after" className="bg-surface">
      <SectionHeading
        eyebrow="Before & After"
        title="Results You Can Actually See"
        description="Real transformations from our wash, detailing, dent repair and paint restoration bays."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <Compare key={item.label} {...item} />
        ))}
      </div>
    </Section>
  );
}
