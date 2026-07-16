'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import CustomerNavbar from './CustomerNavbar';

export default function LayoutNav() {
  const pathname = usePathname();

  // Use the customer navbar for all routes under /customer
  if (pathname?.startsWith('/customer')) {
    return <CustomerNavbar />;
  }

  // Use the default homepage navbar for everything else
  return <Navbar />;
}
