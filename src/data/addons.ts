export interface TreatmentAddon {
  id: string;
  name: string;
  category: 'massage' | 'facials';
  price: string;
  priceNum: number;
  duration: string;
  description: string;
  benefits: string[];
  recommendedWith: string;
}

export const TREATMENT_ADDONS: TreatmentAddon[] = [
  // MASSAGE ENHANCEMENTS
  {
    id: "addon-hot-stones",
    name: "Heated Volcanic Hot Stones",
    category: "massage",
    price: "+£5",
    priceNum: 5,
    duration: "Integrated into service",
    description: "Smooth basalt river stones heated to therapeutic temperature are worked into your massage, penetrating deep muscle tissue without painful pressure to dissolve stubborn knots.",
    benefits: ["Melts deep muscle tension", "Increases local circulation", "Induces profound nervous system relaxation"],
    recommendedWith: "Back, Neck & Shoulder, Foot & Leg, or Full Body Massage"
  },
  {
    id: "addon-bamboo",
    name: "Heated Bamboo Sticks",
    category: "massage",
    price: "+£5",
    priceNum: 5,
    duration: "Integrated into service",
    description: "Silky, warm natural bamboo canes rolled and kneaded over tight muscle groups to provide firm, even, elongated pressure.",
    benefits: ["Targeted deep tissue knot release", "Stimulates lymphatic drainage", "Relieves repetitive strain & postural fatigue"],
    recommendedWith: "Deep Tissue, Back Massage, or Foot & Leg Massage"
  },

  // FACIAL BOOSTERS
  {
    id: "addon-hydrojelly",
    name: "Custom Hydrojelly® Mask",
    category: "facials",
    price: "+£5 - £10",
    priceNum: 5,
    duration: "+15 mins",
    description: "Electrolyte-rich algae peel-off mask customized to your skin's immediate needs. Forms a vacuum seal over the face to intensely push active serums into the dermal layers.",
    benefits: ["Instant cooling & anti-inflammatory calming", "Intense hydration surge", "Locks in active serums"],
    recommendedWith: "Chemical Peels, Dermaplaning, or Microneedling"
  },
  {
    id: "addon-led",
    name: "Clinical LED Light Therapy",
    category: "facials",
    price: "+£5 - £10",
    priceNum: 5,
    duration: "+15 mins",
    description: "Medical-grade light wavelengths (red for collagen induction and cellular rejuvenation; blue for antibacterial blemish control) to accelerate skin healing and radiance.",
    benefits: ["Stimulates fibroblasts & collagen synthesis", "Calms post-exfoliation redness", "Clears blemish-causing bacteria"],
    recommendedWith: "Advanced Facials, Chemical Peels, or Microneedling"
  },
  {
    id: "addon-miracle-mask",
    name: "The Miracle Peptide Firming Mask",
    category: "facials",
    price: "+£10",
    priceNum: 10,
    duration: "+15 mins",
    description: "A tightening and contouring peptide-rich mask that stimulates microcirculation and leaves the skin visibly lifted, firmed, and radiant.",
    benefits: ["Instant lifting & tightening effect", "Stimulates blood flow & skin glow", "Diminishes fine expression lines"],
    recommendedWith: "Dermaplaning or Bespoke Signature Facials"
  },
  {
    id: "addon-ha4c-mask",
    name: "HA4c Quadruple Hyaluronic Acid Mask",
    category: "facials",
    price: "+£10",
    priceNum: 10,
    duration: "+15 mins",
    description: "Four molecular weights of hyaluronic acid penetrate all epidermal layers to drench dehydrated skin, plump fine creases, and restore a dewy glass-skin finish.",
    benefits: ["Multi-depth epidermal hydration", "Plumps dehydration lines", "Restores compromised skin barrier"],
    recommendedWith: "Dermaplaning, Chemical Peels, or Sun-Fatigued Skin"
  }
];
