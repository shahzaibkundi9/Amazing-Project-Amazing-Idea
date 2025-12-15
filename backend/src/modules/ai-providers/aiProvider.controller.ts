import { Request, Response } from "express";
import { AIProviderService } from "./aiProvider.service";

export const AIProviderController = {
  list: async (req: Request, res: Response) => {
    const providers = await AIProviderService.getAll();
    return res.json({ success: true, data: providers });
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const updated = await AIProviderService.updateProvider(id, req.body);
    return res.json({ success: true, data: updated });
  },
};
