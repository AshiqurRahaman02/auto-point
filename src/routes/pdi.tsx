import { createFileRoute } from "@tanstack/react-router";

import { PdiBooking } from "@/components/pdi/PdiBooking";
import { PdiChecklist } from "@/components/pdi/PdiChecklist";
import { PdiCompare } from "@/components/pdi/PdiCompare";
import { PdiFaq } from "@/components/pdi/PdiFaq";
import { PdiGuide } from "@/components/pdi/PdiGuide";
import { PdiHero } from "@/components/pdi/PdiHero";
import { PdiHowItWorks } from "@/components/pdi/PdiHowItWorks";
import { PdiOfferings } from "@/components/pdi/PdiOfferings";
import { PdiRights } from "@/components/pdi/PdiRights";
import { PdiSellers } from "@/components/pdi/PdiSellers";
import { PdiTech } from "@/components/pdi/PdiTech";
import { PdiWho } from "@/components/pdi/PdiWho";
import { FloatingCtas } from "@/components/site/FloatingCtas";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { useScrollReveal } from "@/hooks/use-reveal";
import { PDI_SEO } from "@/lib/pdi";

export const Route = createFileRoute("/pdi")({
  head: () => ({
    meta: [
      { title: PDI_SEO.title },
      { name: "description", content: PDI_SEO.description },
      { property: "og:title", content: PDI_SEO.title },
      { property: "og:description", content: PDI_SEO.description },
    ],
  }),
  component: PdiRoute,
});

function PdiRoute() {
  useScrollReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <PdiHero />
        <PdiOfferings />
        <PdiHowItWorks />
        <PdiTech />
        <PdiChecklist />
        <PdiGuide />
        <PdiCompare />
        <PdiWho />
        <PdiSellers />
        <PdiRights />
        <PdiBooking />
        <PdiFaq />
      </main>
      <Footer />
      <FloatingCtas />
    </>
  );
}
