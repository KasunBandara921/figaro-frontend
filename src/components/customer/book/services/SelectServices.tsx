'use client';

import React, { useState } from 'react';

// Reusable SVGs
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 text-gray-500">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-gray-500">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

interface Service {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
}

export default function SelectServices({ onNext }: { onNext?: () => void }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services: Service[] = [
    {
      id: "haircut-style",
      title: "Haircut & Style",
      description: "Professional cut and styling",
      duration: 60,
      price: 65
    },
    {
      id: "hair-coloring",
      title: "Hair Coloring",
      description: "Full color treatment with toning",
      duration: 120,
      price: 145
    },
    {
      id: "highlights",
      title: "Highlights",
      description: "Partial or full highlights",
      duration: 150,
      price: 180
    },
    {
      id: "blowout",
      title: "Blowout",
      description: "Professional blow dry and style",
      duration: 45,
      price: 45
    },
    {
      id: "deep-conditioning",
      title: "Deep Conditioning",
      description: "Restorative hair treatment",
      duration: 30,
      price: 35
    },
    {
      id: "special-updo",
      title: "Special Occasion Updo",
      description: "Elegant updo for events",
      duration: 90,
      price: 95
    }
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(serviceId => serviceId !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const selectedData = services.filter(s => selectedServices.includes(s.id));
  const totalDuration = selectedData.reduce((acc, curr) => acc + curr.duration, 0);
  const totalPrice = selectedData.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-3xl font-playfair font-bold text-gray-900">Select Services</h2>
        <p className="text-gray-500 mt-2 font-lato">Choose one or more services for your appointment</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          return (
            <div 
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`relative rounded-xl p-6 cursor-pointer transition-all border ${
                isSelected 
                  ? 'bg-purple-50/20 border-purple-500 ring-1 ring-purple-500 shadow-md' 
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300'
              }`}
            >
              {/* Checkbox Icon */}
              <div className="absolute top-6 right-6">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-black border-black' : 'border-gray-300 bg-white'
                }`}>
                  {isSelected && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="pr-8">
                <h3 className="text-lg font-semibold text-gray-900 font-lato">{service.title}</h3>
                <p className="text-sm text-gray-500 mt-1 mb-6 font-lato">{service.description}</p>
                
                <div className="flex items-center text-sm text-gray-600 font-medium font-lato space-x-6">
                  <div className="flex items-center">
                    <ClockIcon />
                    <span>{service.duration} min</span>
                  </div>
                  <div className="flex items-center">
                    <DollarIcon />
                    <span>${service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Bottom Summary Bar */}
      {selectedServices.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-40">
          <div className="bg-white rounded-xl shadow-xl shadow-black/5 border border-gray-100 p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-col mb-4 sm:mb-0">
              <span className="text-sm text-gray-500 font-medium font-lato mb-2">
                {selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'} selected
              </span>
              <div className="flex space-x-2">
                <div className="flex items-center px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-900 font-medium font-lato">
                  <ClockIcon />
                  <span>{totalDuration} min</span>
                </div>
                <div className="flex items-center px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-900 font-medium font-lato">
                  <DollarIcon />
                  <span>${totalPrice}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={onNext}
              className="w-full sm:w-auto px-8 py-3 bg-[#0F172A] hover:bg-black text-white rounded-lg font-medium transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
