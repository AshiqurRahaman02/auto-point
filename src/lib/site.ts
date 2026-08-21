export const SITE = {
  name: "Mehta Automobile",
  tagline: "Premium Multi-Brand Car Care & Repair Workshop",
  phone: "+91 7030067700",
  phoneRaw: "917030067700",
  telHref: "tel:+917030067700",
  hours: "Daily, 9:30 AM – 6:30 PM",
  address: "Near Kendriya Vihar Road, Jagatpura, Jaipur, Rajasthan 302017",
  mapsQuery: "Mehta Automobile, Kendriya Vihar Road, Jagatpura, Jaipur, Rajasthan 302017",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mapsDirections = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapsQuery,
)}`;

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapsQuery,
)}&output=embed`;
