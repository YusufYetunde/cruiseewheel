import Banners from "../components/Banner";
import Insight from "../components/Insight";
import React from "react";

const Ourfleet = () => {
  return (
    <div>
      <Banners
        img="/our-fleet-banner.jpg"
        title="Our Fleet"
        text="Whether you're seeking pure luxury or a high-capacity transporter, Cruise Wheel offers a diverse range of vehicles for every occasion. What will you choose?"
      />
      <div className="relative">
        <Insight isForm={false} form={false} />
      </div>
    </div>
  );
};

export default Ourfleet;