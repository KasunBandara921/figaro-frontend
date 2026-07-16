'use client';

import React, { useState } from 'react';

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export default function CustomerDetails({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
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
        <h2 className="text-3xl font-playfair font-bold text-gray-900">Your Details</h2>
        <p className="text-gray-500 mt-2 font-lato">We'll use this information to confirm your appointment</p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-6 font-lato text-lg">Contact Information</h3>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-1.5 font-lato">
              Full Name <span className="text-gray-500">*</span>
            </label>
            <input 
              type="text" 
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 font-lato transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1.5 font-lato">
              Email Address <span className="text-gray-500">*</span>
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 font-lato transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1.5 font-lato">
              Phone Number <span className="text-gray-500">*</span>
            </label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              placeholder="(555) 123-4567"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 font-lato transition-all"
            />
          </div>

          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-900 mb-1.5 font-lato">
              Special Requests (Optional)
            </label>
            <textarea 
              id="specialRequests"
              name="specialRequests"
              placeholder="Any special requests or notes for your stylist..."
              rows={4}
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 font-lato transition-all resize-y"
            ></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full py-3.5 bg-[#0F172A] hover:bg-black text-white rounded-lg font-medium transition-colors font-lato"
            >
              Continue to Confirmation
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
