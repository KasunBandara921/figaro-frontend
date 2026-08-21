'use client';

import React, { useState, useEffect } from 'react';
import EditProfileButton from './EditProfileButton';
import EditProfileModal, { Stylist } from './EditProfileModal';
import AddStylistModal from './AddStylistModal';
import { apiRequest } from '@/lib/api';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ViewAppointmentsButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all font-lato text-center"
  >
    View Appointments
  </button>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const DeleteStylistButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-3 py-2 border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
    title="Delete Stylist"
  >
    <TrashIcon />
  </button>
);

const StylistCard = ({ 
  stylist, 
  onEditClick,
  onAppointmentsClick,
  onDeleteClick
}: { 
  stylist: Stylist, 
  onEditClick: () => void,
  onAppointmentsClick: () => void,
  onDeleteClick: () => void
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
    
    <div className="flex gap-3 pt-4 border-t border-gray-50">
      <EditProfileButton onClick={onEditClick} />
      <ViewAppointmentsButton onClick={onAppointmentsClick} />
      <DeleteStylistButton onClick={onDeleteClick} />
    </div>
  </div>
);

const StylistAppointmentsModal = ({ 
  stylist, 
  onClose 
}: { 
  stylist: Stylist, 
  onClose: () => void 
}) => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await apiRequest(`/appointments/stylist/${encodeURIComponent(stylist.name)}`);
        setAppointments(data || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch appointments.');
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [stylist]);

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 overflow-hidden border border-gray-100 flex flex-col max-h-[80vh] text-left">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <div>
            <h3 className="font-bold text-gray-900 font-playfair text-lg">Appointments: {stylist.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">Assigned schedules from database</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3 min-h-[200px]">
          {loading ? (
            <p className="text-gray-500 text-sm font-lato text-center py-8">Loading schedule details...</p>
          ) : error ? (
            <p className="text-red-500 text-sm font-lato text-center py-8">{error}</p>
          ) : appointments.length === 0 ? (
            <p className="text-gray-400 text-sm font-lato text-center py-8">No appointments scheduled for this stylist.</p>
          ) : (
            appointments.map((app) => (
              <div key={app.id} className="p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors bg-gray-50/30">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm font-playfair">{app.customerName}</h4>
                    <p className="text-xs text-gray-500 font-lato mt-0.5">{app.customerPhone}</p>
                  </div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase ${
                    app.status === 'COMPLETED' ? 'bg-green-500 text-white' :
                    app.status === 'CANCELLED' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {app.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-100 text-xs font-lato text-gray-600">
                  <div>
                    <span className="font-semibold text-gray-900">Service:</span> {app.service ? app.service.name : 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Price:</span> {app.service ? `$${app.service.price.toFixed(2)}` : '$0.00'}
                  </div>
                  <div className="col-span-2">
                    <span className="font-semibold text-gray-900">Schedule:</span> {getDisplayDate(app.appointmentDate)} at {app.appointmentTime}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default function StylistsView() {
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedStylistForAppointments, setSelectedStylistForAppointments] = useState<Stylist | null>(null);
  const [isAddingStylist, setIsAddingStylist] = useState(false);
  const [stylists, setStylists] = useState<Stylist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getInitials = (name: string) => {
    if (!name) return 'S';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getColorClass = (id: number) => {
    const classes = ['bg-red-800', 'bg-blue-600', 'bg-orange-400', 'bg-indigo-600', 'bg-purple-600', 'bg-emerald-600'];
    return classes[id % classes.length];
  };

  const loadStylists = async () => {
    try {
      const data = await apiRequest('/stylists');
      const formatted = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        rating: String(item.rating),
        specialties: item.specialties || [],
        initials: getInitials(item.name),
        colorClass: getColorClass(item.id)
      }));
      setStylists(formatted);
    } catch (err: any) {
      setError(err.message || 'Failed to load stylists.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteStylist = async (id: number, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}? This will also remove them from all assigned appointments.`)) {
      try {
        await apiRequest(`/admin/stylists/${id}`, {
          method: 'DELETE'
        });
        await loadStylists();
      } catch (err: any) {
        alert(err.message || 'Failed to delete stylist.');
      }
    }
  };

  useEffect(() => {
    loadStylists();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center text-gray-600 font-lato">
        Loading stylists...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center text-red-500 font-lato">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6 relative">
        <div className="p-6 pb-6 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-playfair font-bold text-gray-900">Stylist Management</h3>
            <p className="text-sm text-gray-500 mt-1">Manage stylist profiles and availability</p>
          </div>
          <button 
            onClick={() => setIsAddingStylist(true)}
            className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-all font-lato flex items-center shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Stylist
          </button>
        </div>
        
        <div className="p-6 bg-gray-50/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {stylists.map((stylist) => (
              <StylistCard 
                key={stylist.name} 
                stylist={stylist} 
                onEditClick={() => setSelectedStylist(stylist)} 
                onAppointmentsClick={() => setSelectedStylistForAppointments(stylist)}
                onDeleteClick={() => handleDeleteStylist(stylist.id, stylist.name)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Render the Modals */}
      {isAddingStylist && (
        <AddStylistModal 
          onClose={() => setIsAddingStylist(false)} 
          onSaveSuccess={loadStylists}
        />
      )}

      {selectedStylist && (
        <EditProfileModal 
          stylist={selectedStylist} 
          onClose={() => setSelectedStylist(null)} 
          onSaveSuccess={loadStylists}
        />
      )}

      {selectedStylistForAppointments && (
        <StylistAppointmentsModal 
          stylist={selectedStylistForAppointments} 
          onClose={() => setSelectedStylistForAppointments(null)} 
        />
      )}
    </>
  );
}
