// Roman Urdu Comment: Order logic (create, read, update) yahan hota hai

import { OrderRepository } from "./order.repository";

export const OrderService = {
  createOrder: async (userId: string, metadata: any) => {
    // Roman Urdu: Naya order hamesha "pending" state par start hota hai
    return OrderRepository.create(userId, metadata || {});
  },

  getMyOrders: async (userId: string) => {
    return OrderRepository.findByUser(userId);
  },

  getAllOrders: async () => {
    return OrderRepository.findAll();
  },

  getOrder: async (id: string) => {
    const order = await OrderRepository.findById(id);
    if (!order) throw new Error("Order not found");
    return order;
  },

  updateOrderStatus: async (id: string, status: string) => {
    return OrderRepository.updateStatus(id, status);
  },
};
