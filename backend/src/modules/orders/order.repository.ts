// Roman Urdu Comment: DB operations yahan handle hote hain

import { prisma } from "../../prisma/client";

export const OrderRepository = {
  create: async (userId: string, metadata: any) => {
    return prisma.order.create({
      data: { userId, metadata },
    });
  },

  findById: async (id: string) => {
    return prisma.order.findUnique({ where: { id } });
  },

  findByUser: async (userId: string) => {
    return prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },

  findAll: async () => {
    return prisma.order.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  updateStatus: async (id: string, status: string) => {
    return prisma.order.update({
      where: { id },
      data: { status },
    });
  },
};
