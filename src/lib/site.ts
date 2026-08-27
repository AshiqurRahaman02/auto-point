export const SITE = {
  name: "Auto Point",
  legalName: "Auto Point Multi Brand Car Service Center",
  tagline: "Multi-Brand Automotive Care",
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
    "Premium multi-brand car service, electrical repair, denting, painting, washing and complete car care in Beelwa, Tonk Road, Jaipur. Book on WhatsApp.",
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

const p = (id: string, w = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Bright, premium automotive photography for the light showroom look. */
export const IMG = {
  hero: p("116675", 2000),
  studio: p("3802510", 1600),
  mercedes: p("112460", 1800),
  bmw: p("170811", 1600),
  mustang: u("1494976388531-d1058494cdd8", 1800),
  mechanic: p("3807329", 1600),
  bay: p("3807517", 1600),
  inspection: p("3807277", 1600),
  underCar: u("1486262715619-67b85e0b08d3", 1600),
  service: u("1619642751034-765dfdf7c58e", 1400),
  wash: u("1607860108855-64acf2078ed9", 1400),
  engineHands: u("1770656505709-fd97236989b9", 1400),
  detailing: p("6873088", 1400),
  painting: p("14615263", 1400),
  bayWork: p("8478254", 1400),
  undercarriage: p("2244746", 1400),
};

export const SERVICES = [
  {
    n: "01",
    title: "Car Service",
    text: "Routine maintenance designed to keep your vehicle running smoothly.",
    image: IMG.bay,
  },
  {
    n: "02",
    title: "Denting & Painting",
    text: "Professional body restoration and exterior finishing.",
    image: IMG.painting,
  },
  {
    n: "03",
    title: "Electrical Repair",
    text: "Diagnosis and repair for vehicle electrical systems.",
    image: IMG.engineHands,
  },
  {
    n: "04",
    title: "Car Wash & Dry Cleaning",
    text: "Give your vehicle a clean, refreshed finish inside and out.",
    image: IMG.wash,
  },
  {
    n: "05",
    title: "Car Accessories",
    text: "Practical and stylish upgrades for your vehicle.",
    image: IMG.studio,
  },
] as const;

export const BRANDS = [
  "Mahindra",
  "Jaguar",
  "Hyundai",
  "Honda",
  "Volkswagen",
  "Suzuki",
  "Audi",
  "Nissan",
  "Skoda",
  "Toyota",
  "BMW",
] as const;

export const PICKUP_STEPS = [
  { n: "01", title: "Book" },
  { n: "02", title: "Pickup" },
  { n: "03", title: "Service" },
  { n: "04", title: "Drop" },
] as const;

export const WHY = [
  {
    n: "01",
    title: "Professional Workmanship",
    text: "Careful inspection and service.",
  },
  {
    n: "02",
    title: "Multi-Brand Knowledge",
    text: "Support for a wide range of vehicles.",
  },
  {
    n: "03",
    title: "Transparent Communication",
    text: "Keep customers informed about the work.",
  },
  {
    n: "04",
    title: "Convenient Booking",
    text: "Book directly through WhatsApp.",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Car Service",
  "Electrical Repair",
  "Denting & Painting",
  "Car Wash & Dry Cleaning",
  "Car Accessories",
  "General Repairs",
  "Pickup Request",
] as const;

export const FAQS = [
  {
    q: "What car brands do you service?",
    a: "We provide multi-brand automotive service and repair. Auto Point is not presented as an authorised dealer or official brand service centre.",
  },
  {
    q: "What services do you provide?",
    a: "Car servicing, electrical repair, denting, painting, washing, dry cleaning, accessories and general repairs.",
  },
  {
    q: "Can I book through WhatsApp?",
    a: "Yes. Customers can contact Auto Point directly through WhatsApp.",
  },
  {
    q: "Do you provide pickup and drop?",
    a: "You can request pickup and drop through WhatsApp. The workshop will confirm availability for your location and time.",
  },
  {
    q: "Is Auto Point open 24 hours?",
    a: SITE.hoursNote,
  },
] as const;

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Gallery", href: "#workshop" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

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
