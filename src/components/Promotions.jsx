import React from 'react';
import { Link } from 'react-router-dom';
import './PromotionPage.css'; 

const PromotionPage = () => {
  return (
    <div className="promotion-page">
      <h1>Promotion Page</h1>
      <p>Welcome to our special promotion page!</p>
      <p>Use the promo code below to get a discount on your purchase:</p>
      <div className="promo-code">
        <code>DISCOUNT2023</code>
      </div>
      <p>Don't miss this limited-time offer!</p>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default PromotionPage;
