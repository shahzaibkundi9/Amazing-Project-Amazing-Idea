// Roman Urdu Comment: Order create karne ke liye validation

import { z } from "zod";

export const createOrderSchema = z.object({
  metadata: z.any().optional(), // AI / WhatsApp workflow data
});
