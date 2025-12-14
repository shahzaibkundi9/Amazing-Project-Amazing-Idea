// Roman Urdu: Combined sync engine jo dono directions me events bhejta hai

import { sendMessageToBackend } from "./sync.backend";
import { sendToAdmin } from "./sync.admin";

export const syncMessage = async (jid: string, message: string, type: string, sender: string) => {
  // Backend me save karo
  await sendMessageToBackend(jid, message, type, sender);

  // Admin panel ko realtime update bhejo
  sendToAdmin({
    jid,
    message,
    type,
    sender,
    timestamp: Date.now(),
  });
};
