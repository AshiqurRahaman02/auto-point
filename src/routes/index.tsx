import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Booking } from "@/components/site/Booking";
import { Brands } from "@/components/site/Brands";
import { Contact } from "@/components/site/Contact";
import { Expertise } from "@/components/site/Expertise";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { FloatingCtas } from "@/components/site/FloatingCtas";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Hours } from "@/components/site/Hours";
import { Navbar } from "@/components/site/Navbar";
import { Pickup } from "@/components/site/Pickup";
import { Reviews } from "@/components/site/Reviews";
import { Services } from "@/components/site/Services";
import { TrustStats } from "@/components/site/TrustStats";
import { WhyUs } from "@/components/site/WhyUs";
import { Workshop } from "@/components/site/Workshop";
import { useScrollReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useScrollReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStats />
        <Services />
        <Expertise />
        <Brands />
        <WhyUs />
        <Pickup />
        <BeforeAfter />
        <Workshop />
        <Reviews />
        <Hours />
        <Booking />
        <Contact />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCtas />
    </>
  );
}
