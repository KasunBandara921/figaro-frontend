'use client';

import React, { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';

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

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function StylistDashboard() {
  const [activeTab, setActiveTab] = useState('today');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const stylistName = typeof window !== 'undefined' ? localStorage.getItem("fullName") || 'Sarah Connor' : 'Sarah Connor';

  const loadAppointments = async () => {
    try {
      const data = await apiRequest(`/appointments/stylist/${encodeURIComponent(stylistName)}`);
      setAppointments(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load appointments.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, [stylistName]);

  const todayStr = new Date().toISOString().split('T')[0];

  const todayAppointments = appointments.filter(a => a.appointmentDate === todayStr);
  
  const upcomingAppointments = appointments.filter(a => {
    return a.appointmentDate > todayStr || (a.appointmentDate === todayStr && (a.status === 'CONFIRMED' || a.status === 'PENDING'));
  });

  const completedAppointments = appointments.filter(a => a.status === 'COMPLETED');

  const totalRevenue = completedAppointments.reduce((sum, a) => sum + (a.service ? a.service.price : 0), 0);

  const getDisplayList = () => {
    if (activeTab === 'today') return todayAppointments;
    if (activeTab === 'upcoming') return upcomingAppointments;
    return completedAppointments;
  };

  const getDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[monthIdx]} ${day}, ${year}`;
    } catch {
      return dateStr;
    }
  };

  const activeList = getDisplayList();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-12 text-center text-gray-600 font-lato">
        Loading stylist schedule...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-12 text-center text-red-500 font-lato px-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Access Denied</h2>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <a href="/login" className="px-6 py-2 bg-black text-white rounded-lg text-sm transition-colors hover:bg-neutral-800">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 mt-4">
        
        {/* Dashboard Header */}
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-[#0F172A] flex items-center justify-center text-xl font-bold text-white shadow-sm font-playfair">
            {stylistName.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-playfair font-bold text-gray-900">{stylistName}</h1>
            <p className="text-sm text-gray-500 font-lato">Stylist Dashboard</p>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800 font-lato">Today's Appointments</span>
              <CalendarIcon />
            </div>
            <div className="mt-6">
              <h2 className="text-4xl font-lato font-medium text-gray-900">{todayAppointments.length}</h2>
              <p className="text-xs text-gray-400 mt-2 font-lato">{getDisplayDate(todayStr)}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800 font-lato">Upcoming</span>
              <ClockIcon />
            </div>
            <div className="mt-6">
              <h2 className="text-4xl font-lato font-medium text-gray-900">{upcomingAppointments.length}</h2>
              <p className="text-xs text-gray-400 mt-2 font-lato">Assigned schedules</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800 font-lato">Total Revenue</span>
              <DollarSignIcon />
            </div>
            <div className="mt-6">
              <h2 className="text-4xl font-lato font-medium text-gray-900">${totalRevenue.toFixed(2)}</h2>
              <p className="text-xs text-gray-400 mt-2 font-lato">{completedAppointments.length} completed appointments</p>
            </div>
          </div>

        </div>

        {/* Tabs */}
        <div className="flex space-x-2 pt-2">
          <button 
            onClick={() => setActiveTab('today')}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeTab === 'today' ? 'bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Today ({todayAppointments.length})
          </button>
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeTab === 'upcoming' ? 'bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Upcoming ({upcomingAppointments.length})
          </button>
          <button 
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeTab === 'completed' ? 'bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm' : 'bg-transparent text-gray-600 font-medium hover:bg-gray-100'}`}
          >
            Completed ({completedAppointments.length})
          </button>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 gap-4">
          {activeList.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center shadow-sm">
              <p className="text-gray-400 font-lato">
                {activeTab === 'today' && "No appointments today"}
                {activeTab === 'upcoming' && "No upcoming appointments"}
                {activeTab === 'completed' && "No completed appointments"}
              </p>
            </div>
          ) : (
            activeList.map((app) => (
              <div key={app.id} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                      REF-BK{String(app.id).padStart(3, '0')}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                      app.status === 'COMPLETED' ? 'bg-green-500 text-white' :
                      app.status === 'CANCELLED' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-gray-900">{app.customerName}</h3>
                  <div className="flex items-center text-sm text-gray-600 font-lato">
                    <PhoneIcon />
                    <span>{app.customerPhone}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:items-center gap-4 text-sm font-lato">
                  <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg">
                    <p className="text-xs text-gray-400 uppercase font-semibold">Service</p>
                    <p className="font-semibold text-gray-900 mt-0.5">{app.service ? app.service.name : 'N/A'}</p>
                  </div>
                  <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg">
                    <p className="text-xs text-gray-400 uppercase font-semibold">Schedule</p>
                    <p className="font-semibold text-gray-900 mt-0.5">{getDisplayDate(app.appointmentDate)} at {app.appointmentTime}</p>
                  </div>
                  <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-right">
                    <p className="text-xs text-gray-400 uppercase font-semibold">Price</p>
                    <p className="font-bold text-gray-950 mt-0.5">{app.service ? `$${app.service.price.toFixed(2)}` : '$0.00'}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
