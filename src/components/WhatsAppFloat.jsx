import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip hint on hover */}
      <span className="hidden sm:block mr-3 bg-charcoal text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-warm-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-gold/30">
        Chat with Booking Desk
      </span>

      <a
        href={contactConfig.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-warm-lg hover:shadow-warm-hover transform hover:scale-110 transition-all duration-300 relative border-2 border-white/80"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </a>
    </div>
  );
}
