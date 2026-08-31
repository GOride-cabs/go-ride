import React from 'react';
import { ArrowRight, Plane, Building, Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function DropRoutes({ onEnquireDrop }) {
  return (
    <section id="drops" className="py-24 bg-ivory-200/50 border-b border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mb-14 max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark block mb-2">
            OUTSTATION & AIRPORT TRANSFERS
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-charcoal tracking-tight uppercase">
            GO FURTHER.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            Punctual point-to-point drop services from Tirupati to major metropolitan terminals.
          </p>
        </div>

        {/* Two Enormous Route Connectors */}
        <div className="space-y-6 mb-12">
          
          {/* Chennai Drop */}
          <div
            onClick={() => onEnquireDrop({ destination: "Tirupati → Chennai Drop", journeyType: "Drop Service" })}
            className="bg-card rounded-3xl border border-warmBorder p-6 sm:p-10 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 group cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-md bg-ivory text-charcoal font-bold text-[10px] uppercase tracking-wider border border-warmBorder">
                    DROP SERVICE
                  </span>
                  <span className="text-xs font-semibold text-gold-dark">
                    ~150 km • 3.5 hrs
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal group-hover:text-maroon-accent transition-colors leading-none tracking-tight">
                  TIRUPATI ━━━━━━━━━ CHENNAI
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted">
                  Direct drop service to Chennai International Airport (MAA), Chennai Central / Egmore Stations, or any city residential destination.
                </p>
              </div>

              <div className="shrink-0 flex items-center space-x-3">
                <button className="px-6 py-3 rounded-xl bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center space-x-2">
                  <span>Enquire Chennai Drop</span>
                  <ArrowRight className="w-4 h-4 text-gold-soft" />
                </button>
              </div>

            </div>
          </div>

          {/* Bangalore Drop */}
          <div
            onClick={() => onEnquireDrop({ destination: "Tirupati → Bangalore Drop", journeyType: "Drop Service" })}
            className="bg-card rounded-3xl border border-warmBorder p-6 sm:p-10 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 group cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-md bg-ivory text-charcoal font-bold text-[10px] uppercase tracking-wider border border-warmBorder">
                    DROP SERVICE
                  </span>
                  <span className="text-xs font-semibold text-gold-dark">
                    ~250 km • 5.5 hrs
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal group-hover:text-maroon-accent transition-colors leading-none tracking-tight">
                  TIRUPATI ━━━━━━━━━ BANGALORE
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted">
                  Direct long-distance cab travel to Kempegowda International Airport (BLR), Whitefield, Electronic City, or anywhere in Bengaluru.
                </p>
              </div>

              <div className="shrink-0 flex items-center space-x-3">
                <button className="px-6 py-3 rounded-xl bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center space-x-2">
                  <span>Enquire Bangalore Drop</span>
                  <ArrowRight className="w-4 h-4 text-gold-soft" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Need another destination footer */}
        <div className="p-6 bg-card rounded-2xl border border-warmBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <span className="font-serif text-lg font-bold text-charcoal block">
              Need another destination?
            </span>
            <p className="text-xs text-charcoal-muted">
              We operate custom one-way drops and round-trip outstation services across South India.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={contactConfig.getTelUrl()}
              className="px-5 py-2.5 rounded-lg bg-ivory hover:bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-gold-dark" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
