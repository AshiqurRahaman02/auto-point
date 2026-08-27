"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
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
          "transition-smooth border-b",
          scrolled
            ? "border-white/10 bg-background/85 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="leading-none">
            <span className="font-display block text-lg tracking-[0.2em]">AUTO POINT</span>
            <span className="mt-1 block text-[9px] tracking-[0.22em] text-muted-foreground">
              MULTI BRAND CAR SERVICE CENTER
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[11px] font-medium tracking-[0.2em] text-foreground/70 uppercase transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden rounded-none bg-brand text-brand-foreground hover:bg-brand/90 lg:inline-flex"
            >
              <a href="#booking">Book a Service</a>
            </Button>
            <button
              type="button"
              className="grid size-10 place-items-center text-foreground lg:hidden"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "overflow-hidden bg-background lg:hidden",
            open ? "max-h-[28rem] border-t border-white/10" : "max-h-0",
          )}
        >
          <ul className="px-4 py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm tracking-[0.16em] uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href={SITE.telHref} className="inline-flex items-center gap-2 text-sm text-brand">
                <Phone className="size-4" /> {SITE.phonePretty}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
