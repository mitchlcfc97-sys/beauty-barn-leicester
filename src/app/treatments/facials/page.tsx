'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Clock, Check, Calendar, ArrowRight, ShieldCheck, Heart, Zap, Award } from 'lucide-react';
import { TREATMENTS } from '@/data/treatments';
import { useFresha } from '@/components/booking/FreshaModal';

export default function FacialsPage() {
  const { openFresha } = useFresha();
  
  // Results-driven advanced facials only (excluding relaxing Bramley facials which live on /bramley)
  const advancedFacials = TREATMENTS.filter(
    t => (t.category === 'facials' || t.id === 'deluxe-bacial') && !t.id.includes('bramley')
  );

  return (
    <div className="space-y-16 pb-20">
      {/* SEO Hero Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> Clinical Skin Hub • Results Driven • Scraptoft
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Advanced Facials & Clinical Skincare
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            At The Beauty Barn Leicester, our advanced facials are results-driven over pure relaxation. Utilizing the world-renowned <strong>Million Dollar Facial® system</strong> and <strong>MEDI+ cosmeceuticals</strong>, our certified skin specialists target acne scarring, stubborn pigmentation, deep lines, and dull texture in our dedicated Skin Hub.
          </p>
        </div>

        {/* Facials Video & Atmosphere Showcase */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/skin-hub/skin-hub-room-wide.jpg"
              alt="The Beauty Barn dedicated Skin Hub suite in Scraptoft with treatment bed and neon sign"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">The Beauty Barn Sanctuary</span>
              <p className="font-serif text-base font-medium">The Skin Hub Treatment Suite</p>
            </div>
          </div>

          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 group bg-charcoal-950">
            <video
              src="/videos/facial-massage-sculpt.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 text-white pointer-events-none">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Lymphatic Drainage</span>
              <p className="font-serif text-base font-medium">Million Dollar Facial Movements</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MILLION DOLLAR FACIAL & MEDI+ EXPLAINER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sage-900 via-sage-950 to-sage-900 text-cream-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-sage-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-500/20 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-bronze-400" />
                The Million Dollar Facial System & MEDI+
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-cream-50">
                Results-Driven Clinical Skincare in Our Dedicated Skin Hub
              </h2>
              <p className="text-sm text-sage-200 leading-relaxed max-w-2xl">
                Unlike standard pampering facials, our advanced protocols are engineered to produce visible, transformative dermal changes. Combining medical-grade dermaplaning, collagen induction microneedling, clinical lymphatic drainage, and dermatological MEDI+ serums, we resurface, stimulate, and hydrate at cellular depth.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-sage-800/60 border border-sage-700/60 text-center">
                  <span className="font-bold text-bronze-300 block">Dermaplaning</span>
                  <span className="text-[11px] text-sage-300">Resurfacing</span>
                </div>
                <div className="p-3 rounded-xl bg-sage-800/60 border border-sage-700/60 text-center">
                  <span className="font-bold text-bronze-300 block">Microneedling</span>
                  <span className="text-[11px] text-sage-300">Collagen Boost</span>
                </div>
                <div className="p-3 rounded-xl bg-sage-800/60 border border-sage-700/60 text-center">
                  <span className="font-bold text-bronze-300 block">MEDI+ Actives</span>
                  <span className="text-[11px] text-sage-300">Deep Delivery</span>
                </div>
                <div className="p-3 rounded-xl bg-sage-800/60 border border-sage-700/60 text-center">
                  <span className="font-bold text-bronze-300 block">Clinical LED</span>
                  <span className="text-[11px] text-sage-300">Cell Repair</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-sage-800/40 p-6 rounded-2xl border border-sage-700/60 space-y-4">
              <h3 className="font-serif text-base font-semibold text-cream-50">What to Expect:</h3>
              <ul className="space-y-2.5 text-xs text-sage-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-bronze-400 flex-shrink-0 mt-0.5" />
                  <span>Full professional consultation and skin condition analysis before treatment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-bronze-400 flex-shrink-0 mt-0.5" />
                  <span>Customised depth and active serums based on your skin concerns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-bronze-400 flex-shrink-0 mt-0.5" />
                  <span>Personalised post-treatment homecare regimen with MEDI+ products.</span>
                </li>
              </ul>
              <button
                onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', 'The Million Dollar Facial')}
                className="w-full py-2.5 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold uppercase tracking-wider transition"
              >
                Book Million Dollar Facial (£125)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REAL CLIENT BEFORE & AFTER TRANSFORMATIONS GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Real Client Proof
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            Real Results: Before & After Case Studies
          </h2>
          <p className="text-sm text-charcoal-800/80 leading-relaxed">
            All photos are unretouched, genuine results from clients treated by our skin specialists at The Beauty Barn Leicester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CASE 1: MICRONEEDLING ACNE SCARRING */}
          <div className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-square w-full bg-charcoal-900 overflow-hidden">
                <Image
                  src="/images/treatments/microneedling-before-after.jpg"
                  alt="Acne Scarring Before and After Microneedling at The Beauty Barn Leicester"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-semibold text-white uppercase tracking-wider">
                  Top: Before • Bottom: After
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] font-bold text-bronze-600 uppercase tracking-wider block">
                  Microneedling & CIT
                </span>
                <h3 className="font-serif text-lg font-semibold text-sage-900">
                  Acne Scarring & Texture Remodeling
                </h3>
                <p className="text-xs text-charcoal-800/75 leading-relaxed">
                  Notice the visible reduction in deep post-acne pitting, smoothed skin texture, refined pores, and healthy new collagen generation across the jawline and cheek.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', 'The Microneedling Collagen Induction Facial')}
                className="w-full py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition"
              >
                Book Microneedling (£90)
              </button>
            </div>
          </div>

          {/* CASE 2: PIGMENTATION & SUN DAMAGE */}
          <div className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-square w-full bg-charcoal-900 overflow-hidden">
                <Image
                  src="/images/treatments/facials-pigmentation-before-after.png"
                  alt="Pigmentation and Sun Damage Before and After at The Beauty Barn"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-semibold text-white uppercase tracking-wider">
                  Clinical Case Study
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] font-bold text-bronze-600 uppercase tracking-wider block">
                  Skin Peels & Resurfacing
                </span>
                <h3 className="font-serif text-lg font-semibold text-sage-900">
                  Pigmentation & Sun Damage Correction
                </h3>
                <p className="text-xs text-charcoal-800/75 leading-relaxed">
                  Dramatically faded sun damage and stubborn hyperpigmentation across the cheeks, alongside visibly lifted contours, restored radiance, and an even complexion.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', 'The Dermaplaning Glow Facial')}
                className="w-full py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition"
              >
                Book Dermaplaning (£70)
              </button>
            </div>
          </div>

          {/* CASE 3: 8-MONTH SKIN HEALTH JOURNEY */}
          <div className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-square w-full bg-charcoal-900 overflow-hidden">
                <Image
                  src="/images/treatments/facials-progression-timeline.jpg"
                  alt="Long term facial skin results timeline at The Beauty Barn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-semibold text-white uppercase tracking-wider">
                  May 2021 → Jan 2022
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] font-bold text-bronze-600 uppercase tracking-wider block">
                  Progressive Dermal Plan
                </span>
                <h3 className="font-serif text-lg font-semibold text-sage-900">
                  Long-Term Skin Health Journey
                </h3>
                <p className="text-xs text-charcoal-800/75 leading-relaxed">
                  Long-term tracking demonstrating sustained clearance of congestion, progressive calming of redness, refined skin barrier, and lasting luminosity over an 8-month period.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', 'The Beauty Barn Bespoke Facial')}
                className="w-full py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition"
              >
                Book Bespoke Facial (From £65)
              </button>
            </div>
          </div>

          {/* CASE 4: THE MILLION DOLLAR GLOW */}
          <div className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-square w-full bg-charcoal-900 overflow-hidden">
                <Image
                  src="/images/treatments/million-dollar-facial-client.jpg"
                  alt="Smiling client holding I Feel A Million Dollars sign outside The Beauty Barn"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-semibold text-bronze-300 uppercase tracking-wider">
                  Real Client Experience
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] font-bold text-bronze-600 uppercase tracking-wider block">
                  Million Dollar Facial
                </span>
                <h3 className="font-serif text-lg font-semibold text-sage-900">
                  &ldquo;I Feel A Million Dollars&rdquo; Glow
                </h3>
                <p className="text-xs text-charcoal-800/75 leading-relaxed">
                  Instant post-treatment luminosity, plumped deep dermal hydration, and a super-smooth glass skin finish that leaves our guests glowing from the inside out.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', 'The Million Dollar Facial Protocol')}
                className="w-full py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition"
              >
                Book Million Dollar Facial (£125)
              </button>
            </div>
          </div>
        </div>
      </section>

      
      {/* INSIDE THE SKIN HUB: REAL SUITE PHOTO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Our Dedicated Space
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            Inside The Skin Hub
          </h2>
          <p className="text-sm text-charcoal-800/80 leading-relaxed">
            Step into our dedicated clinical treatment room in Scraptoft, created specifically for high-performance facial rituals, LED light therapy, and skin transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: LED Light Therapy Canopy */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-charcoal-900">
              <Image
                src="/images/skin-hub/skin-hub-led-canopy.jpg"
                alt="Clinical LED light therapy canopy arch glowing red in The Skin Hub"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-bronze-300 uppercase tracking-wider">
                Clinical Phototherapy
              </div>
              <div className="absolute bottom-3 left-4 text-white">
                <p className="font-serif text-base font-medium">LED Light Therapy Dome</p>
              </div>
            </div>
            <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
              <p className="text-xs text-charcoal-800/75 leading-relaxed">
                Our medical-grade LED canopy stimulates cellular ATP, accelerates dermal recovery, boosts natural collagen, and eliminates active blemish-causing bacteria.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-sage-800">
                Included in Million Dollar Facials & available as an add-on
              </div>
            </div>
          </div>

          {/* Card 2: Treatment Room Entrance & Neon */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-charcoal-900">
              <Image
                src="/images/skin-hub/skin-hub-entrance-door.jpg"
                alt="Entrance door with gold Treatment Room plaque looking into The Skin Hub neon"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-bronze-300 uppercase tracking-wider">
                Private Suite
              </div>
              <div className="absolute bottom-3 left-4 text-white">
                <p className="font-serif text-base font-medium">Dedicated Treatment Room</p>
              </div>
            </div>
            <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
              <p className="text-xs text-charcoal-800/75 leading-relaxed">
                Step through to your private treatment sanctuary. Featuring our signature glowing &quot;The Skin Hub ♡&quot; neon, heated luxury treatment bed, and calming acoustics.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-sage-800">
                100% private, 1-on-1 certified skin specialist care
              </div>
            </div>
          </div>

          {/* Card 3: MEDI+ Actives & Sterilisation */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-cream-300 shadow-sm hover:shadow-md transition flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-charcoal-900">
              <Image
                src="/images/skin-hub/skin-hub-treatment-station.jpg"
                alt="MEDI+ cosmeceuticals and sterilisation station in The Skin Hub"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-bronze-300 uppercase tracking-wider">
                MEDI+ Cosmeceuticals
              </div>
              <div className="absolute bottom-3 left-4 text-white">
                <p className="font-serif text-base font-medium">Clinical Skincare Station</p>
              </div>
            </div>
            <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
              <p className="text-xs text-charcoal-800/75 leading-relaxed">
                Equipped with hospital-grade tool sterilisation, hot towel warming, and active MEDI+ dermatological solutions tailored to your unique skin concerns.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-sage-800">
                Pharmaceutical-grade ingredients & sterile single-use blades
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Facials Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            Skin Hub Menu
          </span>
          <h2 className="font-serif text-3xl font-medium text-sage-900">
            Results-Driven Facial Protocols
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/70">
            Every session begins with a consultation to determine your ideal active serums, peeling depth, and infusion technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedFacials.map((treatment) => (
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
              Electrolyte-infused algae mask vacuum seals active serums into the skin and instantly calms post-microneedling redness.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-cream-300 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600">Cellular Therapy</span>
              <span className="font-serif text-base font-bold text-sage-900">+£5 - £10</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">Clinical LED Light</h3>
            <p className="text-xs text-charcoal-800/70 leading-relaxed">
              Medical wavelengths stimulate ATP cellular energy, speeding recovery, boosting fibroblasts, and killing acne bacteria.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-cream-300 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600">Instant Lift</span>
              <span className="font-serif text-base font-bold text-sage-900">+£10</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">Miracle Peptide Mask</h3>
            <p className="text-xs text-charcoal-800/70 leading-relaxed">
              Tightens and sculpts facial contours while stimulating microcirculation for instant firming before special events.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-cream-300 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600">Deep Plump</span>
              <span className="font-serif text-base font-bold text-sage-900">+£10</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">HA4c Hyaluronic Mask</h3>
            <p className="text-xs text-charcoal-800/70 leading-relaxed">
              Quadruple molecular weight hyaluronic acid penetrates multiple skin layers for lasting dewiness and barrier repair.
            </p>
          </div>
        </div>
      </section>

      {/* Skin Hub Consultation & Booking Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cream-100 via-white to-cream-50 rounded-3xl p-8 sm:p-12 border border-cream-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-bold text-bronze-600 uppercase tracking-wider">Unsure Which Facial You Need?</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-sage-900 font-medium">
              Book a Bespoke Facial with Full Skin Analysis
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              Our skin specialists will examine your skin under clinical lighting, discuss your primary goals (anti-aging, texture, active breakouts, or pigmentation), and tailor a Million Dollar or MEDI+ protocol specifically for you on the day.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', 'The Beauty Barn Bespoke Facial')}
              className="w-full py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-sm text-center"
            >
              Book Skin Consultation
            </button>
            <Link
              href="/contact"
              className="w-full py-3 rounded-xl border border-cream-400 bg-white hover:bg-cream-100 text-sage-900 text-xs font-semibold uppercase tracking-wider transition text-center"
            >
              Ask Our Therapists
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
