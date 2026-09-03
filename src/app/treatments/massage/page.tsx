'use client';

import React from 'react';
import Link from 'next/link';
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
