// Roman Urdu Comment: Yeh main router hai, Phase 2 mein modules add honge.

import { Router } from "express";

import authRoutes from "./modules/auth/auth.route";
import userRoutes from "./modules/users/user.route";
import orderRoutes from "./modules/orders/order.route";
import paymentRoutes from "./modules/payments/payment.route";
import chatRoutes from "./modules/chats/chat.route";
import aiRoutes from "./modules/ai-gateway/ai.route";
import contextRoutes from "./modules/context/context.route";
import aiProviderRoutes from "./modules/ai-providers/aiProvider.route";
import templateRoutes from "./modules/templates/template.route";
import analyticsRoutes from "./modules/analytics/analytics.route";
import uploadRoutes from "./modules/uploads/upload.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/payments", paymentRoutes);
router.use("/chats", chatRoutes);
router.use("/ai", aiRoutes);
router.use("/context", contextRoutes);
router.use("/ai/providers", aiProviderRoutes);
router.use("/templates", templateRoutes);
router.use("/analytics", analyticsRoutes);
router.use("/uploads", uploadRoutes);

router.get("/", (req, res) => {
  res.send("Backend API Running ✔");
});

export default router;
