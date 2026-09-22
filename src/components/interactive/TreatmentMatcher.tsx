'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Clock, Calendar, ArrowRight, RotateCcw, CheckCircle2, Heart, Smile } from 'lucide-react';
import { useFresha } from '@/components/booking/FreshaModal';

interface MatchResult {
  title: string;
  category: string;
  duration: string;
  price: string;
  reason: string;
  highlights: string[];
  freshaUrl: string;
}

const MATCHES: Record<string, MatchResult> = {
  'relax-quick': {
    title: 'The Back, Neck & Shoulder Massage',
    category: 'Targeted Swedish Massage',
    duration: '45 mins',
    price: '£47',
    reason: 'Ideal for taking the edge off everyday posture stiffness and stress in under an hour.',
    highlights: ['Concentrated shoulder tension release', 'Warm botanical oils', 'Rapid stress reduction'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A5955238',
  },
  'relax-standard': {
    title: 'The Relaxing Full Body Massage',
    category: 'Full Body Therapeutic Massage',
    duration: '60 mins',
    price: '£55',
    reason: 'Our most popular massage. Covers legs, feet, arms, chest, neck, and full back for complete sensory unwinding.',
    highlights: ['Head-to-toe tension melting', 'Bramley botanical oils', 'Hot Stones or Bamboo upgrade available'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A7310103',
  },
  'relax-extended': {
    title: 'The Bramley Sleep Ritual',
    category: 'Restorative Holistic Immersion',
    duration: '2 hours',
    price: '£160',
    reason: 'Specifically formulated for nervous exhaustion, burnout, and overactive minds seeking profound stillness.',
    highlights: ['Dry body brushing exfoliation', 'Warm lavender oil massage', 'Craniosacral scalp & facial pressure points'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24093850',
  },
  'knots-quick': {
    title: 'The Deep Tissue Back Massage',
    category: 'Clinical Deep Tissue',
    duration: '30 mins',
    price: '£45',
    reason: 'Firm, concentrated myofascial kneading targeting chronic knots and tight upper traps.',
    highlights: ['Focused muscular trigger point work', 'Calibrated to your exact pressure preference', 'Breaks stubborn knots'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A5955241',
  },
  'knots-standard': {
    title: 'The Deep Tissue Full Body Massage',
    category: 'Full Body Neuromuscular Therapy',
    duration: '60 mins',
    price: '£60',
    reason: 'Systematic deep pressure addressing postural imbalance, tight glutes, back tightness, and tight hamstrings.',
    highlights: ['Firm, therapeutic pressure', 'Natural bamboo canes or hot stones available', 'Full muscular reset'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A18353636',
  },
  'knots-extended': {
    title: 'The Full Indulgence Ritual (+ Bamboo Upgrade)',
    category: '90-Min Face & Body Ritual',
    duration: '90 mins',
    price: '£100 (+£5 Bamboo Canes for Deeper Pressure)',
    reason: 'Our signature 90-minute pairing of full body massage and bespoke facial. The massage is inherently soothing and relaxing — simply select the Natural Bamboo Canes add-on (+£5) during booking if you want deeper myofascial pressure to work out stubborn knots.',
    highlights: [
      '45m restorative body massage + 45m bespoke botanical facial',
      'Add Natural Bamboo Canes (+£5) on Fresha for deep knot release',
      'Complete face & body reset in one appointment',
    ],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461617',
  },
  'skin-quick': {
    title: 'The Mini Bramley Facial',
    category: 'Botanical Skin Glow',
    duration: '30 mins',
    price: '£40',
    reason: 'Quick double cleanse, gentle exfoliation, hydrating botanical mask, and soothing facial massage.',
    highlights: ['Rapid skin brightening', 'Warm towel compresses', 'Perfect pre-event recharge'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24093691',
  },
  'skin-standard': {
    title: 'The Dermaplaning Glow Facial',
    category: 'Clinical Precision Exfoliation',
    duration: '60 mins',
    price: '£70',
    reason: 'Removes dull surface dead cells and fine vellus peach fuzz, leaving skin baby-soft and glowing.',
    highlights: ['Flawless makeup foundation base', 'Removes peach fuzz & dead skin', 'Instant luminous radiant tone'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A7386825',
  },
  'skin-extended': {
    title: 'The Million Dollar Facial',
    category: '10-Step Ultimate Protocol',
    duration: '60 mins',
    price: '£125',
    reason: 'Combines dermaplaning, microneedling, lymphatic drainage, and hyaluronic acid for maximum collagen stimulation.',
    highlights: ['Dermaplaning + Microneedling combined', 'Deep lymphatic toxin flush', 'Ultimate medical-grade radiant glow'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A6373754',
  },
  'pregnancy-quick': {
    title: 'The Bramley Mother-To-Be Back Massage',
    category: 'Specialist Targeted Prenatal Care',
    duration: '30 mins',
    price: '£45',
    reason: 'Features our award-winning tummy cushion so you can safely lie comfortably on your stomach to ease lower back, hip, and lumbar fatigue.',
    highlights: ['Award-winning lie-on-stomach pregnancy pillow', 'Targeted lumbar & sciatic fatigue relief', '100% obstetric-safe natural Bramley botanicals'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921',
  },
  'pregnancy-standard': {
    title: 'The Bramley Mother-To-Be Full Body Massage',
    category: 'Full Body Prenatal Care',
    duration: '60 mins',
    price: '£65',
    reason: 'Comprehensive head-to-toe prenatal massage using supportive cushioning and gentle botanical oils to soothe swollen legs, aching back, and tired hips.',
    highlights: ['Full body tension & fluid retention relief', 'Comfortable supportive positioning', 'Nourishing Bramley oils safe for mum & baby'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A27473921',
  },
  'pregnancy-extended': {
    title: 'The Mum-To-Be Luxury Pamper Packages',
    category: 'Half-Day Pregnancy Sanctuary',
    duration: '3 - 4.5 Hours',
    price: 'From £170 (Bronze £170 | Silver £215 | Gold £245)',
    reason: 'The ultimate prenatal retreat: includes luxury spa manicure & pedicure with foot soak, ergonomic pregnancy back massage, and ultra-relaxing botanical facial.',
    highlights: ['Comprehensive 3 to 4.5 hour luxury pamper', 'Luxury pedicure & manicure with warm soak', 'Pregnancy massage + custom botanical facial'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A8461547',
  },
  'duo-any': {
    title: 'Couples / Duo Relaxing Massage in Double Room',
    category: 'Side-by-Side Pampering',
    duration: '60 mins',
    price: '£110 for Two',
    reason: 'Relax together side-by-side in our private double treatment room with two therapists.',
    highlights: ['Private double room with candlelit beds', 'Two dedicated therapists', 'Perfect anniversary or birthday gift'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A167602',
  },
  'ritual-quick': {
    title: 'Dual Serenity — Face Forward, Feet First',
    category: 'Synchronised 2-Therapist Experience',
    duration: '45 mins',
    price: '£70',
    reason: 'The ultimate luxury reset in half the time: two therapists work in complete synchronicity — one delivering a bespoke botanical facial while the other pampers your feet and lower legs with scrubs and reflex massage.',
    highlights: ['Two qualified therapists working simultaneously', 'Custom botanical glow facial & scalp massage', 'Luxury lower leg & foot revival therapy'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=pkg%3A1873592',
  },
  'ritual-standard': {
    title: 'The Fireside Ritual 🍁 (Includes Luxury Take-Home Gift)',
    category: 'Limited Edition Warming Seasonal Ritual',
    duration: '90 mins',
    price: '£115',
    reason: 'Step away from the cold into comforting warmth: cinnamon & honey back polish, hot basalt stone massage, nourishing Bramley oils, warm-oil scalp therapy, crackling fireside candle, PLUS a take-home luxury Bramley gift cracker (£35 value)!',
    highlights: ['Hot stone thermal massage & cinnamon back polish', 'Warm-oil scalp therapy & gentle fireside candle', 'Includes free Bramley Raspberry Seed Oil & Gua Sha Cracker'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A29263352',
  },
  'ritual-extended': {
    title: 'The Bramley Simply Divine Ritual',
    category: 'The Pinnacle of Luxury (Near 3-Hour Escape)',
    duration: '2 Hours 45 Mins',
    price: '£190 (£380 for Double Suite)',
    reason: 'The crown jewel of The Beauty Barn. A nearly 3-hour head-to-toe immersion: full body botanical exfoliation, warm cocoon wrap, 60-minute full body massage, bespoke botanical facial, and warm oil scalp therapy.',
    highlights: ['Full body exfoliation & warm cocoon wrap', '60-min restorative body massage + bespoke facial', 'Near 3 hours of uninterrupted countryside sanctuary'],
    freshaUrl: 'https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking?offerItems=sv%3A24981589',
  },
};

export default function TreatmentMatcher() {
  const [goal, setGoal] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const { openFresha } = useFresha();

  const handleReset = () => {
    setGoal(null);
    setTime(null);
  };

  // Determine key
  let result: MatchResult | null = null;
  if (goal === 'duo') {
    result = MATCHES['duo-any'];
  } else if (goal && time) {
    const key = `${goal}-${time}`;
    result = MATCHES[key] || MATCHES['relax-standard'];
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-cream-100 via-white to-sage-50/50 rounded-3xl border border-cream-300 shadow-md p-6 sm:p-10 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> 30-Second Treatment Matcher
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
            Not Sure What To Book?
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/70">
            Tell us what your body or skin needs, and we&apos;ll match you with the perfect ritual in seconds.
          </p>
        </div>

        {/* STEP 1: GOAL */}
        {!goal && (
          <div className="space-y-4">
            <p className="text-xs font-bold text-center text-charcoal-800 uppercase tracking-wider">
              Step 1 of 2: What is your primary goal today?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => setGoal('relax')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-sage-400 hover:bg-sage-50/50 transition text-left space-y-1 group"
              >
                <span className="text-sm font-semibold text-sage-900 group-hover:text-bronze-600 transition flex items-center justify-between">
                  🌿 Deep Full-Body Relaxation
                  <ArrowRight className="w-4 h-4 text-cream-400 group-hover:text-bronze-500 transition" />
                </span>
                <p className="text-xs text-charcoal-800/70">Calm an overactive mind, ease anxiety, and completely unwind.</p>
              </button>

              <button
                onClick={() => setGoal('knots')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-sage-400 hover:bg-sage-50/50 transition text-left space-y-1 group"
              >
                <span className="text-sm font-semibold text-sage-900 group-hover:text-bronze-600 transition flex items-center justify-between">
                  💪 Stubborn Knots & Muscle Tension
                  <ArrowRight className="w-4 h-4 text-cream-400 group-hover:text-bronze-500 transition" />
                </span>
                <p className="text-xs text-charcoal-800/70">Relieve desk posture aches, tight traps, lumbar fatigue, and glute knots.</p>
              </button>

              <button
                onClick={() => setGoal('skin')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-sage-400 hover:bg-sage-50/50 transition text-left space-y-1 group"
              >
                <span className="text-sm font-semibold text-sage-900 group-hover:text-bronze-600 transition flex items-center justify-between">
                  ✨ Glowing, Refreshed & Clear Skin
                  <ArrowRight className="w-4 h-4 text-cream-400 group-hover:text-bronze-500 transition" />
                </span>
                <p className="text-xs text-charcoal-800/70">Hydrate dull skin, smooth texture, remove peach fuzz, or target breakouts.</p>
              </button>

              <button
                onClick={() => setGoal('ritual')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-bronze-400 hover:bg-bronze-50/30 transition text-left space-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-bronze-500/10 text-bronze-700 text-[9px] font-bold uppercase tracking-wider">
                  Extra Special
                </div>
                <span className="text-sm font-semibold text-sage-900 group-hover:text-bronze-600 transition flex items-center justify-between pr-14">
                  👑 Signature Rituals & Luxury
                  <ArrowRight className="w-4 h-4 text-cream-400 group-hover:text-bronze-500 transition" />
                </span>
                <p className="text-xs text-charcoal-800/70">Multi-step sensory escapes, hot basalt stones, body wraps, and take-home gifts.</p>
              </button>

              <button
                onClick={() => setGoal('pregnancy')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-sage-400 hover:bg-sage-50/50 transition text-left space-y-1 group"
              >
                <span className="text-sm font-semibold text-sage-900 group-hover:text-bronze-600 transition flex items-center justify-between">
                  🤰 Mother-To-Be Care (Pregnancy)
                  <ArrowRight className="w-4 h-4 text-cream-400 group-hover:text-bronze-500 transition" />
                </span>
                <p className="text-xs text-charcoal-800/70">Safe relief lying comfortably on your stomach with our specialist pillow.</p>
              </button>

              <button
                onClick={() => setGoal('duo')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-sage-400 hover:bg-sage-50/50 transition text-left space-y-1 group"
              >
                <span className="text-sm font-semibold text-sage-900 group-hover:text-bronze-600 transition flex items-center justify-between">
                  🥂 Side-by-Side Couple or Duo Pamper
                  <ArrowRight className="w-4 h-4 text-cream-400 group-hover:text-bronze-500 transition" />
                </span>
                <p className="text-xs text-charcoal-800/70">Side-by-side treatments in our double room with two dedicated therapists.</p>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DURATION (Only if not pregnancy or duo) */}
        {goal && !result && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                Step 2 of 2: How much time do you have?
              </p>
              <button
                onClick={handleReset}
                className="text-xs text-sage-800 hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Change Goal
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setTime('quick')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-sage-400 hover:bg-sage-50/50 transition text-center space-y-1.5"
              >
                <span className="text-xs uppercase font-bold text-bronze-600 block">
                  {goal === 'ritual' ? '45 mins' : '30 – 45 mins'}
                </span>
                <p className="font-serif text-base font-semibold text-charcoal-900">
                  {goal === 'ritual' ? 'Dual Serenity (45m)' : 'Quick Recharge'}
                </p>
                <p className="text-[11px] text-charcoal-800/70">
                  {goal === 'ritual' ? 'Synchronised 2-therapist facial & foot pamper.' : 'Focused, targeted therapy that fits into a busy schedule.'}
                </p>
              </button>

              <button
                onClick={() => setTime('standard')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-sage-400 hover:bg-sage-50/50 transition text-center space-y-1.5"
              >
                <span className="text-xs uppercase font-bold text-bronze-600 block">
                  {goal === 'ritual' ? '90 mins' : '60 mins'}
                </span>
                <p className="font-serif text-base font-semibold text-charcoal-900">
                  {goal === 'ritual' ? 'The Fireside Ritual 🍁' : 'Full Immersion'}
                </p>
                <p className="text-[11px] text-charcoal-800/70">
                  {goal === 'ritual' ? 'Hot stones, honey polish, and free Bramley gift.' : 'The classic duration for unhurried head-to-toe care.'}
                </p>
              </button>

              <button
                onClick={() => setTime('extended')}
                className="p-4 rounded-2xl border border-cream-300 bg-white hover:border-sage-400 hover:bg-sage-50/50 transition text-center space-y-1.5"
              >
                <span className="text-xs uppercase font-bold text-bronze-600 block">
                  {goal === 'ritual' ? '2h 45m' : '90+ mins'}
                </span>
                <p className="font-serif text-base font-semibold text-charcoal-900">
                  {goal === 'ritual' ? 'The Simply Divine (2h 45m)' : 'Deep Sanctuary'}
                </p>
                <p className="text-[11px] text-charcoal-800/70">
                  {goal === 'ritual' ? 'Full body polish, cocoon wrap, massage & facial.' : 'The ultimate indulgent reset for pure restorative calm.'}
                </p>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: MATCHED RESULT */}
        {result && (
          <div className="space-y-6 pt-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-sage-600/30 shadow-md space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> 98% Match For You
                </span>
                <button
                  onClick={handleReset}
                  className="text-xs text-charcoal-800/60 hover:text-sage-900 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Try Another Goal
                </button>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold block">
                  {result.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900 mt-1">
                  {result.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-800/80 mt-2 leading-relaxed">
                  {result.reason}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {result.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-charcoal-800/80 bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage-700 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Extra Special Upsell Banner */}
              {goal !== 'ritual' && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-cream-100 to-amber-500/10 border border-amber-300/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5 text-center sm:text-left">
                    <span className="font-serif font-bold text-sage-900 flex items-center gap-1.5 justify-center sm:justify-start">
                      <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
                      Looking for something extra special?
                    </span>
                    <p className="text-charcoal-700">
                      Explore our <strong>Signature Head-to-Toe Rituals</strong> — including the limited-edition Fireside Ritual 🍁 (with free Bramley gift cracker) and our near 3-hour Simply Divine escape.
                    </p>
                  </div>
                  <Link
                    href="/rituals"
                    className="px-4 py-2 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 font-semibold text-[11px] whitespace-nowrap transition shadow-sm flex-shrink-0"
                  >
                    Explore All Rituals →
                  </Link>
                </div>
              )}

              <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-charcoal-800/60">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {result.duration}</span>
                    <span>•</span>
                    <span className="font-serif text-lg font-bold text-sage-900">{result.price}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {goal === 'pregnancy' && (
                    <Link
                      href="/pregnancy"
                      className="px-5 py-3 rounded-xl border border-sage-800 text-sage-900 hover:bg-sage-50 text-xs font-semibold uppercase tracking-wider transition inline-flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
                      View All Pregnancy Offerings
                    </Link>
                  )}
                  <button
                    onClick={() => openFresha(result.freshaUrl, result.title)}
                    className="px-6 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                    Book This Treatment on Fresha
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
