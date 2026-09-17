export const PDI_SEO = {
  title: "Pre-Delivery Inspection (PDI) | Auto Point Jaipur",
  description:
    "280+ point used and new car PDI in Jaipur. OBD diagnostics, paint checks, written digital report. Book on WhatsApp. Starting at ₹1,499.",
} as const;

export const PDI_TRUST = [
  { value: "280+", label: "Point inspection" },
  { value: "2 hrs", label: "Digital report" },
  { value: "Used + New", label: "Cars we check" },
  { value: "2", label: "Jaipur workshops" },
] as const;

export const PDI_SEGMENTS = [
  {
    id: "entry",
    label: "Entry Level",
    price: 1499,
    range: "Sub 10 lacs",
    examples: "Wagon R, Swift, i10, Tiago",
  },
  {
    id: "mid",
    label: "Mid Tier",
    price: 1999,
    range: "10–30 lacs",
    examples: "Creta, Seltos, City, Nexon, Thar",
  },
  {
    id: "luxury",
    label: "Luxury",
    price: 2499,
    range: "More than 30 lacs",
    examples: "BMW, Mercedes, Audi, Volvo, Fortuner",
  },
] as const;

export type PdiServiceId = "used" | "new";
export type PdiSegmentId = (typeof PDI_SEGMENTS)[number]["id"];

export const PDI_USED = {
  id: "used" as const,
  badge: "Most booked",
  title: "Used Car Inspection",
  kicker: "For used cars",
  text: "Eliminate the lemon problem. Get a clear picture of any pre-owned car before you pay — body, engine, electronics, papers.",
  checks: [
    "280+ point mechanical inspection",
    "OBD-II diagnostic scan",
    "Accident & structural damage detection",
    "Paint thickness measurement",
    "Flood damage assessment",
    "Document & ownership verification",
  ],
  concerns: [
    "Concealed accident repairs",
    "Odometer rollback fraud",
    "Hidden mechanical issues",
    "Outstanding loans & disputes",
  ],
};

export const PDI_NEW = {
  id: "new" as const,
  badge: "Before delivery",
  title: "New Car Inspection",
  kicker: "For new cars",
  text: "Don’t assume new means perfect. Check the car is factory-fresh before you sign the delivery note.",
  checks: [
    "Pre-delivery transit damage check",
    "Odometer tampering verification",
    "Demo car usage detection",
    "Software & sensor ecosystem audit",
    "Paint micron consistency check",
    "Factory seal verification",
  ],
  price: 2999,
};

export const PDI_STEPS = [
  {
    n: "01",
    time: "2 minutes",
    title: "Book on WhatsApp",
    text: "Share the car, used or new, preferred slot, and where it is. We confirm from Auto Point.",
  },
  {
    n: "02",
    time: "On-site or workshop",
    title: "Technician assigned",
    text: "A technician comes to the seller, dealer, or you bring the car to Tonk Road or Jagatpura.",
  },
  {
    n: "03",
    time: "45–60 minutes",
    title: "280+ point check",
    text: "Engine, frame, electronics, interior, mechanicals, paint, and documents — photographed as we go.",
  },
  {
    n: "04",
    time: "Within 2 hours",
    title: "Digital report",
    text: "Written report with photos, category scores, and a clear buy / negotiate / walk-away note on WhatsApp.",
  },
] as const;

export const PDI_TECH = [
  {
    title: "280+ Point Checklist",
    text: "Engine, transmission, electrical, suspension, brakes, body, interior, tyres, and papers. Every critical part is checked and written down.",
    points: ["Engine & drivetrain", "Electrical systems", "Body & interior", "Safety systems"],
  },
  {
    title: "OBD-II Diagnostics",
    text: "Scanner reads ECU modules for hidden faults — engine, transmission, ABS, airbag, and live sensor data.",
    points: ["Multi-module scan", "Fault code analysis", "Live sensor data", "Freeze frame data"],
  },
  {
    title: "Digital Paint Thickness",
    text: "Ultrasonic gauge at 30+ points across panels. Detects repaint, accident repair, and filler.",
    points: ["30+ measurement points", "Repaint detection", "Filler identification", "Panel-by-panel notes"],
  },
  {
    title: "Professional Reporting",
    text: "Photos, scores, and plain-language recommendations. Shared on WhatsApp so you can forward it to the seller or family.",
    points: ["Photo documentation", "Category-wise scoring", "Expert recommendations", "WhatsApp delivery"],
  },
] as const;

export const PDI_CHECKLIST = [
  {
    title: "Exterior & Body",
    points: 55,
    blurb: "Dents, scratches, repaint detection, and structural assembly checks.",
    items: [
      "All body panels for dents, scratches, repaint marks, and filler",
      "Paint thickness at 30+ points with an ultrasonic gauge",
      "Panel gaps for uniformity — uneven gaps often mean accident repair",
      "Glass for cracks, chips, and original manufacture date stamps",
      "Lamps and DRLs for moisture, cracks, and alignment",
      "Bumpers, grille, cladding, roof rails, ORVMs",
      "Underbody for rust, frame damage, and leaks",
    ],
  },
  {
    title: "Engine & Drivetrain",
    points: 45,
    blurb: "Fluid analysis, mounts, electrics, and a test run.",
    items: [
      "Oil, coolant, and leak inspection",
      "Mounts, belts, hoses, and battery condition",
      "Idle quality, smoke, and unusual noise",
      "Gearbox / clutch feel on a short drive when possible",
      "Cooling system and exhaust",
    ],
  },
  {
    title: "Electrical Systems",
    points: 38,
    blurb: "OBD-II scans, HVAC, and cabin electronics.",
    items: [
      "OBD scan of engine, ABS, airbag and other modules",
      "Lights, horn, wipers, power windows",
      "AC cooling and blower",
      "Infotainment, sensors, and warning lamps",
    ],
  },
  {
    title: "Suspension & Steering",
    points: 32,
    blurb: "Struts, racks, bearings, and on-road ride.",
    items: [
      "Struts, bushes, ball joints",
      "Steering play and rack leaks",
      "Wheel bearings",
      "Ride quality and pull on a test drive when possible",
    ],
  },
  {
    title: "Braking System",
    points: 28,
    blurb: "Pad wear, ABS, pedal feel, and lines.",
    items: [
      "Pad and disc wear",
      "ABS module and warning lamps",
      "Pedal travel and fluid condition",
      "Hoses and visible leaks",
    ],
  },
  {
    title: "Interior & Cabin",
    points: 40,
    blurb: "Seats, trim, belts, and boot.",
    items: [
      "Seats, belts, airbags visible condition",
      "Trim, carpets, headliner, moisture or odour",
      "Boot and spare wheel well",
      "All switches and convenience features",
    ],
  },
  {
    title: "Tyres & Wheels",
    points: 22,
    blurb: "Tread, age, alloys, and alignment clues.",
    items: [
      "Tread depth on all four plus spare",
      "Sidewall damage and uneven wear",
      "Alloy / rim knocks",
      "Date codes and matching set",
    ],
  },
  {
    title: "Documents & Ownership",
    points: 20,
    blurb: "VIN, challans, service clues, and legal health.",
    items: [
      "VIN / chassis match to RC",
      "RC, insurance, hypothecation notes",
      "Visible service records if available",
      "Pending challan / ownership red flags we can see on the car and papers",
    ],
  },
] as const;

export const PDI_COMPARE = [
  {
    aspect: "Primary focus",
    used: "Accident history, odometer fraud, hidden mechanical wear, structural alignment",
    neu: "Transit damage, dealer handling, demo-car detection, software checks",
  },
  {
    aspect: "Paint check",
    used: "Ultrasonic repaint and filler detection, replaced panels",
    neu: "Factory consistency, orange-peel, transit scratches",
  },
  {
    aspect: "OBD scan",
    used: "Active faults, cleared DTC history, ECU vs odometer clues",
    neu: "Factory defaults, software version, module health",
  },
  {
    aspect: "Documents",
    used: "RC, hypothecation, ownership, challans, insurance",
    neu: "VIN vs invoice, warranty, accessories as billed",
  },
  {
    aspect: "Odometer",
    used: "Cross-check with wear, service clues, and ECU where possible",
    neu: "Expect a very low reading — flag demo use",
  },
  {
    aspect: "Starting price",
    used: "₹1,499",
    neu: "₹2,999",
  },
  {
    aspect: "Key risk avoided",
    used: "Buying a mechanical or legal lemon",
    neu: "Taking delivery of a transit-damaged or demo car",
  },
] as const;

export const PDI_WHO = [
  {
    title: "Used car buyers",
    text: "Private seller, classified, or dealer — catch flood, accident, and odometer issues before money leaves.",
  },
  {
    title: "New car buyers",
    text: "Check the car is factory-fresh. You still have leverage to get defects fixed before you sign.",
  },
  {
    title: "Smart sellers",
    text: "A pre-sale report builds trust, reduces haggling, and can help the car move faster.",
  },
  {
    title: "Insurance & claims",
    text: "A dated condition note with photos is useful if you need proof of how the car was.",
  },
  {
    title: "Loan & finance",
    text: "Lenders often want an objective look at a used car before they fund it.",
  },
  {
    title: "Fleet handover",
    text: "Employee or company cars — document condition at handover so nobody argues later.",
  },
] as const;

export const PDI_SELLER_POINTS = [
  "Independent workshop report, not the seller’s own word",
  "Photo-documented condition you can share with buyers",
  "Clear disclosure cuts haggling and last-minute walkaways",
  "Written snapshot of the car on that day — useful if a dispute comes later",
  "Forward the report on WhatsApp in one tap",
] as const;

export const PDI_SELLER_BENEFITS = [
  {
    title: "Command a clearer price",
    text: "Buyers pay more confidently when the condition is written down. Less “last minute discount” theatre.",
  },
  {
    title: "Faster conversations",
    text: "Serious buyers read the report first. You spend less time repeating the same answers.",
  },
  {
    title: "Cleaner handover",
    text: "Existing marks and issues are on paper, so post-sale “you didn’t tell me” is harder to run.",
  },
] as const;

export const PDI_STATS = [
  { value: "27%", label: "New car issues", text: "Brand-new cars where PDI still finds a defect or transit mark" },
  { value: "20%", label: "Engine defects", text: "Used cars where mechanical engine issues show up on inspection" },
  { value: "30%", label: "Accident history", text: "Used cars with hidden or unreported accident repair" },
  { value: "₹50k+", label: "Repair risk", text: "What a skipped PDI can cost once the car is already yours" },
] as const;

export const PDI_RIGHTS = [
  {
    title: "Right to be informed",
    text: "You should know the quality, condition, and history of a vehicle before you buy.",
  },
  {
    title: "Unfair trade practices",
    text: "Concealed defects, undisclosed repaint, or odometer games sit in unfair-practice territory.",
  },
  {
    title: "A written trail",
    text: "Keep the Auto Point report and photos. It is a dated record of what was visible on inspection day.",
  },
] as const;

export const PDI_FAQS = [
  {
    q: "What is a pre-delivery inspection (PDI)?",
    a: "A professional check of a car before you take it — new from a dealer or used from a seller. We look at mechanical condition, structure, paint, electronics, and papers, then send a written report with photos.",
  },
  {
    q: "How much does a car PDI cost?",
    a: "Used cars start at ₹1,499 (entry), ₹1,999 (mid), ₹2,499 (luxury), based on the indicative ex-showroom band of a new equivalent. New car PDI starts at ₹2,999. Confirm on WhatsApp — these are placeholder rates for now.",
  },
  {
    q: "Is PDI necessary for new cars?",
    a: "Yes if you want leverage before you sign. Transit, yard handling, and the odd demo car show up. Once you drive out, fixing those marks is your problem.",
  },
  {
    q: "What is included in the 280+ point check?",
    a: "Exterior and paint, engine and drivetrain, electrics and OBD, suspension, brakes, interior, tyres, and documents. See the checklist on this page for the split.",
  },
  {
    q: "How long does a PDI take?",
    a: "About 45–60 minutes on the car, then a digital report on WhatsApp within around 2 hours.",
  },
  {
    q: "Can you inspect at the seller or dealership?",
    a: "Yes. We can come to the seller, the dealer, or you can bring the car to Tonk Road or Jagatpura. Pickup is available if that is easier.",
  },
  {
    q: "What if the inspection finds problems?",
    a: "You get it in writing with photos. Use that to renegotiate, ask the dealer to fix it, or walk away. We don’t sell the car — we tell you what we found.",
  },
  {
    q: "Can I reject a new car based on PDI findings?",
    a: "Before you sign the delivery note, you can ask the dealer to repair, replace panels, or swap the vehicle. The report is your talking point.",
  },
  {
    q: "How is PDI different from a regular service inspection?",
    a: "A service looks at what to repair on a car you already own. PDI is a buying decision — accident clues, tampering, documents, and whether you should pay at all.",
  },
  {
    q: "Do you cover Jaipur only?",
    a: "Auto Point is in Jaipur — Tonk Road (Shyam Nagar, Beelwa) and Jagatpura. We inspect in the city and nearby, including seller and dealer locations we can reach.",
  },
  {
    q: "Should I get a PDI before or after paying?",
    a: "Before you pay, or at least before you sign. After money moves, your leverage drops.",
  },
  {
    q: "Any car brand?",
    a: "Yes — Maruti to Mercedes and the rest we already service. Auto Point is multi-brand, not an authorised dealer.",
  },
  {
    q: "Can I be present during the inspection?",
    a: "Please do. You see the same panels and codes we see, and you can ask questions on the spot.",
  },
  {
    q: "How do I receive the report?",
    a: "On WhatsApp — photos plus a written summary. Same thread you used to book.",
  },
  {
    q: "How do I book or cancel?",
    a: "Fill the form on this page and continue on WhatsApp, or call. To cancel or shift a slot, message or call the same numbers — no online checkout.",
  },
] as const;

export const PDI_PREFILL_EVENT = "autopoint-pdi-prefill";

export type PdiPrefill = {
  service?: PdiServiceId;
  segment?: PdiSegmentId;
};

export function pdiPrice(service: PdiServiceId, segment: PdiSegmentId) {
  if (service === "new") return PDI_NEW.price;
  const row = PDI_SEGMENTS.find((s) => s.id === segment);
  return row?.price ?? PDI_SEGMENTS[1].price;
}

export function formatInr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export function goToPdiBooking(data?: PdiPrefill) {
  if (typeof window === "undefined") return;
  if (data) window.dispatchEvent(new CustomEvent(PDI_PREFILL_EVENT, { detail: data }));
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}
