// Roman Urdu: AI server jo backend ko responses provide karta hai

import express from "express";
import cors from "cors";
import * as Sentry from "@sentry/node";
import { AISelector } from "./rotation/selector";
import { ContextManager } from "./context/context.manager";

export const startServer = () => {
  const app = express();

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
  });

  app.use(Sentry.Handlers.requestHandler());
  app.use(express.json({ limit: "10mb" }));
  app.use(cors());

  app.post("/api/ai/ask", async (req, res) => {
    try {
      const provider = await AISelector.getProvider();
      const reply = await provider.generate({
        message: req.body.message,
        history: req.body.history,
        metadata: req.body.metadata,
        lang: "auto",
        context: ContextManager.load(req.body.userId),
      });

      return res.json({ success: true, data: { message: reply } });
    } catch (err) {
      Sentry.captureException(err);
      return res.json({ success: false, message: "AI Service Error" });
    }
  });

  app.use(Sentry.Handlers.errorHandler());

  app.listen(7000, () => console.log("AI Service Running + Monitoring ✔"));
};
