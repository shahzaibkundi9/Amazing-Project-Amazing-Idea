// Roman Urdu Comment: HTTP request handler functions

import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../prisma/client";
import {
  generateAccessToken,
  generateRefreshToken,
} from "./jwt";

export const AuthController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.json({ success: false, message: "User not found" });

    // Roman Urdu: Brute-force protection
    if (user.failedAttempts >= 5 && user.lastFailedAt) {
      const diff = Date.now() - user.lastFailedAt.getTime();
      if (diff < 15 * 60 * 1000) {
        return res.json({
          success: false,
          message: "Too many failed attempts. Try again later.",
        });
      }
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          failedAttempts: { increment: 1 },
          lastFailedAt: new Date(),
        },
      });

      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Reset failed attempts
    await prisma.user.update({
      where: { id: user.id },
      data: { failedAttempts: 0 },
    });

    const access = generateAccessToken({ id: user.id });
    const refresh = generateRefreshToken({ id: user.id });

    return res.json({
      success: true,
      data: {
        accessToken: access,
        refreshToken: refresh,
      },
    });
  },
};
