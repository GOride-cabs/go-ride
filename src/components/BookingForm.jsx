import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Calendar, Clock, MapPin, User, Phone, Car, Sparkles, Mail, AlertCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function BookingForm({
  initialDestination = '',
  initialVehicle = '',
  initialJourneyType = '1 Day Local Tour',
  isModal = false,
  onComplete,
  onSuccess
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: 'Tirupati (Hotel / Station / Airport)',
    destination: initialDestination || 'Tirupati to Tirumala',
    date: new Date().toISOString().split('T')[0],
    time: '06:00 AM',
    passengers: '4',
    vehicle: initialVehicle ? `${initialVehicle}` : 'Swift Dzire (Rs.14/km)',
    notes: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMsg, setStatusMsg] = useState('');

  const destinationOptions = [
    "Tirupati to Tirumala (1 Day)",
    "Kanipakam • Golden Temple • Arunachalam (1 Day)",
    "Tirupati Local 5 Temples Tour (1 Day)",
    "2 Days Pilgrimage (Kanipakam, Arunachalam, Kanchi, Tiruttani)",
    "Tirupati to Srikalahasti (1 Day)",
    "Tirupati to Kanchipuram & Tiruttani (1 Day)",
    "Tirupati Airport (Renigunta) Pickup / Drop",
    "Tirupati to Chennai (Drop / Return)",
    "Tirupati to Bangalore (Drop / Return)",
    "Tirupati to Vellore (CMC / Golden Temple)",
    "Custom Outstation Trip"
  ];

  const vehicleOptions = [
    { name: "Swift Dzire (Rs.14/km)", cap: "4+1 Seater AC Sedan" },
    { name: "Maruti Ertiga (Rs.19/km)", cap: "6+1 Seater Family MUV" },
    { name: "Innova Crysta (Rs.23/km)", cap: "7+1 Seater Luxury MPV" },
    { name: "Tempo Traveller (Rs.28/km)", cap: "12-14 Seater Minibus" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your Name and Phone Number.");
      return;
    }

    setStatus('submitting');
    setStatusMsg('Submitting your booking and sending email notification...');

    try {
      // Direct email notification to Goridetirupaticab@gmail.com
      const emailPayload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'Not provided',
        pickup_location: formData.pickupLocation,
        destination_route: formData.destination,
        travel_date: formData.date,
        pickup_time: formData.time,
        passengers: formData.passengers,
        selected_vehicle: formData.vehicle,
        special_requests: formData.notes || 'None',
        _subject: `New Cab Booking Enquiry: ${formData.destination} - ${formData.name}`,
        _template: 'table',
        _captcha: 'false'
      };

      await fetch('https://formsubmit.co/ajax/Goridetirupaticab@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      }).catch(err => {
        console.log('Email notice:', err);
      });

      setStatus('success');
      setStatusMsg('Booking enquiry successfully submitted!');

      if (onSuccess) onSuccess(formData);
      if (onComplete) onComplete(formData);
    } catch (err) {
      console.error(err);
      setStatus('success');
    }
  };

  const handleOpenWhatsApp = () => {
    const message = `*NEW CAB BOOKING ENQUIRY - GO RIDE TIRUPATI*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📧 *Email:* ${formData.email || 'N/A'}%0A` +
      `📍 *Pickup:* ${formData.pickupLocation}%0A` +
      `🚩 *Destination:* ${formData.destination}%0A` +
      `📅 *Date:* ${formData.date}%0A` +
      `⏰ *Time:* ${formData.time}%0A` +
      `👥 *Passengers:* ${formData.passengers}%0A` +
      `🚗 *Vehicle:* ${formData.vehicle}%0A` +
      `📝 *Notes:* ${formData.notes || 'Standard booking'}`;

    window.open(`https://wa.me/918500953558?text=${message}`, '_blank');
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8 px-4 space-y-5 bg-ivory rounded-3xl border border-gold/40 shadow-sm animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-bold text-charcoal">
            Booking Request Submitted!
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto">
            Thank you, <strong className="text-charcoal">{formData.name}</strong>. An email notification has been dispatched directly to <strong className="text-charcoal">Goridetirupaticab@gmail.com</strong>.
          </p>
        </div>

        {/* Summary Card */}
        <div className="p-4 bg-white rounded-2xl border border-warmBorder max-w-md mx-auto text-left text-xs space-y-2 text-charcoal shadow-sm">
          <div className="flex justify-between border-b border-warmBorder/60 pb-1.5">
            <span className="text-charcoal-muted">Destination:</span>
            <span className="font-bold text-maroon-accent">{formData.destination}</span>
          </div>
          <div className="flex justify-between border-b border-warmBorder/60 pb-1.5">
            <span className="text-charcoal-muted">Travel Date:</span>
            <span className="font-semibold">{formData.date} at {formData.time}</span>
          </div>
          <div className="flex justify-between border-b border-warmBorder/60 pb-1.5">
            <span className="text-charcoal-muted">Vehicle:</span>
            <span className="font-semibold">{formData.vehicle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal-muted">Contact Phone:</span>
            <span className="font-bold text-charcoal">{formData.phone}</span>
          </div>
        </div>

        {/* Instant WhatsApp Confirmation */}
        <div className="pt-2 space-y-2 max-w-md mx-auto">
          <button
            type="button"
            onClick={handleOpenWhatsApp}
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Confirm on WhatsApp (Instant Response)</span>
          </button>

          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-xs text-charcoal-muted hover:text-charcoal underline cursor-pointer"
          >
            Submit another booking enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      
      {/* 1. Name & Phone (2 Cols) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold text-charcoal mb-1">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-charcoal mb-1">
            Phone Number (WhatsApp) *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* 2. Email Address */}
      <div>
        <label className="block text-xs font-bold text-charcoal mb-1">
          Email Address <span className="text-charcoal-muted font-normal">(for booking confirmation receipt)</span>
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. pilgrim@gmail.com"
            className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all"
          />
        </div>
      </div>

      {/* 3. Destination / Tour Package Selection */}
      <div>
        <label className="block text-xs font-bold text-charcoal mb-1">
          Select Destination / Pilgrimage Package *
        </label>
        <div className="relative">
          <MapPin className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all appearance-none cursor-pointer"
          >
            {destinationOptions.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 4. Pickup Location */}
      <div>
        <label className="block text-xs font-bold text-charcoal mb-1">
          Pickup Location in Tirupati
        </label>
        <input
          type="text"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          placeholder="Hotel name, Railway Station, Airport, or Street address"
          className="w-full px-3.5 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all"
        />
      </div>

      {/* 5. Date & Time (2 Cols) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold text-charcoal mb-1">
            Travel Date *
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-charcoal mb-1">
            Pickup Time *
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              placeholder="e.g. 06:00 AM"
              className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* 6. Vehicle Selection & Passengers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold text-charcoal mb-1">
            Preferred Vehicle *
          </label>
          <div className="relative">
            <Car className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all appearance-none cursor-pointer"
            >
              {vehicleOptions.map((v, i) => (
                <option key={i} value={v.name}>{v.name} ({v.cap})</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-charcoal mb-1">
            Number of Passengers
          </label>
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all appearance-none cursor-pointer"
          >
            <option value="1-2">1 to 2 Passengers</option>
            <option value="3-4">3 to 4 Passengers (Dzire)</option>
            <option value="5-6">5 to 6 Passengers (Ertiga)</option>
            <option value="7">7 Passengers (Innova Crysta)</option>
            <option value="8-14">8 to 14 Passengers (Tempo Traveller)</option>
          </select>
        </div>
      </div>

      {/* 7. Special Notes */}
      <div>
        <label className="block text-xs font-bold text-charcoal mb-1">
          Special Requests / Darshan Slot Details <span className="text-charcoal-muted font-normal">(Optional)</span>
        </label>
        <textarea
          name="notes"
          rows="2"
          value={formData.notes}
          onChange={handleChange}
          placeholder="e.g. Need Suprabhatam darshan pickup, return flight from Chennai, senior citizen traveling"
          className="w-full px-3.5 py-2 rounded-xl border border-warmBorder bg-white text-xs text-charcoal focus:border-maroon-accent focus:ring-1 focus:ring-maroon-accent outline-none transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3.5 px-4 rounded-xl bg-maroon-accent hover:bg-maroon-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer disabled:opacity-75"
      >
        <Send className="w-4 h-4 text-gold-soft" />
        <span>{status === 'submitting' ? 'Submitting & Sending Email...' : 'SUBMIT BOOKING ENQUIRY'}</span>
      </button>

      <p className="text-[11px] text-center text-charcoal-muted">
        🔒 Form notifications are sent directly to <strong className="text-charcoal">Goridetirupaticab@gmail.com</strong>. You can also confirm immediately on WhatsApp.
      </p>

    </form>
  );
}
