"use client";

import React, { useState } from 'react';
import BookingForm from './BookingForm';

const TimeSlots = ({ date }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
    };

    return (
        <div class="grid lg:grid-cols-2 md:grid-flow-row gap-4">
            <div>
                <h2 className='mb-4 text-2xl'>Time Slots: <strong>{date}</strong></h2>
                <p onClick={() => handleSlotClick('12:00 PM')}>12:00 PM - Available</p>
            </div>

            <div>
                {selectedSlot && <BookingForm date={date} slot={selectedSlot} />}
            </div>
        </div>
    );
};

export default TimeSlots;