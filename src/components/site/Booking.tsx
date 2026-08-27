"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRANDS, SERVICE_OPTIONS, SITE, whatsappLink } from "@/lib/site";

const fieldClass =
  "h-12 rounded-xl border-border bg-white text-navy shadow-none focus-visible:ring-brand";

export function Booking() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const brand = String(data.get("brand") ?? "");
    const model = String(data.get("model") ?? "");
    const service = String(data.get("service") ?? "");
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");
    const pickup = String(data.get("pickup") ?? "No");
    const notes = String(data.get("notes") ?? "").trim();

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
      `Pickup Required: ${pickup}`,
    ];
    if (notes) lines.push("", notes);
    lines.push("", "Please confirm availability.");

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="booking" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Let&apos;s Take Care of Your Car.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Submit the form and continue on WhatsApp at {SITE.phonePretty}. The workshop confirms
            the slot after they reply.
          </p>
        </div>

        <form onSubmit={onSubmit} className="reveal grid gap-4 rounded-3xl bg-white p-6 shadow-[0_24px_80px_-28px_rgb(15_23_42/0.12)] sm:p-8">
          <Field label="Name" htmlFor="name">
            <Input id="name" name="name" required className={fieldClass} />
          </Field>
          <Field label="Phone Number" htmlFor="phone">
            <Input id="phone" name="phone" type="tel" required className={fieldClass} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Car Brand" htmlFor="brand">
              <select
                id="brand"
                name="brand"
                required
                defaultValue=""
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
            <Field label="Car Model" htmlFor="model">
              <Input id="model" name="model" required className={fieldClass} />
            </Field>
          </div>
          <Field label="Service Required" htmlFor="service">
            <select
              id="service"
              name="service"
              required
              defaultValue=""
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
            <Field label="Preferred Date" htmlFor="date">
              <Input id="date" name="date" type="date" required className={fieldClass} />
            </Field>
            <Field label="Preferred Time" htmlFor="time">
              <Input id="time" name="time" type="time" required className={fieldClass} />
            </Field>
          </div>
          <fieldset>
            <legend className="mb-2 text-sm font-medium">Pickup Required</legend>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="pickup" value="Yes" /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="pickup" value="No" defaultChecked /> No
              </label>
            </div>
          </fieldset>
          <Field label="Message" htmlFor="notes">
            <Textarea id="notes" name="notes" rows={3} className="rounded-xl border-border bg-white" />
          </Field>
          <Button
            type="submit"
            className="mt-2 h-14 rounded-full bg-brand text-base font-semibold text-brand-foreground hover:-translate-y-0.5 hover:bg-brand/90"
          >
            Book via WhatsApp <ArrowUpRight className="size-4" />
          </Button>
          {sent ? (
            <p className="text-xs text-muted-foreground">WhatsApp has opened with your booking details.</p>
          ) : null}
        </form>
      </div>
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
