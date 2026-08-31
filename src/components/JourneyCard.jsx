import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export default function JourneyCard({ pkg = {}, onBook }) {
  const stopsList = pkg.stops || pkg.routeStops || [];
  const duration = pkg.durationBadge || pkg.badge || pkg.duration || '1 DAY TRIP';
  const category = pkg.category || 'Pilgrimage';
  const tagline = pkg.tagline || pkg.description || '';

  return (
    <div className="editorial-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group bg-card border border-warmBorder shadow-editorial">
      
      {/* Top Image Banner with High Contrast Overlay */}
      <div>
        <div className="relative h-60 sm:h-64 overflow-hidden bg-charcoal">
          <img
            src={pkg.image || "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp"}
            alt={pkg.title || "Tirupati Tour Package"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          {/* Strong Dark Scrim for High Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
          
          {/* Duration Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-charcoal text-xs font-bold tracking-wider uppercase border border-gold/40 shadow-md">
              {duration}
            </span>
          </div>

          {/* Category Pill */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/70 text-white text-[11px] font-medium border border-white/30 backdrop-blur-sm">
              {category}
            </span>
          </div>

          {/* Title on Image in Pure White */}
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h3 className="font-serif text-2xl font-bold leading-snug text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {pkg.title}
            </h3>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {tagline && (
            <p className="text-xs sm:text-sm text-charcoal-muted mb-5 line-clamp-2 leading-relaxed">
              {tagline}
            </p>
          )}

          {/* Temples / Stops Covered */}
          {stopsList.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                Temples & Sacred Stops
              </h4>
              <ul className="space-y-2">
                {stopsList.map((stop, idx) => {
                  const stopName = typeof stop === 'string' ? stop : (stop?.name || '');
                  const stopLocation = typeof stop === 'object' && stop?.location ? stop.location : '';

                  return (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2 shrink-0" />
                      <span className="font-medium">{stopName}</span>
                      {stopLocation && (
                        <span className="text-charcoal-muted ml-1 text-xs">({stopLocation})</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-warmBorder flex items-center justify-between gap-3">
          {pkg.slug ? (
            <Link
              to={`/packages/${pkg.slug}`}
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-charcoal hover:text-maroon-accent transition-colors group/link"
            >
              <span>Explore Journey</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <span className="text-xs text-charcoal-muted">All Transfers Included</span>
          )}

          <button
            onClick={() => onBook && onBook(pkg)}
            className="px-4 py-2 bg-ivory hover:bg-ivory-200 text-charcoal text-xs font-semibold rounded-full border border-warmBorder hover:border-gold transition-all duration-200"
          >
            Quick Quote
          </button>
        </div>
      </div>

    </div>
  );
}
