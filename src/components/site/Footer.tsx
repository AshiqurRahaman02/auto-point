import { SITE, whatsappLink } from "@/lib/site";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary pb-28 text-primary-foreground md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-bold">{SITE.name}</p>
          <p className="mt-2 max-w-sm text-sm text-primary-foreground/70">{SITE.tagline}</p>
          <p className="mt-4 text-sm text-primary-foreground/70">{SITE.address}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold tracking-wide uppercase">Explore</p>
          <ul className="mt-4 space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase">Contact</p>
          <p className="mt-4 text-sm text-primary-foreground/70">{SITE.phone}</p>
          <p className="mt-2 text-sm text-primary-foreground/70">{SITE.hours}</p>
          <a
            href={whatsappLink(`Hello ${SITE.name}, I would like to book a service.`)}
            className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline"
          >
            Book Service →
          </a>
        </div>
      </div>
      <p className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {SITE.name}. Multi-brand car service & repair in Jagatpura, Jaipur.
      </p>
    </footer>
  );
}
