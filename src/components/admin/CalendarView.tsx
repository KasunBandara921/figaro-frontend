import React from 'react';

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
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
              <ChevronLeftIcon />
            </button>
            <h4 className="font-semibold text-gray-900 font-lato">May 2026</h4>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
              <ChevronRightIcon />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-y-4 text-center">
            {/* Days of week */}
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-xs font-medium text-gray-400">{day}</div>
            ))}
            
            {/* Previous month days */}
            {[26, 27, 28, 29, 30].map(day => (
              <div key={`prev-${day}`} className="py-1 text-sm text-gray-300 flex items-center justify-center">{day}</div>
            ))}
            
            {/* Current month days */}
            <div className="py-1 flex items-center justify-center">
              <button className="w-8 h-8 rounded-full bg-black text-white text-sm flex items-center justify-center font-medium shadow-sm hover:bg-gray-800 transition-colors">1</button>
            </div>
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(day => (
              <div key={`current-${day}`} className="py-1 flex items-center justify-center">
                <button className="w-8 h-8 rounded-full text-gray-700 hover:bg-gray-100 text-sm flex items-center justify-center font-medium transition-colors">
                  {day}
                </button>
              </div>
            ))}
            
            {/* Next month days */}
            {[1, 2, 3, 4, 5, 6].map(day => (
              <div key={`next-${day}`} className="py-1 text-sm text-gray-300 flex items-center justify-center">{day}</div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Appointments List */}
        <div className="p-6 lg:w-1/2 bg-gray-50/50">
          <h4 className="font-semibold text-gray-900 mb-4 font-lato">Appointments on May 1, 2026</h4>
          <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm">
            <p className="text-gray-500 text-sm font-lato">No appointments on this date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
