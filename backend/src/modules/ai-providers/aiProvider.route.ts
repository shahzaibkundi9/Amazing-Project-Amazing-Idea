import { Router } from "express";
import { AIProviderController } from "./aiProvider.controller";

const router = Router();

router.get("/", AIProviderController.list);
router.put("/:id", AIProviderController.update);

export default router;
