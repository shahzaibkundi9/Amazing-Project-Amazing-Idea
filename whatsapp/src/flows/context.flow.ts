// Roman Urdu Comment: User ke order/payment/AI context ko backend se fetch karta hai

import axios from "axios";

export const getUserContext = async (jid: string) => {
  const userContext = await axios.get(`${process.env.BACKEND_URL}/api/context/${jid}`);

  return userContext.data;
};
