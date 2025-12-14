// Roman Urdu Comment: AI gateway routes define karta hai

import { Router } from "express";
import { validate } from "../../middleware/validate.middleware";
import { requireAuth } from "../../middleware/auth.middleware";
import { aiRequestSchema } from "./ai.schema";
import { AIController } from "./ai.controller";

const router = Router();

router.post("/ask", requireAuth, validate(aiRequestSchema), AIController.askAI);

export default router;
