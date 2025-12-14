// Roman Urdu Comment: HTTP request handler functions

import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const AuthController = {
  register: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const result = await AuthService.register(name, email, password);

    return res.json({
      success: true,
      message: "Registered successfully",
      data: result,
    });
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await AuthService.login(email, password);

    return res.json({
      success: true,
      message: "Login successful",
      data: result,
    });
  },

  me: async (req: any, res: Response) => {
    const user = await AuthService.me(req.user.id);

    return res.json({
      success: true,
      data: user,
    });
  },
};
