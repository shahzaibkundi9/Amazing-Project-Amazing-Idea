import { Router } from "express";
import { UploadController } from "./upload.controller";

const router = Router();

router.post("/screenshot", UploadController.screenshot);

export default router;
