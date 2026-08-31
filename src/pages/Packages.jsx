import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import JourneyCard from '../components/JourneyCard';
import CTASection from '../components/CTASection';
import { packages } from '../data/packages';

export default function Packages({ onOpenBooking }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    'All',
    '1-Day Local Tour',
    '1-Day Special Circuit',
    'Signature 2-Day Tour',
    'Heritage Pilgrimage Route',
    'Holy Pilgrimage Route',
    'Outstation Drop Service'
  ];

  const filteredPackages = selectedFilter === 'All'
    ? packages
    : packages.filter(p => p.category === selectedFilter);

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>TEMPLE TOURS & ITINERARIES</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight mb-4">
          Pilgrimage Packages & Routes
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Carefully planned sacred routes departing from Tirupati. Enjoy relaxed darshan timings, sanitized air-conditioned vehicles, and experienced local drivers.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedFilter === opt
                  ? 'bg-charcoal text-white shadow-editorial border border-charcoal font-semibold'
                  : 'bg-card text-charcoal border border-warmBorder hover:border-gold hover:bg-ivory-200'
              }`}
            >
              {opt === 'All' ? 'All Packages & Routes' : opt}
            </button>
          ))}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <JourneyCard
              key={pkg.id}
              pkg={pkg}
              onBook={(p) => onOpenBooking({ destination: p.title })}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16">
        <CTASection onOpenBooking={() => onOpenBooking()} />
      </div>

    </div>
  );
}
