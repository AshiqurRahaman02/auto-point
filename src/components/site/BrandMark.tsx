import audi from "@/assets/logos/audi.webp";
import bmw from "@/assets/logos/bmw.webp";
import honda from "@/assets/logos/honda.png";
import hyundai from "@/assets/logos/hyundai.png";
import jaguar from "@/assets/logos/jaguar.webp";
import mahindra from "@/assets/logos/mahindra.png";
import maruti from "@/assets/logos/maruti.png";
import mercedes from "@/assets/logos/mercedes.webp";
import porsche from "@/assets/logos/porsche.webp";
import tata from "@/assets/logos/tata.png";
import { cn } from "@/lib/utils";

const LOGOS: Record<string, string> = {
  maruti,
  hyundai,
  tata,
  mahindra,
  honda,
  mercedes,
  bmw,
  porsche,
  audi,
  jaguar,
};

export function BrandMark({ slug, name, className }: { slug: string; name: string; className?: string }) {
  const src = LOGOS[slug];
  if (!src) return <span className={className}>{name}</span>;

  return (
    <span className={cn("grid h-20 w-32 place-items-center", className)}>
      <img src={src} alt="" className="max-h-16 max-w-[7.5rem] object-contain" />
    </span>
  );
}
