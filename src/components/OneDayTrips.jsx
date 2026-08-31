import React from 'react';
import { ArrowRight, MapPin, Sparkles, Clock, Check } from 'lucide-react';

export default function OneDayTrips({ onBookRoute }) {
  const routes = [
    {
      id: "route-01",
      routeNum: "Route 01",
      title: "Tirupati → Tirumala",
      badge: "1 Day Trip",
      image: "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp",
      distance: "22 km (Ghat Road)",
      stops: ["Tirupati Pickup", "Alipiri Security Gate", "Tirumala Hilltop Darshan Drop", "Return Drop"],
      desc: "Smooth ghat road transfers timed to your SSD/SED darshan token timings with experienced ghat chauffeurs."
    },
    {
      id: "route-02",
      routeNum: "Route 02",
      title: "Tirupati → Kanipakam → Golden Temple → Arunachalam",
      badge: "1 Day Trip",
      image: "/images/temples/Galipgopuram_of_Kanipakam_temple_(May_2019)_4.jpg",
      distance: "~380 km Round Trip",
      stops: ["Kanipakam (Swayambhu Vinayaka)", "Golden Temple Sripuram (Vellore)", "Arunachaleswarar Temple (Tiruvannamalai)"],
      desc: "An auspicious tripartite pilgrimage covering Lord Ganesha, Goddess Lakshmi Narayani, and Shiva Agni Lingam."
    },
    {
      id: "route-03",
      routeNum: "Route 03",
      title: "Tirupati → Padmavati → Srinivasa Mangapuram → ISKCON → Kapila Theertham → Govindaraja Swamy",
      badge: "1 Day Temple Tour",
      image: "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp",
      distance: "Local City Circuit (~45 km)",
      stops: [
        "1. Padmavati Temple (Tiruchanur)",
        "2. Srinivasa Mangapuram",
        "3. ISKCON Temple",
        "4. Kapila Theertham",
        "5. Govindaraja Swamy Temple"
      ],
      desc: "Complete 5-temple local darshan circuit covering the sacred shrines of the Tirupati valley."
    },
    {
      id: "route-04",
      routeNum: "Route 04",
      title: "Tirupati → Kanchipuram",
      badge: "1 Day Trip",
      image: "/images/temples/Arunachalam.webp",
      distance: "115 km each way",
      stops: ["Sri Kamakshi Amman Temple", "Ekambareswarar Temple (Earth Lingam)", "Varadharaja Perumal Temple", "Silk Weaving Centers"],
      desc: "Comfortable interstate cab travel to the historic City of Thousand Temples with waiting assistance."
    },
    {
      id: "route-05",
      routeNum: "Route 05",
      title: "Tirupati → Srikalahasti",
      badge: "1 Day Trip",
      image: "/images/temples/kalahastri.jpg",
      distance: "38 km (45 mins)",
      stops: ["Sri Kalahasteeswara Temple (Vayu Lingam)", "Rahu-Ketu Sarpa Dosha Pooja Halls", "Swarnamukhi River Bank"],
      desc: "Punctual transfers aligned with your Rahu-Ketu pooja slots with waiting time included."
    },
    {
      id: "route-06",
      routeNum: "Route 06",
      title: "Tirupati → Tiruttani",
      badge: "1 Day Trip",
      image: "/images/temples/Galipgopuram_of_Kanipakam_temple_(May_2019)_4.jpg",
      distance: "65 km (1.5 hrs)",
      stops: ["Sri Subramanya Swamy Hilltop Temple", "365 Sacred Steps", "Tanigaimalai Ascent"],
      desc: "Scenic highway trip to the revered 5th Arupadaiveedu hill abode of Lord Murugan."
    }
  ];

  return (
    <section id="one-day-trips" className="py-24 bg-ivory-200/50 border-t border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>SAME-DAY RETURN TOURS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-4">
            1 Day Pilgrimage Trips
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Reliable, air-conditioned cabs dedicated exclusively to your family for same-day darshan tours from Tirupati.
          </p>
        </div>

        {/* 6 Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {routes.map((route) => (
            <div
              key={route.id}
              className="editorial-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Real Image Header with High Contrast Scrim */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-charcoal">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/15" />

                  {/* Route Label & Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white text-charcoal text-[11px] font-bold tracking-wider uppercase border border-gold/40 shadow-sm">
                      {route.routeNum}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 text-white text-[11px] font-semibold border border-white/30 backdrop-blur-sm">
                      {route.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {route.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center text-xs font-semibold text-gold-dark">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-gold shrink-0" />
                    <span>{route.distance}</span>
                  </div>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {route.desc}
                  </p>

                  <div className="pt-2 border-t border-warmBorder/70">
                    <span className="text-[10px] uppercase font-bold text-charcoal tracking-wider block mb-1.5">
                      Stops Covered:
                    </span>
                    <ul className="space-y-1 text-xs text-charcoal">
                      {route.stops.map((stop, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2 shrink-0" />
                          <span className="font-medium leading-tight">{stop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookRoute && onBookRoute({ title: route.title, routeNum: route.routeNum })}
                  className="w-full py-2.5 px-4 bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal font-semibold text-xs rounded-xl border border-warmBorder hover:border-maroon-accent transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Book {route.routeNum}</span>
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
