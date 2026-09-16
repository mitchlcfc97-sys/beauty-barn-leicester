import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft, ShieldAlert, CheckCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Terms & Conditions & Booking Policy | The Beauty Barn Leicester',
  description: 'Booking terms, 50% non-refundable deposit, 48-hour reschedule policy, and arrival instructions for The Beauty Barn Leicester.',
};

export default function TermsPage() {
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
          <FileText className="w-3.5 h-3.5 text-bronze-600" /> Salon & Spa Guidelines
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
          Terms & Booking Conditions
        </h1>
        <p className="text-xs text-charcoal-800/60">
          Last updated: September 2026 • The Beauty Barn Leicester
        </p>
      </div>

      <div className="space-y-8 text-sm text-charcoal-800/85 leading-relaxed bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm">
        {/* Deposit & Cancellation Policy */}
        <section className="space-y-3 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <h2 className="font-serif text-lg font-bold text-amber-950 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
            1. Booking Deposit & Cancellation Policy
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-900 leading-relaxed">
            We require a <strong>50% deposit</strong> upon booking to secure your appointment or private spa package.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-800">
            <li><strong>Non-refundable:</strong> All deposits are strictly non-refundable.</li>
            <li><strong>Rescheduling:</strong> You may reschedule your appointment with at least <strong>48 hours&apos; notice</strong>, and your deposit will be transferred to your new date.</li>
            <li><strong>Cancellations / No-Shows:</strong> Appointments cancelled with less than 48 hours&apos; notice or missed appointments will forfeit the 50% deposit.</li>
          </ul>
        </section>

        {/* Arrival & Entry */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">2. Arrival & Gate Entry Instructions</h2>
          <p>
            The Beauty Barn operates as an exclusive, private countryside sanctuary. To protect the privacy and relaxation of guests having treatments:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-800">
            <li><strong>Arrival Time:</strong> Please arrive 5 to 10 minutes prior to your treatment time.</li>
            <li><strong>Buzzer Entry:</strong> Upon arrival at the wooden entrance gate on Beeby Road, please <strong>buzz the bell on the timber post once</strong>. Please wait patiently at the gate — our team will open the electric gate as soon as we can, as we may be completing a treatment with a client.</li>
            <li><strong>Reception:</strong> Once admitted, you are welcome to take a seat in reception, use the restroom facilities, and enjoy fresh iced water while your therapist prepares your room.</li>
          </ul>
        </section>

        {/* Patch Testing */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">3. Patch Testing Requirements</h2>
          <p>
            For your safety and insurance compliance, all new clients having lash lifts, brow lamination, or tinting must undergo a quick patch test at least <strong>24 hours prior</strong> to the appointment. Treatments cannot proceed without a valid patch test on file.
          </p>
        </section>

        {/* Bramley Products & Click and Collect */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">4. Bramley Products & Click & Collect</h2>
          <p>
            All Bramley botanical products purchased via our online store are available for <strong>Click & Collect only</strong> (no home delivery). To collect your items or browse the boutique in person, please contact us beforehand to arrange an appointment time, ensuring a team member is free to assist you.
          </p>
        </section>

        {/* Health & Pregnancy */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-sage-900">5. Health & Pregnancy Consultations</h2>
          <p>
            Please notify us during booking if you are pregnant, have high blood pressure, active skin conditions, or any medical concerns. Pregnancy treatments can be safely performed after the first trimester (12 weeks).
          </p>
        </section>

        {/* Contact info */}
        <section className="space-y-2 pt-4 border-t border-cream-200">
          <p className="text-xs text-charcoal-800/80">
            If you have any questions regarding our terms, please get in touch with our reception team:
          </p>
          <p className="font-medium text-sage-900 text-xs">
            Phone / WhatsApp: <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="text-bronze-600 underline">{BUSINESS_INFO.phone}</a> • Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-bronze-600 underline">{BUSINESS_INFO.email}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
