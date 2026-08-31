import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PopularTripsStrip({ onSelectTrip }) {
  const trips = [
    {
      id: "tirumala",
      title: "TIRUMALA",
      category: "Temple Visit",
      duration: "1 Day",
      image: "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp",
      desc: "Direct ghat road cab service and darshan drops atop the holy seven hills."
    },
    {
      id: "kanipakam-golden-arunachalam",
      title: "KANIPAKAM • GOLDEN TEMPLE • ARUNACHALAM",
      category: "Pilgrimage Circuit",
      duration: "1 Day",
      image: "/images/temples/Galipgopuram_of_Kanipakam_temple_(May_2019)_4.jpg",
      desc: "Cover three divine shrines across Andhra and Tamil Nadu in a comfortable full-day trip."
    },
    {
      id: "kanchipuram-tiruttani-arunachalam",
      title: "KANCHIPURAM • TIRUTTANI • ARUNACHALAM",
      category: "Extended Pilgrimage",
      duration: "2 Days",
      image: "/images/temples/Arunachalam.webp",
      desc: "Our signature 2-day pilgrimage circuit covering multi-state ancient temple heritage."
    }
  ];

  return (
    <section id="popular-trips" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-warmBorder">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-dark block mb-1">
              TOP RECOMMENDED CAB TOURS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              Popular Journeys from Tirupati
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mt-2 md:mt-0">
            Pre-planned circuits with sanitized vehicles, transparent per-km billing, and courteous chauffeurs.
          </p>
        </div>

        {/* 3 Large Destination Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {trips.map((trip) => (
            <div
              key={trip.id}
              onClick={() => onSelectTrip && onSelectTrip(trip.title)}
              className="relative h-[340px] sm:h-[380px] rounded-3xl overflow-hidden border border-warmBorder shadow-editorial hover:shadow-editorial-hover transition-all duration-300 group cursor-pointer flex flex-col justify-between p-6 sm:p-7 bg-charcoal"
            >
              {/* Full-Bleed Real Image Background */}
              <img
                src={trip.image}
                alt={trip.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Deep Contrast Scrim for Crystal-Clear Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25" />

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white text-charcoal text-[11px] font-bold tracking-wider uppercase border border-gold/40 shadow-sm">
                  {trip.category}
                </span>

                <span className="px-3 py-1 rounded-full bg-black/70 text-white text-[11px] font-bold border border-white/30 backdrop-blur-sm">
                  {trip.duration}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-2 text-white">
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {trip.title}
                </h3>
                <p className="text-xs text-white/90 leading-relaxed font-medium line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {trip.desc}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-white/20">
                  <span className="text-xs font-semibold text-gold-soft flex items-center gap-1 group-hover:text-white transition-colors">
                    <span>Enquire This Route</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] text-white/80 uppercase tracking-wider">
                    From Tirupati
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
