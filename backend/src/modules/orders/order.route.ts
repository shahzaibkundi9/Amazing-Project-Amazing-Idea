// Roman Urdu Comment: Order module ke routes define karta hai

import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { createOrderSchema } from "./order.schema";
import { OrderController } from "./order.controller";

const router = Router();

// Create new order
router.post("/", requireAuth, validate(createOrderSchema), OrderController.create);

// Get my orders
router.get("/mine", requireAuth, OrderController.myOrders);

// All orders (admin-level future)
router.get("/", requireAuth, OrderController.getAll);

// Update order status
router.put("/:id/status", requireAuth, OrderController.updateStatus);

export default router;
