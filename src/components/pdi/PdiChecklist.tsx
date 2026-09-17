import lift from "@/assets/gallery/bay-swift-on-lift.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PDI_CHECKLIST } from "@/lib/pdi";

export function PdiChecklist() {
  return (
    <section id="checklist" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="reveal text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            280+ inspection points
          </p>
          <h2 className="reveal mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Complete PDI checklist
          </h2>
          <p className="reveal mt-4 text-muted-foreground">
            Open a category to see what the technician actually looks at on-site.
          </p>
          <div className="reveal mt-8 overflow-hidden">
            <img
              src={lift}
              alt="Maruti Swift on the lift at Auto Point"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
        <div className="reveal lg:col-span-7">
          <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-border">
            {PDI_CHECKLIST.map((cat, i) => (
              <AccordionItem key={cat.title} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span>
                    <span className="block font-display text-lg font-semibold text-navy">
                      {cat.title}
                    </span>
                    <span className="mt-1 block text-sm font-normal text-muted-foreground">
                      {cat.points} points — {cat.blurb}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-navy/80">
                    {cat.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
