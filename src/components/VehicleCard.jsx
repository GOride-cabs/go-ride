import React from 'react';
import { Users, Briefcase, Sparkles, Check, Info, ArrowRight } from 'lucide-react';
import { vehicles, farePolicy } from '../data/vehicles';

export default function VehicleCard({ onBookVehicle }) {
  return (
    <section id="vehicles-section" className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>PREMIUM FLEET</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-4">
            Choose Your Ride
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Comfortable vehicles for individuals, families and groups. Sanitized, air-conditioned, and steered by experienced temple-circuit chauffeurs.
          </p>
        </div>

        {/* 4 Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="editorial-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image with High Contrast Overlay */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-charcoal">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  {v.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-white text-charcoal text-[10px] font-bold px-2.5 py-1 rounded-full border border-gold/40 uppercase shadow-md">
                        {v.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <span className="text-[10px] uppercase font-semibold text-gold-soft tracking-wider block drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {v.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {v.name}
                    </h3>
                  </div>
                </div>

                {/* Pricing & Key Specs */}
                <div className="p-5">
                  <div className="flex items-baseline justify-between pb-3 mb-4 border-b border-warmBorder">
                    <div>
                      <span className="text-2xl font-serif font-bold text-charcoal">
                        {v.rateDisplay}
                      </span>
                      <span className="text-[10px] text-charcoal-muted block">
                        Base outstation rate
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-ivory px-2.5 py-1 rounded-lg border border-warmBorder">
                        <Users className="w-3.5 h-3.5 text-gold mr-1" />
                        {v.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Luggage Capacity */}
                  <div className="flex items-center text-xs text-charcoal-muted mb-4 bg-ivory p-2.5 rounded-lg border border-warmBorder">
                    <Briefcase className="w-3.5 h-3.5 text-gold mr-2 shrink-0" />
                    <span>{v.luggage}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {v.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-charcoal">
                        <Check className="w-3.5 h-3.5 text-gold mt-0.5 mr-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookVehicle && onBookVehicle(v)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal border border-warmBorder hover:border-maroon-accent transition-all duration-200 flex items-center justify-center space-x-1.5"
                >
                  <span>Select {v.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Policy Disclaimer Banner */}
        <div className="bg-card border border-warmBorder rounded-2xl p-5 text-xs text-charcoal-muted flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-editorial">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-charcoal block mb-0.5">
                {farePolicy.headline}
              </span>
              <p>{farePolicy.additionalChargesNotice}</p>
            </div>
          </div>
          <span className="text-[11px] font-medium text-charcoal bg-ivory px-3 py-1.5 rounded-lg border border-warmBorder shrink-0">
            {farePolicy.minimumKmPerDay}
          </span>
        </div>

      </div>
    </section>
  );
}
