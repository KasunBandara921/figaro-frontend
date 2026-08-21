import React, { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default function CalendarView() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string>(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  );
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const loadAppointments = async () => {
    try {
      const data = await apiRequest('/appointments');
      setAppointments(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load calendar bookings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  // previous month padding days
  const prevMonthIdx = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYearIdx = currentMonth === 0 ? currentYear - 1 : currentYear;
  const daysInPrevMonth = getDaysInMonth(prevYearIdx, prevMonthIdx);

  const prevPadding = [];
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    prevPadding.push(daysInPrevMonth - i);
  }

  const currentDays = [];
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    currentDays.push(i);
  }

  // next month padding days (total cells: 42)
  const totalCells = 42;
  const nextPaddingCount = totalCells - (prevPadding.length + currentDays.length);
  const nextPadding = [];
  for (let i = 1; i <= nextPaddingCount; i++) {
    nextPadding.push(i);
  }

  const getFullDateString = (day: number) => {
    const y = currentYear;
    const m = String(currentMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const hasAppointments = (day: number) => {
    const targetDate = getFullDateString(day);
    return appointments.some(app => app.appointmentDate === targetDate);
  };

  const getDisplayDateHeader = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      const y = parts[0];
      const mIdx = parseInt(parts[1], 10) - 1;
      const d = parseInt(parts[2], 10);
      return `${monthNames[mIdx]} ${d}, ${y}`;
    } catch {
      return dateStr;
    }
  };

  const activeDayAppointments = appointments.filter(app => app.appointmentDate === selectedDate);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center text-gray-500 font-lato mt-6">
        Loading calendar bookings...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center text-red-500 font-lato mt-6">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-6 pb-4 border-b border-gray-100">
        <h3 className="text-xl font-playfair font-bold text-gray-900">Appointment Calendar</h3>
        <p className="text-sm text-gray-500 mt-1">View bookings in calendar format</p>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Calendar Grid */}
        <div className="p-6 lg:w-1/2 lg:border-r border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={handlePrevMonth} 
              className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
            >
              <ChevronLeftIcon />
            </button>
            <h4 className="font-semibold text-gray-900 font-lato">{monthNames[currentMonth]} {currentYear}</h4>
            <button 
              onClick={handleNextMonth} 
              className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
            >
              <ChevronRightIcon />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-y-4 text-center">
            {/* Days of week */}
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-xs font-semibold text-gray-400">{day}</div>
            ))}
            
            {/* Previous month days */}
            {prevPadding.map((day, idx) => (
              <div key={`prev-${idx}`} className="py-1 text-sm text-gray-300 flex items-center justify-center font-lato">{day}</div>
            ))}
            
            {/* Current month days */}
            {currentDays.map(day => {
              const fullDate = getFullDateString(day);
              const isSelected = selectedDate === fullDate;
              const hasApp = hasAppointments(day);

              return (
                <div key={`current-${day}`} className="py-1 flex flex-col items-center justify-center relative">
                  <button 
                    onClick={() => setSelectedDate(fullDate)}
                    className={`w-8 h-8 rounded-full text-sm flex items-center justify-center font-medium transition-colors ${
                      isSelected 
                        ? 'bg-black text-white shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {day}
                  </button>
                  {hasApp && (
                    <span className={`w-1 h-1 rounded-full absolute bottom-0.5 ${isSelected ? 'bg-white' : 'bg-black'}`} />
                  )}
                </div>
              );
            })}
            
            {/* Next month days */}
            {nextPadding.map((day, idx) => (
              <div key={`next-${idx}`} className="py-1 text-sm text-gray-300 flex items-center justify-center font-lato">{day}</div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Appointments List */}
        <div className="p-6 lg:w-1/2 bg-gray-50/30 overflow-y-auto max-h-[450px]">
          <h4 className="font-semibold text-gray-900 mb-6 font-lato">
            Appointments on {getDisplayDateHeader(selectedDate)}
          </h4>
          
          <div className="space-y-3">
            {activeDayAppointments.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm">
                <p className="text-gray-400 text-sm font-lato">No appointments on this date</p>
              </div>
            ) : (
              activeDayAppointments.map((app) => (
                <div key={app.id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-bold text-gray-900 font-playfair text-sm">{app.customerName}</h5>
                      <p className="text-xs text-gray-500 font-lato mt-0.5">{app.customerPhone}</p>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase ${
                      app.status === 'COMPLETED' ? 'bg-green-500 text-white' :
                      app.status === 'CANCELLED' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-50 text-xs font-lato text-gray-600">
                    <div>
                      <span className="font-semibold text-gray-900">Time:</span> {app.appointmentTime}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Stylist:</span> {app.stylist ? app.stylist.name : 'Any Stylist'}
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">Service:</span> {app.service ? app.service.name : 'N/A'} ({app.service ? `$${app.service.price.toFixed(2)}` : '$0.00'})
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
