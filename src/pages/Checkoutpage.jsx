import React, { useState } from 'react';
import BookingDate from './BookingDate';
import EventName from './EventName';
import OrderNumber from './OrderNumber';
import Quantity from './Quantity';
import EventDateTime from './EventDateTime';
import Subtotal from './Subtotal';
import VoucherSystem from './VoucherSystem';
import PaymentMethod from './PaymentMethod';
import Total from './Total';
import CheckoutButton from './CheckoutButton';
import QRISPayment from './QRISPayment';

function CheckoutPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit_card');
  const [voucherAmount, setVoucherAmount] = useState(0);

  const handlePaymentComplete = () => {
    // Handle actions after the payment is complete, e.g., navigate to a confirmation page.
    // You can define this function according to your application's needs.
    console.log('Payment completed. Redirect to confirmation page or perform other actions.');
  };

  return (
    <div>
      <BookingDate />
      <EventName />
      <OrderNumber />
      <Quantity />
      <EventDateTime />
      <Subtotal />
      <VoucherSystem applyVoucher={(amount) => setVoucherAmount(amount)} />
      <Total subtotalAmount={100} voucherAmount={voucherAmount} />
      <PaymentMethod
        selectedPaymentMethod={selectedPaymentMethod}
        onSelectPaymentMethod={(method) => setSelectedPaymentMethod(method)}
      />
      <QRISPayment
        totalAmount={100 - voucherAmount} // Adjust the total amount based on vouchers
        onPaymentComplete={handlePaymentComplete}
      />
      <CheckoutButton />
    </div>
  );
}

export default CheckoutPage;
``
