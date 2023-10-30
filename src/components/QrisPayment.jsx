import React, { useState } from 'react';

const QRISPayment = ({ totalAmount, onPaymentComplete }) => {
  const [paymentStatus, setPaymentStatus] = useState('pending');

  const handlePayment = async () => {
    // Simulate a payment process; in a real application, this would involve integration with a payment service
    setPaymentStatus('processing');

    // Simulate a delay to mimic a payment process
    setTimeout(async () => {
      // In a real application, you would interact with a payment service to complete the payment
      setPaymentStatus('completed');

      // Notify the parent component that the payment is complete
      onPaymentComplete();
    }, 3000); // Simulating a 3-second payment processing time
  };

  return (
    <div>
      <h2>QRIS Payment</h2>
      <p>Total Amount: ${totalAmount}</p>
      {paymentStatus === 'pending' && (
        <button onClick={handlePayment} disabled={paymentStatus === 'processing'}>
          Pay with QRIS
        </button>
      )}
      {paymentStatus === 'processing' && <p>Processing payment...</p>}
      {paymentStatus === 'completed' && <p>Payment completed!</p>}
    </div>
  );
};

export default QRISPayment;
