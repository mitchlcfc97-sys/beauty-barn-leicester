'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  Leaf, 
  Heart, 
  Recycle, 
  Check, 
  ShoppingBag, 
  ArrowRight,
  Droplets,
  Flower2,
  Calendar
} from 'lucide-react';
import { useFresha } from '@/components/booking/FreshaModal';

const BRAMLEY_PILLARS = [
  {
    icon: Leaf,
    title: '100% Naturally Derived',
    description: 'Formulated with finest-grade pure essential oils and botanical extracts, completely free from artificial colours, sulphates, and synthetic parabens.',
  },
  {
    icon: Heart,
    title: 'Cruelty-Free & Vegan',
    description: 'Leaping Bunny certified, strictly cruelty-free, and vegan-friendly. Ethical British wellness that respects wildlife and the environment.',
  },
  {
    icon: Recycle,
    title: 'Sustainable British Packaging',
    description: 'Bottled in post-consumer recycled glass, aluminium, and sugar cane bioplastic, supporting a closed-loop recyclable British countryside ethos.',
  },
  {
    icon: Flower2,
    title: 'Inspired by Countryside Flora',
    description: 'Crafted with scents and extracts native to the British woodlands and hedgerows: lavender, geranium, spearmint, sweet orange, and chamomile.',
  },
];

const RETAIL_COLLECTIONS = [
  {
    category: 'Hand & Body Care',
    scent: 'Sweet Orange, Lavender & Spearmint',
    description: 'Gentle cleansing hand washes and deeply restorative body lotions that hydrate and leave a refreshing herbal scent.',
    bestsellers: ['Hand Wash (250ml)', 'Nourishing Hand Cream', 'Invigorating Body Wash'],
  },
  {
    category: 'Nourishing Body & Bath Oils',
    scent: 'Rosehip, Sea Buckthorn & Geranium',
    description: 'The exact therapeutic massage oils used in our candlelit treatment suites. Intensely nourishing for dry skin and sore muscles.',
    bestsellers: ['Relaxing Bath & Body Oil', 'Muscle Ease Treatment Oil', 'Botanical Body Scrub'],
  },
  {
    category: 'Sleep & Serenity Rituals',
    scent: 'Roman Chamomile, Lavender & Yarrow',
    description: 'Calming botanical formulations scientifically blended to relax the central nervous system and prepare you for deep slumber.',
    bestsellers: ['Calming Pillow Mist', 'Sleep Bath Salts (500g)', 'Sleep Pulse Point Roll-On'],
  },
  {
    category: 'Home Fragrance & Living',
    scent: 'English Hedgerow & Botanicals',
    description: 'Natural coconut and soy wax candles alongside natural reed diffusers to bring the tranquil Beauty Barn spa atmosphere into your home.',
    bestsellers: ['Botanical Scented Candle', 'Natural Reed Diffuser', 'Luxury Travel Gift Set'],
  },
];

const BRAMLEY_FAQS = [
  {
    q: 'Can I purchase Bramley products without booking a spa treatment?',
    a: 'Yes, absolutely! Our in-salon Bramley boutique is open to visitors during regular salon hours. You are welcome to pop into our Scraptoft countryside sanctuary to test testers, browse our gift sets, or pick up your favourite botanicals.',
  },
  {
    q: 'Are Bramley products safe during pregnancy?',
    a: 'Yes, Bramley formulates gentle, natural products suitable for all skin types. In the salon, our Mum-to-Be Gold Ritual and pregnancy massages use carefully selected, obstetric-approved botanical oils that nourish stretching skin safely.',
  },
  {
    q: 'Why did The Beauty Barn choose Bramley over other spa brands?',
    a: 'We wanted a brand that aligned with our countryside sanctuary values. Bramley is authentically British, environmentally responsible, utilizes genuine essential oils rather than synthetic perfumes, and delivers an unmistakable feeling of English garden tranquility.',
  },
  {
    q: 'Do you offer Bramley gift boxes?',
    a: 'Yes! We carry beautifully presented Bramley gift sets and can pair them with our Beauty Barn gift vouchers for the ultimate birthday, anniversary, or pampering gift.',
  },
];

export default function BramleyPage() {
  const { openFresha } = useFresha();

  return (
    <div className="space-y-20 pb-24">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-cream-200/80 via-cream-100 to-cream-50 pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" />
            Official Product Partner of The Beauty Barn
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900 leading-tight">
            Naturally Derived <br className="hidden sm:inline" />
            <span className="italic font-normal text-bronze-600">British Botanicals</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-800/85 max-w-3xl mx-auto leading-relaxed">
            Rooted in the English countryside, Bramley blends therapeutic essential oils with pure botanical extracts. Experience them in our candlelit treatment cabins, private spa suites, and in-salon retail boutique in Scraptoft, Leicester.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openFresha('Bramley Simply Divine')}
              className="inline-flex items-center gap-2 bg-sage-800 hover:bg-sage-900 text-cream-50 font-medium px-7 py-3 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-bronze-300" />
              Book a Bramley Ritual
            </button>
            <a
              href="#boutique"
              className="px-6 py-3 rounded-xl border border-sage-300 text-sage-900 bg-white/80 hover:bg-cream-100 transition font-medium text-sm inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-bronze-500" />
              Browse In-Salon Boutique
            </a>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden shadow-xl border border-cream-300 group">
              <Image
                src="/images/bramley-products-shelf.jpg"
                alt="Bramley botanicals shelf at The Beauty Barn Leicester"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20">
                <p className="font-serif text-lg font-semibold">In-Salon Boutique Showcase</p>
                <p className="text-xs text-cream-100/90 mt-0.5">Explore testers and take home your favourite botanical scents from our Scraptoft reception.</p>
              </div>
            </div>

            {/* Floating Decorative Card */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-cream-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-800">
                <Leaf className="w-5 h-5 text-sage-600" />
              </div>
              <div>
                <span className="text-xs font-semibold text-sage-900 block">British Made</span>
                <span className="text-[11px] text-charcoal-800/70">Cotswolds & Countryside Heritage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-bronze-600">
                The Beauty Barn Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900 leading-snug">
                Where Countryside Serenity Meets Therapeutic Plants
              </h2>
              <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
                When Mel and Zofia opened The Beauty Barn in Scraptoft, our vision was simple: to create a genuine sanctuary free from synthetic fragrance, rushing crowds, and harsh chemicals.
              </p>
              <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
                Bramley was the natural choice. Born in the British countryside, each bottle captures the essence of wildflowers, herbs, and trees. By infusing Bramley into every treatment oil, body scrub, and hand care station, your entire sensory experience is grounded in nature.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {BRAMLEY_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-4 rounded-2xl bg-cream-50 border border-cream-200 hover:border-bronze-300 transition">
                    <Icon className="w-5 h-5 text-bronze-600 mb-2" />
                    <h3 className="font-serif text-sm font-semibold text-sage-900">{pillar.title}</h3>
                    <p className="text-xs text-charcoal-800/75 mt-1 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Spotlight: Bramley Simply Divine */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sage-900 via-sage-950 to-sage-900 text-cream-50 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-bronze-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bronze-500/20 text-bronze-300 text-xs font-medium uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-bronze-400" /> Signature 2-Hour Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-cream-50">
                The Bramley Simply Divine Ritual
              </h2>
              <p className="text-sm sm:text-base text-sage-200 leading-relaxed max-w-2xl">
                Our crowning therapeutic ritual. Two full hours of uninterrupted pampering utilizing warmed Bramley botanical oils tailored to your body’s unique tension patterns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-sage-800/60 border border-sage-700/60">
                  <span className="text-xs text-sage-300 block">Duration</span>
                  <span className="font-serif text-base font-semibold text-cream-50">120 Minutes</span>
                </div>
                <div className="p-3.5 rounded-xl bg-sage-800/60 border border-sage-700/60">
                  <span className="text-xs text-sage-300 block">Investment</span>
                  <span className="font-serif text-base font-semibold text-bronze-300">£190 per person</span>
                </div>
                <div className="p-3.5 rounded-xl bg-sage-800/60 border border-sage-700/60">
                  <span className="text-xs text-sage-300 block">Inclusions</span>
                  <span className="font-serif text-xs font-medium text-cream-50">Scrub, Massage & Facial</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openFresha('Bramley Simply Divine')}
                  className="inline-flex items-center gap-2 bg-bronze-500 hover:bg-bronze-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-bronze-100" />
                  Book Bramley Simply Divine
                </button>
                <Link
                  href="/treatments"
                  className="text-xs font-semibold text-sage-300 hover:text-cream-50 inline-flex items-center gap-1.5 transition"
                >
                  View all Signature Rituals <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3 bg-sage-800/40 p-6 rounded-2xl border border-sage-700/50">
              <h3 className="font-serif text-sm font-semibold text-cream-100 uppercase tracking-wider">
                Ritual Progression:
              </h3>
              <ul className="space-y-3 text-xs text-sage-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-bronze-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Welcome Consultation:</strong> Sensory scent test to match your state of mind.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-bronze-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Full Body Botanical Scrub:</strong> Exfoliating natural botanicals to polish skin.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-bronze-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Heated Oil Body Massage:</strong> Deep muscle release with warm Bramley blends.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-bronze-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Radiance Facial & Scalp Melt:</strong> Lymphatic drainage and pressure point scalp massage.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* In-Salon Boutique Retail Range */}
      <section id="boutique" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-bronze-600">
            Take The Spa Home
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            In-Salon Bramley Boutique Collection
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
            All Bramley ranges are available for purchase directly at our salon reception in Scraptoft. Experience the fragrances during your treatments, then take your favourites home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RETAIL_COLLECTIONS.map((col) => (
            <div 
              key={col.category}
              className="p-6 rounded-3xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700">
                  <Droplets className="w-5 h-5 text-bronze-500" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-sage-900">{col.category}</h3>
                <span className="inline-block text-[11px] font-semibold text-bronze-600 bg-cream-100 px-2.5 py-1 rounded-md">
                  {col.scent}
                </span>
                <p className="text-xs text-charcoal-800/75 leading-relaxed">{col.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-100 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sage-800 block">
                  Popular In-Salon:
                </span>
                <ul className="space-y-1 text-xs text-charcoal-800/80">
                  {col.bestsellers.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Boutique Notice Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-cream-100 border border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-base font-semibold text-sage-900">
              Visiting the Salon to Purchase?
            </h4>
            <p className="text-xs text-charcoal-800/75 max-w-xl">
              Guests are welcome to stop by our Scraptoft sanctuary during opening hours to browse our collection, try testers, and purchase gifts without needing an active appointment.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold whitespace-nowrap transition"
          >
            Opening Times & Directions
          </Link>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-bronze-600">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl font-medium text-sage-900">
            Everything You Need to Know About Bramley
          </h2>
        </div>

        <div className="space-y-4">
          {BRAMLEY_FAQS.map((faq) => (
            <div key={faq.q} className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm">
              <h3 className="font-serif text-base font-semibold text-sage-900 mb-2">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-cream-200 via-cream-100 to-cream-50 border border-cream-300 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-bronze-600 block">
            Escape to Scraptoft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900 max-w-xl mx-auto">
            Immerse Yourself in British Botanical Wellness
          </h2>
          <p className="text-sm text-charcoal-800/80 max-w-lg mx-auto leading-relaxed">
            Reserve your private spa day or bespoke Bramley body ritual online in seconds via our real-time portal.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openFresha()}
              className="inline-flex items-center gap-2 bg-sage-800 hover:bg-sage-900 text-cream-50 font-medium px-8 py-3 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-bronze-300" />
              Book Your Appointment
            </button>
            <Link
              href="/treatments"
              className="px-6 py-3 rounded-xl border border-cream-400 bg-white hover:bg-cream-100 text-sage-900 text-sm font-medium transition"
            >
              Browse All Treatments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
