import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function JourneyNavbar({ onStartJourney }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-lg bg-charcoal text-white flex items-center justify-center font-serif font-bold text-sm tracking-wider">
            GR
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-charcoal block leading-none">
              GO RIDE TIRUPATI CABS
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-gold-dark block mt-1">
              ORIGIN: TIRUPATI
            </span>
          </div>
        </Link>

        {/* Center: Minimalist Route Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-charcoal">
          <button onClick={() => scrollTo('route-builder')} className="hover:text-maroon-accent transition-colors">
            JOURNEYS
          </button>
          <button onClick={() => scrollTo('vehicles-section')} className="hover:text-maroon-accent transition-colors">
            VEHICLES
          </button>
          <a href={contactConfig.getTelUrl()} className="hover:text-maroon-accent transition-colors flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gold-dark" />
            <span>85009 53558</span>
          </a>
        </nav>

        {/* Right: Primary Action */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onStartJourney}
            className="px-5 py-2.5 rounded-lg bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center space-x-2 shadow-sm"
          >
            <span>START A JOURNEY</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-soft" />
          </button>
        </div>

      </div>
    </header>
  );
}
