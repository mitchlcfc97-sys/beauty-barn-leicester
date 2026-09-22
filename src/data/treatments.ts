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
  {
    "id": "back-massage",
    "name": "The Back Massage",
    "category": "massage",
    "categoryLabel": "Massage",
    "duration": "30 mins",
    "price": "£35 (£40 with Hot Stones / Bamboo)",
    "priceNum": 35,
    "description": "A tailored Swedish massage focusing on the back and shoulders to release everyday tension and muscular knots using pure botanical oils.",
    "highlights": [
      "Targeted back & spinal relief",
      "Hot Stones / Bamboo upgrade available",
      "30-min express recharge"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A5955241"
  },
  {
    "id": "back-neck-shoulder",
    "name": "The Back, Neck & Shoulder Massage",
    "category": "massage",
    "categoryLabel": "Massage",
    "duration": "45 mins",
    "price": "£47 (£52 with Hot Stones / Bamboo)",
    "priceNum": 47,
    "description": "Begins with focused tension relief across the neck and shoulders, followed by a deeply relaxing back massage. Perfect for posture fatigue and desk stiffness.",
    "highlights": [
      "Concentrated upper back & neck focus",
      "Hot Stones / Bamboo add-on available",
      "Deeply restorative pressure"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A5955238"
  },
  {
    "id": "back-neck-shoulder-scalp",
    "name": "The Back, Neck, Shoulder & Scalp Massage",
    "category": "massage",
    "categoryLabel": "Massage",
    "duration": "60 mins",
    "price": "£60",
    "priceNum": 60,
    "description": "Comprehensive upper body tension release flowing into a soothing warm botanical oil scalp massage to melt mental fatigue.",
    "highlights": [
      "Includes deeply relaxing scalp massage",
      "Relieves tension headaches",
      "Nourishing botanical oils"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24093384"
  },
  {
    "id": "relaxing-full-body",
    "name": "The Relaxing Full Body Massage",
    "category": "massage",
    "categoryLabel": "Massage",
    "duration": "60 mins",
    "price": "£55 (£60 with Hot Stones / Bamboo)",
    "priceNum": 55,
    "description": "An indulgent light-to-medium Swedish massage covering legs, feet, arms, hands, neck, and finishing with a therapeutic back massage.",
    "highlights": [
      "Full body head-to-toe relaxation",
      "Hot Stones or Bamboo upgrade available",
      "Bramley botanical oils"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A7310103"
  },
  {
    "id": "deep-tissue-full-body",
    "name": "The Deep Tissue Full Body Massage",
    "category": "massage",
    "categoryLabel": "Massage",
    "duration": "60 mins",
    "price": "£60",
    "priceNum": 60,
    "description": "Firm, targeted neuromuscular pressure designed to penetrate deep muscle layers, alleviate chronic aches, and release tight knots.",
    "highlights": [
      "Firm, therapeutic pressure",
      "Targeted chronic tension release",
      "Muscle recovery focus"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A18353636"
  },
  {
    "id": "full-body-scalp-face",
    "name": "The Relaxing Full Body Massage (with Scalp & Face)",
    "category": "massage",
    "categoryLabel": "Massage",
    "duration": "90 mins",
    "price": "£85",
    "priceNum": 85,
    "description": "The ultimate 90-minute full body ritual including head, neck, face, hands, feet, and back for total sensory restoration.",
    "highlights": [
      "Luxurious 90-minute duration",
      "Includes rejuvenating face & scalp massage",
      "Complete head-to-toe revival"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A20703115"
  },
  {
    "id": "double-room-massage",
    "name": "Couples / Double Room Relaxing Massage",
    "category": "massage",
    "categoryLabel": "Massage",
    "duration": "60 mins",
    "price": "£110 for two (£120 with Hot Stones)",
    "priceNum": 110,
    "description": "Experience side-by-side full body relaxation in our private double treatment room with two therapists.",
    "highlights": [
      "Private double room with side-by-side beds",
      "Perfect for couples or friends",
      "Includes two therapists"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A167602"
  },
  {
    "id": "indian-head-massage",
    "name": "Indian Head Massage",
    "category": "massage",
    "categoryLabel": "Massage",
    "duration": "45 mins",
    "price": "£50",
    "priceNum": 50,
    "description": "Ancient therapeutic acupressure massage targeting upper back, shoulders, neck, scalp, and face. Relieves headaches and clears the mind.",
    "highlights": [
      "Relieves mental fatigue & tension headaches",
      "Acupressure point therapy",
      "Nourishing scalp oils"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461474"
  },
  {
    "id": "mini-bramley-facial",
    "name": "The Mini Bramley Facial",
    "category": "facials",
    "categoryLabel": "Facials & Skin",
    "duration": "30 mins",
    "price": "£40",
    "priceNum": 40,
    "description": "A refreshing 30-minute skin boost featuring a double cleanse, gentle exfoliation, hydrating botanical mask, and soothing face massage.",
    "highlights": [
      "Express 30-minute glow",
      "Botanical exfoliation & mask",
      "Great pre-event refresh"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24093691"
  },
  {
    "id": "bramley-ultra-relaxing-facial",
    "name": "The Bramley Ultra Relaxing Facial",
    "category": "facials",
    "categoryLabel": "Facials & Skin",
    "duration": "60 mins",
    "price": "£60",
    "priceNum": 60,
    "description": "Deeply nourishing botanical facial featuring warm towel compresses, gentle exfoliation, lymphatic facial drainage massage, and a deeply hydrating customized mask.",
    "highlights": [
      "Bramley natural botanicals",
      "Lymphatic facial massage",
      "Deeply hydrating finishing mask"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A5955197"
  },
  {
    "id": "apple-peel-aha-facial",
    "name": "The Apple Peel AHA Facial",
    "category": "facials",
    "categoryLabel": "Facials & Skin",
    "duration": "60 mins",
    "price": "£70",
    "priceNum": 70,
    "description": "Natural alpha-hydroxy fruit acids gently dissolve dead skin cells, brightening uneven skin tone and revealing a fresh, radiant complexion.",
    "highlights": [
      "Natural AHA fruit acid exfoliation",
      "Brightens & evens skin tone",
      "Smooths skin texture"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24093711"
  },
  {
    "id": "bramley-probiotic-facial",
    "name": "The Bramley Probiotic Rose Quartz Facial",
    "category": "facials",
    "categoryLabel": "Facials & Skin",
    "duration": "90 mins",
    "price": "£85",
    "priceNum": 85,
    "description": "A luxury 90-minute ritual combining gut-friendly skin probiotics with cool rose quartz gua sha massage to boost circulation, calm inflammation, and sculpt the face.",
    "highlights": [
      "Cool rose quartz facial sculpting",
      "Probiotic barrier restoration",
      "90-minute holistic immersion"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A9023474"
  },
  {
    "id": "beauty-barn-bespoke-facial",
    "name": "The Beauty Barn Bespoke Facial",
    "category": "facials",
    "categoryLabel": "Advanced Skin Clinic",
    "duration": "30 - 90 mins",
    "price": "From £65",
    "priceNum": 65,
    "description": "Zofia and our skin specialists tailor every step to your unique skin condition, combining clinical active ingredients with soothing spa touches.",
    "highlights": [
      "Tailor-made to skin goals",
      "Available in 30m, 60m & 90m durations",
      "Clinical & botanical synergy"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8493168"
  },
  {
    "id": "dermaplaning-facial",
    "name": "The Dermaplaning Glow Facial",
    "category": "facials",
    "categoryLabel": "Advanced Skin Clinic",
    "duration": "60 mins",
    "price": "£70 (£75 with Hydrojelly / LED)",
    "priceNum": 70,
    "description": "Precision manual exfoliation gently removes dull dead surface skin and fine vellus peach fuzz, leaving skin silky smooth and glowing.",
    "highlights": [
      "Removes dead skin cells & peach fuzz",
      "Flawless makeup application base",
      "Optional Hydrojelly mask add-on"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A7386825"
  },
  {
    "id": "microneedling-facial",
    "name": "The Microneedling Collagen Induction Facial",
    "category": "facials",
    "categoryLabel": "Advanced Skin Clinic",
    "duration": "45 mins",
    "price": "£90 (£100 with Hydrojelly / LED)",
    "priceNum": 90,
    "description": "Advanced collagen induction therapy that triggers natural elastin production, refining skin texture, diminishing fine lines, and fading scars.",
    "highlights": [
      "Stimulates natural collagen & elastin",
      "Diminishes fine lines & scarring",
      "Medical-grade precision"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A7386877"
  },
  {
    "id": "million-dollar-facial",
    "name": "The Million Dollar Facial",
    "category": "facials",
    "categoryLabel": "Advanced Skin Clinic",
    "duration": "60 mins",
    "price": "£125",
    "priceNum": 125,
    "description": "The ultimate 10-step clinical facial combining dermaplaning, microneedling, lymphatic drainage, and hyaluronic acid mask for maximum skin rejuvenation.",
    "highlights": [
      "10-step signature clinical protocol",
      "Combines dermaplaning & microneedling",
      "Unmatched radiant glow"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A6373754"
  },
  {
    "id": "dual-serenity",
    "name": "Dual Serenity — Face Forward, Feet First",
    "category": "signature",
    "categoryLabel": "Signature Rituals",
    "duration": "45 mins",
    "price": "£70 (Synchronised by 2 Therapists)",
    "priceNum": 70,
    "description": "Our signature head-to-toe ritual performed by two therapists simultaneously! One therapist delivers a rejuvenating tailored facial while the second indulges your feet and lower legs with a nourishing foot treatment.",
    "highlights": [
      "Synchronised service by 2 therapists",
      "Simultaneous facial & foot therapy",
      "Unique luxury sensory experience"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A1873592"
  },
  {
    "id": "bramley-full-indulgence",
    "name": "The Full Indulgence Ritual",
    "category": "signature",
    "categoryLabel": "Signature Rituals",
    "duration": "90 mins",
    "price": "£100 (£105 with Hot Stones | £200 for Two)",
    "priceNum": 100,
    "description": "A seamless 90-minute pairing of restorative full-body massage and our glowing bespoke botanical facial with warm towel compresses (Natural Bamboo Canes upgrade available for deeper pressure).",
    "highlights": [
      "90-minute balanced face & body combination",
      "Full body massage with botanical oils",
      "Revitalising tailored facial & scalp therapy"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461617"
  },
  {
    "id": "bramley-simply-divine",
    "name": "The Bramley Simply Divine Ritual",
    "category": "signature",
    "categoryLabel": "Signature Rituals",
    "duration": "2h 45m",
    "price": "£190 (£195 with Hot Stones)",
    "priceNum": 190,
    "description": "The crown jewel of our treatment menu. A near 3-hour head-to-toe immersion including full body exfoliation, warm wrap, deep body massage, botanical facial, and warm oil scalp therapy.",
    "highlights": [
      "2 Hours 45 Minutes of pure luxury",
      "Full body scrub, wrap & massage",
      "Bramley botanical facial & scalp therapy"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24981589"
  },
  {
    "id": "bramley-selenite-crystal",
    "name": "Bramley Bespoke Massage with Selenite Crystals",
    "category": "signature",
    "categoryLabel": "Signature Rituals",
    "duration": "45 - 90 mins",
    "price": "From £60 (£60 45m / £70 60m / £90 90m)",
    "priceNum": 60,
    "description": "Cleansing selenite crystals paired with warm essential oils to clear energetic blockage, relax deep muscular tension, and restore peace.",
    "highlights": [
      "Selenite crystal healing energy",
      "Bespoke essential oil blends",
      "Available in 45m, 60m & 90m durations"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24093335"
  },
  {
    "id": "bramley-sleep-ritual",
    "name": "The Bramley Sleep Ritual",
    "category": "signature",
    "categoryLabel": "Signature Rituals",
    "duration": "2 hours",
    "price": "£160",
    "priceNum": 160,
    "description": "Carefully designed to soothe an overactive nervous system and promote restorative sleep. Includes gentle dry body brushing, warm lavender oil massage, and soothing pressure point head ritual.",
    "highlights": [
      "Promotes deep restorative sleep",
      "Calming lavender & chamomile botanicals",
      "Includes dry body brushing & scalp ritual"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24093850"
  },
  {
    "id": "nourishing-hands-feet-scalp",
    "name": "Nourishing Hands, Feet & Scalp Therapy",
    "category": "body",
    "categoryLabel": "Body & Skin",
    "duration": "60 mins",
    "price": "£60",
    "priceNum": 60,
    "description": "Focusing on the body's most hardworking areas: warm mitt exfoliation, rich moisture wraps for hands and feet, and an extended relaxing scalp massage.",
    "highlights": [
      "Warm mitt exfoliation & wrap",
      "Reflex hand & foot massage",
      "Deeply conditioning scalp therapy"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A5955224"
  },
  {
    "id": "bramley-skin-smoother",
    "name": "The Bramley Skin Smoother Full Body Scrub",
    "category": "body",
    "categoryLabel": "Body & Skin",
    "duration": "45 mins",
    "price": "£60",
    "priceNum": 60,
    "description": "Invigorating all-over body polish using natural botanical salts and essential oils, followed by warm towel removal and rich hydrating body cream application.",
    "highlights": [
      "Full body botanical exfoliation",
      "Silky soft skin finish",
      "Stimulates circulation"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A5955175"
  },
  {
    "id": "mother-to-be-massage",
    "name": "The Bramley Mother-To-Be Back Massage",
    "category": "body",
    "categoryLabel": "Mums-to-Be",
    "duration": "30 mins",
    "price": "£45 (£65 for 1-hour treatment)",
    "priceNum": 45,
    "description": "Our popular signature pregnancy massage utilizes an award-winning pregnancy pillow that allows expecting mothers to safely and comfortably lie on their stomach for a deeply relieving, full back massage without any abdominal pressure.",
    "highlights": [
      "Award-winning lie-on-stomach pregnancy pillow",
      "Full back massage easing lumbar & sciatic tension",
      "100% obstetric-approved botanical body oils"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921"
  },
  {
    "id": "gel-bottle-manicure",
    "name": "The Gel Bottle Manicure",
    "category": "nails",
    "categoryLabel": "Nails & Hands",
    "duration": "45 mins",
    "price": "£30 (£35 with soak-off)",
    "priceNum": 30,
    "description": "Nail shaping, precision cuticle care, hand hydration, and long-lasting The Gel Bottle gel polish cured under LED.",
    "highlights": [
      "The Gel Bottle premium formula",
      "Chip-free shine for up to 3 weeks",
      "Precision cuticle work"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A5952022"
  },
  {
    "id": "gel-bottle-biab",
    "name": "The Gel Bottle BIAB (Builder in a Bottle)",
    "category": "nails",
    "categoryLabel": "Nails & Hands",
    "duration": "60 mins",
    "price": "£40 (£45 with soak-off / infill)",
    "priceNum": 40,
    "description": "Strengthening builder gel overlay that nourishes natural nails, protects against breakage, and allows nails to grow long and healthy.",
    "highlights": [
      "Strengthens weak or brittle nails",
      "Promotes natural nail growth",
      "Available with French or colour finish"
    ],
    "popular": true,
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A10549332"
  },
  {
    "id": "gel-bottle-pedicure",
    "name": "The Gel Bottle Luxury Pedicure",
    "category": "nails",
    "categoryLabel": "Nails & Hands",
    "duration": "45 mins",
    "price": "£30 (£35 with soak-off)",
    "priceNum": 30,
    "description": "Foot soak, nail shaping, cuticle tidy, exfoliating foot treatment, moisturizing massage, and gel polish finish.",
    "highlights": [
      "Includes foot soak & scrub",
      "Instantly dry LED cured finish",
      "Smooths tired soles"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A12500339"
  },
  {
    "id": "rejuvenating-feet-callus",
    "name": "Rejuvenating Feet with Callus Peel & Gels",
    "category": "nails",
    "categoryLabel": "Nails & Hands",
    "duration": "90 mins",
    "price": "£75",
    "priceNum": 75,
    "description": "Our most complete foot transformation: intensive fruit acid callus peel to remove hard skin, followed by a luxury pedicure and gel polish.",
    "highlights": [
      "Removes stubborn dry/hard skin",
      "Intensive callus peel treatment",
      "Complete gel pedicure finish"
    ],
    "freshaUrl": "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A12500284"
  }
];
