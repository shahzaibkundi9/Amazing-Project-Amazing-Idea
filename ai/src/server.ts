// Roman Urdu: AI server jo backend ko responses provide karta hai

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { AISelector } from "./rotation/selector";
import { logger } from "./utils/logger";
import { SafetyFilter } from "./safety/safety.filter";
import { detectLanguage } from "./utils/detect-language";
import { ContextManager } from "./context/context.manager";

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: "10mb" }));

  // Roman Urdu: AI abuse protection
  app.use(
    rateLimit({
      windowMs: 60 * 1000,
      max: 60,
    })
  );

  app.post("/api/ai/ask", async (req, res) => {
    try {
      const { userId, message } = req.body;

      if (!message || message.length > 500)
        return res.json({ success: false, message: "Invalid message" });

      const lang = detectLanguage(message);

      const context = ContextManager.load(userId);

      const provider = await AISelector.getProvider();

      const reply = await provider.generate({
        message,
        history: req.body.history,
        context,
        lang,
        metadata: req.body.metadata,
      });

      const safe = SafetyFilter.clean(reply);

      ContextManager.update(userId, message, safe);

      return res.json({ success: true, data: { message: safe } });
    } catch (err) {
      logger("AI Error: " + err);
      return res.json({
        success: false,
        message: "AI processing failure. Try again.",
      });
    }
  });

  app.listen(7000, () => logger("🔥 AI Service Live & Secured"));
};
