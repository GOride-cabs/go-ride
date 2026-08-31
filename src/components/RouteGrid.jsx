import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Navigation } from 'lucide-react';
import { packages } from '../data/packages';

export default function RouteGrid({ onBookRoute }) {
  const otherRoutes = packages.filter(p => !p.isFeatured);

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-2">
              <Navigation className="w-3.5 h-3.5 text-gold" />
              <span>INDIVIDUAL & OUTSTATION ROUTES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Popular Temple Routes & City Drops
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md">
            Direct, point-to-point air-conditioned cab services connecting Tirupati to prominent pilgrimage abodes and major metropolitan transit hubs.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherRoutes.map((route) => (
            <div
              key={route.id}
              className="editorial-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Duration Badge & Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal bg-ivory-200 px-2.5 py-1 rounded-full border border-warmBorder">
                    {route.durationBadge}
                  </span>
                  <span className="text-[11px] text-charcoal-muted font-medium">
                    {route.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-maroon-accent transition-colors mb-2">
                  {route.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-5">
                  {route.tagline}
                </p>

                {/* Key Route Highlights */}
                <div className="space-y-2 mb-6">
                  {route.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-start text-xs text-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-warmBorder flex items-center justify-between gap-3">
                <Link
                  to={`/packages/${route.slug}`}
                  className="text-xs font-semibold text-charcoal hover:text-maroon-accent transition-colors inline-flex items-center"
                >
                  <span>Route Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <button
                  onClick={() => onBookRoute(route)}
                  className="px-4 py-1.5 bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal text-xs font-semibold rounded-full border border-warmBorder hover:border-maroon-accent transition-all"
                >
                  Book Ride
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
