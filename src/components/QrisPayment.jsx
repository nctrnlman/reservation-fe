import React, { useState } from 'react';
import './QRISPayment.css'; // Import the CSS file for animations

const QRISPayment = ({ totalAmount, onPaymentComplete }) => {
  const [paymentStatus, setPaymentStatus] = useState('pending');

  const handlePayment = async () => {
    setPaymentStatus('processing');

    // Simulate a delay to mimic a payment process
    setTimeout(async () => {
      // In a real application, you would interact with a payment service to complete the payment
      if (Math.random() < 0.5) {
        // Simulate a random success or failure
        setPaymentStatus('completed');
        onPaymentComplete();
      } else {
        setPaymentStatus('failed');
      }
    }, 3000);
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
      {paymentStatus === 'completed' && (
        <div className="checkmark-animation"></div>
      )}
      {paymentStatus === 'failed' && (
        <div className="cross-animation"></div>
      )}
    </div>
  );
};

export default QRISPayment;
