import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import PackagesSection from '../components/PackagesSection';
import VehicleSection from '../components/VehicleSection';
import PopularRoutesSection from '../components/PopularRoutesSection';
import ServicesSection from '../components/ServicesSection';
import BookingProcessSection from '../components/BookingProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import FAQSection from '../components/FAQSection';
import BookingForm from '../components/BookingForm';
import CTASection from '../components/CTASection';

export default function Home({ onOpenBooking }) {
  return (
    <div className="bg-ivory min-h-screen pb-16 sm:pb-0">
      <SEOHead
        title="GoRide Tirupati Travels | Tirupati Cabs & Taxi Service"
        description="Book reliable 24/7 cabs in Tirupati with GoRide Tirupati Travels. Punctual Tirumala darshan taxis, Tirupati airport & railway transfers, local temple sightseeing & outstation cabs from ₹14/km. Call +91 85009 53558."
        canonicalUrl="https://www.goridetirupatitravels.in/"
        keywords="Tirupati Cabs, Tirupati Taxi, Cab Service in Tirupati, Taxi in Tirupati, Tirupati to Tirumala Cab, Tirupati Airport Taxi, Tirupati Outstation Cabs, Best Cabs in Tirupati"
      />
      
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

      {/* 8. Verified Google Reviews & Customer Feedback */}
      <GoogleReviewsSection />

      {/* 9. Comprehensive FAQ Accordions */}
      <FAQSection />

      {/* 10. Direct Online Booking & Enquiry Form */}
      <section id="booking-section" className="py-20 sm:py-24 bg-ivory-200/50 border-t border-warmBorder">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-dark block mb-2">
              ONLINE RESERVATION DESK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              Book Your Cab in Tirupati
            </h2>
            <p className="text-sm text-charcoal-muted mt-2">
              Get transparent quotes and fast confirmation from N Viswanadham (+91 85009 53558).
            </p>
          </div>

          <div className="bg-card p-6 sm:p-10 rounded-3xl border border-warmBorder shadow-editorial">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 11. Final High-Converting Bottom Action Banner */}
      <CTASection
        onOpenBooking={() => onOpenBooking()}
      />

    </div>
  );
}
