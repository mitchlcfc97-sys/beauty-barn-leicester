'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Clock, Check, Calendar, ArrowRight } from 'lucide-react';
import { TREATMENTS } from '@/data/treatments';
import { useFresha } from '@/components/booking/FreshaModal';

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { openFresha } = useFresha();

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'massage', label: 'Massage & Body' },
    { id: 'facials', label: 'Advanced Facials' },
    { id: 'signature', label: 'Signature Rituals' },
    { id: 'body', label: 'Body Treatments' },
  ];

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> Salon & Spa Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Treatments & Rituals
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Every treatment is crafted with top-of-the-line organic botanicals, therapeutic essential oils, and tailored pressure to rejuvenate your body and mind.
          </p>

          {/* Quick filter tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat.id
                    ? 'bg-sage-800 text-cream-50 shadow-md'
                    : 'bg-white text-charcoal-800 border border-cream-300 hover:bg-cream-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
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
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spa Days Cross Sell */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 text-cream-50 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-bronze-400 font-bold">Looking for full day pampering?</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium">Explore Our 100% Private Spa Packages</h2>
            <p className="text-xs text-sage-200">Include private hot tub hire, heated lodge exclusivity, afternoon tea, and tailored treatments from £90pp.</p>
          </div>
          <Link
            href="/spa-days"
            className="px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition shadow"
          >
            View Spa Packages
          </Link>
        </div>
      </section>
    </div>
  );
}
