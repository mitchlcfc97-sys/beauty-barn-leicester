'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Clock, Check, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { TREATMENTS } from '@/data/treatments';
import { useFresha } from '@/components/booking/FreshaModal';

export default function FacialsPage() {
  const { openFresha } = useFresha();
  const facialTreatments = TREATMENTS.filter(t => t.category === 'facials' || t.id === 'deluxe-bacial');

  return (
    <div className="space-y-16 pb-20">
      {/* SEO Hero Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> Advanced Skincare • Scraptoft
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Advanced Facials & Organic Skincare
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Rejuvenate your skin with our clinical-grade and luxury organic facial treatments. Featuring Bramley natural botanicals, dermaplaning, microneedling, lymphatic facial drainage, and tailored bespoke skincare.
          </p>
        </div>

        {/* Facials Photos Showcase */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/treatment-room-skylight.jpg"
              alt="Facial Treatment Suite with Natural Light"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Dedicated Suite</span>
              <p className="font-serif text-base font-medium">Bespoke Skincare Sanctuary</p>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/bramley-products-shelf.jpg"
              alt="Certified Organic Botanical Skincare Range"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Botanical Magic</span>
              <p className="font-serif text-base font-medium">Certified Organic Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facials Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facialTreatments.map((treatment) => (
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

      {/* Clinical Facial Boosters & Add-Ons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Customise Your Results</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">Clinical Boosters & Add-Ons</h2>
          <p className="text-xs text-charcoal-800/80">
            Intensify your treatment by adding clinical LED, electrolyte-rich Hydrojelly, or peptide firming masks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl p-5 border border-cream-300 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600">Hydration Lock</span>
              <span className="font-serif text-base font-bold text-sage-900">+£5 - £10</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">Custom Hydrojelly® Mask</h3>
            <p className="text-xs text-charcoal-800/70 leading-relaxed">
              Electrolyte-infused algae mask vacuum seals hydration and calms post-exfoliation redness.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-cream-300 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600">Cellular Therapy</span>
              <span className="font-serif text-base font-bold text-sage-900">+£5 - £10</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">Clinical LED Light</h3>
            <p className="text-xs text-charcoal-800/70 leading-relaxed">
              Targeted wavelengths stimulate collagen fibroblasts and clear blemish-causing bacteria.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-cream-300 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600">Instant Lift</span>
              <span className="font-serif text-base font-bold text-sage-900">+£10</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">Miracle Peptide Mask</h3>
            <p className="text-xs text-charcoal-800/70 leading-relaxed">
              Tightens and sculpts facial contours while stimulating dermal microcirculation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-cream-300 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600">Deep Plump</span>
              <span className="font-serif text-base font-bold text-sage-900">+£10</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">HA4c Hyaluronic Mask</h3>
            <p className="text-xs text-charcoal-800/70 leading-relaxed">
              Quadruple molecular weight hyaluronic acid penetrates multiple skin layers for lasting dewiness.
            </p>
          </div>
        </div>
      </section>

      {/* Bramley Botanicals Philosophy */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-cream-300 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-bronze-600 uppercase tracking-wider">Natural British Botanicals</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-sage-900 font-medium">
              Why We Partner with Bramley
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              We believe pure, ethical botanicals deliver the healthiest, most luminous skin. Bramley formulations are 100% naturally derived, cruelty-free, and blended with therapeutic herbs and essential oils that nourish your skin barrier without irritation.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-cream-300 space-y-3 text-xs text-charcoal-800">
            <div className="flex items-center gap-2 font-semibold text-sage-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Naturally Derived & Cruelty-Free
            </div>
            <p className="text-charcoal-800/70">No parabens, artificial colours, or synthetic fragrances. Perfect for sensitive, congested, mature, or dry skin types.</p>
            <div className="pt-2">
              <button
                onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', "The Bramley Ultra Relaxing Facial")}
                className="w-full py-2.5 rounded-xl bg-sage-800 text-cream-50 text-xs font-semibold hover:bg-sage-900 transition"
              >
                Book Bramley Ultra Relaxing Facial (£60)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
