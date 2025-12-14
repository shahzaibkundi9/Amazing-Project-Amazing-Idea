// Roman Urdu Comment: Incoming WhatsApp messages ko process karta hai


import { syncMessage } from "../sync/sync.events";
import { processOrderAwareMessage } from "../flows/order.flow";
import { humanTyping } from "../utils/humanizer";
import { handleMediaMessage } from "./media.handler";

export const handleIncomingMessage = async (sock: any, msg: any) => {
  const sender = msg.key.remoteJid;

  // Media detection
  if (msg.message.imageMessage) {
    await syncMessage(sender, "[Media Received]", "image", "user");
    return await handleMediaMessage(sock, msg);
  }

  const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
  if (!text) return;

  // Sync incoming msg to backend + admin
  await syncMessage(sender, text, "text", "user");

  await humanTyping(sock, sender);

  // Smart AI/Payment decision engine
  return processOrderAwareMessage(sock, sender, text);
};
