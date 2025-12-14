// Roman Urdu Comment: AI ko bhejne wale request ka validation

import { z } from "zod";

export const aiRequestSchema = z.object({
  userId: z.string(),
  message: z.string(),
  history: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    })
  ).optional(),
  metadata: z.any().optional(),
});
