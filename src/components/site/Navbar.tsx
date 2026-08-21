import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { useScrollProgress } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-smooth",
          scrolled
            ? "bg-background/90 shadow-soft backdrop-blur-xl"
            : "bg-primary/20 backdrop-blur-md",
        )}
      >
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="bg-gradient-brand flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold text-brand-foreground shadow-glow">
              M
            </span>
            <span className="leading-tight">
              <span
                className={cn(
                  "block font-display text-base font-bold tracking-tight sm:text-lg",
                  scrolled ? "text-foreground" : "text-primary-foreground",
                )}
              >
                {SITE.name}
              </span>
              <span
                className={cn(
                  "hidden text-[11px] font-medium tracking-wide uppercase sm:block",
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
                )}
              >
                Jagatpura, Jaipur
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-smooth after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100",
                    scrolled
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-primary-foreground/85 hover:text-primary-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex lg:hidden">
              <a href={SITE.telHref} aria-label={`Call ${SITE.name}`}>
                <Phone />
              </a>
            </Button>
            <Button asChild variant="brand" size="lg" className="hidden sm:inline-flex">
              <a href="#booking">Book Service</a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 transition-smooth lg:hidden",
                scrolled ? "text-foreground" : "text-primary-foreground",
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "overflow-hidden bg-background/95 backdrop-blur-xl transition-smooth lg:hidden",
            open ? "max-h-[32rem] border-t border-border" : "max-h-0",
          )}
        >
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/85 transition-smooth hover:bg-surface hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-3 pt-2 pb-4">
              <Button asChild variant="brand" size="lg" className="w-full">
                <a href="#booking" onClick={() => setOpen(false)}>
                  Book Service
                </a>
              </Button>
            </li>
          </ul>
        </div>

        <div className="h-0.5 w-full bg-transparent">
          <div
            className="bg-gradient-brand h-full transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
}
