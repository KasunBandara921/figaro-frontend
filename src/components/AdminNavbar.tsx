'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('fullName');
    router.push('/login');
  };

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/admin" className="flex-shrink-0">
            <Image 
              src="/images/5bcdac3e39ce885ebea26893_figaro LOGO_white.svg"
              alt="Figaro Logo"
              width={115}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <span className="text-gray-400 text-xs uppercase tracking-widest border-r border-gray-700 pr-4">Admin Portal</span>
            <Link href="/admin" className="hover:text-yellow-400 transition-colors">Dashboard</Link>
            <a 
              href="#" 
              onClick={handleLogout} 
              className="hover:text-yellow-400 transition-colors font-semibold"
            >
              Logout
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="px-3 py-2 text-xs uppercase tracking-widest text-gray-500">Admin Portal</div>
            <Link href="/admin" className="block px-3 py-2 hover:text-yellow-400 transition-colors">Dashboard</Link>
            <a 
              href="#" 
              onClick={handleLogout} 
              className="block px-3 py-2 hover:text-yellow-400 transition-colors font-semibold"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
