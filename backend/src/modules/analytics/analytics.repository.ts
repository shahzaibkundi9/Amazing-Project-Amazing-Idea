import { prisma } from "../../prisma/client";

export const AnalyticsRepository = {
  countOrders: () => prisma.order.count(),
  countUsers: () => prisma.user.count(),
  countPaidPayments: () =>
    prisma.payment.count({ where: { status: "paid" } }),
  totalRevenue: () =>
    prisma.payment.aggregate({
      _sum: { amount: true },
      where: { status: "paid" },
    }),
  aiMessageCount: () =>
    prisma.chat.count({ where: { sender: "bot" } }),

  salesChart: () =>
    prisma.order.groupBy({
      by: ["createdAt"],
      _count: { id: true },
    }),

  chatChart: () =>
    prisma.chat.groupBy({
      by: ["createdAt"],
      _count: { id: true },
    }),
};
