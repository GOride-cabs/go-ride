import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, MapPin, Clock, Phone, MessageCircle, ShieldCheck, 
  CheckCircle2, ArrowRight, Car, Users, Sparkles, Navigation, 
  ChevronDown, ChevronUp, Plane, Train, Landmark, Star
} from 'lucide-react';
import { contactConfig } from '../config/contact';
import SEOHead from '../components/SEOHead';
import CTASection from '../components/CTASection';

export default function BestTravelsInTirupati({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const travelServices = [
    {
      id: "tirupati-cabs",
      title: "Tirupati Cab & Taxi Services",
      tagline: "24/7 Doorstep Pickup Across Tirupati",
      desc: "Reliable city cabs and private taxi rentals for local transfers, hotel pickups, station drops, and day rentals across Tirupati.",
      link: "/services/tirupati-cabs",
      linkText: "Explore Tirupati Cabs",
      icon: Car
    },
    {
      id: "tirumala-darshan",
      title: "Tirupati to Tirumala Cab Service",
      tagline: "Ghat Road Certified Chauffeurs",
      desc: "Punctual hill-transfer taxis aligned with your Suprabhatam, VIP Break, or Special Entry Darshan timings with flexible waiting time at Tirumala hilltop.",
      link: "/packages/tirupati-to-tirumala-1-day",
      linkText: "View Tirumala Cab Details",
      icon: Landmark
    },
    {
      id: "airport-transfers",
      title: "Tirupati Airport (TIR) Taxi Service",
      tagline: "Flight-Tracked Renigunta Airport Transfers",
      desc: "Meet-and-greet airport pickups from Renigunta Airport directly to Tirupati hotels or straight up the ghat road to Tirumala cottages.",
      link: "/services/tirupati-airport-taxi",
      linkText: "Book Airport Taxi",
      icon: Plane
    },
    {
      id: "railway-transfers",
      title: "Railway Station Transfers (TPTY & RU)",
      tagline: "Doorstep Station Pickup & Drop",
      desc: "Immediate pickup at Tirupati Main (TPTY) and Renigunta Junction (RU) with luggage assistance and clean AC vehicles ready upon arrival.",
      link: "/services/tirupati-cabs",
      linkText: "View Station Pickup Info",
      icon: Train
    },
    {
      id: "temple-packages",
      title: "Spiritual Temple Tour Packages",
      tagline: "Curated 1-Day & 2-Day Pilgrimage Circuits",
      desc: "Comprehensive temple circuits covering Kanipakam, Golden Temple Vellore, Arunachalam, Srikalahasti, and Tiruttani with experienced drivers.",
      link: "/packages",
      linkText: "Explore Tour Packages",
      icon: Compass
    },
    {
      id: "local-sightseeing",
      title: "Local Tirupati & Tirumala Sightseeing",
      tagline: "13 Holy Spots & Heritage Landmarks",
      desc: "Explore Padmavathi Temple, Kapila Theertham, Srinivasa Mangapuram, Silathoranam, Papavinasam, and Akasa Ganga at your own pace.",
      link: "/sightseeing",
      linkText: "View Sightseeing Itinerary",
      icon: Navigation
    },
    {
      id: "outstation-travel",
      title: "Outstation Cabs from Tirupati",
      tagline: "One-Way Drops & Round-Trip Travel",
      desc: "Intercity taxi transfers from Tirupati to Chennai, Bengaluru, Vellore CMC, Pondicherry, and Kanchipuram with transparent per-km billing.",
      link: "/services/tirupati-outstation-cabs",
      linkText: "Check Outstation Routes",
      icon: MapPin
    }
  ];

  const fleetOptions = [
    {
      name: "Swift Dzire / Etios",
      type: "AC Sedan",
      capacity: "4 + 1 Seater",
      rate: "₹14 / km",
      bestFor: "Couples, small families & solo pilgrims"
    },
    {
      name: "Maruti Ertiga",
      type: "Family MUV",
      capacity: "6 + 1 Seater",
      rate: "₹19 / km",
      bestFor: "Families with luggage & senior citizens"
    },
    {
      name: "Toyota Innova Crysta",
      type: "Luxury MPV",
      capacity: "7 + 1 Seater",
      rate: "₹23 / km",
      bestFor: "Premium comfort for ghat road & long journeys"
    },
    {
      name: "Force Tempo Traveller",
      type: "Luxury Minibus",
      capacity: "12 – 14 Seater",
      rate: "₹28 / km",
      bestFor: "Pilgrimage groups, large families & tour groups"
    }
  ];

  const whyChooseUs = [
    {
      title: "Local Tirupati Expertise",
      desc: "Our chauffeurs know every ghat road turn, temple darshan timing, and local traffic shortcut to ensure a peaceful trip."
    },
    {
      title: "Transparent Per-KM Fares",
      desc: "Clear upfront pricing starting from ₹14/km with no hidden charges, inflated peak surges, or surprise fees."
    },
    {
      title: "24/7 Punctual Service",
      desc: "Round-the-clock availability for early morning Suprabhatam seva (3:00 AM) and late-night airport or train arrivals."
    },
    {
      title: "Clean, Sanitized Fleet",
      desc: "Well-maintained, chilled air-conditioned vehicles with ample luggage space and certified mountain-road drivers."
    }
  ];

  const faqs = [
    {
      q: "What makes GoRide one of the best travels in Tirupati?",
      a: "GoRide Tirupati Travels is managed by local travel specialist N Viswanadham. We provide verified chauffeurs with hill-driving licenses, transparent per-km tariffs starting at ₹14/km, 24/7 customer support, and dedicated coordination for Tirumala darshan and regional temple tours."
    },
    {
      q: "How can I book a cab with GoRide Tirupati Travels?",
      a: "You can book instantly by calling +91 85009 53558, sending a WhatsApp message with your travel itinerary, or clicking the 'Book Your Tirupati Cab' button. We confirm vehicle and driver details promptly."
    },
    {
      q: "Do you provide custom temple tour packages from Tirupati?",
      a: "Yes! We operate popular same-day and multi-day tours including Tirupati-Tirumala darshan, Kanipakam-Golden Temple-Arunachalam, Srikalahasti Rahu-Ketu Kshetra, and local 5-temple circuits."
    },
    {
      q: "Can I book a cab from Tirupati Airport to Tirumala directly?",
      a: "Yes. Our airport taxi service tracks your flight arrival at Renigunta Airport (TIR) and takes you directly up the Alipiri ghat road to your allotted cottage or darshan queue in Tirumala."
    },
    {
      q: "Which vehicles are available for family and group travel?",
      a: "We offer 4-seater AC Sedans (Swift Dzire), 6-seater MUVs (Maruti Ertiga), 7-seater luxury MPVs (Toyota Innova Crysta), and 12-to-17-seater Force Tempo Travellers for larger pilgrim groups."
    }
  ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Go Ride Tirupati Travels",
    "url": "https://www.goridetirupatitravels.in/best-travels-in-tirupati",
    "telephone": "+918500953558",
    "description": "Trusted local travel agency and taxi operator in Tirupati offering 24/7 Tirumala darshan cabs, temple tour packages, airport transfers, and outstation taxi services.",
    "priceRange": "₹14 - ₹28 per km",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "22-11-193, Gollavanigunta, Renigunta Road",
      "addressLocality": "Tirupati",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "517501",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Tirupati" },
      { "@type": "AdministrativeArea", "name": "Tirumala" },
      { "@type": "Airport", "name": "Tirupati Airport (TIR)" },
      { "@type": "City", "name": "Srikalahasti" },
      { "@type": "City", "name": "Kanipakam" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Vellore" }
    ]
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      <SEOHead
        title="Best Travels in Tirupati | GoRide Tirupati Travels"
        description="Looking for the best travels in Tirupati? Explore GoRide Tirupati Travels for cabs, Tirumala trips, sightseeing, temple tours and outstation travel."
        canonicalUrl="https://www.goridetirupatitravels.in/best-travels-in-tirupati"
        keywords="Best Travels in Tirupati, Tirupati Travels, Best Cab Service in Tirupati, Tirupati Taxi Travels, Tirupati Tour and Travels, Tirumala Travels, Tirupati Cab Operator"
        schemaJson={schemaJson}
      />

      {/* 1. Hero Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>TRUSTED LOCAL TRAVEL OPERATOR</span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-4 max-w-4xl mx-auto">
          Best Travels in Tirupati
        </h1>
        
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Welcome to <strong className="text-charcoal font-semibold">GoRide Tirupati Travels</strong>, your trusted local partner for comfortable, punctual, and reliable travel services in Tirupati. Whether you are arriving for Lord Venkateswara Swami’s divine darshan in Tirumala, exploring sacred heritage temples, requiring an airport transfer, or traveling outstation, we provide dedicated AC cabs and custom tour packages tailored to your schedule.
        </p>

        {/* Primary Calls to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
          <button
            onClick={() => onOpenBooking({ destination: "Best Travels in Tirupati - Cab Booking" })}
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
            href={contactConfig.getWhatsAppUrl({ notes: "Hello GoRide Travels, I would like to enquire about travel and cab services in Tirupati." })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xs transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>

      {/* 2. Overview of Travel Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
            COMPLETE TRAVEL SOLUTIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Travel &amp; Cab Services We Provide in Tirupati
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl mx-auto mt-2">
            Explore our comprehensive range of private taxi transfers, temple tours, and intercity cab services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-card rounded-3xl p-6 border border-warmBorder shadow-editorial flex flex-col justify-between hover:border-gold/50 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ivory-200 border border-warmBorder flex items-center justify-center text-maroon-accent mb-4 group-hover:bg-maroon-accent group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-1">
                    {service.tagline}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-maroon-accent hover:text-maroon-hover transition-colors pt-2 border-t border-warmBorder/60"
                >
                  <span>{service.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Available Vehicle Fleet & Tariffs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-card rounded-3xl p-6 sm:p-10 border border-warmBorder shadow-editorial">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
              WELL-MAINTAINED FLEET
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Available Vehicles &amp; Transparent Fares
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl mx-auto mt-1">
              Choose the ideal vehicle for your family or group with transparent per-kilometer billing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fleetOptions.map((veh, i) => (
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
                    {veh.bestFor}
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking({ vehicle: veh.name, destination: "Tirupati Travel Booking" })}
                  className="mt-4 w-full py-2 bg-ivory hover:bg-ivory-200 text-charcoal rounded-xl text-[11px] font-bold uppercase tracking-wider border border-warmBorder transition-colors cursor-pointer"
                >
                  Book {veh.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/vehicles"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-maroon-accent hover:underline"
            >
              <span>View full vehicle fleet specifications and tariff policies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Why Choose GoRide Tirupati Travels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
            LOCAL COMMITMENT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Why Travelers Choose GoRide in Tirupati
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-5 border border-warmBorder shadow-xs flex flex-col"
            >
              <div className="w-8 h-8 rounded-xl bg-ivory-200 border border-warmBorder flex items-center justify-center text-gold mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-charcoal mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-card rounded-3xl p-6 sm:p-10 border border-warmBorder shadow-editorial">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Tirupati Travel &amp; Cab FAQs
            </h2>
            <p className="text-xs text-charcoal-muted mt-1">
              Common questions answered for visitors and devotees traveling in and around Tirupati.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-warmBorder overflow-hidden bg-white transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-label={faq.q}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-ivory/50 transition-colors"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-charcoal">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-maroon-accent shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-charcoal-muted shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-warmBorder/40 pt-3 bg-ivory/30">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. Bottom Call to Action Section */}
      <div className="mt-8">
        <CTASection onOpenBooking={onOpenBooking} />
      </div>
    </div>
  );
}
