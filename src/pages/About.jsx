import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import WhyChooseUs from '../components/WhyChooseUs';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import CTASection from '../components/CTASection';

export default function About({ onOpenBooking }) {
  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>ABOUT GO RIDE TIRUPATI CABS</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-4 max-w-4xl mx-auto">
          {siteContent.aboutPage.heroHeading}
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-charcoal-muted leading-relaxed">
          {siteContent.aboutPage.subheading}
        </p>
      </div>

      {/* Story & Visual Editorial Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Atmospheric Real Temple Photo with Pure White High-Contrast Typography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-warmBorder bg-charcoal h-96 sm:h-[430px] group">
              <img
                src="/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp"
                alt="Sacred Tirumala Balaji Temple"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
              
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                  SACRED HERITAGE
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
                <span className="text-xs uppercase tracking-widest text-white font-bold block drop-shadow-md">
                  Rooted in Tirupati
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Guiding thousands of devotees across the holy shrines of Andhra &amp; Tamil Nadu.
                </p>
                <p className="text-xs text-white/90 font-medium drop-shadow-sm pt-1">
                  Managed by N Viswanadham • 24/7 dedicated cabs with local mountain chauffeurs.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Core Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-warmBorder shadow-editorial">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                {siteContent.aboutPage.visionTitle}
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                {siteContent.aboutPage.visionText}
              </p>

              <div className="space-y-4 pt-4 border-t border-warmBorder">
                {siteContent.aboutPage.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-ivory text-gold flex items-center justify-center shrink-0 mt-0.5 border border-warmBorder">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-charcoal">{pt.title}</h4>
                      <p className="text-xs text-charcoal-muted mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Why Choose Us Standard */}
      <WhyChooseUs />

      {/* Verified Google Reviews */}
      <GoogleReviewsSection />

      {/* Bottom CTA */}
      <div className="mt-16">
        <CTASection onOpenBooking={() => onOpenBooking()} />
      </div>

    </div>
  );
}
