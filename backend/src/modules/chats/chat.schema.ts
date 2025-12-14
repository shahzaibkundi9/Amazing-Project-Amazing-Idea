// Roman Urdu Comment: Chat message create validation

import { z } from "zod";

export const createChatSchema = z.object({
  orderId: z.string().optional(),
  message: z.string().optional(),
  type: z.enum(["text", "image", "payment_notice"]),
  sender: z.enum(["user", "bot", "admin", "whatsapp"]),
});
