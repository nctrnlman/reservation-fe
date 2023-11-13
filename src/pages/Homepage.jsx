import React from "react";
import Card from "../components/Card";
import PromotionPage from "../components/Promotions";
import Banner from "../components/Banner";

function Homepage() {
  return (
    <div className="text-center mx-auto ">
      {/* <div className=" mt-20 text-6xl">
        <h1>HOMEPAGE</h1>
        <h4>FRONT END RESERVATION</h4>
      </div>
      <div className="flex mt-10">
        <Card
          title="Uzlah Sadboy"
          description="Kisah Cinta Uzla. whwhwhwhwhw"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s"
        />
        <Card
          title="Pakih Fakboy"
          description="Kisah Asmara kih"
          imageUrl="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        />
      </div>
      <p className="mt-20 text-5xl">
        Ini contoh penggunaan pages (homepage) dan component (card)
      </p> */}
      <Banner />
      <h1>PAKIH Card</h1>
      <PromotionPage />
    </div>
  );
}

export default Homepage;
