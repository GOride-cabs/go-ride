import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Clock, Shield, Sparkles, MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function InteractiveRouteBuilder({ onEnquireRoute }) {
  const routeBranches = [
    {
      id: "tirumala",
      title: "TIRUMALA",
      duration: "1 DAY",
      tag: "Direct Sacred Ghat Service",
      stops: ["Tirupati (Origin)", "Alipiri Gate", "Tirumala Hilltop", "Return Drop"],
      desc: "Direct ascent to the sacred Seven Hills of Lord Balaji. 24/7 dedicated ghat-certified chauffeurs matched to your darshan slots.",
      image: "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp",
      distance: "22 km (45 mins)"
    },
    {
      id: "kanipakam-golden-arunachalam",
      title: "KANIPAKAM → GOLDEN TEMPLE → ARUNACHALAM",
      duration: "1 DAY / 2 DAYS",
      tag: "Tri-State Sacred Circuit",
      stops: ["Tirupati (Origin)", "Kanipakam (Swayambhu Vinayaka)", "Golden Temple (Sripuram)", "Arunachalam (Agni Lingam)"],
      desc: "Our premier spiritual circuit invoking Lord Ganesha, Goddess Lakshmi Narayani, and Lord Shiva at the foot of Arunachala Hill.",
      image: "/images/temples/Galipgopuram_of_Kanipakam_temple_(May_2019)_4.jpg",
      distance: "~380 km Round Trip"
    },
    {
      id: "local-sacred-circuit",
      title: "PADMAVATI → SRINIVASA MANGAPURAM → ISKCON → KAPILA THEERTHAM → GOVINDARAJA SWAMY",
      duration: "1 DAY",
      tag: "Complete 5-Temple Valley Circuit",
      stops: ["Padmavati Temple", "Srinivasa Mangapuram", "ISKCON Temple", "Kapila Theertham", "Govindaraja Swamy"],
      desc: "The sacred five-temple darshan circuit covering the sacred shrines situated within and around the Tirupati valley.",
      image: "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp",
      distance: "~45 km Valley Route"
    },
    {
      id: "kanchipuram",
      title: "KANCHIPURAM",
      duration: "1 DAY",
      tag: "Heritage Temple & Silk Hub",
      stops: ["Tirupati (Origin)", "Sri Kamakshi Amman", "Ekambareswarar (Earth Lingam)", "Silk Weaving Centers"],
      desc: "Interstate pilgrimage to the historic City of Thousand Temples with waiting time included for darshans and silk shopping.",
      image: "/images/temples/Arunachalam.webp",
      distance: "115 km (2.5 hrs)"
    },
    {
      id: "srikalahasti",
      title: "SRIKALAHASTI",
      duration: "HALF DAY / 1 DAY",
      tag: "Vayu Lingam & Rahu-Ketu Tour",
      stops: ["Tirupati (Origin)", "Sri Kalahasteeswara Temple", "Rahu-Ketu Pooja Halls", "Swarnamukhi River Bank"],
      desc: "Revered Pancha Bhoota Sthalam on Swarnamukhi banks renowned for Rahu-Ketu Sarpa Dosha Nivarana poojas.",
      image: "/images/temples/kalahastri.jpg",
      distance: "38 km (45 mins)"
    },
    {
      id: "tiruttani",
      title: "TIRUTTANI",
      duration: "HALF DAY / 1 DAY",
      tag: "Lord Murugan Hill Abode",
      stops: ["Tirupati (Origin)", "Sri Subramanya Swamy Hilltop", "365 Sacred Steps", "Return Drop"],
      desc: "Scenic highway trip to the revered fifth abode of Lord Murugan (Arupadaiveedu) perched atop Tanigaimalai.",
      image: "/images/temples/Galipgopuram_of_Kanipakam_temple_(May_2019)_4.jpg",
      distance: "65 km (1.5 hrs)"
    }
  ];

  const [activeBranch, setActiveBranch] = useState(routeBranches[0]);

  const handleEnquire = () => {
    if (onEnquireRoute) {
      onEnquireRoute({
        destination: activeBranch.title,
        journeyType: activeBranch.duration
      });
    }
  };

  const handleWhatsApp = () => {
    const url = contactConfig.getWhatsAppUrl({
      pickup: "Tirupati",
      destination: activeBranch.title,
      notes: `Enquiring for route: ${activeBranch.title} (${activeBranch.duration}, ${activeBranch.distance})`
    });
    window.open(url, '_blank');
  };

  return (
    <section id="route-builder" className="py-24 bg-ivory border-b border-warmBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-ivory-200 border border-warmBorder text-[11px] font-bold tracking-widest uppercase text-charcoal mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>INTERACTIVE ROUTE TREE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
            BUILD YOUR JOURNEY.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            Select any route branch starting from Tirupati to preview the itinerary, stops, and real journey moments.
          </p>
        </div>

        {/* 2-Column Route Tree + Live Journey Moment Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: The Interactive Route Tree */}
          <div className="lg:col-span-6 bg-card rounded-3xl border border-warmBorder p-6 sm:p-8 shadow-editorial">
            
            {/* Origin Root Node */}
            <div className="flex items-center space-x-3 pb-6 mb-6 border-b border-warmBorder">
              <div className="w-9 h-9 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-xs shadow-sm">
                ●
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block">
                  ORIGIN POINT
                </span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                  TIRUPATI
                </span>
              </div>
            </div>

            {/* Tree Branches */}
            <div className="space-y-3 relative pl-4 before:absolute before:left-8 before:top-2 before:bottom-6 before:w-0.5 before:bg-gold-soft/50">
              {routeBranches.map((branch, idx) => {
                const isSelected = activeBranch.id === branch.id;
                return (
                  <div
                    key={branch.id}
                    onClick={() => setActiveBranch(branch)}
                    className={`relative pl-8 p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'bg-ivory border-maroon-accent shadow-sm ring-1 ring-maroon-accent/30'
                        : 'bg-white/60 hover:bg-white border-warmBorder hover:border-gold'
                    }`}
                  >
                    {/* Node Dot on line */}
                    <div className={`absolute left-2.5 top-5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                      isSelected
                        ? 'bg-maroon-accent border-white scale-125'
                        : 'bg-white border-gold'
                    }`} />

                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block">
                          {branch.tag}
                        </span>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-charcoal leading-snug mt-0.5">
                          {branch.title}
                        </h4>
                      </div>

                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border shrink-0 ${
                        isSelected
                          ? 'bg-maroon-accent text-white border-maroon-accent'
                          : 'bg-ivory text-charcoal-muted border-warmBorder'
                      }`}>
                        {branch.duration}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-2 border-t border-warmBorder/60 flex items-center justify-between text-xs font-semibold text-maroon-accent">
                        <span>Active Path Selected</span>
                        <span>➔ Viewing details</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Live Journey Moment Stage with Real Photography */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Real Photograph Journey Moment */}
            <div className="relative rounded-3xl overflow-hidden shadow-editorial border border-warmBorder h-72 sm:h-80 bg-charcoal group">
              <img
                src={activeBranch.image}
                alt={activeBranch.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-white text-charcoal text-[11px] font-bold uppercase tracking-wider shadow-sm border border-gold/40">
                  {activeBranch.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/70 text-white text-[11px] font-semibold border border-white/30 backdrop-blur-sm">
                  {activeBranch.distance}
                </span>
              </div>

              {/* Title & Description */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-soft block drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Journey Moment
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-snug">
                  {activeBranch.title}
                </h3>
              </div>
            </div>

            {/* Journey Details & Stops Breakdown */}
            <div className="bg-card rounded-3xl border border-warmBorder p-6 sm:p-8 shadow-editorial space-y-5">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
                  ROUTE OVERVIEW
                </span>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-normal">
                  {activeBranch.desc}
                </p>
              </div>

              {/* Stops List */}
              <div className="pt-3 border-t border-warmBorder">
                <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal block mb-2">
                  STOPS IN SEQUENCE:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeBranch.stops.map((st, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-lg bg-ivory border border-warmBorder text-charcoal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-warmBorder grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleEnquire}
                  className="w-full py-3 px-4 bg-maroon-accent hover:bg-maroon-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-editorial transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Enquire This Route</span>
                  <ArrowRight className="w-4 h-4 text-gold-soft" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-4 bg-white hover:bg-ivory-100 text-charcoal border border-warmBorder hover:border-gold text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Quote</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
