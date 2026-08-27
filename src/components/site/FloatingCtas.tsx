"use client";

import { CalendarDays, MessageCircle, Phone } from "lucide-react";

import { BOOKING_MESSAGE, SITE, whatsappLink } from "@/lib/site";

export function FloatingCtas() {
  const href = whatsappLink(BOOKING_MESSAGE);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="animate-wa fixed right-5 bottom-6 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 md:inline-flex"
      >
        <MessageCircle className="size-5 shrink-0" />
        Book on WhatsApp
      </a>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="animate-wa fixed right-4 bottom-20 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg md:hidden"
      >
        <MessageCircle className="size-6" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-1">
          <a
            href={SITE.telHref}
            className="inline-flex h-12 flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-navy"
          >
            <Phone className="size-4" /> Call
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-[#128C4A]"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a
            href="#booking"
            className="inline-flex h-12 flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-brand"
          >
            <CalendarDays className="size-4" /> Book Service
          </a>
        </div>
      </div>
    </>
  );
}
