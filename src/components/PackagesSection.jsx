import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Navigation, ArrowDown } from 'lucide-react';
import { packages } from '../data/packages';

export default function PackagesSection({ onBookPackage }) {
  const triTempleData = {
    title: "Kanipakam • Golden Temple • Arunachalam",
    badge: "1 DAY SACRED CIRCUIT",
    distance: "Approx. 380 km Round Trip",
    slug: "kanipakam-golden-temple-arunachalam-1-day",
    desc: "Auspicious tripartite pilgrimage covering Lord Varasiddhi Vinayaka, Sri Lakshmi Narayani Golden Temple (Vellore), and Shiva Agni Sthalam (Arunachalam) in a single comfortable day with same-night return drop in Tirupati.",
    temples: [
      {
        num: "01",
        name: "KANIPAKAM",
        deity: "Sri Varasiddhi Vinayaka",
        location: "Chittoor (70 km from Tirupati)",
        desc: "Swayambhu idol of Lord Ganesha growing inside the holy well.",
        image: "/images/temples/Galipgopuram_of_Kanipakam_temple_(May_2019)_4.webp",
        highlight: "Obstacle Remover Pooja"
      },
      {
        num: "02",
        name: "GOLDEN TEMPLE",
        deity: "Sri Lakshmi Narayani",
        location: "Sripuram, Vellore (65 km from Kanipakam)",
        desc: "Architectural wonder crafted with 1.5 tonnes of pure gold foil.",
        image: "/images/temples/golden-temple-vellore.webp",
        highlight: "Star Path Spiritual Walk"
      },
      {
        num: "03",
        name: "ARUNACHALAM",
        deity: "Sri Arunachaleswarar",
        location: "Tiruvannamalai (85 km from Vellore)",
        desc: "Ancient Shiva Agni Sthalam at the base of sacred Annamalai Hill.",
        image: "/images/temples/Arunachalam.webp",
        highlight: "Agni Lingam Darshan"
      }
    ]
  };

  const otherPackages = packages.filter(p => p.id !== "kanipakam-golden-arunachalam");

  return (
    <section id="packages-section" className="py-20 sm:py-24 bg-ivory-200/50 border-t border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-gold-dark text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-md shadow-sm mb-3">
            OUR PILGRIMAGE PACKAGES
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Popular Temple Tour Packages
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            Planned multi-temple circuits and direct transfers departing from Tirupati.
          </p>
        </div>

        {/* 1. FEATURED 3-TEMPLE MASTER CARD (Kanipakam • Golden Temple • Arunachalam) */}
        <div className="mb-14 bg-card rounded-3xl border-2 border-gold/60 shadow-editorial overflow-hidden">
          
          {/* Card Top Banner with Badge */}
          <div className="p-5 sm:p-6 bg-charcoal text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gold/30">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="bg-gold-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {triTempleData.badge}
                </span>
                <span className="text-xs text-gold-soft font-semibold">
                  • {triTempleData.distance}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {triTempleData.title}
              </h3>
            </div>

            <Link
              to={`/packages/${triTempleData.slug}`}
              className="px-5 py-2.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-1.5 shrink-0"
            >
              <span>View Full Itinerary</span>
              <ArrowRight className="w-4 h-4 text-gold-soft" />
            </Link>
          </div>

          {/* 3-TEMPLE SHOWCASE WITH FULLY VISIBLE BOLD ARROWS */}
          <div className="p-5 sm:p-8 bg-white">
            
            {/* Desktop & Tablet Connected Flex Layout */}
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
              
              {/* Stop 1: Kanipakam */}
              <div className="flex-1 bg-ivory rounded-2xl border border-warmBorder overflow-hidden shadow-sm flex flex-col justify-between group hover:border-gold transition-colors">
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-charcoal">
                    <img
                      src={triTempleData.temples[0].image}
                      alt={triTempleData.temples[0].name}
                      width="400"
                      height="208"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="w-6 h-6 rounded-full bg-gold text-charcoal font-bold text-xs flex items-center justify-center shadow-md">
                        1
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                      <span className="text-[10px] font-semibold text-gold-soft uppercase tracking-wider block">
                        {triTempleData.temples[0].deity}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-white drop-shadow-md">
                        {triTempleData.temples[0].name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5 text-left">
                    <div className="flex items-center text-[11px] font-semibold text-gold-dark">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                      <span>{triTempleData.temples[0].location}</span>
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {triTempleData.temples[0].desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <span className="text-[10px] font-bold text-maroon-accent uppercase block pt-2 border-t border-warmBorder/60">
                    Stop 1: Pooja & Darshan
                  </span>
                </div>
              </div>

              {/* Bold Connector Arrow 1 */}
              <div className="flex flex-col items-center justify-center shrink-0 self-center py-2 px-1">
                {/* Desktop Horizontal Arrow */}
                <div className="hidden md:flex flex-col items-center justify-center space-y-1 bg-ivory-200 p-2.5 rounded-2xl border border-warmBorder shadow-sm">
                  <span className="text-[10px] font-bold text-gold-dark">65 km</span>
                  <div className="w-8 h-8 rounded-full bg-maroon-accent text-white flex items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 text-gold-soft stroke-[2.5]" />
                  </div>
                  <span className="text-[9px] font-bold uppercase text-charcoal-muted">Drive</span>
                </div>

                {/* Mobile Vertical Arrow */}
                <div className="flex md:hidden items-center justify-center space-x-2 bg-ivory-200 px-4 py-2 rounded-xl border border-warmBorder w-full">
                  <span className="text-xs font-bold text-charcoal">Drive 65 km</span>
                  <div className="w-6 h-6 rounded-full bg-maroon-accent text-white flex items-center justify-center shadow-sm">
                    <ArrowDown className="w-3.5 h-3.5 text-gold-soft stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-gold-dark">to Golden Temple</span>
                </div>
              </div>

              {/* Stop 2: Golden Temple */}
              <div className="flex-1 bg-ivory rounded-2xl border border-warmBorder overflow-hidden shadow-sm flex flex-col justify-between group hover:border-gold transition-colors">
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-charcoal">
                    <img
                      src={triTempleData.temples[1].image}
                      alt={triTempleData.temples[1].name}
                      width="400"
                      height="208"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="w-6 h-6 rounded-full bg-gold text-charcoal font-bold text-xs flex items-center justify-center shadow-md">
                        2
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                      <span className="text-[10px] font-semibold text-gold-soft uppercase tracking-wider block">
                        {triTempleData.temples[1].deity}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-white drop-shadow-md">
                        {triTempleData.temples[1].name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5 text-left">
                    <div className="flex items-center text-[11px] font-semibold text-gold-dark">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                      <span>{triTempleData.temples[1].location}</span>
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {triTempleData.temples[1].desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <span className="text-[10px] font-bold text-maroon-accent uppercase block pt-2 border-t border-warmBorder/60">
                    Stop 2: Gold Sanctum
                  </span>
                </div>
              </div>

              {/* Bold Connector Arrow 2 */}
              <div className="flex flex-col items-center justify-center shrink-0 self-center py-2 px-1">
                {/* Desktop Horizontal Arrow */}
                <div className="hidden md:flex flex-col items-center justify-center space-y-1 bg-ivory-200 p-2.5 rounded-2xl border border-warmBorder shadow-sm">
                  <span className="text-[10px] font-bold text-gold-dark">85 km</span>
                  <div className="w-8 h-8 rounded-full bg-maroon-accent text-white flex items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 text-gold-soft stroke-[2.5]" />
                  </div>
                  <span className="text-[9px] font-bold uppercase text-charcoal-muted">Drive</span>
                </div>

                {/* Mobile Vertical Arrow */}
                <div className="flex md:hidden items-center justify-center space-x-2 bg-ivory-200 px-4 py-2 rounded-xl border border-warmBorder w-full">
                  <span className="text-xs font-bold text-charcoal">Drive 85 km</span>
                  <div className="w-6 h-6 rounded-full bg-maroon-accent text-white flex items-center justify-center shadow-sm">
                    <ArrowDown className="w-3.5 h-3.5 text-gold-soft stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-gold-dark">to Arunachalam</span>
                </div>
              </div>

              {/* Stop 3: Arunachalam */}
              <div className="flex-1 bg-ivory rounded-2xl border border-warmBorder overflow-hidden shadow-sm flex flex-col justify-between h-full group hover:border-gold transition-colors">
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-charcoal">
                    <img
                      src={triTempleData.temples[2].image}
                      alt={triTempleData.temples[2].name}
                      width="400"
                      height="208"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="w-6 h-6 rounded-full bg-gold text-charcoal font-bold text-xs flex items-center justify-center shadow-md">
                        3
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                      <span className="text-[10px] font-semibold text-gold-soft uppercase tracking-wider block">
                        {triTempleData.temples[2].deity}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-white drop-shadow-md">
                        {triTempleData.temples[2].name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5 text-left">
                    <div className="flex items-center text-[11px] font-semibold text-gold-dark">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                      <span>{triTempleData.temples[2].location}</span>
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {triTempleData.temples[2].desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <span className="text-[10px] font-bold text-maroon-accent uppercase block pt-2 border-t border-warmBorder/60">
                    Stop 3: Agni Lingam & Return
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Route Summary & Rates Ribbon */}
          <div className="p-4 sm:p-5 bg-ivory border-t border-warmBorder flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center space-x-2 text-charcoal font-semibold">
              <Navigation className="w-4 h-4 text-gold shrink-0" />
              <span>Full Route:</span>
              <span className="text-maroon-accent font-bold">
                Tirupati ➔ Kanipakam ➔ Golden Temple (Vellore) ➔ Arunachalam ➔ Tirupati Drop
              </span>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <span className="text-charcoal-muted font-medium">Swift Dzire, Ertiga, Innova & Tempo available</span>
              <Link
                to={`/packages/${triTempleData.slug}`}
                className="px-4 py-2 bg-charcoal hover:bg-maroon-accent text-white font-bold rounded-xl uppercase tracking-wider transition-colors text-[11px]"
              >
                Itinerary & Rates →
              </Link>
            </div>
          </div>

        </div>

        {/* 2. OTHER POPULAR PACKAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-card rounded-3xl overflow-hidden border border-warmBorder shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-charcoal">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    width="400"
                    height="208"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white text-charcoal text-[10px] font-bold px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <span className="text-[10px] uppercase font-bold text-gold-soft tracking-wider block">
                      {pkg.distance}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5 bg-white">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal leading-snug group-hover:text-maroon-accent transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="flex items-start space-x-2 text-xs font-semibold text-gold-dark">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{pkg.tagline}</span>
                  </div>

                  <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                    {pkg.overview}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0 bg-white">
                <Link
                  to={`/packages/${pkg.slug}`}
                  className="w-full py-2.5 px-4 bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal rounded-xl text-xs font-bold uppercase tracking-wider border border-warmBorder hover:border-maroon-accent transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>View Itinerary Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
