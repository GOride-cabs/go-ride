import React, { useState } from 'react';
import { Users, Sparkles, Check, ArrowRight, ShieldCheck, Wind } from 'lucide-react';

export default function RideSelector({ onSelectVehicle, onEnquireRide }) {
  const vehicles = [
    {
      id: "swift-dzire",
      name: "SWIFT DZIRE",
      rawNumber: "Rs. 14 / km",
      capacity: "4 + 1 Seater",
      ac: "Chilled Front & Rear AC",
      category: "Sedan",
      image: "/images/vehicles/swift-dzire.jpg",
      features: ["AC with clean interiors", "Comfortable for small families", "Experienced local driver"]
    },
    {
      id: "ertiga",
      name: "ERTIGA",
      rawNumber: "Rs. 19 / km",
      capacity: "6 + 1 Seater",
      ac: "Roof-Mounted Rear AC Vents",
      category: "Family MUV",
      image: "/images/vehicles/Eritiga.jpg",
      badge: "FAMILY CHOICE",
      features: ["Dual air conditioning", "Generous legroom & headroom", "Courteous pilgrimage chauffeur"]
    },
    {
      id: "innova-crysta",
      name: "INNOVA CRYSTA",
      rawNumber: "Rs. 23 / km",
      capacity: "7 + 1 Seater",
      ac: "Automatic Climate Control",
      category: "Executive MPV",
      image: "/images/vehicles/toyota-innova-crysta.webp",
      badge: "MOST COMFORTABLE",
      features: ["Captain seats with armrests", "Superior highway suspension", "Senior citizen friendly ingress"]
    },
    {
      id: "tempo-traveller",
      name: "TEMPO TRAVELLER",
      rawNumber: "Rs. 28 / km",
      capacity: "12 to 14 Seater",
      ac: "Individual AC Louvers",
      category: "Group Travel",
      image: "/images/vehicles/diesel-force-tempo-traveller--20240714033632148.jpg",
      badge: "GROUP TOURS",
      features: ["High-roof spacious aisle", "Push-back luxury seats", "Dedicated group driver"]
    }
  ];

  const [activeVehicle, setActiveVehicle] = useState(vehicles[1]); // Default Ertiga

  const handleSelect = (v) => {
    setActiveVehicle(v);
    if (onSelectVehicle) onSelectVehicle(v);
  };

  return (
    <section id="vehicles-section" className="py-24 bg-ivory border-b border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mb-14 max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark block mb-2">
            AVAILABLE FLEET
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-charcoal tracking-tight uppercase">
            CHOOSE YOUR RIDE.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            Clean, air-conditioned vehicles for solo pilgrims, families, and extended groups.
          </p>
        </div>

        {/* 4 Horizontal Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {vehicles.map((v) => {
            const isSelected = activeVehicle.id === v.id;
            return (
              <div
                key={v.id}
                onClick={() => handleSelect(v)}
                className={`p-6 rounded-2xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-charcoal text-white border-charcoal shadow-editorial ring-2 ring-gold/40'
                    : 'bg-card text-charcoal border-warmBorder hover:border-gold hover:bg-ivory-200/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                      isSelected ? 'bg-white/10 text-gold-soft border border-white/20' : 'bg-ivory text-charcoal-muted border border-warmBorder'
                    }`}>
                      {v.category}
                    </span>
                    {v.badge && (
                      <span className="text-[9px] font-bold uppercase bg-maroon-accent text-white px-2 py-0.5 rounded">
                        {v.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight uppercase mb-4">
                    {v.name}
                  </h3>

                  <div className="mb-4">
                    <span className={`text-2xl font-serif font-bold ${isSelected ? 'text-gold-soft' : 'text-charcoal'}`}>
                      {v.rawNumber}
                    </span>
                    <span className={`text-[10px] block font-medium mt-0.5 ${isSelected ? 'text-ivory-100/70' : 'text-charcoal-muted'}`}>
                      Outstation Rate
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-warmBorder/40 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className={isSelected ? 'text-ivory-100/80' : 'text-charcoal-muted'}>Capacity:</span>
                    <span className="font-semibold">{v.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={isSelected ? 'text-ivory-100/80' : 'text-charcoal-muted'}>AC System:</span>
                    <span className="font-semibold">{v.ac}</span>
                  </div>

                  <div className={`mt-3 pt-2 text-center text-xs font-bold uppercase tracking-wider ${
                    isSelected ? 'text-gold-soft' : 'text-maroon-accent'
                  }`}>
                    {isSelected ? '● Selected Ride' : 'Click to Select'}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Vehicle Showcase with Real Photograph */}
        <div className="bg-card rounded-3xl border border-warmBorder p-6 sm:p-10 shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Vehicle Photo */}
            <div className="lg:col-span-6 h-64 sm:h-72 rounded-2xl overflow-hidden bg-charcoal relative">
              <img
                src={activeVehicle.image}
                alt={activeVehicle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-soft block">
                  Selected Vehicle Fleet
                </span>
                <h4 className="font-serif text-2xl font-bold">
                  {activeVehicle.name}
                </h4>
              </div>
            </div>

            {/* Selected Vehicle Details */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="text-2xl font-serif font-bold text-charcoal">
                    {activeVehicle.rawNumber}
                  </span>
                  <span className="text-xs font-semibold text-gold-dark">
                    (Outstation Rate)
                  </span>
                </div>
                <span className="text-xs text-charcoal-muted block">
                  Comfortable, clean and air-conditioned cab for Tirupati and outstation pilgrimage routes.
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal block">
                  VEHICLE INCLUSIONS:
                </span>
                <ul className="space-y-1.5 text-xs text-charcoal">
                  {activeVehicle.features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-3.5 h-3.5 text-gold mr-2 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onEnquireRide && onEnquireRide(activeVehicle)}
                  className="px-7 py-3 rounded-xl bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center space-x-2"
                >
                  <span>Enquire with {activeVehicle.name}</span>
                  <ArrowRight className="w-4 h-4 text-gold-soft" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
