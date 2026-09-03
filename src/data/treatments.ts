export interface Treatment {
  id: string;
  name: string;
  category: 'massage' | 'facials' | 'signature' | 'nails' | 'body';
  categoryLabel: string;
  duration: string;
  price: string;
  priceNum: number;
  description: string;
  highlights: string[];
  popular?: boolean;
  freshaUrl: string;
}

export const TREATMENTS: Treatment[] = [
  // MASSAGE (High volume keywords: massage leicester, full body massage leicester)
  {
    id: "full-body-massage",
    name: "Full Body Swedish Massage",
    category: "massage",
    categoryLabel: "Body & Massage",
    duration: "60 mins",
    price: "£50 (£55 with Hot Stones/Bamboo)",
    priceNum: 50,
    description: "A truly indulgent light to medium Swedish massage covering neck, arms, hands, legs, feet, and finishing on the back. Tailored to melt tension or work out stubborn knots.",
    highlights: ["Full body head-to-toe relief", "Optional Hot Stones / Bamboo upgrade", "Organic nourishing botanical oils"],
    popular: true,
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "back-neck-shoulder",
    name: "Back, Neck & Shoulder Massage",
    category: "massage",
    categoryLabel: "Body & Massage",
    duration: "45 mins",
    price: "£42 (£47 with Hot Stones/Bamboo)",
    priceNum: 42,
    description: "Begins with 15 minutes of targeted tension relief on your neck and shoulders, followed by a deeply therapeutic back massage. Perfect for posture fatigue and desk tension.",
    highlights: ["Focus on upper back & neck tension", "Pressure customized to preference", "Deeply restorative"],
    popular: true,
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "back-massage",
    name: "Swedish Back Massage",
    category: "massage",
    categoryLabel: "Body & Massage",
    duration: "30 mins",
    price: "£30 (£35 with Hot Stones)",
    priceNum: 30,
    description: "Light to medium Swedish massage targeting the back and spine using nourishing essential oils. Ideal for quick midday relaxation and muscular ease.",
    highlights: ["30-min express recharge", "Tailored knot release", "Hot stones upgrade available"],
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "bamboo-massage",
    name: "Bamboo Deep Tissue Back Massage",
    category: "massage",
    categoryLabel: "Body & Massage",
    duration: "30 mins",
    price: "£35",
    priceNum: 35,
    description: "An energising deep pressure massage utilizing heated natural bamboo stalks in a rolling fashion to stretch and elongate muscle fibres, eliminating deep-seated aches.",
    highlights: ["Deep tissue stretching", "Bamboo roller technique", "Stimulates blood & lymphatic flow"],
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "elements-aromatherapy",
    name: "The Elements Aromatherapy Experience",
    category: "signature",
    categoryLabel: "Signature Rituals",
    duration: "75 mins",
    price: "£75",
    priceNum: 75,
    description: "A signature multi-sensory journey combining Swedish massage, bespoke aromatherapy oils, and crystal energy healing. Tailored to your elemental need (Earth, Fire, Water, Air) and finished with herbal infusion in the Garden Room.",
    highlights: ["Custom crystal consultation", "Bespoke hand-blended essential oils", "Complimentary garden herbal tea"],
    popular: true,
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "indian-head-massage",
    name: "Indian Head Massage",
    category: "massage",
    categoryLabel: "Body & Massage",
    duration: "45 mins",
    price: "£45",
    priceNum: 45,
    description: "Deeply relaxing ancient therapeutic massage targeting the head, scalp, face, upper back, and shoulders. Relieves mental fatigue, migraines, and accumulated upper body stress.",
    highlights: ["Migraine & tension relief", "Tapotement & kneading techniques", "Warm oil scalp nourishment"],
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  // ADVANCED FACIALS (Keyword: facial leicester)
  {
    id: "superluxe-facial",
    name: "Superluxe Neal's Yard Facial",
    category: "facials",
    categoryLabel: "Facials & Skin",
    duration: "75 mins",
    price: "£65",
    priceNum: 65,
    description: "A luxury organic facial using award-winning Neal's Yard Remedies. Includes double cleanse, exfoliation, face & neck massage, dual mask application, scalp massage, and nourishing hand/foot treatment.",
    highlights: ["Certified organic Neal's Yard products", "Includes scalp & hand treatment", "Dual collagen-boosting masks"],
    popular: true,
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "ultra-relaxing-facial",
    name: "Ultra Relaxing Botanical Facial",
    category: "facials",
    categoryLabel: "Facials & Skin",
    duration: "60 mins",
    price: "£48",
    priceNum: 48,
    description: "Designed to soothe, hydrate, and brighten fatigued skin. Combines steam, gentle botanical exfoliation, lymphatic facial drainage, and a deeply hydrating finishing mask.",
    highlights: ["Lymphatic drainage massage", "Deep pore hydration", "Customized to skin type"],
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "deluxe-bacial",
    name: "Deluxe Bacial (Back Facial & Hot Stone Treatment)",
    category: "body",
    categoryLabel: "Body & Skin",
    duration: "60 mins",
    price: "£55",
    priceNum: 55,
    description: "A complete pamper ritual for your back! Features hot steam, deep cleanse, invigorating exfoliation, soothing hot stone back massage, detoxifying back mask, and warm coconut oil scalp ritual.",
    highlights: ["Hot steam & extraction prep", "Hot stone back massage", "Warm coconut oil scalp treatment"],
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "nourishing-hands-feet",
    name: "Nourishing Hands, Feet & Scalp Cocoon",
    category: "body",
    categoryLabel: "Body & Skin",
    duration: "60 mins",
    price: "£55",
    priceNum: 55,
    description: "Head-to-toe nourishment. Includes warm mitt exfoliation for arms, legs, hands and feet, cocooning moisturizing mask, scalp massage, and therapeutic reflex hand/foot massage.",
    highlights: ["Warm mitt exfoliation", "Deep hydration cocoon", "Therapeutic reflex massage"],
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  }
];
