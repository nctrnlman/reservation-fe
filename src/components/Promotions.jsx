import React from "react";
import { Link } from "react-router-dom";

const PromotionPage = () => {
  return (
    <div className="text-center ">
      <div className=" p-20">
        <h1 className="text-2xl">Promotion Page</h1>
        <p>Welcome to our special promotion page!</p>
        <p>Use the promo code below to get a discount on your purchase:</p>
        <div className="bg-gray-200 p-4 border rounded-lg text-2xl mt-10">
          <code>DISCOUNT2023</code>
        </div>
        <p>Don't miss this limited-time offer!</p>
        <Link
          to="/checkout"
          className="bg-blue-500 text-white p-4 rounded-lg text-2xl no-underline mt-20 inline-block hover:bg-blue-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default PromotionPage;
