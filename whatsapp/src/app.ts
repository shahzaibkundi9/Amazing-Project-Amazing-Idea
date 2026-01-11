// Roman Urdu Comment: WhatsApp service ka main entrypoint
import express from "express";
import { initClient } from "./client";
import crypto from "crypto";

const ENC_KEY = process.env.SESSION_KEY || crypto.randomBytes(32).toString("hex");

// Roman Urdu: Future — session encryption ke liye key ready
process.env.INTERNAL_SESSION_KEY = ENC_KEY;

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", whatsapp: "running", time: Date.now() });
});

app.listen(9000, () => console.log("WhatsApp Monitor Running ✔"));

(async () => {
  console.log("🚀 WhatsApp Secure Service Booting…");
  await initClient("./sessions");
})();
