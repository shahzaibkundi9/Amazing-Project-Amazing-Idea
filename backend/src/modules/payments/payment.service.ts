// Roman Urdu Comment: Payment logic (request, verify, update)

import { PaymentRepository } from "./payment.repository";
import { OrderService } from "../orders/order.service";

export const PaymentService = {
  createPaymentRequest: async (userId: string, orderId: string, method: string, amount: number, screenshot?: string) => {
    // Roman Urdu: Payment request create karte hi order ko awaiting_advance state par shift kar dete hain
    await OrderService.updateOrderStatus(orderId, "awaiting_advance");

    return PaymentRepository.create({
      userId,
      orderId,
      method,
      amount,
      screenshot: screenshot || null,
      status: "pending",
    });
  },

  getOrderPayments: async (orderId: string) => {
    return PaymentRepository.findByOrder(orderId);
  },

  updatePaymentStatus: async (id: string, status: string) => {
    const payment = await PaymentRepository.updateStatus(id, status);

    if (status === "paid") {
      await OrderService.updateOrderStatus(payment.orderId, "confirmed");
    }

    if (status === "rejected") {
      await OrderService.updateOrderStatus(payment.orderId, "pending");
    }

    return payment;
  },
};
