import { useMemo, useState } from "react";
import { Bell, Calculator, Download } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { CHECKLIST_ITEMS, ESTIMATE_ITEMS, SITE, VEHICLE_TYPES, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Tools() {
  return (
    <Section id="tools">
      <SectionHeading
        eyebrow="Helpful Tools"
        title="Estimate, Checklist & Reminders"
        description="Get a ballpark figure, download a free vehicle health checklist, or ask us to remind you when service is due."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Estimator />
        <Checklist />
        <Reminder />
      </div>
    </Section>
  );
}

function Estimator() {
  const [vehicle, setVehicle] = useState<(typeof VEHICLE_TYPES)[number]["id"]>("hatchback");
  const [selected, setSelected] = useState<string[]>(["Periodic Maintenance"]);

  const multiplier = VEHICLE_TYPES.find((v) => v.id === vehicle)?.multiplier ?? 1;
  const total = useMemo(
    () =>
      ESTIMATE_ITEMS.filter((item) => selected.includes(item.name)).reduce(
        (sum, item) => sum + Math.round(item.base * multiplier),
        0,
      ),
    [selected, multiplier],
  );

  const toggle = (name: string) => {
    setSelected((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  };

  const vehicleLabel = VEHICLE_TYPES.find((v) => v.id === vehicle)?.label ?? "Hatchback";

  return (
    <article className="reveal flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <span className="bg-accent/10 flex size-11 items-center justify-center rounded-xl text-accent">
        <Calculator className="size-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold">Service Cost Estimator</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Indicative starting figures. Final cost is confirmed after inspection.
      </p>

      <fieldset className="mt-5">
        <legend className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
          Vehicle type
        </legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {VEHICLE_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setVehicle(type.id)}
              className={cn(
                "rounded-lg border px-2 py-2 text-xs font-semibold transition-smooth",
                vehicle === type.id
                  ? "border-brand bg-brand/10 text-foreground"
                  : "border-input text-muted-foreground",
              )}
            >
              {type.label}
            </button>
          ))}
        </div>
      </fieldset>

      <ul className="mt-4 max-h-48 space-y-2 overflow-auto pr-1">
        {ESTIMATE_ITEMS.map((item) => (
          <li key={item.name}>
            <label className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-sm">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(item.name)}
                  onChange={() => toggle(item.name)}
                  className="size-4 accent-brand"
                />
                {item.name}
              </span>
              <span className="text-xs text-muted-foreground">
                ₹{Math.round(item.base * multiplier).toLocaleString("en-IN")}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <p className="mt-4 font-display text-2xl font-extrabold text-foreground">
        ₹{total.toLocaleString("en-IN")}
        <span className="ml-2 text-sm font-medium text-muted-foreground">indicative</span>
      </p>
      <Button asChild variant="brand" className="mt-4 w-full">
        <a
          href={whatsappLink(
            `Hello ${SITE.name}, I used the website estimator.\n\nVehicle type: ${vehicleLabel}\nServices: ${selected.join(", ") || "Not selected"}\nIndicative total: ₹${total.toLocaleString("en-IN")}\n\nPlease share an accurate estimate.`,
          )}
        >
          Get exact estimate on WhatsApp
        </a>
      </Button>
    </article>
  );
}

function Checklist() {
  const download = () => {
    const body = [
      `${SITE.name.toUpperCase()} — Vehicle Health Checklist`,
      SITE.address,
      `WhatsApp: ${SITE.phone}`,
      "",
      "Tick each item before your next service visit:",
      "",
      ...CHECKLIST_ITEMS.map((item) => `[ ] ${item}`),
      "",
      "Need help? Book on WhatsApp and we will inspect the rest at the workshop.",
    ].join("\n");
    const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mehta-automobile-vehicle-health-checklist.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <article
      className="reveal flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
      style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
    >
      <span className="bg-accent/10 flex size-11 items-center justify-center rounded-xl text-accent">
        <Download className="size-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold">Vehicle Health Checklist</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        A free 10-point list you can keep in the glove box.
      </p>
      <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
        {CHECKLIST_ITEMS.slice(0, 5).map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand" />
            {item}
          </li>
        ))}
        <li className="text-xs">+ {CHECKLIST_ITEMS.length - 5} more in the download</li>
      </ul>
      <Button type="button" variant="outlineBrand" className="mt-4 w-full" onClick={download}>
        Download free checklist
      </Button>
    </article>
  );
}

function Reminder() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interval, setInterval] = useState("Every 3 months / 5,000 km");

  return (
    <article
      className="reveal flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
      style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
    >
      <span className="bg-accent/10 flex size-11 items-center justify-center rounded-xl text-accent">
        <Bell className="size-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold">Service Reminder Signup</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        We will ping you on WhatsApp when your next service window opens.
      </p>
      <form
        className="mt-4 flex flex-1 flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(
            whatsappLink(
              `Hello ${SITE.name}, please add me to service reminders.\n\nName: ${name}\nPhone: ${phone}\nInterval: ${interval}`,
            ),
            "_blank",
            "noopener,noreferrer",
          );
        }}
      >
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="h-11 rounded-xl border border-input px-3 text-sm outline-none focus-visible:border-ring"
        />
        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Mobile number"
          className="h-11 rounded-xl border border-input px-3 text-sm outline-none focus-visible:border-ring"
        />
        <select
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          className="h-11 rounded-xl border border-input px-3 text-sm outline-none focus-visible:border-ring"
        >
          <option>Every 3 months / 5,000 km</option>
          <option>Every 6 months / 10,000 km</option>
          <option>Before monsoon</option>
        </select>
        <Button type="submit" variant="electric" className="mt-auto w-full">
          Subscribe on WhatsApp
        </Button>
      </form>
    </article>
  );
}
