// Roman Urdu: Yeh user ka REAL context fetch karta hai backend se

import { prisma } from "../../prisma/client";

export const ContextRepository = {
  getUserByJid: async (jid: string) => {
    return prisma.user.findUnique({
      where: { id: jid },
    });
  },

  getLatestOrder: async (userId: string) => {
    return prisma.order.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },

  getLatestPayment: async (orderId: string) => {
    return prisma.payment.findFirst({
      where: { orderId },
      orderBy: { createdAt: "desc" },
    });
  },

  getLastChatMessage: async (userId: string) => {
    return prisma.chat.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },
};
