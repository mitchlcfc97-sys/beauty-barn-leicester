'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Clock, Check, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { TREATMENTS } from '@/data/treatments';
import { useFresha } from '@/components/booking/FreshaModal';

export default function MassagePage() {
  const { openFresha } = useFresha();
  const massageTreatments = TREATMENTS.filter(t => t.category === 'massage' || t.category === 'signature');

  return (
    <div className="space-y-16 pb-20">
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
            Unwind in our tranquil countryside sanctuary. We offer bespoke Swedish full body massage, deep tissue bamboo therapies, soothing hot stone rituals, and couples pampering tailored to your body's exact pressure preferences.
          </p>
        </div>

        {/* Treatment Rooms Photo Showcase */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/couples-massage-room.jpg"
              alt="Couples Massage Room with Twin Beds"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Duo Sanctuary</span>
              <p className="font-serif text-base font-medium">Couples Massage Suite</p>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/treatment-room-skylight.jpg"
              alt="Single Massage Room with Natural Skylight"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Bramley Botanicals</span>
              <p className="font-serif text-base font-medium">Private Treatment Suite</p>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/candlelit-treatment-bed.jpg"
              alt="Candlelit Massage Bed in Scraptoft"
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

      {/* Massage Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {massageTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col justify-between"
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
                  Book with Fresha
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREGNANCY MASSAGE SPOTLIGHT WITH AWARD-WINNING PILLOW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cream-100 via-white to-sage-50/50 rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Video Showcase */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[520px] rounded-3xl overflow-hidden shadow-xl border border-cream-300 bg-charcoal-950 group">
              <video
                src="/videos/pregnancy-massage-pillow.mp4"
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
                  Safely and weightlessly resting face-down in our Scraptoft sanctuary.
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
                At The Beauty Barn, we use an <strong>award-winning ergonomic pregnancy cushion system</strong>. Specially engineered with gentle recesses for your baby bump and chest, it allows you to safely, securely, and blissfully <strong>lie on your stomach</strong> for a thorough, deeply relieving full back massage.
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
              <button
                onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', 'The Bramley Mother-To-Be Back Massage')}
                className="px-6 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                Book Pregnancy Massage (£45 - £65)
              </button>
              <Link
                href="/treatments#rituals"
                className="px-5 py-3 rounded-xl border border-sage-300 text-sage-900 hover:bg-cream-100 text-xs font-semibold uppercase tracking-wider transition inline-flex items-center gap-1.5"
              >
                Mum-To-Be Gold Ritual (£245) <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Enhancements & Add-Ons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Customise Your Pressure</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">Massage Enhancements & Add-Ons</h2>
          <p className="text-xs text-charcoal-800/80">
            Upgrade any back, neck, or full body massage during booking for enhanced heat therapy and knot release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-bronze-50 text-bronze-700 text-xs font-bold uppercase tracking-wider">
                  Heat Therapy
                </span>
                <span className="font-serif text-xl font-bold text-sage-900">+£5</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900">Heated Volcanic Hot Stones</h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                Smooth volcanic basalt stones radiate comforting heat deep into tight muscle layers without excessive pressure, melting stubborn tension.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-cream-200 text-xs text-sage-900 font-medium">
              Available on: Back Massage, Back Neck & Shoulder, Foot & Leg, or Full Body
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sage-50 text-sage-800 text-xs font-bold uppercase tracking-wider">
                  Deep Knot Release
                </span>
                <span className="font-serif text-xl font-bold text-sage-900">+£5</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900">Heated Natural Bamboo Sticks</h3>
              <p className="text-xs text-charcoal-800/70 leading-relaxed">
                Silky, warm natural bamboo canes rolled and kneaded over tight muscle groups to provide firm, elongated pressure and stimulate lymphatic drainage.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-cream-200 text-xs text-sage-900 font-medium">
              Available on: Deep Tissue, Back Massage, or Foot & Leg Massage
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
              Looking for a romantic anniversary surprise or a tranquil escape with your best friend? Pair any massage with our exclusive private hot tub lodge and afternoon tea for an unforgettable experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/spa-days"
              className="px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold uppercase tracking-wider transition shadow"
            >
              Explore Couples Spa Packages
            </Link>
            <button
              onClick={() => openFresha()}
              className="px-6 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-700 text-cream-50 text-xs font-semibold uppercase tracking-wider transition border border-sage-700"
            >
              Book Individual Massage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
