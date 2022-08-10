import Calendar from 'react-calendar';
import './assets/css/Calendar.css';
import React, { useState } from 'react';

export default function Cal() {  
    const [value, onChange] = useState(new Date());
    return (
        <Calendar
            value={value} 
            calendarType="US" 
            onChange={onChange} 
            locale="en"
        />
        );
}