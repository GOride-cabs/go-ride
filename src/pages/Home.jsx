import React from 'react';
import Hero from '../components/Hero';
import PackagesSection from '../components/PackagesSection';
import VehicleSection from '../components/VehicleSection';
import PopularRoutesSection from '../components/PopularRoutesSection';
import ServicesSection from '../components/ServicesSection';
import BookingProcessSection from '../components/BookingProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQSection from '../components/FAQSection';
import BookingForm from '../components/BookingForm';
import CTASection from '../components/CTASection';

export default function Home({ onOpenBooking }) {
  return (
    <div className="bg-ivory min-h-screen pb-16 sm:pb-0">
      
      {/* 1. Hero: Signature Editorial Mosaic with Direct Contact */}
      <Hero
        onOpenBooking={(data) => onOpenBooking(data)}
      />

      {/* 2. OUR PACKAGES: Image-driven pilgrimage tour cards with multi-stop flow arrows */}
      <PackagesSection
        onBookPackage={(pkgData) => onOpenBooking(pkgData)}
      />

      {/* 3. OUR VEHICLES: Exact structured specification & tariff boxes matching screenshot */}
      <VehicleSection
        onBookVehicle={(vehData) => onOpenBooking({ vehicle: vehData.name })}
      />

      {/* 4. POPULAR ROUTES & OUTSTATION DROPS: Airport, Chennai, CMC Vellore, Bangalore, Pondicherry */}
      <PopularRoutesSection
        onOpenBooking={(routeData) => onOpenBooking(routeData)}
      />

      {/* 5. OUR SERVICES: Complete list of all 1-day, 2-day, and drop services */}
      <ServicesSection
        onBookService={(srvData) => onOpenBooking(srvData)}
      />

      {/* 6. HOW IT WORKS: 3-Step Simple Cab Booking Process */}
      <BookingProcessSection
        onOpenBooking={() => onOpenBooking()}
      />

      {/* 7. Why Choose Go Ride Tirupati Cab: Core Benefits */}
      <WhyChooseUs />

      {/* 8. Comprehensive FAQ Accordions (10 Questions from Old Website) */}
      <FAQSection />

      {/* 9. Direct Online Booking & Enquiry Form */}
      <section id="booking-section" className="py-20 sm:py-24 bg-ivory-200/50 border-t border-warmBorder">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-dark block mb-2">
              ONLINE RESERVATION DESK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              Book Your Tirupati Cab
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
              Fill in your pickup, date, and destination. N Viswanadham (+91 85009 53558) will confirm your driver and vehicle details.
            </p>
          </div>

          <div className="bg-card p-6 sm:p-10 rounded-3xl border border-warmBorder shadow-editorial">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <CTASection onOpenBooking={() => onOpenBooking()} />

    </div>
  );
}
