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

    return res.json({ success: true, data: payment });
  },

  getOrderPayments: async (req: any, res: Response) => {
    const payments = await PaymentService.getOrderPayments(req.params.orderId);
    return res.json({ success: true, data: payments });
  },

  updateStatus: async (req: Request, res: Response) => {
    const updated = await PaymentService.updatePaymentStatus(
      req.params.id,
      req.body.status
    );
    return res.json({ success: true, data: updated });
  },

  verifyScreenshot: async (req: Request, res: Response) => {
    const { userId, screenshot } = req.body;

    const payment = await PaymentService.verifyScreenshot(userId, screenshot);

    return res.json({ success: true, data: payment });
  },
};

