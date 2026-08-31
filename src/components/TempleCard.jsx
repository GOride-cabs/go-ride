import React, { useState } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { destinations } from '../data/destinations';

export default function TempleCard({ onBookTemple }) {
  const localTemples = destinations.filter(d => d.category === 'Local Temple');
  const [selectedTemple, setSelectedTemple] = useState(null);

  return (
    <section className="py-24 bg-ivory-200/50 border-t border-warmBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>SACRED HERITAGE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-4">
            Discover Tirupati
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Revered temples consecrated across the sacred valley of Tirupati, each holding centuries of divine grace and architectural splendor.
          </p>
        </div>

        {/* 5 Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localTemples.map((temple) => (
            <div
              key={temple.id}
              className="editorial-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Container with High Contrast Overlay */}
              <div>
                <div className="relative h-56 sm:h-60 overflow-hidden bg-charcoal">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
                  
                  {/* Distance Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-black/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/30 backdrop-blur-sm">
                      {temple.distanceFromTirupati}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-soft block drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {temple.location}
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {temple.name}
                    </h3>
                  </div>
                </div>

                {/* Text Description */}
                <div className="p-5">
                  <p className="text-xs sm:text-sm text-charcoal-muted line-clamp-2 mb-2 leading-relaxed">
                    {temple.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0">
                <div className="flex items-center justify-between pt-3 border-t border-warmBorder">
                  <button
                    onClick={() => setSelectedTemple(temple)}
                    className="text-xs font-semibold text-charcoal hover:text-maroon-accent transition-colors inline-flex items-center"
                  >
                    <span>Read History</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>

                  <button
                    onClick={() => onBookTemple && onBookTemple(temple.name)}
                    className="px-3.5 py-1.5 bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal text-xs font-semibold rounded-full border border-warmBorder transition-all"
                  >
                    Plan Visit
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Temple Detail Modal */}
      {selectedTemple && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-card w-full max-w-xl rounded-3xl shadow-2xl border border-warmBorder overflow-hidden">
            <div className="relative h-48 sm:h-56 bg-charcoal">
              <img
                src={selectedTemple.image}
                alt={selectedTemple.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedTemple(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 text-white z-10">
                <span className="text-xs text-gold-soft uppercase font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{selectedTemple.location}</span>
                <h3 className="font-serif text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{selectedTemple.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {selectedTemple.longDescription}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Key Highlights</h4>
                <ul className="space-y-1.5 text-xs text-charcoal">
                  {selectedTemple.keyHighlights?.map((kh, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                      {kh}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-warmBorder flex items-center justify-between">
                <span className="text-xs text-charcoal-muted">Distance: {selectedTemple.distanceFromTirupati}</span>
                <button
                  onClick={() => {
                    const tName = selectedTemple.name;
                    setSelectedTemple(null);
                    if (onBookTemple) onBookTemple(tName);
                  }}
                  className="px-6 py-2.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs font-semibold shadow-editorial"
                >
                  Book Cab for this Temple
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
