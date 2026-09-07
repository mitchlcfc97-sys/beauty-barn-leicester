export interface SignatureRitual {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceNum: number;
  duration: string;
  badge?: string;
  therapists: string; // e.g. "2 Therapists Synchronised" or "1 Senior Therapist"
  leadImage: string;
  description: string;
  ritualSteps: {
    title: string;
    description: string;
  }[];
  whatsIncluded: string[];
  idealFor: string;
  freshaUrl: string;
}

export const SIGNATURE_RITUALS: SignatureRitual[] = [
  {
    id: "dual-serenity",
    name: "Dual Serenity — Face Forward, Feet First",
    subtitle: "A synchronized head-and-sole ritual delivered simultaneously by two therapists",
    price: "£140",
    priceNum: 140,
    duration: "45 Minutes",
    badge: "Most Unique Experience",
    therapists: "2 Therapists Working in Harmony",
    leadImage: "/images/treatment-room-skylight.jpg",
    description: "Experience the ultimate balance of deep relaxation and visible glow. While one therapist delivers an indulgent, customized botanical facial tailored to your skin's exact needs, a second therapist pampers your feet and lower legs with an intensive softening scrub, mask, and reflex massage.",
    ritualSteps: [
      {
        title: "Step 1: Synchronised Welcome & Sensory Aromatherapy",
        description: "Both therapists begin in tandem with deep breathing inhalation and gentle tension release across the shoulders and soles."
      },
      {
        title: "Step 2: Tailored Botanical Facial + Scalp Ritual",
        description: "Therapist One conducts double cleansing, enzymatic exfoliation, facial lymphatic drainage, customized mask, and pressure-point scalp therapy."
      },
      {
        title: "Step 3: Luxury Foot & Lower Leg Revival",
        description: "Therapist Two works simultaneously with warm botanical compress, revitalizing foot peel scrub, soothing lower leg massage, and rich hydration balm."
      }
    ],
    whatsIncluded: [
      "Simultaneous synchronised service by 2 qualified therapists",
      "Full custom facial tailored to your skin goals",
      "Full lower leg and foot facial ritual",
      "Acupressure scalp massage",
      "Private tranquil treatment suite"
    ],
    idealFor: "Time-pressed clients seeking the ultimate luxury reset, or anyone who wants double the indulgence in half the time.",
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "bramley-simply-divine",
    name: "The Bramley Simply Divine Ritual",
    subtitle: "Our crown jewel: 2 Hours 45 Minutes of pure face, body, and sensory restoration",
    price: "£190 (£195 with Hot Stones | £380 for Double Room)",
    priceNum: 190,
    duration: "2 Hours 45 Minutes",
    badge: "Ultimate Indulgence",
    therapists: "Senior Holistic Therapist",
    leadImage: "/images/candlelit-treatment-bed.jpg",
    description: "Our most comprehensive head-to-toe face and body ritual, designed to leave you completely transformed. Your journey begins with a soothing Bramley Opening Ritual, followed by a revitalizing full-body Cranberry Scrub to smooth and renew the skin. Sink into blissful relaxation with a nourishing full-body massage using warm essential oils, transitioning into an indulgent customized botanical facial and warm oil scalp ritual.",
    ritualSteps: [
      {
        title: "1. The Bramley Welcome & Cranberry Body Scrub",
        description: "Gentle dry brushing and an all-over revitalizing cranberry body exfoliation to polish skin texture and stimulate lymphatic circulation."
      },
      {
        title: "2. Full Body Warm Botanical Oil Massage",
        description: "Long flowing Swedish and deep pressure movements across legs, feet, arms, chest, and back using warm hand-blended Bramley essential oils (hot stones upgrade available)."
      },
      {
        title: "3. Tailored Bramley Facial & Warm Oil Scalp Cocoon",
        description: "A nourishing facial featuring botanical cleansers, lymphatic drainage, hydrating mask, and an acupressure scalp massage."
      }
    ],
    whatsIncluded: [
      "Full 165 minutes (2h 45m) of continuous therapy",
      "All-over Cranberry Body Exfoliation",
      "Complete Full Body Massage",
      "Tailored Bramley Botanical Facial",
      "Pressure-point Warm Oil Scalp Ritual",
      "Available as a side-by-side Duo experience in our double suite"
    ],
    idealFor: "The ultimate birthday, anniversary, or self-care escape. The highest-rated gift for someone who deserves complete head-to-toe pampering.",
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "bramley-sleep-ritual",
    name: "The Bramley Sleep Ritual",
    subtitle: "A deeply sedative nervous-system reset formulated to ease anxiety and promote restorative rest",
    price: "£160",
    priceNum: 160,
    duration: "2 Hours",
    badge: "Rest & Recovery",
    therapists: "Specialist Holistic Therapist",
    leadImage: "/images/spa-garden-overview.jpg",
    description: "Formulated specifically for overactive minds, insomnia, and nervous exhaustion. We combine gentle body brushing, rhythmic warm lavender and chamomile oil massage, and soothing pressure point head and facial work to transition your nervous system into deep parasympathetic recovery.",
    ritualSteps: [
      {
        title: "1. Calming Body Brushing & Inhalation",
        description: "Rhythmic dry brushing softens skin and stimulates parasympathetic nerves, paired with calming chamomile and lavender aromatherapy breathwork."
      },
      {
        title: "2. Warm Lavender Oil Full Body Massage",
        description: "Slow, hypnotic, wave-like Swedish strokes along the spine, limbs, and shoulders to release stored cortisol and muscular tension."
      },
      {
        title: "3. Craniosacral & Pressure Point Head Ritual",
        description: "Gentle pressure applied to tension zones on the temples, jawline, forehead, and scalp to quiet racing thoughts and induce total rest."
      }
    ],
    whatsIncluded: [
      "120 minutes of dedicated unhurried relaxation",
      "Dry body brushing exfoliation",
      "Warm lavender essential oil full body massage",
      "Acupressure face & scalp massage",
      "Herbal relaxation tea to finish"
    ],
    idealFor: "Anyone suffering from poor sleep, work stress, burnout, or emotional fatigue seeking profound stillness.",
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "bramley-full-indulgence",
    name: "The Bramley Full Indulgence Package",
    subtitle: "A seamless 90-minute pairing of deep bodywork and glowing facial therapy",
    price: "£100 (£105 with Hot Stones | £200 for Two)",
    priceNum: 100,
    duration: "1 Hour 30 Minutes",
    badge: "Client Favourite",
    therapists: "Qualified Spa Therapist",
    leadImage: "/images/treatment-room-skylight.jpg",
    description: "Our signature face & body combination. Begin with a moment of serene calm during our Bramley Opening Ritual, followed by a restorative full-body massage and a revitalizing botanical facial with warm towel compresses.",
    ritualSteps: [
      {
        title: "1. Bramley Sensory Opening Ritual",
        description: "Relaxing foot wipe and deep breathing with custom essential oils."
      },
      {
        title: "2. Restorative Full Body Massage",
        description: "45 minutes of customized massage targeting your areas of tension."
      },
      {
        title: "3. Revitalising Botanical Facial",
        description: "45 minutes of tailored skincare including double cleanse, gentle exfoliation, and mask."
      }
    ],
    whatsIncluded: [
      "90-minute balanced face & body combination",
      "Full body massage with botanical oils",
      "Revitalising tailored facial",
      "Available in private double suite for couples or pairs"
    ],
    idealFor: "Those who want both a massage and a facial in one seamless appointment without choosing between them.",
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  },
  {
    id: "mums-to-be-gold",
    name: "The Mum-To-Be Gold Luxury Pamper Package",
    subtitle: "A 4.5-Hour pregnancy-safe sanctuary for expecting mothers",
    price: "£245 (Silver 4h £215 | Bronze 3h £170)",
    priceNum: 245,
    duration: "4 Hours 30 Minutes",
    badge: "Pregnancy Sanctuary",
    therapists: "Prenatal Certified Specialist",
    leadImage: "/images/nail-bar-salon.jpg",
    description: "The ultimate head-to-toe retreat designed specifically for mums-to-be. Features a luxury manicure and pedicure with warm foot soak, exfoliation, mask and massage, followed by our pregnancy-safe relaxing back massage and ultra-relaxing botanical facial.",
    ritualSteps: [
      {
        title: "1. Luxury Manicure & Pedicure",
        description: "Gentle foot soak, exfoliating scrub, deeply hydrating mask with warm booties, nail shaping, and long-lasting polish."
      },
      {
        title: "2. Pregnancy-Safe Ergonomic Back Massage",
        description: "Supportive side-lying cushioning to safely ease lower back fatigue, hip ache, and heavy legs."
      },
      {
        title: "3. Ultra-Relaxing Botanical Facial & Scalp Ritual",
        description: "Hormone-balancing, soothing skincare to restore maternal glow, paired with a tension-melting scalp massage."
      }
    ],
    whatsIncluded: [
      "4.5 Hours of nurturing prenatal care",
      "Luxury Spa Manicure & Pedicure with soak and mask",
      "Specialist Pregnancy Back & Hip Massage",
      "Ultra-Relaxing Botanical Facial",
      "Herbal refreshments and comfortable private suite"
    ],
    idealFor: "Second and third trimester mums seeking safe, deep relief and total pampering before baby arrives, or the ultimate baby shower gift.",
    freshaUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459"
  }
];
