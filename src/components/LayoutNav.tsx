'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import CustomerNavbar from './CustomerNavbar';
import AdminNavbar from './AdminNavbar';
import StylistNavbar from './StylistNavbar';

export default function LayoutNav() {
  const pathname = usePathname();

  // Use the customer navbar for all routes under /customer
  if (pathname?.startsWith('/customer')) {
    return <CustomerNavbar />;
  }

  // Use the admin navbar for admin dashboard routes
  if (pathname?.startsWith('/admin')) {
    return <AdminNavbar />;
  }

  // Use the stylist navbar for stylist dashboard routes
  if (pathname?.startsWith('/stylist')) {
    return <StylistNavbar />;
  }

  // Use the default homepage navbar for everything else
  return <Navbar />;
}
