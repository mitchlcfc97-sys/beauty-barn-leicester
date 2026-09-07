export interface PricingTier {
  minGuests: number;
  maxGuests: number;
  pricePerPerson: number;
  duration: string;
}

export interface SpaPackage {
  id: string;
  name: string;
  tagline: string;
  pricePerPerson: number; // Starting from / lowest tier
  minGuests: number;
  maxGuests: number;
  duration: string;
  pricingTiers: PricingTier[];
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
    name: "The Classic Spa Experience",
    tagline: "Our signature private retreat — 60 mins of treatments, lodge, hot tub & afternoon tea",
    pricePerPerson: 100, // From £100pp
    minGuests: 2,
    maxGuests: 8,
    duration: "3.5 to 5 Hours Private Hire",
    pricingTiers: [
      { minGuests: 2, maxGuests: 3, pricePerPerson: 125, duration: "3h 30m" },
      { minGuests: 4, maxGuests: 5, pricePerPerson: 110, duration: "4 Hours" },
      { minGuests: 6, maxGuests: 8, pricePerPerson: 100, duration: "5 Hours" }
    ],
    includesLodgeAndHotTub: true,
    includesAfternoonTea: true,
    includesUnlimitedDrinks: true,
    description: "Our most sought-after private package! Relax in your exclusive heated wooden lodge and private hot tub area with unlimited prosecco, hot & soft drinks, and our signature afternoon tea. Includes 60 minutes of bespoke spa treatments per guest.",
    treatmentOptions: [
      {
        heading: "Option A: 1 x 60-Minute Treatment",
        items: [
          "The Relaxing Full Body Massage",
          "The Bramley Ultra Relaxing Facial",
          "The Gel Bottle Luxury Pedicure & Manicure",
          "Nourishing Hands, Feet & Scalp Therapy"
        ]
      },
      {
        heading: "Option B: 2 x 30-Minute Treatments",
        items: [
          "The Back Massage (Swedish or Hot Stones)",
          "The Bramley Scalp Treatment & Massage",
          "The Mini Bramley Facial",
          "The Foot and Leg Massage",
          "File & Gel Polish"
        ]
      }
    ],
    features: [
      "100% Private Lodge & Hot Tub (No sharing with strangers)",
      "Tiered pricing: 2-3 guests £125pp | 4-5 guests £110pp | 6-8 guests £100pp",
      "Full 60 minutes of treatments per guest (1 x 60m or 2 x 30m)",
      "Luxury 3-tier afternoon tea included",
      "Unlimited prosecco, tea, coffee & soft drinks",
      "Complimentary luxury robes, towels & slippers"
    ],
    popular: true
  },
  {
    id: "deluxe-experience",
    name: "The Deluxe Spa Experience",
    tagline: "The ultimate 90-minute treatment indulgence with extended private lodge access",
    pricePerPerson: 120, // From £120pp
    minGuests: 2,
    maxGuests: 6,
    duration: "4 to 5 Hours Extended Hire",
    pricingTiers: [
      { minGuests: 2, maxGuests: 3, pricePerPerson: 150, duration: "4 Hours" },
      { minGuests: 4, maxGuests: 5, pricePerPerson: 132.5, duration: "4h 30m" },
      { minGuests: 6, maxGuests: 6, pricePerPerson: 120, duration: "5 Hours" }
    ],
    includesLodgeAndHotTub: true,
    includesAfternoonTea: true,
    includesUnlimitedDrinks: true,
    description: "Pure luxury and unhurried decadence. Enjoy extended private access to the lodge and hot tub, gourmet afternoon tea, bottomless refreshments, and a full 90 minutes of restorative treatments per person.",
    treatmentOptions: [
      {
        heading: "Option A: 1 x 90-Minute Signature Ritual",
        items: [
          "The Bramley Probiotic Rose Quartz Facial (90m)",
          "Full Body Massage with Scalp & Face (90m)",
          "Bramley Bespoke Crystal Massage & Scrub (90m)"
        ]
      },
      {
        heading: "Option B: 1 x 60-Minute + 1 x 30-Minute Treatment",
        items: [
          "Full Body Massage (60m) + Mini Bramley Facial (30m)",
          "Bramley Ultra Relaxing Facial (60m) + Back Massage (30m)",
          "Full Body Massage (60m) + Scalp & Foot Massage (30m)"
        ]
      },
      {
        heading: "Option C: 3 x 30-Minute Express Treatments",
        items: [
          "Swedish Back Massage + Mini Facial + Scalp Treatment",
          "Back Massage + Foot & Leg Massage + Gel File & Polish"
        ]
      }
    ],
    features: [
      "Full 90 minutes of spa treatments per guest",
      "Extended private hire: 4 to 5 hours exclusive lodge & hot tub access",
      "Tiered pricing: 2-3 guests £150pp | 4-5 guests £132.50pp | 6 guests £120pp",
      "Luxury afternoon tea & unlimited prosecco & refreshments",
      "Fluffy robes, spa towels & slippers provided"
    ],
    popular: false
  },
  {
    id: "quality-time",
    name: "Quality Time Package",
    tagline: "Private hot tub retreat with refreshments & 30-minute bespoke treatment",
    pricePerPerson: 90, // From £90pp
    minGuests: 2,
    maxGuests: 5,
    duration: "2 to 3 Hours Private Hire",
    pricingTiers: [
      { minGuests: 2, maxGuests: 3, pricePerPerson: 95, duration: "2 Hours" },
      { minGuests: 4, maxGuests: 5, pricePerPerson: 90, duration: "3 Hours" }
    ],
    includesLodgeAndHotTub: true,
    includesAfternoonTea: false,
    includesUnlimitedDrinks: true,
    description: "Designed for quality connection and quick revitalisation. Relax in your exclusive hot tub with refreshments, followed by a 30-minute tailored treatment of your choice.",
    treatmentOptions: [
      {
        heading: "Choice of 1 x 30-Minute Treatment per person",
        items: [
          "The Back Massage (Swedish or Hot Stones)",
          "The Bramley Scalp Treatment & Massage",
          "The Foot and Leg Massage",
          "The Mini Bramley Botanical Facial",
          "File & Gel Polish"
        ]
      }
    ],
    features: [
      "100% Private hot tub garden & lodge access",
      "Tiered pricing: 2-3 guests £95pp (2h) | 4-5 guests £90pp (3h)",
      "Choice of 1 x 30m bespoke treatment per guest",
      "Unlimited refreshments, tea & coffee",
      "Robes, towels & slippers included"
    ],
    popular: false
  },
  {
    id: "treat-and-tea",
    name: "Treat & Tea Package",
    tagline: "Cozy lodge retreat with luxury afternoon tea & 30-minute treatment",
    pricePerPerson: 90, // From £90pp
    minGuests: 2,
    maxGuests: 5,
    duration: "2 to 3 Hours Private Hire",
    pricingTiers: [
      { minGuests: 2, maxGuests: 3, pricePerPerson: 95, duration: "2 Hours" },
      { minGuests: 4, maxGuests: 5, pricePerPerson: 90, duration: "3 Hours" }
    ],
    includesLodgeAndHotTub: false,
    includesAfternoonTea: true,
    includesUnlimitedDrinks: true,
    description: "Perfect for those who want the luxury of our heated wooden lodge, delicious afternoon tea, and pampering treatments without the hot tub.",
    treatmentOptions: [
      {
        heading: "Choice of 1 x 30-Minute Treatment per person",
        items: [
          "The Back Massage (Swedish or Hot Stones)",
          "The Mini Bramley Facial",
          "The Bramley Scalp Massage",
          "The Foot and Leg Massage",
          "The Gel Bottle Manicure / Pedicure Express"
        ]
      }
    ],
    features: [
      "Exclusive private heated wooden lodge hire",
      "Tiered pricing: 2-3 guests £95pp (2h) | 4-5 guests £90pp (3h)",
      "Luxury 3-tier afternoon tea included",
      "Choice of 1 x 30m treatment per guest",
      "Unlimited prosecco, artisan teas, coffee & soft drinks"
    ],
    popular: false
  }
];
