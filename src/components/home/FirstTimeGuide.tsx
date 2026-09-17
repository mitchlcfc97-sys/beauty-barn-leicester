'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MapPin, Clock, Shirt, Users, Calendar, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  icon: React.ReactNode;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How do I find The Beauty Barn and where do I park?",
    icon: <MapPin className="w-5 h-5 text-bronze-600" />,
    answer: "We are situated at Hall Farm Barn on Beeby Road in Scraptoft (LE7 9SJ), peacefully located between the residential village and the golf course. When you arrive, pull up to our secure gates and press the buzzer once. Please wait patiently by the gate after buzzing—our therapists may be in the middle of a treatment with clients and will open the gates for you as soon as we possibly can. Once inside, there is ample free private parking right outside our front door.",
  },
  {
    question: "What should I wear or bring with me?",
    icon: <Shirt className="w-5 h-5 text-bronze-600" />,
    answer: "For individual massages and facials: Wear whatever you are most comfortable in. We provide professional modesty draping, disposable briefs, and fluffy warm towels. For private spa packages & lodge hire: Please bring your favourite swimwear. We provide plush cosy robes, spa slippers, bath sheets, and luxury Bramley botanical toiletries.",
  },
  {
    question: "How early should I arrive before my appointment?",
    icon: <Clock className="w-5 h-5 text-bronze-600" />,
    answer: "We recommend arriving approximately 5 to 10 minutes prior to your scheduled start time. We will let you in as soon as we are ready, where you can take a seat in reception, enjoy a refreshing cold water, use the facilities, and complete any consultation details before your treatment begins.",
  },
  {
    question: "Can I book for two people or a group?",
    icon: <Users className="w-5 h-5 text-bronze-600" />,
    answer: "Yes! We specialize in duo and group experiences. We have a dedicated double treatment room for side-by-side couples massages with two therapists, as well as exclusive private hire of our wooden retreat lodge, garden, and hot tub for groups of 2 to 8 people.",
  },
  {
    question: "What is your cancellation and booking policy?",
    icon: <Calendar className="w-5 h-5 text-bronze-600" />,
    answer: "We take a 50% deposit upon booking which is strictly non-refundable. If you need to change your appointment date or time, you may reschedule with at least 48 hours notice. However, we do not accept cancellations or offer deposit refunds under any circumstances.",
  },
];

export default function FirstTimeGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl border border-cream-300 shadow-sm p-6 sm:p-10 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-100 text-sage-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-500" /> First-Time Visitor Guide
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-sage-900">
            Everything You Need To Know
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/70">
            Never visited our Scraptoft sanctuary before? Here is a quick guide to help you feel right at home before you even arrive.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-cream-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 hover:bg-cream-50/60 transition"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-sage-50 border border-cream-300 flex items-center justify-center flex-shrink-0">
                      {faq.icon}
                    </div>
                    <span className="font-serif text-sm sm:text-base font-medium text-charcoal-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-charcoal-800/60 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-bronze-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-800/80 leading-relaxed border-t border-cream-100 pl-16">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
