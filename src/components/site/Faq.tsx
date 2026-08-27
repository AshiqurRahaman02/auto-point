import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="faqs" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="reveal mb-10">
          <p className="text-[11px] tracking-[0.28em] text-brand uppercase">FAQ</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Questions, answered.</h2>
        </div>
        <Accordion type="single" collapsible className="reveal">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`q-${i}`} className="border-white/10">
              <AccordionTrigger className="text-left font-display text-lg tracking-wide hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
