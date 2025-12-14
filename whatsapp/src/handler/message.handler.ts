// Roman Urdu Comment: Incoming WhatsApp messages ko process karta hai

import axios from "axios";
import { humanTyping } from "../utils/humanizer";
import { handleAIFlow } from "../flows/ai.flow";
import { handlePaymentFlow } from "../flows/payment.flow";
import { handleMediaMessage } from "./media.handler";

export const handleIncomingMessage = async (sock: any, msg: any) => {
  const sender = msg.key.remoteJid;

  // MEDIA HANDLING
  if (msg.message.imageMessage) {
    return await handleMediaMessage(sock, msg);
  }

  const text = msg.message.conversation || 
               msg.message.extendedTextMessage?.text;

  if (!text) return;

  await humanTyping(sock, sender);

  // Payment trigger
  if (text.includes("screenshot") || text.includes("paid")) {
    return await handlePaymentFlow(sock, sender);
  }

  // AI conversation default flow  
  return handleAIFlow(sock, sender, text);
};
