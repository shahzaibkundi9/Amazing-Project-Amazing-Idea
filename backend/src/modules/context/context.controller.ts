// Roman Urdu: WhatsApp bot ke liye context return karta hai

import { Request, Response } from "express";
import { ContextService } from "./context.service";

export const ContextController = {
  getUserContext: async (req: Request, res: Response) => {
    const { jid } = req.params;

    const ctx = await ContextService.getContext(jid);

    return res.json({
      success: true,
      data: ctx,
    });
  },
};
