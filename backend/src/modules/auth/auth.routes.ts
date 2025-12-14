// Roman Urdu Comment: Auth endpoints define karta hai

import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validate } from "../../middleware/validate.middleware";
import { registerSchema, loginSchema } from "./auth.schema";
import { requireAuth } from "../../middleware/auth.middleware";

const router = Router();

router.post("/register", validate(registerSchema), AuthController.register);
router.post("/login", validate(loginSchema), AuthController.login);
router.get("/me", requireAuth, AuthController.me);

export default router;
