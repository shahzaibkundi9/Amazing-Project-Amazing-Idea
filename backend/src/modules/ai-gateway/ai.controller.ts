// Roman Urdu Comment: HTTP endpoints ke controller functions

import { Request, Response } from "express";
import { AIService } from "./ai.service";

export const AIController = {
  askAI: async (req: any, res: Response) => {
    const { message, history, metadata } = req.body;

    const reply = await AIService.processMessage(
      req.user.id,
      message,
      history,
      metadata
    );

    return res.json({
      success: true,
      data: reply,
    });
  },
};
