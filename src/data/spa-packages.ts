export interface SpaPackage {
  id: string;
  name: string;
  tagline: string;
  pricePerPerson: number;
  minGuests: number;
  maxGuests: number;
  duration: string;
  includesLodgeAndHotTub: boolean;
  includesAfternoonTea: boolean;
  includesUnlimitedDrinks: boolean;
  description: string;
  treatmentOptions: {
    heading: string;
    items: string[];
  }[];
  features: string[];
  popular?: boolean;
}

export const SPA_PACKAGES: SpaPackage[] = [
  {
    id: "classic-experience",
    name: "The Classic Experience",
    tagline: "Our most popular private retreat for groups & celebrations",
    pricePerPerson: 90,
    minGuests: 2,
    maxGuests: 8,
    duration: "Half-Day Private Access",
    includesLodgeAndHotTub: true,
    includesAfternoonTea: true,
    includesUnlimitedDrinks: true,
    description: "Relax in your own private heated lodge and exclusive hot tub area, enjoying unlimited refreshments and a luxurious afternoon tea. Choose 60 mins of tailored spa treatments.",
    treatmentOptions: [
      {
        heading: "Option A: 1 x 60-Minute Treatment",
        items: ["Full Body Swedish Massage", "Ultra Relaxing Botanical Facial", "Luxury Gel Hands & Feet", "Rejuvenating Hands / Toes Ritual"]
      },
      {
        heading: "Option B: 2 x 30-Minute Treatments",
        items: ["Swedish Back Massage", "Warm Oil Scalp Massage", "Express Glow Facial", "Foot & Lower Leg Massage"]
      }
    ],
    features: [
      "100% Private Lodge & Hot Tub (Zero other guests)",
      "Delicious Luxury Afternoon Tea included",
      "Unlimited prosecco, soft drinks, tea & coffee",
      "Choice of 1 x 60m or 2 x 30m treatments per person",
      "Robes, towels & slippers provided"
    ],
    popular: true
  },
  {
    id: "deluxe-experience",
    name: "The Deluxe Experience",
    tagline: "The ultimate 1.5-hour treatment indulgence",
    pricePerPerson: 120,
    minGuests: 2,
    maxGuests: 6,
    duration: "Extended Private Access",
    includesLodgeAndHotTub: true,
    includesAfternoonTea: true,
    includesUnlimitedDrinks: true,
    description: "Indulge in 90 minutes of pure bliss with premium bespoke treatments, exclusive private garden lodge and hot tub, plus afternoon tea and unlimited drinks.",
    treatmentOptions: [
      {
        heading: "Choose Your 90-Minute Signature Ritual",
        items: [
          "The Full Indulgence (Head-to-toe full body massage + express facial with hot stones)",
          "Superluxe Neal's Yard Organic Facial & Scalp Cocoon",
          "Deluxe Bacial & Hot Stone Back Treatment with coconut oil scalp ritual",
          "Luxury Rejuvenating Hands & Feet with Gel Application"
        ]
      }
    ],
    features: [
      "90 minutes of dedicated therapist treatment time",
      "Exclusive private hot tub and garden room",
      "Unlimited drinks & freshly prepared afternoon tea",
      "Complimentary Neal's Yard botanical gift set",
      "Total privacy guaranteed"
    ],
    popular: false
  },
  {
    id: "quality-time",
    name: "Quality Time Retreat",
    tagline: "Intimate recharge with hot tub & restorative treatment",
    pricePerPerson: 75,
    minGuests: 2,
    maxGuests: 4,
    duration: "2.5 Hours",
    includesLodgeAndHotTub: true,
    includesAfternoonTea: false,
    includesUnlimitedDrinks: true,
    description: "Ideal for couples or best friends seeking a quick, serene escape. Enjoy private hot tub relaxation followed by a focused 45-minute treatment.",
    treatmentOptions: [
      {
        heading: "Choose One 45-Minute Treatment",
        items: ["Hot Stones Full Body Massage", "Ultra Relaxing Facial", "Back, Neck & Shoulder Deep Tension Massage"]
      }
    ],
    features: [
      "Private hot tub access",
      "Selection of chilled refreshments & artisanal teas",
      "Choice of hot stones massage or relaxing facial",
      "Private changing suite"
    ]
  },
  {
    id: "treat-and-tea",
    name: "Treat & Afternoon Tea",
    tagline: "Afternoon tea pamper in the private lodge",
    pricePerPerson: 65,
    minGuests: 2,
    maxGuests: 4,
    duration: "2 Hours",
    includesLodgeAndHotTub: false,
    includesAfternoonTea: true,
    includesUnlimitedDrinks: true,
    description: "Relax in your exclusive lodge enjoying unlimited refreshments and delicious afternoon tea paired with your choice of restorative treatment.",
    treatmentOptions: [
      {
        heading: "Choose One Treatment",
        items: ["Hot Stone Back Massage", "Botanical Radiance Facial", "Luxury Gel Manicure"]
      }
    ],
    features: [
      "Exclusive private lodge hire",
      "Luxury Afternoon Tea with sweet & savoury selections",
      "Unlimited drinks",
      "No swimwear required (lodge relaxation)"
    ]
  }
];
