'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ExternalLink, Sparkles, ShieldCheck, Calendar, Clock, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { FRESHA_CONFIG } from '@/lib/utils';

interface FreshaContextType {
  isOpen: boolean;
  activeUrl: string;
  treatmentName: string;
  openFresha: (url?: string, name?: string) => void;
  closeFresha: () => void;
}

const FreshaContext = createContext<FreshaContextType>({
  isOpen: false,
  activeUrl: FRESHA_CONFIG.directBookingUrl,
  treatmentName: 'General Appointment',
  openFresha: () => {},
  closeFresha: () => {},
});

export function useFresha() {
  return useContext(FreshaContext);
}

export function FreshaProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState(FRESHA_CONFIG.directBookingUrl);
  const [treatmentName, setTreatmentName] = useState('General Appointment');
  const [hasOpened, setHasOpened] = useState(false);

  const openFresha = useCallback((url?: string, name?: string) => {
    const targetUrl = url || FRESHA_CONFIG.directBookingUrl;
    const targetName = name || 'General Appointment';

    setActiveUrl(targetUrl);
    setTreatmentName(targetName);
    setHasOpened(false);
    setIsOpen(true);

    // Open Fresha in a new tab immediately
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setHasOpened(true);

    // Auto-dismiss the confirmation overlay after 4 seconds
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  }, []);

  const closeFresha = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <FreshaContext.Provider value={{ isOpen, activeUrl, treatmentName, openFresha, closeFresha }}>
      {children}

      {/* Confirmation Toast Overlay — appears briefly after Fresha opens in new tab */}
      {isOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 animate-fade-in">
          <div className="bg-sage-900 text-cream-50 rounded-2xl shadow-2xl border border-sage-800 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-bronze-400 via-bronze-500 to-sage-700" />

            <div className="px-6 py-5 flex items-start gap-4">
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                {hasOpened ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                ) : (
                  <Calendar className="w-6 h-6 text-bronze-400 animate-pulse" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base font-medium text-cream-50 leading-snug">
                  {hasOpened ? 'Fresha Booking Opened' : 'Opening Fresha...'}
                </h3>
                <p className="text-xs text-sage-200 mt-1 leading-relaxed">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    Secure booking for <strong className="text-cream-100">{treatmentName}</strong>
                  </span>
                </p>
                <p className="text-[11px] text-sage-300 mt-1.5">
                  {hasOpened
                    ? 'Your booking is ready in the new tab. Select your preferred date, time, and therapist.'
                    : 'Connecting to Fresha\'s secure scheduling portal...'}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <button
                  onClick={closeFresha}
                  className="p-1.5 rounded-lg text-sage-400 hover:text-cream-50 hover:bg-sage-800 transition"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Footer with quick actions */}
            <div className="px-6 py-3 bg-sage-800/60 border-t border-sage-800 flex items-center justify-between gap-3">
              <span className="text-[11px] text-sage-300 flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> This will close automatically
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={activeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-bronze-300 hover:text-bronze-200 px-3 py-1.5 rounded-lg bg-sage-800 hover:bg-sage-700 border border-sage-700 transition"
                >
                  Re-open Fresha <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </FreshaContext.Provider>
  );
}
