
import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { createChatSchema } from "./chat.schema";
import { ChatController } from "./chat.controller";

const router = Router();

// Create chat message
router.post("/", requireAuth, validate(createChatSchema), ChatController.create);

// User chat history
router.get("/mine", requireAuth, ChatController.userChats);

// Chats for specific order
router.get("/order/:orderId", requireAuth, ChatController.orderChats);

// All chats (admin)
router.get("/", requireAuth, ChatController.allChats);

export default router;
