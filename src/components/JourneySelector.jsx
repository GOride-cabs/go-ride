import React, { useState } from 'react';
import { MapPin, ArrowRight, Car, Clock, Shield, Check, MessageCircle, Phone } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function JourneySelector({ onSelectDestination, onOpenBooking }) {
  const categories = {
    pilgrimage: {
      title: "PILGRIMAGE TRIPS",
      destinations: [
        { name: "Tirumala", type: "Ghat Route & Darshan Drop", duration: "1 Day / Flexible", distance: "22 km", vehicle: "Sedan / MPV", note: "Dedicated ghat-certified driver" },
        { name: "Kanipakam", type: "1 Day Trip / Tri-Circuit", duration: "Half / 1 Day", distance: "70 km", vehicle: "Dzire / Ertiga / Innova", note: "Swayambhu Vinayaka darshan" },
        { name: "Golden Temple", type: "1-Day Tri-Temple Route", duration: "1 Day", distance: "110 km", vehicle: "All Fleet", note: "Vellore Sripuram star path" },
        { name: "Arunachalam", type: "1-Day / 2-Day Circuit", duration: "1–2 Days", distance: "195 km", vehicle: "Innova / Ertiga / Tempo", note: "Agni Lingam & Girivalam" },
        { name: "Kanchipuram", type: "Temple Heritage Trip", duration: "1 Day", distance: "115 km", vehicle: "Sedan / MPV", note: "Kamakshi Amman & Silk weavers" },
        { name: "Srikalahasti", type: "1 Day / Rahu-Ketu Tour", duration: "Half / 1 Day", distance: "38 km", vehicle: "All Fleet", note: "Vayu Lingam & pooja waiting" },
        { name: "Tiruttani", type: "Lord Murugan Arupadaiveedu", duration: "Half / 1 Day", distance: "65 km", vehicle: "Sedan / MPV", note: "Hilltop 365 steps darshan" }
      ]
    },
    local: {
      title: "LOCAL TEMPLE TOUR",
      destinations: [
        { name: "Padmavati Temple", type: "1 Day Local Temple Tour", duration: "Half Day", distance: "5 km", vehicle: "All Fleet", note: "Tiruchanur Amman darshan" },
        { name: "Srinivasa Mangapuram", type: "1 Day Local Temple Tour", duration: "Half Day", distance: "12 km", vehicle: "All Fleet", note: "Kalyana Venkateswara shrine" },
        { name: "ISKCON Temple", type: "1 Day Local Temple Tour", duration: "2 Hours", distance: "3 km", vehicle: "All Fleet", note: "Alipiri foothills Radha Govinda" },
        { name: "Kapila Theertham", type: "1 Day Local Temple Tour", duration: "2 Hours", distance: "4 km", vehicle: "All Fleet", note: "Holy Shiva waterfall theertham" },
        { name: "Govindaraja Swamy Temple", type: "1 Day Local Temple Tour", duration: "2 Hours", distance: "1 km", vehicle: "All Fleet", note: "Historic 7-tier Rajagopuram" }
      ]
    },
    cityDrops: {
      title: "CITY DROPS",
      destinations: [
        { name: "Chennai", type: "Outstation Drop Service", duration: "One-Way / Round", distance: "150 km", vehicle: "Dzire / Ertiga / Innova", note: "Airport, Central, or City drop" },
        { name: "Bangalore", type: "Outstation Drop Service", duration: "One-Way / Round", distance: "250 km", vehicle: "Dzire / Ertiga / Innova / Tempo", note: "Kempegowda BLR Airport / City drop" }
      ]
    }
  };

  const [activeCategory, setActiveCategory] = useState('pilgrimage');
  const [selectedDest, setSelectedDest] = useState(categories.pilgrimage.destinations[0]);

  const handleDestinationClick = (dest) => {
    setSelectedDest(dest);
    if (onSelectDestination) {
      onSelectDestination(dest.name);
    }
  };

  const handleBookNow = () => {
    if (onOpenBooking) {
      onOpenBooking({
        pickup: "Tirupati (Hotel / Station)",
        destination: selectedDest.name,
        journeyType: selectedDest.type.includes('Drop') ? 'One-Way Drop' : 'Temple Tour'
      });
    }
  };

  const handleWhatsAppEnquiry = () => {
    const url = contactConfig.getWhatsAppUrl({
      pickup: "Tirupati",
      destination: selectedDest.name,
      notes: `Enquiring for ${selectedDest.type} (${selectedDest.duration}, ~${selectedDest.distance})`
    });
    window.open(url, '_blank');
  };

  return (
    <div className="bg-card rounded-3xl border border-warmBorder shadow-editorial overflow-hidden text-charcoal">
      
      {/* Panel Header */}
      <div className="p-5 sm:p-6 bg-ivory-200/80 border-b border-warmBorder">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-0.5">
              CUSTOM PILGRIMAGE & OUTSTATION CABS
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
              Where would you like to go?
            </h2>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-warmBorder text-xs font-semibold text-charcoal shadow-sm shrink-0">
            <MapPin className="w-3.5 h-3.5 text-maroon-accent" />
            <span>Origin: Tirupati</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 mt-4 pt-2 border-t border-warmBorder/60">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key);
                setSelectedDest(cat.destinations[0]);
                if (onSelectDestination) onSelectDestination(cat.destinations[0].name);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeCategory === key
                  ? 'bg-charcoal text-white shadow-sm font-semibold'
                  : 'bg-white/80 text-charcoal-muted hover:text-charcoal hover:bg-white border border-warmBorder'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Panel Body: Destinations Pills */}
      <div className="p-5 sm:p-6 space-y-4">
        
        {/* Selectable Destination Chips */}
        <div className="flex flex-wrap gap-2">
          {categories[activeCategory].destinations.map((dest) => {
            const isSelected = selectedDest.name === dest.name;
            return (
              <button
                key={dest.name}
                onClick={() => handleDestinationClick(dest)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 border ${
                  isSelected
                    ? 'bg-maroon-accent text-white border-maroon-accent shadow-sm ring-2 ring-maroon-accent/20'
                    : 'bg-ivory text-charcoal border-warmBorder hover:border-gold hover:bg-ivory-200'
                }`}
              >
                <span>{dest.name}</span>
                {isSelected && <Check className="w-3 h-3 text-gold-soft" />}
              </button>
            );
          })}
        </div>

        {/* Selected Destination Summary Card */}
        <div className="p-4 bg-ivory rounded-2xl border border-warmBorder space-y-3 mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-warmBorder/60">
            <div>
              <span className="text-[10px] uppercase font-bold text-gold-dark tracking-wider block">
                Selected Journey
              </span>
              <h3 className="font-serif text-lg font-bold text-charcoal">
                Tirupati → {selectedDest.name}
              </h3>
            </div>
            <span className="text-xs font-semibold text-charcoal bg-white px-2.5 py-1 rounded-lg border border-warmBorder self-start sm:self-auto">
              {selectedDest.type}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-charcoal">
            <div className="bg-white p-2 rounded-lg border border-warmBorder">
              <span className="text-charcoal-muted block text-[10px]">Approx Distance</span>
              <span className="font-semibold">{selectedDest.distance}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-warmBorder">
              <span className="text-charcoal-muted block text-[10px]">Tour Duration</span>
              <span className="font-semibold">{selectedDest.duration}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-warmBorder col-span-2 sm:col-span-1">
              <span className="text-charcoal-muted block text-[10px]">Vehicles</span>
              <span className="font-semibold">{selectedDest.vehicle}</span>
            </div>
          </div>

          <p className="text-[11px] text-charcoal-muted italic">
            • {selectedDest.note}. Flexible halts for meal breaks and darshan token timings.
          </p>
        </div>

        {/* Bottom CTA Actions */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleBookNow}
            className="w-full py-3 px-4 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl font-semibold text-xs sm:text-sm shadow-editorial transition-all flex items-center justify-center space-x-2"
          >
            <span>Book Cab for {selectedDest.name}</span>
            <ArrowRight className="w-4 h-4 text-gold-soft" />
          </button>

          <button
            onClick={handleWhatsAppEnquiry}
            className="w-full py-3 px-4 bg-white hover:bg-ivory-100 text-charcoal border border-warmBorder hover:border-gold rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>WhatsApp Enquiry</span>
          </button>
        </div>

      </div>

    </div>
  );
}
