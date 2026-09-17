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
  Star, 
  Gift, 
  Flame, 
  Leaf, 
  Heart, 
  Users,
  ShieldCheck
} from 'lucide-react';
import { SIGNATURE_RITUALS } from '@/data/rituals';
import { BUSINESS_INFO } from '@/data/business';
import { useFresha } from '@/components/booking/FreshaModal';

export default function RitualsPage() {
  const { openFresha } = useFresha();

  return (
    <div className="space-y-20 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-200 via-cream-100 to-cream-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Leaf className="w-3.5 h-3.5 text-bronze-600" />
            <span>Organic British Bramley Botanicals • Scraptoft, Leicester</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Signature Rituals & Luxury Packages
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Extended head-to-toe sensory immersions designed for profound unwinding, nervous-system restoration, and radiant skin. Handcrafted with warm botanical oils, heated stones, and unhurried therapeutic care.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24981589', 'The Bramley Simply Divine Ritual')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-lg"
            >
              <Calendar className="w-4 h-4 text-bronze-300" />
              <span>Book A Signature Ritual</span>
            </button>
            <Link
              href="#rituals-menu"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-cream-100 text-charcoal-900 border border-cream-300 font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-sm"
            >
              <span>Explore The Rituals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-800/70 border-t border-cream-300/80 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 font-medium">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>100% British Bramley Botanicals</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-bronze-600" />
              <span>Extended Sessions (Up to 4.5h)</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-sage-800" />
              <span>Single & Double Suites</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Over 2,500 5-Star Reviews</span>
            </div>
          </div>
        </div>

        {/* Video & Atmosphere Showcase */}
        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 bg-charcoal-950 group">
            <video
              src="/videos/fireside-ritual-sneak-peek.mp4"
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Warming Therapies</span>
              <p className="font-serif text-base font-medium">Hot Stones & Polish</p>
            </div>
          </div>

          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/treatment-room-skylight.jpg"
              alt="Skylight treatment suite for high ticket rituals"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Tranquil Environment</span>
              <p className="font-serif text-base font-medium">Private Sanctuary Suites</p>
            </div>
          </div>

          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 bg-charcoal-950 group">
            <video
              src="/videos/bramley-apothecary-shelf.mp4"
              poster="/images/spa-garden-overview.jpg"
              preload="metadata"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Apothecary Botanicals</span>
              <p className="font-serif text-base font-medium">Pure Essential Oils</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Rituals Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-cream-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
              The Art of the Spa Ritual
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-sage-900">
              Why Choose an Extended Ritual?
            </h2>
            <p className="text-sm text-charcoal-800/80 leading-relaxed">
              Standard treatments offer quick relief, but our signature rituals are curated as complete wellness journeys. When your body is given 90 minutes to over 4 hours of uninterrupted care, the central nervous system transitions from the heightened state of daily life into the restorative parasympathetic state.
            </p>
            <p className="text-sm text-charcoal-800/80 leading-relaxed">
              By layering body exfoliation, warm stone therapy, therapeutic pressure, customized organic facials, and acupressure scalp treatments, these rituals deliver results that linger for days afterwards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-cream-200">
                <span className="font-serif text-lg font-bold text-sage-900 block">Unhurried</span>
                <p className="text-xs text-charcoal-800/70 mt-0.5">Generous time buffers so you never feel rushed.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-cream-200">
                <span className="font-serif text-lg font-bold text-sage-900 block">Multi-Layered</span>
                <p className="text-xs text-charcoal-800/70 mt-0.5">Full body exfoliation, bodywork & facial in one.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-cream-200">
                <span className="font-serif text-lg font-bold text-sage-900 block">Bespoke</span>
                <p className="text-xs text-charcoal-800/70 mt-0.5">Botanical formulas customized to your skin and spirit.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-cream-300">
            <Image
              src="/images/candlelit-treatment-bed.jpg"
              alt="Candlelit treatment suite for Bramley rituals"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Sensory Restoration</span>
              <p className="font-serif text-base font-medium">Quiet Luxury in Scraptoft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Rituals Menu Spotlight */}
      <section id="rituals-menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            The Signature Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-sage-900">
            High-Ticket Rituals & Packages
          </h2>
          <p className="text-sm text-charcoal-800/70 leading-relaxed">
            Explore our most celebrated full-body experiences, each meticulously designed to provide the ultimate luxury reset.
          </p>
        </div>

        <div className="space-y-12">
          {SIGNATURE_RITUALS.map((ritual, index) => (
            <div
              key={ritual.id}
              className="bg-white rounded-3xl border border-cream-300 shadow-sm overflow-hidden hover:shadow-md transition grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image & Key Info Column */}
              <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-charcoal-900">
                <Image
                  src={ritual.leadImage}
                  alt={ritual.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {ritual.badge && (
                    <span className="px-3 py-1 rounded-full bg-bronze-500 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      {ritual.badge}
                    </span>
                  )}
                  {ritual.therapists && (
                    <span className="px-3 py-1 rounded-full bg-sage-800 text-cream-50 text-[10px] font-bold uppercase tracking-wider border border-sage-700">
                      {ritual.therapists}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-bronze-300 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{ritual.duration}</span>
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold">
                    {ritual.price}
                  </div>
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
                      {ritual.name}
                    </h3>
                    <p className="text-xs text-bronze-600 font-semibold uppercase tracking-wider mt-1">
                      {ritual.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                    {ritual.description}
                  </p>

                  {/* Step by Step Breakdown */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] uppercase font-bold text-charcoal-800 tracking-wider block">
                      The Ritual Journey:
                    </span>
                    <div className="space-y-2">
                      {ritual.ritualSteps.map((step, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-cream-50 border border-cream-200 space-y-0.5">
                          <h5 className="text-xs font-bold text-sage-900">{step.title}</h5>
                          <p className="text-[11px] text-charcoal-800/70 leading-relaxed">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What's Included Bullets */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] uppercase font-bold text-charcoal-800 tracking-wider block">
                      Included With This Ritual:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-charcoal-800/80">
                      {ritual.whatsIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-bronze-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Note */}
                  <div className="p-3 rounded-xl bg-sage-50 border border-sage-200/60 text-xs text-sage-900">
                    <strong>Ideal For:</strong> {ritual.idealFor}
                  </div>
                </div>

                {/* Booking Action */}
                <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-charcoal-800/60">
                    Live real-time scheduling powered by Fresha
                  </span>
                  <button
                    onClick={() => openFresha(ritual.freshaUrl, ritual.name)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-bronze-300" />
                    <span>Book {ritual.name.split('—')[0].trim()}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Vouchers for High-Ticket Rituals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-bronze-600 to-bronze-700 rounded-3xl p-8 sm:p-12 text-white shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs uppercase tracking-widest text-cream-200 font-bold">
              The Perfect Luxury Gift
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Gift a Signature Ritual or High-Ticket Experience
            </h2>
            <p className="text-xs sm:text-sm text-cream-100 leading-relaxed max-w-xl">
              Looking for an extraordinary present for a special birthday, wedding anniversary, retirement, or maternity gift? Our instant digital gift vouchers can be personalized with your message and sent immediately or scheduled for their special day.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 justify-center">
            <Link
              href="/gift-vouchers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-cream-100 text-charcoal-900 font-semibold text-xs uppercase tracking-wider transition shadow"
            >
              <Gift className="w-4 h-4 text-bronze-600" />
              <span>Purchase Gift Voucher</span>
            </Link>
            <a
              href={BUSINESS_INFO.freshaStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-xs uppercase tracking-wider transition"
            >
              <span>Explore In-Salon Bramley Store ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Client Guidance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
            Frequently Asked Questions About Our Rituals
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-cream-50 rounded-2xl p-5 border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-sage-900">
              Can I book these rituals in the double suite with a friend or partner?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              Yes! Both &ldquo;The Bramley Simply Divine Ritual&rdquo; and &ldquo;The Full Indulgence Ritual&rdquo; can be booked side-by-side in our private double room with two dedicated therapists. When booking via Fresha, simply choose the double room option.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-5 border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-sage-900">
              What products are used during these rituals?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              We proudly partner with Bramley — an award-winning British brand inspired by the English countryside. Their products are made with 100% natural botanicals, pure essential oils, and zero artificial harsh chemicals. All formulas are cruelty-free and sustainably packaged.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-5 border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-sage-900">
              Are these treatments suitable during pregnancy?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              For expectant mothers, we have created &ldquo;The Mum-To-Be Gold Luxury Pamper Package&rdquo; (3 to 4.5 hours), which includes specialist pregnancy cushioning, ergonomic support, and obstetrician-approved botanicals. Please let our team know your stage of pregnancy upon booking.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-5 border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-sage-900">
              What should I bring or wear?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              Simply arrive in comfortable everyday clothing. We provide disposable underwear, luxury warm robes, towels, and slippers. For rituals including full-body scrubs, you will be invited to shower in our private facilities before the warm oil massage begins.
            </p>
          </div>
        </div>
      </section>

      {/* Final Booking CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-cream-300 text-center space-y-6 shadow-sm">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-bronze-100 text-bronze-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Experience Pure Restoration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            Reserve Your Signature Ritual Today
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/70 max-w-xl mx-auto leading-relaxed">
            Treat yourself or someone special to our most comprehensive therapies in Scraptoft, Leicester.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24981589', 'Signature Rituals')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-md"
            >
              <Calendar className="w-4 h-4 text-bronze-300" />
              <span>Book A Signature Ritual on Fresha</span>
            </button>
            <Link
              href="/gift-vouchers"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-cream-200 text-charcoal-900 border border-cream-300 font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-sm"
            >
              <Gift className="w-4 h-4 text-bronze-600" />
              <span>Gift A Ritual</span>
            </Link>
          </div>

          <p className="text-xs text-charcoal-800/60 pt-2">
            Need help selecting the perfect ritual? Call our team on{' '}
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="font-semibold text-sage-900 hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
