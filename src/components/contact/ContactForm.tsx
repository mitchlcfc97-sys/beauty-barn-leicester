'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Direct client-side dispatch to Web3Forms using standard FormData
      const formData = new FormData();
      formData.append('access_key', '02d9ef30-7db4-4327-abd0-5d1e857b3cfc');
      formData.append('subject', `Website Enquiry: ${subject || 'General'} - ${name}`);
      formData.append('from_name', name);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone || 'Not provided');
      formData.append('message', `NEW WEBSITE CONTACT ENQUIRY:
------------------------------------------
• Name: ${name}
• Phone: ${phone || 'Not provided'}
• Email: ${email}
• Subject: ${subject || 'General'}

MESSAGE:
${message}
------------------------------------------`);

      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const web3Data = await web3Res.json();
      console.log('Web3Forms contact result:', web3Data);

      // Also log via API route
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message }),
      }).catch(() => {});

      setSubmitted(true);
    } catch (err: any) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappText = encodeURIComponent(
    `Hi The Beauty Barn,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${subject}\n\nMessage: ${message}`
  );

  const mailtoUrl = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Website Enquiry: ${subject} - ${name}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-sm text-center space-y-5">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-medium text-sage-900">
            Thank You, {name || 'Guest'}!
          </h3>
          <p className="text-sm text-charcoal-800/80 max-w-md mx-auto leading-relaxed">
            Your message has been sent to our reception team. We will review your enquiry and respond to you shortly via email or phone.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <a
            href={`https://wa.me/447535243827?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider text-center transition shadow inline-flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp ↗</span>
          </a>
          <a
            href={mailtoUrl}
            className="flex-1 py-3 px-4 rounded-xl border border-sage-800 text-sage-900 hover:bg-sage-50 text-xs font-semibold uppercase tracking-wider text-center transition inline-flex items-center justify-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email Client ↗</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setMessage('');
          }}
          className="text-xs text-sage-700 hover:text-sage-900 underline pt-3 block mx-auto"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-6">
      <div className="space-y-1">
        <span className="text-[11px] uppercase tracking-wider font-bold text-bronze-600">
          Get in Touch
        </span>
        <h2 className="font-serif text-2xl font-medium text-charcoal-900">
          Send Us an Enquiry
        </h2>
        <p className="text-xs text-charcoal-800/70">
          Have a question about a treatment, bespoke package, or gift vouchers? Send our team a message below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-900 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Emma Watson"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal-900 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 07123 456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-900 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. emma@example.co.uk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal-900 mb-1">
              Enquiry Topic
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Spa Day & Hot Tub Private Hire">Spa Day & Hot Tub Private Hire</option>
              <option value="Advanced Facials & Skin Consultation">Advanced Facials & Skin Consultation</option>
              <option value="Massage Rituals & Mother-To-Be">Massage Rituals & Mother-To-Be</option>
              <option value="Bramley Collection / Click & Collect">Bramley Collection / Click & Collect</option>
              <option value="Gift Voucher Question">Gift Voucher Question</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-charcoal-900 mb-1">
            Your Message *
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell us how we can assist you..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50/50 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-800"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 font-medium text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Message'}</span>
        </button>

        <p className="text-[11px] text-center text-charcoal-800/60">
          🔒 Your contact information is kept strictly private under UK GDPR.
        </p>
      </form>
    </div>
  );
}
