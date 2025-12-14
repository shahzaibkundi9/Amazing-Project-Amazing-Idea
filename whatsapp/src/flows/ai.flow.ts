// Roman Urdu Comment: AI ko message bhejna aur result user ko send karna

import axios from "axios";
import { humanTyping } from "../utils/humanizer";

export const handleAIFlow = async (sock: any, jid: string, message: string) => {
  // Backend ko AI request bhejna
  const response = await axios.post(`${process.env.BACKEND_URL}/api/ai/ask`, {
    userId: jid,
    message: message,
  });

  const aiReply = response.data.data.message;

  await humanTyping(sock, jid);

  await sock.sendMessage(jid, {
    text: aiReply,
  });
};
