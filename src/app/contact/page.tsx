import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Contact & Location | The Beauty Barn Leicester',
  description:
    'Find The Beauty Barn Leicester in Scraptoft, LE7 9SJ. Opening hours, phone number 07535 243827, directions, and buzzer entry guidelines.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-bronze-500" /> Scraptoft, Leicestershire
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Contact & Directions
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            We operate strictly by appointment to ensure complete privacy for all our guests. Here is how to find us, get in touch, or book your visit.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact & Hours Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-medium text-charcoal-900">
                Salon Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-bronze-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-charcoal-900">Address:</strong>
                    <span>{BUSINESS_INFO.address.street}</span><br />
                    <span>{BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.city}</span><br />
                    <span className="font-semibold text-sage-900">{BUSINESS_INFO.address.postalCode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-bronze-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-charcoal-900">Direct Phone:</strong>
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-bronze-600 transition font-medium">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-bronze-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-charcoal-900">Email:</strong>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-bronze-600 transition">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Buzzer Notice with Real Gate Photo */}
              <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200 text-xs text-charcoal-800/80 space-y-3">
                <strong className="text-sage-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Arrival & Gate Instructions
                </strong>
                <div className="flex items-center gap-3">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-cream-300">
                    <Image
                      src="/images/barn-gate-entrance.jpg"
                      alt="The Beauty Barn Gate Entrance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="leading-relaxed">
                    The barn is located on Beeby Road between the housing development and Scraptoft Golf Club. Upon arrival at the wooden gate, please press the buzzer on the timber post to be admitted. Free private on-site parking is available.
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="pt-4 border-t border-cream-200 space-y-2">
                <h3 className="font-serif text-sm font-semibold text-charcoal-900 uppercase tracking-wider">
                  Opening Hours
                </h3>
                <ul className="space-y-1.5 text-xs text-charcoal-800">
                  {BUSINESS_INFO.hours.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-cream-100 pb-1">
                      <span>{h.day}:</span>
                      <span className={h.opens === 'Closed' ? 'text-bronze-600 font-medium' : 'font-medium'}>
                        {h.opens === 'Closed' ? 'Closed' : `${h.opens} - ${h.closes}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Map & Booking Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-medium text-charcoal-900">
                Interactive Location Map
              </h2>
              <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-cream-300 shadow-inner">
                <iframe
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Beauty Barn Scraptoft Map"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=The+Beauty+Barn+Leicester+LE7+9SJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider text-center transition shadow-sm"
                >
                  Get Directions in Google Maps
                </a>
                <a
                  href={BUSINESS_INFO.freshaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold uppercase tracking-wider text-center transition shadow-sm"
                >
                  Book Instant Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
