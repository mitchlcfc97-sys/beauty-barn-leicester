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
