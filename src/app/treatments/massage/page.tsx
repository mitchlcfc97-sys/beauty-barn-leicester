'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Clock, Check, Calendar, ArrowRight, Heart } from 'lucide-react';
import { TREATMENTS } from '@/data/treatments';
import { useFresha } from '@/components/booking/FreshaModal';

export default function MassagePage() {
  const { openFresha } = useFresha();

  // Categorised treatment groupings for clear readability
  const classicMassages = TREATMENTS.filter(t =>
    ['back-massage', 'back-neck-shoulder', 'back-neck-shoulder-scalp', 'relaxing-full-body', 'deep-tissue-full-body', 'full-body-scalp-face', 'double-room-massage', 'indian-head-massage'].includes(t.id)
  );

  const bramleyRituals = TREATMENTS.filter(t =>
    ['dual-serenity', 'bramley-simply-divine', 'bramley-selenite-crystal', 'bramley-sleep-ritual'].includes(t.id)
  );

  return (
    <div className="space-y-20 pb-24">
      {/* SEO Hero Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> Scraptoft, Leicester
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Therapeutic Massage in Leicester
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Unwind in our tranquil countryside sanctuary. We offer tailored full body massages, targeted deep tissue therapies with natural bamboo canes and hot stones, soothing Bramley rituals, and duo treatments in our relaxing single and double rooms.
          </p>
        </div>

        {/* Treatment Rooms Photo Showcase */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-cream-300 bg-charcoal-950 group">
            <video
              src="/videos/swedish-back-massage-ritual.mp4"
              poster="/images/candlelit-treatment-bed.jpg"
              preload="metadata"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Full Body Massage</span>
              <p className="font-serif text-base font-medium">Therapeutic Care In Motion</p>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/treatment-room-skylight.jpg"
              alt="Single and Double Treatment Rooms with Natural Light"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Treatment Rooms</span>
              <p className="font-serif text-base font-medium">Single & Double Rooms</p>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/candlelit-treatment-bed.jpg"
              alt="Candlelit Treatment Bed in Scraptoft"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Atmospheric Calm</span>
              <p className="font-serif text-base font-medium">Candlelit Comfort</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREGNANCY MASSAGE SPOTLIGHT WITH AWARD-WINNING PILLOW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cream-100 via-white to-sage-50/50 rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Video Showcase */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[500px] rounded-3xl overflow-hidden shadow-xl border border-cream-300 bg-charcoal-950 group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-0.5">
                  Real Treatment Session
                </span>
                <p className="font-serif text-base font-semibold">
                  Full Back Relief on Our Award-Winning Cushion
                </p>
                <p className="text-xs text-cream-100/90 mt-0.5">
                  Safely and weightlessly resting face-down in our tranquil countryside rooms.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-center text-charcoal-800/60 italic">
              ✨ Experience complete, weightless spinal decompression throughout your pregnancy.
            </p>
          </div>

          {/* Right: Copy & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bronze-500/15 text-bronze-700 text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-bronze-600" /> Specialist Mother-To-Be Care
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900 leading-tight">
                Lie on Your Stomach Again: <br className="hidden sm:inline" />
                <span className="italic font-normal text-bronze-600">Our Award-Winning Pregnancy Pillow</span>
              </h2>
              <p className="text-sm text-charcoal-800/80 leading-relaxed">
                Most spas only offer uncomfortable side-lying pregnancy massages, which leave deep lower-back knots and shoulder tension hard to reach.
              </p>
              <p className="text-sm text-charcoal-800/80 leading-relaxed">
                At The Beauty Barn, we use an <strong>award-winning ergonomic pregnancy cushion system</strong>. Specially engineered with gentle recesses for your baby bump and chest, it allows you to safely, securely, and blissfully <strong>lie on your stomach</strong> for a thorough, deeply relieving full back massage without any abdominal pressure.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-cream-200 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center text-sage-800 flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-bronze-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Safe Stomach-Lying Comfort</h4>
                  <p className="text-xs text-charcoal-800/70 leading-relaxed mt-0.5">
                    Takes 100% of pressure off your lower spine, sacrum, and hips while keeping baby completely safe and supported.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-cream-200 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center text-sage-800 flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-bronze-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Authentic Full Back, Hip & Leg Relief</h4>
                  <p className="text-xs text-charcoal-800/70 leading-relaxed mt-0.5">
                    Our therapists can properly work away sciatica aches, tight glutes, and heavy aching legs with nourishing botanical oils.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-cream-200 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center text-sage-800 flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-bronze-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Obstetric-Safe British Botanicals</h4>
                  <p className="text-xs text-charcoal-800/70 leading-relaxed mt-0.5">
                    Formulated with gentle lavender, mandarin, and sweet almond oils to hydrate stretching skin and calm the nervous system.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/pregnancy"
                className="px-6 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-bronze-300" />
                Explore All Pregnancy Offerings & Videos <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921', 'The Bramley Mother-To-Be Back Massage')}
                className="px-5 py-3 rounded-xl border border-sage-300 text-sage-900 hover:bg-cream-100 text-xs font-semibold uppercase tracking-wider transition inline-flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-bronze-600" />
                Quick Book on Fresha (£45 - £65)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RESTRUCTURED TREATMENT MENU */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Classic & Targeted Massages */}
        <section className="space-y-6">
          <div className="border-b border-cream-300 pb-4">
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Everyday Tension & Relaxation</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900 mt-1">Classic Massages</h2>
            <p className="text-xs sm:text-sm text-charcoal-800/75 mt-1">
              Targeted muscle therapy calibrated to your exact pressure preference, using soothing natural oils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classicMassages.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-charcoal-800/60">
                    <span className="font-semibold text-bronze-600 uppercase tracking-wider">{treatment.categoryLabel}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {treatment.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-charcoal-900">
                    {treatment.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-800/70 leading-relaxed">
                    {treatment.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {treatment.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-800/80">
                        <Check className="w-3.5 h-3.5 text-sage-800 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-cream-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-charcoal-800/60 block">Price</span>
                    <span className="font-serif text-lg font-bold text-sage-900">{treatment.price}</span>
                  </div>

                  <button
                    onClick={() => openFresha(treatment.freshaUrl, treatment.name)}
                    className="px-5 py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-medium transition shadow-sm flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                    Book on Fresha
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Bramley Signature Body Rituals */}
        <section className="space-y-6">
          <div className="border-b border-cream-300 pb-4">
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Specialist Botanical Care</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900 mt-1">Bramley Signature Body Rituals</h2>
            <p className="text-xs sm:text-sm text-charcoal-800/75 mt-1">
              Multi-sensory head-to-toe immersions combining botanical polishes, crystal massage, and deep relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bramleyRituals.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-charcoal-800/60">
                    <span className="font-semibold text-bronze-600 uppercase tracking-wider">{treatment.categoryLabel}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {treatment.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900">
                    {treatment.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-800/70 leading-relaxed">
                    {treatment.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {treatment.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-800/80">
                        <Check className="w-3.5 h-3.5 text-sage-800 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-cream-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-charcoal-800/60 block">Price</span>
                    <span className="font-serif text-lg font-bold text-sage-900">{treatment.price}</span>
                  </div>

                  <button
                    onClick={() => openFresha(treatment.freshaUrl, treatment.name)}
                    className="px-5 py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-medium transition shadow-sm flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                    Book on Fresha
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Dedicated Mother-to-Be Showcase */}
        <section className="space-y-6">
          <div className="border-b border-cream-300 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Gentle & Safe Prenatal Care</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900 mt-1">Mother-To-Be Sanctuaries</h2>
              <p className="text-xs sm:text-sm text-charcoal-800/75 mt-1">
                Thoughtfully created for pregnancy with obstetric-safe botanicals, our award-winning tummy cushion, and multi-hour pamper days.
              </p>
            </div>
            <Link
              href="/pregnancy"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-bronze-700 hover:text-bronze-800 self-start sm:self-auto"
            >
              View Full Pregnancy Hub <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-cream-100 via-white to-sage-50/50 rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Video & Media Teaser */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-cream-300 bg-charcoal-950 group">
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
                <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-bronze-300 block">Watch Real Session</span>
                  <p className="font-serif text-sm font-semibold">Gentle Prenatal Support & Cushioning</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-charcoal-800/70 px-1">
                <span>✨ Safely lie on your stomach</span>
                <span>🌿 100% Obstetric-Safe</span>
              </div>
            </div>

            {/* Right: The Offerings Spectrum & Link */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold text-bronze-700 uppercase tracking-wider">Dedicated Pregnancy Suite</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
                  Explore All Our Mother-To-Be Offerings
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                  We don&apos;t just offer a single standard pregnancy massage. From targeted 30-minute lumbar relief to full body lymphatic restoration, botanical facial duos, and our 4.5-hour Mum-To-Be Gold Luxury Sanctuary, discover tailored prenatal care designed around you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-white border border-cream-200 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sage-900">Lie-on-Stomach Massages</span>
                    <span className="text-[11px] font-semibold text-bronze-700">£45 - £65</span>
                  </div>
                  <p className="text-[11px] text-charcoal-800/70 leading-relaxed">
                    30m & 60m targeted back, sacral, hip, and swollen leg relief on our tummy cushion.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-cream-200 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sage-900">Massage & Facial Duos</span>
                    <span className="text-[11px] font-semibold text-bronze-700">£95 - £130</span>
                  </div>
                  <p className="text-[11px] text-charcoal-800/70 leading-relaxed">
                    Combine stomach-cushion relief with hormone-balancing Bramley botanical facial care.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-cream-200 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sage-900">Half-Day Sanctuary Days</span>
                    <span className="text-[11px] font-semibold text-bronze-700">Bronze, Silver, Gold</span>
                  </div>
                  <p className="text-[11px] text-charcoal-800/70 leading-relaxed">
                    3 to 4.5 hours of luxury pedicures, manicures, massages, facials, and afternoon treats.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-cream-200 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sage-900">Expectant Parents Duos</span>
                    <span className="text-[11px] font-semibold text-bronze-700">£110 for Two</span>
                  </div>
                  <p className="text-[11px] text-charcoal-800/70 leading-relaxed">
                    Side-by-side heated couches in our candlelit double suite with two dedicated therapists.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/pregnancy"
                  className="px-6 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md inline-flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-bronze-300" />
                  View All Pregnancy Offerings & Videos <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921', 'The Bramley Mother-To-Be Back Massage')}
                  className="px-5 py-3 rounded-xl border border-sage-300 text-sage-900 hover:bg-cream-100 text-xs font-semibold uppercase tracking-wider transition inline-flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-bronze-600" />
                  Book on Fresha
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Full Menu Callout Banner */}
        <div className="p-8 rounded-3xl bg-cream-100 border border-cream-300 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-sage-900">
            Looking for Custom Times or Extra Add-Ons?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-800/75 max-w-xl mx-auto leading-relaxed">
            We offer bespoke time lengths, targeted pressure focus, and custom add-on pairings. You can browse our complete real-time service catalogue and therapist availability directly on Fresha.
          </p>
          <button
            onClick={() => openFresha()}
            className="px-6 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md inline-flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-bronze-300" />
            See Full Treatment Menu on Fresha
          </button>
        </div>
      </div>

      {/* DEEP TISSUE & FIRM MUSCLE RELIEF SPOTLIGHT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-cream-100 to-cream-50 rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Copy & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-bronze-600" /> Targeted Muscular Care
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900 leading-tight">
                Deep Tissue Tension Relief: <br className="hidden sm:inline" />
                <span className="italic font-normal text-bronze-600">Bamboo Canes & Hot Stones</span>
              </h2>
              <p className="text-sm text-charcoal-800/80 leading-relaxed">
                Persistent desk posture, heavy lifting, or everyday stress can cause stubborn tightness across the shoulders, neck, and lower back. Our deep tissue sessions are designed to break down chronic knots and restore muscular fluidity.
              </p>
              <p className="text-sm text-charcoal-800/80 leading-relaxed">
                Tailored with your chosen pressure — from firm therapeutic hands-on myofascial kneading to the deep thermal penetration of hot stones or smooth natural bamboo canes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-cream-200 shadow-sm">
                <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Natural Bamboo Canes</h4>
                <p className="text-xs text-charcoal-800/70 mt-1 leading-relaxed">
                  Smooth solid bamboo canes deliver firm, elongated kneading to unknot stubborn muscle bands and assist lymphatic drainage.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-cream-200 shadow-sm">
                <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Hot Stones</h4>
                <p className="text-xs text-charcoal-800/70 mt-1 leading-relaxed">
                  Heated stones radiate deep soothing warmth directly into contracted muscle tissue, melting away stiffness.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A18353636', 'The Deep Tissue Massage')}
                className="px-6 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                Book Deep Tissue (£45 - £80)
              </button>
              <span className="text-xs text-charcoal-800/70">
                +£5 for Natural Bamboo or Hot Stones upgrade
              </span>
            </div>
          </div>

          {/* Right: Real Session Video */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[500px] rounded-3xl overflow-hidden shadow-xl border border-cream-300 bg-charcoal-950 group">
              <video
                src="/videos/deep-tissue-back-massage.mp4"
                poster="/images/deep-tissue-massage-poster.jpg"
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-0.5">
                  Real Treatment Session
                </span>
                <p className="font-serif text-base font-semibold">
                  Candlelit Deep Muscular Release
                </p>
                <p className="text-xs text-cream-100/90 mt-0.5">
                  Firm myofascial pressure targeting upper back, neck, and shoulder tightness.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-center text-charcoal-800/60 italic">
              ✨ Every session is calibrated to your exact pressure preference.
            </p>
          </div>
        </div>
      </section>

      {/* Massage Enhancements & Bramley Add-Ons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Customise Your Treatment</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">Massage Enhancements & Bramley Add-Ons</h2>
          <p className="text-xs sm:text-sm text-charcoal-800/80">
            Elevate any back, neck, or full body massage during booking with our targeted hot stone therapy, natural bamboo canes, or Bramley botanical upgrades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Add-on 1: Hot Stones */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-bronze-50 text-bronze-700 text-xs font-bold uppercase tracking-wider">
                  Heat Therapy
                </span>
                <span className="font-serif text-xl font-bold text-sage-900">+£5</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900">Hot Stones</h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                Smooth heated stones radiate comforting heat deep into tight muscle layers without excessive pressure, melting stubborn tension.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-cream-200 text-xs text-sage-900 font-medium">
              Available on: Back Massage, Back Neck & Shoulder, Foot & Leg, or Full Body
            </div>
          </div>

          {/* Add-on 2: Natural Bamboo Canes */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sage-50 text-sage-800 text-xs font-bold uppercase tracking-wider">
                  Deep Knot Release
                </span>
                <span className="font-serif text-xl font-bold text-sage-900">+£5</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900">Natural Bamboo Canes</h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                Smooth natural bamboo canes rolled and kneaded over tight muscle groups to provide firm, elongated pressure and stimulate lymphatic drainage.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-cream-200 text-xs text-sage-900 font-medium">
              Available on: Deep Tissue, Back Massage, or Foot & Leg Massage
            </div>
          </div>

          {/* Add-on 3: Cranberry Foot Scrub */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cream-100 text-bronze-700 text-xs font-bold uppercase tracking-wider">
                  Bramley Botanical
                </span>
                <span className="font-serif text-sm font-semibold text-sage-900">Add-On</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900">Cranberry Foot Scrub</h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                An invigorating exfoliating foot treatment using natural cranberry seed polish and rich botanical butter to revive tired soles before your massage.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-cream-200 text-xs text-sage-900 font-medium">
              Available on: Any Back, Full Body or Reflex Massage
            </div>
          </div>

          {/* Add-on 4: Cranberry Back Scrub */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cream-100 text-bronze-700 text-xs font-bold uppercase tracking-wider">
                  Bramley Botanical
                </span>
                <span className="font-serif text-sm font-semibold text-sage-900">Add-On</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900">Cranberry Back Scrub</h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                A thorough botanical back polish to remove impurities, buff away dull skin cells, and leave your back silky smooth prior to oil application.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-cream-200 text-xs text-sage-900 font-medium">
              Available on: Back Massage or Full Body Massage
            </div>
          </div>

          {/* Add-on 5: Nourishing Scalp Mask & Massage */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cream-100 text-bronze-700 text-xs font-bold uppercase tracking-wider">
                  Bramley Botanical
                </span>
                <span className="font-serif text-sm font-semibold text-sage-900">Add-On</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900">Nourishing Scalp Mask & Massage</h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                Warm botanical hair and scalp mask deeply worked into temples and hair line to melt mental fatigue, ease tension headaches, and hydrate hair.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-cream-200 text-xs text-sage-900 font-medium">
              Available on: Any Massage Treatment
            </div>
          </div>

          {/* Add-on 6: Custom Fresha Pairing */}
          <div className="bg-sage-50/60 rounded-3xl p-6 border border-sage-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sage-200/60 text-sage-900 text-xs font-bold uppercase tracking-wider">
                  Tailored
                </span>
                <span className="font-serif text-sm font-semibold text-sage-900">Fresha</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900">Pair With A Mini Facial</h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                Want to combine your massage with a 30-minute Bramley skin glow or LED light therapy? You can easily bundle treatments during online booking.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-sage-200">
              <button
                onClick={() => openFresha()}
                className="w-full py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-medium transition shadow-sm flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                Select Add-Ons on Fresha
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Couples Massage & Private Hire Highlight */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 text-cream-50 rounded-3xl p-8 sm:p-12 border border-sage-800 shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-bronze-400 font-bold">Couples & Group Retreats</span>
            <h2 className="font-serif text-3xl font-medium">Couples Massage & Private Pamper Days</h2>
            <p className="text-xs sm:text-sm text-sage-200 leading-relaxed">
              Looking for a romantic anniversary surprise or a tranquil escape with your best friend? Book our double treatment room for side-by-side massages, or pair your massage with our exclusive private hot tub lodge and afternoon tea for an unforgettable full day experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/couples-massage"
              className="px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold uppercase tracking-wider transition shadow"
            >
              Explore Couples Massage & Packages
            </Link>
            <Link
              href="/spa-days"
              className="px-6 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-700 text-cream-50 text-xs font-semibold uppercase tracking-wider transition border border-sage-700"
            >
              Private Spa Days & Hot Tub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
