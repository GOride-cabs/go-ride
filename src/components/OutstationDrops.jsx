import React from 'react';
import { ArrowRight, Plane, Building, Compass, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function OutstationDrops({ onBookDrop }) {
  const drops = [
    {
      id: "chennai-drop",
      title: "Tirupati → Chennai",
      badge: "DROP SERVICE",
      subtitle: "Airport, Railway Stations & City",
      distance: "~150 km (3.5 hrs)",
      icon: Plane,
      desc: "Direct point-to-point drop from Tirupati to Chennai International Airport (MAA), Chennai Central, Egmore, or anywhere in Chennai.",
      features: ["Timed for flight/train departures", "Toll & highway route handling", "Available 24/7 round the clock"]
    },
    {
      id: "bangalore-drop",
      title: "Tirupati → Bangalore",
      badge: "DROP SERVICE",
      subtitle: "BLR Airport, Tech Parks & City",
      distance: "~250 km (5.5 hrs)",
      icon: Building,
      desc: "Comfortable long-distance outstation drop to Kempegowda International Airport (BLR), Whitefield, Electronic City, or anywhere in Bengaluru.",
      features: ["Spacious highway-grade vehicles", "Relaxed refreshment stops", "Door-to-door doorstep service"]
    },
    {
      id: "custom-outstation",
      title: "Custom Outstation Journey",
      badge: "ENQUIRE",
      subtitle: "Multi-City, Corporate & Family Routes",
      distance: "Custom Distance",
      icon: Compass,
      desc: "Planning a multi-city South Indian road trip, family wedding transport, or customized outstation route? Speak directly to our travel coordinator.",
      features: ["Customized day-wise itinerary", "Transparent per-KM billing", "Dedicated chauffeur on call"]
    }
  ];

  return (
    <section id="outstation-drops" className="py-24 bg-ivory-200/60 border-t border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>INTERSTATE & AIRPORT TRANSFERS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-4">
            Travel Beyond Tirupati
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Reliable, punctual one-way drop services and tailored outstation travel to major South Indian hubs.
          </p>
        </div>

        {/* 3 Drop Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {drops.map((drop) => {
            const Icon = drop.icon;
            return (
              <div
                key={drop.id}
                className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-ivory border border-warmBorder flex items-center justify-center text-gold-dark group-hover:bg-maroon-accent group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-ivory text-charcoal text-[11px] font-bold tracking-wider uppercase border border-warmBorder">
                      {drop.badge}
                    </span>
                  </div>

                  <span className="text-xs text-gold-dark font-semibold block mb-1">
                    {drop.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                    {drop.title}
                  </h3>
                  <span className="inline-block text-xs font-medium text-charcoal-muted mb-3 bg-ivory px-2.5 py-1 rounded-lg border border-warmBorder">
                    {drop.distance}
                  </span>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                    {drop.desc}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-warmBorder/60 pt-4">
                    {drop.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-xs text-charcoal">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-warmBorder flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => onBookDrop && onBookDrop({ title: drop.title, journeyType: "Outstation Drop" })}
                    className="w-full py-2.5 px-4 bg-maroon-accent hover:bg-maroon-hover text-white font-semibold text-xs rounded-xl shadow-editorial transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Enquire {drop.title.split('→')[1] || 'Drop'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-soft" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
