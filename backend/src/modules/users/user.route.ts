// Roman Urdu Comment: Users module ke API endpoints

import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { updateUserSchema } from "./user.schema";
import { UserController } from "./user.controller";

const router = Router();

// Get own profile
router.get("/me", requireAuth, UserController.me);

// Update profile
router.put("/me", requireAuth, validate(updateUserSchema), UserController.updateProfile);

// List all users (Admin-level feature, access control Phase 3E mein add hoga)
router.get("/", requireAuth, UserController.listUsers);

export default router;
