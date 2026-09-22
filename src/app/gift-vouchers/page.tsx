'use client';

import React from 'react';
import { Gift, Sparkles, Check, Send, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { FRESHA_CONFIG } from '@/lib/utils';
import { useFresha } from '@/components/booking/FreshaModal';
import { trackGiftVoucherClick, trackPhoneCall } from '@/lib/analytics';

export default function GiftVouchersPage() {
  const { openFresha } = useFresha();

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

            {/* Voucher Preview Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sage-900 to-charcoal-900 text-cream-50 border border-sage-800 space-y-4 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-bronze-400">Digital Gift Certificate</span>
                  <h3 className="font-serif text-2xl font-medium text-cream-50 mt-1">The Beauty Barn Leicester</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-sage-300 block">Values from</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-bronze-400">£30+</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-sage-200 leading-relaxed">
                Choose any custom or preset amount and select your digital card design directly at checkout. Valid for 12 months on all private spa days, hot tub packages, massages, and organic facials.
              </p>
              <div className="pt-3 border-t border-sage-800/80 text-[11px] text-sage-300 flex flex-wrap justify-between gap-2">
                <span>📍 Scraptoft, LE7 9SJ</span>
                <span>✨ Instant Email Delivery</span>
                <span>🔒 Powered by Fresha</span>
              </div>
            </div>

            <div>
              <a
                href={FRESHA_CONFIG.voucherUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGiftVoucherClick('digital_fresha')}
                className="w-full py-4 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-semibold text-sm transition shadow-md flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
              >
                <span>Choose Amount & Buy on Fresha</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-charcoal-800/70 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Instant digital voucher code emailed directly to you or your recipient</span>
            </div>
          </div>

          {/* In-Salon Physical Gift Voucher Envelope */}
          <div className="lg:col-span-5 bg-cream-100 rounded-3xl p-8 border border-cream-300 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-bronze-600 uppercase tracking-wider">In-Salon Collection</span>
              <h3 className="font-serif text-2xl text-sage-900 font-medium">
                Physical Gift Voucher Envelope
              </h3>
              <p className="text-xs text-charcoal-800/80 leading-relaxed">
                Prefer a physical gift voucher? Visit us at the salon by appointment to collect a gift voucher enclosed in an envelope.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-charcoal-800">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-800 flex-shrink-0 mt-0.5" />
                <span>Gift voucher in an envelope with personalized message</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-800 flex-shrink-0 mt-0.5" />
                <span>Collect in person from our Scraptoft salon by appointment</span>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-200 space-y-2.5">
              <button
                onClick={() => openFresha('https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A25577891', 'Gift Voucher Purchase (In Salon)')}
                className="w-full py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider text-center block transition shadow-sm"
              >
                Book 15-Min Collection Slot on Fresha
              </button>
              <a
                href="tel:07535243827"
                onClick={() => trackPhoneCall('other')}
                className="w-full py-2.5 rounded-xl border border-sage-300 text-sage-900 text-xs font-semibold uppercase tracking-wider text-center block hover:bg-cream-200 transition"
              >
                Or Call to Arrange (07535 243827)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
