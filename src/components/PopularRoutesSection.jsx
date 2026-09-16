import React from 'react';
import { ArrowRight, Plane, MapPin, Clock, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function PopularRoutesSection({ onOpenBooking }) {
  const routes = [
    {
      id: "tirumala",
      title: "Tirupati to Tirumala",
      category: "Hill Ghat Road Cabs",
      distance: "22 km (One-way)",
      time: "45 mins",
      desc: "24/7 punctual transfers for early morning Suprabhatam & night darshans atop the sacred Seven Hills.",
      image: "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp"
    },
    {
      id: "airport",
      title: "Tirupati Airport (Renigunta)",
      category: "Airport Pickup & Drop",
      distance: "18 km from city",
      time: "30 mins",
      desc: "Doorstep pickup and drop for all scheduled IndiGo, SpiceJet & Air India flights with delay buffer.",
      image: "/images/temples/padmavathi-temple.webp"
    },
    {
      id: "chennai",
      title: "Tirupati to Chennai",
      category: "Interstate Outstation Drop",
      distance: "135 km (One-way / Return)",
      time: "3.5 hours",
      desc: "Direct point-to-point drop to Chennai International Airport (MAA), Chennai Central, Egmore, or city.",
      image: "/images/temples/kanchipuram-temple.webp"
    },
    {
      id: "vellore-cmc",
      title: "Tirupati to Vellore (CMC & Golden Temple)",
      category: "Hospital & Temple Travel",
      distance: "105 km",
      time: "2.5 hours",
      desc: "Comfortable private cabs for CMC Hospital appointments and Sri Lakshmi Narayani Golden Temple visits.",
      image: "/images/temples/golden-temple-vellore.webp"
    },
    {
      id: "bangalore",
      title: "Tirupati to Bangalore",
      category: "Highway Outstation Drop",
      distance: "250 km",
      time: "4.5 hours",
      desc: "Comfortable outstation cabs to Kempegowda International Airport (BLR), Whitefield, or Bengaluru City.",
      image: "/images/temples/Arunachalam.webp"
    },
    {
      id: "kanchipuram-pondicherry",
      title: "Tirupati to Kanchipuram & Pondicherry",
      category: "Heritage & Coastal Tours",
      distance: "115 km – 240 km",
      time: "Full Day",
      desc: "Scenic South Indian heritage tours covering the Silk City temples and French Quarter promenades.",
      image: "/images/temples/tiruttani-temple.webp"
    }
  ];

  return (
    <section id="routes-section" className="py-20 sm:py-24 bg-ivory-200/50 border-t border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-gold" />
            <span>Outstation & Transfers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            Popular Cab Routes from Tirupati
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            One-way drops and round-trip taxi services operating daily from Tirupati.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-card rounded-3xl overflow-hidden border border-warmBorder shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-charcoal">
                  <img
                    src={route.image}
                    alt={route.title}
                    width="400"
                    height="192"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white text-charcoal text-[10px] font-bold px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
                      {route.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white z-10 flex items-center justify-between text-xs font-medium">
                    <span className="text-gold-soft font-bold">{route.distance}</span>
                    <span className="bg-black/60 px-2 py-0.5 rounded border border-white/20">{route.time}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2 bg-white">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal leading-snug group-hover:text-maroon-accent transition-colors">
                    {route.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {route.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0 bg-white">
                <button
                  onClick={() => onOpenBooking && onOpenBooking({ destination: route.title, journeyType: route.category })}
                  aria-label={`Book or enquire about ${route.title}`}
                  className="w-full py-2.5 px-4 bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal rounded-xl text-xs font-bold uppercase tracking-wider border border-warmBorder hover:border-maroon-accent transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Book / Enquire Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
