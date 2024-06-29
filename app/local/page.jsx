import Image from "next/image";
import Banners from "../components/Banner";
import Subfooter from "../components/SubFooter";
import React from "react";

const Local = () => {
  return (
    <div>
      <Banners
        img="/local-banner.jpg"
        title="Local Transfers"
        text="Add unforgettable moments to your special occasions with Cruise Wheel"
      />
      <div className="max-w-[1150px] mx-4 lg:mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-third-color text-4xl font-bold mb-10">
              Local Car Services
            </h1>
            <p className="leading-6 text-lg text-slate-400">
              Cruise Wheel understands the significance of transportation for your special occasions. <br />
              <br />
              Our fleet of vehicles is meticulously maintained to ensure a flawless appearance, and we will plan your route to ensure punctuality. We pay attention to every detail, so do not hesitate to let us know if you require any additional services, such as decorations, to enhance your journey joy. <br />
              <br />
              Personalize your experience with us and transform every ride into a truly memorable one.
            </p>
          </div>
          <Image src="/local.jpeg" className="w-full h-full" alt="" />
        </div>
        <h2 className="text-center text-md md:text-4xl text-slate-500 my-16">
          Whether you desire luxurious indulgence or spacious convenience, our versatile fleet offers the perfect ride for any occasion.
        </h2>
      </div>
      <Subfooter />
    </div>
  );
};

export default Local;