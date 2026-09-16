import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How can I book a cab?",
      a: "Send your trip details on WhatsApp (+91 85009 53558) or call us directly. We will check vehicle availability and confirm the exact fare and driver details before your journey."
    },
    {
      q: "Can I book through WhatsApp?",
      a: "Yes! WhatsApp is the quickest and easiest way. Simply send your pickup location, destination, travel date, time, and preferred vehicle (Dzire, Ertiga, Innova, or Tempo Traveller) to +91 85009 53558."
    },
    {
      q: "Do you provide Tirupati Airport pickup & drop?",
      a: "Yes, 24/7 airport pickup and drop services at Tirupati Airport (Renigunta) can be arranged smoothly based on your flight timings with flight-delay buffer."
    },
    {
      q: "Are one-way outstation drops available?",
      a: "Yes. Both one-way drops and round-trip taxi services are available from Tirupati to Chennai, Bangalore, Vellore (Golden Temple & CMC), Kanchipuram, Pondicherry, and other South Indian cities."
    },
    {
      q: "Can I book a cab for Tirumala darshan?",
      a: "Yes. We offer 24/7 dedicated ghat-road certified cabs for Tirumala with flexible waiting time while you complete your darshan and laddu collection."
    },
    {
      q: "Do you provide multi-day pilgrimage tour packages?",
      a: "Yes. Custom 2-day and multi-day spiritual circuits (e.g. Kanipakam → Golden Temple → Arunachalam → Kanchipuram → Tiruttani → Tirupati Drop) are operated with a dedicated chauffeur for the entire trip."
    },
    {
      q: "Which vehicles are available in your fleet?",
      a: "We have AC Sedans (Swift Dzire, Etios - 4+1), AC SUVs/MUVs (Maruti Ertiga - 6+1, Toyota Innova Crysta - 7+1), and luxury Tempo Travellers (12 to 17 Seater)."
    },
    {
      q: "How is the final fare confirmed?",
      a: "The final fare and inclusions are confirmed transparently upfront before booking based on your route, vehicle choice, travel date, and trip type (day rental or per-km outstation)."
    },
    {
      q: "Can I change or cancel my booking?",
      a: "Yes. Please contact N Viswanadham (+91 85009 53558) as early as possible. We offer flexible rescheduling and hassle-free adjustments."
    },
    {
      q: "Are tolls, parking, and driver allowance included?",
      a: "Inclusions depend on the specific route package. We explain all inclusions, state permit rules, and parking fees clearly before trip confirmation."
    }
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 sm:py-24 bg-white border-t border-warmBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Have Questions? We Have Answers
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
            Everything you need to know about booking Tirupati cabs, Tirumala permits, and outstation tariffs.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-warmBorder bg-card overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-label={faq.q}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-ivory/50 transition-colors cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-charcoal">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-ivory flex items-center justify-center text-charcoal transition-transform duration-300 shrink-0 border border-warmBorder ${isOpen ? 'rotate-180 bg-maroon-accent text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-warmBorder/40 pt-3 bg-ivory/30">
                    <p>{faq.a}</p>
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
