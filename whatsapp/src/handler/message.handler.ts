// Roman Urdu Comment: Incoming WhatsApp messages ko process karta hai

import axios from "axios";
import { humanTyping } from "../utils/humanizer";
import { handleAIFlow } from "../flows/ai.flow";
import { handlePaymentFlow } from "../flows/payment.flow";

export const handleIncomingMessage = async (sock: any, msg: any) => {
  const sender = msg.key.remoteJid;
  const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

  if (!text) return;

  // Roman Urdu: Human-like typing indicator
  await humanTyping(sock, sender);

  // Payment Flow Trigger
  if (text.includes("payment") || text.includes("advance")) {
    return await handlePaymentFlow(sock, sender);
  }

  // AI Conversation Flow
  return handleAIFlow(sock, sender, text);
};
