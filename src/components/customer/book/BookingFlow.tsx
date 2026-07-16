'use client';

import React, { useState } from 'react';
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

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="w-full">
      {step === 1 && <SelectServices onNext={handleNext} />}
      {step === 2 && <SelectStylist onBack={handleBack} onNext={handleNext} />}
      {step === 3 && <SelectDateTime onBack={handleBack} onNext={handleNext} />}
      {step === 4 && <CustomerDetails onBack={handleBack} onNext={handleNext} />}
      {step === 5 && <ReviewBooking onBack={handleBack} onNext={handleNext} />}
      {step === 6 && (
        <BookingConfirmation 
          onHome={() => router.push('/')} 
          onBookAnother={() => setStep(1)} 
        />
      )}
    </div>
  );
}
