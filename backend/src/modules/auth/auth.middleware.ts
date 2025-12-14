// Roman Urdu Comment: Protected routes ke liye JWT verify karta hai

import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const requireAuth = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const decoded: any = verifyToken(token);
    req.user = { id: decoded.id };
    next();
  } catch {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
