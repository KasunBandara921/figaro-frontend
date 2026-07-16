'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CustomerNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/5bcdac3e39ce885ebea26893_figaro LOGO_white.svg"
              alt="Figaro Logo"
              width={115}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/#services" className="hover:text-yellow-400 transition-colors">Services</Link>
            <Link href="/customer/book" className="hover:text-yellow-400 transition-colors">Book</Link>
            <Link href="/customer/appointments" className="hover:text-yellow-400 transition-colors">My Appointments</Link>
            <Link href="/customer/profile" className="hover:text-yellow-400 transition-colors">Profile</Link>
            <Link href="/login" className="hover:text-yellow-400 transition-colors">Logout</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/#services" className="block py-2 hover:text-yellow-400 transition-colors">Services</Link>
            <Link href="/customer/book" className="block py-2 hover:text-yellow-400 transition-colors">Book</Link>
            <Link href="/customer/appointments" className="block py-2 hover:text-yellow-400 transition-colors">My Appointments</Link>
            <Link href="/customer/profile" className="block py-2 hover:text-yellow-400 transition-colors">Profile</Link>
            <Link href="/login" className="block py-2 hover:text-yellow-400 transition-colors">Logout</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
