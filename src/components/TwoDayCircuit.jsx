import React from 'react';
import { ArrowRight, Sparkles, Shield, Clock, MapPin, Check } from 'lucide-react';

export default function TwoDayCircuit({ onBookCircuit }) {
  const timeline = [
    { num: "01", name: "Tirupati Origin", day: "Day 1 (Morning)", desc: "Doorstep pickup from your Tirupati hotel or railway station in sanitized AC vehicle." },
    { num: "02", name: "Kanipakam", day: "Day 1", desc: "Swayambhu Varasiddhi Vinayaka temple darshan to remove obstacles." },
    { num: "03", name: "Golden Temple", day: "Day 1 (Noon)", desc: "Sri Lakshmi Narayani Golden Temple at Sripuram, Vellore." },
    { num: "04", name: "Arunachalam", day: "Day 1 (Evening)", desc: "Annamalaiyar Shiva Agni Sthalam darshan & optional Girivalam. Night stay." },
    { num: "05", name: "Kanchipuram", day: "Day 2 (Morning)", desc: "Kamakshi Amman & Ekambareswarar temples + silk weaving tour." },
    { num: "06", name: "Tiruttani", day: "Day 2 (Afternoon)", desc: "Lord Murugan 5th Arupadaiveedu hilltop darshan." },
    { num: "07", name: "Tirupati Drop", day: "Day 2 (Night)", desc: "Smooth return drop at your hotel, station, or airport in Tirupati." }
  ];

  return (
    <section id="two-day-circuit" className="py-24 bg-ivory relative border-t border-warmBorder overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-soft/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>SIGNATURE MULTI-STATE PILGRIMAGE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-4">
            2 Day Pilgrimage Journey
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            <span className="font-semibold text-charcoal">2 Days • Multiple Temples • Complete Return Journey</span>
            <br />
            Our most popular extended spiritual route linking the grandest temples of Andhra Pradesh and Tamil Nadu.
          </p>
        </div>

        {/* Hero Visual Card for the Circuit with Arunachalam Real Photo */}
        <div className="relative rounded-3xl overflow-hidden shadow-editorial border border-warmBorder mb-12 h-72 sm:h-96 bg-charcoal group">
          <img
            src="/images/temples/Arunachalam.webp"
            alt="2 Day Sacred Circuit - Arunachalam & Southern Temples"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25" />

          {/* Overlay Badges */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-charcoal font-bold text-xs uppercase tracking-wider shadow-md border border-gold/40">
              2 DAYS • 1 NIGHT CIRCUIT
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-gold-soft font-semibold block drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                The Definitive Southern Sacred Circuit
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Tirupati → Kanipakam → Golden Temple → Arunachalam → Kanchipuram → Tiruttani → Tirupati
              </h3>
            </div>

            <button
              onClick={() => onBookCircuit && onBookCircuit({ title: "2-Day Pilgrimage Journey", journeyType: "2-Day Circuit" })}
              className="px-6 py-3 rounded-full bg-maroon-accent hover:bg-maroon-hover text-white text-xs sm:text-sm font-semibold shadow-editorial transition-all shrink-0 flex items-center space-x-1.5 self-start md:self-auto"
            >
              <span>Book 2-Day Journey</span>
              <ArrowRight className="w-4 h-4 text-gold-soft" />
            </button>
          </div>
        </div>

        {/* Horizontal Timeline Steps */}
        <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-warmBorder">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal">
              Sequential Pilgrimage Route Timeline
            </h3>
            <span className="text-xs font-semibold text-gold-dark">
              Full Dedicated Vehicle & Chauffeur
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {timeline.map((step, idx) => (
              <div
                key={idx}
                className="bg-ivory p-4 rounded-2xl border border-warmBorder flex flex-col justify-between relative group hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold font-serif text-maroon-accent">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-semibold text-charcoal-muted uppercase bg-white px-2 py-0.5 rounded border border-warmBorder">
                      {step.day}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-charcoal mb-1">
                    {step.name}
                  </h4>
                  <p className="text-[11px] text-charcoal-muted leading-snug">
                    {step.desc}
                  </p>
                </div>

                {idx < timeline.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <span className="text-gold font-bold text-xs">➔</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Inclusions Footer */}
          <div className="mt-6 pt-4 border-t border-warmBorder flex flex-wrap items-center justify-between gap-4 text-xs text-charcoal">
            <div className="flex items-center space-x-4">
              <span className="flex items-center font-medium">
                <Check className="w-3.5 h-3.5 text-gold mr-1" />
                Interstate Permits Handled
              </span>
              <span className="flex items-center font-medium">
                <Check className="w-3.5 h-3.5 text-gold mr-1" />
                Flexible Darshan & Food Stops
              </span>
              <span className="flex items-center font-medium">
                <Check className="w-3.5 h-3.5 text-gold mr-1" />
                Safe Senior Citizen Ingress
              </span>
            </div>

            <button
              onClick={() => onBookCircuit && onBookCircuit({ title: "2-Day Pilgrimage Journey", journeyType: "2-Day Circuit" })}
              className="text-xs font-bold text-maroon-accent hover:underline flex items-center"
            >
              <span>Enquire Pricing & Vehicle Availability →</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
