'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Clock, Check, Calendar, ArrowRight, Star, Heart, Flame, Shield, PlusCircle, Eye } from 'lucide-react';
import { TREATMENTS } from '@/data/treatments';
import { SIGNATURE_RITUALS } from '@/data/rituals';
import { TREATMENT_ADDONS } from '@/data/addons';
import { useFresha } from '@/components/booking/FreshaModal';

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedRitualId, setExpandedRitualId] = useState<string>('dual-serenity');
  const { openFresha } = useFresha();

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'massage', label: 'Massage & Body' },
    { id: 'facials', label: 'Advanced Facials' },
    { id: 'signature', label: 'Signature Rituals' },
    { id: 'nails', label: 'Nails & Hands' },
    { id: 'body', label: 'Body & Mums-to-Be' },
  ];

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> Scraptoft Sanctuary Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Treatments & Signature Rituals
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Every appointment is conducted with unhurried care, pure botanical formulations by Bramley, and tailored pressure to revive your wellbeing from head to toe.
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

      {/* Treatment Suite Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-sm border border-cream-200 group">
            <Image
              src="/images/treatments/couples-duo-massage-suite.jpg"
              alt="Couples massage suite with twin beds and ambient lighting"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="font-serif font-medium text-base">Couples & Duo Massage Suites</span>
              <span className="text-cream-200 text-xs">Warm ambient lighting & twin heated beds</span>
            </div>
          </div>

          <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-sm border border-cream-200 group">
            <Image
              src="/images/treatment-room-skylight.jpg"
              alt="Skylight facial treatment room"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="font-serif font-medium text-base">Natural Light Facial Suite</span>
              <span className="text-cream-200 text-xs">Natural skylight & botanical skincare</span>
            </div>
          </div>

          <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-sm border border-cream-200 group">
            <Image
              src="/images/treatments/gelbottle-nail-station.jpg"
              alt="The GelBottle Inc manicure & pedicure station with exposed brick"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="font-serif font-medium text-base">The GelBottle Inc Nail Bar</span>
              <span className="text-cream-200 text-xs">Pedicure bowls, mineral scrub & bespoke gel palettes</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 🌟 HIGH-TICKET SHOWCASE: SIGNATURE RITUALS & IMMERSION PACKAGES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold flex items-center justify-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-bronze-500 text-bronze-500" /> Crown Jewel Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            Signature Rituals & Immersion Packages
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
            Multi-stage immersive journeys designed for transformative relaxation. Featuring synchronised dual-therapist treatments, near 3-hour holistic head-to-toe immersions, and dedicated prenatal pampering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Ritual Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {SIGNATURE_RITUALS.map((ritual) => {
              const isSelected = expandedRitualId === ritual.id;
              return (
                <button
                  key={ritual.id}
                  onClick={() => setExpandedRitualId(ritual.id)}
                  className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-sage-900 text-cream-50 border-sage-800 shadow-xl scale-[1.02]'
                      : 'bg-white text-charcoal-900 border-cream-300 hover:border-sage-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-bronze-500 text-white'
                        : 'bg-sage-100 text-sage-900'
                    }`}>
                      {ritual.badge || 'Signature'}
                    </span>
                    <span className={`text-xs flex items-center gap-1 font-medium ${
                      isSelected ? 'text-sage-200' : 'text-charcoal-800/70'
                    }`}>
                      <Clock className="w-3.5 h-3.5 text-bronze-400" /> {ritual.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold mb-1 leading-snug">
                    {ritual.name}
                  </h3>
                  <p className={`text-xs line-clamp-2 leading-relaxed mb-3 ${
                    isSelected ? 'text-sage-200/90' : 'text-charcoal-800/70'
                  }`}>
                    {ritual.subtitle}
                  </p>

                  <div className={`pt-3 border-t flex items-center justify-between text-xs ${
                    isSelected ? 'border-sage-800 text-cream-100' : 'border-cream-200 text-charcoal-800/80'
                  }`}>
                    <span className="font-semibold text-bronze-400">{ritual.therapists}</span>
                    <span className="font-serif text-base font-bold">{ritual.price}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Spotlight Card */}
          <div className="lg:col-span-7">
            {(() => {
              const activeRitual = SIGNATURE_RITUALS.find(r => r.id === expandedRitualId) || SIGNATURE_RITUALS[0];
              return (
                <div className="bg-white rounded-3xl border border-cream-300 shadow-md p-6 sm:p-8 space-y-6">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cream-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-3 py-1 rounded-full bg-bronze-50 text-bronze-700 text-[10px] font-bold uppercase tracking-wider border border-bronze-200">
                          {activeRitual.badge}
                        </span>
                        <span className="text-xs text-charcoal-800/70 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-bronze-500" /> {activeRitual.duration}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
                        {activeRitual.name}
                      </h3>
                      <p className="text-xs text-bronze-600 font-medium mt-0.5">
                        {activeRitual.therapists}
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <span className="text-[10px] uppercase tracking-wider text-charcoal-800/60 block">Experience Price</span>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-sage-900">{activeRitual.price}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                    {activeRitual.description}
                  </p>

                  {/* Step by Step Breakdown */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sage-900 block">
                      The Multi-Step Ritual Experience
                    </span>
                    <div className="space-y-2.5">
                      {activeRitual.ritualSteps.map((step, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-cream-50 border border-cream-200/80 space-y-1">
                          <h4 className="font-serif text-sm font-semibold text-sage-900 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-sage-800 text-cream-50 text-[10px] flex items-center justify-center font-sans font-bold flex-shrink-0">
                              {idx + 1}
                            </span>
                            {step.title}
                          </h4>
                          <p className="text-xs text-charcoal-800/70 leading-relaxed pl-7">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What's Included Pills */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sage-900 block">
                      What&apos;s Included In This Journey
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeRitual.whatsIncluded.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-charcoal-800/80">
                          <Check className="w-3.5 h-3.5 text-sage-800 flex-shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For Callout */}
                  <div className="p-4 rounded-2xl bg-sage-50/70 border border-sage-200/60 text-xs text-sage-900 leading-relaxed">
                    <strong>Ideal For:</strong> {activeRitual.idealFor}
                  </div>

                  {/* Book Action */}
                  <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-charcoal-800/70">
                      Reserve this high-ticket ritual online instantly on Fresha.
                    </span>
                    <button
                      onClick={() => openFresha(activeRitual.freshaUrl, activeRitual.name)}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-bronze-300" />
                      Book This Ritual on Fresha
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ✨ BROW & LASH ARTISTRY & TRANSFORMATION SHOWCASE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cream-100 via-white to-sage-50/40 rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Real Video Transformation */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[520px] rounded-3xl overflow-hidden shadow-xl border border-cream-300 bg-charcoal-950 group">
              <video
                src="/videos/brow-and-lash-transformation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-0.5">
                  Real Client Transformation
                </span>
                <p className="font-serif text-base font-semibold">
                  Sculpted Brows, Lifted Lashes & Radiant Glow
                </p>
                <p className="text-xs text-cream-100/90 mt-0.5">
                  Lamination, lash lift and precision styling by our specialist therapists Fran & Matilda.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-center text-charcoal-800/60 italic">
              ✨ Patch test required 24 hours prior for all new brow and lash tint/lift appointments.
            </p>
          </div>

          {/* Right: Brow & Lash Menu Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bronze-500/15 text-bronze-700 text-xs font-semibold uppercase tracking-wider">
                <Eye className="w-3.5 h-3.5 text-bronze-600" /> Specialist Eye Artistry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900 leading-tight">
                Fluffy Laminated Brows & <br className="hidden sm:inline" />
                <span className="italic font-normal text-bronze-600">Elevated Lash Lifts</span>
              </h2>
              <p className="text-sm text-charcoal-800/80 leading-relaxed">
                Wake up every day with perfectly framed eyes and zero mascara required. Our brow & lash specialists use gentle, dermatologically-approved restructuring solutions to create symmetry, natural volume, and long-lasting curl.
              </p>
            </div>

            {/* Service Pills */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-cream-200 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base font-semibold text-sage-900">Brow Lamination</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-sage-100 text-sage-800 font-bold uppercase tracking-wider">Up to 8 Weeks</span>
                  </div>
                  <p className="text-xs text-charcoal-800/70 leading-relaxed">
                    Realigns messy or downward-growing hairs into full, brushed-up, symmetrical arches that stay perfectly in place.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-serif text-lg font-bold text-sage-900 block">£42</span>
                  <span className="text-[10px] text-charcoal-800/60">45 mins</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cream-200 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base font-semibold text-sage-900">Lash Lift & Tint</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-bronze-100 text-bronze-800 font-bold uppercase tracking-wider">Fan Favourite</span>
                  </div>
                  <p className="text-xs text-charcoal-800/70 leading-relaxed">
                    Curling and darkening your natural eyelashes from root to tip, opening the eyes for an effortless awake look.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-serif text-lg font-bold text-sage-900 block">£40</span>
                  <span className="text-[10px] text-charcoal-800/60">45 mins</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cream-200 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base font-semibold text-sage-900">Complete Eye Package</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cream-200 text-charcoal-800 font-bold uppercase tracking-wider">Full Duo</span>
                  </div>
                  <p className="text-xs text-charcoal-800/70 leading-relaxed">
                    Brow tint, brow wax, and lash tint combined for complete framing, polish, and defined elegance.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-serif text-lg font-bold text-sage-900 block">£48</span>
                  <span className="text-[10px] text-charcoal-800/60">60 mins</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openFresha('https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459', 'Brow & Lash Services')}
                className="px-6 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                Book Brow & Lash on Fresha
              </button>
              <span className="text-xs text-charcoal-800/70">
                Precision waxing, threading & tinting also available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 💎 TREATMENT ADD-ONS & CUSTOM ENHANCEMENTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold flex items-center justify-center gap-1.5">
            <PlusCircle className="w-3.5 h-3.5 text-bronze-600" /> Customise Your Treatment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            Treatment Add-Ons & Clinical Boosters
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
            Elevate any appointment with therapeutic heated volcanic stones, warm bamboo sticks, clinical LED light therapy, or intensive peptide and electrolyte masks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENT_ADDONS.map((addon) => (
            <div
              key={addon.id}
              className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-cream-100 text-charcoal-800 text-[10px] font-semibold uppercase tracking-wider border border-cream-200">
                    {addon.category === 'massage' ? 'Body & Massage Upgrade' : 'Facial Booster'}
                  </span>
                  <span className="font-serif text-lg font-bold text-sage-900">{addon.price}</span>
                </div>

                <h3 className="font-serif text-lg font-medium text-charcoal-900">
                  {addon.name}
                </h3>

                <p className="text-xs text-charcoal-800/70 leading-relaxed">
                  {addon.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600 block">
                    Key Benefits:
                  </span>
                  {addon.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-charcoal-800/80">
                      <Check className="w-3 h-3 text-sage-800 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-200 text-[11px] text-charcoal-800/70">
                <strong className="text-sage-900 font-semibold">Recommended with:</strong> {addon.recommendedWith}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 📋 COMPLETE TREATMENTS MENU */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-cream-200 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">Comprehensive Menu</span>
            <h2 className="font-serif text-3xl font-medium text-sage-900">All Treatments & Salon Services</h2>
          </div>
          <span className="text-xs text-charcoal-800/70 font-medium">
            Showing {filteredTreatments.length} services
          </span>
        </div>

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
