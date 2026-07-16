import React, { useState } from 'react';

export interface Stylist {
  name: string;
  rating: string;
  specialties: string[];
  initials: string;
  colorClass: string;
}

export default function EditProfileModal({ 
  stylist, 
  onClose 
}: { 
  stylist: Stylist; 
  onClose: () => void;
}) {
  const [name, setName] = useState(stylist.name);
  const [rating] = useState(stylist.rating);
  const [specialties, setSpecialties] = useState<string[]>([...stylist.specialties]);
  const [newSpecialty, setNewSpecialty] = useState("");

  const handleAddSpecialty = () => {
    if (newSpecialty.trim()) {
      setSpecialties([...specialties, newSpecialty.trim()]);
      setNewSpecialty("");
    }
  };

  const handleRemoveSpecialty = (specToRemove: string) => {
    setSpecialties(specialties.filter(s => s !== specToRemove));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold font-lato text-gray-900">Edit Stylist Profile</h3>
            <p className="text-sm text-gray-500 mt-1 font-lato">Update stylist information and specialties</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1.5 font-lato">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-lato"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1.5 font-lato">Rating</label>
            <input 
              type="text" 
              value={rating} 
              readOnly
              className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600 focus:outline-none cursor-not-allowed font-lato"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1.5 font-lato">Specialties</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {specialties.map(spec => (
                <span key={spec} className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
                  {spec}
                  <button onClick={() => handleRemoveSpecialty(spec)} className="ml-1.5 text-gray-400 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </span>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Add specialty"
                value={newSpecialty}
                onChange={(e) => setNewSpecialty(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddSpecialty()}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 font-lato"
              />
              <button 
                onClick={handleAddSpecialty}
                className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors font-lato"
              >
                Add
              </button>
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
