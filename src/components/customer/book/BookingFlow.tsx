'use client';

import React, { useState, useEffect } from 'react';
import SelectServices from './services/SelectServices';
import SelectStylist from './SelectStylist';
import SelectDateTime from './SelectDateTime';
import CustomerDetails from './CustomerDetails';
import ReviewBooking from './ReviewBooking';
import BookingConfirmation from './BookingConfirmation';
import { useRouter } from 'next/navigation';

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (!token || role !== 'CUSTOMER') {
      router.push('/login?redirect=/customer/book');
    }
  }, [router]);

  // Shared booking state
  const [selectedServices, setSelectedServices] = useState<any[]>([]);
  const [selectedStylist, setSelectedStylist] = useState<any | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [customerDetails, setCustomerDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [bookingReference, setBookingReference] = useState<string>('');

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="w-full">
      {step === 1 && (
        <SelectServices 
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          onNext={handleNext} 
        />
      )}
      {step === 2 && (
        <SelectStylist 
          selectedStylist={selectedStylist}
          setSelectedStylist={setSelectedStylist}
          onBack={handleBack} 
          onNext={handleNext} 
        />
      )}
      {step === 3 && (
        <SelectDateTime 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          selectedStylist={selectedStylist}
          selectedServices={selectedServices}
          onBack={handleBack} 
          onNext={handleNext} 
        />
      )}
      {step === 4 && (
        <CustomerDetails 
          formData={customerDetails}
          setFormData={setCustomerDetails}
          onBack={handleBack} 
          onNext={handleNext} 
        />
      )}
      {step === 5 && (
        <ReviewBooking 
          selectedServices={selectedServices}
          selectedStylist={selectedStylist}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          customerDetails={customerDetails}
          setBookingReference={setBookingReference}
          onBack={handleBack} 
          onNext={handleNext} 
        />
      )}
      {step === 6 && (
        <BookingConfirmation 
          selectedServices={selectedServices}
          selectedStylist={selectedStylist}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          customerDetails={customerDetails}
          bookingReference={bookingReference}
          onHome={() => router.push('/')} 
          onBookAnother={() => {
            setSelectedServices([]);
            setSelectedStylist(null);
            setSelectedDate('');
            setSelectedTime('');
            setCustomerDetails({ fullName: '', email: '', phone: '', specialRequests: '' });
            setBookingReference('');
            setStep(1);
          }} 
        />
      )}
    </div>
  );
}
