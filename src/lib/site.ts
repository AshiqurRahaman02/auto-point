export const SITE = {
  name: "Auto Point",
  legalName: "Auto Point Multi Brand Car Service Center",
  tagline: "Trusted multi-brand care in Jaipur",
  phone: "09352865989",
  phonePretty: "09352865989",
  phoneRaw: "919352865989",
  telHref: "tel:+919352865989",
  whatsappPretty: "7030067700",
  whatsappRaw: "917030067700",
  hours: "Open 24 Hours",
  hoursNote:
    "The business listing currently shows 24-hour availability. Contact the workshop to confirm the service you need.",
  address: "Plot No. 9, Shyam Nagar, Opp. Laal Bagh, Beelwa, Tonk Road, Jaipur, Rajasthan 302018",
  addressShort: "Shyam Nagar, Tonk Road, Jaipur",
  mapsQuery:
    "Auto Point Multi Brand Car Service Center, Shyam Nagar, Beelwa, Tonk Road, Jaipur 302018",
  city: "Jaipur",
  rating: "4.4",
  reviewCount: "15",
} as const;

export const SEO = {
  title: "Auto Point | Multi Brand Car Service Center in Jaipur",
  description:
    "Trusted multi-brand car repair, PDI and doorstep pickup in Beelwa, Tonk Road, Jaipur. Two workshops. Book on WhatsApp or call.",
  ogImage: "/og-workshop.jpg",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const BOOKING_MESSAGE =
  "Hello Auto Point, I would like to book a car service. Please share the available time and details.";

export const mapsDirections = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapsQuery,
)}`;

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapsQuery,
)}&output=embed`;

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const IMG = {
  mumbaiTraffic: u("1753806901308-3acec5e91103", 1800),
  mahindraMumbai: u("1726412181429-1a8fb23fc3e0", 1600),
  delhiStreet: u("1760781419721-2672d406fdb5", 1600),
  jaipur: u("1524492412937-b28074a5d7da", 1600),
  indiaHighway: u("1532375810709-75b1da00537c", 1600),
  suvRoad: u("1549317661-bd32c8ce0db2", 1600),
  mechanic: u("1619642751034-765dfdf7c58e", 1600),
  bay: u("1486262715619-67b85e0b08d3", 1600),
  wash: u("1607860108855-64acf2078ed9", 1400),
  inspection: u("1487754180451-c456f719a1fc", 1400),
  detailing: u("1601362840469-51e4d8d58785", 1400),
  kitWash: u("1607860108855-64acf2078ed9", 1200),
  kitInterior: u("1503376780353-7e6692767b70", 1200),
  kitTools: u("1530124566582-a618bc2615dc", 1200),
  kitFluids: u("1487754180451-c456f719a1fc", 1200),
  avatar1: u("1607346256330-dee7af15f7c5", 200),
  avatar2: u("1614283233556-f35b0c801ef1", 200),
  avatar3: u("1506794778202-cad84cf45f1d", 200),
  avatar4: u("1573496359142-b8d87734a5a2", 200),
} as const;

export const TRUST = [
  { value: "8+", label: "Years in Jaipur" },
  { value: "12k+", label: "Cars looked after" },
  { value: SITE.rating, label: "Google rating" },
  { value: "2", label: "Workshops" },
] as const;

export const SERVICES = [
  {
    id: "repair",
    n: "01",
    title: "Repair & Maintenance",
    text: "From periodic service to body work — the car goes back the way it should.",
    image: IMG.mechanic,
    subs: [
      "Periodic service",
      "Engine & mechanical",
      "Denting & painting",
      "Electrical & AC",
      "Wash & detailing",
    ],
  },
  {
    id: "pdi",
    n: "02",
    title: "Pre-Purchase Inspection",
    text: "Buying a used car? We check it properly before you pay.",
    image: IMG.inspection,
    subs: [
      "Body & paint check",
      "Engine diagnostics",
      "Electronics scan",
      "Undercarriage",
      "Written report",
    ],
  },
  {
    id: "pickup",
    n: "03",
    title: "Doorstep Pickup & Drop",
    text: "Can't come to the workshop? We pick up, service, and drop it back.",
    image: IMG.mahindraMumbai,
    subs: [
      "Schedule pickup",
      "WhatsApp updates",
      "Workshop service",
      "Same-day drop when possible",
    ],
  },
] as const;

export const SERVICE_OPTIONS = [
  "Repair & Maintenance — Periodic service",
  "Repair & Maintenance — Engine & mechanical",
  "Repair & Maintenance — Denting & painting",
  "Repair & Maintenance — Electrical & AC",
  "Repair & Maintenance — Wash & detailing",
  "Pre-Purchase Inspection — Full PDI",
  "Pre-Purchase Inspection — Body & paint check",
  "Pre-Purchase Inspection — Engine diagnostics",
  "Doorstep Pickup & Drop",
  "Self-service kit enquiry",
  "General repairs",
] as const;

export const POPULAR_BRANDS = [
  { name: "Maruti Suzuki", group: "popular" as const, slug: "maruti" },
  { name: "Hyundai", group: "popular" as const, slug: "hyundai" },
  { name: "Tata", group: "popular" as const, slug: "tata" },
  { name: "Mahindra", group: "popular" as const, slug: "mahindra" },
  { name: "Honda", group: "popular" as const, slug: "honda" },
] as const;

export const LUXURY_BRANDS = [
  { name: "Mercedes-Benz", group: "luxury" as const, slug: "mercedes" },
  { name: "BMW", group: "luxury" as const, slug: "bmw" },
  { name: "Porsche", group: "luxury" as const, slug: "porsche" },
  { name: "Audi", group: "luxury" as const, slug: "audi" },
  { name: "Jaguar", group: "luxury" as const, slug: "jaguar" },
] as const;

export const CAR_BRANDS = [...POPULAR_BRANDS, ...LUXURY_BRANDS] as const;

export const BRANDS = CAR_BRANDS.map((b) => b.name);

export const WHY = [
  {
    n: "01",
    title: "Kaam sahi, no shortcuts",
    text: "Inspection first, then the job. You know what is being done and why.",
  },
  {
    n: "02",
    title: "Multi-brand, local hands",
    text: "Maruti to Mercedes — same care at Tonk Road and Jagatpura.",
  },
  {
    n: "03",
    title: "Clear baat on WhatsApp",
    text: "Estimates, updates and photos of the work — you stay in the loop.",
  },
  {
    n: "04",
    title: "Pickup when you need it",
    text: "Share a Maps pin or lat/long. We confirm the slot and come to you.",
  },
] as const;

export const KITS = [
  {
    id: "wash",
    title: "Exterior Care Kit",
    text: "Shampoo, microfibre and wax for a weekend wash at home.",
    image: IMG.kitWash,
    message: "Hello Auto Point, I want to enquire about the Exterior Care Kit.",
  },
  {
    id: "interior",
    title: "Interior Fresh Kit",
    text: "Dashboard, fabric and cabin care for daily drivers.",
    image: IMG.kitInterior,
    message: "Hello Auto Point, I want to enquire about the Interior Fresh Kit.",
  },
  {
    id: "tools",
    title: "Basic Tools Pack",
    text: "The small kit you actually use — jump leads, torch, tyre gauge.",
    image: IMG.kitTools,
    message: "Hello Auto Point, I want to enquire about the Basic Tools Pack.",
  },
  {
    id: "fluids",
    title: "Fluids Top-up Pack",
    text: "Coolant, washer and essentials — ask us what fits your car.",
    image: IMG.kitFluids,
    message: "Hello Auto Point, I want to enquire about the Fluids Top-up Pack.",
  },
] as const;

export const locations = [
  {
    name: "Auto Point — Tonk Road",
    phone: "+91 98765 43210",
    phoneRaw: "919876543210",
    address: SITE.address,
  },
  {
    name: "Auto Point — Jagatpura",
    phone: "+91 98765 43211",
    phoneRaw: "919876543211",
    address: SITE.address,
  },
] as const;

export const WORKSHOPS = locations;

export const REVIEWS = [
  {
    name: "Rohit Sharma",
    handle: "@rohit_jp",
    time: "2d",
    avatar: IMG.avatar1,
    text: "Swift ka service yahan karwaya. Time pe ready, bill clear. Finally a workshop on Tonk Road that doesn't over-explain and under-deliver.",
  },
  {
    name: "Meera Khandelwal",
    handle: "@meerak",
    time: "5d",
    avatar: IMG.avatar2,
    text: "PDI before buying a used Creta. They sent photos + a written list. Saved me from a paint-job surprise. Thank you Auto Point.",
  },
  {
    name: "Aman Gupta",
    handle: "@amang",
    time: "1w",
    avatar: IMG.avatar3,
    text: "Pickup from Malviya Nagar, drop next evening. WhatsApp pe updates aate rahe. Easy booking, no drama.",
  },
  {
    name: "Priya Singh",
    handle: "@priyadrives",
    time: "2w",
    avatar: IMG.avatar4,
    text: "Denting on the City was neat. Gold-standard? Maybe not a dealer, but honest local work. Will come again.",
  },
] as const;

export const FAQS = [
  {
    q: "What car brands do you service?",
    a: "Multi-brand care — Maruti Suzuki, Hyundai, Tata, Mahindra, Honda and luxury marques like Mercedes-Benz, BMW, Porsche, Audi and Jaguar. Auto Point is not an authorised dealer.",
  },
  {
    q: "What is a pre-purchase inspection?",
    a: "Before you buy a used car, we check body, paint, engine, electronics and undercarriage, then share a written report so you can decide with a clear picture.",
  },
  {
    q: "How do I book?",
    a: "Fill the booking form and continue on WhatsApp. You can also call. There is no other website checkout — just Book or Call.",
  },
  {
    q: "How does pickup and drop work?",
    a: "Select pickup in the form, then paste a Google Maps link or latitude,longitude. We confirm the slot, pick the car, service it, and drop it back.",
  },
  {
    q: "Do you have two workshops?",
    a: "Yes — Auto Point on Tonk Road (Shyam Nagar, Beelwa) and Auto Point in Jagatpura. Address text is the same for now as a placeholder. Call the branch you prefer, or Book and we will guide you.",
  },
  {
    q: "Do you sell self-service kits?",
    a: "Yes. If you like looking after the car yourself, enquire about wash, interior, tools and fluids packs on WhatsApp. No online cart — we confirm stock on chat.",
  },
  {
    q: "Is Auto Point open 24 hours?",
    a: SITE.hoursNote,
  },
] as const;

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tools", href: "#tools" },
  { label: "Book", href: "#booking" },
  { label: "Cars", href: "#cars" },
  { label: "Kits", href: "#kits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const VEHICLE_TYPES = [
  { id: "hatchback", label: "Hatchback", multiplier: 1 },
  { id: "sedan", label: "Sedan", multiplier: 1.15 },
  { id: "suv", label: "SUV / MUV", multiplier: 1.35 },
] as const;

export const ESTIMATE_ITEMS = [
  { name: "Periodic Maintenance", base: 3499 },
  { name: "AC Service", base: 2499 },
  { name: "Brake Service", base: 1899 },
  { name: "Wheel Alignment", base: 999 },
  { name: "Denting (panel)", base: 4500 },
  { name: "Full Exterior Wash", base: 599 },
] as const;

export const CHECKLIST_ITEMS = [
  "Engine oil level and condition",
  "Coolant level",
  "Brake fluid and pad wear",
  "Tyre pressure and tread",
  "Battery terminals",
  "Lights and indicators",
  "Wiper blades",
  "AC cooling",
  "Unusual sounds or vibrations",
  "Warning lights on dash",
] as const;

export const PREFILL_KEY = "autopoint-prefill";
export const PREFILL_EVENT = "autopoint-prefill";

export type Prefill = { brand?: string; service?: string };

export function getPrefill(): Prefill {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(PREFILL_KEY) || "{}") as Prefill;
  } catch {
    return {};
  }
}

export function setPrefill(data: Prefill) {
  if (typeof window === "undefined") return;
  const next = { ...getPrefill(), ...data };
  sessionStorage.setItem(PREFILL_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: next }));
}

export function goToBooking(data?: Prefill) {
  if (data) setPrefill(data);
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness", "AutomotiveBusiness"],
    name: SITE.legalName,
    description: SEO.description,
    telephone: "+91 93528 65989",
    image: "/og-workshop.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 9, Shyam Nagar, Opp. Laal Bagh, Beelwa, Tonk Road",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302018",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    hasMap: mapsDirections,
    areaServed: {
      "@type": "City",
      name: "Jaipur",
    },
  };
}
