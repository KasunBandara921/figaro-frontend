'use client';

import { useState } from 'react';

export default function BookAppointment() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the payload to the backend
    console.log({ service, date, time });
    alert('Appointment requested successfully!');
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-white px-[5vw] flex items-center justify-center">
      <div className="w-full max-w-[600px] border border-neutral-200 p-10 shadow-sm rounded-md bg-[#faf8f5]">
        <div className="text-center mb-10">
          <h1 className="font-playfair text-[#121212] text-[40px] leading-[1.2] tracking-wider mb-4">
            Book an Appointment
          </h1>
          <p className="text-[#a4a4a4] font-lato text-[16px] uppercase tracking-widest">
            Select your service, date, and time
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Service Selection */}
          <div className="flex flex-col">
            <label htmlFor="service" className="font-lato text-[12px] uppercase tracking-widest text-[#121212] mb-2 font-bold">
              Select Service
            </label>
            <select 
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="h-[50px] w-full border-b border-solid border-[#d7d7d7] bg-transparent text-[#121212] font-lato focus:border-[#dcb46e] focus:outline-none transition-colors"
            >
              <option value="" disabled>Choose a service</option>
              <option value="Haircut">Men's / Women's Haircut</option>
              <option value="Coloring">Hair Coloring / Highlights</option>
              <option value="Styling">Blowout & Styling</option>
              <option value="Treatment">Keratin Treatment</option>
              <option value="Beard Trim">Beard Trim</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div className="flex flex-col">
              <label htmlFor="date" className="font-lato text-[12px] uppercase tracking-widest text-[#121212] mb-2 font-bold">
                Select Date
              </label>
              <input 
                type="date" 
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="h-[50px] w-full border-b border-solid border-[#d7d7d7] bg-transparent text-[#121212] font-lato focus:border-[#dcb46e] focus:outline-none transition-colors"
              />
            </div>

            {/* Time Selection */}
            <div className="flex flex-col">
              <label htmlFor="time" className="font-lato text-[12px] uppercase tracking-widest text-[#121212] mb-2 font-bold">
                Select Time
              </label>
              <input 
                type="time" 
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="h-[50px] w-full border-b border-solid border-[#d7d7d7] bg-transparent text-[#121212] font-lato focus:border-[#dcb46e] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Confirmation Button */}
          <button 
            type="submit"
            className="mt-8 h-[60px] w-full bg-[#121212] text-white font-lato text-[14px] uppercase tracking-[0.2em] font-bold hover:bg-[#dcb46e] transition-colors duration-300"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
