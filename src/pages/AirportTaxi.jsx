import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, MapPin, Clock, Phone, MessageCircle, ShieldCheck, 
  CheckCircle2, ArrowRight, Car, Users, Sparkles, Navigation, ChevronDown, ChevronUp
} from 'lucide-react';
import { contactConfig } from '../config/contact';
import SEOHead from '../components/SEOHead';
import CTASection from '../components/CTASection';

export default function AirportTaxi({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const airportRoutes = [
    {
      id: "airport-to-tirumala",
      title: "Tirupati Airport (TIR) to Tirumala Hilltop",
      distance: "Approx. 40 km",
      time: "1 hour 15 mins",
      desc: "Direct flight-timed pickup from Renigunta Airport with direct ghat road transfer to your allotted TTD cottage, CRO office, or darshan queue complex in Tirumala.",
      target: "Tirupati Airport to Tirumala Cab"
    },
    {
      id: "airport-to-city",
      title: "Tirupati Airport (TIR) to Tirupati City Hotels",
      distance: "Approx. 15 km",
      time: "25 – 30 mins",
      desc: "Prompt terminal gate pickup and direct AC transfer to any hotel, resort, or residential address across Tirupati city, Alipiri, or Railway Station.",
      target: "Tirupati Airport to City Hotel Cab"
    },
    {
      id: "city-to-airport",
      title: "Tirupati City to Tirupati Airport (Drop)",
      distance: "Approx. 15 km",
      time: "25 – 30 mins",
      desc: "Punctual doorstep hotel pickup scheduled with ample buffer time before your flight departure (IndiGo, SpiceJet, Air India, Star Air).",
      target: "Tirupati City to Airport Drop"
    },
    {
      id: "tirumala-to-airport",
      title: "Tirumala Hilltop to Tirupati Airport (Drop)",
      distance: "Approx. 40 km",
      time: "1 hour 20 mins",
      desc: "Post-darshan return transfer from your Tirumala cottage directly to the departure terminal at Tirupati Airport.",
      target: "Tirumala to Tirupati Airport Drop"
    }
  ];

  const fleetOptions = [
    {
      name: "Swift Dzire",
      type: "AC Sedan",
      capacity: "4 + 1 Seater",
      rate: "₹14 / km",
      bestFor: "Solo travelers, couples, small families with luggage"
    },
    {
      name: "Maruti Ertiga",
      type: "Family MUV",
      capacity: "6 + 1 Seater",
      rate: "₹19 / km",
      bestFor: "Families with extra luggage & senior citizens"
    },
    {
      name: "Toyota Innova Crysta",
      type: "Luxury MPV",
      capacity: "7 + 1 Seater",
      rate: "₹23 / km",
      bestFor: "Spacious luxury travel & comfortable ghat road ride"
    },
    {
      name: "Force Tempo Traveller",
      type: "Luxury Minibus",
      capacity: "12 – 14 Seater",
      rate: "₹28 / km",
      bestFor: "Pilgrim groups, corporate groups & large families"
    }
  ];

  const faqs = [
    {
      q: "How does airport pickup coordination work at Tirupati Airport?",
      a: "Our chauffeur tracks your flight status in real time. Once your flight lands at Tirupati International Airport (Renigunta - TIR), the driver greets you at the arrival terminal with a nameboard and assists with your luggage to a chilled AC vehicle."
    },
    {
      q: "Can I book a direct cab from Tirupati Airport to Tirumala?",
      a: "Yes, we specialize in direct airport-to-Tirumala transfers (~40 km). Our mountain-certified chauffeurs take you via the Alipiri Ghat road directly to your Tirumala cottage or darshan entry gate."
    },
    {
      q: "What happens if my flight to Tirupati is delayed?",
      a: "No extra waiting fee is charged for airline schedule delays. We monitor all incoming flights from Hyderabad, Bengaluru, Chennai, Mumbai, and Delhi so your cab is waiting when you step outside."
    },
    {
      q: "What are the cab rates from Tirupati Airport?",
      a: "We offer transparent per-kilometer billing: Swift Dzire at ₹14/km, Maruti Ertiga at ₹19/km, Innova Crysta at ₹23/km, and Tempo Traveller at ₹28/km. Tolls, parking, and ghat road entry are clear with zero hidden costs."
    },
    {
      q: "How in advance should I book my airport taxi?",
      a: "We recommend booking at least 2 to 4 hours in advance, especially during Brahmotsavam, weekends, and festival holidays. Instant WhatsApp booking is available 24/7."
    }
  ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Go Ride Tirupati Airport Taxi & Cab Service",
    "serviceType": "Airport Transfer & Taxi Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Go Ride Tirupati Travels",
      "telephone": "+918500953558",
      "url": "https://www.goridetirupatitravels.in/"
    },
    "areaServed": [
      { "@type": "Airport", "name": "Tirupati Airport (TIR)" },
      { "@type": "City", "name": "Tirupati" },
      { "@type": "AdministrativeArea", "name": "Tirumala" }
    ],
    "description": "24/7 Tirupati Airport (Renigunta - TIR) taxi and cab service offering punctual flight-tracked transfers to Tirumala hilltop, city hotels, and railway stations.",
    "priceRange": "₹14 - ₹28 per km"
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      <SEOHead
        title="Tirupati Airport Taxi & Cab Service (TIR) | 24/7 Pickup to Tirumala & City"
        description="Book 24/7 Tirupati Airport taxi service with Go Ride. Punctual flight-tracked pickups from Renigunta Airport (TIR) directly to Tirumala cottages & city hotels. Sedan ₹14/km, Ertiga ₹19/km, Innova ₹23/km. Call +91 85009 53558."
        canonicalUrl="https://www.goridetirupatitravels.in/services/tirupati-airport-taxi"
        keywords="Tirupati Airport Taxi, Tirupati Airport Cab, Taxi from Tirupati Airport, Tirupati Airport to Tirumala Cab, Tirupati Airport to Tirumala Taxi, Tirupati Airport Pickup Taxi, Tirupati Airport Drop Taxi, Renigunta Airport Cab Booking"
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Plane className="w-3.5 h-3.5 text-gold" />
          <span>FLIGHT-TRACKED 24/7 AIRPORT TRANSFERS</span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-4 max-w-4xl mx-auto">
          Tirupati Airport Taxi &amp; Cab Service
        </h1>
        
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Punctual, flight-monitored private transfers from Tirupati International Airport (Renigunta - TIR) directly to Tirumala Balaji Darshan, city hotels, and railway stations.
        </p>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
          <a
            href={contactConfig.getTelUrl()}
            className="w-full sm:w-auto px-8 py-3.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-gold-soft" />
            <span>Call Airport Desk: 85009 53558</span>
          </a>

          <a
            href={contactConfig.getWhatsAppUrl({
              destination: "Tirupati Airport Pickup / Drop",
              notes: "Enquiring for Tirupati Airport (TIR) Taxi Booking"
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Airport Cab on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Airport Routes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-gold-dark uppercase tracking-widest block mb-1">
            DIRECT TRANSFERS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Popular Airport Transfer Routes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {airportRoutes.map((route) => (
            <div 
              key={route.id}
              className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial hover:shadow-editorial-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-ivory-200 text-charcoal text-xs font-bold border border-warmBorder">
                    {route.distance}
                  </span>
                  <span className="flex items-center text-xs font-semibold text-gold-dark">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {route.time}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                  {route.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                  {route.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-warmBorder">
                <button
                  onClick={() => onOpenBooking({ destination: route.target })}
                  className="flex-1 py-2.5 px-4 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Book Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={contactConfig.getWhatsAppUrl({
                    destination: route.target,
                    notes: `Enquiry for ${route.title}`
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fleet & Tariff Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-warmBorder shadow-editorial">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-gold-dark uppercase tracking-widest block mb-1">
              TRANSPARENT TARIFF
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Available Airport Cab Fleet &amp; Rates
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
              All vehicles are 100% air-conditioned, commercially licensed, and driven by hill-certified local chauffeurs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {fleetOptions.map((veh, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-ivory border border-warmBorder flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-maroon-accent uppercase tracking-wider block mb-1">
                    {veh.type}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-1">
                    {veh.name}
                  </h3>
                  <div className="flex items-center text-xs text-charcoal-muted font-semibold mb-3">
                    <Users className="w-3.5 h-3.5 mr-1 text-gold-dark" />
                    <span>{veh.capacity}</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-warmBorder text-center mb-3">
                    <span className="text-xs text-charcoal-muted block">Outstation Tariff</span>
                    <span className="font-serif text-lg font-extrabold text-maroon-accent">{veh.rate}</span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {veh.bestFor}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-warmBorder">
                  <button
                    onClick={() => onOpenBooking({ vehicle: veh.name, destination: "Tirupati Airport Taxi" })}
                    className="w-full py-2 bg-charcoal hover:bg-maroon-accent text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Reserve {veh.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real Travel Guide & Airport Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-ivory-200/60 p-6 sm:p-10 rounded-3xl border border-warmBorder">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
            Traveler’s Guide: Arriving at Tirupati Airport (Renigunta - TIR)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-warmBorder">
              <h3 className="font-bold text-charcoal text-base flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5" />
                1. Flight Tracking
              </h3>
              <p>
                Whether your flight arrives early or encounters weather delays, your chauffeur monitors your live flight number and adjusts the arrival timing automatically.
              </p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-warmBorder">
              <h3 className="font-bold text-charcoal text-base flex items-center">
                <MapPin className="w-4 h-4 text-maroon-accent mr-1.5" />
                2. Ghat Road Direct Access
              </h3>
              <p>
                Heading straight to Tirumala? Avoid changing cabs in Tirupati city. We take you directly through the Alipiri Toll gate up to the hill cottages in ~1 hour 15 mins.
              </p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-warmBorder">
              <h3 className="font-bold text-charcoal text-base flex items-center">
                <Sparkles className="w-4 h-4 text-gold-dark mr-1.5" />
                3. Clean &amp; Sanitized Cabs
              </h3>
              <p>
                Every vehicle in our fleet is cleaned and sanitized before arrival. Enjoy dual-zone air conditioning, ample trunk luggage space, and smooth hill driving.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-gold-dark uppercase tracking-widest block mb-1">
            FREQUENT QUESTIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Tirupati Airport Cab Booking FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-warmBorder overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="font-serif text-base font-bold text-charcoal">
                  {faq.q}
                </span>
                <div className="w-7 h-7 rounded-full bg-ivory flex items-center justify-center shrink-0 text-charcoal border border-warmBorder">
                  {openFaq === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-warmBorder/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contextual Internal Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 bg-white rounded-3xl border border-warmBorder">
          <h3 className="font-serif text-lg font-bold text-charcoal mb-3">
            Explore Other Go Ride Services &amp; Packages:
          </h3>
          <div className="flex flex-wrap gap-2.5 text-xs font-semibold">
            <Link to="/packages/tirupati-to-tirumala-1-day" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🚕 Tirupati to Tirumala 1-Day Cab →
            </Link>
            <Link to="/sightseeing" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🛕 Complete 13 Local Sights Tour →
            </Link>
            <Link to="/services/tirupati-outstation-cabs" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🛣️ Tirupati Outstation Cabs →
            </Link>
            <Link to="/packages/kanipakam-golden-temple-arunachalam-1-day" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🌟 Kanipakam, Vellore &amp; Arunachalam →
            </Link>
            <Link to="/vehicles" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🚘 Vehicle Fleet &amp; KM Tariffs →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Bottom Banner */}
      <CTASection onOpenBooking={() => onOpenBooking({ destination: "Tirupati Airport Taxi" })} />
    </div>
  );
}
