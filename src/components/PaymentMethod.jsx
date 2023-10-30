import React, { useState } from 'react';

const PaymentMethod = ({ selectedPaymentMethod, onSelectPaymentMethod }) => {
  return (
    <div>
      <label>Select Payment Method:</label>
      <select value={selectedPaymentMethod} onChange={(e) => onSelectPaymentMethod(e.target.value)}>
        <option value="credit_card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="stripe">Stripe</option>
        {/* Add more payment methods as needed */}
      </select>
    </div>
  );
};

export default PaymentMethod;
