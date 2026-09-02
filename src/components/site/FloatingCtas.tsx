import { Phone } from "lucide-react";

import { SITE } from "@/lib/site";

export function FloatingCtas() {
  return (
    <a
      href={SITE.telHref}
      aria-label="Call Auto Point"
      className="fixed right-4 bottom-5 z-40 inline-flex items-center gap-2 bg-navy px-5 py-3.5 text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 sm:right-5 sm:bottom-6"
    >
      <Phone className="size-4 shrink-0" />
      Call
    </a>
  );
}
