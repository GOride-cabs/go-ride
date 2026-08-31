import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, ArrowRight } from 'lucide-react';
import { packages } from '../data/packages';

export default function SignatureJourney({ onPlanJourney }) {
  const signaturePkg = packages.find(p => p.id === 'the-southern-sacred-circuit') || packages[2];

  return (
    <section className="py-24 bg-ivory-200/60 border-y border-warmBorder relative overflow-hidden">
      
      {/* Subtle gold aura */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-soft/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>SIGNATURE 2-DAY PILGRIMAGE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal tracking-tight mb-4">
            The Southern Sacred Circuit
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            An auspicious two-day, one-night sacred journey connecting Andhra Pradesh and Tamil Nadu's most revered temples in supreme comfort.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Visual Showcase & Inclusions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-editorial border border-warmBorder group bg-charcoal">
              <img
                src={signaturePkg.image}
                alt="Arunachalam & Grand Temples of the South"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
              
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-white text-charcoal font-bold text-xs tracking-wider uppercase shadow-md border border-gold/40">
                  {signaturePkg.durationBadge}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <p className="text-xs uppercase tracking-widest text-gold-soft font-semibold mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  6 Iconic Destinations
                </p>
                <h3 className="font-serif text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Tirupati • Kanipakam • Vellore • Arunachalam • Kanchi • Tiruttani
                </h3>
              </div>
            </div>

            {/* Trip Inclusions Card */}
            <div className="bg-card p-6 rounded-2xl border border-warmBorder shadow-editorial space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                Trip Comfort Standards
              </h4>
              <ul className="text-xs sm:text-sm text-charcoal space-y-2.5">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2.5" />
                  Dedicated interstate chauffeur assigned for the full 2 days
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2.5" />
                  Spacious air-conditioned MPV / Sedan with flexible halting
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2.5" />
                  Doorstep pickup and return drop at your Tirupati stay
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onPlanJourney(signaturePkg)}
                  className="w-full py-3.5 px-5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl font-semibold text-xs sm:text-sm shadow-editorial transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Plan This Journey</span>
                  <ArrowRight className="w-4 h-4 text-gold-soft" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Timeline Itinerary */}
          <div className="lg:col-span-7 bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-warmBorder">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                  2-Day Pilgrimage Itinerary
                </h3>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  Thoughtfully paced for pooja timings and comfortable travel
                </p>
              </div>
              <Link
                to={`/packages/${signaturePkg.slug}`}
                className="text-xs font-semibold text-maroon-accent hover:underline hidden sm:inline-flex items-center"
              >
                View Full Itinerary →
              </Link>
            </div>

            {/* Vertical Timeline with Muted Gold line */}
            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-3 before:w-0.5 before:bg-gold-soft">
              {signaturePkg.stops.map((stop, index) => (
                <div key={index} className="relative group">
                  
                  {/* Timeline Dot Icon */}
                  <div className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-gold group-hover:border-maroon-accent group-hover:scale-110 transition-all flex items-center justify-center shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-gold group-hover:bg-maroon-accent" />
                  </div>

                  <div className="bg-ivory group-hover:bg-ivory-200/70 p-4 rounded-xl border border-warmBorder transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-charcoal border border-warmBorder">
                          {stop.day}
                        </span>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-charcoal group-hover:text-maroon-accent transition-colors">
                          {stop.name}
                        </h4>
                      </div>
                      
                      {stop.distance && (
                        <span className="text-[11px] font-medium text-gold-dark bg-white px-2 py-0.5 rounded border border-gold/30">
                          {stop.distance}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {stop.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-warmBorder flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-charcoal-muted">
                * Timings can be customized according to your family's darshan tickets.
              </p>
              <button
                onClick={() => onPlanJourney(signaturePkg)}
                className="w-full sm:w-auto px-6 py-2.5 bg-maroon-accent text-white text-xs font-semibold rounded-full hover:bg-maroon-hover transition-colors shadow-sm"
              >
                Book This Circuit
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
