import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-warmBorder p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href={contactConfig.getTelUrl()}
          className="py-2.5 px-2 rounded-xl bg-ivory text-charcoal border border-warmBorder flex items-center justify-center space-x-1 text-xs font-bold uppercase tracking-wider"
          aria-label="Call Tirupati Cab Desk"
        >
          <Phone className="w-4 h-4 text-gold-dark" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={contactConfig.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 rounded-xl bg-emerald-700 text-white flex items-center justify-center space-x-1 text-xs font-bold uppercase tracking-wider shadow-sm"
          aria-label="WhatsApp Tirupati Cab Desk"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WHATSAPP</span>
        </a>

        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          aria-label="Book a cab in Tirupati now"
          className="py-2.5 px-2 rounded-xl bg-maroon-accent text-white flex items-center justify-center space-x-1 text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-gold-soft" />
          <span>BOOK NOW</span>
        </button>

      </div>
    </div>
  );
}
