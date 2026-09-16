import React from 'react';
import { MessageCircle, Car, Sparkles, PhoneCall } from 'lucide-react';
import { contactConfig } from '../config/contact';
import { siteContent } from '../data/siteContent';

export default function CTASection({ onOpenBooking }) {
  return (
    <section className="py-24 bg-ivory-200/70 border-t border-warmBorder relative overflow-hidden text-charcoal">
      
      {/* Subtle gold ornamentation aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-soft/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-soft/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>START PLANNING TODAY</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-charcoal mb-5 leading-tight">
          {siteContent.ctaSection.heading}
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed mb-10">
          {siteContent.ctaSection.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            aria-label={siteContent.ctaSection.primaryBtn}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-maroon-accent hover:bg-maroon-hover text-white font-semibold text-sm shadow-editorial hover:shadow-editorial-hover transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Car className="w-4 h-4 text-gold-soft" />
            <span>{siteContent.ctaSection.primaryBtn}</span>
          </button>

          <a
            href={contactConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-ivory-100 text-charcoal font-medium text-sm border border-warmBorder hover:border-gold shadow-editorial transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>{siteContent.ctaSection.whatsappBtn}</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-warmBorder/60 max-w-md mx-auto">
          <a
            href={`tel:${contactConfig.phoneRaw}`}
            className="text-xs text-charcoal-muted hover:text-charcoal transition-colors inline-flex items-center space-x-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-gold" />
            <span>Or speak directly with <strong className="font-semibold text-charcoal">{contactConfig.contactPerson}</strong>: {contactConfig.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
