import React, { useState } from 'react';
import { Calendar, MapPin, Car, ArrowRight } from 'lucide-react';

export default function QuickBookingBar({ onBookWithData }) {
  const [pickup, setPickup] = useState('Tirupati');
  const [destination, setDestination] = useState('Tirumala & Local Temples');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState('2-4 Passengers');
  const [vehicle, setVehicle] = useState('Swift Dzire (4+1)');

  const destinationsList = [
    'Tirumala & Local Temples',
    'Kanipakam • Vellore • Arunachalam',
    'Southern Sacred Circuit (2-Day)',
    'Kanchipuram Temples',
    'Srikalahasti Temple',
    'Tiruttani Temple',
    'Chennai Airport / City Drop',
    'Bangalore Airport / City Drop'
  ];

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (onBookWithData) {
      onBookWithData({
        pickup,
        destination,
        travelDate: travelDate || new Date().toISOString().split('T')[0],
        passengers,
        vehicle,
        journeyType: 'Temple Tour'
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-20 -mt-8 sm:-mt-10">
      <div className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-editorial border border-warmBorder">
        <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          {/* Pickup */}
          <div className="space-y-1.5">
            <label htmlFor="quick-pickup" className="text-[11px] font-bold tracking-wider uppercase text-charcoal-muted block flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Pickup
            </label>
            <input
              id="quick-pickup"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="e.g. Tirupati"
              className="w-full bg-ivory px-3.5 py-2.5 rounded-xl border border-warmBorder text-xs sm:text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
            />
          </div>

          {/* Destination */}
          <div className="space-y-1.5">
            <label htmlFor="quick-destination" className="text-[11px] font-bold tracking-wider uppercase text-charcoal-muted block flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-maroon-accent" />
              Destination
            </label>
            <select
              id="quick-destination"
              value={destination}
              aria-label="Destination"
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-ivory px-3.5 py-2.5 rounded-xl border border-warmBorder text-xs sm:text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
            >
              {destinationsList.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div className="space-y-1.5">
            <label htmlFor="quick-travel-date" className="text-[11px] font-bold tracking-wider uppercase text-charcoal-muted block flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              Travel Date
            </label>
            <input
              id="quick-travel-date"
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-ivory px-3.5 py-2.5 rounded-xl border border-warmBorder text-xs sm:text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
            />
          </div>

          {/* Vehicle */}
          <div className="space-y-1.5">
            <label htmlFor="quick-vehicle" className="text-[11px] font-bold tracking-wider uppercase text-charcoal-muted block flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-charcoal" />
              Vehicle
            </label>
            <select
              id="quick-vehicle"
              value={vehicle}
              aria-label="Vehicle"
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full bg-ivory px-3.5 py-2.5 rounded-xl border border-warmBorder text-xs sm:text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
            >
              <option value="Swift Dzire (4+1)">Swift Dzire (4+1)</option>
              <option value="Maruti Ertiga (6+1)">Maruti Ertiga (6+1)</option>
              <option value="Innova Crysta (7+1)">Innova Crysta (7+1)</option>
              <option value="Tempo Traveller (14+1)">Tempo Traveller (14+1)</option>
            </select>
          </div>

          {/* Submit Action */}
          <div>
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 px-4 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl font-semibold text-xs sm:text-sm shadow-editorial hover:shadow-editorial-hover transition-all duration-200 flex items-center justify-center space-x-1.5 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-gold-soft group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
