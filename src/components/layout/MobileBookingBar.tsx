'use client';

import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { useFresha } from '@/components/booking/FreshaModal';
import { BUSINESS_INFO } from '@/data/business';
import { trackPhoneCall, trackWhatsAppClick } from '@/lib/analytics';

export default function MobileBookingBar() {
  const { openFresha } = useFresha();

  const whatsappUrl = `https://wa.me/447535243827?text=${encodeURIComponent(
    'Hi The Beauty Barn, I have an enquiry about your spa packages and treatments!'
  )}`;

  return (
    <aside 
      aria-label="Quick mobile booking actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-md border-t border-cream-300 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-3 py-2"
      style={{ paddingBottom: 'max(0.65rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
          aria-label={`Call salon on ${BUSINESS_INFO.phone}`}
          onClick={() => trackPhoneCall('mobile_booking_bar')}
          className="flex flex-col items-center justify-center px-3 py-2 rounded-xl border border-cream-300 bg-white hover:bg-cream-100 text-charcoal-800 transition active:scale-95 text-[10px] font-medium min-w-[56px]"
        >
          <Phone className="w-4 h-4 text-bronze-600 mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onClick={() => trackWhatsAppClick('mobile_booking_bar')}
          className="flex flex-col items-center justify-center px-3 py-2 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition active:scale-95 text-[10px] font-semibold min-w-[68px]"
        >
          <svg className="w-4 h-4 fill-[#25D366] mb-0.5" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.28 0-7.761 3.481-7.761 7.761 0 1.37.358 2.657.983 3.774l-1.045 3.821 3.916-1.027c1.077.587 2.316.924 3.633.924 4.28 0 7.762-3.481 7.762-7.761 0-4.28-3.482-7.762-7.762-7.762z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => openFresha()}
          aria-label="Book appointment on Fresha"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-sage-800 active:bg-sage-900 text-cream-50 font-semibold text-xs uppercase tracking-wider shadow-md transition active:scale-[0.98]"
        >
          <Calendar className="w-3.5 h-3.5 text-bronze-300" />
          <span className="truncate">Book Online</span>
          <Sparkles className="w-3 h-3 text-bronze-300 flex-shrink-0" />
        </button>
      </div>
    </aside>
  );
}
