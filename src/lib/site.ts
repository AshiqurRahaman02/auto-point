export const SITE = {
  name: "Mehta Automobile",
  tagline: "Premium Multi-Brand Car Care & Repair Workshop",
  phone: "+91 7030067700",
  phoneRaw: "917030067700",
  telHref: "tel:+917030067700",
  hours: "Daily, 9:30 AM – 6:30 PM",
  hoursShort: "9:30 AM – 6:30 PM",
  address: "Near Kendriya Vihar Road, Jagatpura, Jaipur, Rajasthan 302017",
  mapsQuery: "Mehta Automobile, Kendriya Vihar Road, Jagatpura, Jaipur, Rajasthan 302017",
  rating: "4.3",
  city: "Jaipur",
} as const;

export const SEO = {
  title: "Mehta Automobile | Premium Multi-Brand Car Service & Repair in Jaipur",
  description:
    "Professional multi-brand car service, repair, detailing, pickup & drop, and maintenance in Jagatpura Jaipur. Book instantly on WhatsApp.",
  ogImage: "/og-workshop.jpg",
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

export const SERVICE_OPTIONS = [
  "Car Washing",
  "Periodic Maintenance",
  "Engine Diagnostics",
  "Brake Repair",
  "Suspension Repair",
  "AC Service",
  "Denting & Painting",
  "Insurance Claim Assistance",
  "Car Detailing",
  "Wheel Alignment",
  "Battery Replacement",
  "Pickup & Drop Service",
  "Other / Inspection",
] as const;

export const FAQS = [
  {
    q: "Do you provide pickup & drop?",
    a: "Yes. We collect your car from home or office across Jagatpura and nearby Jaipur, service it at the workshop, and deliver it back.",
  },
  {
    q: "Which brands do you service?",
    a: "Mehta Automobile is a multi-brand workshop. We service hatchbacks, sedans and SUVs from popular Indian and international brands.",
  },
  {
    q: "How long does servicing take?",
    a: "A standard periodic service is typically completed the same day. Larger repairs depend on parts and inspection. We share a time estimate before work begins.",
  },
  {
    q: "Do you provide genuine parts?",
    a: "Yes. We support genuine and OEM-grade parts and discuss options with you before fitment.",
  },
  {
    q: "Can I get an estimate before repair?",
    a: "Always. After inspection we share a clear estimate on WhatsApp. Work starts only after you approve it.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Rahul S.",
    place: "Jagatpura, Jaipur",
    rating: 5,
    text: "Transparent pricing and they explained every item on the job card. Pickup was on time and the car came back washed.",
    service: "Periodic Maintenance",
  },
  {
    name: "Neha K.",
    place: "Mansarovar, Jaipur",
    rating: 5,
    text: "Got my AC serviced before summer. Cooling is back and they showed me the before/after on the gauges. Recommended.",
    service: "AC Service",
  },
  {
    name: "Amit P.",
    place: "Malviya Nagar, Jaipur",
    rating: 4,
    text: "Denting and paint on the rear door matched well. Took a day extra for the part, but they kept me updated on WhatsApp.",
    service: "Denting & Painting",
  },
  {
    name: "Sanjay M.",
    place: "Jagatpura, Jaipur",
    rating: 5,
    text: "Wheel alignment and brake work done properly. No upselling, just what the car needed. Will come back.",
    service: "Brake Repair",
  },
  {
    name: "Priya T.",
    place: "Jaipur",
    rating: 4,
    text: "Detailing made the interiors feel new. Staff was polite and the workshop is easy to reach from Kendriya Vihar Road.",
    service: "Car Detailing",
  },
] as const;

export const ESTIMATE_ITEMS = [
  { name: "Car Washing", base: 499 },
  { name: "Periodic Maintenance", base: 3499 },
  { name: "Engine Diagnostics", base: 999 },
  { name: "Brake Repair", base: 2499 },
  { name: "Suspension Repair", base: 3999 },
  { name: "AC Service", base: 1999 },
  { name: "Denting & Painting", base: 4999 },
  { name: "Car Detailing", base: 2999 },
  { name: "Wheel Alignment", base: 799 },
  { name: "Battery Replacement", base: 4499 },
  { name: "Pickup & Drop Service", base: 299 },
] as const;

export const VEHICLE_TYPES = [
  { id: "hatchback", label: "Hatchback", multiplier: 1 },
  { id: "sedan", label: "Sedan", multiplier: 1.15 },
  { id: "suv", label: "SUV / MUV", multiplier: 1.35 },
] as const;

export const CHECKLIST_ITEMS = [
  "Engine oil level and condition",
  "Coolant level and leaks",
  "Brake pads, discs and fluid",
  "Tyre pressure, tread and spare",
  "Battery terminals and cranking",
  "AC cooling and cabin filter",
  "Lights, indicators and horn",
  "Wiper blades and washer spray",
  "Suspension knocks or uneven ride",
  "Unusual engine sound or warning lights",
] as const;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness", "AutomotiveBusiness"],
    name: SITE.name,
    description: SEO.description,
    telephone: SITE.telHref.replace("tel:", ""),
    image: SEO.ogImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Kendriya Vihar Road, Jagatpura",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302017",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.8006,
      longitude: 75.8636,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:30",
      closes: "18:30",
    },
    areaServed: {
      "@type": "City",
      name: "Jaipur",
    },
  };
}
