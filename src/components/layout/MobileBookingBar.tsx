'use client';

import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { useFresha } from '@/components/booking/FreshaModal';
import { BUSINESS_INFO } from '@/data/business';

export default function MobileBookingBar() {
  const { openFresha } = useFresha();

  return (
    <aside 
      aria-label="Quick mobile booking actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-md border-t border-cream-300 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-3 py-2.5"
      style={{ paddingBottom: 'max(0.65rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
          aria-label={`Call salon on ${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center px-3.5 py-2 rounded-xl border border-cream-300 bg-white hover:bg-cream-100 text-charcoal-800 transition active:scale-95 text-[10px] font-medium min-w-[68px]"
        >
          <Phone className="w-4 h-4 text-bronze-600 mb-0.5" />
          <span>Call</span>
        </a>

        <button
          onClick={() => openFresha()}
          aria-label="Book appointment on Fresha"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sage-800 active:bg-sage-900 text-cream-50 font-semibold text-xs uppercase tracking-wider shadow-md transition active:scale-[0.98]"
        >
          <Calendar className="w-4 h-4 text-bronze-300" />
          <span>Book Appointment</span>
          <Sparkles className="w-3.5 h-3.5 text-bronze-300 ml-0.5" />
        </button>
      </div>
    </aside>
  );
}
