import React from 'react';

const Total = ({ subtotalAmount, voucherAmount }) => {
  const totalAmount = subtotalAmount - voucherAmount;

  return (
    <div>
      <label>Total:</label>
      <p>${totalAmount}</p>
    </div>
  );
};

export default Total;
