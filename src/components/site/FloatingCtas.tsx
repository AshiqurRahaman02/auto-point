"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import { BOOKING_MESSAGE, SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingCtas() {
  const [hover, setHover] = useState(false);
  const href = whatsappLink(BOOKING_MESSAGE);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Book Your Service on WhatsApp"
        className={cn(
          "animate-wa fixed right-5 z-40 hidden items-center gap-2 overflow-hidden rounded-full bg-[#25D366] text-sm font-semibold text-white md:inline-flex",
          "bottom-6 h-14 px-4 transition-[width,padding] duration-300",
        )}
      >
        <MessageCircle className="size-5 shrink-0" />
        <span className={cn("whitespace-nowrap", hover ? "max-w-xs" : "max-w-24")}>
          {hover ? "Book Your Service on WhatsApp" : "Book Service"}
        </span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 bg-[#25D366] text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a
            href={SITE.telHref}
            className="inline-flex h-12 items-center justify-center gap-2 bg-brand text-sm font-semibold text-brand-foreground"
          >
            <Phone className="size-4" /> Call Now
          </a>
        </div>
      </div>
    </>
  );
}
