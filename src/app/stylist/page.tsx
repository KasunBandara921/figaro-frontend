'use client';

import React, { useState } from 'react';

// Reusable SVG Icons
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const DollarSignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default function StylistDashboard() {
  const [activeTab, setActiveTab] = useState('today');

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 mt-4">
        
        {/* Dashboard Header */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
          <h1 className="text-2xl font-lato font-semibold text-gray-600">Stylist Dashboard</h1>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800 font-lato">Today's Appointments</span>
              <CalendarIcon />
            </div>
            <div className="mt-6">
              <h2 className="text-4xl font-lato font-medium text-gray-900">0</h2>
              <p className="text-xs text-gray-400 mt-2 font-lato">May 1, 2026</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800 font-lato">Upcoming</span>
              <ClockIcon />
            </div>
            <div className="mt-6">
              <h2 className="text-4xl font-lato font-medium text-gray-900">0</h2>
              <p className="text-xs text-gray-400 mt-2 font-lato">Future appointments</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800 font-lato">Total Revenue</span>
              <DollarSignIcon />
            </div>
            <div className="mt-6">
              <h2 className="text-4xl font-lato font-medium text-gray-900">$0.00</h2>
              <p className="text-xs text-gray-400 mt-2 font-lato">0 completed</p>
            </div>
          </div>

        </div>

        {/* Tabs */}
        <div className="flex space-x-2 pt-2">
          <button 
            onClick={() => setActiveTab('today')}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeTab === 'today' ? 'bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Today
          </button>
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeTab === 'upcoming' ? 'bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeTab === 'completed' ? 'bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Completed
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center shadow-sm">
          <p className="text-gray-400 font-lato">
            {activeTab === 'today' && "No appointments today"}
            {activeTab === 'upcoming' && "No upcoming appointments"}
            {activeTab === 'completed' && "No completed appointments"}
          </p>
        </div>

      </div>
    </div>
  );
}
