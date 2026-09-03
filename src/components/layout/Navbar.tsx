'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Phone, Menu, X, Gift, Calendar, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { useFresha } from '@/components/booking/FreshaModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openFresha } = useFresha();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Private Spa Days', href: '/spa-days', highlight: true },
    { name: 'Massage', href: '/treatments/massage' },
    { name: 'Advanced Facials', href: '/treatments/facials' },
    { name: 'All Treatments', href: '/treatments' },
    { name: 'Gift Vouchers', href: '/gift-vouchers' },
    { name: 'About & Story', href: '/about' },
    { name: 'Contact & Find Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md border-b border-cream-200 transition-all">
      {/* Top Notification Bar */}
      <div className="bg-sage-900 text-cream-50 py-1.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Leicester’s Exclusive Private Day Spa • </span>
            <span className="text-bronze-300">100% Private Lodge & Hot Tub Hire</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-bronze-300 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-sage-600">|</span>
            <span className="hidden md:inline text-sage-200">Scraptoft, LE7 9SJ</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl md:text-2xl font-bold tracking-tight text-sage-900 group-hover:text-bronze-500 transition">
              The Beauty Barn
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-bronze-500">
              Leicester • Exclusive Day Spa
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition ${
                  link.highlight
                    ? 'text-sage-900 font-semibold px-3 py-1.5 rounded-full bg-sage-100 hover:bg-sage-200'
                    : 'text-charcoal-800 hover:text-bronze-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/gift-vouchers"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-900 hover:text-bronze-500 px-3.5 py-2 rounded-xl border border-cream-300 hover:border-bronze-400 bg-white/80 transition shadow-sm"
            >
              <Gift className="w-3.5 h-3.5 text-bronze-500" />
              Gift Vouchers
            </Link>

            <button
              onClick={() => openFresha()}
              className="inline-flex items-center gap-2 bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-medium px-5 py-2.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-bronze-300" />
              Book Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => openFresha()}
              className="bg-sage-800 text-cream-50 text-xs font-medium px-3.5 py-2 rounded-lg shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-800 hover:bg-cream-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50 border-b border-cream-200 px-4 pt-2 pb-6 space-y-2 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-charcoal-800 hover:bg-cream-200 transition"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
          <div className="pt-4 border-t border-cream-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openFresha();
              }}
              className="w-full py-3 rounded-xl bg-sage-800 text-cream-50 text-sm font-medium flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-bronze-300" /> Book with Fresha
            </button>
            <Link
              href="/gift-vouchers"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-white border border-cream-300 text-charcoal-900 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Gift className="w-4 h-4 text-bronze-500" /> Buy Gift Vouchers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
