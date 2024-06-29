"use server";

import connect from "../lib/db";
import { sendEmail } from "../lib/sendEmail";
import Order from "../models/Order";

export const orderedMail = async (id) => {
  try {
    await connect();
    const getOrder = await Order.findById(id);
    await sendEmail({
      order: getOrder,
      email: getOrder.email,
      subject: "Yetunde from CruiseWheel",
      message: `Hello there, you have booking`,
    });

    await sendEmail({
      order: getOrder,
      email: "cruisewheel@gmail.com",
      subject: "Yetunde from CruiseWheel",
      message: `hello there, you have booking`,
    });
    return getOrder;
  } catch (error) {}
};