"use client";

import React, { useState } from 'react';

const BookingForm = ({ date, slot }) => {
    const [reason, setReason] = useState('');
    const [confirmation, setConfirmation] = useState(null);

    const handleConfirm = () => {
        // Make API call to allocate the selected time slot
        // Display confirmation message or error message
    };

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
            <button className='bg-black text-white p-3 rounded-lg' onClick={handleConfirm}>Confirm Call</button>

            {confirmation && (
                <div>
                    <p>{`Confirmed: ${date}, ${slot} - ${reason}`}</p>
                </div>
            )}
        </div>
    );
};

export default BookingForm;