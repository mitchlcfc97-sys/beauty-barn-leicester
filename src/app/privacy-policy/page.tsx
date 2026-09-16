import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Beauty Barn Leicester',
  description: 'Privacy Policy and client data protection guidelines for The Beauty Barn Leicester.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-sage-800 hover:text-sage-950 uppercase tracking-wider transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-bronze-600" /> Client Data Protection
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-charcoal-800/60">
          Last updated: September 2026 • The Beauty Barn Leicester
        </p>
      </div>

      <div className="space-y-8 text-sm text-charcoal-800/85 leading-relaxed bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">1. Information We Collect</h2>
          <p>
            When you book an appointment, purchase a gift voucher, or make an enquiry at <strong>The Beauty Barn Leicester</strong> (Hall Farm Barn, Beeby Road, Scraptoft, LE7 9SJ), we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-800">
            <li>Contact details: Your name, email address, phone number, and postal address.</li>
            <li>Consultation & Health Information: Medical history, skin conditions, allergies, and contraindications necessary to perform safe, insurance-compliant treatments.</li>
            <li>Booking records: Treatment history, dates, therapist preferences, and transactional records.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">2. How We Use Your Data</h2>
          <p>
            Your personal information is used solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-800">
            <li>Process and confirm your spa and beauty bookings via our booking system (Fresha).</li>
            <li>Ensure treatments, active cosmeceuticals, and massage therapies are safe for you.</li>
            <li>Communicate important appointment reminders, arrival gate instructions, and patch test reminders.</li>
            <li>Respond to your enquiries and provide customer support.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">3. Booking System & Third-Party Processors</h2>
          <p>
            We use <strong>Fresha</strong> as our verified salon management and booking platform. When booking online, your payment card details and booking details are securely encrypted and processed in accordance with PCI-DSS standards. We never store complete credit or debit card numbers on our local systems.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">4. Analytics & Cookies</h2>
          <p>
            Our website uses minimal analytical cookies (such as Google Analytics and Microsoft Clarity) to understand website performance and improve visitor experience. You can manage or disable cookies via your browser settings at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">5. Your Rights</h2>
          <p>
            Under UK GDPR, you have the right to access, rectify, or request deletion of your personal data held by us, subject to statutory medical and insurance record-keeping requirements. To exercise your rights, please contact us at:
          </p>
          <p className="font-medium text-sage-900 pt-1">
            Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-bronze-600 underline">{BUSINESS_INFO.email}</a><br />
            Phone: <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="text-bronze-600 underline">{BUSINESS_INFO.phone}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
