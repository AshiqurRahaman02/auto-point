import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <Section id="faqs" className="bg-surface">
      <SectionHeading
        eyebrow="FAQs"
        title="Questions Car Owners Ask First"
        description="Straight answers before you book. Still unsure? WhatsApp us and we will guide you."
      />
      <Accordion type="single" collapsible className="reveal mx-auto mt-12 max-w-3xl">
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            value={`faq-${i}`}
            className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-soft"
          >
            <AccordionTrigger className="font-display text-base font-semibold hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
