"use server";
import { orderedMail } from "../../actions/order";
import React from "react";
import Image1 from "../../../public/success.png"

const Success = async ({ params }) => {
  const updateEmail = await orderedMail(params.id);
  return (
    <div className="grid items-center justify-center h-[90vh]">
      {updateEmail && (
        <div className="flex justify-center items-center gap-10 flex-col">
          <Image1 className="w-40 h-40" />
          <h1 className="text-4xl text-green-500">Payment Successful</h1>
        </div>
      )}
    </div>
  );
};

export default Success;