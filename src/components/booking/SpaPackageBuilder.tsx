'use client';

import React, { useState } from 'react';
import { Users, Calendar, Sparkles, CheckCircle2, Coffee, Shield, Heart, Send } from 'lucide-react';
import { SPA_PACKAGES, SpaPackage } from '@/data/spa-packages';

export default function SpaPackageBuilder() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('classic-experience');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<'morning' | 'afternoon'>('morning');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const selectedPkg: SpaPackage = SPA_PACKAGES.find(p => p.id === selectedPackageId) || SPA_PACKAGES[0];
  const totalPrice = selectedPkg.pricePerPerson * guestCount;
  const depositRequired = totalPrice * 0.5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-cream-200 overflow-hidden" id="package-builder">
      {/* Header */}
      <div className="bg-sage-900 text-cream-50 p-6 md:p-10 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-sage-800/40 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bronze-500/20 text-bronze-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Spa Day Customizer
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-cream-50">
            Build Your Private Luxury Spa Experience
          </h2>
          <p className="text-sage-200 text-sm md:text-base mt-2 leading-relaxed">
            Leicester's only 100% private spa lodge & hot tub. Tailor your group size, package, and treatments below with transparent pricing and real-time deposit calculation.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {submitted ? (
          <div className="text-center py-12 px-4 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl text-charcoal-900 font-medium mb-2">
              Spa Day Request Received!
            </h3>
            <p className="text-charcoal-800/80 text-sm leading-relaxed mb-6">
              Thank you, <strong className="text-charcoal-900">{clientName || 'Guest'}</strong>. We have reserved your requested slot for <strong>{guestCount} guests</strong> on <strong>{selectedPkg.name}</strong>. Our team will verify lodge availability and contact you via {clientPhone || clientEmail} within 2 hours to confirm your 50% booking deposit of £{depositRequired}.
            </p>
            <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200 text-xs text-charcoal-800 space-y-1 mb-6 text-left">
              <div className="flex justify-between"><span>Package:</span><strong>{selectedPkg.name}</strong></div>
              <div className="flex justify-between"><span>Party Size:</span><strong>{guestCount} Guests</strong></div>
              <div className="flex justify-between"><span>Total Experience:</span><strong>£{totalPrice}</strong></div>
              <div className="flex justify-between text-sage-800"><span>50% Securing Deposit:</span><strong>£{depositRequired}</strong></div>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-sage-800 text-cream-50 text-sm font-medium hover:bg-sage-900 transition"
            >
              Modify or Customize Another Package
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Select Package */}
            <div>
              <label className="block font-serif text-lg text-charcoal-900 font-medium mb-3">
                1. Select Your Spa Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SPA_PACKAGES.map((pkg) => {
                  const isSelected = pkg.id === selectedPackageId;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => {
                        setSelectedPackageId(pkg.id);
                        if (guestCount > pkg.maxGuests) setGuestCount(pkg.maxGuests);
                        if (guestCount < pkg.minGuests) setGuestCount(pkg.minGuests);
                      }}
                      className={`text-left p-5 rounded-2xl border transition relative flex flex-col justify-between ${
                        isSelected
                          ? 'border-sage-800 bg-sage-50/50 shadow-md ring-2 ring-sage-800/20'
                          : 'border-cream-300 hover:border-sage-200 bg-white'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 bg-bronze-500 text-white text-[10px] font-bold tracking-wider uppercase rounded-full shadow-sm">
                          Most Popular
                        </span>
                      )}
                      <div>
                        <h4 className="font-serif font-medium text-charcoal-900 text-base mb-1">
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-charcoal-800/70 line-clamp-2 mb-3">
                          {pkg.tagline}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-cream-200 flex items-baseline justify-between">
                        <span className="text-xs text-charcoal-800/60">{pkg.minGuests}-{pkg.maxGuests} Guests</span>
                        <span className="font-serif text-lg font-bold text-sage-800">£{pkg.pricePerPerson}<span className="text-xs font-normal text-charcoal-800/70">/pp</span></span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Guest Count & Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-cream-200">
              {/* Guest Count */}
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-sage-800" /> Number of Guests ({selectedPkg.minGuests} - {selectedPkg.maxGuests})
                </label>
                <div className="flex items-center space-x-2">
                  {[...Array(selectedPkg.maxGuests - selectedPkg.minGuests + 1)].map((_, i) => {
                    const count = selectedPkg.minGuests + i;
                    const isCurrent = guestCount === count;
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setGuestCount(count)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition ${
                          isCurrent
                            ? 'bg-sage-800 text-cream-50 shadow-sm'
                            : 'bg-cream-100 text-charcoal-800 hover:bg-cream-200 border border-cream-300'
                        }`}
                      >
                        {count} {count === 1 ? 'Guest' : 'Guests'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sage-800" /> Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
                />
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2 flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-sage-800" /> Preferred Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredTime('morning')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium transition ${
                      preferredTime === 'morning'
                        ? 'bg-sage-800 text-cream-50'
                        : 'bg-cream-100 text-charcoal-800 hover:bg-cream-200 border border-cream-300'
                    }`}
                  >
                    Morning (10:00 - 13:00)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredTime('afternoon')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium transition ${
                      preferredTime === 'afternoon'
                        ? 'bg-sage-800 text-cream-50'
                        : 'bg-cream-100 text-charcoal-800 hover:bg-cream-200 border border-cream-300'
                    }`}
                  >
                    Afternoon (14:00 - 17:00)
                  </button>
                </div>
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="bg-cream-50 rounded-2xl p-5 border border-cream-200 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-sage-800 uppercase tracking-wider">Package Inclusions</span>
                <p className="text-sm font-medium text-charcoal-900">{selectedPkg.features.join(' • ')}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-800/70">
                <Shield className="w-4 h-4 text-emerald-600" /> 100% Private - No other guests
              </div>
            </div>

            {/* Step 3: Contact & Instant Deposit Calculation */}
            <div className="pt-4 border-t border-cream-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-lg text-charcoal-900 font-medium">
                  2. Lead Guest Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-900 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-white text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-900 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-white text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-900 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.co.uk"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-white text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-900 mb-1">Special Occasion / Dietary Notes (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Birthday celebration, gluten-free afternoon tea required for 1 guest..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-cream-300 bg-white text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
                  />
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-sage-900 to-charcoal-900 text-cream-50 p-6 rounded-2xl shadow-lg border border-sage-800">
                <span className="text-xs font-semibold text-bronze-400 uppercase tracking-widest block mb-1">
                  Summary & Securing Deposit
                </span>
                <div className="font-serif text-xl font-medium text-cream-50 mb-4 pb-3 border-b border-sage-800">
                  {selectedPkg.name}
                </div>

                <div className="space-y-2 text-xs text-sage-200 mb-4">
                  <div className="flex justify-between">
                    <span>{guestCount} Guests × £{selectedPkg.pricePerPerson}</span>
                    <span className="font-medium text-cream-50">£{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exclusive Lodge & Hot Tub Access</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Afternoon Tea & Drinks</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-sage-800 mb-5">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm text-sage-200">Total Experience Price:</span>
                    <span className="font-serif text-xl font-bold text-cream-50">£{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-baseline p-2.5 rounded-lg bg-bronze-500/20 border border-bronze-500/40">
                    <span className="text-xs font-medium text-bronze-300">50% Deposit to Secure:</span>
                    <span className="font-serif text-lg font-bold text-bronze-400">£{depositRequired}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-medium text-sm transition shadow-md flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                  Request Booking & Reserve Slot
                </button>

                <p className="text-[11px] text-sage-300/80 text-center mt-3 flex items-center justify-center gap-1">
                  <Heart className="w-3 h-3 text-bronze-400" /> Non-refundable 50% deposit requested upon confirmation
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
