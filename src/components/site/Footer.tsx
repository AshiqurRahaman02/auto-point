import { MessageCircle, Navigation } from "lucide-react";

import { mapsDirections, NAV, SITE, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pb-24 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-[15px] font-semibold tracking-[0.22em] text-navy">AUTO POINT</p>
          <p className="mt-1 text-[10px] tracking-[0.18em] text-muted-foreground">
            MULTI BRAND CAR SERVICE CENTER
          </p>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <a href={SITE.telHref} className="hover:text-brand">
              {SITE.phonePretty}
            </a>
          </p>
          <p>{SITE.addressShort}</p>
          <div className="flex gap-4 pt-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href={mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
              aria-label="Google Maps"
            >
              <Navigation className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        © 2026 Auto Point Multi Brand Car Service Center. All rights reserved.
      </p>
    </footer>
  );
}
