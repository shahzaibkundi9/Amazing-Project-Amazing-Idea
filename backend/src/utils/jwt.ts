// Roman Urdu Comment: JWT sign/verify helper functions.

import jwt from "jsonwebtoken";
import { env } from "../config";

export const generateToken = (payload: object, expiresIn = "7d") => {
  return jwt.sign(payload, env.JWT_SECRET!, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET!);
};
