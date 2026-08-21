'use client';

import React, { useState } from 'react';

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

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

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default function SelectDateTime({ 
  selectedDate, 
  setSelectedDate, 
  selectedTime, 
  setSelectedTime,
  selectedStylist,
  selectedServices,
  onBack, 
  onNext 
}: { 
  selectedDate: string,
  setSelectedDate: (date: string) => void,
  selectedTime: string,
  setSelectedTime: (time: string) => void,
  selectedStylist: any | null,
  selectedServices: any[],
  onBack: () => void, 
  onNext: () => void 
}) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const availableTimes = [
    "09:00", "10:00", "11:00",
    "12:00", "14:00", "15:00",
    "16:00", "17:00"
  ];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const prevPadding: number[] = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    prevPadding.push(daysInPrevMonth - i);
  }

  const currentDays: number[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    currentDays.push(i);
  }

  const totalCells = prevPadding.length + currentDays.length;
  const nextPadding: number[] = [];
  const remaining = 42 - totalCells;
  for (let i = 1; i <= remaining; i++) {
    nextPadding.push(i);
  }

  const totalDuration = selectedServices.reduce((acc, curr) => acc + curr.duration, 0);

  const getFullDateString = (day: number) => {
    const formattedMonth = String(currentMonth + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    return `${currentYear}-${formattedMonth}-${formattedDay}`;
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(getFullDateString(day));
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

  const getDisplayDate = () => {
    if (!selectedDate) return '';
    try {
      const parts = selectedDate.split('-');
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      return `${monthNames[monthIdx]} ${day}, ${year}`;
    } catch {
      return selectedDate;
    }
  };

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
        <h2 className="text-3xl font-playfair font-bold text-gray-900">Select Date & Time</h2>
        <p className="text-gray-500 mt-2 font-lato">
          Appointment with {selectedStylist ? selectedStylist.name : 'Any Stylist'} ({totalDuration} minutes)
        </p>
      </div>

      {/* Layout Grid */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Left: Choose Date Calendar */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-6 font-lato">Choose Date</h3>
          
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <button onClick={handlePrevMonth} className="p-1.5 hover:bg-gray-50 rounded-md text-gray-400 transition-colors">
                <ChevronLeftIcon />
              </button>
              <h5 className="font-semibold text-gray-900 font-lato text-sm">{monthNames[currentMonth]} {currentYear}</h5>
              <button onClick={handleNextMonth} className="p-1.5 hover:bg-gray-50 rounded-md text-gray-400 transition-colors">
                <ChevronRightIcon />
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-y-3 text-center">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-xs font-medium text-gray-400 mb-2">{day}</div>
              ))}
              
              {prevPadding.map((day, idx) => (
                <div key={`p${idx}`} className="py-1 text-sm text-gray-300 font-lato">{day}</div>
              ))}
              
              {currentDays.map(day => (
                <div key={day} className="py-1 flex items-center justify-center">
                  <button 
                    onClick={() => handleDateClick(day)}
                    className={`w-8 h-8 rounded-full text-sm flex items-center justify-center font-medium transition-colors ${selectedDate === getFullDateString(day) ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {day}
                  </button>
                </div>
              ))}
              
              {nextPadding.map((day, idx) => (
                <div key={`n${idx}`} className="py-1 text-sm text-gray-300 font-lato">{day}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Available Times */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <h3 className="font-semibold text-gray-900 mb-6 font-lato">Available Times</h3>
          
          {!selectedDate ? (
            <div className="flex-1 flex items-center justify-center min-h-[200px]">
              <p className="text-gray-400 text-sm font-lato text-center">Select a date to view available times</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableTimes.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`flex items-center justify-center py-2.5 px-3 border rounded-lg text-sm font-medium transition-colors font-lato ${
                    selectedTime === time 
                      ? 'border-black bg-black text-white shadow-sm' 
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {/* We only want to show the clock icon if it's not selected, or we can keep it but make it white. Let's make it white if selected. */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mr-2 ${selectedTime === time ? 'text-white' : 'text-gray-500'}`}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Bottom Summary Card */}
      {selectedTime && selectedDate && (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between transition-all">
          <div className="flex flex-col mb-4 sm:mb-0">
            <span className="text-sm text-gray-500 font-medium font-lato mb-2">
              Selected appointment
            </span>
            <div className="flex space-x-2">
              <div className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-900 font-medium font-lato">
                {getDisplayDate()}
              </div>
              <div className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-900 font-medium font-lato">
                {selectedTime}
              </div>
            </div>
          </div>
          
          <button 
            onClick={onNext}
            className="w-full sm:w-auto px-8 py-3 bg-[#0F172A] hover:bg-black text-white rounded-lg font-medium transition-colors font-lato"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
