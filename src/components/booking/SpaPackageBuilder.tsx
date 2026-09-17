'use client';

import React, { useState } from 'react';
import { Users, Calendar, Sparkles, CheckCircle2, Clock, Shield, Heart, Send, AlertCircle } from 'lucide-react';
import { SPA_PACKAGES, SpaPackage } from '@/data/spa-packages';

export default function SpaPackageBuilder() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('classic-experience');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [preferredStartTime, setPreferredStartTime] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [dateError, setDateError] = useState<string | null>(null);
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const selectedPkg: SpaPackage = SPA_PACKAGES.find(p => p.id === selectedPackageId) || SPA_PACKAGES[0];

  // Dynamic price per person based on group size tier
  const matchedTier = selectedPkg.pricingTiers?.find(
    t => guestCount >= t.minGuests && guestCount <= t.maxGuests
  ) || selectedPkg.pricingTiers?.[0];

  const currentPricePerPerson = matchedTier ? matchedTier.pricePerPerson : selectedPkg.pricePerPerson;
  const currentDuration = matchedTier ? matchedTier.duration : selectedPkg.duration;
  const totalPrice = currentPricePerPerson * guestCount;
  const depositRequired = totalPrice * 0.5;

  // Day of week helper (0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat)
  const getDayOfWeek = (dateStr: string): number | null => {
    if (!dateStr) return null;
    const parts = dateStr.split('-');
    if (parts.length !== 3) return null;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    return d.getDay();
  };

  const dayOfWeek = getDayOfWeek(selectedDate);
  const isSaturday = dayOfWeek === 6;
  const isWedOrThu = dayOfWeek === 3 || dayOfWeek === 4;
  const isMonTueFri = dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 5;

  // Handle date change with day constraints
  const handleDateChange = (val: string) => {
    setDateError(null);
    if (!val) {
      setSelectedDate('');
      return;
    }
    const dow = getDayOfWeek(val);

    // Rule: Sundays are closed - not allowed at all
    if (dow === 0) {
      setDateError('The Beauty Barn is closed on Sundays. Please select a date between Monday and Saturday.');
      setSelectedDate('');
      return;
    }

    setSelectedDate(val);

    // Enforce time restrictions based on chosen day
    if (dow === 6) {
      // Saturdays: Only Morning allowed
      if (preferredStartTime !== 'morning') {
        setPreferredStartTime('morning');
      }
    } else if (dow === 1 || dow === 2 || dow === 5) {
      // Mon, Tue, Fri: Morning or Afternoon only (No evenings)
      if (preferredStartTime === 'evening') {
        setPreferredStartTime('afternoon');
      }
    }
  };

  const formatStartTimeLabel = (slot: 'morning' | 'afternoon' | 'evening') => {
    switch (slot) {
      case 'morning':
        return 'Morning';
      case 'afternoon':
        return 'Afternoon';
      case 'evening':
        return 'Evening';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      setDateError('Please select a preferred date for your private spa experience.');
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          clientPhone,
          clientEmail,
          packageName: selectedPkg.name,
          guestCount,
          totalPrice,
          depositRequired,
          preferredDate: selectedDate,
          preferredTime: formatStartTimeLabel(preferredStartTime),
          notes,
        }),
      });
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const formattedTimeSlot = formatStartTimeLabel(preferredStartTime);

  const whatsappMessage = encodeURIComponent(
    `Hi The Beauty Barn, I would like to request a private spa day booking:\n\n• Package: ${selectedPkg.name}\n• Guests: ${guestCount}\n• Preferred Date: ${selectedDate || 'Flexible'}\n• Preferred Start Time: ${formattedTimeSlot}\n• Name: ${clientName}\n• Phone: ${clientPhone}\n• Email: ${clientEmail}${notes ? `\n• Notes: ${notes}` : ''}`
  );

  const emailSubject = encodeURIComponent(`Spa Day Booking Request: ${selectedPkg.name} - ${clientName}`);
  const emailBody = encodeURIComponent(
    `Hi The Beauty Barn Team,\n\nI would like to reserve a private spa day:\n\nPackage: ${selectedPkg.name}\nGuests: ${guestCount}\nPreferred Date: ${selectedDate || 'Flexible'}\nPreferred Start Time: ${formattedTimeSlot}\n\nName: ${clientName}\nPhone: ${clientPhone}\nEmail: ${clientEmail}\nSpecial Notes: ${notes || 'None'}\n\nThank you!`
  );

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
            Exclusive private garden cabin & hot tub hire for your group. Select your package, party size, and preferred start time below with real-time deposit calculation.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {submitted ? (
          <div className="text-center py-8 px-4 max-w-lg mx-auto space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-charcoal-900 font-medium mb-2">
                Spa Day Request Received!
              </h3>
              <p className="text-charcoal-800/80 text-sm leading-relaxed">
                Thank you, <strong className="text-charcoal-900">{clientName || 'Guest'}</strong>. Your booking request for <strong>{guestCount} guests</strong> on <strong>{selectedPkg.name}</strong> has been logged. Our team will verify cabin availability and contact you via {clientPhone || clientEmail} to confirm your slot and arrange your 50% securing deposit of £{depositRequired}.
              </p>
            </div>

            <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200 text-xs text-charcoal-800 space-y-2 text-left">
              <div className="flex justify-between"><span>Package:</span><strong>{selectedPkg.name}</strong></div>
              <div className="flex justify-between"><span>Party Size:</span><strong>{guestCount} Guests</strong></div>
              <div className="flex justify-between"><span>Requested Date:</span><strong>{selectedDate || 'Flexible'} ({formattedTimeSlot})</strong></div>
              <div className="flex justify-between"><span>Private Session Duration:</span><strong>{currentDuration}</strong></div>
              <div className="flex justify-between"><span>Total Experience:</span><strong>£{totalPrice}</strong></div>
              <div className="flex justify-between text-sage-800 font-bold pt-1.5 border-t border-cream-200">
                <span>50% Securing Deposit:</span>
                <span>£{depositRequired}</span>
              </div>
            </div>

            {/* Fast-Track Actions */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] uppercase tracking-wider text-charcoal-800/60 font-bold block">
                Instant Confirmation Options
              </span>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://wa.me/447535243827?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider text-center transition shadow flex items-center justify-center gap-1.5"
                >
                  <span>Fast-Track on WhatsApp ↗</span>
                </a>
                <a
                  href={`mailto:thebeautybarn.leic@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                  className="flex-1 py-3 px-4 rounded-xl border border-sage-800 text-sage-900 hover:bg-sage-50 text-xs font-semibold uppercase tracking-wider text-center transition"
                >
                  <span>Email Directly ↗</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-sage-700 hover:text-sage-900 underline pt-2 block mx-auto"
            >
              Modify or Customize Another Package
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Select Package */}
            <div className="space-y-3">
              <label className="block font-serif text-lg text-charcoal-900 font-medium">
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
                          ? 'border-sage-800 bg-sage-50/60 shadow-md ring-2 ring-sage-800/20'
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
                        <p className="text-xs text-charcoal-800/70 leading-relaxed mb-3">
                          {pkg.tagline}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-cream-200 flex items-baseline justify-between w-full">
                        <span className="text-xs text-charcoal-800/60">{pkg.minGuests}–{pkg.maxGuests} Guests</span>
                        <span className="font-serif text-lg font-bold text-sage-800">From £{pkg.pricePerPerson}<span className="text-xs font-normal text-charcoal-800/70">/pp</span></span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Party Size, Date & Preferred Start Time */}
            <div className="pt-6 border-t border-cream-200 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <label className="block font-serif text-lg text-charcoal-900 font-medium">
                  2. Party Size, Date & Start Time
                </label>
                <span className="text-xs text-bronze-700 font-medium">
                  Private Session: {currentDuration}
                </span>
              </div>

              {/* Number of Guests Row */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-charcoal-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-sage-800" />
                  <span>Number of Guests ({selectedPkg.minGuests} to {selectedPkg.maxGuests} Guests Allowed)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {[...Array(selectedPkg.maxGuests - selectedPkg.minGuests + 1)].map((_, i) => {
                    const count = selectedPkg.minGuests + i;
                    const isCurrent = guestCount === count;
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setGuestCount(count)}
                        className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition shadow-sm ${
                          isCurrent
                            ? 'bg-sage-800 text-cream-50 ring-2 ring-sage-800 font-semibold'
                            : 'bg-cream-100 text-charcoal-800 hover:bg-cream-200 border border-cream-300'
                        }`}
                      >
                        {count} {count === 1 ? 'Guest' : 'Guests'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date & Start Time Two-Column Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-charcoal-900 uppercase tracking-wider flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sage-800" />
                      Preferred Date
                    </span>
                    <span className="text-[11px] text-bronze-700 font-normal">Closed Sundays</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800 shadow-sm"
                  />
                  {dateError && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-700 bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                      <span>{dateError}</span>
                    </div>
                  )}
                  {selectedDate && !dateError && (
                    <p className="text-[11px] text-sage-800 font-medium">
                      {isSaturday && "📅 Saturday selected: Morning start times only (The Barn closes at 14:00 on Saturdays)."}
                      {isWedOrThu && "✨ Late evening available on this date (Open until 20:00)."}
                      {isMonTueFri && "🌿 Day session available (Morning or Afternoon)."}
                    </p>
                  )}
                </div>

                {/* Preferred Start Time */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-charcoal-900 uppercase tracking-wider flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sage-800" />
                      Preferred Start Time
                    </span>
                    <span className="text-[11px] text-charcoal-800/60 font-normal">Morning, Afternoon or Evening</span>
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {/* Morning */}
                    <button
                      type="button"
                      onClick={() => setPreferredStartTime('morning')}
                      className={`py-3 px-2 rounded-xl text-center transition flex flex-col items-center justify-center gap-0.5 border ${
                        preferredStartTime === 'morning'
                          ? 'bg-sage-800 text-cream-50 border-sage-800 shadow-sm font-semibold'
                          : 'bg-cream-50 text-charcoal-800 hover:bg-cream-100 border-cream-300'
                      }`}
                    >
                      <span className="text-xs font-bold">Morning</span>
                      <span className={`text-[10px] ${preferredStartTime === 'morning' ? 'text-sage-200' : 'text-charcoal-800/60'}`}>
                        Mon – Sat
                      </span>
                    </button>

                    {/* Afternoon */}
                    <button
                      type="button"
                      disabled={isSaturday}
                      onClick={() => setPreferredStartTime('afternoon')}
                      className={`py-3 px-2 rounded-xl text-center transition flex flex-col items-center justify-center gap-0.5 border ${
                        isSaturday
                          ? 'opacity-40 cursor-not-allowed bg-cream-100 border-cream-200 text-charcoal-800/50'
                          : preferredStartTime === 'afternoon'
                          ? 'bg-sage-800 text-cream-50 border-sage-800 shadow-sm font-semibold'
                          : 'bg-cream-50 text-charcoal-800 hover:bg-cream-100 border-cream-300'
                      }`}
                    >
                      <span className="text-xs font-bold">Afternoon</span>
                      <span className={`text-[10px] ${preferredStartTime === 'afternoon' ? 'text-sage-200' : 'text-charcoal-800/60'}`}>
                        {isSaturday ? 'Unavailable Sat' : 'Mon – Fri'}
                      </span>
                    </button>

                    {/* Evening */}
                    <button
                      type="button"
                      disabled={isSaturday || isMonTueFri}
                      onClick={() => setPreferredStartTime('evening')}
                      className={`py-3 px-2 rounded-xl text-center transition flex flex-col items-center justify-center gap-0.5 border ${
                        (isSaturday || isMonTueFri)
                          ? 'opacity-40 cursor-not-allowed bg-cream-100 border-cream-200 text-charcoal-800/50'
                          : preferredStartTime === 'evening'
                          ? 'bg-sage-800 text-cream-50 border-sage-800 shadow-sm font-semibold'
                          : 'bg-cream-50 text-charcoal-800 hover:bg-cream-100 border-cream-300'
                      }`}
                    >
                      <span className="text-xs font-bold">Evening</span>
                      <span className={`text-[10px] ${preferredStartTime === 'evening' ? 'text-sage-200' : 'text-bronze-600 font-medium'}`}>
                        Wed & Thu only
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Consistent Package Inclusions Checklist */}
            <div className="bg-cream-50 rounded-2xl p-5 sm:p-6 border border-cream-200 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cream-200/80 pb-3">
                <span className="text-xs font-bold text-sage-900 uppercase tracking-wider">
                  What&apos;s Included in {selectedPkg.name}:
                </span>
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" /> Exclusive to Your Group (No Strangers)
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-charcoal-800">
                {selectedPkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-bronze-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3: Lead Guest Details & Price Calculation */}
            <div className="pt-6 border-t border-cream-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-lg text-charcoal-900 font-medium">
                  3. Lead Guest Contact Details
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
                    placeholder="e.g. Birthday celebration, gluten-free afternoon tea for 1 guest..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-cream-300 bg-white text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
                  />
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-sage-900 to-charcoal-900 text-cream-50 p-6 rounded-2xl shadow-lg border border-sage-800 space-y-4">
                <span className="text-xs font-semibold text-bronze-400 uppercase tracking-widest block">
                  Summary & Securing Deposit
                </span>
                <div className="font-serif text-xl font-medium text-cream-50 pb-3 border-b border-sage-800">
                  {selectedPkg.name}
                </div>

                <div className="space-y-2 text-xs text-sage-200">
                  <div className="flex justify-between">
                    <span>{guestCount} Guests × £{currentPricePerPerson}</span>
                    <span className="font-medium text-cream-50">£{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Private Session Duration</span>
                    <span className="text-bronze-300 font-medium">{currentDuration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Preferred Start Time</span>
                    <span className="text-cream-50 font-medium">{formattedTimeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{selectedPkg.includesLodgeAndHotTub ? "Private Cabin & Hot Tub" : "Private Cabin Hire"}</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{selectedPkg.includesAfternoonTea ? "Homemade Afternoon Tea" : "Unlimited Refreshments"}</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-sage-800 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-sage-200">Total Experience Price:</span>
                    <span className="font-serif text-2xl font-bold text-cream-50">£{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-baseline p-2.5 rounded-lg bg-bronze-500/20 border border-bronze-500/40">
                    <span className="text-xs font-medium text-bronze-300">50% Securing Deposit:</span>
                    <span className="font-serif text-lg font-bold text-bronze-400">£{depositRequired}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-medium text-sm transition shadow-md flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Request Booking & Reserve Slot'}</span>
                </button>

                <p className="text-[11px] text-sage-300/80 text-center flex items-center justify-center gap-1">
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
