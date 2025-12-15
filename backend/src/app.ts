// Roman Urdu Comment: Express app ka main setup, middleware, global error handler

import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import * as Sentry from "@sentry/node";

import routes from "./routes";

export const app = express();

// Roman Urdu: Sentry init
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());

app.use(express.json({ limit: "10mb" }));
app.use(helmet());
app.use(compression());

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 200,
  })
);

app.use("/api", routes);

// Roman Urdu: Sentry error handler
app.use(Sentry.Handlers.errorHandler());

app.get("/", (req, res) => {
  res.send("Backend Secure + Monitoring ✔");
});
