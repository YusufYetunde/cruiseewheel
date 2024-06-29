import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/motion";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const InsightCard = ({ imgUrl, title, subtitle, index, isForm, form, price }) => {
  const searchParams = useSearchParams();
  const option = searchParams.get("option");
  const router = useRouter();
  return (
    <motion.div
      variants={fadeIn("up", "string", index * 0.5, 1)}
      className="flex justify-center md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        className="md:w-[350px] w-full h-[250px] rounded-[32px] object-cover"
        alt=""
      />
      <div>
        <div className="flex justify-between">
          <h4 className="font-extrabold text-slate-500 lg:text-[42px] text-[26px]">
            {title}
          </h4>
          {isForm && (
            <button
              onClick={() => {
                form.setValue("imgUrl", imgUrl);
                form.setValue("title", title);
                form.setValue("subtitle", subtitle);
                
                router.push(`/booking?index=2&option=${index}&price=${price}`);
              }}
              className={`${
                option == index
                  ? "bg-third-color text-white"
                  : "bg-slate-200 text-slate-500"
              } h-12 teext-md px-7 rounded-full`}
              disabled={option == index ? true : false}
            >
              Select
            </button>
          )}
        </div>
        <p className="mt-4 font-normal lg:text-lg text-sm text-slate-400">
          {subtitle}
          
        </p>
        <span className="font-bold text-2xl mt-4 text-red-400">${price}/day</span>
      </div>
    </motion.div>
  );
};

export default InsightCard;