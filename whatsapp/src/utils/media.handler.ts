// Roman Urdu: Screenshot / images detect karta hai aur backend ko forward karta hai

import axios from "axios";
import { extractMedia } from "../utils/media.utils";
import { humanTyping } from "../utils/humanizer";

export const handleMediaMessage = async (sock: any, msg: any) => {
  const sender = msg.key.remoteJid;

  const buffer = await extractMedia(msg);

  // Roman Urdu: Screenshot Cloudinary par upload karwana (backend par hota hai)
  const response = await axios.post(`${process.env.BACKEND_URL}/api/uploads/screenshot`, {
    file: buffer.toString("base64"),
    userId: sender,
  });

  const mediaUrl = response.data.url;

  // Roman Urdu: Payment verification flow trigger hoga
  await humanTyping(sock, sender);

  await sock.sendMessage(sender, {
    text: "🧾 Screenshot receive hogaya — hum verify kar rahe hain...",
  });

  // Roman Urdu: Backend ko verification request bhejna
  await axios.post(`${process.env.BACKEND_URL}/api/payments/verify`, {
    sender,
    screenshot: mediaUrl,
  });
};
