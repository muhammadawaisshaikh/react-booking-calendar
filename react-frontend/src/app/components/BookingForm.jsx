"use client";

import React, { useState } from 'react';
import { supabase } from '@/api/config';

const BookingForm = ({ date, slot }) => {
    const [reason, setReason] = useState('');
    const [confirmation, setConfirmation] = useState(null);

    const handleConfirm = async () => {
        const payload = {
            date: date,
            slot: slot,
            reason: reason
        };

        try {
            const { error } = await supabase.from('appointments').insert(payload);
            setConfirmation(true);
            setReason('');
        } catch (error) {
            throw error;
        }
    }

    return (
        <div>
            <h3 className='mb-4 text-2xl'>Confirm Booking</h3>

            <div className='mb-4'>
                <input
                    type="text"
                    value={reason}
                    placeholder='Reason for the call'
                    className='border-solid border-2 border-gray-400 rounded-md px-4 py-2 text-gray-900'
                    onChange={(e) => setReason(e.target.value)}
                />
            </div>
            <button className='bg-black text-white p-3 rounded-lg' disabled={!reason} onClick={handleConfirm}>Confirm Call</button>

            {confirmation && (
                <div className='mt-8 bg-green-500 p-3 text-white rounded-md'>
                    <p className='flex'>
                        <span className='mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                        {`Confirmed: ${date}, ${slot} - ${reason}`}
                    </p>
                </div>
            )}
        </div>
    );
};
export default BookingForm;