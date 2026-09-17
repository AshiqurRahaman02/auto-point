"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  formatInr,
  PDI_NEW,
  PDI_PREFILL_EVENT,
  PDI_SEGMENTS,
  pdiPrice,
  type PdiPrefill,
  type PdiSegmentId,
  type PdiServiceId,
} from "@/lib/pdi";
import { BRANDS, SITE, whatsappLink } from "@/lib/site";

const fieldClass =
  "h-12 rounded-none border-border bg-white text-navy shadow-none focus-visible:ring-brand";

const PLACES = [
  "Auto Point — Tonk Road",
  "Auto Point — Jagatpura",
  "At seller / dealership",
  "Doorstep pickup",
] as const;

export function PdiBooking() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState<PdiServiceId>("used");
  const [segment, setSegment] = useState<PdiSegmentId>("mid");
  const [brand, setBrand] = useState("");
  const [place, setPlace] = useState<(typeof PLACES)[number]>("At seller / dealership");
  const [role, setRole] = useState<"Buyer" | "Seller">("Buyer");

  const price = pdiPrice(service, segment);

  useEffect(() => {
    const apply = (data: PdiPrefill) => {
      if (data.service) setService(data.service);
      if (data.segment) setSegment(data.segment);
    };
    const onPrefill = (e: Event) => apply((e as CustomEvent<PdiPrefill>).detail);
    window.addEventListener(PDI_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PDI_PREFILL_EVENT, onPrefill);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const model = String(data.get("model") ?? "");
    const year = String(data.get("year") ?? "");
    const reg = String(data.get("reg") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");
    const location = String(data.get("location") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();
    const serviceLabel = service === "used" ? "Used Car PDI" : "New Car PDI";
    const segmentRow = PDI_SEGMENTS.find((s) => s.id === segment);

    const lines = [
      "Hello Auto Point,",
      "",
      "I would like to book a PDI.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `I am: ${role}`,
      `Service: ${serviceLabel}`,
    ];
    if (service === "used" && segmentRow) {
      lines.push(`Car segment: ${segmentRow.label} (${segmentRow.range})`);
    }
    lines.push(`Indicative price: ${formatInr(price)}`);
    lines.push(`Car: ${brand} ${model} ${year}`.trim());
    if (reg) lines.push(`Registration: ${reg}`);
    lines.push(`Preferred Date: ${date}`);
    lines.push(`Preferred Time: ${time}`);
    lines.push(`Inspection at: ${place}`);
    if (location) lines.push(`Location: ${location}`);
    if (notes) lines.push("", notes);
    lines.push("", "Please confirm availability.");

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="booking" className="scroll-mt-28 bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Schedule your PDI
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Fill this in, then continue on WhatsApp at {SITE.whatsappPretty}. No online payment —
            the workshop confirms the slot after they reply. Prefer to talk? Call {SITE.phonePretty}.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-navy/80">
            {[
              "280+ point inspection",
              "OBD-II diagnostic scan",
              "Paint thickness check",
              "Photo documentation",
              "Digital report (about 2 hrs)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">Indicative total</p>
            <p className="font-display text-4xl font-semibold text-navy">{formatInr(price)}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {service === "new"
                ? "New car PDI starting price"
                : `${PDI_SEGMENTS.find((s) => s.id === segment)?.label} used car band`}
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal grid gap-4 bg-white p-6 shadow-[0_24px_80px_-28px_rgb(15_23_42/0.12)] sm:p-8"
        >
          <div className="grid gap-2">
            <p className="text-sm font-medium text-navy">Service type</p>
            <div className="grid grid-cols-2 gap-2">
              <Choice
                active={service === "used"}
                onClick={() => {
                  setService("used");
                }}
                title="Used Car PDI"
                hint={`From ${formatInr(PDI_SEGMENTS[0].price)}`}
              />
              <Choice
                active={service === "new"}
                onClick={() => setService("new")}
                title="New Car PDI"
                hint={`From ${formatInr(PDI_NEW.price)}`}
              />
            </div>
          </div>

          {service === "used" ? (
            <div className="grid gap-2">
              <p className="text-sm font-medium text-navy">Car segment</p>
              <div className="grid gap-2 sm:grid-cols-3">
                {PDI_SEGMENTS.map((row) => (
                  <button
                    key={row.id}
                    type="button"
                    onClick={() => setSegment(row.id)}
                    className={`border px-3 py-3 text-left ${
                      segment === row.id ? "border-navy bg-navy text-white" : "border-border bg-white text-navy"
                    }`}
                  >
                    <span className="block text-sm font-medium">{row.label}</span>
                    <span className="mt-1 block text-xs opacity-80">{formatInr(row.price)}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="grid gap-2">
            <p className="text-sm font-medium text-navy">I am a</p>
            <div className="grid grid-cols-2 gap-2">
              {(["Buyer", "Seller"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRole(item)}
                  className={`h-12 border text-sm font-medium ${
                    role === item ? "border-navy bg-navy text-white" : "border-border bg-white text-navy"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <Field label="Name" htmlFor="pdi-name">
            <Input id="pdi-name" name="name" required autoComplete="name" className={fieldClass} />
          </Field>
          <Field label="Phone" htmlFor="pdi-phone">
            <Input
              id="pdi-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={fieldClass}
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Car brand" htmlFor="pdi-brand">
              <select
                id="pdi-brand"
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
            <Field label="Model" htmlFor="pdi-model">
              <Input
                id="pdi-model"
                name="model"
                required
                placeholder="e.g. Swift, Creta"
                className={fieldClass}
              />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Year" htmlFor="pdi-year">
              <Input id="pdi-year" name="year" inputMode="numeric" placeholder="2021" className={fieldClass} />
            </Field>
            <Field label="Registration (optional)" htmlFor="pdi-reg">
              <Input id="pdi-reg" name="reg" placeholder="RJ14…" className={fieldClass} />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Preferred date" htmlFor="pdi-date">
              <Input id="pdi-date" name="date" type="date" required className={fieldClass} />
            </Field>
            <Field label="Preferred time" htmlFor="pdi-time">
              <Input id="pdi-time" name="time" type="time" required className={fieldClass} />
            </Field>
          </div>
          <Field label="Inspection at" htmlFor="pdi-place">
            <select
              id="pdi-place"
              name="place"
              value={place}
              onChange={(e) => setPlace(e.target.value as (typeof PLACES)[number])}
              className={`flex w-full border px-3 text-sm ${fieldClass}`}
            >
              {PLACES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </Field>
          {place !== "Auto Point — Tonk Road" && place !== "Auto Point — Jagatpura" ? (
            <Field label="Location" htmlFor="pdi-location">
              <Input
                id="pdi-location"
                name="location"
                required
                placeholder="Maps link, dealer name, or area"
                className={fieldClass}
              />
            </Field>
          ) : null}
          <Field label="Anything else" htmlFor="pdi-notes">
            <Textarea
              id="pdi-notes"
              name="notes"
              rows={3}
              placeholder="Seller location, suspected accident, demo car, PDI before paying…"
              className="rounded-none border-border bg-white"
            />
          </Field>
          <Button
            type="submit"
            className="mt-2 h-14 rounded-none bg-brand text-base font-semibold text-brand-foreground hover:bg-brand/90"
          >
            Book on WhatsApp <ArrowUpRight className="size-4" />
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-none border-navy/20 bg-white">
            <a href={SITE.telHref}>
              <Phone className="size-4" /> Call instead
            </a>
          </Button>
          {sent ? (
            <p className="text-sm text-navy/80">WhatsApp opened with your PDI details.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Choice({
  active,
  onClick,
  title,
  hint,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  hint: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3 py-3 text-left ${
        active ? "border-navy bg-navy text-white" : "border-border bg-white text-navy"
      }`}
    >
      <span className="block text-sm font-medium">{title}</span>
      <span className="mt-1 block text-xs opacity-80">{hint}</span>
    </button>
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
