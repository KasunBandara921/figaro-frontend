'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="#top-website" className="mb-4 block">
              <Image 
                src="/images/5bcdac3e39ce885ebea26893_figaro LOGO_white.svg"
                alt="Figaro Logo"
                width={115}
                height={40}
              />
            </Link>
            <p className="text-gray-400">Premium hair salon with locations worldwide.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#services" className="hover:text-white transition-colors">Hair Styling</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Hair Coloring</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Beard Styling</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Massages</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#locations" className="hover:text-white transition-colors">New York</Link></li>
              <li><Link href="#locations" className="hover:text-white transition-colors">Los Angeles</Link></li>
              <li><Link href="#locations" className="hover:text-white transition-colors">Milan</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/udesly/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/udesly_official/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.558-2.353 1.294-.735.735-1.03 1.574-1.297 2.353-.266.788-.467 1.658-.527 2.936C.04 8.333.024 8.74 0 12c0 3.26.015 3.667.072 4.947.06 1.277.261 2.148.527 2.936.264.779.559 1.618 1.297 2.353.735.735 1.574 1.03 2.353 1.297.788.266 1.658.467 2.936.527C8.333 23.96 8.74 23.976 12 23.976c3.26 0 3.667-.015 4.947-.072 1.277-.06 2.148-.261 2.936-.527.79-.264 1.618-.559 2.353-1.297.735-.735 1.03-1.574 1.298-2.353.266-.788.467-1.658.527-2.936.048-1.28.061-1.687.061-4.947 0-3.26-.015-3.667-.072-4.947-.06-1.277-.261-2.148-.527-2.936-.264-.779-.559-1.618-1.297-2.353-.735-.735-1.574-1.03-2.353-1.297-.788-.266-1.658-.467-2.936-.527C15.667.048 15.26.035 12 .035z"/></svg>
              </a>
              <a href="https://twitter.com/udesly_com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">
            Created by <a href="https://eclipse.srl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">Eclipse.srl</a> | © 2024 Figaro Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
