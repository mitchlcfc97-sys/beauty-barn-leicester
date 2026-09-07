'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ShieldCheck, 
  Coffee, 
  Calendar, 
  Star, 
  ArrowRight, 
  Check, 
  Heart, 
  MapPin, 
  Phone,
  Gift
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { TREATMENTS } from '@/data/treatments';
import { SPA_PACKAGES } from '@/data/spa-packages';
import { REVIEWS, FRESHA_REVIEWS_URL } from '@/data/reviews';
import { useFresha } from '@/components/booking/FreshaModal';

export default function HomePage() {
  const { openFresha } = useFresha();
  const featuredTreatments = TREATMENTS.slice(0, 4);

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-b from-cream-200/60 via-cream-100 to-cream-50 overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sage-200 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-bronze-400/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 border border-sage-200 text-sage-900 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" />
            <span>Leicester’s Only 100% Private Day Spa</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-sage-900 leading-[1.15]">
            Private Luxury Spa Days & <br className="hidden sm:inline" />
            <span className="italic font-normal text-bronze-600">Tailored Beauty Rituals</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-charcoal-800/80 leading-relaxed">
            Nestled in the serene countryside of Scraptoft, Leicester. Indulge in exclusive private lodge & hot tub hire with zero strangers, unlimited refreshments, afternoon tea, and deeply restorative massage rituals.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/spa-days"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 font-medium text-sm transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span>Explore Private Spa Days</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>

            <button
              onClick={() => openFresha()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-cream-100 text-sage-900 border border-cream-300 font-semibold text-sm transition shadow-sm hover:shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-bronze-500" />
              <span>Book Treatments (Fresha)</span>
            </button>
          </div>

          {/* Micro Trust Proof */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-800/70 border-t border-cream-300/80 max-w-xl mx-auto">
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Exclusive Private Hire</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>3,000+ Five-Star Reviews</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Coffee className="w-4 h-4 text-bronze-600" />
              <span>Afternoon Tea & Drinks</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-[#5b5bd6]">
              <img src="/images/fresha-best-in-class.png" alt="Fresha Best in Class" className="w-5 h-5 object-contain" />
              <span>Fresha Best in Class '23, '25 & '26</span>
            </div>
          </div>
        </div>

        {/* Hero Real Image Showcase Cards */}
        <div className="relative z-10 max-w-6xl mx-auto mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300/80 group">
            <Image
              src="/images/spa-garden-overview.jpg"
              alt="Private Spa Garden and Wooden Cabin at The Beauty Barn Leicester"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">100% Private Garden</span>
              <p className="font-serif text-lg font-medium">Heated Cabin & Pergola</p>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300/80 group">
            <Image
              src="/images/hot-tub-jets.jpg"
              alt="Private Hydrotherapy Hot Tub with Water Jets"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Zero Strangers</span>
              <p className="font-serif text-lg font-medium">Hydrotherapy Hot Tub</p>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300/80 group">
            <Image
              src="/images/afternoon-tea-stand.jpg"
              alt="Luxury 3-Tier Afternoon Tea with Scones and Cakes"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Included With Spa Days</span>
              <p className="font-serif text-lg font-medium">Luxury Afternoon Tea</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PRIVATE MATTERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 text-cream-50 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-bronze-400 font-bold">
                The Beauty Barn Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-cream-50">
                A Spa Day with No Strangers. <br />
                <span className="italic text-bronze-300">Just You and Your Loved Ones.</span>
              </h2>
              <p className="text-sage-200 text-sm sm:text-base leading-relaxed">
                Unlike crowded hotel spas where you share pools and lounges with dozens of people, The Beauty Barn gives you complete, uninterrupted exclusivity. Relax in your private heated lodge, soak in the bubbling hot tub, and enjoy dedicated therapist care in total serenity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-bronze-500/20 text-bronze-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cream-50">Private Lodge & Hot Tub</h4>
                    <p className="text-xs text-sage-300">Heated countryside lodge with dedicated hydrotherapy hot tub</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-bronze-500/20 text-bronze-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cream-50">Luxury Afternoon Tea</h4>
                    <p className="text-xs text-sage-300">Sweet & savoury treats plus unlimited prosecco and teas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-bronze-500/20 text-bronze-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cream-50">Groups of 2 to 8</h4>
                    <p className="text-xs text-sage-300">Ideal for couples, birthdays, hen parties, and mother-daughter pampering</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-bronze-500/20 text-bronze-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cream-50">Transparent Pricing</h4>
                    <p className="text-xs text-sage-300">Packages from £90pp with easy 50% booking deposit</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/spa-days"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold uppercase tracking-wider transition shadow-md"
                >
                  View All Spa Packages
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-sage-800/60 p-6 sm:p-8 rounded-3xl border border-sage-700 space-y-6 overflow-hidden">
              <div className="relative h-48 sm:h-52 -mt-2 -mx-2 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/images/outdoor-loungers.jpg"
                  alt="Private Daybeds and Heated Spa Lodge"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-bronze-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow">
                  Private Garden Access
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-bronze-400 tracking-wider uppercase">Package Spotlight</span>
                <h3 className="font-serif text-2xl text-cream-50 font-medium">The Classic Experience</h3>
                <p className="text-xs text-sage-200">Our signature private package with hot tub, afternoon tea, and 60 minutes of bespoke treatments.</p>
              </div>

              <div className="text-3xl font-serif font-bold text-cream-50">
                From £100 <span className="text-sm font-sans font-normal text-sage-300">per person (Tiered by group size)</span>
              </div>

              <ul className="space-y-2 text-xs text-sage-200">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-bronze-400" /> Private hot tub & lodge relaxation</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-bronze-400" /> Unlimited drinks & Afternoon Tea</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-bronze-400" /> 1 x 60m or 2 x 30m treatments per person</li>
              </ul>

              <Link
                href="/spa-days#package-builder"
                className="w-full py-3 rounded-xl bg-cream-50 text-sage-900 font-semibold text-xs uppercase tracking-wider hover:bg-cream-100 transition flex items-center justify-center gap-1.5 shadow"
              >
                Customize & Check Dates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TREATMENTS MENU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
              Therapeutic & Aesthetic Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-sage-900 mt-1">
              Popular Salon Treatments
            </h2>
            <p className="text-sm text-charcoal-800/70 mt-1 max-w-xl">
              From tension-melting Swedish massages to organic Bramley botanical facials, each treatment is tailored to your body.
            </p>
          </div>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-800 hover:text-bronze-600 transition"
          >
            <span>View Full Treatment Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl p-6 border border-cream-300 hover:border-sage-300 hover:shadow-lg transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-charcoal-800/60 mb-2">
                  <span className="font-medium text-bronze-600 uppercase tracking-wider">{treatment.categoryLabel}</span>
                  <span>{treatment.duration}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal-900 group-hover:text-sage-800 transition mb-2">
                  {treatment.name}
                </h3>
                <p className="text-xs text-charcoal-800/70 line-clamp-3 leading-relaxed mb-4">
                  {treatment.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-800/60 block">Price</span>
                  <span className="font-serif text-lg font-bold text-sage-900">{treatment.price}</span>
                </div>
                <button
                  onClick={() => openFresha(treatment.freshaUrl, treatment.name)}
                  className="px-4 py-2 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-medium transition shadow-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY: LIFE AT THE BEAUTY BARN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            A Glimpse Inside
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-sage-900">
            Life at The Beauty Barn
          </h2>
          <p className="text-sm text-charcoal-800/70">
            Explore our private retreat in Scraptoft—from our bubbling hydrotherapy hot tub and heated wooden lodge to our candlelit treatment suites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Hot Tub */}
          <div className="group relative h-80 rounded-3xl overflow-hidden shadow-md border border-cream-300">
            <Image
              src="/images/hot-tub-jets.jpg"
              alt="Exclusive hydrotherapy hot tub with running water jets"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-1">Exclusive Access</span>
              <h3 className="font-serif text-xl font-medium">Hydrotherapy Hot Tub</h3>
              <p className="text-xs text-cream-200/90 mt-1 line-clamp-2">Bubbling jets, complimentary glassware, and serene garden privacy.</p>
            </div>
          </div>

          {/* Card 2: Couples Suite */}
          <div className="group relative h-80 rounded-3xl overflow-hidden shadow-md border border-cream-300">
            <Image
              src="/images/couples-massage-room.jpg"
              alt="Couples and duo massage suite with twin treatment beds"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-1">Together in Serenity</span>
              <h3 className="font-serif text-xl font-medium">Couples Massage Suite</h3>
              <p className="text-xs text-cream-200/90 mt-1 line-clamp-2">Side-by-side heated treatment beds with hot stones and radiant lighting.</p>
            </div>
          </div>

          {/* Card 3: Wooden Cabin */}
          <div className="group relative h-80 rounded-3xl overflow-hidden shadow-md border border-cream-300">
            <Image
              src="/images/private-spa-cabin.jpg"
              alt="Inside the cozy wooden heated spa cabin"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-1">Private Retreat</span>
              <h3 className="font-serif text-xl font-medium">Heated Spa Lodge</h3>
              <p className="text-xs text-cream-200/90 mt-1 line-clamp-2">Timber beams, plush cushions, warm blankets, and music sound system.</p>
            </div>
          </div>

          {/* Card 4: Afternoon Tea */}
          <div className="group relative h-80 rounded-3xl overflow-hidden shadow-md border border-cream-300">
            <Image
              src="/images/afternoon-tea-spread.jpg"
              alt="Luxury afternoon tea spread with clotted cream, jam, and refreshments"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-1">Delightful Treats</span>
              <h3 className="font-serif text-xl font-medium">Afternoon Tea & Drinks</h3>
              <p className="text-xs text-cream-200/90 mt-1 line-clamp-2">Fresh artisan scones, clotted cream, preserves, and unlimited refreshments.</p>
            </div>
          </div>

          {/* Card 5: Manicure Salon */}
          <div className="group relative h-80 rounded-3xl overflow-hidden shadow-md border border-cream-300">
            <Image
              src="/images/nail-bar-salon.jpg"
              alt="Manicure station with exposed brick wall and boucle chairs"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-1">Salon Aesthetics</span>
              <h3 className="font-serif text-xl font-medium">Nail Bar & Manicures</h3>
              <p className="text-xs text-cream-200/90 mt-1 line-clamp-2">Gel hands, builder gel, luxury pedicures, and nail art in rustic elegance.</p>
            </div>
          </div>

          {/* Card 6: Solo Treatment Sanctuary */}
          <div className="group relative h-80 rounded-3xl overflow-hidden shadow-md border border-cream-300">
            <Image
              src="/images/treatment-room-skylight.jpg"
              alt="Treatment sanctuary with massage bed, golden oil cart, and skylight"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-1">Pure Relaxation</span>
              <h3 className="font-serif text-xl font-medium">Treatment Sanctuary</h3>
              <p className="text-xs text-cream-200/90 mt-1 line-clamp-2">Bramley botanical rituals, warm towel service, and natural skylight.</p>
            </div>
          </div>
        </div>

        {/* Video Atmosphere Feature */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-cream-300 bg-charcoal-950 aspect-[16/9] sm:aspect-[21/9] max-h-[440px]">
          <video
            src="/videos/barn-video-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
            <div className="space-y-1 max-w-xl">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">
                Countryside Atmosphere
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                Step Inside Our Peaceful Countryside Barn
              </h3>
              <p className="text-xs text-cream-200/90 leading-relaxed hidden sm:block">
                Hidden away in the rural village of Scraptoft, The Beauty Barn offers complete privacy, peace, and restorative care.
              </p>
            </div>
            <div className="pointer-events-auto">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/90 hover:bg-white text-charcoal-900 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition shadow-sm"
              >
                Meet Our Team & Story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS WELCOME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cream-100 via-white to-cream-50 rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-cream-200">
            <Image
              src="/images/mel-and-zofia-founders.jpg"
              alt="Mel & Zofia, Co-Founders of The Beauty Barn Leicester"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
              A Personal Welcome
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900 leading-tight">
              "We Built The Beauty Barn to Give You Complete Serenity"
            </h2>
            <p className="text-sm text-charcoal-800/80 leading-relaxed">
              We started The Beauty Barn in 2020 with a dream: an authentic countryside sanctuary where nobody is ever rushed, no hot tubs are shared with strangers, and every guest feels completely at home.
            </p>
            <p className="text-sm text-charcoal-800/80 leading-relaxed">
              Whether you’re visiting for an afternoon tea spa package, a Bramley botanical massage, or an advanced facial, our team looks forward to welcoming you to Hall Farm.
            </p>
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-cream-200">
              <div>
                <p className="font-serif text-base font-semibold text-sage-900">Mel & Zofia</p>
                <p className="text-xs text-charcoal-800/60">Co-Founders & Spa Directors</p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-800 hover:text-bronze-600 transition"
              >
                Read Our Story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GIFT VOUCHERS BANNER (Solves the legacy /blank-page rank) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-sage-50 rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bronze-500/10 text-bronze-700 text-xs font-semibold">
              <Gift className="w-3.5 h-3.5" /> Perfect for Birthdays, Anniversaries & Holidays
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-medium">
              Give the Gift of Pure Relaxation
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              Available to purchase online instantly with immediate digital delivery, or in-salon as a beautifully presented gift voucher box.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/gift-vouchers"
              className="px-6 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider text-center transition shadow"
            >
              Order Vouchers Online
            </Link>
          </div>
        </div>
      </section>

      {/* FRESHA BEST IN CLASS AWARD BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#5b5bd6]/10 via-[#6e6ede]/5 to-cream-50 rounded-3xl border border-[#5b5bd6]/25 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
          {/* Badge cluster */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {['2023', '2025', '2026'].map((year) => (
              <div key={year} className="flex flex-col items-center gap-1.5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src="/images/fresha-best-in-class.png"
                    alt={`Fresha Best in Class ${year}`}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#5b5bd6] tracking-wider">{year}</span>
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#5b5bd6] font-bold">Award-Winning Spa</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
              Fresha Best in Class — 3 Times
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800/70 leading-relaxed max-w-lg">
              The <strong>Fresha Best in Class</strong> award is the platform&apos;s highest accolade, awarded to the top-performing spas and salons based on star rating, volume of verified reviews, and online booking performance. We&apos;re proud to have been recognised in 2023, 2025, and 2026 — a testament to our team&apos;s dedication to exceptional client care.
            </p>
            <a
              href="https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5b5bd6] hover:text-[#4a4ac5] transition mt-1"
            >
              View our Fresha profile →
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Verified Client Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-sage-900">
            Over 3,000 Five-Star Reviews
          </h2>
          <p className="text-sm text-charcoal-800/70 leading-relaxed">
            Read what our guests say — all reviews are verified bookings on Fresha.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
              <span className="text-sm font-bold text-charcoal-900 ml-2">5.0 / 5.0</span>
            </div>
            <span className="hidden sm:block text-charcoal-800/30">·</span>
            <a
              href={FRESHA_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00b0b9]/10 hover:bg-[#00b0b9]/20 border border-[#00b0b9]/30 transition text-sm font-semibold text-[#007a80]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
              3,000+ reviews on Fresha
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.filter((review) => review.rating === 5).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#007a80] bg-[#00b0b9]/10 px-2 py-0.5 rounded-full border border-[#00b0b9]/20">
                    via {review.source}
                  </span>
                </div>
                <p className="text-xs text-charcoal-800/80 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 mt-4 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-charcoal-900 block">{review.name}</span>
                  <span className="text-[10px] text-charcoal-800/60">{review.packageOrService}</span>
                </div>
                <span className="text-[10px] text-charcoal-800/50">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fresha CTA */}
        <div className="text-center pt-2">
          <a
            href={FRESHA_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-sm font-semibold transition shadow-md"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            Read All 3,000+ Reviews on Fresha
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[10px] text-charcoal-800/50 mt-2">All reviews are from verified Fresha bookings</p>
        </div>
      </section>

      {/* LOCATION & HOW TO FIND US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-cream-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
              Visit Our Scraptoft Barn
            </span>
            <h2 className="font-serif text-3xl font-medium text-sage-900">
              Country Calm Just Minutes from Leicester City
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              Located on Beeby Road in Scraptoft, our private converted barn offers peaceful countryside views with free on-site parking.
            </p>

            <div className="p-4 bg-white rounded-2xl border border-cream-300 space-y-3 text-xs">
              <p className="font-semibold text-charcoal-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-bronze-600" />
                {BUSINESS_INFO.address.street}, Scraptoft, {BUSINESS_INFO.address.postalCode}
              </p>
              <div className="flex items-start gap-3 pt-1">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-cream-300 shadow-sm">
                  <Image
                    src="/images/barn-gate-entrance.jpg"
                    alt="The Beauty Barn wooden gate entrance with please ring bell sign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-charcoal-800/80 leading-relaxed">
                    <strong>Arrival Note:</strong> We operate strictly by appointment to guarantee total privacy. When you arrive at the wooden gate between the housing estate and golf course, please press the buzzer on the timber post to be admitted.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=The+Beauty+Barn+Leicester+LE7+9SJ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-sm inline-flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-900 text-xs font-semibold hover:bg-cream-200 transition inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-bronze-600" /> Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-cream-300">
            <iframe
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beauty Barn Leicester Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
