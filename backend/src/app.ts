// Roman Urdu Comment: Express app ka main setup, middleware, global error handler

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimiter from "./middleware/rate-limit.middleware";
import { errorHandler } from "./middleware/error.middleware";
import routes from "./routes";

export const app = express();

// Security headers
app.use(helmet());

// CORS allow
app.use(cors());

// Body parser
app.use(express.json({ limit: "10mb" }));

// Rate limiting
app.use(rateLimiter);

// Routes
app.use("/api", routes);

// Global error handler
app.use(errorHandler);
