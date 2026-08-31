import React from 'react';
import { ArrowRight, Sparkles, Shield, Clock, MapPin, Check } from 'lucide-react';

export default function TwoDayContinuousJourney({ onEnquireCircuit }) {
  const circuitStops = [
    { num: "01", name: "TIRUPATI", detail: "Origin Pickup", day: "DAY 1" },
    { num: "02", name: "KANIPAKAM", detail: "Swayambhu Ganesha", day: "DAY 1" },
    { num: "03", name: "GOLDEN TEMPLE", detail: "Sripuram, Vellore", day: "DAY 1" },
    { num: "04", name: "ARUNACHALAM", detail: "Agni Lingam & Night Stay", day: "DAY 1" },
    { num: "05", name: "KANCHIPURAM", detail: "Kamakshi Amman & Silk", day: "DAY 2" },
    { num: "06", name: "TIRUTTANI", detail: "Murugan 5th Abode", day: "DAY 2" },
    { num: "07", name: "TIRUPATI", detail: "Complete Return Drop", day: "DAY 2" }
  ];

  return (
    <section id="two-days" className="py-24 bg-ivory border-b border-warmBorder relative overflow-hidden">
      
      {/* Subtle gold radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gold-soft/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="mb-14 max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark block mb-2">
            2 DAY PILGRIMAGE JOURNEY
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-charcoal tracking-tight uppercase">
            TAKE TWO DAYS.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            The definitive multi-state sacred pilgrimage connecting Andhra Pradesh and Tamil Nadu's grandest shrines with dedicated chauffeur and complete return journey.
          </p>
        </div>

        {/* Real Photograph Journey Moment: Arunachalam & Grand Temples */}
        <div className="relative rounded-3xl overflow-hidden shadow-editorial border border-warmBorder mb-12 h-72 sm:h-96 bg-charcoal group">
          <img
            src="/images/temples/Arunachalam.webp"
            alt="Arunachalam - 2 Day Complete Pilgrimage"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25" />

          {/* Badges */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-charcoal font-bold text-xs uppercase tracking-wider shadow-md border border-gold/40">
              SIGNATURE 2-DAY CIRCUIT
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <span className="text-[10px] uppercase tracking-widest text-gold-soft font-bold block drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Real Journey Photograph
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Tirupati → Kanipakam → Golden Temple → Arunachalam → Kanchipuram → Tiruttani → Tirupati
              </h3>
            </div>

            <button
              onClick={() => onEnquireCircuit({
                destination: "2-Day Complete Pilgrimage (Tirupati → Kanipakam → Golden Temple → Arunachalam → Kanchipuram → Tiruttani → Tirupati)",
                journeyType: "2 Days"
              })}
              className="px-7 py-3.5 rounded-xl bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider shadow-editorial transition-all shrink-0 flex items-center space-x-2 self-start md:self-auto"
            >
              <span>Enquire 2-Day Circuit</span>
              <ArrowRight className="w-4 h-4 text-gold-soft" />
            </button>
          </div>
        </div>

        {/* Continuous Horizontal Journey Path */}
        <div className="bg-card p-6 sm:p-10 rounded-3xl border border-warmBorder shadow-editorial">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-warmBorder">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block">
                CONTINUOUS ROUTE FLOW
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal uppercase">
                Sequential Journey Nodes
              </h4>
            </div>
            <span className="text-xs font-bold uppercase text-charcoal bg-ivory px-3 py-1.5 rounded-lg border border-warmBorder">
              Complete Return Journey
            </span>
          </div>

          {/* Continuous Node Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 relative">
            {circuitStops.map((stop, idx) => (
              <div
                key={idx}
                className="bg-ivory p-4 rounded-2xl border border-warmBorder flex flex-col justify-between relative group hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-5 h-5 rounded-full bg-charcoal text-white text-[10px] font-bold flex items-center justify-center font-serif">
                      {stop.num}
                    </span>
                    <span className="text-[9px] font-bold text-gold-dark uppercase">
                      {stop.day}
                    </span>
                  </div>

                  <h5 className="font-serif font-bold text-xs sm:text-sm text-charcoal mb-1 leading-tight">
                    {stop.name}
                  </h5>
                  <p className="text-[10px] text-charcoal-muted leading-tight">
                    {stop.detail}
                  </p>
                </div>

                {idx < circuitStops.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-gold font-bold text-xs">
                    ➔
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Standards */}
          <div className="mt-8 pt-4 border-t border-warmBorder flex flex-wrap items-center justify-between gap-4 text-xs text-charcoal font-medium">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Check className="w-3.5 h-3.5 text-gold mr-1.5" />
                Dedicated Chauffeur for 2 Full Days
              </span>
              <span className="flex items-center">
                <Check className="w-3.5 h-3.5 text-gold mr-1.5" />
                All Interstate Permits Handled
              </span>
            </div>

            <button
              onClick={() => onEnquireCircuit({
                destination: "2-Day Complete Pilgrimage",
                journeyType: "2 Days"
              })}
              className="text-xs font-bold uppercase tracking-wider text-maroon-accent hover:underline flex items-center"
            >
              <span>Enquire for 2-Day Tariff & Availability →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
