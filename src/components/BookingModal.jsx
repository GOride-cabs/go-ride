import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import BookingForm from './BookingForm';
import { contactConfig } from '../config/contact';

export default function BookingModal({
  isOpen,
  onClose,
  initialDestination = '',
  initialVehicle = '',
  initialJourneyType = 'Temple Tour'
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-charcoal/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative bg-card w-full max-w-2xl rounded-3xl shadow-2xl border border-warmBorder overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-ivory-200 px-6 sm:px-8 py-5 border-b border-warmBorder flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark">
                {contactConfig.brandName}
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
              Book Your Pilgrimage Ride
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white text-charcoal-muted hover:text-charcoal border border-warmBorder hover:border-gold transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto bg-card">
          <BookingForm
            initialDestination={initialDestination}
            initialVehicle={initialVehicle}
            initialJourneyType={initialJourneyType}
            isModal={true}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
