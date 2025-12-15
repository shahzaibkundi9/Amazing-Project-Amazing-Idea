import { Router } from "express";
import { TemplateController } from "./template.controller";

const router = Router();

router.get("/", TemplateController.list);
router.get("/:id", TemplateController.get);
router.post("/", TemplateController.create);
router.put("/:id", TemplateController.update);
router.delete("/:id", TemplateController.delete);

export default router;
