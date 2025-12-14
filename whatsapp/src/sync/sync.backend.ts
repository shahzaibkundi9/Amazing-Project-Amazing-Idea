// Roman Urdu: WhatsApp messages ko backend Chat DB me push karta hai

import axios from "axios";

export const sendMessageToBackend = async (jid: string, message: string, type = "text", sender = "whatsapp") => {
  await axios.post(`${process.env.BACKEND_URL}/api/chats`, {
    userId: jid,
    message,
    type,
    sender,
  });
};
