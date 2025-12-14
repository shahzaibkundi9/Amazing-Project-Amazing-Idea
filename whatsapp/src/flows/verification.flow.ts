// Roman Urdu Comment: Screenshot verification ke baad user ko msg bhejna

import { humanTyping } from "../utils/humanizer";

export const sendVerificationResult = async (sock: any, jid: string, status: string) => {
  await humanTyping(sock, jid);

  if (status === "paid") {
    await sock.sendMessage(jid, {
      text: "🎉 *Payment Verified!* Aapka order confirm ho gaya hai ✔",
    });
  } else if (status === "rejected") {
    await sock.sendMessage(jid, {
      text: "❌ Galat ya unclear screenshot. Please dobara clear screenshot send karein.",
    });
  }
};
