'use client';

import React, { useState, useEffect } from 'react';
import CalendarView from '@/components/admin/CalendarView';
import StylistsView from '@/components/admin/StylistsView';
import { apiRequest } from '@/lib/api';

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
  const [activeTab, setActiveTab] = useState('bookings');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [stylistsCount, setStylistsCount] = useState(0);
  const [stylists, setStylists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);
  const [activeAssignId, setActiveAssignId] = useState<number | null>(null);

  const loadDashboardData = async () => {
    try {
      const appointmentData = await apiRequest('/appointments');
      const stylistData = await apiRequest('/stylists');
      setAppointments(appointmentData || []);
      setStylists(stylistData || []);
      setStylistsCount(stylistData ? stylistData.length : 0);
    } catch (err: any) {
      setError(err.message || 'Failed to load dashboard metrics. Access denied.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleStatusUpdate = async (id: number, status: string) => {
    try {
      await apiRequest(`/appointments/${id}/status?status=${status}`, {
        method: 'PUT'
      });
      await loadDashboardData();
    } catch (err: any) {
      alert(err.message || 'Failed to update status.');
    } finally {
      setActiveDropdownId(null);
    }
  };

  const handleAssignStylist = async (appointmentId: number, stylistId: number) => {
    try {
      await apiRequest(`/appointments/${appointmentId}/assign?stylistId=${stylistId}`, {
        method: 'PUT'
      });
      await loadDashboardData();
    } catch (err: any) {
      alert(err.message || 'Failed to assign stylist.');
    } finally {
      setActiveAssignId(null);
    }
  };

  const totalBookings = appointments.length;
  const activeBookings = appointments.filter(a => a.status === 'CONFIRMED' || a.status === 'PENDING').length;
  
  const completedRevenue = appointments
    .filter(a => a.status === 'COMPLETED')
    .reduce((sum, a) => sum + (a.service ? a.service.price : 0), 0);

  const pendingRevenue = appointments
    .filter(a => a.status === 'CONFIRMED' || a.status === 'PENDING')
    .reduce((sum, a) => sum + (a.service ? a.service.price : 0), 0);

  const getDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      const year = parts[0];
      const monthIndex = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[monthIndex]} ${day}, ${year}`;
    } catch {
      return dateStr;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50/50 pt-32 pb-12 text-center text-gray-600 font-lato">
        Loading admin dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50/50 pt-32 pb-12 text-center text-red-500 font-lato px-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Unauthorized Access</h2>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <a href="/login" className="px-6 py-2 bg-black text-white rounded-lg text-sm transition-colors hover:bg-neutral-800">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

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
              <h2 className="text-3xl font-lato font-medium text-gray-900">{totalBookings}</h2>
              <p className="text-sm text-gray-500 mt-1">{activeBookings} active</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800">Revenue (Completed)</span>
              <DollarSignIcon />
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-lato font-medium text-gray-900">${completedRevenue.toFixed(2)}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {appointments.filter(a => a.status === 'COMPLETED').length} appointments
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800">Pending Revenue</span>
              <ClockIcon />
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-lato font-medium text-gray-900">${pendingRevenue.toFixed(2)}</h2>
              <p className="text-sm text-gray-500 mt-1">{activeBookings} upcoming</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold text-gray-800">Active Stylists</span>
              <UsersIcon />
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-lato font-medium text-gray-900">{stylistsCount}</h2>
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
              <button className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium transition-colors">
                All ({appointments.length})
              </button>
              <button className="px-4 py-1.5 bg-transparent text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Confirmed ({appointments.filter(a => a.status === 'CONFIRMED' || a.status === 'PENDING').length})
              </button>
              <button className="px-4 py-1.5 bg-transparent text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Completed ({appointments.filter(a => a.status === 'COMPLETED').length})
              </button>
              <button className="px-4 py-1.5 bg-transparent text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Cancelled ({appointments.filter(a => a.status === 'CANCELLED').length})
              </button>
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
                  {appointments.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-8 text-center text-gray-500 font-lato">
                        No appointments found.
                      </td>
                    </tr>
                  ) : (
                    appointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs text-gray-500">
                          REF-BK{String(appointment.id).padStart(3, '0')}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{appointment.customerName}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{appointment.customerEmail}</div>
                        </td>
                        <td className="px-6 py-4">
                          {appointment.stylist ? appointment.stylist.name : 'Any Stylist'}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900">{getDisplayDate(appointment.appointmentDate)}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{appointment.appointmentTime}</div>
                        </td>
                        <td className="px-6 py-4">
                          {appointment.service ? appointment.service.name : 'N/A'}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {appointment.service ? `$${appointment.service.price.toFixed(2)}` : '$0.00'}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase ${
                            appointment.status === 'COMPLETED' ? 'bg-green-500 text-white' :
                            appointment.status === 'CANCELLED' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                          }`}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right relative">
                          <button
                            onClick={() => setActiveDropdownId(activeDropdownId === appointment.id ? null : appointment.id)}
                            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                          >
                            <MoreVerticalIcon />
                          </button>
                          
                          {activeDropdownId === appointment.id && (
                            <div className="absolute right-6 mt-1 w-44 bg-white rounded-lg border border-gray-100 shadow-lg py-1 z-50 text-left">
                              {appointment.status === 'PENDING' && (
                                <button
                                  onClick={() => handleStatusUpdate(appointment.id, 'CONFIRMED')}
                                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center font-medium font-lato"
                                >
                                  Confirm Booking
                                </button>
                              )}
                              {appointment.status !== 'COMPLETED' && appointment.status !== 'CANCELLED' && (
                                <>
                                  <button
                                    onClick={() => {
                                      setActiveAssignId(appointment.id);
                                      setActiveDropdownId(null);
                                    }}
                                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center font-medium font-lato border-b border-gray-50"
                                  >
                                    Assign Stylist
                                  </button>
                                  <button
                                    onClick={() => handleStatusUpdate(appointment.id, 'COMPLETED')}
                                    className="w-full px-4 py-2 text-sm text-green-600 hover:bg-gray-50 flex items-center font-medium font-lato"
                                  >
                                    Mark Completed
                                  </button>
                                  <button
                                    onClick={() => handleStatusUpdate(appointment.id, 'CANCELLED')}
                                    className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center font-medium font-lato"
                                  >
                                    Cancel Appointment
                                  </button>
                                </>
                              )}
                              {appointment.status === 'CANCELLED' && (
                                <p className="px-4 py-2 text-xs text-gray-400 font-lato">No actions available</p>
                              )}
                              {appointment.status === 'COMPLETED' && (
                                <p className="px-4 py-2 text-xs text-gray-400 font-lato">No actions available</p>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
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

      {/* Assign Stylist Modal */}
      {activeAssignId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-4 overflow-hidden border border-gray-100">
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <h3 className="font-bold text-gray-950 font-lato text-base">Assign Stylist</h3>
              <button 
                onClick={() => setActiveAssignId(null)} 
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="p-5 max-h-64 overflow-y-auto space-y-2">
              {stylists.length === 0 ? (
                <p className="text-gray-400 text-sm font-lato text-center py-4">No stylists found</p>
              ) : (
                stylists.map((st: any) => (
                  <button
                    key={st.id}
                    onClick={() => handleAssignStylist(activeAssignId, st.id)}
                    className="w-full text-left px-4 py-3 border border-gray-100 rounded-lg hover:bg-gray-50 hover:border-gray-300 font-lato font-medium text-sm flex items-center justify-between transition-colors shadow-sm bg-white"
                  >
                    <span className="text-gray-900 font-lato">{st.name}</span>
                    <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 font-semibold font-lato">
                      {st.specialties?.slice(0,1).join('') || 'Stylist'}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
