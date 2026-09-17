import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="faqs" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="reveal font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          Questions, answered.
        </h2>
        <p className="reveal mt-3 text-muted-foreground">
          Short answers. For anything else — Book or Call.
        </p>
        <Accordion type="single" collapsible className="reveal mt-10">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`q-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium text-navy hover:no-underline">
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
