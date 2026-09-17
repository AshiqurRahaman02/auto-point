"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BRANDS,
  getPrefill,
  PREFILL_EVENT,
  SERVICE_OPTIONS,
  SITE,
  whatsappLink,
  type Prefill,
} from "@/lib/site";

const fieldClass =
  "h-12 rounded-none border-border bg-white text-navy shadow-none focus-visible:ring-brand";

export function Booking() {
  const [sent, setSent] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [brand, setBrand] = useState("");
  const [service, setService] = useState("");
  const locationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const apply = (data: Prefill) => {
      if (data.brand) setBrand(data.brand);
      if (data.service) {
        setService(data.service);
        if (data.service.toLowerCase().includes("pickup")) setPickup(true);
      }
    };
    apply(getPrefill());
    const onPrefill = (e: Event) => apply((e as CustomEvent<Prefill>).detail);
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const model = String(data.get("model") ?? "");
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");
    const notes = String(data.get("notes") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();

    const lines = [
      "Hello Auto Point,",
      "",
      "I would like to book a service.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Car: ${brand} ${model}`.trim(),
      `Service: ${service}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time}`,
      `Pickup Required: ${pickup ? "Yes" : "No"}`,
    ];
    if (pickup && location) lines.push(`Pickup location: ${location}`);
    if (notes) lines.push("", notes);
    lines.push("", "Please confirm availability.");

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="booking" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Book a slot. We&apos;ll take it from there.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Fill this in, then continue on WhatsApp at {SITE.whatsappPretty}. The workshop confirms
            the time after they reply. Prefer to talk? Call {SITE.phonePretty}.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal grid gap-4 bg-white p-6 shadow-[0_24px_80px_-28px_rgb(15_23_42/0.12)] sm:p-8"
        >
          <Field label="Name" htmlFor="name">
            <Input id="name" name="name" required autoComplete="name" className={fieldClass} />
          </Field>
          <Field label="Phone" htmlFor="phone">
            <Input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Car brand" htmlFor="brand">
              <select
                id="brand"
                name="brand"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className={`flex w-full border px-3 text-sm ${fieldClass}`}
              >
                <option value="" disabled>
                  Select brand
                </option>
                {BRANDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </Field>
            <Field label="Model" htmlFor="model">
              <Input id="model" name="model" required placeholder="e.g. Swift, City" className={fieldClass} />
            </Field>
          </div>
          <Field label="Service" htmlFor="service">
            <select
              id="service"
              name="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`flex w-full border px-3 text-sm ${fieldClass}`}
            >
              <option value="" disabled>
                Select service
              </option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Preferred date" htmlFor="date">
              <Input id="date" name="date" type="date" required className={fieldClass} />
            </Field>
            <Field label="Preferred time" htmlFor="time">
              <Input id="time" name="time" type="time" required className={fieldClass} />
            </Field>
          </div>

          <div className="flex items-center justify-between gap-3 border-y border-border py-4">
            <label className="flex items-center gap-3 text-sm text-navy">
              <input
                type="checkbox"
                checked={pickup}
                onChange={(e) => {
                  const on = e.target.checked;
                  setPickup(on);
                  if (on) {
                    window.setTimeout(() => locationRef.current?.focus(), 50);
                  }
                }}
                className="size-4 accent-brand"
              />
              Need doorstep pickup
            </label>
            <button
              type="button"
              onClick={() => setInfoOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs tracking-wide text-muted-foreground hover:text-navy"
              aria-label="How pickup works"
            >
              <Info className="size-4" />
              How it works
            </button>
          </div>

          {pickup ? (
            <Field label="Pickup location" htmlFor="location">
              <Input
                ref={locationRef}
                id="location"
                name="location"
                required={pickup}
                placeholder="Paste Google Maps link or lat,long"
                className={fieldClass}
              />
              <p className="text-xs text-muted-foreground">
                Example: maps.app.goo.gl/... or 26.8467, 75.8028
              </p>
            </Field>
          ) : null}

          <Field label="Anything else" htmlFor="notes">
            <Textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Strange noise, accident, PDI for a used car…"
              className="rounded-none border-border bg-white"
            />
          </Field>
          <Button
            type="submit"
            className="mt-2 h-14 rounded-none bg-brand text-base font-semibold text-brand-foreground hover:bg-brand/90"
          >
            Book on WhatsApp <ArrowUpRight className="size-4" />
          </Button>
          {sent ? (
            <p className="text-sm text-navy/80">WhatsApp opened with your booking details.</p>
          ) : null}
        </form>
      </div>

      <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
        <DialogContent className="rounded-none sm:rounded-none">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Doorstep pickup</DialogTitle>
            <DialogDescription>
              Share where the car is. We confirm the slot, then come to you.
            </DialogDescription>
          </DialogHeader>
          <ol className="space-y-3 text-sm text-navy">
            <li>
              <span className="text-brand">01</span> — Tick pickup on the form
            </li>
            <li>
              <span className="text-brand">02</span> — Paste a Google Maps link or latitude,longitude
            </li>
            <li>
              <span className="text-brand">03</span> — We confirm on WhatsApp
            </li>
            <li>
              <span className="text-brand">04</span> — Pickup, service, drop back
            </li>
          </ol>
          <Button
            type="button"
            className="rounded-none bg-brand text-brand-foreground hover:bg-brand/90"
            onClick={() => {
              setPickup(true);
              setInfoOpen(false);
              window.setTimeout(() => locationRef.current?.focus(), 80);
            }}
          >
            I&apos;ll add my location
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
