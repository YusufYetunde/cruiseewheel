import Banners from "../components/Banner";
import Service from "../components/Service";
import Subfooter from "../components/SubFooter";
import { serviceList } from "../data";
import React from "react";

const Services = () => {
  return (
    <div>
      <Banners
        img="/service-banner.jpg"
        title="Services"
        text="Experience elevated travel with Cruise Wheel: Where style, comfort, and safety converge for every occasion. Travel in sophistication and peace of mind."
      />
      <div className="mb-5">
        {serviceList?.map((service, index) => (
          <div key={index}>
            <Service service={service} />
          </div>
        ))}
      </div>
      <Subfooter />
    </div>
  );
};

export default Services;