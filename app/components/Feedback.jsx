import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../constants/motion";
import styles from "../constants/styles";
import Image from "next/image";

const Feedback = () => {
  return (
    <section className="xs:p-8 my-6 sm:my-2 px-[10%]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-6`}
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-5xl text-[26px] border-5 border-l-third-color mb-3">
            Where Adventure Meets Convenience
            </h4>
            <p className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
            CruiseWheels is your premier choice for convenient and luxurious
              car rental services.
            </p>
          </div>
          <p className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
            “We take pride in offering a personalized car rental experience,
            tailored to your needs. Our dedicated team ensures top-notch
            service, always with a smile. Book your next adventure with
            CruiseWheels today.”
          </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <Image
            src="/aboutus.png"
            className="px-0 lg:px-4 xl:px-14 w-full h-auto object-cover rounded-3xl"
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;