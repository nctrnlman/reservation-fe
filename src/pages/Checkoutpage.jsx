import React, { useState } from "react";
import BookingDate from "../components/BookingDate";
import EventName from "../components/EventName";
import OrderNumber from "../components/OrderNumber";
// import Quantity from "../components/";
// import EventDateTime from "../components/EventDateTime";
import Subtotal from "../components/Subtotal";
import VoucherSystem from "../components/VoucherSystem";
import PaymentMethod from "../components/PaymentMethod";
import Total from "../components/Total";
import CheckoutButton from "../components/CheckoutButton";
import QrisPayment from "../components/QrisPayment";

function CheckoutPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("credit_card");
  const [voucherAmount, setVoucherAmount] = useState(0);

  const handlePaymentComplete = () => {
    // Handle actions after the payment is complete, e.g., navigate to a confirmation page.
    // You can define this function according to your application's needs.
    console.log(
      "Payment completed. Redirect to confirmation page or perform other actions."
    );
  };

  return (
    <div>
      <BookingDate />
      <EventName />
      <OrderNumber />
      {/* <Quantity /> */}
      {/* <EventDateTime /> */}
      <Subtotal />
      <VoucherSystem applyVoucher={(amount) => setVoucherAmount(amount)} />
      <Total subtotalAmount={100} voucherAmount={voucherAmount} />
      <PaymentMethod
        selectedPaymentMethod={selectedPaymentMethod}
        onSelectPaymentMethod={(method) => setSelectedPaymentMethod(method)}
      />
      <CheckoutButton />
      <QrisPayment
        totalAmount={100 - voucherAmount} // Adjust the total amount based on vouchers
        onPaymentComplete={handlePaymentComplete}
      />
      <QrisPayment />
    </div>
  );
}

export default CheckoutPage;
``;
