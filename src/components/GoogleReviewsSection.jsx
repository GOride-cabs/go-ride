import React, { useEffect } from 'react';
import { Star, MessageCircle, ShieldCheck } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function GoogleReviewsSection() {
  useEffect(() => {
    // Dynamically ensure Elfsight platform script is initialized
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-ivory-200/40 border-t border-warmBorder relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Google Reviews Master Header Card */}
        <div className="bg-card rounded-3xl p-6 sm:p-10 border border-warmBorder shadow-editorial mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Google Brand Rating */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            
            {/* Google "G" Logo Icon */}
            <div className="w-16 h-16 rounded-2xl bg-white border border-warmBorder shadow-md flex items-center justify-center p-3 shrink-0">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <span className="font-serif text-3xl font-extrabold text-charcoal">
                  5.0
                </span>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  VERIFIED 5-STAR
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                Live Google Business Reviews
              </h2>
              <p className="text-xs text-charcoal-muted">
                Real-time verified customer reviews automatically synced from our <strong className="text-charcoal">Google Maps Business Profile</strong>.
              </p>
            </div>

          </div>

          {/* Right: Direct Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={contactConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book On WhatsApp</span>
            </a>

            <a
              href={contactConfig.getTelUrl()}
              className="px-6 py-3 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-1.5"
            >
              <span>Call: 85009 53558</span>
            </a>
          </div>

        </div>

        {/* Live Auto-Syncing Elfsight Google Reviews Widget */}
        <div className="min-h-[220px] bg-white rounded-3xl p-4 sm:p-8 border border-warmBorder shadow-editorial mb-10">
          <div className="elfsight-app-aad516cd-7b18-4cc4-80b3-cad2edd9f925" data-elfsight-app-lazy></div>
        </div>

        {/* Bottom Trust Badge Ribbon */}
        <div className="bg-white rounded-2xl p-4 border border-warmBorder shadow-xs max-w-2xl mx-auto text-center flex items-center justify-center space-x-3 text-xs text-charcoal">
          <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
          <span>Live Auto-Syncing Google Reviews • Go Ride Tirupati Cab</span>
        </div>

      </div>
    </section>
  );
}
