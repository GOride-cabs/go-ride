import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Car, MapPin, Plane, Train, ArrowRight, Phone, 
  MessageCircle, ShieldCheck, CheckCircle2, Clock, ChevronDown, ChevronUp, Star,
  Users, Fuel, Navigation, Award, Calendar, Check
} from 'lucide-react';
import { contactConfig } from '../config/contact';
import SEOHead from '../components/SEOHead';
import CTASection from '../components/CTASection';

export default function ServicesHub({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const serviceClusters = [
    {
      id: "tirupati-cabs",
      icon: <Car className="w-6 h-6 text-gold" />,
      badge: "24/7 LOCAL & CITY CABS",
      title: "Tirupati Cab & Taxi Service",
      subtitle: "Best Cab Service in Tirupati for Local & Doorstep Travel",
      desc: "Looking for reliable cabs in Tirupati? Go Ride provides 24 hours cab service in Tirupati with doorstep hotel, residential, and railway station pickups. Choose from sanitized Swift Dzire, Maruti Ertiga, Innova Crysta, and Tempo Travellers with certified local chauffeurs.",
      keywords: ["Tirupati Cabs", "Cabs in Tirupati", "Cab Service in Tirupati", "Taxi in Tirupati", "Taxi Service in Tirupati", "Tirupati Cab Booking", "Best Cabs in Tirupati", "Affordable Cabs in Tirupati", "24/7 Taxi Service Tirupati"],
      rates: "From ₹14 / km",
      bookingTarget: "Tirupati Local Cab Booking"
    },
    {
      id: "tirupati-to-tirumala",
      icon: <MapPin className="w-6 h-6 text-gold" />,
      badge: "SACRED GHAT ROAD TRANSFERS",
      title: "Tirupati to Tirumala Cab & Taxi",
      subtitle: "Dedicated Mountain Chauffeurs & Darshan Drops",
      desc: "Book direct Tirupati to Tirumala taxi service for sacred darshan atop the Seven Hills. Our experienced mountain drivers navigate the Alipiri Ghat road safely, providing direct drop at your allotted TTD cottage, CRO office, or darshan queue complex with flexible waiting.",
      keywords: ["Tirupati to Tirumala Cab", "Tirupati to Tirumala Taxi", "Tirupati Tirumala Taxi Service", "Tirumala Taxi from Tirupati", "Tirumala Cab Service", "Tirumala Darshan Cab", "Tirupati Darshan Taxi"],
      rates: "24/7 Fixed & Hourly Ghat Transfers",
      link: "/packages/tirupati-to-tirumala-1-day",
      bookingTarget: "Tirupati to Tirumala Cab"
    },
    {
      id: "airport-taxi",
      icon: <Plane className="w-6 h-6 text-gold" />,
      badge: "FLIGHT-TIMED TRANSFERS",
      title: "Tirupati Airport (TIR) Taxi & Cabs",
      subtitle: "Punctual Pickup & Direct Drops to Tirumala & City",
      desc: "Arriving at Tirupati International Airport (Renigunta - TIR)? Get punctual, flight-tracked airport taxi pickups with nameboard greeting. Direct transfers available from Tirupati Airport to Tirumala hilltop cottages or city hotels without delay.",
      keywords: ["Tirupati Airport Taxi", "Tirupati Airport Cab", "Taxi from Tirupati Airport", "Tirupati Airport to Tirumala Cab", "Tirupati Airport Pickup Taxi", "Tirupati Airport Drop Taxi"],
      rates: "24/7 On-Demand Airport Transfers",
      link: "/services/tirupati-airport-taxi",
      bookingTarget: "Tirupati Airport Pickup / Drop"
    },
    {
      id: "railway-station-taxi",
      icon: <Train className="w-6 h-6 text-gold" />,
      badge: "STATION PICKUP & DROP",
      title: "Tirupati Railway Station Taxi (TPTY / RU)",
      subtitle: "Prompt Station Gate Pickup for All Express Trains",
      desc: "Step off your train and straight into a clean, air-conditioned cab. We service all arrivals at Tirupati Main (TPTY) and Renigunta Junction (RU) with 24/7 driver waiting and luggage assistance.",
      keywords: ["Tirupati Railway Station Taxi", "Tirupati Railway Station Cab", "Taxi from Tirupati Railway Station", "Tirupati Railway Station to Tirumala Taxi", "Tirupati Railway Station Pickup"],
      rates: "Doorstep Station Gate Pickup",
      bookingTarget: "Tirupati Railway Station Taxi"
    },
    {
      id: "outstation-cabs",
      icon: <Car className="w-6 h-6 text-gold" />,
      badge: "INTERCITY & HIGHWAY DROPS",
      title: "Tirupati Outstation Cabs & One-Way Taxi",
      subtitle: "Direct Highway Transfers to Chennai, Bangalore, Vellore & More",
      desc: "Travel stress-free across state borders with our licensed interstate outstation cabs. Fixed per-km billing, courteous drivers, and timely drops to Chennai Airport, Bengaluru, Vellore CMC, Kanchipuram, and Arunachalam.",
      keywords: ["Tirupati Outstation Cabs", "Tirupati Outstation Taxi", "Tirupati to Chennai Cab", "Tirupati to Bangalore Taxi", "Tirupati to Vellore Cab", "Tirupati to Kanchipuram Taxi", "Tirupati to Srikalahasti Cab"],
      rates: "Swift Dzire ₹14/km • Ertiga ₹19/km • Innova ₹23/km",
      link: "/services/tirupati-outstation-cabs",
      bookingTarget: "Tirupati Outstation Cab"
    },
    {
      id: "local-sightseeing",
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      badge: "13 SACRED SIGHTS",
      title: "Tirupati & Tirumala Local Sightseeing Cabs",
      subtitle: "All-in-One Full Day Temple & Theertham Packages",
      desc: "Explore all 13 iconic sights across Tirumala hilltop (Akasa Ganga, Papavinasam, Silathoranam, Srivari Padalu) and Tirupati valley (Padmavathi Ammavari, Kapila Theertham, Govindaraja Swamy, ISKCON) in one seamless private cab tour.",
      keywords: ["Tirupati Sightseeing Cabs", "Tirumala Sightseeing Taxi", "Tirupati Local Temple Tour", "Tirupati Local 5 Temples Cab", "Tirupati Tour Packages"],
      rates: "All-in-One Full Day Tour Package",
      link: "/sightseeing",
      bookingTarget: "Complete Tirumala & Tirupati Sightseeing Tour"
    }
  ];

  const popularRoutes = [
    {
      title: "Tirupati to Tirumala Darshan",
      badge: "Most Popular",
      distance: "22 km (One Way)",
      time: "45 mins",
      desc: "24/7 Ghat road mountain taxi with direct pickup and cottage drop.",
      link: "/packages/tirupati-to-tirumala-1-day"
    },
    {
      title: "Kanipakam • Golden Temple • Arunachalam",
      badge: "1 Day Circuit",
      distance: "380 km Round Trip",
      time: "Full Day",
      desc: "Covers Kanipakam Vinayaka, Sripuram Golden Temple (Vellore), and Tiruvannamalai.",
      link: "/packages/kanipakam-golden-temple-arunachalam-1-day"
    },
    {
      title: "Tirupati Local 5 Temples Tour",
      badge: "City Circuit",
      distance: "45 km Circuit",
      time: "6-7 Hours",
      desc: "Padmavathi Temple, Srinivasa Mangapuram, ISKCON, Kapila Theertham & Govindaraja Swamy.",
      link: "/packages/tirupati-local-5-temple-tour-1-day"
    },
    {
      title: "Tirupati to Srikalahasti",
      badge: "Half Day",
      distance: "38 km (One Way)",
      time: "45 mins",
      desc: "Special cab service for Rahu-Ketu Sarpa Dosha Nivarana poojas with waiting time.",
      link: "/packages/tirupati-to-srikalahasti-1-day"
    },
    {
      title: "Tirupati to Chennai (Drop)",
      badge: "Outstation",
      distance: "135 km",
      time: "3.5 Hours",
      desc: "Direct one-way drop to Chennai Airport (MAA), Chennai Central, or city addresses.",
      link: "/services/tirupati-outstation-cabs"
    },
    {
      title: "Tirupati to Bangalore (Drop)",
      badge: "Outstation",
      distance: "250 km",
      time: "4.5 Hours",
      desc: "Point-to-point drop to Kempegowda Airport (BLR), Whitefield, or Bengaluru city.",
      link: "/services/tirupati-outstation-cabs"
    }
  ];

  const fleetTariffs = [
    {
      name: "Swift Dzire",
      type: "Sedan (4+1)",
      rate: "₹14 / km",
      ideal: "Couples, small families & quick business drops",
      features: "Air Conditioned • Clean sanitized interior • Boot space for 2-3 bags"
    },
    {
      name: "Maruti Ertiga",
      type: "MUV (6+1)",
      rate: "₹19 / km",
      ideal: "Families of 4 to 6 members with luggage",
      features: "Dual AC • Spacious seating • Reclining middle row"
    },
    {
      name: "Toyota Innova Crysta",
      type: "Premium SUV (7+1)",
      rate: "₹23 / km",
      ideal: "Senior citizens, VIP devotees & long-distance circuits",
      features: "Captain seats • Ultra smooth suspension • Maximum comfort"
    },
    {
      name: "Force Tempo Traveller",
      type: "Minibus (12-14 Seater)",
      rate: "₹28 / km",
      ideal: "Large devotee groups, bhajan mandalis & extended families",
      features: "Pushback seats • Individual AC vents • Large dedicated luggage bay"
    }
  ];

  const bookingSteps = [
    {
      num: "01",
      title: "Select Route & Date",
      desc: "Pick your local temple tour, Tirumala darshan transfer, or outstation destination."
    },
    {
      num: "02",
      title: "Choose Your Vehicle",
      desc: "Select AC Sedan (Dzire), Family MUV (Ertiga), Luxury MPV (Innova), or Minibus (Tempo)."
    },
    {
      num: "03",
      title: "Instant Confirmation",
      desc: "Get immediate booking confirmation with driver name, vehicle number, and transparent billing."
    }
  ];

  const faqs = [
    {
      q: "How to book the best cab service in Tirupati?",
      a: "You can book Go Ride Tirupati Cabs by calling +91 85009 53558, contacting us on WhatsApp, or using our online booking form. We offer 24/7 doorstep pickup across all Tirupati hotels, railway stations, and airport."
    },
    {
      q: "How can I book a taxi from Tirupati to Tirumala?",
      a: "You can book instantly by calling N Viswanadham at +91 85009 53558, sending a WhatsApp message, or using our online booking form. We provide 24/7 doorstep pickup from your hotel or station at your desired darshan time slot."
    },
    {
      q: "What is the per-km taxi rate for outstation cabs from Tirupati?",
      a: "Our outstation vehicle rates are: Swift Dzire (4+1) at ₹14/km, Maruti Ertiga (6+1) at ₹19/km, Toyota Innova Crysta (7+1) at ₹23/km, and Force Tempo Traveller (12-14) at ₹28/km."
    },
    {
      q: "Do you provide late-night pickup from Tirupati Airport and Railway Station?",
      a: "Yes, our taxi desk operates 24 hours a day, 7 days a week. We track your flight or train arrival to ensure your chauffeur is waiting for you at the arrival terminal."
    },
    {
      q: "Are tolls, interstate permits, and parking included in the fare?",
      a: "Tolls, state border permits (for Tamil Nadu/Karnataka routes), and parking fees are charged as per actual receipts, ensuring complete transparency with no inflated package rates."
    }
  ];

  const handleWhatsAppBooking = (serviceName) => {
    const url = contactConfig.getWhatsAppUrl({
      destination: serviceName,
      notes: `Enquiring for Service: ${serviceName}`
    });
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      <SEOHead
        title="Tirupati Cab & Taxi Service | 24/7 Tirumala, Airport & Outstation Cabs"
        description="Book the best cab and taxi service in Tirupati. 24/7 Tirumala Darshan cabs, Tirupati Airport (TIR) transfers, local 13-temple sightseeing & outstation cabs to Chennai and Bangalore from ₹14/km. Call +91 85009 53558."
        canonicalUrl="https://www.goridetirupatitravels.in/services/tirupati-cabs"
        keywords="Tirupati Cabs, Cabs in Tirupati, Cab Service in Tirupati, Taxi in Tirupati, Taxi Service in Tirupati, Tirupati Cab Booking, Best Cabs in Tirupati, 24 Hours Cab Service Tirupati, Tirupati to Tirumala Cab"
      />
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>TIRUPATI CAB &amp; TAXI SERVICES</span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-4 max-w-4xl mx-auto">
          Tirupati Cabs &amp; Taxi Service
        </h1>
        
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Best Cab Service in Tirupati for 24/7 Tirumala Balaji Darshan, Airport Transfers, Railway Station Pickups, 13-Temple Sightseeing &amp; Outstation Taxi to Chennai, Bangalore &amp; Vellore.
        </p>

        {/* Quick Review Badge */}
        <div className="flex items-center justify-center space-x-2 pt-4">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold text-charcoal">4.9/5 Rating</span>
          <span className="text-xs text-charcoal-muted">• 480+ Happy Pilgrim Reviews</span>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
          <a
            href={contactConfig.getTelUrl()}
            className="w-full sm:w-auto px-7 py-3.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-gold-soft" />
            <span>Call 24/7 Taxi Desk: 85009 53558</span>
          </a>

          <a
            href={contactConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Instant Cab Booking</span>
          </a>
        </div>
      </div>

      {/* 2. Why Book Go Ride Tirupati Cabs (Real Advantages) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-card rounded-3xl p-6 sm:p-10 border border-warmBorder shadow-editorial">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
              THE GO RIDE ADVANTAGE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Why Devotees Choose Go Ride Tirupati Cabs
            </h2>
            <p className="text-xs text-charcoal-muted mt-1">
              Real transparency, experienced ghat chauffeurs, and punctual doorstep service for peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-ivory border border-warmBorder space-y-2">
              <div className="w-10 h-10 rounded-xl bg-maroon-accent text-white flex items-center justify-center font-bold text-sm">
                <Fuel className="w-5 h-5 text-gold-soft" />
              </div>
              <h3 className="font-serif font-bold text-base text-charcoal">Transparent ₹14/km Billing</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Clear per-kilometer tariffs with zero surge pricing, no midnight surcharges, and genuine actual receipt billing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-warmBorder space-y-2">
              <div className="w-10 h-10 rounded-xl bg-charcoal text-white flex items-center justify-center font-bold text-sm">
                <Award className="w-5 h-5 text-gold-soft" />
              </div>
              <h3 className="font-serif font-bold text-base text-charcoal">Ghat Road Certified Chauffeurs</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Expert local drivers with 5+ years mountain road experience, courteous behavior, and deep knowledge of darshan timings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-warmBorder space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold-dark text-white flex items-center justify-center font-bold text-sm">
                <Clock className="w-5 h-5 text-ivory" />
              </div>
              <h3 className="font-serif font-bold text-base text-charcoal">100% Punctual Pickup</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Live flight and train tracking at Tirupati Airport (TIR) and Railway Stations (TPTY/RU). Chauffeur waits for you upon arrival.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-warmBorder space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif font-bold text-base text-charcoal">Clean, Sanitized AC Fleet</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Every vehicle is thoroughly vacuumed and inspected before each trip, ensuring a fresh and sacred pilgrimage atmosphere.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. 6 Key Search Cluster Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
            EXPLORE SERVICES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Complete Tirupati Taxi &amp; Cab Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceClusters.map((cluster) => (
            <div
              key={cluster.id}
              className="bg-card rounded-3xl p-6 sm:p-7 border border-warmBorder shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group hover:border-gold"
            >
              <div className="space-y-4">
                
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-ivory-200 border border-warmBorder flex items-center justify-center shadow-xs">
                    {cluster.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-maroon-accent border border-warmBorder shadow-xs">
                    {cluster.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal group-hover:text-maroon-accent transition-colors">
                    {cluster.title}
                  </h3>
                  <span className="text-xs font-semibold text-gold-dark block mt-1">
                    {cluster.subtitle}
                  </span>
                </div>

                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {cluster.desc}
                </p>

                {/* Tariff Highlight */}
                <div className="p-2.5 bg-ivory rounded-xl border border-warmBorder flex items-center justify-between text-xs">
                  <span className="text-charcoal-muted font-medium">Tariff:</span>
                  <span className="font-bold text-maroon-accent">{cluster.rates}</span>
                </div>

                {/* Target Search Keywords Tags */}
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {cluster.keywords.slice(0, 4).map((kw, i) => (
                    <span key={i} className="text-[10px] bg-white text-charcoal-muted px-2.5 py-0.5 rounded-md border border-warmBorder/70">
                      {kw}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-2">
                <button
                  onClick={() => onOpenBooking && onOpenBooking({ destination: cluster.bookingTarget })}
                  aria-label={`Book ${cluster.title}`}
                  className="w-full py-2.5 px-4 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Book {cluster.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-soft" />
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleWhatsAppBooking(cluster.title)}
                    aria-label={`WhatsApp ${cluster.title}`}
                    className="flex-1 py-2 px-3 bg-ivory hover:bg-ivory-200 text-charcoal border border-warmBorder rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                    <span>WhatsApp</span>
                  </button>

                  {cluster.link && (
                    <Link
                      to={cluster.link}
                      className="py-2 px-3 bg-white hover:bg-ivory-100 text-charcoal-muted hover:text-charcoal border border-warmBorder rounded-xl text-xs font-semibold transition-all flex items-center justify-center"
                    >
                      <span>Details →</span>
                    </Link>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. Popular Tirupati Cab Routes & Interlinked Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
            POPULAR PILGRIMAGE PACKAGES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Most Booked Tirupati Cab Routes
          </h2>
          <p className="text-xs text-charcoal-muted mt-1">
            Curated same-day and multi-day temple itineraries with dedicated private chauffeur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, i) => (
            <Link
              key={i}
              to={route.link}
              className="bg-card rounded-2xl p-6 border border-warmBorder shadow-editorial hover:shadow-editorial-hover hover:border-gold transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-gold/15 text-charcoal border border-gold/30">
                    {route.badge}
                  </span>
                  <span className="text-xs font-semibold text-charcoal-muted">
                    {route.distance}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-charcoal group-hover:text-maroon-accent transition-colors">
                  {route.title}
                </h3>

                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {route.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-warmBorder flex items-center justify-between text-xs font-bold text-maroon-accent">
                <span>View Full Itinerary &amp; Tariffs</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 5. Vehicle Fleet & Transparent Tariffs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-card rounded-3xl p-6 sm:p-10 border border-warmBorder shadow-editorial">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
              TRANSPARENT TARIFFS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Vehicle Fleet Rates &amp; Capacities
            </h2>
            <p className="text-xs text-charcoal-muted mt-1">
              Fixed per-kilometer pricing with zero hidden surcharges for local and outstation trips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetTariffs.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-warmBorder flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">{v.type}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">{v.rate}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal">{v.name}</h3>
                  <p className="text-xs text-charcoal-muted font-medium">{v.ideal}</p>
                  <p className="text-[11px] text-charcoal-muted/80 pt-1 border-t border-warmBorder/60">{v.features}</p>
                </div>

                <button
                  onClick={() => onOpenBooking && onOpenBooking({ vehicle: v.name })}
                  className="w-full py-2 px-3 bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal border border-warmBorder rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book {v.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. 4-Step Booking Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
            SIMPLE &amp; INSTANT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            How to Book Your Tirupati Cab in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookingSteps.map((step, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-warmBorder shadow-xs space-y-2 text-left">
              <span className="font-serif text-2xl font-bold text-gold-dark block">{step.num}</span>
              <h3 className="font-serif font-bold text-base text-charcoal">{step.title}</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Comprehensive Tirupati Cab SEO FAQs Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-card rounded-3xl p-6 sm:p-10 border border-warmBorder shadow-editorial">
          
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Tirupati Cabs &amp; Taxi Booking FAQs
            </h2>
            <p className="text-xs text-charcoal-muted mt-1">
              Common questions answered for devotees and tourists traveling to Tirupati &amp; Tirumala.
            </p>
          </div>

          <div className="space-y-3">
            {seoFaqs.map((faq, index) => {
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
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-warmBorder/40 pt-3 bg-ivory/30">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 8. Bottom CTA */}
      <CTASection onOpenBooking={() => onOpenBooking()} />

    </div>
  );
}
