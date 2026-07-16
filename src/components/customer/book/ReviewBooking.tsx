'use client';

import React from 'react';

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-3 mt-0.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-3 mt-0.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-3 mt-0.5">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-3 mt-0.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-3 mt-0.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default function ReviewBooking({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  const [promoCode, setPromoCode] = React.useState('');
  const [promoError, setPromoError] = React.useState(false);

  const handleApplyPromo = () => {
    if (promoCode && promoCode !== 'ELITE10') {
      setPromoError(true);
    } else {
      setPromoError(false);
    }
  };
  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center text-sm font-medium text-gray-600 hover:text-black mb-8 transition-colors"
      >
        <ArrowLeftIcon />
        Back
      </button>

      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-3xl font-playfair font-bold text-gray-900">Confirm Your Booking</h2>
        <p className="text-gray-500 mt-2 font-lato">Review your appointment details</p>
      </div>

      <div className="space-y-6">
        
        {/* Appointment Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-6 font-lato text-lg">Appointment Details</h3>
          
          <div className="space-y-5">
            <div className="flex items-start">
              <CalendarIcon />
              <div>
                <p className="text-xs text-gray-400 font-lato mb-0.5">Date & Time</p>
                <p className="text-sm font-medium text-gray-900 font-lato">May 8, 2026 at 15:00</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <UserIcon />
              <div>
                <p className="text-xs text-gray-400 font-lato mb-0.5">Stylist</p>
                <p className="text-sm font-medium text-gray-900 font-lato">Alex Rodriguez</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <ClockIcon />
              <div>
                <p className="text-xs text-gray-400 font-lato mb-0.5">Duration</p>
                <p className="text-sm font-medium text-gray-900 font-lato">60 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4 font-lato text-lg">Services</h3>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-900 font-lato">Haircut & Style</p>
              <p className="text-xs text-gray-500 font-lato mt-0.5">60 min</p>
            </div>
            <span className="text-sm font-medium text-gray-900 font-lato">$65</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-6 font-lato text-lg">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-800 font-lato">
              <UserIcon />
              <span>kasun bandara</span>
            </div>
            <div className="flex items-center text-sm text-gray-800 font-lato">
              <MailIcon />
              <span>bandarakasun495@gmail.com</span>
            </div>
            <div className="flex items-center text-sm text-gray-800 font-lato">
              <PhoneIcon />
              <span>0123454568</span>
            </div>
          </div>
        </div>
        
        {/* Payment Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-6 font-lato text-lg">Payment Summary</h3>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2 font-lato">Promo Code</label>
            <div className="flex gap-3">
              <input 
                type="text" 
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value);
                  setPromoError(false);
                }}
                placeholder="Enter code (try ELITE10)"
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 font-lato transition-all"
              />
              <button 
                onClick={handleApplyPromo}
                className="px-6 py-2.5 bg-white border border-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors font-lato text-sm shadow-sm"
              >
                Apply
              </button>
            </div>
            {promoError && (
              <p className="text-red-500 text-sm font-lato mt-2">Invalid promo code</p>
            )}
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center text-sm font-lato">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900 font-medium">$65</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <span className="text-gray-900 font-semibold font-lato">Total</span>
              <span className="text-gray-900 font-bold text-lg font-lato">$65.00</span>
            </div>
          </div>

          <button 
            onClick={onNext}
            className="w-full flex items-center justify-center py-3.5 bg-[#0F172A] hover:bg-black text-white rounded-lg font-medium transition-colors font-lato shadow-md"
          >
            <DollarIcon />
            Confirm Booking
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-3 font-lato">
            Payment will be collected at the salon
          </p>
        </div>
        
      </div>
    </div>
  );
}
