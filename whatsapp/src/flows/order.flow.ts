// Roman Urdu Comment: Order-aware logic—AI kab chalega, payment kab bolega.

import { getUserContext } from "./context.flow";
import { handlePaymentFlow } from "./payment.flow";
import { handleAIFlow } from "./../flows/ai.flow";
import { setUserState, getUserState, clearUserState } from "./state.manager";
import { humanTyping } from "../utils/humanizer";

export const processOrderAwareMessage = async (sock: any, jid: string, message: string) => {
  // Roman Urdu: Backend se user ka real-time context fetch karo
  const ctx = await getUserContext(jid);

  const userHasPendingOrder = ctx.activeOrder?.status === "awaiting_advance";
  const userHasPendingVerification = ctx.payment?.status === "pending";

  // 1️⃣ PAYMENT REQUIRED
  if (userHasPendingOrder) {
    setUserState(jid, "awaiting_payment");
    return handlePaymentFlow(sock, jid);
  }

  // 2️⃣ PAYMENT VERIFICATION MODE
  if (userHasPendingVerification) {
    setUserState(jid, "awaiting_verification");

    await humanTyping(sock, jid);

    await sock.sendMessage(jid, {
      text: "🔎 Aapka payment verify ho raha hai, kripya wait karein...",
    });

    return true;
  }

  // 3️⃣ NORMAL AI MODE
  clearUserState(jid);
  return handleAIFlow(sock, jid, message);
};
