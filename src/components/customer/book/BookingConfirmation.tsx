'use client';

import React from 'react';

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
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

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

export default function BookingConfirmation({ onHome, onBookAnother }: { onHome?: () => void, onBookAnother?: () => void }) {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="bg-[#F0FDF4] rounded-2xl p-8 md:p-12 shadow-sm border border-green-100">
        
        {/* Success Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mb-6 shadow-md shadow-green-200">
            <CheckCircleIcon />
          </div>
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-[#16A34A] font-medium font-lato">Your appointment has been successfully booked</p>
        </div>

        <div className="space-y-4">
          
          {/* Reference Number */}
          <div className="bg-white rounded-xl p-5 border border-green-50 shadow-sm">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold font-lato">Booking Reference</p>
            <p className="text-xl font-medium text-gray-900 font-lato">REF-BK003</p>
          </div>

          {/* Appointment Details */}
          <div className="bg-white rounded-xl p-5 border border-green-50 shadow-sm space-y-5">
            <div className="flex items-start">
              <CalendarIcon />
              <div>
                <p className="text-xs text-gray-400 font-lato mb-0.5">Date & Time</p>
                <p className="text-sm font-medium text-gray-900 font-lato">May 14, 2026 at 16:00</p>
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

          {/* Services & Pricing */}
          <div className="bg-white rounded-xl p-5 border border-green-50 shadow-sm">
            <p className="text-xs text-gray-400 font-lato mb-3">Services</p>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-800 font-lato">Haircut & Style</span>
              <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-lato">$65</span>
            </div>
            
            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-900 font-lato">Total</span>
              <span className="text-base font-bold text-gray-900 font-lato">$65.00</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl p-5 border border-green-50 shadow-sm space-y-3">
            <div className="flex items-center text-sm text-gray-600 font-lato">
              <MailIcon />
              <span>Confirmation sent to <strong>bandarakasun495@gmail.com</strong></span>
            </div>
            <div className="flex items-center text-sm text-gray-600 font-lato">
              <PhoneIcon />
              <span>We'll send a reminder to <strong>1234568523</strong></span>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onHome}
            className="flex-1 flex items-center justify-center py-3.5 bg-white border border-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors font-lato shadow-sm"
          >
            <HomeIcon />
            Home
          </button>
          <button 
            onClick={onBookAnother}
            className="flex-1 flex items-center justify-center py-3.5 bg-[#0F172A] hover:bg-black text-white rounded-lg font-medium transition-colors font-lato shadow-sm"
          >
            Book Another
          </button>
        </div>

      </div>
    </div>
  );
}
