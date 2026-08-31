import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { contactConfig } from '../config/contact';
import { siteContent } from '../data/siteContent';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>CONTACT & RESERVATIONS</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight mb-4">
          Plan Your Pilgrimage Trip
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Reach out to our Tirupati travel desk for customized itineraries, outstation drops, and transparent vehicle reservations.
        </p>
      </div>

      {/* Main Form & Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  Tirupati Travel Desk
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-muted">
                  Managed by <strong className="text-charcoal font-semibold">{contactConfig.contactPerson}</strong>. We are available round the clock to help coordinate your darshan transfers and custom itineraries.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {/* Phone */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-ivory border border-warmBorder">
                  <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-charcoal-muted block">Direct Call & Support</span>
                    <a
                      href={`tel:${contactConfig.phoneRaw}`}
                      className="font-serif font-bold text-base text-charcoal hover:text-maroon-accent transition-colors"
                    >
                      {contactConfig.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <MessageCircle className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs text-emerald-900 font-medium block">WhatsApp Booking</span>
                    <a
                      href={contactConfig.getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif font-bold text-base text-emerald-950 hover:underline block"
                    >
                      {contactConfig.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-ivory border border-warmBorder">
                  <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-charcoal-muted block">Email Enquiries</span>
                    <a
                      href={`mailto:${contactConfig.email}`}
                      className="font-medium text-sm text-charcoal hover:text-maroon-accent transition-colors"
                    >
                      {contactConfig.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-ivory border border-warmBorder">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-charcoal-muted block">Office Location</span>
                    <p className="text-xs text-charcoal mt-0.5 leading-relaxed font-medium">
                      {contactConfig.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Promise */}
            <div className="bg-ivory-200/80 p-6 rounded-3xl border border-warmBorder shadow-editorial">
              <div className="flex items-center space-x-2 text-gold-dark text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Operations</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                Early Morning & Late Night Drops
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Whether you have an early morning 4 AM suprabhatam transfer or late-night arrival at Tirupati railway station, our pre-booked drivers will be stationed promptly on time.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-card p-6 sm:p-10 rounded-3xl border border-warmBorder shadow-editorial">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-dark block mb-1">
                  RESERVATION REQUEST
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                  Request a Custom Quote
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                  Fill in your details below and we will confirm vehicle availability and exact fare.
                </p>
              </div>

              <BookingForm />
            </div>
          </div>

        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {siteContent.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-card rounded-2xl border border-warmBorder overflow-hidden transition-all shadow-editorial"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-base text-charcoal hover:text-maroon-accent transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gold shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-charcoal-muted shrink-0 ml-2" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-warmBorder/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
