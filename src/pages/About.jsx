import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, CheckCircle2, Phone, MessageCircle, Car, 
  MapPin, Clock, ShieldCheck, ArrowRight, Plane, Train, Landmark, Users, Navigation
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { contactConfig } from '../config/contact';
import SEOHead from '../components/SEOHead';
import WhyChooseUs from '../components/WhyChooseUs';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import CTASection from '../components/CTASection';

export default function About({ onOpenBooking }) {
  const cabServices = [
    {
      title: "Tirupati City & Local Cabs",
      desc: "24/7 on-demand local taxi rentals for hotel transfers, local errands, and day rentals across Tirupati.",
      link: "/services/tirupati-cabs",
      linkText: "View Local Cab Services",
      icon: Car
    },
    {
      title: "Tirupati to Tirumala Cabs",
      desc: "Dedicated ghat-road certified taxis for Lord Venkateswara Swami darshan with flexible waiting time at Tirumala hilltop.",
      link: "/packages/tirupati-to-tirumala-1-day",
      linkText: "Tirumala Darshan Taxi",
      icon: Landmark
    },
    {
      title: "Tirupati Airport (TIR) Taxi Transfers",
      desc: "Punctual flight-tracked pickups from Renigunta Airport directly to Tirupati hotels or straight to Tirumala cottages.",
      link: "/services/tirupati-airport-taxi",
      linkText: "Book Airport Transfer",
      icon: Plane
    },
    {
      title: "Railway Station Transfers (TPTY / RU)",
      desc: "Doorstep pickup and luggage assistance at Tirupati Main and Renigunta railway stations 24 hours a day.",
      link: "/services/tirupati-cabs",
      linkText: "Station Pickup Details",
      icon: Train
    },
    {
      title: "Local Sightseeing & Temple Circuits",
      desc: "Explore 13 holy spots including Padmavathi Temple, Kapila Theertham, Srinivasa Mangapuram, and ISKCON.",
      link: "/sightseeing",
      linkText: "Explore Sightseeing",
      icon: Navigation
    },
    {
      title: "Outstation Cabs from Tirupati",
      desc: "One-way and round-trip intercity taxi drops to Chennai, Bengaluru, Vellore (Golden Temple & CMC), and Arunachalam.",
      link: "/services/tirupati-outstation-cabs",
      linkText: "Outstation Cab Tariffs",
      icon: MapPin
    }
  ];

  const fleet = [
    {
      name: "Swift Dzire / Etios",
      type: "AC Sedan",
      capacity: "4 + 1 Passengers",
      rate: "₹14 / km",
      desc: "Ideal for couples, solo travelers, and small families."
    },
    {
      name: "Maruti Ertiga",
      type: "Family MUV",
      capacity: "6 + 1 Passengers",
      rate: "₹19 / km",
      desc: "Spacious seating with ample luggage capacity for families."
    },
    {
      name: "Toyota Innova Crysta",
      type: "Luxury MPV",
      capacity: "7 + 1 Passengers",
      rate: "₹23 / km",
      desc: "Maximum comfort for ghat road travel and long journeys."
    },
    {
      name: "Force Tempo Traveller",
      type: "Luxury Minibus",
      capacity: "12 – 14 Passengers",
      rate: "₹28 / km",
      desc: "Perfect for large pilgrim groups and multi-family tours."
    }
  ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Go Ride Tirupati Travels - Best Cabs in Tirupati",
    "url": "https://www.goridetirupatitravels.in/best-cabs-in-tirupati",
    "telephone": "+918500953558",
    "description": "Looking for the best cabs in Tirupati? GoRide Tirupati Travels offers Tirumala trips, sightseeing, airport transfers, railway transfers and outstation cabs.",
    "priceRange": "₹14 - ₹28 per km",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Go Ride Tirupati Travels",
      "telephone": "+918500953558",
      "url": "https://www.goridetirupatitravels.in/"
    },
    "areaServed": [
      { "@type": "City", "name": "Tirupati" },
      { "@type": "AdministrativeArea", "name": "Tirumala" },
      { "@type": "Airport", "name": "Tirupati Airport (TIR)" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Vellore" }
    ]
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      <SEOHead
        title="Best Cabs in Tirupati | GoRide Tirupati Travels"
        description="Looking for the best cabs in Tirupati? GoRide Tirupati Travels offers Tirumala trips, sightseeing, airport transfers, railway transfers and outstation cabs."
        canonicalUrl="https://www.goridetirupatitravels.in/best-cabs-in-tirupati"
        keywords="Best Cabs in Tirupati, Cabs in Tirupati, Tirupati Cab Service, Taxi in Tirupati, Tirupati Taxi Service, Best Taxi in Tirupati, Tirumala Cabs, Tirupati Travels"
        schemaJson={schemaJson}
      />
      
      {/* 1. Header Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>RELIABLE 24/7 TAXI &amp; TRAVEL SERVICE</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-4 max-w-4xl mx-auto">
          Best Cabs in Tirupati
        </h1>

        <p className="max-w-3xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Welcome to <strong className="text-charcoal font-semibold">GoRide Tirupati Travels</strong>, managed by local travel specialist N Viswanadham. Rooted in the holy city of Tirupati, we offer dependable, comfortable, and transparent cab services designed around the schedules of pilgrims, tourists, and business travelers. From early-morning Tirumala Suprabhatam darshan to flight pickups at Renigunta Airport and long-distance outstation travel, our dedicated fleet and certified mountain drivers ensure a smooth journey.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
          <button
            onClick={() => onOpenBooking({ destination: "Best Cabs in Tirupati - Booking" })}
            className="w-full sm:w-auto px-8 py-3.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Car className="w-4 h-4 text-gold-soft" />
            <span>Book Your Tirupati Cab</span>
          </button>

          <a
            href={contactConfig.getTelUrl()}
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-ivory border border-warmBorder text-charcoal rounded-full text-xs font-bold uppercase tracking-wider shadow-xs transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-maroon-accent" />
            <span>Call Desk: 85009 53558</span>
          </a>

          <a
            href={contactConfig.getWhatsAppUrl({ notes: "Hello GoRide Travels, I would like to book a cab in Tirupati." })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xs transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>

      {/* 2. Cab Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-12">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
            WHAT WE OFFER
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Complete Cab &amp; Taxi Services in Tirupati
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl mx-auto mt-1">
            Dedicated private vehicles for all local, hilltop, airport, and outstation travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-card rounded-3xl p-6 border border-warmBorder shadow-editorial flex flex-col justify-between hover:border-gold/50 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ivory-200 border border-warmBorder flex items-center justify-center text-maroon-accent mb-4 group-hover:bg-maroon-accent group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <Link
                  to={srv.link}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-maroon-accent hover:text-maroon-hover transition-colors pt-2 border-t border-warmBorder/60"
                >
                  <span>{srv.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Fleet & Transparent Tariffs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        <div className="bg-card rounded-3xl p-6 sm:p-10 border border-warmBorder shadow-editorial">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
              CHOOSE YOUR RIDE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Available Vehicle Fleet &amp; Transparent Rates
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl mx-auto mt-1">
              Transparent per-kilometer tariffs with certified drivers and sanitized vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fleet.map((veh, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-warmBorder shadow-xs hover:border-gold/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-ivory-200 border border-warmBorder text-charcoal">
                      {veh.type}
                    </span>
                    <span className="text-xs font-bold text-maroon-accent">
                      {veh.rate}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-charcoal mb-1">
                    {veh.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-[11px] text-charcoal-muted mb-2">
                    <Users className="w-3 h-3 text-gold" />
                    <span>{veh.capacity}</span>
                  </div>
                  <p className="text-[11px] text-charcoal-muted leading-snug">
                    {veh.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking({ vehicle: veh.name, destination: "Tirupati Cab Booking" })}
                  className="mt-4 w-full py-2 bg-ivory hover:bg-ivory-200 text-charcoal rounded-xl text-[11px] font-bold uppercase tracking-wider border border-warmBorder transition-colors cursor-pointer"
                >
                  Select {veh.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/vehicles"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-maroon-accent hover:underline"
            >
              <span>View complete vehicle fleet details &amp; policies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Story & Visual Editorial Showcase (Preserved About Context) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Atmospheric Real Temple Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-warmBorder bg-charcoal h-96 sm:h-[430px] group">
              <img
                src="/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp"
                alt="Sacred Tirumala Balaji Temple"
                width="600"
                height="430"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
              
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                  SACRED HERITAGE
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
                <span className="text-xs uppercase tracking-widest text-white font-bold block drop-shadow-md">
                  Rooted in Tirupati
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Guiding thousands of devotees across the holy shrines of Andhra &amp; Tamil Nadu.
                </p>
                <p className="text-xs text-white/90 font-medium drop-shadow-sm pt-1">
                  Managed by N Viswanadham • 24/7 dedicated cabs with local mountain chauffeurs.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Core Philosophy & Business Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                {siteContent.aboutPage.visionTitle}
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                {siteContent.aboutPage.visionText}
              </p>

              <div className="space-y-4 pt-4 border-t border-warmBorder">
                {siteContent.aboutPage.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-ivory text-gold flex items-center justify-center shrink-0 mt-0.5 border border-warmBorder">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-charcoal">{pt.title}</h4>
                      <p className="text-xs text-charcoal-muted mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Why Choose Us Component */}
      <WhyChooseUs />

      {/* 6. Verified Google Reviews */}
      <GoogleReviewsSection />

      {/* 7. Bottom CTA */}
      <div className="mt-16">
        <CTASection onOpenBooking={() => onOpenBooking()} />
      </div>

    </div>
  );
}
