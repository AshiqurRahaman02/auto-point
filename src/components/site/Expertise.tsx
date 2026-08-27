import { useEffect, useRef } from "react";

import { IMG } from "@/lib/site";

export function Expertise() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = Math.max(-28, Math.min(28, (window.innerHeight / 2 - rect.top) * 0.08));
      el.style.transform = `translateY(${offset}px) scale(1.08)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="about" className="relative min-h-[72vh] overflow-hidden bg-navy">
      <img
        ref={imgRef}
        src={IMG.mercedes}
        alt="Premium vehicle after professional care"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-80 will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-navy/20" />
      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 py-20 sm:px-6">
        <div className="reveal flex max-w-xl gap-5">
          <span className="mt-2 h-24 w-px shrink-0 bg-brand" />
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Your Car Deserves
              <br />
              Professional Attention.
            </h2>
            <p className="mt-5 text-white/75">Experienced hands. Proper care. Clear communication.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
