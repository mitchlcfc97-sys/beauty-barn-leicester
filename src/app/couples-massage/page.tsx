'use client';

import React from 'react';
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
  Flame,
  Users
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { useFresha } from '@/components/booking/FreshaModal';

export default function CouplesMassagePage() {
  const { openFresha } = useFresha();

  const couplesPackages = [
    {
      id: 'couples-swedish',
      name: 'Couples Relaxing Full Body Swedish Massage',
      tag: 'Most Popular for Two',
      duration: '60 mins',
      price: '£110 for Two',
      pricePerPerson: '£55 per person',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A167602',
      description: 'Our signature duo experience. Lie side-by-side on heated treatment beds in our tranquil candlelit double suite with two dedicated therapists. Enjoy rhythmic, tension-melting Swedish bodywork using warm botanical oils across your back, shoulders, neck, legs, feet, and arms.',
      features: [
        'Private double treatment suite with candlelit beds',
        'Two dedicated therapists working in harmony',
        'Customized pressure for each partner (gentle to firm)',
        'Warm natural essential oils & heated couches',
        'Complimentary herbal teas & refreshments to finish'
      ]
    },
    {
      id: 'couples-hot-stones',
      name: 'Couples Hot Stone Full Body Massage',
      tag: 'Deep Thermal Warmth',
      duration: '60 mins',
      price: '£120 for Two',
      pricePerPerson: '£60 per person',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A167602',
      description: 'Soothing heated stones combined with hands-on massage therapy to melt deep-seated muscular tension and soothe the nervous system. The comforting thermal heat radiates deep into tight muscle layers with zero discomfort, leaving both of you utterly relaxed.',
      features: [
        'Heated stones worked seamlessly into full body massage',
        'Deep therapeutic tension release without harsh pressure',
        'Private double room with soft candlelight & soothing sounds',
        'Two dedicated therapists treating you simultaneously',
        'Perfect for winter dates, anniversary pampering & tight muscles'
      ]
    },
    {
      id: 'couples-full-indulgence',
      name: 'The Couples Full Indulgence Ritual (Massage & Facial)',
      tag: 'Face & Body Combination',
      duration: '90 mins',
      price: '£200 for Two',
      pricePerPerson: '£100 per person',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461617',
      description: 'Why choose between a massage and a facial when you can have both? Begin with 45 minutes of customized deep back, neck & shoulder massage to release accumulated stress, transitioning into 45 minutes of revitalising botanical facial therapy with warm towel compresses and scalp acupressure.',
      features: [
        '45m targeted deep relaxation back, neck & shoulder massage',
        '45m tailored botanical glow facial with warm compresses',
        'Acupressure scalp massage & sensory aromatherapy',
        'Side-by-side heated treatment couches in private double room',
        'Two qualified therapists pampering you together'
      ]
    },
    {
      id: 'couples-simply-divine',
      name: 'The Bramley Simply Divine Couples Ritual',
      tag: 'The Pinnacle of Luxury (2h 45m)',
      duration: '2 Hours 45 Mins',
      price: '£380 for Two',
      pricePerPerson: '£190 per person',
      freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24981589',
      description: 'Our most comprehensive head-to-toe ritual for couples celebrating major milestones. Begins with an all-over invigorating cranberry body polish to renew skin, followed by a warm botanical oil full body massage, an indulgent tailored facial, and a tension-melting warm oil scalp cocoon.',
      features: [
        'Full 2 Hours 45 Minutes of continuous uninterrupted luxury',
        'All-over Cranberry Body Exfoliation & polish',
        'Complete Full Body Massage with warm Bramley botanicals',
        'Tailored British Botanical Facial & acupressure scalp ritual',
        'Our highest-rated anniversary and luxury milestone experience'
      ]
    }
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-200 via-cream-100 to-cream-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Heart className="w-3.5 h-3.5 text-bronze-600 fill-bronze-600" />
            <span>Private Double Treatment Suite • Scraptoft, Leicester</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Couples & Duo Massage in Leicester
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Step away from the rush of everyday life and into deep, uninterrupted tranquility together. Relax side-by-side in our candlelit double treatment room with two dedicated therapists, warm botanical oils, and heated couches.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A167602', 'Couples Relaxing Massage')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-lg"
            >
              <Calendar className="w-4 h-4 text-bronze-300" />
              <span>Book Double Suite on Fresha</span>
            </button>
            <Link
              href="#packages"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-cream-100 text-charcoal-900 border border-cream-300 font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-sm"
            >
              <span>View Packages & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Key Trust Highlights */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-800/70 border-t border-cream-300/80 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-bronze-600" />
              <span>Two Dedicated Therapists</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Candlelit Heated Couches</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Over 2,500 Five-Star Reviews</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Free Countryside Parking</span>
            </div>
          </div>
        </div>

        {/* Atmosphere Photo / Video Showcase */}
        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 bg-charcoal-950 group">
            <video
              src="/videos/dual-therapist-relaxation.mp4"
              poster="/images/treatment-room-skylight.jpg"
              preload="metadata"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Synchronised Pampering</span>
              <p className="font-serif text-base font-medium">Two Therapists in Harmony</p>
            </div>
          </div>

          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/candlelit-treatment-bed.jpg"
              alt="Candlelit treatment beds in our double room"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Intimate Sanctuary</span>
              <p className="font-serif text-base font-medium">Private Double Suite</p>
            </div>
          </div>

          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 bg-charcoal-950 group">
            <video
              src="/videos/candlelight-sanctuary.mp4"
              poster="/images/treatment-room.jpg"
              preload="metadata"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Peaceful Countryside Barn</span>
              <p className="font-serif text-base font-medium">Warm, Inviting Atmosphere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose A Couples Massage At The Beauty Barn */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
              The Double Suite Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-sage-900">
              Shared Relaxation, Individual Care.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
              Unlike large commercial spas where you might feel rushed through communal corridors, our countryside double treatment room offers an intimate, tranquil space designed exclusively for two. 
            </p>
            <p className="text-sm text-charcoal-800/80 leading-relaxed">
              Whether you are celebrating a wedding anniversary, surprising your partner for their birthday, or taking time out for a mother-daughter pamper day, our two therapists ensure both of you receive undivided attention from start to finish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-200">
                <h4 className="text-sm font-semibold text-sage-900">Independent Pressure</h4>
                <p className="text-xs text-charcoal-800/70 mt-1 leading-relaxed">
                  One partner can request firm deep tissue knot release, while the other enjoys gentle, flowing Swedish relaxation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-200">
                <h4 className="text-sm font-semibold text-sage-900">Synchronized Timings</h4>
                <p className="text-xs text-charcoal-800/70 mt-1 leading-relaxed">
                  Both therapists begin and finish together so you both drift into stillness and awaken refreshed at the exact same moment.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-200">
                <h4 className="text-sm font-semibold text-sage-900">Natural Botanicals</h4>
                <p className="text-xs text-charcoal-800/70 mt-1 leading-relaxed">
                  Formulated with pure British Bramley botanical oils that leave your skin deeply nourished, silky soft, and delicately scented.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-200">
                <h4 className="text-sm font-semibold text-sage-900">Romantic Setting</h4>
                <p className="text-xs text-charcoal-800/70 mt-1 leading-relaxed">
                  Warm blankets, soft lighting, relaxing acoustic melodies, and heated beds set in our rustic converted Leicestershire barn.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-cream-300">
              <Image
                src="/images/treatment-room-skylight.jpg"
                alt="Skylight double treatment room at The Beauty Barn Leicester"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-bronze-500 text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block shadow">
                  Scraptoft Sanctuary
                </span>
                <h3 className="font-serif text-2xl font-medium">Double Room Tranquility</h3>
                <p className="text-xs text-cream-200 mt-1">Side-by-side heated couches under timber barn rafters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Couples Packages Menu */}
      <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Choose Your Duo Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-sage-900">
            Couples & Duo Treatment Packages
          </h2>
          <p className="text-sm text-charcoal-800/70 leading-relaxed">
            All packages include our private double room and two therapists. Prices shown are for two people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {couplesPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm flex flex-col justify-between hover:shadow-md transition space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-bronze-50 border border-bronze-200 text-bronze-700 text-xs font-bold uppercase tracking-wider">
                    {pkg.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-800/70 font-medium">
                    <Clock className="w-3.5 h-3.5 text-sage-700" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-medium text-charcoal-900">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-charcoal-800/70 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-cream-200 flex items-baseline justify-between">
                  <div>
                    <span className="font-serif text-3xl font-bold text-sage-900 block">
                      {pkg.price}
                    </span>
                    <span className="text-[11px] text-charcoal-800/60 font-medium">
                      {pkg.pricePerPerson}
                    </span>
                  </div>
                  <button
                    onClick={() => openFresha(pkg.freshaUrl, pkg.name)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 font-semibold text-xs uppercase tracking-wider transition shadow-sm"
                  >
                    <span>Book on Fresha</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-2 pt-2 border-t border-cream-200">
                  <span className="text-[11px] uppercase font-bold text-charcoal-800 tracking-wider block">
                    What&apos;s Included For Both Of You:
                  </span>
                  <ul className="space-y-1.5 text-xs text-charcoal-800/80">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-bronze-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => openFresha(pkg.freshaUrl, pkg.name)}
                className="w-full py-3.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-sage-900 font-semibold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 border border-cream-300"
              >
                <Calendar className="w-4 h-4 text-bronze-600" />
                <span>Check Live Availability on Fresha</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrade to Private Spa Day Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sage-900 via-sage-800 to-charcoal-900 rounded-3xl p-8 sm:p-12 text-cream-50 border border-sage-700 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-bronze-400">
              The Complete Romantic Escape
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Upgrade to a Private Hot Tub & Afternoon Tea Day
            </h2>
            <p className="text-sm text-sage-200 leading-relaxed max-w-2xl">
              Turn your couples massage into an unforgettable half-day retreat. When you book a private spa day, our heated wooden garden cabin and private hot tub are exclusively reserved just for you two. Snuggle in soft robes, sip unlimited drinks, and enjoy our homemade afternoon tea before your side-by-side treatments.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/spa-days"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-semibold text-xs uppercase tracking-wider transition shadow-md"
              >
                <span>Explore Couples Spa Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/spa-days#package-builder"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-cream-50 border border-white/20 font-semibold text-xs uppercase tracking-wider transition"
              >
                <span>Customize Your Day</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-sage-600 shadow-inner">
            <Image
              src="/images/outdoor-loungers.jpg"
              alt="Private hot tub and lodge for couples spa day"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">From £100pp</span>
              <p className="font-serif text-lg font-medium">Private Cabin & Hot Tub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews From Couples & Pairs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Real Couples Experiences
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
            Loved By Couples & Pairs
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/70">
            Read verified feedback from guests who experienced our double suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <p className="text-xs text-charcoal-800/80 leading-relaxed italic">
              &ldquo;Booked the double treatment room for my partner&apos;s birthday. The synchronised massage and facial was heavenly. The setting at Hall Farm Barn is stunning and peaceful. Will definitely be returning!&rdquo;
            </p>
            <div className="pt-2 border-t border-cream-200 text-xs">
              <span className="font-semibold text-charcoal-900 block">Hannah W.</span>
              <span className="text-[10px] text-charcoal-800/60">Couples Double Suite Package (Google Review)</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <p className="text-xs text-charcoal-800/80 leading-relaxed italic">
              &ldquo;My friend and I had a wonderful time at The Beauty Barn today. The staff were so friendly and the services we had in the double suite were top drawer. Looking forward to our return.&rdquo;
            </p>
            <div className="pt-2 border-t border-cream-200 text-xs">
              <span className="font-semibold text-charcoal-900 block">Andrea L.</span>
              <span className="text-[10px] text-charcoal-800/60">Duo Pamper Package (Fresha Review)</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <p className="text-xs text-charcoal-800/80 leading-relaxed italic">
              &ldquo;An absolute hidden gem in Leicestershire! The private lodge and hot tub experience is completely uninterrupted — cosy, peaceful, and just pure bliss. The afternoon tea was delicious.&rdquo;
            </p>
            <div className="pt-2 border-t border-cream-200 text-xs">
              <span className="font-semibold text-charcoal-900 block">Sophie M.</span>
              <span className="text-[10px] text-charcoal-800/60">Couples Spa Retreat (Google Review)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Couples Massage FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Helpful Information
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-cream-50 rounded-2xl p-5 border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-sage-900">
              Are we really in the same room together?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              Yes! Our double treatment room has two heated therapy beds positioned side by side, allowing you to share the exact same candlelit atmosphere and calming music while two separate therapists attend to you simultaneously.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-5 border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-sage-900">
              Can one of us have deep tissue pressure while the other wants gentle relaxation?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              100% yes. Before beginning, each therapist will consult individually with each of you about your target areas (e.g. tight shoulders, neck stiffness, aching lower back) and preferred pressure level. Your treatment is entirely tailored to your individual comfort.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-5 border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-sage-900">
              What if one of us is pregnant?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              We warmly welcome expectant mothers! Please let us know in advance so we can prepare our award-winning pregnancy tummy cushion and obstetric-safe botanical oils, so mum-to-be can safely lie comfortably on her stomach while her partner relaxes alongside her.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-5 border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-sage-900">
              How do we book the double room?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              You can book directly via Fresha by selecting the &ldquo;Couples / Double Room Relaxing Massage&rdquo; package. Because our double suite has limited daily availability, we recommend reserving your date a few weeks in advance, especially for weekend slots.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-cream-300 text-center space-y-6 shadow-sm">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-bronze-100 text-bronze-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Ready To Unwind Together?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            Book Your Couples Experience at The Beauty Barn
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/70 max-w-xl mx-auto leading-relaxed">
            Reserve your private double room session today via Fresha or contact our friendly team if you would like to arrange a bespoke surprise package.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A167602', 'Couples Relaxing Massage')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-md"
            >
              <Calendar className="w-4 h-4 text-bronze-300" />
              <span>Book Couples Massage (£110 for Two)</span>
            </button>
            <Link
              href="/gift-vouchers"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-cream-200 text-charcoal-900 border border-cream-300 font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-sm"
            >
              <Gift className="w-4 h-4 text-bronze-600" />
              <span>Buy Gift Voucher</span>
            </Link>
          </div>

          <p className="text-xs text-charcoal-800/60 pt-2">
            Questions before booking? Call us on{' '}
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="font-semibold text-sage-900 hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
