import React, { useState } from 'react';
import { ArrowRight, Phone, Check, MapPin, Sparkles } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function TypographicHero({ selectedMode, onSelectMode, onSelectRoute, onOpenBooking }) {
  const [activeMode, setActiveMode] = useState(selectedMode || 'oneDay');
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  const modeData = {
    oneDay: {
      id: "oneDay",
      num: "01",
      title: "ONE DAY",
      subtitle: "Same-Day Sacred Circuits & Hill Services",
      routes: [
        { id: "tirumala", title: "TIRUPATI → TIRUMALA", subtitle: "Simple. Direct. Sacred. 24/7 Ghat Route", distance: "22 km", duration: "1 DAY" },
        { id: "tri-temple", title: "TIRUPATI → KANIPAKAM → GOLDEN TEMPLE → ARUNACHALAM", subtitle: "Three sacred destinations. One day.", distance: "~380 km", duration: "1 DAY" },
        { id: "local-5", title: "TIRUPATI → PADMAVATI → SRINIVASA MANGAPURAM → ISKCON → KAPILA THEERTHAM → GOVINDARAJA SWAMY", subtitle: "Explore Tirupati's sacred valley circuit", distance: "~45 km", duration: "1 DAY" },
        { id: "kanchipuram", title: "TIRUPATI → KANCHIPURAM", subtitle: "Kamakshi Amman & Ekambareswarar", distance: "115 km", duration: "1 DAY" },
        { id: "srikalahasti", title: "TIRUPATI → SRIKALAHASTI", subtitle: "Vayu Lingam & Rahu-Ketu Poojas", distance: "38 km", duration: "1 DAY" },
        { id: "tiruttani", title: "TIRUPATI → TIRUTTANI", subtitle: "Lord Murugan Hill Abode", distance: "65 km", duration: "1 DAY" }
      ]
    },
    twoDays: {
      id: "twoDays",
      num: "02",
      title: "TWO DAYS",
      subtitle: "The Signature Southern Sacred Circuit",
      routes: [
        {
          id: "two-day-circuit",
          title: "TIRUPATI → KANIPAKAM → GOLDEN TEMPLE → ARUNACHALAM → KANCHIPURAM → TIRUTTANI → TIRUPATI",
          subtitle: "2 Days • Multiple Temples • Complete Return Journey",
          distance: "~580 km Round Trip",
          duration: "2 DAYS • 1 NIGHT"
        }
      ]
    },
    drop: {
      id: "drop",
      num: "03",
      title: "DROP",
      subtitle: "Direct Outstation & Airport Drop Services",
      routes: [
        { id: "chennai-drop", title: "TIRUPATI ━━━━━━━━━ CHENNAI", subtitle: "Airport (MAA), Railway Central & City Drop", distance: "150 km", duration: "DROP SERVICE" },
        { id: "bangalore-drop", title: "TIRUPATI ━━━━━━━━━ BANGALORE", subtitle: "BLR Airport, Tech Corridors & City Drop", distance: "250 km", duration: "DROP SERVICE" }
      ]
    }
  };

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setActiveRouteIndex(0);
    if (onSelectMode) onSelectMode(mode);
  };

  const currentMode = modeData[activeMode];

  const handleRouteClick = (route) => {
    if (onSelectRoute) onSelectRoute(route);
  };

  const scrollToBuilder = () => {
    const el = document.getElementById('route-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-ivory pt-32 pb-20 border-b border-warmBorder relative overflow-hidden">
      
      {/* Subtle Road Route Line Vector in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path d="M 100 300 C 400 150, 700 450, 1100 300" stroke="#B49A6A" strokeWidth="1.5" strokeDasharray="6 8" />
          <circle cx="100" cy="300" r="6" fill="#702D35" />
          <circle cx="600" cy="300" r="4" fill="#B49A6A" />
          <circle cx="1100" cy="300" r="6" fill="#302C28" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Large Typographic Statement */}
        <div className="max-w-4xl space-y-6 text-left">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-ivory-200 border border-warmBorder text-charcoal text-[11px] font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-maroon-accent" />
            <span>TIRUPATI CAB SERVICES</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-charcoal leading-[0.98] uppercase">
            START IN TIRUPATI.<br />
            <span className="italic font-normal text-gold-dark">GO ANYWHERE.</span>
          </h1>

          <p className="text-base sm:text-xl text-charcoal-muted max-w-2xl font-normal leading-relaxed">
            Temple journeys, pilgrimage circuits and outstation travel — planned around your route.
          </p>

        </div>

        {/* 2. Three Large Choice Navigation Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-12 pt-6 border-t border-warmBorder">
          {Object.values(modeData).map((m) => {
            const isSelected = activeMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => handleModeChange(m.id)}
                className={`p-6 sm:p-8 rounded-2xl text-left transition-all duration-300 border relative group cursor-pointer ${
                  isSelected
                    ? 'bg-charcoal text-white border-charcoal shadow-editorial'
                    : 'bg-card text-charcoal border-warmBorder hover:border-gold hover:bg-ivory-200/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`font-serif text-2xl sm:text-3xl font-bold ${isSelected ? 'text-gold-soft' : 'text-charcoal-muted'}`}>
                    {m.num}
                  </span>
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md border ${
                    isSelected ? 'border-white/20 text-white/80 bg-white/10' : 'border-warmBorder text-charcoal-muted bg-ivory'
                  }`}>
                    MODE
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-2">
                  {m.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isSelected ? 'text-ivory-100/80' : 'text-charcoal-muted'}`}>
                  {m.subtitle}
                </p>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-gold-soft">
                    <span>Active Route Mode</span>
                    <span>↓ Explore Routes</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* 3. Live Transformed Route List for Selected Mode */}
        <div className="bg-card rounded-3xl border border-warmBorder p-6 sm:p-10 shadow-editorial">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-warmBorder">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-maroon-accent animate-pulse" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block">
                  AVAILABLE ROUTES FROM TIRUPATI
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal uppercase">
                  {currentMode.title} JOURNEYS
                </h3>
              </div>
            </div>

            <button
              onClick={scrollToBuilder}
              className="text-xs font-bold uppercase tracking-wider text-charcoal hover:text-maroon-accent flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Build Custom Route</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </button>
          </div>

          {/* Interactive Route Items */}
          <div className="divide-y divide-warmBorder/70 mt-2">
            {currentMode.routes.map((route, idx) => (
              <div
                key={route.id}
                onClick={() => handleRouteClick(route)}
                className="py-5 sm:py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 group cursor-pointer hover:bg-ivory-200/40 px-3 sm:px-4 rounded-xl transition-colors"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex items-center space-x-2 text-[11px] font-bold text-gold-dark uppercase tracking-wider">
                    <span>Origin: Tirupati</span>
                    <span>•</span>
                    <span>{route.duration}</span>
                    <span>•</span>
                    <span>{route.distance}</span>
                  </div>
                  <h4 className="font-serif text-lg sm:text-2xl font-bold text-charcoal group-hover:text-maroon-accent transition-colors leading-tight">
                    {route.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted">
                    {route.subtitle}
                  </p>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking({ destination: route.title, journeyType: route.duration });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center space-x-1.5"
                  >
                    <span>Enquire This Route</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-soft" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
