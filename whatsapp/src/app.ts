// Roman Urdu Comment: WhatsApp service ka main entrypoint

import { initClient } from "./client";
import crypto from "crypto";

const ENC_KEY = process.env.SESSION_KEY || crypto.randomBytes(32).toString("hex");

// Roman Urdu: Future — session encryption ke liye key ready
process.env.INTERNAL_SESSION_KEY = ENC_KEY;

(async () => {
  console.log("🚀 WhatsApp Secure Service Booting…");
  await initClient("./sessions");
})();
