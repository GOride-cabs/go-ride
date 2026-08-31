import React from 'react';
import { Compass, ShieldCheck, Clock, Headphones, Sparkles } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function WhyChooseUs() {
  const iconMap = {
    Compass: Compass,
    ShieldCheck: ShieldCheck,
    Clock: Clock,
    Headphones: Headphones,
  };

  return (
    <section className="py-24 bg-ivory-200/50 border-t border-warmBorder relative overflow-hidden">
      
      {/* Subtle gold decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-soft/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>{siteContent.whyChooseUs.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-4">
            {siteContent.whyChooseUs.heading}
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            {siteContent.whyChooseUs.subheading}
          </p>
        </div>

        {/* 4 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteContent.whyChooseUs.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Compass;
            return (
              <div
                key={feature.id}
                className="editorial-card p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between group relative"
              >
                <div>
                  {/* Subtle index watermark */}
                  <span className="text-3xl font-serif font-bold text-ivory-300 group-hover:text-gold transition-colors absolute top-6 right-6">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-ivory border border-warmBorder flex items-center justify-center text-charcoal mb-6 group-hover:border-gold group-hover:text-gold-dark transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-3 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-warmBorder/60">
                  <span className="text-[11px] font-semibold text-gold-dark tracking-wider uppercase">
                    Pilgrimage Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
