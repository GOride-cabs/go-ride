import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles, ChevronRight, Navigation } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="bg-ivory pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-warmBorder overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Headline & Direct Actions */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-12 sm:mb-16">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-warmBorder shadow-sm text-charcoal text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>GO RIDE TIRUPATI CABS • 24/7 ONLINE BOOKINGS</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08]">
            Your Sacred Journey<br />
            <span className="italic font-normal text-maroon-accent">
              Starts from Tirupati.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto font-normal leading-relaxed">
            Sanitized, air-conditioned cabs for Tirumala darshan, Kanipakam, Arunachalam, local temple circuits, and Chennai & Bangalore drops with experienced local chauffeurs.
          </p>

          {/* Direct Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href={contactConfig.getTelUrl()}
              className="w-full sm:w-auto px-8 py-4 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center justify-center space-x-2.5"
            >
              <Phone className="w-4 h-4 text-gold-soft" />
              <span>CALL NOW: 85009 53558</span>
            </a>

            <a
              href={contactConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP BOOKING</span>
            </a>
          </div>

          <p className="text-xs text-charcoal-muted font-medium">
            Managed by <strong className="text-charcoal font-semibold">N Viswanadham</strong> • Doorstep pickup across all Tirupati Hotels, Railway Station & Airport
          </p>

        </div>

        {/* 3-Card Sacred Journey Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          
          {/* Card 1: Tirumala (LCP Element) */}
          <div className="rounded-3xl overflow-hidden border border-warmBorder bg-card hover:border-gold shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-charcoal">
              <img
                src="/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp"
                alt="Tirumala Darshan"
                width="600"
                height="400"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm bg-white text-charcoal">
                  1 DAY TRIP
                </span>
              </div>
              <div className="absolute bottom-3.5 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-semibold text-gold-soft uppercase tracking-wider block drop-shadow-sm">
                  Tirupati → Tirumala (22 km)
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Tirumala Darshan
                </h3>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-white">
              <div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  24/7 punctual ghat road cab transfers & darshan drops atop the holy 7 Hills.
                </p>
              </div>
              <div className="pt-2 border-t border-warmBorder/60 flex items-center justify-between">
                <Link
                  to="/packages/tirupati-to-tirumala-1-day"
                  className="text-xs font-bold uppercase tracking-wider text-maroon-accent hover:text-maroon-hover transition-colors flex items-center gap-1"
                >
                  <span>View Itinerary Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-charcoal-muted font-medium">AC Fleet</span>
              </div>
            </div>
          </div>

          {/* Card 2: 3-Temple Circuit with High-Visibility Arrow Flow */}
          <div className="rounded-3xl overflow-hidden border-2 border-gold/60 ring-2 ring-gold/40 md:-translate-y-3 bg-white shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group">
            
            {/* Header with Flow Sequence */}
            <div className="p-4 bg-charcoal text-white">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/20">
                <span className="text-[10px] font-bold uppercase text-gold-soft tracking-wider">
                  3 Temples Connected Circuit
                </span>
                <span className="text-[9px] font-bold uppercase bg-gold-dark px-2.5 py-0.5 rounded text-white shadow-sm">
                  1 DAY / 2 DAYS
                </span>
              </div>

              {/* 3 Photos with Prominent Arrow Connectors */}
              <div className="flex items-center justify-between gap-1.5 py-1">
                
                {/* Temple 1: Kanipakam */}
                <div className="flex-1 text-center">
                  <div className="relative h-28 rounded-xl overflow-hidden border border-white/20 shadow-sm">
                    <img
                      src="/images/temples/Galipgopuram_of_Kanipakam_temple_(May_2019)_4.webp"
                      alt="Kanipakam"
                      width="200"
                      height="150"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white leading-tight truncate">
                      1. Kanipakam
                    </span>
                  </div>
                </div>

                {/* Bold Arrow 1 */}
                <div className="flex flex-col items-center justify-center shrink-0 px-0.5">
                  <div className="w-6 h-6 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-md font-black">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[8px] font-bold text-gold-soft mt-0.5">65 km</span>
                </div>

                {/* Temple 2: Golden Temple */}
                <div className="flex-1 text-center">
                  <div className="relative h-28 rounded-xl overflow-hidden border border-white/20 shadow-sm">
                    <img
                      src="/images/temples/golden-temple-vellore.webp"
                      alt="Golden Temple"
                      width="200"
                      height="150"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white leading-tight truncate">
                      2. Vellore
                    </span>
                  </div>
                </div>

                {/* Bold Arrow 2 */}
                <div className="flex flex-col items-center justify-center shrink-0 px-0.5">
                  <div className="w-6 h-6 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-md font-black">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[8px] font-bold text-gold-soft mt-0.5">85 km</span>
                </div>

                {/* Temple 3: Arunachalam */}
                <div className="flex-1 text-center">
                  <div className="relative h-28 rounded-xl overflow-hidden border border-white/20 shadow-sm">
                    <img
                      src="/images/temples/Arunachalam.webp"
                      alt="Arunachalam"
                      width="200"
                      height="150"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white leading-tight truncate">
                      3. Arunachalam
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Content & Details Link */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-1">
                  Kanipakam • Golden Temple • Arunachalam
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  3 Sacred Shrines: Swayambhu Vinayaka, Sripuram Golden Temple (Vellore), and Shiva Agni Lingam.
                </p>
              </div>

              <div className="pt-2 border-t border-warmBorder/60 flex items-center justify-between">
                <Link
                  to="/packages/kanipakam-golden-temple-arunachalam-1-day"
                  className="text-xs font-bold uppercase tracking-wider text-maroon-accent hover:text-maroon-hover transition-colors flex items-center gap-1"
                >
                  <span>View Itinerary Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-gold-dark font-bold">Same Night Return</span>
              </div>
            </div>

          </div>

          {/* Card 3: Southern Sacred Circuit */}
          <div className="rounded-3xl overflow-hidden border border-warmBorder bg-card hover:border-gold shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-charcoal">
              <img
                src="/images/temples/Arunachalam.webp"
                alt="Southern Sacred Circuit"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm bg-white text-charcoal">
                  2 DAYS SIGNATURE
                </span>
              </div>
              <div className="absolute bottom-3.5 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-semibold text-gold-soft uppercase tracking-wider block drop-shadow-sm">
                  Kanipakam • Arunachalam • Kanchi • Tiruttani
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Southern Sacred Circuit
                </h3>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-white">
              <div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Complete 2-day multi-state pilgrimage with dedicated chauffeur and return drop in Tirupati.
                </p>
              </div>
              <div className="pt-2 border-t border-warmBorder/60 flex items-center justify-between">
                <Link
                  to="/packages/two-days-kanipakam-arunachalam-kanchipuram-tiruttani"
                  className="text-xs font-bold uppercase tracking-wider text-maroon-accent hover:text-maroon-hover transition-colors flex items-center gap-1"
                >
                  <span>View Itinerary Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-charcoal-muted font-medium">Return Drop</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Fleet & Tariff Strip */}
        <div className="bg-white rounded-2xl border border-warmBorder p-4 sm:p-5 max-w-5xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2 text-charcoal font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available Vehicles:</span>
            <span className="text-gold-dark font-serif font-bold">
              Swift Dzire (Rs.14/km) • Ertiga (Rs.19/km) • Innova Crysta (Rs.23/km) • Tempo (Rs.28/km)
            </span>
          </div>

          <div className="flex items-center space-x-4 text-charcoal-muted font-medium">
            <span>✓ 100% Sanitized</span>
            <span>✓ 24/7 Doorstep Pickup</span>
            <span>✓ Fixed Tariffs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
