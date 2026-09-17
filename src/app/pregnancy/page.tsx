'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Clock, 
  Check, 
  Calendar, 
  ArrowRight, 
  Heart, 
  Star, 
  ShieldCheck, 
  Gift, 
  Phone,
  ChevronDown,
  Baby,
  Flower2,
  BedDouble
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { useFresha } from '@/components/booking/FreshaModal';

export default function PregnancyPage() {
  const { openFresha } = useFresha();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pregnancyOfferings = [
    {
      id: 'pregnancy-back-massage',
      title: 'Targeted Mother-To-Be Back, Neck & Shoulder Massage',
      tier: 'Essential Relief',
      duration: '30 mins',
      price: '£45',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921',
      description: 'Specifically engineered for the acute aches of pregnancy. Resting safely face-down on our award-winning tummy cushion, your therapist works away deep lower back stiffness, sacral pressure, and aching shoulders using soothing obstetrician-approved Bramley botanicals.',
      highlights: [
        'Award-winning lie-on-stomach pregnancy cushion',
        'Zero pressure on your baby bump or chest',
        'Deep focused relief for lower back, glutes & shoulders',
        'Obstetrician-approved lavender & sweet almond oils',
        'Immediate spinal decompression and tension release'
      ],
      idealFor: 'Busy mums-to-be seeking fast, targeted relief for persistent lower backache, desk stiffness, or sciatic ache.'
    },
    {
      id: 'pregnancy-full-body',
      title: 'The Signature Full Body Mother-To-Be Massage',
      tier: 'Head-to-Toe Restoration',
      duration: '60 mins',
      price: '£65',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921',
      description: 'Our most sought-after prenatal massage. Lie on your stomach for a thorough full back and shoulder release, before gentle repositioning to relieve heavy swollen legs, fluid retention in ankles, sore feet, and tension across your arms, neck, and scalp.',
      highlights: [
        'Lie comfortably face-down for complete back work',
        'Gentle lymphatic drainage for swollen legs and feet',
        'Nourishing British botanical oils to hydrate stretching skin',
        'Calming acupressure neck and scalp unwinding',
        'Restores deep sleep patterns and calms restless legs'
      ],
      popular: true,
      idealFor: 'Expectant mothers in their 2nd or 3rd trimester wanting a complete, full-body restorative sanctuary.'
    },
    {
      id: 'pregnancy-duo-facial',
      title: 'Mother-To-Be Massage & Botanical Glow Facial Duo',
      tier: 'Face & Body Harmony',
      duration: '60 - 90 mins',
      price: '£95 - £130',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461617',
      description: 'Why choose between back relief and glowing skin? Combine our signature stomach-cushion prenatal back massage with a tailored, hormone-balancing Bramley botanical facial and relaxing scalp massage designed to soothe pregnancy complexion changes.',
      highlights: [
        'Targeted prenatal back massage on tummy cushion',
        'Gentle botanical facial safe for pregnancy skin sensitivity',
        'Warm towel compresses & lymphatic facial drainage',
        'Restores natural maternal glow & eases facial puffiness',
        'Includes relaxing temple & scalp acupressure'
      ],
      idealFor: 'Mothers experiencing tired skin, hormonal imbalances, or seeking a complete sensory treat.'
    },
    {
      id: 'mums-to-be-bronze',
      title: 'The Mum-To-Be Bronze Pamper Sanctuary',
      tier: 'Half-Day Retreat (3 Hours)',
      duration: '3 Hours',
      price: '£170',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461547',
      description: 'A deeply indulgent 3-hour journey created to spoil expectant mothers before baby arrives. Includes a luxury spa pedicure with warming foot soak, targeted stomach-cushion back massage, and a radiant botanical facial.',
      highlights: [
        'Full 3 hours of continuous pampering',
        'Luxury Pedicure with warm foot soak, exfoliation & polish',
        'Signature Lie-on-Stomach Pregnancy Back Massage',
        'Soothing Bramley Botanical Radiance Facial',
        'Complimentary herbal teas and countryside calm'
      ],
      idealFor: 'Baby shower celebrations, early maternity leave gifts, or a dedicated afternoon of prenatal relaxation.'
    },
    {
      id: 'mums-to-be-silver',
      title: 'The Mum-To-Be Silver Pamper Sanctuary',
      tier: 'Extended Luxury (4 Hours)',
      duration: '4 Hours',
      price: '£215',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461547',
      description: 'Four hours of serene self-care. Features an extended luxury manicure and pedicure with heated booties, followed by an in-depth prenatal back massage and full restorative botanical facial with scalp therapy.',
      highlights: [
        'Full 4-hour immersive pamper experience',
        'Luxury Manicure & Pedicure with hydrating mask & heated boots',
        'Extended Pregnancy Back & Hip Massage on stomach cushion',
        'Deeply nourishing Bramley facial with scalp massage',
        'Private suite relaxation with gourmet herbal refreshments'
      ],
      idealFor: 'Expectant mothers who want both their nails perfected and deep muscular stress resolved in one tranquil visit.'
    },
    {
      id: 'mums-to-be-gold',
      title: 'The Mum-To-Be Gold Luxury Sanctuary Package',
      tier: 'The Ultimate Prenatal Experience (4.5 Hours)',
      duration: '4 Hours 30 Mins',
      price: '£245',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461547',
      description: 'Our most prestigious, head-to-toe retreat designed exclusively for mums-to-be. Begins with a full luxury spa manicure and pedicure with warm foot soak, gentle exfoliation, and nourishing mask, followed by our signature pregnancy back massage, full botanical facial, and warm oil scalp cocoon.',
      highlights: [
        '4.5 Hours of total uninterrupted sanctuary',
        'Full Luxury Spa Manicure & Pedicure with nail polish',
        'Specialist Pregnancy Back & Sacral Massage',
        'Full Bramley Botanical Glow Facial & Eyebrow Tidy',
        'Tension-melting warm scalp cocoon ritual',
        'Delightful homemade treats & herbal refreshments'
      ],
      badge: 'The Gold Standard',
      popular: true,
      idealFor: 'The ultimate baby shower gift, maternity leave celebration, or pre-birth pamper day for mothers in their final trimester.'
    }
  ];

  const faqs = [
    {
      q: 'Can I really lie safely on my stomach during pregnancy?',
      a: 'Yes, absolutely! At The Beauty Barn we use an award-winning, ergonomically engineered pregnancy cushion system. It features specially contoured, deep recesses that support your pelvic bone and chest while allowing your baby bump to suspend weightlessly without any abdominal pressure. It is fully approved by midwives, obstetricians, and prenatal therapists.'
    },
    {
      q: 'At what stage of pregnancy can I book a massage?',
      a: 'For maternal safety, our pregnancy treatments are designed for women in their second and third trimesters (from 12 weeks of pregnancy onward). Once you have reached 12 weeks, our treatments can be safely enjoyed right up to your due date!'
    },
    {
      q: 'What if I prefer not to lie on my stomach?',
      a: 'While 99% of our mothers love the chance to lie on their stomach again, your comfort is always our first priority. If you prefer to be massaged in a supported side-lying position, our therapists will arrange soft bolsters and cushions to keep you perfectly comfortable throughout.'
    },
    {
      q: 'Are the oils and products safe during pregnancy?',
      a: 'Yes. We use 100% obstetrician-safe, gentle British Bramley botanical oils and skincare. Our prenatal blends avoid high-concentration stimulating essential oils (like rosemary or clary sage) and instead use gentle mandarin, lavender, roman chamomile, and nourishing sweet almond oil to deeply hydrate stretching skin.'
    },
    {
      q: 'Can I come with my partner, mum, or a friend?',
      a: 'Yes! We have a gorgeous double treatment suite where you can experience treatments side-by-side. You can relax on our pregnancy pillow while your partner or friend enjoys a full Swedish or hot stone massage at the same time. Many couples book this as their pre-baby babymoon retreat.'
    },
    {
      q: 'Can I buy a pregnancy package as a gift voucher?',
      a: 'Yes, our Mum-To-Be packages and pregnancy massages are our most popular gifts for baby showers and maternity leave send-offs. You can purchase gift vouchers directly online or by contacting our team.'
    }
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-cream-200 via-cream-100 to-cream-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bronze-500/15 text-bronze-800 text-xs font-semibold uppercase tracking-wider">
            <Baby className="w-3.5 h-3.5 text-bronze-600" /> Specialist Mother-To-Be Sanctuary • Scraptoft, Leicester
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900 leading-[1.15]">
            Lie On Your Stomach Again: <br />
            <span className="italic font-normal text-bronze-600">Specialist Pregnancy Massage & Sanctuaries</span>
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Experience complete, weightless spinal relief throughout your pregnancy. Using our award-winning ergonomic tummy cushion and obstetrician-approved British botanicals, expecting mothers can safely lie face-down for an authentic, deeply comforting back and full body massage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921', 'The Bramley Mother-To-Be Back Massage')}
              className="px-7 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-bronze-300" />
              Book Pregnancy Massage
            </button>
            <a
              href="#offerings"
              className="px-6 py-3.5 rounded-xl border border-sage-300 bg-white/60 hover:bg-white text-sage-900 text-xs font-semibold uppercase tracking-wider transition shadow-sm inline-flex items-center gap-1.5"
            >
              View All 6 Packages <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3 rounded-2xl bg-white/70 border border-cream-300/80 shadow-xs flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-bronze-600 flex-shrink-0" />
              <span className="text-xs font-medium text-sage-900">Award-Winning Cushion</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/70 border border-cream-300/80 shadow-xs flex items-center gap-2.5">
              <Flower2 className="w-4 h-4 text-bronze-600 flex-shrink-0" />
              <span className="text-xs font-medium text-sage-900">Obstetrician-Safe Oils</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/70 border border-cream-300/80 shadow-xs flex items-center gap-2.5">
              <BedDouble className="w-4 h-4 text-bronze-600 flex-shrink-0" />
              <span className="text-xs font-medium text-sage-900">Single & Double Rooms</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/70 border border-cream-300/80 shadow-xs flex items-center gap-2.5">
              <Star className="w-4 h-4 text-bronze-600 flex-shrink-0" />
              <span className="text-xs font-medium text-sage-900">4.9★ (2,500+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* DUAL REAL-SESSION VIDEO SHOWCASE */}
        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1: Pregnancy Pillow in Action */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-cream-300 shadow-md space-y-4">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-charcoal-950 group">
              <video
                src="/videos/pregnancy-massage-pillow.mp4"
                poster="/images/candlelit-treatment-bed.jpg"
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-1">
                  Real Treatment Session • Video 1
                </span>
                <p className="font-serif text-lg font-semibold">
                  Lie Face Down: The Award-Winning Cushion
                </p>
                <p className="text-xs text-cream-100/90 mt-0.5">
                  See how the gentle bump recess supports baby while therapists work away lower back tension.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-sage-100 flex items-center justify-center text-sage-800 flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-bronze-600" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Total Spinal Decompression</h4>
                <p className="text-xs text-charcoal-800/70 leading-relaxed mt-0.5">
                  Takes 100% of weight off your lumbar spine, pelvis, and hips — allowing therapists to deliver authentic, deeply effective relief.
                </p>
              </div>
            </div>
          </div>

          {/* Video 2: Full Body Pregnancy Support & Gentle Flow */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-cream-300 shadow-md space-y-4">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-charcoal-950 group">
              <video
                src="/videos/pregnancy-massage-support.mp4"
                poster="/images/candlelit-treatment-bed.jpg"
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-1">
                  Real Treatment Session • Video 2
                </span>
                <p className="font-serif text-lg font-semibold">
                  Full Body Prenatal Rest & Comfort
                </p>
                <p className="text-xs text-cream-100/90 mt-0.5">
                  Nurturing touch, gentle hip alignment, and soothing strokes tailored to your exact comfort.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-sage-100 flex items-center justify-center text-sage-800 flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-bronze-600" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Gentle Restorative Therapy</h4>
                <p className="text-xs text-charcoal-800/70 leading-relaxed mt-0.5">
                  Calms the maternal nervous system, reduces water retention in ankles and feet, and promotes deep, uninterrupted sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY EXPECTING MUMS LOVE THE BEAUTY BAR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cream-100 via-white to-sage-50/50 rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-md">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">The Beauty Barn Difference</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900 leading-tight">
              Why Most Pregnancy Massages Leave You Wanting More
            </h2>
            <p className="text-sm text-charcoal-800/80 leading-relaxed">
              At most commercial spas, pregnancy massage means lying awkwardly on your side with ordinary pillows. Your shoulder is pinned, lower back knots remain untouched, and you spend the hour wishing you could simply turn over and stretch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-bronze-100 flex items-center justify-center text-bronze-800">
                <BedDouble className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-sage-900">
                Safely Lie On Your Tummy
              </h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                Our ergonomic cushion provides a soft, contoured recess for your baby bump and breasts, with elevated support at the pelvis. You safely lie face-down for the first time in months.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-800">
                <Heart className="w-5 h-5 text-bronze-600" />
              </div>
              <h3 className="font-serif text-lg font-medium text-sage-900">
                Authentic Deep Knot Relief
              </h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                Because you are lying flat, our therapists can properly reach both sides of your spine, loosen tight sacral ligaments, release sciatic tension, and open constricted shoulders evenly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center text-bronze-700">
                <Flower2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-sage-900">
                Obstetrician-Approved British Botanicals
              </h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                We formulate with pure Bramley botanical oils that are 100% pregnancy-safe. Nourishing sweet almond, mandarin, and lavender hydrate stretching skin and calm emotional fatigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE SPECTRUM OF PREGNANCY OFFERINGS */}
      <section id="offerings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Comprehensive Prenatal Menu</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            Our Mother-To-Be Offerings & Sanctuaries
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/75 leading-relaxed">
            From focused 30-minute lumbar relief to immersive 4.5-hour luxury pamper days. Every treatment includes our signature pregnancy cushion and bespoke botanical oils.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pregnancyOfferings.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition flex flex-col justify-between relative ${
                pkg.popular
                  ? 'border-bronze-400 shadow-lg ring-1 ring-bronze-300'
                  : 'border-cream-300 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-bronze-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {pkg.badge || 'Most Popular'}
                </span>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-charcoal-800/60">
                  <span className="font-semibold text-bronze-700 uppercase tracking-wider">{pkg.tier}</span>
                  <span className="flex items-center gap-1 font-medium"><Clock className="w-3.5 h-3.5 text-sage-700" /> {pkg.duration}</span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-medium text-sage-900 leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-800/70 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-cream-200/80">
                  <span className="text-[11px] font-bold text-sage-900 uppercase tracking-wider block">What&apos;s Included:</span>
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-800/80">
                      <Check className="w-3.5 h-3.5 text-bronze-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-cream-100/70 border border-cream-200 text-[11px] text-charcoal-800/70 italic">
                  <strong>Ideal for:</strong> {pkg.idealFor}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-800/60 block uppercase tracking-wider">Investment</span>
                  <span className="font-serif text-2xl font-bold text-sage-900">{pkg.price}</span>
                </div>

                <button
                  onClick={() => openFresha(pkg.freshaUrl, pkg.title)}
                  className="px-5 py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                  Book on Fresha
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPECTANT PARENTS / BABYMOON DOUBLE SUITE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 text-cream-50 rounded-3xl p-8 sm:p-12 border border-sage-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bronze-500/20 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-bronze-300" /> Babymoon & Expectant Parents
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-tight text-white">
              Relax Side-by-Side in Our Candlelit Double Suite
            </h2>
            <p className="text-sm text-sage-200 leading-relaxed">
              Expecting a baby is a shared journey. You don&apos;t have to visit alone — our candlelit double suite lets you and your partner, mother, or friend unwind together with two dedicated therapists.
            </p>
            <p className="text-sm text-sage-200 leading-relaxed">
              Mum-to-be rests blissfully on our award-winning pregnancy stomach cushion, while her companion receives a tension-melting Swedish, hot stone, or deep tissue massage alongside her.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/couples-massage"
                className="px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold uppercase tracking-wider transition shadow"
              >
                Explore Couples & Duo Suites
              </Link>
              <button
                onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A167602', 'Double Room Couples Massage')}
                className="px-6 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-700 text-cream-50 text-xs font-semibold uppercase tracking-wider transition border border-sage-700 inline-flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                Book Double Room (£110 for Two)
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-sage-700 shadow-lg">
            <Image
              src="/images/treatment-room-skylight.jpg"
              alt="Candlelit Double Suite for Expectant Couples at The Beauty Barn"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Private Double Sanctuary</span>
              <p className="font-serif text-base font-medium">Side-by-Side Heated Couches</p>
            </div>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE GALLERY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Tranquil Countryside Setting</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">Your Mother-To-Be Sanctuary</h2>
          <p className="text-xs sm:text-sm text-charcoal-800/75">
            Surrounded by Leicestershire countryside with heated couches, calming candlelight, and zero commercial rush.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border border-cream-300 group">
            <Image
              src="/images/candlelit-treatment-bed.jpg"
              alt="Heated Candlelit Treatment Bed"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white">Candlelit Warmth</span>
          </div>

          <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border border-cream-300 group">
            <Image
              src="/images/bramley-products-shelf.jpg"
              alt="Obstetric-Safe Bramley Botanicals"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white">Natural Bramley Botanicals</span>
          </div>

          <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border border-cream-300 group">
            <Image
              src="/images/nail-bar-salon.jpg"
              alt="Luxury Pedicure & Manicure Lounge"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white">Pedicure Sanctuary</span>
          </div>

          <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border border-cream-300 group">
            <Image
              src="/images/afternoon-tea-spread.jpg"
              alt="Gourmet Homemade Treats"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white">Afternoon Treats</span>
          </div>
        </div>
      </section>

      {/* REAL MUM REVIEWS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-cream-300 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-1 text-bronze-600 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-bronze-500 text-bronze-500" />
              ))}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
              Loved by Expecting Mums Across Leicestershire
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800/70">
              Real feedback from mothers who experienced our lie-on-stomach pregnancy cushion and pamper packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-bronze-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-bronze-500 text-bronze-500" />
                  ))}
                </div>
                <p className="text-xs text-charcoal-800/85 italic leading-relaxed">
                  &ldquo;I&apos;m a big fan of sports/deep tissue massage so pregnancy massage has been a tricky one as it&apos;s much more relaxing usually. Millie found the perfect balance of firm in the areas that needed it and relaxing elsewhere. My biggest criticism is that it didn&apos;t last long enough — could have stayed on that bed all day! Will be back for another before my due date, thank you!&rdquo;
                </p>
              </div>
              <div className="border-t border-cream-200 pt-3">
                <span className="text-xs font-bold text-sage-900 block">Verified Mother-To-Be</span>
                <span className="text-[11px] text-charcoal-800/60">Pregnancy Massage • Fresha Verified</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-bronze-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-bronze-500 text-bronze-500" />
                  ))}
                </div>
                <p className="text-xs text-charcoal-800/85 italic leading-relaxed">
                  &ldquo;Being 32 weeks pregnant, being able to safely lay on my tummy on the special pillow was pure heaven! I felt all the pressure lift off my lower back instantly. The room was candlelit and so peaceful. Cannot recommend enough to any pregnant ladies suffering with back or hip ache.&rdquo;
                </p>
              </div>
              <div className="border-t border-cream-200 pt-3">
                <span className="text-xs font-bold text-sage-900 block">Sophie L.</span>
                <span className="text-[11px] text-charcoal-800/60">Mother-To-Be Full Body • Google Review</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-bronze-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-bronze-500 text-bronze-500" />
                  ))}
                </div>
                <p className="text-xs text-charcoal-800/85 italic leading-relaxed">
                  &ldquo;My partner bought me the Mum-To-Be Gold Package as a baby shower present. 4.5 hours of sheer heaven. Pedicure, facial, and the tummy cushion massage left me feeling like a new person. The staff treated me like royalty.&rdquo;
                </p>
              </div>
              <div className="border-t border-cream-200 pt-3">
                <span className="text-xs font-bold text-sage-900 block">Hannah R.</span>
                <span className="text-[11px] text-charcoal-800/60">Mum-To-Be Gold Package • Fresha Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREGNANCY FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Frequently Asked Questions</span>
          <h2 className="font-serif text-3xl font-medium text-sage-900">
            Pregnancy & Prenatal Care FAQs
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/75">
            Everything you need to know about preparing for your pregnancy treatment at The Beauty Barn.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-cream-300 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-cream-50/60 transition"
              >
                <span className="font-serif text-base font-medium text-sage-900">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-bronze-600 transition duration-300 flex-shrink-0 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-800/75 leading-relaxed border-t border-cream-200/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sage-900 via-sage-800 to-sage-900 text-cream-50 rounded-3xl p-8 sm:p-12 border border-sage-700 shadow-xl text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bronze-500/20 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-bronze-300" /> Give the Gift of Comfort
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white max-w-2xl mx-auto leading-tight">
            Ready to Relieve Back Pressure and Truly Unwind?
          </h2>
          <p className="text-sm text-sage-200 max-w-xl mx-auto leading-relaxed">
            Reserve your session online on Fresha or get in touch with our friendly team to curate your custom maternity leave retreat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921', 'The Bramley Mother-To-Be Back Massage')}
              className="px-7 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-cream-100" />
              Book on Fresha Now
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-700 text-cream-50 text-xs font-semibold uppercase tracking-wider transition border border-sage-600 inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-bronze-300" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
