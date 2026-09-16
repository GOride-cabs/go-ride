import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, ShieldCheck, Check, MessageCircle, Sparkles, MapPin, Phone, Car, ChevronRight, Calendar } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { packages } from '../data/packages';
import { contactConfig } from '../config/contact';

export default function PackageDetails({ onOpenBooking }) {
  const { slug } = useParams();
  const pkg = packages.find(p => p.slug === slug) || packages[0];
  const stopsList = pkg.stops || [];
  const duration = pkg.durationBadge || pkg.badge || pkg.duration || '1 DAY TRIP';
  const category = pkg.category || 'Pilgrimage';
  const tagline = pkg.tagline || pkg.description || '';
  const overview = pkg.overview || pkg.description || '';
  const highlights = pkg.highlights || [
    "Clean, sanitized air-conditioned private vehicle",
    "Doorstep pickup & return drop across all Tirupati locations",
    "Dedicated chauffeur with darshan waiting assistance",
    "Transparent billing policy"
  ];
  const isTirumala = pkg.id === 'tirumala' || pkg.slug.includes('tirumala');
  const vehicleRates = pkg.vehicleRates;

  const handleWhatsAppInquiry = () => {
    const url = contactConfig.getWhatsAppUrl({
      destination: pkg.title,
      notes: `Enquiring for package: ${pkg.title} (${duration})`
    });
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      
      {/* Top Breadcrumb Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <Link
          to="/"
          className="inline-flex items-center text-xs font-semibold text-charcoal-muted hover:text-maroon-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Back to Home & Packages</span>
        </Link>
      </div>

      {/* Package Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-3xl overflow-hidden shadow-editorial border border-warmBorder h-72 sm:h-96 bg-charcoal">
          <img
            src={pkg.image || "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp"}
            alt={pkg.title}
            width="1200"
            height="384"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-charcoal font-bold text-xs uppercase tracking-wider border border-gold/40 shadow-sm">
              {duration}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/20">
              {pkg.distance}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl z-10 space-y-1">
            <span className="text-[11px] font-bold uppercase text-gold-soft tracking-wider block drop-shadow-sm">
              Tirupati Pilgrimage Tour Package
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {pkg.title}
            </h1>
            <p className="text-xs sm:text-sm text-ivory-100 font-medium drop-shadow-sm">
              {tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Detailed Schedule, Itinerary, Vehicle Rates */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Overview */}
            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-[11px] font-bold tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>TOUR OVERVIEW</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                About This Pilgrimage Route
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {overview}
              </p>
            </div>

            {/* 2. Stop-by-Stop Detailed Timeline */}
            {stopsList.length > 0 && (
              <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-[11px] font-bold tracking-widest uppercase mb-3">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>DETAILED STOP SCHEDULE</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                  Itinerary & Temple Stops
                </h2>

                <div className="space-y-4">
                  {stopsList.map((stop, index) => {
                    const stopName = typeof stop === 'string' ? stop : (stop?.name || '');
                    const stopLocation = typeof stop === 'object' && stop?.location ? stop.location : '';
                    const stopDesc = typeof stop === 'object' && stop?.desc ? stop.desc : '';
                    const stopTiming = typeof stop === 'object' && stop?.timing ? stop.timing : '';
                    const stopNum = typeof stop === 'object' && stop?.num ? stop.num : `0${index + 1}`;

                    return (
                      <div key={index} className="p-4 bg-ivory rounded-2xl border border-warmBorder flex items-start space-x-4">
                        <div className="w-9 h-9 rounded-xl bg-white border border-warmBorder flex items-center justify-center font-serif font-bold text-sm text-gold-dark shrink-0 shadow-sm">
                          {stopNum}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="font-serif text-base font-bold text-charcoal">
                              {stopName}
                            </h3>
                            {stopTiming && (
                              <span className="text-[10px] font-bold text-charcoal bg-white px-2.5 py-0.5 rounded-full border border-warmBorder flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gold" />
                                {stopTiming}
                              </span>
                            )}
                          </div>

                          {stopLocation && (
                            <span className="text-[11px] font-semibold text-gold-dark block mb-1">
                              📍 {stopLocation}
                            </span>
                          )}

                          {stopDesc && (
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                              {stopDesc}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Vehicle Fleet & Per-KM Tariff Table (Hidden for Tirupati to Tirumala) */}
            {!isTirumala && vehicleRates && vehicleRates.length > 0 && (
              <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-[11px] font-bold tracking-widest uppercase mb-3">
                  <Car className="w-3.5 h-3.5 text-gold" />
                  <span>PER-KM VEHICLE TARIFFS</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                  Available Vehicles & Per-KM Rates
                </h2>

                <div className="border border-charcoal/20 rounded-2xl overflow-hidden text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-ivory-200 border-b border-charcoal/20 text-charcoal font-bold">
                        <th className="p-3">Vehicle Model</th>
                        <th className="p-3">Rate per KM</th>
                        <th className="p-3 hidden sm:table-cell">Capacity & Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicleRates.map((vr, i) => (
                        <tr
                          key={i}
                          className={`border-b border-charcoal/15 last:border-b-0 ${
                            i % 2 === 0 ? 'bg-white' : 'bg-ivory/50'
                          }`}
                        >
                          <td className="p-3 font-serif font-bold text-charcoal">
                            {vr.vehicle}
                          </td>
                          <td className="p-3 font-bold text-maroon-accent text-sm">
                            {vr.rate}
                          </td>
                          <td className="p-3 text-charcoal-muted hidden sm:table-cell">
                            {vr.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. Inclusions & Standards */}
            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span>Inclusions & Travel Standards</span>
              </h2>

              <ul className="space-y-2.5">
                {highlights.map((hl, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-charcoal">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mr-2.5 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Sticky Booking & Direct Contact Desk */}
          <div className="lg:col-span-5">
            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial sticky top-28 space-y-6">
              
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-dark block mb-1">
                  DIRECT RESERVATION DESK
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                  Book {pkg.title}
                </h3>
                <p className="text-xs text-charcoal-muted mt-1">
                  Instant confirmation from N Viswanadham (+91 85009 53558).
                </p>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="space-y-2.5">
                <a
                  href={contactConfig.getTelUrl()}
                  className="w-full py-3.5 px-4 rounded-xl bg-maroon-accent hover:bg-maroon-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-gold-soft" />
                  <span>CALL: 85009 53558</span>
                </a>

                <button
                  onClick={handleWhatsAppInquiry}
                  aria-label="Book on WhatsApp with trip details"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP INSTANT BOOKING</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center my-2">
                <div className="border-t border-warmBorder w-full" />
                <span className="bg-card px-3 text-[10px] font-bold text-charcoal-muted uppercase">Or fill booking details</span>
              </div>

              {/* Prefilled Booking Form */}
              <BookingForm
                initialDestination={pkg.title}
                initialJourneyType={duration}
              />

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
