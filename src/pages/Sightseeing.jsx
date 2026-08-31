import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Clock, Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Navigation, Car } from 'lucide-react';
import { sightseeingPlaces } from '../data/sightseeing';
import { contactConfig } from '../config/contact';
import CTASection from '../components/CTASection';

export default function Sightseeing({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Tirumala Hilltop', 'Tirupati Valley'];

  const filteredPlaces = activeCategory === 'All'
    ? sightseeingPlaces
    : sightseeingPlaces.filter(p => p.category === activeCategory);

  const handleWhatsApp = (place) => {
    const url = contactConfig.getWhatsAppUrl({
      destination: place.name,
      notes: `Enquiring for Local Sightseeing Cab: ${place.name}`
    });
    window.open(url, '_blank');
  };

  const handleWhatsAppAllInOne = () => {
    const url = contactConfig.getWhatsAppUrl({
      destination: "Complete Tirumala & Tirupati All-in-One Sightseeing Tour (13 Places)",
      notes: "Enquiring for Complete All-in-One Local Sightseeing Cab Package (All 13 Sights)"
    });
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>🛕 TIRUMALA &amp; TIRUPATI LOCAL SIGHTSEEING</span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-4 max-w-4xl mx-auto">
          Local Sights &amp; Sacred Attractions
        </h1>
        
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Explore all holy theerthams, ancient geological wonders, and famous valley temples across Tirumala Hilltop and Tirupati with our dedicated local chauffeurs.
        </p>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
          <a
            href={contactConfig.getTelUrl()}
            className="w-full sm:w-auto px-7 py-3.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-gold-soft" />
            <span>Call for Sightseeing: 85009 53558</span>
          </a>

          <button
            onClick={handleWhatsAppAllInOne}
            className="w-full sm:w-auto px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book All-in-One Package on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* FEATURED: ALL-IN-ONE LOCAL SIGHTSEEING MASTER PACKAGE CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-card rounded-3xl border-2 border-gold/60 shadow-editorial overflow-hidden">
          
          {/* Top Bar */}
          <div className="p-6 sm:p-8 bg-charcoal text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold/30">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-gold-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  ALL SIGHTS IN 1 PACKAGE
                </span>
                <span className="text-xs text-gold-soft font-semibold">
                  • Full Day Complete Sightseeing (8-10 Hours)
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Complete Tirumala &amp; Tirupati All-in-One Sightseeing Tour
              </h2>
              <p className="text-xs sm:text-sm text-ivory-100/90 mt-1 max-w-2xl">
                Cover all 13 sacred landmarks, holy theerthams, and valley temples in a single comfortable private AC cab with dedicated chauffeur waiting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2.5 shrink-0">
              <Link
                to="/packages/complete-tirupati-tirumala-local-sightseeing-tour-1-day"
                className="px-6 py-3 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-1.5"
              >
                <span>View Full Itinerary</span>
                <ArrowRight className="w-4 h-4 text-gold-soft" />
              </Link>

              <button
                onClick={handleWhatsAppAllInOne}
                className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp</span>
              </button>
            </div>
          </div>

          {/* 2-Column Places Checklist Preview */}
          <div className="p-6 sm:p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Tirumala Hilltop 8 Places */}
            <div className="p-5 bg-ivory rounded-2xl border border-warmBorder space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-warmBorder/60">
                <span className="font-serif font-bold text-sm sm:text-base text-charcoal">
                  ⛰️ Tirumala Hilltop Circuit (8 Places)
                </span>
                <span className="text-[10px] font-bold text-gold-dark bg-white px-2.5 py-0.5 rounded-full border border-warmBorder">
                  Hilltop Sights
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal font-medium">
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Sri Venkateswara Temple</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Akasa Ganga Waterfall</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Papavinasam Theertham</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Silathoranam (Natural Arch)</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Srivari Padalu (Peak)</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Chakra Theertham</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Tirumala Deer Park</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>TTD Sacred Gardens</span></div>
              </div>
            </div>

            {/* Right: Tirupati Valley 5 Places */}
            <div className="p-5 bg-ivory rounded-2xl border border-warmBorder space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-warmBorder/60">
                <span className="font-serif font-bold text-sm sm:text-base text-charcoal">
                  🛕 Tirupati Valley Circuit (5 Places)
                </span>
                <span className="text-[10px] font-bold text-maroon-accent bg-white px-2.5 py-0.5 rounded-full border border-warmBorder">
                  Valley Temples
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal font-medium">
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Sri Padmavathi Ammavari</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Kapila Theertham &amp; Falls</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Sri Govindaraja Swamy</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>ISKCON Lotus Temple</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Alipiri Gateway &amp; Footpath</span></div>
              </div>
            </div>

          </div>

          {/* Bottom Fleet Ribbon */}
          <div className="p-4 sm:p-5 bg-ivory border-t border-warmBorder flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center space-x-2 text-charcoal font-semibold">
              <Car className="w-4 h-4 text-gold shrink-0" />
              <span>Available Vehicles for Complete Sightseeing:</span>
              <span className="text-maroon-accent font-bold">
                Swift Dzire (4+1) • Ertiga (6+1) • Innova Crysta (7+1) • Tempo Traveller (12-14)
              </span>
            </div>

            <button
              onClick={() => onOpenBooking && onOpenBooking({ destination: "Complete Tirumala & Tirupati All-in-One Sightseeing Tour (13 Places)", journeyType: "All-in-One Sightseeing" })}
              className="px-5 py-2 bg-charcoal hover:bg-maroon-accent text-white font-bold rounded-xl uppercase tracking-wider transition-colors text-[11px] cursor-pointer shrink-0"
            >
              Book Complete Package →
            </button>
          </div>

        </div>
      </div>

      {/* Category Filter Pills for Individual Places */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between pb-2 border-b border-warmBorder">
          <h2 className="font-serif text-2xl font-bold text-charcoal">
            Explore All 13 Individual Attractions
          </h2>
          
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shadow-sm border ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-white text-charcoal-muted border-warmBorder hover:border-gold hover:text-charcoal'
                }`}
              >
                {cat === 'All' ? 'All (13)' : cat === 'Tirumala Hilltop' ? 'Hilltop (8)' : 'Valley (5)'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sightseeing Places Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-card rounded-3xl overflow-hidden border border-warmBorder shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Photo Banner */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-charcoal">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5">
                    <span className="bg-white text-charcoal text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                      {place.category}
                    </span>
                    <span className="bg-black/70 backdrop-blur-sm text-gold-soft text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                      {place.highlight}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {place.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 bg-white">
                  <div className="space-y-1">
                    <div className="flex items-center text-[11px] font-semibold text-gold-dark">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                      <span>{place.location}</span>
                    </div>

                    <div className="flex items-center text-[11px] text-charcoal-muted">
                      <Clock className="w-3.5 h-3.5 mr-1 shrink-0 text-charcoal-muted" />
                      <span>{place.timings}</span>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {place.desc}
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 bg-white space-y-2">
                <button
                  onClick={() => onOpenBooking && onOpenBooking({ destination: place.name, journeyType: 'Local Sightseeing' })}
                  className="w-full py-2.5 px-4 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Book Cab for {place.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-soft" />
                </button>

                <button
                  onClick={() => handleWhatsApp(place)}
                  className="w-full py-2 px-3 bg-ivory hover:bg-ivory-200 text-charcoal border border-warmBorder rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WhatsApp Enquire</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Sightseeing Service Inclusions Box */}
        <div className="bg-card rounded-3xl p-6 sm:p-8 border border-warmBorder shadow-editorial max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-ivory text-charcoal border border-warmBorder flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-charcoal">
                Tirumala &amp; Tirupati Local Sightseeing Standards
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                All local sightseeing tours include doorstep hotel/station pickup, flexible halting for poojas &amp; photography, and certified local drivers familiar with all hill road checkpoints.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-charcoal">
                <span className="bg-ivory px-3 py-1 rounded-full border border-warmBorder">✓ Clean Sanitized AC Cabs</span>
                <span className="bg-ivory px-3 py-1 rounded-full border border-warmBorder">✓ Flexible Waiting for Darshan &amp; Theertham Dips</span>
                <span className="bg-ivory px-3 py-1 rounded-full border border-warmBorder">✓ Hill Road Experienced Chauffeurs</span>
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
