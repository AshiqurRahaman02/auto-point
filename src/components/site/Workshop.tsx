import bayCars from "@/assets/gallery/bay-cars-in-service.jpg";
import bayInnova from "@/assets/gallery/bay-innova-wagonr.jpg";
import baySwift from "@/assets/gallery/bay-swift-on-lift.jpg";
import exteriorSign from "@/assets/gallery/exterior-auto-point-sign.jpg";
import exteriorCastrol from "@/assets/gallery/exterior-castrol-service.jpg";
import exteriorRamp from "@/assets/gallery/exterior-ramp-entrance.jpg";
import exteriorStreet from "@/assets/gallery/exterior-street-front.jpg";
import hatchbackRepair from "@/assets/gallery/hatchback-body-repair.jpg";
import partsStore from "@/assets/gallery/interior-parts-store.jpg";
import mechanicsSuv from "@/assets/gallery/mechanics-repairing-suv.jpg";
import office from "@/assets/gallery/office-reception.jpg";
import yardSuvs from "@/assets/gallery/yard-suvs-under-shade.jpg";

const FEATURED = {
  src: exteriorSign,
  alt: "Auto Point workshop with cars in the yard",
};

const TILES = [
  { src: exteriorCastrol, alt: "Auto Point Castrol Service shopfront" },
  { src: exteriorStreet, alt: "Auto Point street front on the main road" },
  { src: exteriorRamp, alt: "Entrance ramp into the Auto Point bay" },
  { src: yardSuvs, alt: "SUVs in the outdoor service yard" },
  { src: bayCars, alt: "Cars being serviced inside the workshop" },
  { src: baySwift, alt: "Swift on the hydraulic lift" },
  { src: bayInnova, alt: "Innova and WagonR in the service bay" },
  { src: mechanicsSuv, alt: "Mechanics repairing an SUV" },
  { src: hatchbackRepair, alt: "Hatchback front-end repair in progress" },
  { src: partsStore, alt: "Genuine parts and waiting area" },
  { src: office, alt: "Workshop office and reception" },
] as const;

export function Workshop() {
  return (
    <section id="workshop" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
            This is where your car gets cared for.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Two workshops — Tonk Road and Jagatpura. Walk in, see the bay, talk to the team.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:gap-4">
          <figure className="reveal overflow-hidden">
            <img
              src={FEATURED.src}
              alt={FEATURED.alt}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover object-[center_40%] sm:aspect-[2/1]"
            />
          </figure>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {TILES.map((item, i) => (
              <figure
                key={item.src}
                className="reveal overflow-hidden"
                style={{ "--reveal-delay": `${(i + 1) * 50}ms` } as React.CSSProperties}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
