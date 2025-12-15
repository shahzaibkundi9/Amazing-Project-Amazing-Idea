// Roman Urdu Comment: Payment logic (request, verify, update)
import { prisma } from "../../prisma/client";
import { OrderService } from "../orders/order.service";

export const PaymentService = {
  createPaymentRequest: async (userId: string, orderId: string, method: string, amount: number, screenshot?: string) => {
    await OrderService.updateOrderStatus(orderId, "awaiting_advance");

    return prisma.payment.create({
      data: {
        userId,
        orderId,
        method,
        amount,
        screenshot: screenshot || null,
        status: "pending",
      },
    });
  },

  getOrderPayments: async (orderId: string) => {
    return prisma.payment.findMany({
      where: { orderId },
      orderBy: { createdAt: "desc" },
    });
  },

  updatePaymentStatus: async (id: string, status: string) => {
    const payment = await prisma.payment.update({
      where: { id },
      data: { status },
    });

    if (status === "paid") {
      await OrderService.updateOrderStatus(payment.orderId, "confirmed");
    }

    if (status === "rejected") {
      await OrderService.updateOrderStatus(payment.orderId, "pending");
    }

    return payment;
  },

  verifyScreenshot: async (userId: string, screenshotUrl: string) => {
    const order = await prisma.order.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    if (!order) throw new Error("Order not found for user");

    const payment = await prisma.payment.create({
      data: {
        userId,
        orderId: order.id,
        method: "screenshot",
        amount: 1000,
        screenshot: screenshotUrl,
        status: "pending",
      },
    });

    return payment;
  },
};

