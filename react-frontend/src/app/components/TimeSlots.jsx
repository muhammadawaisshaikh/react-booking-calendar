"use client";

import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { supabase } from '@/api/config';

const TimeSlots = ({ date }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        getSlots();
    },[date]);

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
        console.log(selectedSlot);
    };

    async function getSlots() {
        try {
            const { data } = await supabase.from("slots").select(`*`);
            setSlots(data);
        } catch (error) {
            throw error;
        }
    }

    return (
        <div className="grid lg:grid-cols-2 md:grid-flow-row gap-4">
            <div className='lg:pr-24 sm:pr-0'>
                <h2 className='mb-4 text-2xl'>Time Slots: <strong>{date}</strong></h2>
                
                {
                    slots.map((s, i) => {
                        return(
                            <p
                                key={s.id}
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