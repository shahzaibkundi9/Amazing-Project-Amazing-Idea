// Roman Urdu Comment: Yeh HTTP endpoints ka logic handle karta hai

import { Request, Response } from "express";
import { UserService } from "./user.service";

export const UserController = {
  me: async (req: any, res: Response) => {
    const user = await UserService.getProfile(req.user.id);

    return res.json({
      success: true,
      data: user,
    });
  },

  updateProfile: async (req: any, res: Response) => {
    const updated = await UserService.updateProfile(req.user.id, req.body);

    return res.json({
      success: true,
      message: "Profile updated",
      data: updated,
    });
  },

  listUsers: async (req: Request, res: Response) => {
    const users = await UserService.getAllUsers();

    return res.json({
      success: true,
      data: users,
    });
  },
};
