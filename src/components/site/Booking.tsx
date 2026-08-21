import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { SERVICE_OPTIONS, SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  pickup: "Yes" | "No" | "";
};

type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", phone: "", vehicle: "", service: "", pickup: "" };

const fieldClass =
  "h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition-smooth placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring";

export function Booking() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opening" | "sent">("idle");

  const set = (key: keyof Values) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value as Values[typeof key] }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    const digits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) next.phone = "Please enter a mobile number.";
    else if (digits.length < 10 || digits.length > 13)
      next.phone = "Please enter a valid 10-digit mobile number.";
    if (!values.vehicle.trim()) next.vehicle = "Please enter your vehicle model.";
    if (!values.service) next.service = "Please select a service.";
    if (!values.pickup) next.pickup = "Please tell us if you need pickup.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      document.querySelector<HTMLElement>("[data-invalid='true']")?.focus();
      return;
    }

    const message = `Hello ${SITE.name},

My Name: ${values.name.trim()}
Vehicle: ${values.vehicle.trim()}
Service Required: ${values.service}
Pickup Required: ${values.pickup}

Please contact me regarding booking.`;

    setStatus("opening");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    window.setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <Section id="booking" className="bg-primary">
      <SectionHeading
        tone="dark"
        eyebrow="Book a Service"
        title="Get a Slot on WhatsApp"
        description="Share a few details. We continue the booking conversation on WhatsApp — no account required."
      />

      <form
        noValidate
        onSubmit={handleSubmit}
        className="reveal mx-auto mt-12 max-w-3xl rounded-3xl bg-card p-6 shadow-lift sm:p-10"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Name" required error={errors.name}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              data-invalid={Boolean(errors.name)}
              aria-invalid={Boolean(errors.name)}
              onChange={(e) => set("name")(e.target.value)}
              className={cn(fieldClass, errors.name && "border-destructive")}
              placeholder="Your full name"
            />
          </Field>
          <Field id="phone" label="Phone Number" required error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              data-invalid={Boolean(errors.phone)}
              aria-invalid={Boolean(errors.phone)}
              onChange={(e) => set("phone")(e.target.value)}
              className={cn(fieldClass, errors.phone && "border-destructive")}
              placeholder="e.g. 98765 43210"
            />
          </Field>
          <Field id="vehicle" label="Vehicle Model" required error={errors.vehicle}>
            <input
              id="vehicle"
              name="vehicle"
              value={values.vehicle}
              data-invalid={Boolean(errors.vehicle)}
              aria-invalid={Boolean(errors.vehicle)}
              onChange={(e) => set("vehicle")(e.target.value)}
              className={cn(fieldClass, errors.vehicle && "border-destructive")}
              placeholder="e.g. Hyundai Creta 2022"
            />
          </Field>
          <Field id="service" label="Service Required" required error={errors.service}>
            <select
              id="service"
              name="service"
              value={values.service}
              data-invalid={Boolean(errors.service)}
              aria-invalid={Boolean(errors.service)}
              onChange={(e) => set("service")(e.target.value)}
              className={cn(fieldClass, errors.service && "border-destructive")}
            >
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <fieldset className="mt-5">
          <legend className="text-sm font-medium text-foreground">
            Pickup Required <span className="text-destructive">*</span>
          </legend>
          <div className="mt-3 flex gap-3">
            {(["Yes", "No"] as const).map((option) => (
              <label
                key={option}
                className={cn(
                  "flex flex-1 cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition-smooth",
                  values.pickup === option
                    ? "border-brand bg-brand/10 text-foreground"
                    : "border-input text-muted-foreground hover:border-ring",
                  errors.pickup && !values.pickup && "border-destructive/50",
                )}
              >
                <input
                  type="radio"
                  name="pickup"
                  value={option}
                  checked={values.pickup === option}
                  data-invalid={Boolean(errors.pickup) && !values.pickup}
                  onChange={() => set("pickup")(option)}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
          {errors.pickup ? (
            <p className="mt-2 text-sm text-destructive" role="alert">
              {errors.pickup}
            </p>
          ) : null}
        </fieldset>

        <Button type="submit" variant="brand" size="xl" className="mt-8 w-full">
          {status === "opening" ? "WhatsApp is opening..." : "Continue on WhatsApp"}
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Your booking is confirmed only after the workshop replies on WhatsApp.
        </p>
        {status !== "idle" ? (
          <p
            role="status"
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-success/10 p-3 text-sm text-success"
          >
            <CheckCircle2 className="size-4" />
            {status === "opening"
              ? "WhatsApp is opening..."
              : "WhatsApp has opened. The workshop will confirm your slot there."}
          </p>
        ) : null}
      </form>
    </Section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean | undefined;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
