// Roman Urdu: Context API route for WhatsApp smart brain

import { Router } from "express";
import { ContextController } from "./context.controller";

const router = Router();

router.get("/:jid", ContextController.getUserContext);

export default router;
