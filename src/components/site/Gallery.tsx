import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Section, SectionHeading } from "./Section";
import { cn } from "@/lib/utils";
import galleryBay from "@/assets/gallery-bay.jpg";
import galleryDetailing from "@/assets/gallery-detailing.jpg";
import galleryTechnician from "@/assets/gallery-technician.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import afterWash from "@/assets/after-wash.jpg";
import afterDent from "@/assets/after-dent.jpg";

const ITEMS = [
  {
    src: heroWorkshop,
    alt: "Mehta Automobile workshop exterior and service yard in Jagatpura",
    cat: "Workshop",
  },
  { src: galleryBay, alt: "Service bays with cars on hydraulic lifts", cat: "Service Bays" },
  {
    src: galleryTechnician,
    alt: "Technician inspecting a vehicle at Mehta Automobile",
    cat: "Technicians",
  },
  { src: afterWash, alt: "Customer car after premium wash", cat: "Customer Cars" },
  { src: galleryDetailing, alt: "Interior detailing bay", cat: "Workshop" },
  { src: afterDent, alt: "Paint restoration after dent repair", cat: "Before & After" },
] as const;

const CATS = [
  "All",
  "Workshop",
  "Service Bays",
  "Technicians",
  "Customer Cars",
  "Before & After",
] as const;

export function Gallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () => (cat === "All" ? ITEMS : ITEMS.filter((item) => item.cat === cat)),
    [cat],
  );

  const openItem = active !== null ? filtered[active] : undefined;

  return (
    <Section id="gallery" className="bg-surface">
      <SectionHeading
        eyebrow="Gallery"
        title="Inside the Workshop"
        description="Service bays, technicians and finished cars from our Jagatpura facility."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setCat(c);
              setActive(null);
            }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-smooth",
              cat === c
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item, i) => (
          <li key={item.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="block w-full overflow-hidden rounded-2xl border border-border shadow-soft"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-smooth group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl overflow-hidden border-0 bg-primary p-0">
          <DialogTitle className="sr-only">{openItem?.alt ?? "Workshop photo"}</DialogTitle>
          {openItem ? (
            <img
              src={openItem.src}
              alt={openItem.alt}
              className="max-h-[80vh] w-full object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
