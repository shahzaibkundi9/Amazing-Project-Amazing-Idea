import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

// Roman Urdu: Access token — short life (5 minutes)
export const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "5m" });
};

// Roman Urdu: Refresh token — long life (7 days)
export const generateRefreshToken = (payload: any) => {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });
};

// Roman Urdu: Token verify helpers
export const verifyAccessToken = (token: string) =>
  jwt.verify(token, ACCESS_SECRET);

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, REFRESH_SECRET);
