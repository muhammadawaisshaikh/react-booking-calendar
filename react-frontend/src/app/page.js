"use client";

import React, { useState } from 'react';
import TimeSlots from './components/TimeSlots';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (e) => {
    const date = e.target.value
    setSelectedDate(date);
    // Make API call to fetch time slots for the selected date
  };

  return (
    <div className='lg:p-16 md:p-8'>
      {/* Calendar  */}
      <div className='mb-16'>
        <h1 className='mb-4 text-2xl'>Booking Calendar</h1>
        <input type='date' onChange={handleDateClick} className='border-solid border-2 border-gray-400 rounded-md px-4 py-2 text-gray-900' />
      </div>

      {/* timeslots  */}
      <div>
        {selectedDate && <TimeSlots date={selectedDate} />}
      </div>
    </div>
  );
}
