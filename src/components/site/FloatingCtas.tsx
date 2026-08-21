import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const DEFAULT_MSG = `Hello ${SITE.name}, I would like to book a car service.`;

export function FloatingCtas() {
  const [hideForForm, setHideForForm] = useState(false);

  useEffect(() => {
    const booking = document.getElementById("booking");
    if (!booking) return;
    const observer = new IntersectionObserver(
      (entries) => setHideForForm(Boolean(entries[0]?.isIntersecting)),
      { threshold: 0.2 },
    );
    observer.observe(booking);
    return () => observer.disconnect();
  }, []);

  const href = whatsappLink(DEFAULT_MSG);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className={cn(
          "animate-float-pulse animate-ring-pulse fixed right-5 bottom-6 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-lift md:inline-flex",
          hideForForm && "md:hidden",
        )}
      >
        <MessageCircle className="size-5" />
        Book on WhatsApp
      </a>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden",
          hideForForm && "hidden",
        )}
      >
        <div className="grid grid-cols-2 gap-2">
          <a
            href={SITE.telHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
          >
            <Phone className="size-4" /> Call
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" /> Book Service
          </a>
        </div>
      </div>
    </>
  );
}
