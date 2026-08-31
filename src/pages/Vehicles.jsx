import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Users, Car, Wind } from 'lucide-react';
import { vehicles, farePolicy } from '../data/vehicles';
import { contactConfig } from '../config/contact';
import CTASection from '../components/CTASection';

export default function Vehicles({ onOpenBooking }) {
  const handleWhatsApp = (veh) => {
    const url = contactConfig.getWhatsAppUrl({
      vehicle: veh.name,
      notes: `Enquiring for vehicle: ${veh.name} (Rate: ${veh.rateDisplay})`
    });
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>FLEET &amp; PER-KILOMETER RATES</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight mb-4">
          Our Vehicle Fleet &amp; Per-KM Rates
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Clean, sanitized and air-conditioned sedans, MPVs, and luxury tempo travellers maintained to the highest standards for family and pilgrimage travel in Tirupati.
        </p>
      </div>

      {/* 4 Vehicle Grid - Full-Bleed Photo with Rate Under Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {vehicles.map((veh) => (
            <div
              key={veh.id}
              className="bg-card rounded-3xl border border-warmBorder overflow-hidden shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Full-Bleed Edge-to-Edge Photo Banner (NO white padding) */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-charcoal">
                  <img
                    src={veh.image}
                    alt={veh.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                  {/* Floating Badges inside Image */}
                  <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5">
                    <span className="bg-white text-charcoal text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                      {veh.category}
                    </span>
                    {veh.badge && (
                      <span className="bg-maroon-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                        {veh.badge}
                      </span>
                    )}
                  </div>

                  {/* Model Name on Image (Clean, No Price on Image) */}
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <span className="text-[10px] font-bold uppercase text-gold-soft tracking-wider block drop-shadow-sm">
                      {veh.type}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {veh.name}
                    </h3>
                  </div>
                </div>

                {/* Content Details: Price is Placed Prominently UNDER the Image */}
                <div className="p-5 space-y-3 bg-white">
                  
                  {/* Tariff Badge Under Image */}
                  <div className="flex items-center justify-between p-2.5 bg-ivory rounded-2xl border border-warmBorder">
                    <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                      Outstation Tariff:
                    </span>
                    <span className="text-base font-extrabold text-maroon-accent font-serif">
                      {veh.rateDisplay}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-muted leading-relaxed min-h-[32px]">
                    {veh.recommendedFor}
                  </p>

                  {/* Feature Spec Badges */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="bg-ivory/60 p-2 rounded-xl border border-warmBorder flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                      <span className="font-semibold text-charcoal truncate">{veh.category}</span>
                    </div>
                    <div className="bg-ivory/60 p-2 rounded-xl border border-warmBorder flex items-center space-x-1.5">
                      <Wind className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                      <span className="font-semibold text-charcoal truncate">Dual AC</span>
                    </div>
                    <div className="bg-ivory/60 p-2 rounded-xl border border-warmBorder flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                      <span className="font-semibold text-charcoal truncate">Hill Chauffeur</span>
                    </div>
                    <div className="bg-ivory/60 p-2 rounded-xl border border-warmBorder flex items-center space-x-1.5">
                      <Car className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                      <span className="font-semibold text-charcoal truncate">Doorstep Pick</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 bg-white space-y-2">
                <button
                  onClick={() => onOpenBooking && onOpenBooking({ vehicle: veh.name })}
                  className="w-full py-2.5 px-4 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Book {veh.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-soft" />
                </button>

                <button
                  onClick={() => handleWhatsApp(veh)}
                  className="w-full py-2 px-3 bg-ivory hover:bg-ivory-200 text-charcoal border border-warmBorder rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WhatsApp Tariff</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Policy Disclaimer */}
        <div className="bg-card rounded-3xl p-6 sm:p-8 border border-warmBorder shadow-editorial max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-ivory text-charcoal border border-warmBorder flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-charcoal">
                {farePolicy.headline}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {farePolicy.notice}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-charcoal">
                <span className="bg-ivory px-3 py-1 rounded-full border border-warmBorder">✓ Clean Sanitized AC Cabs</span>
                <span className="bg-ivory px-3 py-1 rounded-full border border-warmBorder">✓ Ghat Road Experienced Drivers</span>
                <span className="bg-ivory px-3 py-1 rounded-full border border-warmBorder">✓ 24/7 Tirupati Doorstep Pickup</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="mt-16">
        <CTASection onOpenBooking={() => onOpenBooking()} />
      </div>

    </div>
  );
}
