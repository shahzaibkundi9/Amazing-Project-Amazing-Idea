// Roman Urdu: Smart brain ko dene ke liye full context bundle banata hai

import { ContextRepository } from "./context.repository";

export const ContextService = {
  getContext: async (jid: string) => {
    const user = await ContextRepository.getUserByJid(jid);

    if (!user) {
      return {
        exists: false,
        message: "User not found",
      };
    }

    const latestOrder = await ContextRepository.getLatestOrder(user.id);
    const latestPayment = latestOrder
      ? await ContextRepository.getLatestPayment(latestOrder.id)
      : null;

    const lastChat = await ContextRepository.getLastChatMessage(user.id);

    return {
      exists: true,
      user,
      activeOrder: latestOrder || null,
      payment: latestPayment || null,
      lastMessage: lastChat || null,
    };
  },
};
