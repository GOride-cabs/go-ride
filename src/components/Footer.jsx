import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, User } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function Footer() {
  const popularRoutes = [
    { label: "Tirupati to Tirumala (1 Day)", path: "/packages/tirupati-to-tirumala-1-day" },
    { label: "Kanipakam • Golden Temple • Arunachalam", path: "/packages/kanipakam-golden-temple-arunachalam-1-day" },
    { label: "Tirupati Local 5 Temples Circuit", path: "/packages/tirupati-local-5-temple-tour-1-day" },
    { label: "2 Days Sacred Pilgrimage Tour", path: "/packages/two-days-kanipakam-arunachalam-kanchipuram-tiruttani" },
    { label: "Tirupati to Srikalahasti", path: "/packages/tirupati-to-srikalahasti-1-day" },
    { label: "Tirupati to Kanchipuram & Tiruttani", path: "/packages/tirupati-to-kanchipuram-1-day" },
    { label: "Tirupati Airport (Renigunta) Transfers", path: "/#routes-section" },
    { label: "Tirupati to Chennai & Bangalore Drops", path: "/#routes-section" },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Pilgrimage Packages", path: "/packages" },
    { label: "Local Sightseeing (13 Places)", path: "/sightseeing" },
    { label: "Vehicle Fleet & Tariffs", path: "/vehicles" },
    { label: "How It Works", path: "/#faq-section" },
    { label: "Contact & Online Desk", path: "/contact" },
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
                  Local, Airport & Outstation Cabs
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Comfortable, sanitized air-conditioned cabs for Tirumala darshan and sacred pilgrimage circuits across South India. Managed with dedicated care by <span className="text-gold-soft font-semibold">{contactConfig.contactPerson}</span>.
            </p>

            <div className="pt-2">
              <a
                href={contactConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Booking Desk</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold text-gold-soft mb-4 pb-1 border-b border-charcoal-800 inline-block uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-xs text-gray-300 hover:text-gold-soft transition-colors flex items-center group"
                  >
                    <span className="text-gold-soft mr-2 text-xs group-hover:translate-x-1 transition-transform">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Temple Routes */}
          <div>
            <h3 className="font-serif text-base font-bold text-gold-soft mb-4 pb-1 border-charcoal-800 inline-block uppercase tracking-wider">
              Popular Routes
            </h3>
            <ul className="space-y-2">
              {popularRoutes.map((route) => (
                <li key={route.label}>
                  <Link
                    to={route.path}
                    className="text-xs text-gray-300 hover:text-gold-soft transition-colors flex items-center group"
                  >
                    <span className="text-gold-soft mr-1.5 text-xs group-hover:translate-x-1 transition-transform">›</span>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h3 className="font-serif text-base font-bold text-gold-soft mb-4 pb-1 border-b border-charcoal-800 inline-block uppercase tracking-wider">
              Contact & Booking
            </h3>
            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="flex items-center space-x-3">
                <User className="w-4 h-4 text-gold-soft shrink-0" />
                <span className="text-white font-medium">{contactConfig.contactPerson}</span>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold-soft mt-0.5 shrink-0" />
                <span className="text-xs text-gray-300">{contactConfig.address}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-soft shrink-0" />
                <a
                  href={`tel:${contactConfig.phoneRaw}`}
                  className="hover:text-gold-soft transition-colors font-bold text-white text-sm"
                >
                  {contactConfig.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-soft shrink-0" />
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="hover:text-gold-soft transition-colors text-xs"
                >
                  {contactConfig.email}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-charcoal-800/80 border border-charcoal-800 text-[11px] text-gray-300 flex items-center space-x-2.5 mt-2">
                <ShieldCheck className="w-4 h-4 text-gold-soft shrink-0" />
                <span>24/7 Tirupati Cab Desk</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Go Ride Tirupati Cab. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Tirupati • Tirumala • South India Pilgrimages</span>
            <span className="hidden md:inline">•</span>
            <span className="text-gray-400">Doorstep Pickup Across Tirupati</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
