// Roman Urdu Comment: Incoming WhatsApp messages ko process karta hai

import axios from "axios";
import { humanTyping } from "../utils/humanizer";
import { handleAIFlow } from "../flows/ai.flow";
import { handlePaymentFlow } from "../flows/payment.flow";
import { handleMediaMessage } from "./media.handler";
import { processOrderAwareMessage } from "../flows/order.flow";

export const handleIncomingMessage = async (sock: any, msg: any) => {
  const sender = msg.key.remoteJid;

  // IMAGE / SCREENSHOT detection
  if (msg.message.imageMessage) {
    return await handleMediaMessage(sock, msg);
  }

  const text = msg.message.conversation || 
               msg.message.extendedTextMessage?.text;

  if (!text) return;

  await humanTyping(sock, sender);

  // Smart brain message router
  return processOrderAwareMessage(sock, sender, text);
};
