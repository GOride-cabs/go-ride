import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, MapPin, Clock, Phone, MessageCircle, ShieldCheck, 
  CheckCircle2, ArrowRight, Plane, Users, Sparkles, Navigation, ChevronDown, ChevronUp
} from 'lucide-react';
import { contactConfig } from '../config/contact';
import SEOHead from '../components/SEOHead';
import CTASection from '../components/CTASection';

export default function OutstationCabs({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const outstationRoutes = [
    {
      id: "tirupati-to-chennai",
      title: "Tirupati to Chennai (City & Airport)",
      distance: "135 km",
      time: "Approx. 3.5 hours",
      route: "Tirupati → Renigunta → Nagari → Thiruvallur → Chennai",
      desc: "Direct one-way drops and round trips to Chennai International Airport (MAA), Chennai Central (MAS), Egmore, T Nagar, and anywhere across Chennai.",
      target: "Tirupati to Chennai Cab"
    },
    {
      id: "tirupati-to-bangalore",
      title: "Tirupati to Bengaluru (City & BLR Airport)",
      distance: "250 km",
      time: "Approx. 4.5 hours",
      route: "Tirupati → Chittoor → Palamaner → Kolar → Hoskote → Bengaluru",
      desc: "Smooth 4-lane highway travel to Kempegowda International Airport (BLR), Whitefield, Electronic City, Majestic, and Koramangala.",
      target: "Tirupati to Bangalore Cab"
    },
    {
      id: "tirupati-to-vellore",
      title: "Tirupati to Vellore (CMC Hospital & Golden Temple)",
      distance: "105 km",
      time: "Approx. 2.5 hours",
      route: "Tirupati → Chittoor → Katpadi → Vellore",
      desc: "Dedicated comfortable private cabs for doctor appointments at Christian Medical College (CMC) & darshan at Sri Lakshmi Narayani Golden Temple.",
      target: "Tirupati to Vellore Cab"
    },
    {
      id: "tirupati-to-arunachalam",
      title: "Tirupati to Arunachalam (Tiruvannamalai)",
      distance: "190 km",
      time: "Approx. 4 hours",
      route: "Tirupati → Vellore → Polur → Tiruvannamalai",
      desc: "Pilgrimage cabs for sacred Agni Lingam darshan, Pournami Girivalam parikrama walk, and Sri Ramana Maharshi Ashram visits.",
      target: "Tirupati to Arunachalam Cab"
    },
    {
      id: "tirupati-to-kanchipuram",
      title: "Tirupati to Kanchipuram & Tiruttani",
      distance: "115 km – 160 km",
      time: "Approx. 2.5 to 3.5 hours",
      route: "Tirupati → Tiruttani → Arakkonam → Kanchipuram",
      desc: "Visit the Silk City temples (Kamakshi Amman, Ekambareswarar) and the 5th abode of Lord Murugan at Tiruttani with chauffeur waiting.",
      target: "Tirupati to Kanchipuram Cab"
    },
    {
      id: "tirupati-to-srikalahasti",
      title: "Tirupati to Srikalahasti (Rahu-Ketu Poojas)",
      distance: "38 km",
      time: "Approx. 45 mins",
      route: "Tirupati → Renigunta → Srikalahasti Highway",
      desc: "Prompt transfers timed precisely for Rahu Kalam Sarpa Dosha Nivarana pooja slots and Vayu Lingam darshan with parking waiting.",
      target: "Tirupati to Srikalahasti Taxi"
    },
    {
      id: "tirupati-to-kanipakam",
      title: "Tirupati to Kanipakam Varasiddhi Vinayaka",
      distance: "70 km",
      time: "Approx. 1.5 hours",
      route: "Tirupati → Chittoor Highway → Kanipakam",
      desc: "Early morning darshan trips to seek blessings at the self-manifesting Lord Ganesha sanctum.",
      target: "Tirupati to Kanipakam Taxi"
    }
  ];

  const fleetTariffs = [
    {
      name: "Swift Dzire",
      type: "AC Sedan",
      capacity: "4 + 1 Passengers",
      rate: "₹14 / km",
      bestFor: "Couples, small families, one-way highway drops"
    },
    {
      name: "Maruti Ertiga",
      type: "Family MUV",
      capacity: "6 + 1 Passengers",
      rate: "₹19 / km",
      bestFor: "Comfortable family long-distance travel & luggage"
    },
    {
      name: "Toyota Innova Crysta",
      type: "Luxury MPV",
      capacity: "7 + 1 Passengers",
      rate: "₹23 / km",
      bestFor: "Premium comfort for seniors & multi-state circuits"
    },
    {
      name: "Force Tempo Traveller",
      type: "Luxury Minibus",
      capacity: "12 – 14 Passengers",
      rate: "₹28 / km",
      bestFor: "Pilgrim groups, corporate teams & extended families"
    }
  ];

  const faqs = [
    {
      q: "How are outstation cab fares calculated at Go Ride Tirupati Travels?",
      a: "Our outstation pricing is 100% transparent on a per-kilometer basis: Swift Dzire at ₹14/km, Maruti Ertiga at ₹19/km, Innova Crysta at ₹23/km, and Tempo Traveller at ₹28/km. State border permits, toll gates, and driver allowances are clearly shared before trip start."
    },
    {
      q: "Do you offer one-way taxi drops from Tirupati to Chennai or Bangalore?",
      a: "Yes, we provide both point-to-point one-way drops and round-trip packages. Whether you need a drop to Chennai Airport (MAA) or Bengaluru (BLR), we pick you up from any Tirupati hotel or address."
    },
    {
      q: "Are your drivers licensed for interstate travel into Tamil Nadu and Karnataka?",
      a: "Yes, all our chauffeurs carry valid commercial licenses, all-India commercial vehicle permits, and up-to-date vehicular insurance. Interstate border taxes and permit entries are managed seamlessly by the driver."
    },
    {
      q: "Can the chauffeur wait for temple darshans and hospital appointments?",
      a: "Yes. For destinations like Vellore CMC, Arunachalam Girivalam, Srikalahasti, and Kanipakam, our drivers wait patiently at the allocated parking areas while you complete your darshan or medical consultation."
    },
    {
      q: "How can I book an outstation cab from Tirupati?",
      a: "You can book instantly by calling +91 85009 53558, sending a WhatsApp message with your route details, or using our online booking form. No advance registration required."
    }
  ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Go Ride Tirupati Outstation Cabs & One-Way Taxi",
    "serviceType": "Outstation Taxi & Intercity Cab Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Go Ride Tirupati Travels",
      "telephone": "+918500953558",
      "url": "https://www.goridetirupatitravels.in/"
    },
    "areaServed": [
      { "@type": "City", "name": "Tirupati" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Vellore" },
      { "@type": "City", "name": "Tiruvannamalai (Arunachalam)" },
      { "@type": "City", "name": "Kanchipuram" },
      { "@type": "City", "name": "Srikalahasti" },
      { "@type": "City", "name": "Kanipakam" }
    ],
    "description": "Reliable 24/7 outstation cabs and one-way taxi service from Tirupati to Chennai, Bangalore, Vellore CMC, Arunachalam, Kanchipuram, and Srikalahasti.",
    "priceRange": "₹14 - ₹28 per km"
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      <SEOHead
        title="Tirupati Outstation Cabs & One-Way Taxi | Chennai, Bangalore, Vellore from ₹14/km"
        description="Book outstation cabs from Tirupati to Chennai, Bangalore, Vellore CMC, Arunachalam, Kanchipuram & Srikalahasti. Transparent rates: Sedan ₹14/km, Ertiga ₹19/km, Innova ₹23/km. Call +91 85009 53558."
        canonicalUrl="https://www.goridetirupatitravels.in/services/tirupati-outstation-cabs"
        keywords="Tirupati Outstation Cabs, Tirupati Outstation Taxi, Tirupati to Chennai Cab, Tirupati to Bangalore Taxi, Tirupati to Vellore Cab, Tirupati to Kanchipuram Taxi, Tirupati to Srikalahasti Cab, One Way Cab Tirupati"
        schemaJson={schemaJson}
      />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Navigation className="w-3.5 h-3.5 text-gold" />
          <span>INTERCITY &amp; ONE-WAY HIGHWAY TRANSFERS</span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-4 max-w-4xl mx-auto">
          Tirupati Outstation Cabs &amp; One-Way Taxi
        </h1>
        
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Sanitized, air-conditioned private cabs for intercity travel and airport drops to Chennai, Bengaluru, Vellore CMC, Arunachalam, and major pilgrimage shrines.
        </p>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
          <a
            href={contactConfig.getTelUrl()}
            className="w-full sm:w-auto px-8 py-3.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-gold-soft" />
            <span>Call for Outstation: 85009 53558</span>
          </a>

          <a
            href={contactConfig.getWhatsAppUrl({
              destination: "Tirupati Outstation Cab",
              notes: "Enquiring for Outstation Taxi Booking from Tirupati"
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Outstation Cab on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Outstation Routes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-gold-dark uppercase tracking-widest block mb-1">
            KEY INTERCITY DESTINATIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Popular Outstation Routes from Tirupati
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outstationRoutes.map((route) => (
            <div 
              key={route.id}
              className="bg-card p-6 sm:p-7 rounded-3xl border border-warmBorder shadow-editorial hover:shadow-editorial-hover transition-all flex flex-col justify-between"
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

                <h3 className="font-serif text-xl font-bold text-charcoal mb-1.5">
                  {route.title}
                </h3>
                
                <span className="text-[11px] font-semibold text-maroon-accent block mb-2">
                  Via: {route.route}
                </span>

                <p className="text-xs text-charcoal-muted leading-relaxed mb-6">
                  {route.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-warmBorder">
                <button
                  onClick={() => onOpenBooking({ destination: route.target })}
                  className="flex-1 py-2.5 px-3 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <a
                  href={contactConfig.getWhatsAppUrl({
                    destination: route.target,
                    notes: `Enquiry for ${route.title}`
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
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
              PER-KILOMETER PRICING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Transparent Outstation Cab Fleet Tariffs
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
              Clean, fully air-conditioned vehicles with commercial permits for smooth highway travel across Andhra Pradesh, Tamil Nadu, and Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {fleetTariffs.map((veh, idx) => (
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
                    <span className="text-xs text-charcoal-muted block">Outstation Rate</span>
                    <span className="font-serif text-lg font-extrabold text-maroon-accent">{veh.rate}</span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {veh.bestFor}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-warmBorder">
                  <button
                    onClick={() => onOpenBooking({ vehicle: veh.name, destination: "Tirupati Outstation Taxi" })}
                    className="w-full py-2 bg-charcoal hover:bg-maroon-accent text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Select {veh.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real Travel Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-ivory-200/60 p-6 sm:p-10 rounded-3xl border border-warmBorder">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
            Why Choose Go Ride for Outstation Journeys?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-warmBorder">
              <h3 className="font-bold text-charcoal text-base flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5" />
                Interstate Permits Handled
              </h3>
              <p>
                Crossing into Tamil Nadu (Chennai, Vellore, Kanchipuram) or Karnataka (Bangalore)? Our drivers handle border entry taxes and checkpoint coordination.
              </p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-warmBorder">
              <h3 className="font-bold text-charcoal text-base flex items-center">
                <Clock className="w-4 h-4 text-maroon-accent mr-1.5" />
                24/7 Doorstep Pickup
              </h3>
              <p>
                Early morning 4:00 AM departures or late night returns? We pick you up directly from your home, hotel, or railway station without surge pricing.
              </p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-warmBorder">
              <h3 className="font-bold text-charcoal text-base flex items-center">
                <Sparkles className="w-4 h-4 text-gold-dark mr-1.5" />
                Dedicated Chauffeur Waiting
              </h3>
              <p>
                Attending a doctor consultation at CMC Vellore or performing Girivalam at Arunachalam? Your cab and chauffeur remain on call for you.
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
            Outstation Taxi Booking FAQs
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
            Explore Related Services:
          </h3>
          <div className="flex flex-wrap gap-2.5 text-xs font-semibold">
            <Link to="/services/tirupati-airport-taxi" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              ✈️ Tirupati Airport Taxi &amp; Drops →
            </Link>
            <Link to="/packages/tirupati-to-tirumala-1-day" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🚕 Tirupati to Tirumala Darshan Cab →
            </Link>
            <Link to="/packages/kanipakam-golden-temple-arunachalam-1-day" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🌟 Kanipakam • Vellore • Arunachalam Tour →
            </Link>
            <Link to="/sightseeing" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🛕 Complete 13 Local Sights Tour →
            </Link>
            <Link to="/vehicles" className="px-3.5 py-2 bg-ivory rounded-xl border border-warmBorder hover:border-gold hover:text-maroon-accent transition-colors">
              🚘 Vehicle Fleet &amp; Rates →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Bottom Banner */}
      <CTASection onOpenBooking={() => onOpenBooking({ destination: "Tirupati Outstation Cab" })} />
    </div>
  );
}
