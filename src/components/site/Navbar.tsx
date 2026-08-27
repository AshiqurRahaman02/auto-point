"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b bg-white transition-all duration-500",
          scrolled ? "border-border/80 shadow-[0_8px_30px_-18px_rgb(15_23_42/0.25)] backdrop-blur-xl" : "border-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="hero-fade leading-none">
            <span className="block text-[15px] font-semibold tracking-[0.22em] text-navy">AUTO POINT</span>
            <span className="mt-1 block text-[9px] tracking-[0.18em] text-muted-foreground">
              MULTI BRAND CAR SERVICE CENTER
            </span>
          </a>

          <ul className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[12px] font-medium tracking-[0.08em] text-navy/70 transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden h-10 rounded-full bg-brand px-5 text-xs tracking-[0.12em] text-brand-foreground hover:-translate-y-0.5 hover:bg-brand/90 lg:inline-flex"
            >
              <a href="#booking">Book Service →</a>
            </Button>
            <button
              type="button"
              className="grid size-10 place-items-center text-navy xl:hidden"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "overflow-hidden bg-white xl:hidden",
            open ? "max-h-[28rem] border-t border-border" : "max-h-0",
          )}
        >
          <ul className="px-4 py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm tracking-[0.08em]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href="#booking" onClick={() => setOpen(false)} className="text-sm font-medium text-brand">
                Book Service →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
