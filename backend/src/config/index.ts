// Roman Urdu Comment: Env variables load karta hai aur validate karta hai

import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};

if (!env.DATABASE_URL) throw new Error("DATABASE_URL missing in .env");
if (!env.JWT_SECRET) throw new Error("JWT_SECRET missing in .env");
