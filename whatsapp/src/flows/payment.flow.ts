// Roman Urdu Comment: Customer ko auto 1000 Rs advance ka msg bhejna


import { humanTyping } from "../utils/humanizer";
import { syncMessage } from "../sync/sync.events";

export const handlePaymentFlow = async (sock: any, jid: string) => {
  const msg =
`🟢 *Order Confirmation Required*
Aapko order confirm karne ke liye *1000 Rs advance* bhejna hoga.

Payment Methods:
• Easypaisa  
• JazzCash  
• Bank Transfer  

Payment bhejne ke baad *screenshot send kar dein.*`;

  await humanTyping(sock, jid);
  await sock.sendMessage(jid, { text: msg });

  // Sync message
  await syncMessage(jid, msg, "text", "bot");
};
