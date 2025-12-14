// Roman Urdu Comment: Payment DB operations handle karta hai

import { prisma } from "../../prisma/client";

export const PaymentRepository = {
  create: async (data: any) => {
    return prisma.payment.create({ data });
  },

  findById: async (id: string) => {
    return prisma.payment.findUnique({ where: { id } });
  },

  findByOrder: async (orderId: string) => {
    return prisma.payment.findMany({
      where: { orderId },
      orderBy: { createdAt: "desc" },
    });
  },

  updateStatus: async (id: string, status: string) => {
    return prisma.payment.update({
      where: { id },
      data: { status },
    });
  },
};
