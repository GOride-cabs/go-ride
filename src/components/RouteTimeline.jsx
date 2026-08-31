import React, { useState } from 'react';
import { Navigation, ArrowRight } from 'lucide-react';

export default function RouteTimeline({ onSelectRoute }) {
  const routeStops = [
    { id: "tirupati", name: "Tirupati", tag: "Start / Origin", icon: "🏛️", desc: "Holy foothills of Lord Venkateswara, gateway to South Indian pilgrimage." },
    { id: "kanipakam", name: "Kanipakam", tag: "Stop 1", icon: "🐘", desc: "Sri Varasiddhi Vinayaka Swayambhu temple situated in a natural spring well." },
    { id: "vellore", name: "Golden Temple", tag: "Stop 2", icon: "✨", desc: "Sri Lakshmi Narayani Golden Temple with 1.8km star path in Sripuram." },
    { id: "arunachalam", name: "Arunachalam", tag: "Stop 3", icon: "🔥", desc: "Sacred Agni Sthalam Shiva temple & Girivalam at the base of Arunachala." },
    { id: "kanchipuram", name: "Kanchipuram", tag: "Stop 4", icon: "🛕", desc: "City of Thousand Temples, Kamakshi Amman Peetham & Earth Lingam." },
    { id: "tiruttani", name: "Tiruttani", tag: "Stop 5", icon: "⛰️", desc: "5th holy abode (Arupadaiveedu) of Lord Murugan atop 365 steps." },
    { id: "tirupati-return", name: "Tirupati", tag: "Return Drop", icon: "🏁", desc: "Comfortable return drop to your hotel, station, or airport." }
  ];

  const [activeStop, setActiveStop] = useState(routeStops[0]);

  return (
    <section className="py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-gold" />
            <span>INTERACTIVE ROUTE EXPERIENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-4">
            The Sacred Pilgrimage Path
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Follow the sacred trail across historic spiritual landmarks. Click any milestone to preview temple highlights and journey details.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Route Path with Muted Gold Line */}
        <div className="hidden lg:block bg-card p-8 rounded-3xl border border-warmBorder shadow-editorial mb-10">
          <div className="relative">
            {/* Connecting Muted Gold Line */}
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-gold-soft z-0 rounded-full" />

            <div className="grid grid-cols-7 gap-2 relative z-10">
              {routeStops.map((stop, idx) => {
                const isSelected = activeStop.id === stop.id;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStop(stop)}
                    className="flex flex-col items-center text-center group focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300 shadow-sm border-2 ${
                        isSelected
                          ? 'bg-white text-charcoal border-gold scale-110 shadow-editorial ring-4 ring-gold/20'
                          : 'bg-ivory text-charcoal border-warmBorder group-hover:border-gold group-hover:scale-105'
                      }`}
                    >
                      <span>{stop.icon}</span>
                    </div>

                    <span className="mt-3 text-[11px] uppercase font-bold tracking-wider text-charcoal-muted group-hover:text-charcoal">
                      {stop.tag}
                    </span>

                    <h4
                      className={`font-serif text-sm font-bold mt-0.5 transition-colors ${
                        isSelected ? 'text-maroon-accent font-extrabold' : 'text-charcoal group-hover:text-maroon-accent'
                      }`}
                    >
                      {stop.name}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden bg-card p-5 rounded-2xl border border-warmBorder shadow-editorial mb-8">
          <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gold-soft">
            {routeStops.map((stop, idx) => {
              const isSelected = activeStop.id === stop.id;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStop(stop)}
                  className={`relative p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-ivory-200/70 border-gold shadow-sm'
                      : 'bg-ivory border-warmBorder hover:bg-ivory-200'
                  }`}
                >
                  <div className="absolute -left-6 top-4 w-4 h-4 rounded-full bg-white border-2 border-gold flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-base">{stop.icon}</span>
                      <h4 className="font-serif font-bold text-sm text-charcoal">{stop.name}</h4>
                    </div>
                    <span className="text-[10px] font-semibold text-charcoal-muted bg-white px-2 py-0.5 rounded border border-warmBorder">
                      {stop.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Node Detail Card */}
        <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-ivory border border-warmBorder flex items-center justify-center text-3xl shrink-0">
              {activeStop.icon}
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs uppercase font-bold tracking-wider text-gold-dark">
                  {activeStop.tag}
                </span>
                <span className="text-charcoal-muted text-xs">•</span>
                <span className="text-xs text-charcoal-muted">South India Sacred Trail</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                {activeStop.name}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1 max-w-2xl leading-relaxed">
                {activeStop.desc}
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onSelectRoute && onSelectRoute(activeStop.name)}
              className="w-full sm:w-auto px-6 py-3 bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-semibold rounded-full shadow-editorial transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Enquire for {activeStop.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-soft" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
