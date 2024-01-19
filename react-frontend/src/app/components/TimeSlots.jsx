"use client";

import React, { useState } from 'react';
import BookingForm from './BookingForm';

const TimeSlots = ({ date }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const slots = [
        { key: '12:00 PM', value: '12:00 PM - Available' },
        { key: '01:00 PM', value: '01:00 PM - Available' },
        { key: '02:00 PM', value: '02:00 PM - Available' },
        { key: '03:00 PM', value: '03:00 PM - Available' }
    ]

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
    };

    return (
        <div className="grid lg:grid-cols-2 md:grid-flow-row gap-4">
            <div className='lg:pr-24 sm:pr-0'>
                <h2 className='mb-4 text-2xl'>Time Slots: <strong>{date}</strong></h2>
                
                {
                    slots.map(s => {
                        return(
                            <p
                                className='shadow-md rounded-lg p-3 mb-4'
                                onClick={() => handleSlotClick(s.key)}>
                                {s.value}
                            </p>
                        );
                    })
                }
            </div>

            <div>
                {selectedSlot && <BookingForm date={date} slot={selectedSlot} />}
            </div>
        </div>
    );
};

export default TimeSlots;