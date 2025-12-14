// Roman Urdu Comment: Customer ko auto 1000 Rs advance ka msg bhejna

import axios from "axios";
import { humanTyping } from "../utils/humanizer";

export const handlePaymentFlow = async (sock: any, jid: string) => {
  const msg = 
`🟢 *Order Confirmation Required*
Aapko order confirm karne ke liye *1000 Rs Advance* bhejna hoga.

Payment Methods:
• Easypaisa  
• JazzCash  
• Bank Transfer  

Payment bhejne ke baad *screenshot send kar dein.*`;

  await humanTyping(sock, jid);

  await sock.sendMessage(jid, { text: msg });

  // Backend me payment request create karna
  await axios.post(`${process.env.BACKEND_URL}/api/payments`, {
    orderId: "pending-order", // real: AI flow will provide active order
    method: "easypaisa",
    amount: 1000,
  });

  return true;
};
