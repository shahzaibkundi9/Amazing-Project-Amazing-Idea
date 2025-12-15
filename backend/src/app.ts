// Roman Urdu Comment: Express app ka main setup, middleware, global error handler

import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xssClean from "xss-clean";
import hpp from "hpp";

import routes from "./routes";

export const app = express();

// Roman Urdu: Basic express setup
app.use(express.json({ limit: "10mb" }));

// Roman Urdu: Global security headers
app.use(helmet());

// Roman Urdu: Remove tech fingerprints
app.disable("x-powered-by");

// Roman Urdu: CORS strict mode
app.use(
  cors({
    origin: ["https://your-frontend.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Roman Urdu: Compress responses (performance boost)
app.use(compression());

// Roman Urdu: Rate limiter — DDoS aur abuse rokta hai
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 120, // per user limit
    message: "Too many requests. Try again later.",
  })
);

// Roman Urdu: Query pollution se bachav (HPP attack prevention)
app.use(hpp());

// Roman Urdu: Mongo injection/XSS filtering (even if using SQL)
app.use(mongoSanitize());
app.use(xssClean());

// Roman Urdu: Routes attach
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Secure Backend Running ✔");
});
