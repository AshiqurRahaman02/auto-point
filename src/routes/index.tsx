import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { FloatingCtas } from "@/components/site/FloatingCtas";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Kits } from "@/components/site/Kits";
import { Navbar } from "@/components/site/Navbar";
import { Reviews } from "@/components/site/Reviews";
import { SelectCar } from "@/components/site/SelectCar";
import { Services } from "@/components/site/Services";
import { Tools } from "@/components/site/Tools";
import { WhyUs } from "@/components/site/WhyUs";
import { Workshop } from "@/components/site/Workshop";
import { useScrollReveal } from "@/hooks/use-reveal";
import { SEO } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO.title },
      { name: "description", content: SEO.description },
      { property: "og:title", content: SEO.title },
      { property: "og:description", content: SEO.description },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  useEffect(() => {
    const stored = sessionStorage.getItem("autopoint-hash");
    const id = stored || window.location.hash.replace("#", "");
    if (stored) sessionStorage.removeItem("autopoint-hash");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 320);
    return () => window.clearTimeout(t);
  }, []);

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
        <Hero />
        <Services />
        <Tools />
        <Booking />
        <SelectCar />
        <WhyUs />
        <Kits />
        <Workshop />
        <Reviews />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <FloatingCtas />
    </>
  );
}
