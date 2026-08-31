import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Local Sightseeing', path: '/sightseeing' },
    { name: 'Our Vehicles', path: '/vehicles' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Desk', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-warmBorder shadow-editorial py-2.5 sm:py-3'
          : 'bg-ivory/90 backdrop-blur-sm border-b border-warmBorder/60 py-3 sm:py-3.5 text-charcoal'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* High-End Brand Logo with Custom Logo Image + Clean GR Typography */}
          <Link to="/" className="flex items-center space-x-3 group">
            
            {/* Logo Image */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-charcoal border-2 border-gold/50 shadow-md flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-300 shrink-0">
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

            {/* Premium Editorial Typography */}
            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-1.5 leading-none">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-charcoal group-hover:text-maroon-accent transition-colors">
                  GO RIDE
                </span>
                <span className="font-serif text-xs sm:text-sm font-bold text-gold-dark uppercase tracking-widest">
                  TIRUPATI
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal-muted mt-1">
                Pilgrimage &amp; Outstation Cabs
              </span>
            </div>

          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs sm:text-sm uppercase tracking-wider font-bold transition-colors relative py-1 ${
                    isActive
                      ? 'text-maroon-accent font-extrabold'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-dark rounded-full transition-all" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${contactConfig.phoneRaw}`}
              className="flex items-center text-xs font-bold space-x-1.5 px-3.5 py-2 rounded-full border border-warmBorder text-charcoal hover:border-gold transition-colors bg-white shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-gold-dark" />
              <span>85009 53558</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-editorial hover:shadow-editorial-hover transition-all duration-200 cursor-pointer"
            >
              Book Cab
            </button>
          </div>

          {/* Mobile Hamburger & Quick Call */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${contactConfig.phoneRaw}`}
              className="w-8 h-8 rounded-full bg-maroon-accent text-white flex items-center justify-center shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-3.5 h-3.5 text-gold-soft" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal hover:bg-ivory-200 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-warmBorder shadow-editorial px-4 pt-3 pb-6 text-charcoal animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-ivory-200 text-maroon-accent font-bold'
                      : 'text-charcoal-muted hover:bg-ivory-100 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-warmBorder flex flex-col space-y-2.5">
              <a
                href={`tel:${contactConfig.phoneRaw}`}
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-ivory text-charcoal font-bold text-xs uppercase tracking-wider border border-warmBorder"
              >
                <Phone className="w-4 h-4 text-gold-dark" />
                <span>Call Us: 85009 53558</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-maroon-accent hover:bg-maroon-hover text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-editorial"
              >
                Book Your Cab Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
