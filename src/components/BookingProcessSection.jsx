import React from 'react';
import { MessageSquare, Calculator, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function BookingProcessSection({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      title: "Share Trip Details",
      icon: MessageSquare,
      desc: "Provide your pickup location in Tirupati, destination / temple package, travel date, time, and vehicle preference via WhatsApp or direct call."
    },
    {
      num: "02",
      title: "Receive Option & Fare",
      icon: Calculator,
      desc: "We check real-time fleet availability and provide you with an exact, transparent fare with all inclusions clearly explained upfront."
    },
    {
      num: "03",
      title: "Confirm & Travel",
      icon: CheckCircle2,
      desc: "Confirm your cab booking. Our sanitized AC vehicle and experienced chauffeur arrive on time at your hotel, station, or airport."
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-ivory border-t border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Simple 3-Step Cab Booking
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            Instant WhatsApp confirmation or fast phone reservation with zero advance payment hassles.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial flex flex-col justify-between relative group hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-ivory-200 border border-warmBorder flex items-center justify-center text-maroon-accent group-hover:bg-maroon-accent group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-gold-dark/40 group-hover:text-gold-dark transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Action Strip */}
        <div className="p-6 bg-white rounded-3xl border border-warmBorder shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div>
            <span className="font-serif font-bold text-base text-charcoal block">
              Ready to Book Your Tirupati Cab?
            </span>
            <span className="text-xs text-charcoal-muted">
              Connect directly with N Viswanadham (+91 85009 53558) on WhatsApp.
            </span>
          </div>

          <a
            href={contactConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all flex items-center space-x-2 shrink-0"
          >
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
