import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Heart, Shield, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-cream-100 border-t border-sage-800">
      {/* Top Value Banner */}
      <div className="border-b border-sage-800/80 bg-sage-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-sage-800/40">
            <div className="w-12 h-12 rounded-xl bg-bronze-500/20 text-bronze-400 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-cream-50">100% Private Spa Lodge</h4>
              <p className="text-xs text-sage-200">Zero other guests during your private spa day</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-sage-800/40">
            <div className="w-12 h-12 rounded-xl bg-bronze-500/20 text-bronze-400 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-cream-50">Award-Winning Treatments</h4>
              <p className="text-xs text-sage-200">Bramley British Botanicals & tailored rituals</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-sage-800/40">
            <div className="w-12 h-12 rounded-xl bg-bronze-500/20 text-bronze-400 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-cream-50">Instant Online Booking</h4>
              <p className="text-xs text-sage-200">Real-time scheduling powered by Fresha</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & About */}
        <div className="space-y-4">
          <span className="font-serif text-2xl font-bold tracking-tight text-cream-50 block">
            The Beauty Barn
          </span>
          <p className="text-xs text-sage-200 leading-relaxed">
            Leicester’s sanctuary for luxury pampering, Swedish massage, organic facials, and private hot tub spa packages. Founded by Mel and Zofia in Scraptoft.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <a
              href={BUSINESS_INFO.freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-bronze-500 text-white hover:bg-bronze-600 transition"
            >
              Book Appointments
            </a>
            <a
              href={BUSINESS_INFO.freshaStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-sage-800 hover:bg-sage-700 text-cream-50 transition border border-sage-700"
            >
              Online Shop ↗
            </a>
          </div>
        </div>

        {/* Treatment & Spa Links */}
        <div>
          <h4 className="font-serif text-sm font-semibold text-cream-50 uppercase tracking-wider mb-4">
            Treatments & Spas
          </h4>
          <ul className="space-y-2 text-xs text-sage-200">
            <li><Link href="/spa-days" className="hover:text-bronze-400 transition">Private Spa Days & Packages</Link></li>
            <li><Link href="/treatments/massage" className="hover:text-bronze-400 transition">Swedish & Hot Stone Massage</Link></li>
            <li><Link href="/treatments/massage" className="hover:text-bronze-400 transition">Couples Massage Leicester</Link></li>
            <li><Link href="/treatments/facials" className="hover:text-bronze-400 transition">Advanced Facials & Skin Hub</Link></li>
            <li><Link href="/treatments" className="hover:text-bronze-400 transition">Deluxe Bacials & Body Rituals</Link></li>
            <li><Link href="/bramley" className="hover:text-bronze-300 transition text-bronze-300 font-medium">Bramley British Botanicals</Link></li>
            <li><Link href="/gift-vouchers" className="hover:text-bronze-400 transition">Instant Gift Vouchers</Link></li>
            <li>
              <a
                href={BUSINESS_INFO.freshaStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze-300 transition text-bronze-300 font-semibold inline-flex items-center gap-1"
              >
                Online Shop & Bramley Store ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="font-serif text-sm font-semibold text-cream-50 uppercase tracking-wider mb-4">
            Opening Hours
          </h4>
          <ul className="space-y-1.5 text-xs text-sage-200">
            {BUSINESS_INFO.hours.map((h) => (
              <li key={h.day} className="flex justify-between border-b border-sage-800/40 pb-1">
                <span>{h.day}:</span>
                <span className={h.opens === 'Closed' ? 'text-bronze-300 font-medium' : 'text-cream-50 font-medium'}>
                  {h.opens === 'Closed' ? 'Closed' : `${h.opens} - ${h.closes}`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location & Contact */}
        <div>
          <h4 className="font-serif text-sm font-semibold text-cream-50 uppercase tracking-wider mb-4">
            Find Us
          </h4>
          <div className="space-y-3 text-xs text-sage-200">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-bronze-400 flex-shrink-0 mt-0.5" />
              <span>
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-bronze-400 flex-shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-bronze-400 transition">
                {BUSINESS_INFO.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-bronze-400 flex-shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-bronze-400 transition">
                {BUSINESS_INFO.email}
              </a>
            </p>
            <p className="text-[11px] text-sage-300 bg-sage-800/40 p-2.5 rounded-lg border border-sage-700/50">
              📍 <strong>Directions Note:</strong> Located on Beeby Road between the estate and the golf course. Please wait at the gate and ring the buzzer to enter.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & 301 Protection Notice */}
      <div className="border-t border-sage-800 py-6 text-xs text-sage-400 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} The Beauty Barn Leicester. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sage-300">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
