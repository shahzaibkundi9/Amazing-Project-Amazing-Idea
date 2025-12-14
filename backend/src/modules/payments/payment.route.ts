// Roman Urdu Comment: Payment endpoints define karta hai

import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { createPaymentSchema, updatePaymentSchema } from "./payment.schema";
import { PaymentController } from "./payment.controller";

const router = Router();

// Create payment request
router.post("/", requireAuth, validate(createPaymentSchema), PaymentController.create);

// Get all payments for a specific order
router.get("/:orderId", requireAuth, PaymentController.getOrderPayments);

// Update payment status (admin panel)
router.put("/:id/status", requireAuth, validate(updatePaymentSchema), PaymentController.updateStatus);

export default router;
