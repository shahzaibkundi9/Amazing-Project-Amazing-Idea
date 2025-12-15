import { Request, Response } from "express";
import { AnalyticsService } from "./analytics.service";

export const AnalyticsController = {
  dashboard: async (req: Request, res: Response) => {
    const data = await AnalyticsService.getDashboardData();
    res.json({ success: true, data });
  },
};
