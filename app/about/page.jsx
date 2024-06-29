"use client";
import Banners from "../components/Banner";
import Feedback from "../components/Feedback";
import Subfooter from "../components/SubFooter";
import TitleText from "../components/TitleText";
import React from "react";

const About = () => {
  return (
    <div>
      <Banners
        img="/about-banner.jpg"
        title="ABOUT US"
        text="We are an all-new chauffeured car service driving Victoria"
      />
      <TitleText
        title={<span className="">About Us</span>}
        textStyles="mt-16"
      />
      <Feedback />
      <Subfooter />
    </div>
  );
};

export default About;