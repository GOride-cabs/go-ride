import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, User } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function Footer() {
  const popularRoutes = [
    { label: "Tirupati to Tirumala (1 Day)", path: "/packages/tirupati-to-tirumala-1-day" },
    { label: "Kanipakam • Golden Temple • Arunachalam", path: "/packages/kanipakam-golden-temple-arunachalam-1-day" },
    { label: "Complete Tirupati & Tirumala Sightseeing (13 Sights)", path: "/packages/complete-tirupati-tirumala-local-sightseeing-tour-1-day" },
    { label: "Tirupati Local 5 Temples Circuit", path: "/packages/tirupati-local-5-temple-tour-1-day" },
    { label: "2 Days Sacred Pilgrimage Tour", path: "/packages/two-days-kanipakam-arunachalam-kanchipuram-tiruttani" },
    { label: "Tirupati to Srikalahasti Cab", path: "/packages/tirupati-to-srikalahasti-1-day" },
    { label: "Tirupati to Kanchipuram & Tiruttani", path: "/packages/tirupati-to-kanchipuram-1-day" },
    { label: "Tirupati Airport (TIR) Taxi Transfers", path: "/services" },
    { label: "Tirupati to Chennai & Bangalore Drops", path: "/services" },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Cab Services Hub", path: "/services" },
    { label: "Pilgrimage Packages", path: "/packages" },
    { label: "Local Sightseeing (13 Sights)", path: "/sightseeing" },
    { label: "Vehicle Fleet & Tariffs", path: "/vehicles" },
    { label: "About Go Ride", path: "/about" },
    { label: "Contact & Online Desk", path: "/contact" },
  ];

  const seoSearchTags = [
    "Tirupati Cabs", "Cabs in Tirupati", "Cab Service in Tirupati", "Taxi in Tirupati",
    "Taxi Service in Tirupati", "Tirupati Taxi", "Tirupati Cab Booking", "Best Cabs in Tirupati",
    "Tirupati to Tirumala Cab", "Tirupati to Tirumala Taxi", "Tirumala Taxi from Tirupati",
    "Tirumala Darshan Cab", "Tirupati Airport Taxi", "Tirupati Airport Cab",
    "Tirupati Airport to Tirumala Cab", "Tirupati Railway Station Taxi", "Tirupati Railway Station Cab",
    "Tirupati Outstation Cabs", "Tirupati to Chennai Cab", "Tirupati to Bangalore Taxi",
    "Tirupati to Vellore Cab", "Tirupati to Kanchipuram Taxi", "Tirupati to Srikalahasti Cab",
    "Best Taxi Service in Tirupati", "24/7 Taxi Service Tirupati", "Affordable Cabs in Tirupati"
  ];

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t-2 border-gold/40 relative overflow-hidden">
      {/* Subtle background ornamentation pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-maroon-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-charcoal-800">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-charcoal border-2 border-gold/50 shadow-md flex items-center justify-center p-0.5 shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Go Ride Tirupati Logo"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="font-serif font-bold text-sm tracking-widest text-gold-soft absolute inset-0 flex items-center justify-center -z-10">
                  GR
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  GO RIDE TIRUPATI
                </span>
                <span className="text-[10px] tracking-widest uppercase text-gold-soft font-bold">
                  Local, Airport &amp; Outstation Cabs
                </span>
              </div>
            </div>

            <p className="text-xs text-charcoal-muted leading-relaxed">
              Tirupati’s most trusted 24/7 cab rental network. Dedicated to seamless Tirumala Balaji darshan transfers, 13-temple sightseeing, airport pickups, and outstation pilgrimage tours across Andhra Pradesh &amp; Tamil Nadu.
            </p>

            <div className="flex items-center space-x-2 text-xs text-gold font-medium bg-charcoal-900/60 p-2.5 rounded-xl border border-charcoal-800">
              <ShieldCheck className="w-4 h-4 shrink-0 text-gold" />
              <span>Transparent Per-KM Billing • 100% Punctual</span>
            </div>
          </div>

          {/* Col 2: Pilgrimage & Tour Routes */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2.5">
              Popular Tour Packages
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              {popularRoutes.map((route, i) => (
                <li key={i}>
                  <Link
                    to={route.path}
                    className="hover:text-gold transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-gold/60">•</span>
                    <span>{route.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-gold transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-gold/60">→</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Direct Desk */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2.5">
              24/7 Booking Desk
            </h4>
            
            <div className="space-y-2.5 text-xs text-charcoal-muted">
              <div className="flex items-start space-x-2.5">
                <User className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">N Viswanadham</strong>
                  Managing Proprietor
                </span>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{contactConfig.address.full}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={contactConfig.getTelUrl()} className="text-white hover:text-gold font-semibold">
                  +91 85009 53558
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={contactConfig.getMailtoUrl()} className="hover:text-gold">
                  {contactConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={contactConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>

        </div>

        {/* SEO Search Keywords Cloud & Semantic Silo */}
        <div className="py-6 border-b border-charcoal-800 text-[11px] text-charcoal-muted space-y-2">
          <span className="font-bold text-gold-soft uppercase tracking-wider block text-[10px]">
            🚕 Popular Search Queries &amp; Cab Services:
          </span>
          <div className="flex flex-wrap gap-x-3 gap-y-1 leading-relaxed">
            {seoSearchTags.map((tag, i) => (
              <Link
                key={i}
                to="/services"
                className="hover:text-gold transition-colors"
              >
                {tag} {i < seoSearchTags.length - 1 ? '•' : ''}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted gap-3">
          <p>© {new Date().getFullYear()} Go Ride Tirupati Cabs. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link to="/services" className="hover:text-gold">Cab Services</Link>
            <span>•</span>
            <Link to="/packages" className="hover:text-gold">Tour Packages</Link>
            <span>•</span>
            <Link to="/sightseeing" className="hover:text-gold">Local Sightseeing</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-gold">Contact Desk</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
