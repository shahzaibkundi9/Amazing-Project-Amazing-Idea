// Roman Urdu Comment: Chat DB logic

import { prisma } from "../../prisma/client";

export const ChatRepository = {
  create: async (userId: string, data: any) => {
    return prisma.chat.create({
      data: {
        userId,
        orderId: data.orderId || null,
        message: data.message || null,
        type: data.type,
        sender: data.sender,
      },
    });
  },

  getChatsForUser: async (userId: string) => {
    return prisma.chat.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    });
  },

  getChatsForOrder: async (orderId: string) => {
    return prisma.chat.findMany({
      where: { orderId },
      orderBy: { createdAt: "asc" },
    });
  },

  getAllChats: async () => {
    return prisma.chat.findMany({
      orderBy: { createdAt: "asc" },
    });
  },
};
