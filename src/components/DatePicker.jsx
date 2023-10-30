import React, { useState } from 'react';

const DatePicker = ({ selectedDate, onDateChange }) => {
  const handleDateChange = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <div className="my-4 p-4 bg-white shadow-md">
      <label htmlFor="datepicker">Choose a Date:</label>
      <input
        type="date"
        id="datepicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
