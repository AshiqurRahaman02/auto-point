import { locations, NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pb-20 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-navy">Auto Point</p>
          <p className="mt-1 text-sm text-muted-foreground">Multi Brand Car Service Center</p>
          <div className="mt-6 flex gap-4 text-sm">
            <a href={SITE.telHref} className="hover:text-brand">
              Call
            </a>
            <a href="#booking" className="hover:text-brand">
              Book
            </a>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="space-y-4 text-sm text-muted-foreground">
          {locations.map((shop) => (
            <p key={shop.name}>
              <span className="block font-medium text-navy">{shop.name}</span>
              {shop.address}
              <a href={`tel:+${shop.phoneRaw}`} className="mt-1 block hover:text-brand">
                {shop.phone}
              </a>
            </p>
          ))}
        </div>
      </div>
      <p className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        © 2026 Auto Point Multi Brand Car Service Center. All rights reserved.
      </p>
    </footer>
  );
}
