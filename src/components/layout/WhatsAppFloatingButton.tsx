'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/447535243827?text=${encodeURIComponent(
    'Hi The Beauty Barn, I have an enquiry about your private spa packages and treatments!'
  )}`;

  return (
    <aside aria-label="WhatsApp live chat support" className="hidden md:block fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-2xl border border-cream-300 text-charcoal-900 transition-all">
          <div className="flex items-start justify-between pb-3 border-b border-cream-200">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-serif font-bold text-sm">
                  BB
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-charcoal-900 leading-tight">The Beauty Barn</h4>
                <p className="text-[10px] text-emerald-700 font-medium">Online • Usually replies quickly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-charcoal-800/40 hover:text-charcoal-800 p-0.5 rounded-md"
              aria-label="Close chat preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-charcoal-800 space-y-1.5">
            <p className="bg-cream-100 p-2.5 rounded-xl rounded-tl-sm text-xs leading-relaxed">
              Hello! 👋 How can we help you today? Ask us about our private spa cabin availability, packages, or treatments!
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition transform active:scale-95"
          >
            <span>Start WhatsApp Chat</span>
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.28 0-7.761 3.481-7.761 7.761 0 1.37.358 2.657.983 3.774l-1.045 3.821 3.916-1.027c1.077.587 2.316.924 3.633.924 4.28 0 7.762-3.481 7.762-7.761 0-4.28-3.482-7.762-7.762-7.762z" />
            </svg>
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp conversation"
        className="group flex items-center gap-2.5 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.28 0-7.761 3.481-7.761 7.761 0 1.37.358 2.657.983 3.774l-1.045 3.821 3.916-1.027c1.077.587 2.316.924 3.633.924 4.28 0 7.762-3.481 7.762-7.761 0-4.28-3.482-7.762-7.762-7.762z" />
        </svg>
        <span className="text-xs font-bold tracking-wide">Chat on WhatsApp</span>
      </button>
    </aside>
  );
}
