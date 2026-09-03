import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Heart, Users, Shield, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Our Story & Team | The Beauty Barn Leicester',
  description:
    'Learn about Mel & Zofia, the founders of The Beauty Barn Leicester. Created in 2020 in Scraptoft to provide a truly private, luxury day spa and salon experience.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> Scraptoft, Leicester
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Our Story & Philosophy
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Born from friendship, family, and a bold vision to create Leicester's only 100% private day spa retreat.
          </p>
        </div>
      </section>

      {/* The Story Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-md space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-bronze-600 uppercase tracking-widest">Founded in 2020</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
                From a Late-Night Dream to Leicester's Favourite Sanctuary
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                The Beauty Barn Leicester was born from two sisters-in-law having an ambitious dream and courage from a bottle of prosecco one late evening!
              </p>
              <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                Mel and Zofia had both trained and worked professionally in beauty from the moment they left college. When 2020 hit, they joined forces with an ambitious plan to build their own bespoke countryside spa & salon.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                After months of painting, knocking down walls, upcycling rustic furniture, and creating the private hot tub garden lodge, The Beauty Barn officially opened its doors on <strong>1st August 2020</strong>.
              </p>
            </div>

            <div className="md:col-span-5 bg-cream-100 p-6 rounded-2xl border border-cream-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sage-800 text-cream-50 flex items-center justify-center">
                <Heart className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900">
                Our Core Promise
              </h3>
              <p className="text-xs text-charcoal-800/80 leading-relaxed">
                "We wanted to build a place where clients never feel rushed, never have to share a hot tub with strangers, and leave feeling genuinely rejuvenated from head to toe."
              </p>
              <div className="pt-2 text-xs font-semibold text-sage-900">
                — Mel & Zofia, Co-Founders
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-cream-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
              <span className="font-serif text-3xl font-bold text-sage-900 block mb-1">100%</span>
              <span className="text-xs font-medium text-charcoal-800/70">Private Spa Hire</span>
            </div>
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
              <span className="font-serif text-3xl font-bold text-sage-900 block mb-1">120+</span>
              <span className="text-xs font-medium text-charcoal-800/70">5-Star Client Reviews</span>
            </div>
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
              <span className="font-serif text-3xl font-bold text-sage-900 block mb-1">2020</span>
              <span className="text-xs font-medium text-charcoal-800/70">Established in Scraptoft</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-serif text-3xl font-medium text-sage-900">Ready to Experience The Barn?</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/spa-days"
            className="px-8 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md"
          >
            Explore Private Spa Days
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl bg-white border border-cream-300 text-charcoal-900 text-xs font-semibold uppercase tracking-wider hover:bg-cream-100 transition"
          >
            Find Our Scraptoft Location
          </Link>
        </div>
      </section>
    </div>
  );
}
