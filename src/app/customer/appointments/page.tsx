'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { apiRequest } from '@/lib/api';

// Simple Icons
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default function MyAppointmentsPage() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAppointments = async () => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || role !== 'CUSTOMER' || !email) {
      router.push('/login?redirect=/customer/appointments');
      return;
    }

    try {
      setLoading(true);
      const data = await apiRequest(`/appointments/customer/${encodeURIComponent(email)}`);
      setAppointments(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch appointments.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCancelAppointment = async (id: number) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      try {
        await apiRequest(`/appointments/${id}/status?status=CANCELLED`, {
          method: 'PUT'
        });
        await fetchAppointments();
      } catch (err: any) {
        alert(err.message || 'Failed to cancel appointment.');
      }
    }
  };

  const getDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return `${months[monthIdx]} ${day}, ${year}`;
    } catch {
      return dateStr;
    }
  };

  if (loading) {
    return (
      <main className="bg-gray-50/50 min-h-screen pt-32 pb-12 text-center text-gray-600 font-lato">
        <div className="max-w-7xl mx-auto">
          Loading your appointments...
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-gray-50/50 min-h-screen pt-32 pb-12 text-center text-red-500 font-lato px-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Error Loading Appointments</h2>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <button onClick={fetchAppointments} className="px-6 py-2 bg-black text-white rounded-lg text-sm transition-colors hover:bg-neutral-800">
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50/50 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
              My Appointments
            </h1>
            <p className="text-gray-500 mt-2 font-lato">
              Your past and upcoming salon visits.
            </p>
          </div>
          <Link 
            href="/customer/book" 
            className="inline-flex justify-center items-center px-5 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-lg text-sm font-semibold transition-all font-lato self-start sm:self-center shadow-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Appointments List */}
        {appointments.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm space-y-6">
            <div className="max-w-sm mx-auto">
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">No Appointments Yet</h3>
              <p className="text-gray-500 text-sm font-lato mb-6">
                You don't have any appointments scheduled. Book your first visit with us to get started!
              </p>
              <Link 
                href="/customer/book" 
                className="inline-flex px-6 py-3 bg-black hover:bg-neutral-800 text-white rounded-lg text-sm font-semibold transition-colors font-lato shadow-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id} 
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between gap-6"
              >
                <div className="space-y-4 flex-1">
                  {/* Reference & Status */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                      REF-BK{String(appointment.id).padStart(3, '0')}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase ${
                      appointment.status === 'COMPLETED' ? 'bg-green-50 text-green-700 border border-green-200' :
                      appointment.status === 'CANCELLED' ? 'bg-red-50 text-red-700 border border-red-200' :
                      appointment.status === 'CONFIRMED' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 
                      'bg-yellow-50 text-yellow-700 border border-yellow-200'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>

                  {/* Service Information */}
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-gray-900">
                      {appointment.service ? appointment.service.name : 'Salon Service'}
                    </h3>
                    <p className="text-xs text-gray-500 font-lato mt-0.5">
                      {appointment.service && appointment.service.description ? appointment.service.description : 'Standard custom hair treatment.'}
                    </p>
                  </div>

                  {/* Booking Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="flex items-center text-sm text-gray-600 font-lato">
                      <CalendarIcon />
                      <span>{getDisplayDate(appointment.appointmentDate)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-lato">
                      <ClockIcon />
                      <span>{appointment.appointmentTime}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-lato">
                      <UserIcon />
                      <span>{appointment.stylist ? appointment.stylist.name : 'Any Stylist'}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="flex md:flex-col justify-between md:justify-center items-end md:items-end gap-4 min-w-[120px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-6">
                  <div className="text-left md:text-right">
                    <p className="text-xs text-gray-400 font-lato">Price</p>
                    <p className="text-2xl font-semibold text-gray-900 font-lato mt-0.5">
                      ${appointment.service ? appointment.service.price.toFixed(2) : '0.00'}
                    </p>
                  </div>

                  {(appointment.status === 'PENDING' || appointment.status === 'CONFIRMED') && (
                    <button
                      onClick={() => handleCancelAppointment(appointment.id)}
                      className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 rounded-lg text-xs font-semibold font-lato transition-all"
                    >
                      Cancel Visit
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
