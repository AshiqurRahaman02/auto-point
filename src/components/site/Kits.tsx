import { ArrowUpRight } from "lucide-react";

import { KITS, whatsappLink } from "@/lib/site";

export function Kits() {
  return (
    <section id="kits" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Prefer to look after it yourself?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Self-service kits for people who like weekend care. Enquire on WhatsApp — we confirm
            stock, no cart.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {KITS.map((kit, i) => (
            <li
              key={kit.id}
              className="reveal group"
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <a
                href={whatsappLink(kit.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="overflow-hidden">
                  <img
                    src={kit.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">{kit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{kit.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy">
                  Enquire
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
