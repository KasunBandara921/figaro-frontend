'use client';

import React, { useState } from 'react';
import EditProfileButton from './EditProfileButton';
import ManageScheduleButton from './ManageScheduleButton';
import EditProfileModal, { Stylist } from './EditProfileModal';
import ManageScheduleModal from './ManageScheduleModal';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const StylistCard = ({ 
  stylist, 
  onEditClick,
  onScheduleClick
}: { 
  stylist: Stylist, 
  onEditClick: () => void,
  onScheduleClick: () => void
}) => (
  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center space-x-4 mb-6">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold text-white ${stylist.colorClass}`}>
        {stylist.initials}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 font-lato text-lg">{stylist.name}</h4>
        <div className="flex items-center text-sm text-gray-600 mt-0.5">
          <StarIcon />
          <span>{stylist.rating} rating</span>
        </div>
      </div>
    </div>
    
    <div className="mb-6">
      <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">Specialties</p>
      <div className="flex flex-wrap gap-2">
        {stylist.specialties.map(spec => (
          <span key={spec} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-100">
            {spec}
          </span>
        ))}
      </div>
    </div>
    
    <div className="flex grid-cols-2 gap-3 pt-4 border-t border-gray-50">
      <EditProfileButton onClick={onEditClick} />
      <ManageScheduleButton onClick={onScheduleClick} />
    </div>
  </div>
);

export default function StylistsView() {
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedStylistForSchedule, setSelectedStylistForSchedule] = useState<Stylist | null>(null);

  const stylists: Stylist[] = [
    { name: "Sarah Johnson", rating: "4.9", specialties: ["Coloring", "Balayage"], initials: "SJ", colorClass: "bg-red-800" },
    { name: "Mike Chen", rating: "4.8", specialties: ["Men's Cuts", "Fades"], initials: "MC", colorClass: "bg-blue-600" },
    { name: "Emma Davis", rating: "5.0", specialties: ["Updos", "Bridal"], initials: "ED", colorClass: "bg-orange-400" },
    { name: "Alex Rodriguez", rating: "4.7", specialties: ["Curly Hair", "Treatments"], initials: "AR", colorClass: "bg-indigo-600" }
  ];

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6 relative">
        <div className="p-6 pb-6 border-b border-gray-100">
          <h3 className="text-xl font-playfair font-bold text-gray-900">Stylist Management</h3>
          <p className="text-sm text-gray-500 mt-1">Manage stylist profiles and availability</p>
        </div>
        
        <div className="p-6 bg-gray-50/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {stylists.map((stylist) => (
              <StylistCard 
                key={stylist.name} 
                stylist={stylist} 
                onEditClick={() => setSelectedStylist(stylist)} 
                onScheduleClick={() => setSelectedStylistForSchedule(stylist)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Render the Modals */}
      {selectedStylist && (
        <EditProfileModal 
          stylist={selectedStylist} 
          onClose={() => setSelectedStylist(null)} 
        />
      )}

      {selectedStylistForSchedule && (
        <ManageScheduleModal 
          stylist={selectedStylistForSchedule} 
          onClose={() => setSelectedStylistForSchedule(null)} 
        />
      )}
    </>
  );
}
