export const SITE = {
  name: "Auto Point",
  legalName: "Auto Point Multi Brand Car Service Center",
  tagline: "Multi-Brand Automotive Care",
  phone: "09352865989",
  phonePretty: "09352865989",
  phoneRaw: "919352865989",
  telHref: "tel:+919352865989",
  hours: "Open 24 Hours",
  hoursNote:
    "The business listing currently shows 24-hour availability. Contact the workshop to confirm the service you need.",
  address: "Plot No. 9, Shyam Nagar, Opp. Laal Bagh, Beelwa, Tonk Road, Jaipur, Rajasthan 302018",
  addressShort: "Shyam Nagar, Tonk Road, Jaipur",
  mapsQuery:
    "Auto Point Multi Brand Car Service Center, Shyam Nagar, Beelwa, Tonk Road, Jaipur 302018",
  city: "Jaipur",
} as const;

export const SEO = {
  title: "Auto Point | Multi Brand Car Service Center in Jaipur",
  description:
    "Premium multi-brand car service, electrical repair, denting, painting, washing and complete car care in Beelwa, Tonk Road, Jaipur. Book on WhatsApp.",
  ogImage: "/og-workshop.jpg",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.phoneRaw}`;
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

/** Web-sourced cinematic automotive / workshop photography. */
export const IMG = {
  hero: u("1492144534655-ae79c964c9d7", 2200),
  porsche: u("1503376780353-7e6692767b70", 1800),
  underCar: u("1486262715619-67b85e0b08d3", 1600),
  mechanic: p("3807329", 1600),
  service: u("1619642751034-765dfdf7c58e", 1400),
  inspection: p("3807277", 1800),
  night: u("1542362567-b07e54358753", 1800),
  camaro: u("1552519507-da3b142c6e3d", 1800),
  wash: u("1607860108855-64acf2078ed9", 1400),
  engineHands: u("1770656505709-fd97236989b9", 1400),
  detailing: p("6873088", 1400),
  painting: p("14615263", 1400),
  bayWork: p("8478254", 1400),
  undercarriage: p("2244746", 1400),
  bay: p("3807517", 1600),
};

export const SERVICES = [
  {
    n: "01",
    title: "Car Service",
    text: "Routine maintenance and vehicle servicing.",
    image: IMG.bay,
  },
  {
    n: "02",
    title: "Electrical Repair",
    text: "Diagnosis and repair of vehicle electrical systems.",
    image: IMG.engineHands,
  },
  {
    n: "03",
    title: "Denting & Body Work",
    text: "Restore damaged body panels and exterior surfaces.",
    image: IMG.bayWork,
  },
  {
    n: "04",
    title: "Painting",
    text: "Professional exterior paint and finish work.",
    image: IMG.painting,
  },
  {
    n: "05",
    title: "Car Washing",
    text: "Exterior cleaning and vehicle wash.",
    image: IMG.wash,
  },
  {
    n: "06",
    title: "Dry Cleaning",
    text: "Interior cleaning and deep cleaning.",
    image: IMG.detailing,
  },
  {
    n: "07",
    title: "Car Accessories",
    text: "Upgrade and customize your vehicle.",
    image: IMG.porsche,
  },
  {
    n: "08",
    title: "General Repairs",
    text: "Professional repair support for everyday vehicle problems.",
    image: IMG.undercarriage,
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

export const JOURNEY = [
  {
    n: "01",
    title: "Tell Us What's Wrong",
    text: "Share the issue on WhatsApp or when you arrive.",
  },
  { n: "02", title: "Vehicle Inspection", text: "We inspect the car and explain what we find." },
  { n: "03", title: "Service & Repair", text: "Work is carried out with a clear, agreed plan." },
  { n: "04", title: "Quality Check", text: "A final check before the car is ready to leave." },
  {
    n: "05",
    title: "Ready to Drive",
    text: "Collect your car — or coordinate drop with the workshop.",
  },
] as const;

export const WHY = [
  {
    title: "Complete Car Care",
    text: "Multiple automotive services under one roof.",
  },
  {
    title: "Multi-Brand Expertise",
    text: "Service support across a wide range of vehicle brands.",
  },
  {
    title: "Transparent Approach",
    text: "Keep customers informed about the work being performed.",
  },
  {
    title: "Convenient Service",
    text: "Easy booking and direct communication through WhatsApp.",
  },
] as const;

export const CHECKLIST = [
  "Multi-brand expertise",
  "Complete car care",
  "Professional workmanship",
  "Convenient service",
  "Customer-focused approach",
] as const;

export const SERVICE_OPTIONS = [
  "Car Service",
  "Electrical Repair",
  "Denting & Body Work",
  "Painting",
  "Car Washing",
  "Dry Cleaning",
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
