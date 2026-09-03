'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, ExternalLink, Sparkles, ShieldCheck, Clock } from 'lucide-react';
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

  const openFresha = (url?: string, name?: string) => {
    if (url) setActiveUrl(url);
    else setActiveUrl(FRESHA_CONFIG.directBookingUrl);
    
    if (name) setTreatmentName(name);
    else setTreatmentName('General Appointment');

    setIsOpen(true);
  };

  const closeFresha = () => {
    setIsOpen(false);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <FreshaContext.Provider value={{ isOpen, activeUrl, treatmentName, openFresha, closeFresha }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-charcoal-900/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl h-[92vh] bg-cream-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-cream-200">
            {/* Header */}
            <div className="px-6 py-4 bg-sage-900 text-cream-50 flex items-center justify-between border-b border-sage-800">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-bronze-500/20 flex items-center justify-center text-bronze-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-cream-50">
                    Book Online with Fresha
                  </h3>
                  <p className="text-xs text-sage-200 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Live Instant Booking • {treatmentName}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href={activeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center text-xs text-sage-200 hover:text-cream-50 px-3 py-1.5 rounded-lg border border-sage-700 hover:bg-sage-800 transition"
                >
                  Open in new tab <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <button
                  onClick={closeFresha}
                  className="p-2 rounded-full text-sage-200 hover:text-cream-50 hover:bg-sage-800 transition focus:outline-none"
                  aria-label="Close booking modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Fresha Iframe */}
            <div className="relative flex-1 bg-cream-100 w-full h-full">
              <iframe
                src={activeUrl}
                title="Fresha Booking Widget"
                className="w-full h-full border-0"
                allow="camera; microphone; payment"
              />
            </div>

            {/* Modal Footer Banner */}
            <div className="px-6 py-2.5 bg-cream-100 border-t border-cream-300 text-xs text-charcoal-800/80 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sage-800 font-medium">
                <Clock className="w-3.5 h-3.5" /> No pre-payment required for single standard appointments
              </span>
              <span className="text-gray-500 hidden md:inline">
                The Beauty Barn Leicester • Scraptoft, LE7 9SJ
              </span>
            </div>
          </div>
        </div>
      )}
    </FreshaContext.Provider>
  );
}
