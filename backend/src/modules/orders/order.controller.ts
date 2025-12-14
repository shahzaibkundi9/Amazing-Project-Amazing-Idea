// Roman Urdu Comment: Controller HTTP response handle karta hai

import { Request, Response } from "express";
import { OrderService } from "./order.service";

export const OrderController = {
  create: async (req: any, res: Response) => {
    const order = await OrderService.createOrder(req.user.id, req.body.metadata);

    return res.json({
      success: true,
      message: "Order created",
      data: order,
    });
  },

  myOrders: async (req: any, res: Response) => {
    const orders = await OrderService.getMyOrders(req.user.id);

    return res.json({
      success: true,
      data: orders,
    });
  },

  getAll: async (req: Request, res: Response) => {
    const orders = await OrderService.getAllOrders();

    return res.json({
      success: true,
      data: orders,
    });
  },

  updateStatus: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await OrderService.updateOrderStatus(id, status);

    return res.json({
      success: true,
      message: "Order status updated",
      data: updated,
    });
  },
};
