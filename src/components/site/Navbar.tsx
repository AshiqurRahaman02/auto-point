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

  const light = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-all duration-500",
          light
            ? "border-border/80 bg-white/90 shadow-[0_8px_30px_-18px_rgb(15_23_42/0.25)] backdrop-blur-xl"
            : "border-transparent bg-white/5 backdrop-blur-md",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="leading-none">
            <span
              className={cn(
                "block text-lg font-semibold",
                light ? "text-navy" : "text-white",
              )}
            >
              Auto Point
            </span>
            <span
              className={cn(
                "mt-0.5 block text-xs",
                light ? "text-muted-foreground" : "text-white/70",
              )}
            >
              Multi Brand Car Service Center
            </span>
          </a>

          <ul className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand",
                    light ? "text-navy/70" : "text-white/80",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className={cn(
                "hidden h-10 rounded-none px-4 text-sm lg:inline-flex",
                light
                  ? "border-navy/15 bg-transparent text-navy"
                  : "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white",
              )}
            >
              <a href={SITE.telHref}>
                <Phone className="size-3.5" /> Call
              </a>
            </Button>
            <Button
              asChild
              className="hidden h-10 rounded-none bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90 lg:inline-flex"
            >
              <a href="#booking">Book</a>
            </Button>
            <button
              type="button"
              className={cn("grid size-10 place-items-center xl:hidden", light ? "text-navy" : "text-white")}
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "overflow-hidden xl:hidden",
            open ? "max-h-[36rem] border-t border-border bg-white" : "max-h-0",
          )}
        >
          <ul className="px-4 py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm tracking-[0.08em] text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex gap-4 py-3">
              <a href={SITE.telHref} className="text-sm font-medium text-navy">
                Call
              </a>
              <a href="#booking" onClick={() => setOpen(false)} className="text-sm font-medium text-brand">
                Book
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
