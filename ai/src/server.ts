// Roman Urdu: AI server jo backend ko responses provide karta hai

import express from "express";
import cors from "cors";
import { AISelector } from "./rotation/selector";
import { logger } from "./utils/logger";
import { SafetyFilter } from "./safety/safety.filter";
import { detectLanguage } from "./utils/detect-language";
import { ContextManager } from "./context/context.manager";

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: "10mb" }));

  app.post("/api/ai/ask", async (req, res) => {
    try {
      const { userId, message, history = [], metadata = {} } = req.body;

      // 1️⃣ Detect language
      const lang = detectLanguage(message);

      // 2️⃣ Load conversation context
      const context = ContextManager.load(userId);

      // 3️⃣ Select AI provider dynamically
      const provider = await AISelector.getProvider();

      // 4️⃣ Generate response
      const reply = await provider.generate({
        message,
        history,
        context,
        lang,
        metadata,
      });

      // 5️⃣ Safety filter
      const safeReply = SafetyFilter.clean(reply);

      // 6️⃣ Update context memory
      ContextManager.update(userId, message, safeReply);

      return res.json({
        success: true,
        data: { message: safeReply },
      });
    } catch (err: any) {
      logger("❌ AI ERROR: " + err.message);
      return res.status(500).json({ success: false, message: "AI Service Error" });
    }
  });

  app.listen(7000, () => logger("🚀 AI Service Running on Port 7000"));
};
