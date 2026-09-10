import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Sparkles, Check, ShieldCheck, Heart, Coffee, Users, Clock } from 'lucide-react';
import { SPA_PACKAGES } from '@/data/spa-packages';
import SpaPackageBuilder from '@/components/booking/SpaPackageBuilder';

export const metadata: Metadata = {
  title: 'Exclusive Private Spa Days & Hot Tub Hire Leicester',
  description:
    'Leicester\'s only 100% private day spa. Enjoy private heated lodge & hot tub hire with zero strangers, luxury afternoon tea, unlimited drinks, and bespoke treatments from £90pp.',
  keywords: [
    'spa day leicester',
    'private spa leicester',
    'couples spa day leicester',
    'private hot tub spa leicestershire',
    'hen party spa packages leicester',
    'afternoon tea spa day leicester'
  ],
};

export default function SpaDaysPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> Exclusive Private Retreat
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Private Spa Days in Leicester
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Unlike public hotel spas, The Beauty Barn gives you 100% private lodge and hot tub exclusivity. No strangers, no shared changing rooms—just pure, uninterrupted bliss for you and your guests.
          </p>
        </div>

        {/* Real Photo Showcase Gallery */}
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative h-60 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/spa-garden-overview.jpg"
              alt="Private Spa Garden and Wooden Cabin"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="font-serif text-sm font-semibold">Private Spa Garden</p>
              <span className="text-[10px] text-cream-200">Zero other guests</span>
            </div>
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden shadow-md group bg-charcoal-950">
            <video
              src="/videos/hot-tub-jets-garden.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-white pointer-events-none">
              <span className="text-[9px] uppercase font-bold tracking-widest text-bronze-300 block">Bubbling Warmth</span>
              <p className="font-serif text-sm font-semibold">Hydrotherapy Hot Tub</p>
              <span className="text-[10px] text-cream-200">Private garden jets</span>
            </div>
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden shadow-md group bg-charcoal-950">
            <video
              src="/videos/private-retreat-cabin-tour.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-white pointer-events-none">
              <span className="text-[9px] uppercase font-bold tracking-widest text-bronze-300 block">360° Walkthrough</span>
              <p className="font-serif text-sm font-semibold">Heated Wooden Lodge</p>
              <span className="text-[10px] text-cream-200">Warm & cozy year-round</span>
            </div>
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/afternoon-tea-stand.jpg"
              alt="Luxury 3-Tier Afternoon Tea Included"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="font-serif text-sm font-semibold">Luxury Afternoon Tea</p>
              <span className="text-[10px] text-cream-200">Included with spa days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPA_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition border relative ${
                pkg.popular
                  ? 'bg-sage-900 text-cream-50 border-sage-800 shadow-xl'
                  : 'bg-white text-charcoal-900 border-cream-300 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-bronze-500 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md">
                  Most Popular Package
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className={`font-serif text-2xl font-medium mb-1 ${pkg.popular ? 'text-cream-50' : 'text-charcoal-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs ${pkg.popular ? 'text-sage-200' : 'text-charcoal-800/70'}`}>
                    {pkg.tagline}
                  </p>
                </div>

                <div className="pt-2 pb-4 border-y border-cream-200/20">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-400 block mb-0.5">
                    From
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-bold">£{pkg.pricePerPerson}</span>
                    <span className={`text-xs ${pkg.popular ? 'text-sage-300' : 'text-charcoal-800/60'}`}>/ person</span>
                  </div>
                  {pkg.pricingTiers && (
                    <div className="mt-3 pt-2.5 border-t border-cream-200/20 space-y-1 text-[11px]">
                      {pkg.pricingTiers.map((tier, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className={pkg.popular ? 'text-sage-200' : 'text-charcoal-800/70'}>
                            {tier.minGuests}{tier.maxGuests > tier.minGuests ? `-${tier.maxGuests}` : ''} Guests ({tier.duration}):
                          </span>
                          <span className={`font-semibold ${pkg.popular ? 'text-bronze-300' : 'text-sage-900'}`}>
                            £{tier.pricePerPerson}pp
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${pkg.popular ? 'text-bronze-300' : 'text-sage-800'}`}>
                    What's Included
                  </span>
                  <ul className="space-y-2 text-xs">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-bronze-500 flex-shrink-0 mt-0.5" />
                        <span className={pkg.popular ? 'text-sage-100' : 'text-charcoal-800/80'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-cream-200/20">
                <a
                  href="#package-builder"
                  className={`w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-center block transition shadow-sm ${
                    pkg.popular
                      ? 'bg-bronze-500 hover:bg-bronze-600 text-white'
                      : 'bg-sage-800 hover:bg-sage-900 text-cream-50'
                  }`}
                >
                  Customize & Reserve
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Private Experience Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Real Moments at The Barn
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            A Glimpse Inside Your Private Sanctuary
          </h2>
          <p className="text-sm text-charcoal-800/80 leading-relaxed">
            From laughter on the private terrace to unhurried relaxation in our heated wooden retreat cabin, see what awaits your group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main big card: Guests relaxing */}
          <div className="md:col-span-7 relative h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/spa-relaxation.jpg"
              alt="Guests in robes enjoying afternoon tea and prosecco on the private spa terrace"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300">
                Exclusive Terrace Relaxation
              </span>
              <p className="font-serif text-xl sm:text-2xl font-semibold">
                Afternoon Tea & Drinks Under The Countryside Sun
              </p>
              <p className="text-xs text-cream-100/90 hidden sm:block">
                Towels, robes, slippers, and fresh food are ready from the second you step through the gate.
              </p>
            </div>
          </div>

          {/* Right side 2 stacked cards: Cabin interior & Garden bistro */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            <div className="relative h-48 sm:h-[198px] rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
              <Image
                src="/images/cabin-interior-cozy.jpg"
                alt="Inside The Retreat heated wooden lodge with cozy cushions and blankets"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">The Retreat Lodge</span>
                <p className="font-serif text-sm font-semibold">Cozy Heated Interior</p>
              </div>
            </div>

            <div className="relative h-48 sm:h-[198px] rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
              <Image
                src="/images/spa-garden-bistro.jpg"
                alt="Private outdoor spa garden with bistro dining tables and sun loungers"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Outdoor Garden</span>
                <p className="font-serif text-sm font-semibold">Alfresco Bistro Seating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Package Customizer */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpaPackageBuilder />
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Spa Day FAQs</span>
          <h2 className="font-serif text-3xl font-medium text-sage-900">Everything You Need to Know</h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-white rounded-2xl border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-charcoal-900">
              Is the spa area really 100% private?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              Yes, absolutely! When you book a private spa day package at The Beauty Barn, your party has exclusive access to the heated lodge, changing area, and hot tub. There are no other guests on site during your session.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-charcoal-900">
              What do we need to bring?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              Please bring your swimwear for the hot tub. We provide fluffy towels, luxury robes, slippers, and premium shower amenities.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-cream-300 space-y-2">
            <h3 className="font-serif text-base font-semibold text-charcoal-900">
              How does the 50% deposit work?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              To secure your requested date and lodge exclusivity, a 50% non-refundable deposit is required at time of booking confirmation. The remaining balance can be settled on the day of your spa visit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
