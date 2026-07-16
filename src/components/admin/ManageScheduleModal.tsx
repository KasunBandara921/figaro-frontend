import React, { useState } from 'react';
import { Stylist } from './EditProfileModal';

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

export default function ManageScheduleModal({ 
  stylist, 
  onClose 
}: { 
  stylist: Stylist; 
  onClose: () => void;
}) {
  const allTimeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const [selectedSlots, setSelectedSlots] = useState<string[]>([
    "09:00", "10:00", "12:00", "13:00", "14:00", "16:00", "18:00"
  ]);

  const toggleSlot = (slot: string) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(s => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot].sort());
    }
  };

  const selectAll = () => setSelectedSlots([...allTimeSlots]);
  const clearAll = () => setSelectedSlots([]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold font-lato text-gray-900">Manage Schedule - {stylist.name}</h3>
            <p className="text-sm text-gray-500 mt-1 font-lato">Block or unblock time slots for specific dates</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Form Body */}
        <div className="flex flex-col md:flex-row p-6 gap-8">
          
          {/* Left: Calendar */}
          <div className="md:w-1/2">
            <h4 className="font-semibold text-gray-900 mb-4 font-lato">Select Date</h4>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500 transition-colors">
                  <ChevronLeftIcon />
                </button>
                <h5 className="font-semibold text-gray-900 font-lato text-sm">May 2026</h5>
                <button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500 transition-colors">
                  <ChevronRightIcon />
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-y-2 text-center">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-xs font-medium text-gray-400 mb-1">{day}</div>
                ))}
                
                {[26, 27, 28, 29, 30].map(day => (
                  <div key={`p${day}`} className="py-1 text-sm text-gray-300">{day}</div>
                ))}
                
                <div className="py-1 flex items-center justify-center">
                  <button className="w-7 h-7 rounded-md bg-black text-white text-sm flex items-center justify-center font-medium shadow-sm hover:bg-gray-800 transition-colors">1</button>
                </div>
                {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(day => (
                  <div key={day} className="py-1 flex items-center justify-center">
                    <button className="w-7 h-7 rounded-md text-gray-700 hover:bg-gray-100 text-sm flex items-center justify-center font-medium transition-colors">
                      {day}
                    </button>
                  </div>
                ))}
                
                {[1, 2, 3, 4, 5, 6].map(day => (
                  <div key={`n${day}`} className="py-1 text-sm text-gray-300">{day}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Time Slots */}
          <div className="md:w-1/2">
            <div className="flex justify-between items-end mb-4">
              <h4 className="font-semibold text-gray-900 font-lato leading-tight">Available<br/>Time<br/>Slots</h4>
              <div className="flex space-x-2">
                <button onClick={selectAll} className="px-3 py-1.5 border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">Select All</button>
                <button onClick={clearAll} className="px-3 py-1.5 border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">Clear All</button>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mb-4 font-lato">May 1, 2026</p>

            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
              {allTimeSlots.map(slot => (
                <label key={slot} className="flex items-center space-x-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedSlots.includes(slot) ? 'bg-black border-black' : 'border-gray-300 bg-white group-hover:border-gray-400'}`}>
                    {selectedSlots.includes(slot) && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{slot}</span>
                </label>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
              <span className="text-sm text-gray-600 font-lato">{selectedSlots.length} of {allTimeSlots.length} slots available</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 pt-2 pb-6 flex justify-end space-x-3 border-t border-transparent">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors font-lato"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors font-lato"
          >
            Save Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
