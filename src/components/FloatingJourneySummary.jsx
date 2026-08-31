import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Car, Clock } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function FloatingJourneySummary({ currentRoute, currentVehicle, currentDuration, onOpenEnquiry }) {
  const routeTitle = currentRoute?.title || "TIRUPATI → TIRUMALA";
  const vehicleName = currentVehicle?.name || "ERTIGA";
  const duration = currentDuration || "01 DAY";

  const handleWhatsApp = () => {
    const url = contactConfig.getWhatsAppUrl({
      pickup: "Tirupati",
      destination: routeTitle,
      vehicle: vehicleName,
      notes: `Direct Journey Builder Enquiry: ${routeTitle} (${duration}) with ${vehicleName}`
    });
    window.open(url, '_blank');
  };

  return (
    <section id="journey-summary" className="py-20 bg-charcoal text-white relative border-t border-warmBorder overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-charcoal-muted/30 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left: Dynamic Summary */}
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest uppercase text-gold-soft">
                <span>DYNAMIC JOURNEY SUMMARY</span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-ivory-200/70 block mb-1">
                  YOUR JOURNEY:
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  {routeTitle}
                </h3>
              </div>

              {/* Mode & Vehicle Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-gold-soft">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  {duration}
                </span>

                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white">
                  <Car className="w-3.5 h-3.5 mr-1.5" />
                  {vehicleName}
                </span>

                <span className="text-xs text-ivory-100/70 font-medium">
                  • Starting from Tirupati with dedicated driver
                </span>
              </div>
            </div>

            {/* Right: Enquire CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquiry({ destination: routeTitle, vehicle: vehicleName, journeyType: duration })}
                className="px-8 py-4 rounded-xl bg-maroon-accent hover:bg-maroon-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center justify-center space-x-2"
              >
                <span>ENQUIRE ABOUT THIS JOURNEY</span>
                <ArrowRight className="w-4 h-4 text-gold-soft" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp N Viswanadham</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
