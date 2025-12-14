// Roman Urdu: Agar session exist karta hai to load karo warna new session banao

import fs from "fs";
import path from "path";

export const loadSession = async () => {
  const sessionPath = path.join(process.cwd(), "sessions");

  if (!fs.existsSync(sessionPath)) {
    fs.mkdirSync(sessionPath, { recursive: true });
  }

  return sessionPath;
};
