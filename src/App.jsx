import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import MobileBottomBar from './components/MobileBottomBar';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import ServicesHub from './pages/ServicesHub';
import AirportTaxi from './pages/AirportTaxi';
import OutstationCabs from './pages/OutstationCabs';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import Vehicles from './pages/Vehicles';
import Sightseeing from './pages/Sightseeing';
import About from './pages/About';
import Contact from './pages/Contact';
import BestTravelsInTirupati from './pages/BestTravelsInTirupati';
import NotFound from './pages/NotFound';

// Scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({
    destination: '',
    vehicle: '',
    pickup: 'Tirupati',
    date: '',
    journeyType: 'Temple Tour'
  });

  const handleOpenBooking = (initialData = {}) => {
    setModalInitialData(prev => ({
      ...prev,
      ...initialData
    }));
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-maroon selection:text-white">
        
        {/* Sticky Mobile-First Header */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Main Routed Content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            <Route
              path="/services"
              element={<ServicesHub onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services/tirupati-cabs"
              element={<ServicesHub onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services/tirupati-airport-taxi"
              element={<AirportTaxi onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services/tirupati-outstation-cabs"
              element={<OutstationCabs onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/packages"
              element={<Packages onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/packages/:slug"
              element={<PackageDetails onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/sightseeing"
              element={<Sightseeing onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/vehicles"
              element={<Vehicles onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/best-cabs-in-tirupati"
              element={<About onOpenBooking={handleOpenBooking} />}
            />
            {/* 301 Permanent Client Redirect from /about to /best-cabs-in-tirupati */}
            <Route
              path="/about"
              element={<Navigate to="/best-cabs-in-tirupati" replace />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/best-travels-in-tirupati"
              element={<BestTravelsInTirupati onOpenBooking={handleOpenBooking} />}
            />
            {/* Catch-all 404 fallback */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Desktop Floating WhatsApp Button */}
        <div className="hidden sm:block">
          <WhatsAppFloat />
        </div>

        {/* Custom Mobile Bottom Action Bar (Call / WhatsApp / Book Now) */}
        <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          initialDestination={modalInitialData.destination}
          initialVehicle={modalInitialData.vehicle}
          initialJourneyType={modalInitialData.journeyType}
        />
      </div>
    </Router>
  );
}
