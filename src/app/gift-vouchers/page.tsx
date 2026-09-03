'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { Gift, Sparkles, Check, Send, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { FRESHA_CONFIG } from '@/lib/utils';
import { useFresha } from '@/components/booking/FreshaModal';

export default function GiftVouchersPage() {
  const { openFresha } = useFresha();
  const [customAmount, setCustomAmount] = useState<number>(50);

  const presetAmounts = [30, 50, 75, 90, 120, 150];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bronze-500/15 text-bronze-700 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-bronze-600" /> Instant Digital & Salon Gift Vouchers
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Beauty Barn Gift Vouchers
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Treat someone special to the gift of serenity. Redeemable against any private spa package, hot tub retreat, Swedish massage, or organic skincare treatment in Leicester.
          </p>
        </div>
      </section>

      {/* Main Voucher Options */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Online Instant Purchase via Fresha */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sage-800 uppercase tracking-wider">Instant Online Delivery</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-medium">
                Buy an e-Voucher Online
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-800/70">
                Purchased securely through our Fresha voucher portal with instant email delivery to you or the recipient.
              </p>
            </div>

            {/* Quick Amount Selector */}
            <div>
              <label className="block text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-3">
                Select Voucher Value
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setCustomAmount(amount)}
                    className={`py-3 rounded-xl font-serif text-sm font-semibold transition border ${
                      customAmount === amount
                        ? 'bg-sage-800 text-cream-50 border-sage-800 shadow-sm'
                        : 'bg-cream-50 text-charcoal-900 border-cream-300 hover:bg-cream-100'
                    }`}
                  >
                    £{amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Voucher Preview Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sage-900 to-charcoal-900 text-cream-50 border border-sage-800 space-y-4 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-bronze-400">Gift Certificate</span>
                  <h4 className="font-serif text-xl font-medium text-cream-50">The Beauty Barn Leicester</h4>
                </div>
                <div className="font-serif text-3xl font-bold text-bronze-400">
                  £{customAmount}
                </div>
              </div>
              <p className="text-xs text-sage-200">Valid for 12 months from purchase on all private spa packages & salon treatments.</p>
              <div className="pt-2 border-t border-sage-800 text-[11px] text-sage-300 flex justify-between">
                <span>Location: Scraptoft, LE7 9SJ</span>
                <span>Powered by Fresha</span>
              </div>
            </div>

            <div>
              <a
                href={FRESHA_CONFIG.voucherUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-medium text-sm transition shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Purchase £{customAmount} Voucher on Fresha</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-charcoal-800/70 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Instant digital code delivered directly to email • Valid for 12 months</span>
            </div>
          </div>

          {/* In-Salon Physical Presentation Box */}
          <div className="lg:col-span-5 bg-cream-100 rounded-3xl p-8 border border-cream-300 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-bronze-600 uppercase tracking-wider">Luxury Presentation</span>
              <h3 className="font-serif text-2xl text-sage-900 font-medium">
                Physical Salon Gift Box
              </h3>
              <p className="text-xs text-charcoal-800/80 leading-relaxed">
                Prefer a physical gift voucher? Visit us at the salon by appointment to collect a beautifully presented gift voucher enclosed in our signature embossed presentation envelope and ribbon.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-charcoal-800">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-800 flex-shrink-0 mt-0.5" />
                <span>Embossed voucher with personalized message</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-800 flex-shrink-0 mt-0.5" />
                <span>Complimentary treatment brochure included</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-800 flex-shrink-0 mt-0.5" />
                <span>Collect in Scraptoft or request postal delivery</span>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-200 space-y-3">
              <a
                href="tel:07535243827"
                className="w-full py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider text-center block transition shadow-sm"
              >
                Call to Arrange Physical Voucher (07535 243827)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
