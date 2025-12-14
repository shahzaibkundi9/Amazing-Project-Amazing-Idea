// Roman Urdu Comment: Payment HTTP endpoints

import { Request, Response } from "express";
import { PaymentService } from "./payment.service";

export const PaymentController = {
  create: async (req: any, res: Response) => {
    const { orderId, method, amount, screenshot } = req.body;

    const payment = await PaymentService.createPaymentRequest(
      req.user.id,
      orderId,
      method,
      amount,
      screenshot
    );

    return res.json({
      success: true,
      message: "Payment request created",
      data: payment,
    });
  },

  getOrderPayments: async (req: Request, res: Response) => {
    const { orderId } = req.params;

    const payments = await PaymentService.getOrderPayments(orderId);

    return res.json({
      success: true,
      data: payments,
    });
  },

  updateStatus: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await PaymentService.updatePaymentStatus(id, status);

    return res.json({
      success: true,
      message: "Payment status updated",
      data: updated,
    });
  },
};
