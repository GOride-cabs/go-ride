import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Phone, MessageCircle, Navigation, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { contactConfig } from '../config/contact';

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 bg-ivory min-h-screen flex items-center justify-center">
      <SEOHead
        title="Page Not Found (404) | GoRide Tirupati Travels"
        description="The requested page could not be found. Return to GoRide Tirupati Travels homepage to explore 24/7 Tirupati cab services, Tirumala tours, and outstation taxi booking."
        canonicalUrl="https://www.goridetirupatitravels.in/"
      />

      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-sm font-bold text-gold-dark tracking-widest uppercase block mb-2">
          ERROR 404
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Please use the links below to find what you need.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <Link
            to="/"
            className="w-full sm:w-auto px-7 py-3.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-editorial"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={contactConfig.getTelUrl()}
            className="w-full sm:w-auto px-7 py-3.5 bg-card hover:bg-ivory-200 text-charcoal border border-warmBorder rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-gold-dark" />
            <span>Call Desk: 85009 53558</span>
          </a>
        </div>

        {/* Helpful Direct Links */}
        <div className="p-6 bg-white rounded-3xl border border-warmBorder text-left">
          <h2 className="font-serif text-base font-bold text-charcoal mb-3">
            Popular Cab &amp; Pilgrimage Services:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-charcoal-muted">
            <Link to="/services/tirupati-cabs" className="p-2 hover:bg-ivory rounded-lg hover:text-maroon-accent flex items-center justify-between">
              <span>🚕 24/7 Tirupati Cabs Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/packages/tirupati-to-tirumala-1-day" className="p-2 hover:bg-ivory rounded-lg hover:text-maroon-accent flex items-center justify-between">
              <span>🛕 Tirupati to Tirumala 1-Day Cab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/services/tirupati-airport-taxi" className="p-2 hover:bg-ivory rounded-lg hover:text-maroon-accent flex items-center justify-between">
              <span>✈️ Tirupati Airport (TIR) Taxi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/services/tirupati-outstation-cabs" className="p-2 hover:bg-ivory rounded-lg hover:text-maroon-accent flex items-center justify-between">
              <span>🛣️ Outstation Cabs (Chennai, Bangalore)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/sightseeing" className="p-2 hover:bg-ivory rounded-lg hover:text-maroon-accent flex items-center justify-between">
              <span>🌟 Local 13 Temples Sightseeing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/contact" className="p-2 hover:bg-ivory rounded-lg hover:text-maroon-accent flex items-center justify-between">
              <span>📞 Contact &amp; Booking Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
