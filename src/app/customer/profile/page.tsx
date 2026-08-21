'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { apiRequest } from '@/lib/api';

// Icons
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

export default function ProfilePage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' }); // type: 'success' | 'error'

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (!token || userRole !== 'CUSTOMER') {
      router.push('/login?redirect=/customer/profile');
      return;
    }

    try {
      setLoading(true);
      const data = await apiRequest('/users/profile');
      if (data) {
        setFullName(data.fullName || '');
        setEmail(data.email || '');
        setRole(data.role || '');
      }
    } catch (err: any) {
      setMessage({ text: err.message || 'Failed to load profile details.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    if (!fullName.trim()) {
      setMessage({ text: 'Full name is required.', type: 'error' });
      return;
    }

    if (password && password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }

    setSaving(true);
    try {
      const payload: any = { fullName: fullName.trim() };
      if (password) {
        payload.password = password;
      }

      const updatedData = await apiRequest('/users/profile', {
        method: 'PUT',
        body: JSON.stringify(payload)
      });

      if (updatedData) {
        setFullName(updatedData.fullName || '');
        localStorage.setItem('fullName', updatedData.fullName);
        // Refresh page header/nav if needed
      }

      setMessage({ text: 'Profile updated successfully!', type: 'success' });
      setPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setMessage({ text: err.message || 'Failed to update profile.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="bg-gray-50/50 min-h-screen pt-32 pb-12 text-center text-gray-600 font-lato">
        <div className="max-w-7xl mx-auto">
          Loading your profile...
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50/50 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-3xl mx-auto space-y-8">
        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
            My Profile
          </h1>
          <p className="text-gray-500 mt-2 font-lato">
            Manage your account details and security settings.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            
            {/* Alerts */}
            {message.text && (
              <div className={`p-4 rounded-lg text-sm font-lato font-medium ${
                message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-1.5 font-lato flex items-center">
                  <UserIcon />
                  Full Name
                </label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white focus:border-gray-200 font-lato transition-all"
                  required
                />
              </div>

              {/* Email Address - Readonly */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5 font-lato flex items-center">
                  <MailIcon />
                  Email Address
                </label>
                <input 
                  type="email" 
                  value={email}
                  readOnly
                  disabled
                  className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg text-sm text-gray-400 font-lato cursor-not-allowed"
                />
              </div>

              {/* Account Role - Readonly */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5 font-lato flex items-center">
                  <ShieldIcon />
                  Account Type
                </label>
                <div className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg text-sm text-gray-500 font-lato capitalize">
                  {role ? role.toLowerCase() : 'customer'}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-playfair font-bold text-gray-900 mb-4">Security</h3>
              <p className="text-xs text-gray-400 font-lato mb-4">Leave password fields blank if you do not wish to change your password.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* New Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5 font-lato flex items-center">
                    <LockIcon />
                    New Password
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white focus:border-gray-200 font-lato transition-all"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5 font-lato flex items-center">
                    <LockIcon />
                    Confirm New Password
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white focus:border-gray-200 font-lato transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 flex justify-end">
              <button 
                type="submit"
                disabled={saving}
                className="px-6 py-3 bg-[#0F172A] hover:bg-black text-white rounded-lg text-sm font-semibold transition-colors font-lato shadow-sm disabled:opacity-50 min-w-[150px]"
              >
                {saving ? 'Saving...' : 'Save Settings'}
              </button>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}
