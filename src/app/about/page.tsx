import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Heart, Users, Shield, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { TEAM_MEMBERS } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Story & Team | The Beauty Barn Leicester',
  description:
    'Learn about Mel & Zofia, the founders of The Beauty Barn Leicester. Created in 2020 in Scraptoft to provide a truly private, luxury day spa and salon experience.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> Scraptoft, Leicester
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-sage-900">
            Our Story & Philosophy
          </h1>
          <p className="text-sm sm:text-base text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed">
            Born from friendship, family, and a bold vision to create Leicester's only 100% private day spa retreat.
          </p>
        </div>

        {/* 3 Real Barn Photos */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/barn-feature.jpg"
              alt="Mel & Zofia, Co-Founders of The Beauty Barn Leicester"
              fill
              className="object-cover object-top group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">The Founders</span>
              <p className="font-serif text-base font-medium">Mel & Zofia</p>
            </div>
          </div>

          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/interior-barn.jpg"
              alt="The Beauty Barn reception lounge with Chesterfield sofa and exposed brick"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">The Sanctuary</span>
              <p className="font-serif text-base font-medium">Reception & Lounge</p>
            </div>
          </div>

          <div className="relative h-72 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/bramley-products-shelf.jpg"
              alt="Bramley botanicals and certified achievement certificates"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">Certified Therapists</span>
              <p className="font-serif text-base font-medium">Bramley Botanical Magic</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-md space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-bronze-600 uppercase tracking-widest">Founded in 2020</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
                From a Late-Night Dream to Leicester's Favourite Sanctuary
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                The Beauty Barn Leicester was born from two sisters-in-law having an ambitious dream and courage from a bottle of prosecco one late evening!
              </p>
              <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                Mel and Zofia had both trained and worked professionally in beauty from the moment they left college. When 2020 hit, they joined forces with an ambitious plan to build their own bespoke countryside spa & salon.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                After months of painting, knocking down walls, upcycling rustic furniture, and creating the private hot tub garden lodge, The Beauty Barn officially opened its doors on <strong>1st August 2020</strong>.
              </p>
            </div>

            <div className="md:col-span-5 bg-cream-100 p-6 rounded-2xl border border-cream-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sage-800 text-cream-50 flex items-center justify-center">
                <Heart className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900">
                Our Core Promise
              </h3>
              <p className="text-xs text-charcoal-800/80 leading-relaxed">
                "We wanted to build a place where clients never feel rushed, never have to share a hot tub with strangers, and leave feeling genuinely rejuvenated from head to toe."
              </p>
              <div className="pt-2 text-xs font-semibold text-sage-900">
                — Mel & Zofia, Co-Founders
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-cream-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
              <span className="font-serif text-3xl font-bold text-sage-900 block mb-1">100%</span>
              <span className="text-xs font-medium text-charcoal-800/70">Private Spa Hire</span>
            </div>
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
              <span className="font-serif text-3xl font-bold text-sage-900 block mb-1">3,000+</span>
              <span className="text-xs font-medium text-charcoal-800/70">3,000+ Five-Star Reviews</span>
            </div>
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
              <span className="font-serif text-3xl font-bold text-sage-900 block mb-1">2020</span>
              <span className="text-xs font-medium text-charcoal-800/70">Established in Scraptoft</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRAMLEY BOTANICAL PHILOSOPHY & IN-SALON STORE */}
      <section id="bramley" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-cream-100 via-white to-sage-50/50 rounded-3xl border border-cream-300 shadow-sm p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md border border-cream-300 group">
            <Image
              src="/images/bramley-products-shelf.jpg"
              alt="Bramley botanical products shelf and official therapist achievement certificates"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block">
                Official Stockist & Partner
              </span>
              <p className="font-serif text-lg font-medium">British Botanicals In-Salon</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> The Bramley Connection
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
              Naturally Derived British Botanicals in Every Treatment
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              We proudly partner with <strong>Bramley</strong>, a luxury bath, body, and home collection founded in the British countryside. Handcrafted with 100% natural, biodegradable ingredients and therapeutic essential oils, Bramley is certified vegan, cruelty-free, and packaged in recyclable biopolymer bottles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-cream-200/80 space-y-1">
                <span className="text-xs font-bold text-sage-900 block">In Our Treatments</span>
                <p className="text-[11px] text-charcoal-800/70 leading-relaxed">
                  Infused into our sensory opening inhalation rituals, warm Swedish massage oils, cranberry body scrubs, and soothing lavender sleep therapies.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-cream-200/80 space-y-1">
                <span className="text-xs font-bold text-sage-900 block">Take The Spa Home</span>
                <p className="text-[11px] text-charcoal-800/70 leading-relaxed">
                  Fall in love with your treatment aroma? We stock a curated boutique of Bramley body washes, soothing sleep pillow mists, hand lotions, and candles to purchase in-salon.
                </p>
              </div>
            </div>

            <p className="text-xs text-charcoal-800/70 italic pt-1">
              ✨ Perfect for treating yourself on the day of your visit, or packaging alongside a Beauty Barn gift voucher for birthdays and celebrations.
            </p>

            <div className="pt-2">
              <Link
                href="/bramley"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 transition shadow-sm"
              >
                Explore Full Bramley Range & Rituals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FRESHA AWARD */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#5b5bd6]/10 via-[#6e6ede]/5 to-cream-50 rounded-3xl border border-[#5b5bd6]/25 p-8 flex flex-col sm:flex-row items-center gap-8">
          <div className="flex items-end gap-2 flex-shrink-0">
            {['2023', '2025', '2026'].map((year) => (
              <div key={year} className="flex flex-col items-center gap-1">
                <img
                  src="/images/fresha-best-in-class.png"
                  alt={`Fresha Best in Class ${year}`}
                  className="w-16 h-16 object-contain drop-shadow-md"
                />
                <span className="text-[10px] font-bold text-[#5b5bd6] tracking-wider">{year}</span>
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#5b5bd6] font-bold">Award Recognition</span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-sage-900">
              Fresha Best in Class — 2023, 2025 & 2026
            </h3>
            <p className="text-xs text-charcoal-800/70 leading-relaxed">
              Fresha&apos;s <strong>Best in Class</strong> is the platform&apos;s highest accolade, recognised for our exceptional star rating, volume of verified reviews, and online booking performance. Winning three times reflects our unwavering commitment to every client who walks through our barn doors.
            </p>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-bronze-600 font-bold">
            The Hearts & Hands of The Barn
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sage-900">
            Meet Our Dedicated Team
          </h2>
          <p className="text-sm text-charcoal-800/80 leading-relaxed">
            Our qualified, compassionate therapists are here to make sure you never feel rushed and leave feeling genuinely restored from head to toe.
          </p>
        </div>

        {/* Full Team Lineup Photo */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-cream-300 max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/11]">
          <Image
            src="/images/team-full-lineup.jpg"
            alt="The Beauty Barn Leicester therapist team outside the retreat lodge"
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-300 block mb-0.5">
                Hall Farm Barn, Scraptoft
              </span>
              <p className="font-serif text-xl sm:text-2xl font-semibold">
                Our Award-Winning Therapist Team
              </p>
              <p className="text-xs text-cream-200/90 hidden sm:block mt-0.5">
                Level 3 & 4 qualified specialists passionate about your restorative care.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-bronze-300" /> 8 Dedicated Therapists
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm flex flex-col hover:shadow-md transition duration-300"
            >
              {/* Photo */}
              <div className="relative h-80 w-full overflow-hidden bg-cream-100 group">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at The Beauty Barn Leicester`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">{member.name}</h3>
                  <p className="text-xs font-medium text-cream-200 mt-0.5">{member.role}</p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {member.bio.map((paragraph, i) => (
                    <p key={i} className="text-xs text-charcoal-800/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-4 border-t border-cream-200 space-y-3">
                  {member.favouriteTreatment && (
                    <div className="bg-cream-50 rounded-xl p-3 border border-cream-200/80">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600 block">
                        Favourite Treatment
                      </span>
                      <span className="text-xs font-semibold text-sage-900 mt-0.5 block">
                        {member.favouriteTreatment}
                      </span>
                    </div>
                  )}

                  {member.specialties && member.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {member.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full bg-sage-50 text-sage-800 text-[10px] font-medium border border-sage-200/60"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-serif text-3xl font-medium text-sage-900">Ready to Experience The Barn?</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/spa-days"
            className="px-8 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-900 text-cream-50 text-xs font-semibold uppercase tracking-wider transition shadow-md"
          >
            Explore Private Spa Days
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl bg-white border border-cream-300 text-charcoal-900 text-xs font-semibold uppercase tracking-wider hover:bg-cream-100 transition"
          >
            Find Our Scraptoft Location
          </Link>
        </div>
      </section>
    </div>
  );
}
