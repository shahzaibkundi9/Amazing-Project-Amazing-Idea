// Roman Urdu Comment: User update ke liye validation schema

import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
});
