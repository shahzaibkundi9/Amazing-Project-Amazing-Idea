import { Request, Response } from "express";
import { TemplateService } from "./template.service";

export const TemplateController = {
  list: async (req: Request, res: Response) => {
    const list = await TemplateService.list();
    return res.json({ success: true, data: list });
  },

  get: async (req: Request, res: Response) => {
    const template = await TemplateService.get(req.params.id);
    return res.json({ success: true, data: template });
  },

  create: async (req: Request, res: Response) => {
    const template = await TemplateService.create(req.body);
    return res.json({ success: true, data: template });
  },

  update: async (req: Request, res: Response) => {
    const template = await TemplateService.update(req.params.id, req.body);
    return res.json({ success: true, data: template });
  },

  delete: async (req: Request, res: Response) => {
    await TemplateService.remove(req.params.id);
    return res.json({ success: true });
  },
};
