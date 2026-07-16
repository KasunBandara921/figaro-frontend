'use client';

import React, { useState } from 'react';
import CalendarView from '@/src/components/admin/CalendarView';
import StylistsView from '@/src/components/admin/StylistsView';

// Simple SVG Icons
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const DollarSignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const MoreVerticalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-gray-700 cursor-pointer">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('calendar');

  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-500 font-lato">Manage bookings, stylists, and salon operations</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800">Total Bookings</span>
              <CalendarIcon />
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-lato font-medium text-gray-900">2</h2>
              <p className="text-sm text-gray-500 mt-1">2 confirmed</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800">Revenue (Completed)</span>
              <DollarSignIcon />
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-lato font-medium text-gray-900">$0.00</h2>
              <p className="text-sm text-gray-500 mt-1">0 appointments</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800">Pending Revenue</span>
              <ClockIcon />
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-lato font-medium text-gray-900">$165.00</h2>
              <p className="text-sm text-gray-500 mt-1">2 upcoming</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800">Active Stylists</span>
              <UsersIcon />
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-lato font-medium text-gray-900">4</h2>
              <p className="text-sm text-gray-500 mt-1">All available</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`px-5 py-2 rounded-full text-sm transition-colors border ${activeTab === 'bookings' ? 'bg-white border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent border-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Bookings
          </button>
          <button 
            onClick={() => setActiveTab('calendar')}
            className={`px-5 py-2 rounded-full text-sm transition-colors border ${activeTab === 'calendar' ? 'bg-white border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent border-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Calendar
          </button>
          <button 
            onClick={() => setActiveTab('stylists')}
            className={`px-5 py-2 rounded-full text-sm transition-colors border ${activeTab === 'stylists' ? 'bg-white border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent border-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Stylists
          </button>
        </div>

        {/* Bookings Content */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 pb-4">
              <h3 className="text-xl font-playfair font-bold text-gray-900">All Bookings</h3>
              <p className="text-sm text-gray-500 mt-1">Manage and view all salon appointments</p>
            </div>

            <div className="px-6 pb-4 flex flex-wrap gap-2">
              <button className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium transition-colors">All (2)</button>
              <button className="px-4 py-1.5 bg-transparent text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Confirmed (2)</button>
              <button className="px-4 py-1.5 bg-transparent text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Completed (0)</button>
              <button className="px-4 py-1.5 bg-transparent text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Cancelled (0)</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-gray-700 font-semibold border-y border-gray-100">
                  <tr>
                    <th className="px-6 py-4">Reference</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Stylist</th>
                    <th className="px-6 py-4">Date & Time</th>
                    <th className="px-6 py-4">Services</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-gray-500">REF-BK001</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">Jessica Smith</div>
                      <div className="text-xs text-gray-500 mt-0.5">jessica@email.com</div>
                    </td>
                    <td className="px-6 py-4">Sarah Johnson</td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">May 5, 2026</div>
                      <div className="text-xs text-gray-500 mt-0.5">10:00</div>
                    </td>
                    <td className="px-6 py-4">Haircut & Style, Deep Conditioning</td>
                    <td className="px-6 py-4 font-medium text-gray-900">$100.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
                        confirmed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <MoreVerticalIcon />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-gray-500">REF-BK002</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">David Lee</div>
                      <div className="text-xs text-gray-500 mt-0.5">david@email.com</div>
                    </td>
                    <td className="px-6 py-4">Mike Chen</td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">May 6, 2026</div>
                      <div className="text-xs text-gray-500 mt-0.5">14:00</div>
                    </td>
                    <td className="px-6 py-4">Haircut & Style</td>
                    <td className="px-6 py-4 font-medium text-gray-900">$65.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
                        confirmed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <MoreVerticalIcon />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Calendar Content */}
        {activeTab === 'calendar' && <CalendarView />}

        {/* Stylists Content */}
        {activeTab === 'stylists' && <StylistsView />}

      </div>
    </div>
  );
}
