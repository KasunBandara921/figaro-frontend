'use client';

import React, { useState } from 'react';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

interface Stylist {
  id: string;
  name: string;
  rating: string;
  specialties: string[];
  initials: string;
  colorClass: string;
}

export default function SelectStylist({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  const [selectedStylist, setSelectedStylist] = useState<string | null>(null);

  const stylists: Stylist[] = [
    { id: "s1", name: "Sarah Johnson", rating: "4.9", specialties: ["Coloring", "Balayage"], initials: "SJ", colorClass: "bg-red-800" },
    { id: "s2", name: "Mike Chen", rating: "4.8", specialties: ["Men's Cuts", "Fades"], initials: "MC", colorClass: "bg-blue-600" },
    { id: "s3", name: "Emma Davis", rating: "5.0", specialties: ["Updos", "Bridal"], initials: "ED", colorClass: "bg-orange-400" },
    { id: "s4", name: "Alex Rodriguez", rating: "4.7", specialties: ["Curly Hair", "Treatments"], initials: "AR", colorClass: "bg-indigo-600" }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
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
        <h2 className="text-3xl font-playfair font-bold text-gray-900">Choose Your Stylist</h2>
        <p className="text-gray-500 mt-2 font-lato">Select a preferred stylist or let us choose for you</p>
      </div>

      {/* Stylists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {stylists.map((stylist) => {
          const isSelected = selectedStylist === stylist.id;
          return (
            <div 
              key={stylist.id}
              onClick={() => setSelectedStylist(stylist.id)}
              className={`relative bg-white rounded-xl p-6 cursor-pointer transition-all border ${
                isSelected 
                  ? 'bg-purple-50/20 border-purple-500 ring-1 ring-purple-500 shadow-md' 
                  : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold text-white ${stylist.colorClass}`}>
                  {stylist.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-lato">{stylist.name}</h4>
                  <div className="flex items-center text-sm text-gray-600 mt-0.5 font-lato">
                    <StarIcon />
                    <span>{stylist.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {stylist.specialties.map(spec => (
                  <span key={spec} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-100 font-lato">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button 
          onClick={() => {
            setSelectedStylist(null);
            onNext();
          }}
          className="flex-1 py-3 px-6 bg-white border border-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm font-lato"
        >
          No Preference
        </button>
        <button 
          onClick={() => {
            if (selectedStylist) onNext();
          }}
          disabled={!selectedStylist}
          className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors font-lato ${
            selectedStylist 
              ? 'bg-gray-800 text-white hover:bg-black' 
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
        >
          Continue with Stylist
        </button>
      </div>
    </div>
  );
}
