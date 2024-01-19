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
            
            <div>
                <label>Reason for the call:</label>
                <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
            </div>
            <button onClick={handleConfirm}>Confirm Call</button>

            {confirmation && (
                <div>
                    <p>{`Confirmed: ${date}, ${slot} - ${reason}`}</p>
                </div>
            )}
        </div>
    );
};

export default BookingForm;