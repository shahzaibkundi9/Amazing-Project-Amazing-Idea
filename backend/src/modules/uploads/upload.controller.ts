import { Request, Response } from "express";
import { UploadService } from "./upload.service";

export const UploadController = {
  screenshot: async (req: Request, res: Response) => {
    const { file } = req.body;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Screenshot file required",
      });
    }

    const url = await UploadService.uploadScreenshot(file);

    return res.json({
      success: true,
      url,
    });
  },
};
